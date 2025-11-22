const trades = [
  {
    id: 1,
    pair: 'EUR/USD',
    side: 'buy',
    price: 1.0834,
    midPrice: 1.0831,
    markPrice: 1.0842,
    notional: 26_000_000,
    timestamp: '08:10',
    clientSegment: 'Tier 1 Banks',
    hedged: true,
    liquidity: 'ECN',
  },
  {
    id: 2,
    pair: 'GBP/USD',
    side: 'sell',
    price: 1.2655,
    midPrice: 1.265,
    markPrice: 1.2628,
    notional: 14_500_000,
    timestamp: '08:22',
    clientSegment: 'Asset Managers',
    hedged: true,
    liquidity: 'Primary Dealer',
  },
  {
    id: 3,
    pair: 'USD/JPY',
    side: 'buy',
    price: 153.84,
    midPrice: 153.82,
    markPrice: 153.70,
    notional: 18_100_000,
    timestamp: '08:36',
    clientSegment: 'Hedge Funds',
    hedged: false,
    liquidity: 'ECN',
  },
  {
    id: 4,
    pair: 'EUR/USD',
    side: 'sell',
    price: 1.0838,
    midPrice: 1.0834,
    markPrice: 1.0840,
    notional: 22_000_000,
    timestamp: '09:05',
    clientSegment: 'Corporates',
    hedged: true,
    liquidity: 'Regional Dealer',
  },
  {
    id: 5,
    pair: 'USD/CAD',
    side: 'buy',
    price: 1.3642,
    midPrice: 1.3646,
    markPrice: 1.3635,
    notional: 9_300_000,
    timestamp: '09:16',
    clientSegment: 'Corporates',
    hedged: false,
    liquidity: 'ECN',
  },
  {
    id: 6,
    pair: 'GBP/USD',
    side: 'buy',
    price: 1.2664,
    midPrice: 1.266,
    markPrice: 1.2680,
    notional: 11_700_000,
    timestamp: '09:43',
    clientSegment: 'Asset Managers',
    hedged: true,
    liquidity: 'Primary Dealer',
  },
  {
    id: 7,
    pair: 'USD/JPY',
    side: 'sell',
    price: 153.73,
    midPrice: 153.71,
    markPrice: 153.52,
    notional: 8_800_000,
    timestamp: '10:01',
    clientSegment: 'Tier 1 Banks',
    hedged: true,
    liquidity: 'ECN',
  },
  {
    id: 8,
    pair: 'EUR/JPY',
    side: 'buy',
    price: 166.24,
    midPrice: 166.21,
    markPrice: 166.35,
    notional: 7_200_000,
    timestamp: '10:24',
    clientSegment: 'Hedge Funds',
    hedged: false,
    liquidity: 'Primary Dealer',
  },
  {
    id: 9,
    pair: 'EUR/GBP',
    side: 'sell',
    price: 0.8558,
    midPrice: 0.8556,
    markPrice: 0.8564,
    notional: 5_900_000,
    timestamp: '10:41',
    clientSegment: 'Corporates',
    hedged: true,
    liquidity: 'Regional Dealer',
  },
];

const orderBook = {
  pair: 'EUR/USD',
  bids: [
    { price: 1.0830, size: 9.5 },
    { price: 1.0829, size: 7.8 },
    { price: 1.0828, size: 6.1 },
    { price: 1.0827, size: 4.6 },
    { price: 1.0826, size: 3.2 },
  ],
  asks: [
    { price: 1.0832, size: 9.0 },
    { price: 1.0833, size: 7.1 },
    { price: 1.0834, size: 5.9 },
    { price: 1.0835, size: 4.2 },
    { price: 1.0836, size: 3.0 },
  ],
};

const historicalVaRReturns = [
  -0.0042, -0.0025, -0.0039, 0.0016, -0.0022, 0.0009, 0.0011, -0.0013, 0.0028,
  -0.0004, -0.0021, 0.0019, -0.0018, 0.0006, 0.0012, -0.0031, 0.0024, -0.0011,
  0.0008, -0.0027,
];

const currencyLimits = {
  EUR: 100_000_000,
  USD: 140_000_000,
  GBP: 80_000_000,
  JPY: 180_000_000,
  CAD: 60_000_000,
};

function formatMoney(value, currency = 'USD') {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: value >= 1_000_000 ? 0 : 2,
  });
  return formatter.format(value);
}

function formatNumber(value, decimals = 1) {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

function computeSpreadBps(trade) {
  const direction = trade.side === 'buy' ? 1 : -1;
  return ((trade.price - trade.midPrice) / trade.midPrice) * 10_000 * direction;
}

function computeTradePnl(trade) {
  const direction = trade.side === 'buy' ? 1 : -1;
  const priceDelta = (trade.markPrice - trade.price) * direction;
  return priceDelta * trade.notional;
}

function aggregateMetrics(tradesData) {
  const totals = tradesData.reduce(
    (acc, trade) => {
      const spreadBps = computeSpreadBps(trade);
      const pnl = computeTradePnl(trade);
      const spreadPnl = (spreadBps / 10_000) * trade.notional;
      acc.volume += trade.notional;
      acc.trades += 1;
      acc.spreadBpsSum += spreadBps * trade.notional;
      acc.spreadNotional += trade.notional;
      acc.realizedPnl += pnl;
      acc.spreadRevenue += spreadPnl;
      if (!trade.hedged) acc.unhedgedNotional += trade.notional;
      acc.hedgedTrades += trade.hedged ? 1 : 0;
      return acc;
    },
    {
      volume: 0,
      trades: 0,
      spreadBpsSum: 0,
      spreadNotional: 0,
      realizedPnl: 0,
      spreadRevenue: 0,
      unhedgedNotional: 0,
      hedgedTrades: 0,
    }
  );

  const avgSpread = totals.spreadBpsSum / totals.spreadNotional;
  const fillRate = (totals.hedgedTrades / totals.trades) * 100;
  const hedgingCost = totals.spreadRevenue * 0.42;
  const netPnl = totals.spreadRevenue - hedgingCost + totals.realizedPnl;

  return {
    ...totals,
    avgSpread,
    fillRate,
    hedgingCost,
    netPnl,
  };
}

function computeDepthMetrics(book) {
  const sum = (levels) => levels.reduce((acc, l) => acc + l.size, 0);
  const bestBid = book.bids[0];
  const bestAsk = book.asks[0];
  const mid = (bestBid.price + bestAsk.price) / 2;
  const spread = (bestAsk.price - bestBid.price) * 10_000;
  const imbalance = ((sum(book.bids) - sum(book.asks)) / (sum(book.bids) + sum(book.asks))) * 100;

  return {
    bestBid,
    bestAsk,
    mid,
    spread,
    imbalance,
    depth: {
      bids: sum(book.bids),
      asks: sum(book.asks),
    },
  };
}

function computeClientAnalytics(tradesData) {
  const groups = {};
  tradesData.forEach((trade) => {
    const spreadBps = computeSpreadBps(trade);
    const pnl = computeTradePnl(trade);
    if (!groups[trade.clientSegment]) {
      groups[trade.clientSegment] = {
        notional: 0,
        trades: 0,
        spreadBpsSum: 0,
        spreadNotional: 0,
        pnl: 0,
        hedged: 0,
      };
    }
    const g = groups[trade.clientSegment];
    g.notional += trade.notional;
    g.trades += 1;
    g.pnl += pnl;
    g.spreadBpsSum += spreadBps * trade.notional;
    g.spreadNotional += trade.notional;
    g.hedged += trade.hedged ? 1 : 0;
  });

  const totalNotional = Object.values(groups).reduce((acc, g) => acc + g.notional, 0);
  return Object.entries(groups).map(([segment, data]) => ({
    segment,
    share: (data.notional / totalNotional) * 100,
    avgSpread: data.spreadBpsSum / data.spreadNotional,
    pnl: data.pnl,
    hedgingRatio: (data.hedged / data.trades) * 100,
    notional: data.notional,
  }));
}

function computeExposure(tradesData) {
  const exposures = {};
  tradesData.forEach((trade) => {
    const [base, quote] = trade.pair.split('/');
    const baseAmount = trade.side === 'buy' ? trade.notional : -trade.notional;
    exposures[base] = (exposures[base] || 0) + baseAmount;
    exposures[quote] = (exposures[quote] || 0) - baseAmount * trade.price;
  });
  return exposures;
}

function historicalVaR(returns, portfolioValue, percentile = 0.99) {
  const sorted = [...returns].sort((a, b) => a - b);
  const index = Math.floor((1 - percentile) * sorted.length);
  const quantile = sorted[index];
  return Math.abs(quantile * portfolioValue);
}

function generateInsights(metrics) {
  const insights = [];
  if (metrics.avgSpread < 0.4) {
    insights.push('Execution quality strong: average spread below 0.4 bps across routed flow.');
  } else {
    insights.push('Spreads elevated; check ECN streams and primary dealers for price refresh.');
  }
  if (metrics.fillRate > 85) {
    insights.push(`High fill rate (${metrics.fillRate.toFixed(1)}%) with balanced hedging coverage.`);
  } else {
    insights.push('Fill rate softening; review resting orders and top-of-book skew.');
  }
  if (metrics.unhedgedNotional > metrics.volume * 0.15) {
    insights.push('Unhedged notionals above policy threshold—prioritize delta-neutral balancing.');
  } else {
    insights.push('Hedging program stable with residual open risk within tolerance.');
  }
  return insights;
}

function renderDepth(container, levels, type) {
  const maxSize = Math.max(...levels.map((l) => l.size));
  container.innerHTML = '';
  levels.forEach((level) => {
    const row = document.createElement('div');
    row.className = 'depth-row';
    row.innerHTML = `
      <span>${level.price.toFixed(4)}</span>
      <div class="depth-bar ${type}"><div class="fill" style="transform: scaleX(${level.size / maxSize})"></div></div>
      <span>${formatNumber(level.size, 1)}m</span>
    `;
    container.appendChild(row);
  });
}

function renderClientCards(data) {
  const grid = document.getElementById('clientGrid');
  grid.innerHTML = '';
  data.forEach((client) => {
    const card = document.createElement('div');
    card.className = 'client-card';
    card.innerHTML = `
      <div class="metric-row"><strong>${client.segment}</strong><span class="badge ${client.pnl >= 0 ? 'success' : 'danger'}">${client.pnl >= 0 ? 'Margin' : 'Loss'}</span></div>
      <div class="metric-row"><span>Notional</span><span>${formatMoney(client.notional)}</span></div>
      <div class="metric-row"><span>Avg Spread</span><span>${client.avgSpread.toFixed(2)} bps</span></div>
      <div class="metric-row"><span>Desk P&L</span><span>${formatMoney(client.pnl)}</span></div>
      <div class="metric-row"><span>Hedging Ratio</span><span>${client.hedgingRatio.toFixed(1)}%</span></div>
      <div class="metric-row"><span>Volume Share</span><span>${client.share.toFixed(1)}%</span></div>
    `;
    grid.appendChild(card);
  });
}

function renderExposure(exposures) {
  const grid = document.getElementById('exposureGrid');
  grid.innerHTML = '';
  Object.entries(exposures).forEach(([ccy, value]) => {
    const limit = currencyLimits[ccy] || 80_000_000;
    const utilization = Math.min(Math.abs(value) / limit, 1);
    const card = document.createElement('div');
    card.className = 'exposure-card';
    const badgeClass = utilization < 0.5 ? 'success' : utilization < 0.8 ? 'warning' : 'danger';
    card.innerHTML = `
      <div class="metric-row"><strong>${ccy}</strong><span class="badge ${badgeClass}">${(utilization * 100).toFixed(0)}% limit</span></div>
      <div class="metric-row"><span>Net Position</span><span>${formatMoney(value)}</span></div>
      <div class="metric-row"><span>Risk Limit</span><span>${formatMoney(limit)}</span></div>
      <div class="bar bar-blue" style="height: 8px"><span style="width: ${utilization * 100}%"></span></div>
    `;
    grid.appendChild(card);
  });
}

function renderRiskAnalytics(metrics, exposures) {
  const riskContainer = document.getElementById('riskMetrics');
  riskContainer.innerHTML = '';
  const portfolioValue = Object.values(exposures).reduce((acc, v) => acc + Math.abs(v), 0);
  const var99 = historicalVaR(historicalVaRReturns, portfolioValue, 0.99);
  const var95 = historicalVaR(historicalVaRReturns, portfolioValue, 0.95);
  const stressScenario = var99 * 1.6;

  const items = [
    { label: 'VaR 99%', value: formatMoney(var99), tone: 'success' },
    { label: 'VaR 95%', value: formatMoney(var95), tone: 'info' },
    { label: 'Stress Loss', value: formatMoney(stressScenario), tone: 'danger' },
    { label: 'Hedging Cost', value: formatMoney(metrics.hedgingCost), tone: 'warning' },
  ];

  items.forEach((item) => {
    const pill = document.createElement('div');
    pill.className = 'metric-pill';
    pill.innerHTML = `<span class="label">${item.label}</span><strong>${item.value}</strong>`;
    riskContainer.appendChild(pill);
  });

  document.getElementById('stressScenario').innerHTML = `
    <div class="metric-row"><strong>Scenario: 80bp USDJPY spike</strong><span class="badge warning">Liquidity stress</span></div>
    <div class="metric-row"><span>Projected P&L impact</span><span>${formatMoney(metrics.realizedPnl - stressScenario)}</span></div>
    <div class="metric-row"><span>Margin call headroom</span><span>${formatMoney(portfolioValue * 0.12)}</span></div>
  `;
}

function renderLiquidityMetrics(depthMetrics) {
  const container = document.getElementById('liquidityMetrics');
  container.innerHTML = '';
  const metrics = [
    {
      label: 'Top-of-book spread',
      value: `${depthMetrics.spread.toFixed(1)} bps`,
      detail: 'Best bid / ask differential',
    },
    {
      label: 'Liquidity imbalance',
      value: `${depthMetrics.imbalance.toFixed(1)}%`,
      detail: 'Bid vs ask depth',
    },
    {
      label: 'Total depth',
      value: `${formatNumber(depthMetrics.depth.bids + depthMetrics.depth.asks, 1)}m`,
      detail: 'Across first 5 levels',
    },
    {
      label: 'Mid price',
      value: depthMetrics.mid.toFixed(4),
      detail: `Bid ${depthMetrics.bestBid.price.toFixed(4)} / Ask ${depthMetrics.bestAsk.price.toFixed(4)}`,
    },
  ];

  metrics.forEach((metric) => {
    const pill = document.createElement('div');
    pill.className = 'metric-pill';
    pill.innerHTML = `<span class="label">${metric.label}</span><strong>${metric.value}</strong><span class="muted">${metric.detail}</span>`;
    container.appendChild(pill);
  });
}

function renderPnlAttribution(metrics) {
  const { spreadRevenue, hedgingCost, netPnl } = metrics;
  const max = Math.max(Math.abs(spreadRevenue), Math.abs(hedgingCost), Math.abs(netPnl));

  document.getElementById('spreadRevenueBar').style.setProperty('--value', spreadRevenue / max);
  document.getElementById('spreadRevenue').textContent = formatMoney(spreadRevenue);

  document.getElementById('hedgingCostsBar').style.setProperty('--value', hedgingCost / max);
  document.getElementById('hedgingCosts').textContent = `-${formatMoney(hedgingCost)}`;

  document.getElementById('netPnlBar').style.setProperty('--value', netPnl / max);
  document.getElementById('netPnl').textContent = formatMoney(netPnl);

  const bars = [
    { id: 'spreadRevenueBar', value: spreadRevenue },
    { id: 'hedgingCostsBar', value: hedgingCost },
    { id: 'netPnlBar', value: netPnl },
  ];
  bars.forEach((bar) => {
    const el = document.getElementById(bar.id);
    el.style.setProperty('--value', Math.abs(bar.value / max));
    el.style.setProperty('--direction', bar.value >= 0 ? 1 : -1);
    el.style.setProperty('overflow', 'hidden');
    el.innerHTML = `<div class="fill" style="transform: scaleX(${Math.abs(bar.value / max)})"></div>`;
  });
}

function renderKpis(metrics) {
  document.getElementById('realizedPnl').textContent = formatMoney(metrics.realizedPnl);
  document.getElementById('pnlDelta').textContent = `+${(metrics.realizedPnl / metrics.volume * 10_000).toFixed(2)} bps`;
  document.getElementById('totalVolume').textContent = formatMoney(metrics.volume);
  document.getElementById('volumeCount').textContent = `${metrics.trades} fills`;
  document.getElementById('executionQuality').textContent = `${metrics.avgSpread.toFixed(2)} bps`;
  document.getElementById('fillRate').textContent = `${metrics.fillRate.toFixed(1)}% hedged`;
  document.getElementById('spreadPnl').textContent = formatMoney(metrics.spreadRevenue);
  document.getElementById('spreadDelta').textContent = `${(metrics.spreadRevenue / metrics.volume * 10_000).toFixed(2)} bps capture`;
}

function renderInsights(insights, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  insights.forEach((text) => {
    const p = document.createElement('div');
    p.textContent = `• ${text}`;
    container.appendChild(p);
  });
}

function updateTime() {
  const now = new Date();
  const londonTime = now.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/London',
  });
  document.getElementById('londonTime').textContent = londonTime;
}

function bootstrap() {
  updateTime();
  setInterval(updateTime, 10_000);

  const metrics = aggregateMetrics(trades);
  const depthMetrics = computeDepthMetrics(orderBook);
  const clientAnalytics = computeClientAnalytics(trades);
  const exposures = computeExposure(trades);

  renderKpis(metrics);
  renderPnlAttribution(metrics);
  renderDepth(document.getElementById('bidDepth'), orderBook.bids, 'bid');
  renderDepth(document.getElementById('askDepth'), orderBook.asks, 'ask');
  renderLiquidityMetrics(depthMetrics);
  renderClientCards(clientAnalytics);
  renderExposure(exposures);
  renderRiskAnalytics(metrics, exposures);

  const pnlInsightText = [
    `Spread revenue represents ${(metrics.spreadRevenue / metrics.volume * 10_000).toFixed(2)} bps capture across routed flow.`,
    `Hedging costs consume ${(metrics.hedgingCost / metrics.spreadRevenue * 100).toFixed(0)}% of spread gains, leaving ${formatMoney(metrics.netPnl)} net.`,
    metrics.realizedPnl >= 0
      ? 'Mark-to-market gains coming from USD longs versus JPY shorts; watch BOJ commentary.'
      : 'Mark-to-market losses from USD longs; consider tightening skew or reducing overnight risk.',
  ];
  renderInsights(pnlInsightText, 'pnlInsights');
  renderInsights(generateInsights(metrics), 'riskInsights');
}

document.addEventListener('DOMContentLoaded', bootstrap);
