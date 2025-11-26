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

const orderBooks = {
  'EUR/USD': {
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
  },
  'GBP/USD': {
    pair: 'GBP/USD',
    bids: [
      { price: 1.2659, size: 8.4 },
      { price: 1.2657, size: 6.2 },
      { price: 1.2655, size: 5.7 },
      { price: 1.2653, size: 4.1 },
      { price: 1.2651, size: 2.9 },
    ],
    asks: [
      { price: 1.2661, size: 7.5 },
      { price: 1.2663, size: 6.8 },
      { price: 1.2665, size: 5.4 },
      { price: 1.2667, size: 3.7 },
      { price: 1.2669, size: 2.8 },
    ],
  },
  'USD/JPY': {
    pair: 'USD/JPY',
    bids: [
      { price: 153.7, size: 12.5 },
      { price: 153.69, size: 9.2 },
      { price: 153.68, size: 7.8 },
      { price: 153.67, size: 5.9 },
      { price: 153.66, size: 4.4 },
    ],
    asks: [
      { price: 153.72, size: 11.4 },
      { price: 153.73, size: 8.9 },
      { price: 153.74, size: 7.2 },
      { price: 153.75, size: 5.4 },
      { price: 153.76, size: 3.6 },
    ],
  },
};

const providerPerformance = [
  { name: 'JPM ECN', hitRate: 93, responseMs: 42, skew: '-0.2', market: 'EUR/USD' },
  { name: 'Citi Velocity', hitRate: 88, responseMs: 55, skew: '+0.1', market: 'EUR/USD' },
  { name: 'XTX', hitRate: 91, responseMs: 39, skew: '-0.1', market: 'GBP/USD' },
  { name: 'Jump', hitRate: 86, responseMs: 47, skew: '+0.3', market: 'GBP/USD' },
  { name: 'Goldman Marquee', hitRate: 84, responseMs: 61, skew: '+0.1', market: 'USD/JPY' },
  { name: 'UBS Neo', hitRate: 89, responseMs: 58, skew: '-0.3', market: 'USD/JPY' },
];

const behaviorPatterns = [
  { label: 'Average holding period', value: '2h 40m', detail: 'Short-dated hedges' },
  { label: 'Forward vs spot', value: '34% forwards', detail: 'Higher tenor demand in corporates' },
  { label: 'Hedge take-up', value: '78%', detail: 'Auto-hedge success rate' },
  { label: 'Algo participation', value: '61%', detail: 'Passive slices via TWAP' },
];

const controlChecks = [
  { name: 'Market data freshness', status: 'Pass', detail: 'All feeds < 1200ms', time: 'Now' },
  { name: 'Price band validation', status: 'Pass', detail: 'No stale ticks detected', time: 'Now' },
  { name: 'Settlement breaks', status: 'Watch', detail: '1 CLS mismatch flagged', time: 'Last hour' },
  { name: 'Hedge booking latency', status: 'Pass', detail: 'Avg 380ms', time: 'Last hour' },
];

const runbookEntries = [
  { name: 'Circuit breaker', owner: 'Treasury Ops', status: 'Armed', detail: 'Skew > 50% disables auto-quote' },
  { name: 'Retry policy', owner: 'Connectivity', status: 'Active', detail: '3 retries @ 250ms backoff' },
  { name: 'Failover pricing', owner: 'Quant', status: 'Ready', detail: 'Falls back to composite mid' },
  { name: 'Settlement roll-forward', owner: 'Payments', status: 'Ready', detail: 'Auto-extend if CLS cutoff breached' },
];

const historicalVaRReturns = [
  -0.0042, -0.0025, -0.0039, 0.0016, -0.0022, 0.0009, 0.0011, -0.0013, 0.0028, -0.0004, -0.0021,
  0.0019, -0.0018, 0.0006, 0.0012, -0.0031, 0.0024, -0.0011, 0.0008, -0.0027,
];

const currencyLimits = {
  EUR: 100_000_000,
  USD: 140_000_000,
  GBP: 80_000_000,
  JPY: 180_000_000,
  CAD: 60_000_000,
};

const fundingCurves = {
  USD: -0.0006,
  EUR: -0.0003,
  GBP: -0.0004,
  JPY: -0.0001,
  CAD: -0.0005,
};

const settlementBook = [
  { valueDate: 'T+2', ccy: 'EUR', amount: -18_000_000, counterparty: 'BNP Paribas', note: 'Spot leg hedge', type: 'Pay' },
  { valueDate: 'T+2', ccy: 'USD', amount: 22_500_000, counterparty: 'JPM', note: 'Client deliverable', type: 'Receive' },
  { valueDate: 'T+3', ccy: 'JPY', amount: -12_700_000, counterparty: 'Nomura', note: 'Forward roll', type: 'Pay' },
  { valueDate: 'T+3', ccy: 'GBP', amount: 9_400_000, counterparty: 'Barclays', note: 'Corporate hedge', type: 'Receive' },
  { valueDate: 'T+3', ccy: 'EUR', amount: -6_200_000, counterparty: 'Deutsche', note: 'Swap unwind', type: 'Pay' },
];

const intradayLadder = [
  { time: '09:00', book: 'CLS prefund', net: -5_200_000, note: 'CLS paydowns' },
  { time: '11:00', book: 'Client settlements', net: 7_800_000, note: 'EUR receipts' },
  { time: '13:00', book: 'Margin', net: -3_400_000, note: 'Futures variation margin' },
  { time: '15:00', book: 'Funding rolls', net: 6_100_000, note: 'USD roll returns' },
  { time: '17:00', book: 'Nostro sweep', net: -2_250_000, note: 'Cash sweep to HQ' },
];

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

function computeHedgeCoverage(tradesData, exposures) {
  const hedged = {};
  tradesData.forEach((trade) => {
    if (!trade.hedged) return;
    const [base] = trade.pair.split('/');
    const baseAmount = trade.side === 'buy' ? trade.notional : -trade.notional;
    hedged[base] = (hedged[base] || 0) + baseAmount;
  });

  return Object.entries(exposures).map(([ccy, net]) => {
    const hedgedAmt = hedged[ccy] || 0;
    const coverage = Math.min(Math.abs(hedgedAmt) / Math.abs(net || 1), 1);
    return {
      ccy,
      net,
      hedged: hedgedAmt,
      coverage,
    };
  });
}

function computeFundingImpact(exposures) {
  let total = 0;
  const perCcy = Object.entries(exposures).map(([ccy, amount]) => {
    const rate = fundingCurves[ccy] || 0;
    const impact = amount * rate;
    total += impact;
    return { ccy, rate, impact };
  });
  return { total, perCcy };
}

function computeSettlementTotals(book) {
  const byDate = {};
  book.forEach((item) => {
    if (!byDate[item.valueDate]) {
      byDate[item.valueDate] = { inflows: 0, outflows: 0 };
    }
    if (item.amount >= 0) {
      byDate[item.valueDate].inflows += item.amount;
    } else {
      byDate[item.valueDate].outflows += Math.abs(item.amount);
    }
  });
  return byDate;
}

function computeCounterpartyConcentration(book) {
  const totals = {};
  book.forEach((item) => {
    totals[item.counterparty] = (totals[item.counterparty] || 0) + item.amount;
  });
  return Object.entries(totals).sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]));
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
  if (!container) return;
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

function renderClientCards(data, containerId = 'clientGrid') {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = '';
  data.forEach((client) => {
    const card = document.createElement('div');
    card.className = 'client-card';
    card.innerHTML = `
      <div class="metric-row"><strong>${client.segment}</strong><span class="badge ${client.pnl >= 0 ? 'success' : 'danger'}">${
      client.pnl >= 0 ? 'Margin' : 'Loss'}</span></div>
      <div class="metric-row"><span>Notional</span><span>${formatMoney(client.notional)}</span></div>
      <div class="metric-row"><span>Avg Spread</span><span>${client.avgSpread.toFixed(2)} bps</span></div>
      <div class="metric-row"><span>Desk P&L</span><span>${formatMoney(client.pnl)}</span></div>
      <div class="metric-row"><span>Hedging Ratio</span><span>${client.hedgingRatio.toFixed(1)}%</span></div>
      <div class="metric-row"><span>Volume Share</span><span>${client.share.toFixed(1)}%</span></div>
    `;
    grid.appendChild(card);
  });
}

function renderExposure(exposures, containerId = 'exposureGrid') {
  const grid = document.getElementById(containerId);
  if (!grid) return;
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

function renderCoverage(coverageData, containerId = 'coverageGrid') {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = '';
  coverageData.forEach((row) => {
    const badgeClass = row.coverage > 0.9 ? 'success' : row.coverage > 0.7 ? 'warning' : 'danger';
    const card = document.createElement('div');
    card.className = 'coverage-card';
    card.innerHTML = `
      <div class="metric-row"><strong>${row.ccy}</strong><span class="badge ${badgeClass}">${(row.coverage * 100).toFixed(0)}% hedged</span></div>
      <div class="metric-row"><span>Net</span><span>${formatMoney(row.net)}</span></div>
      <div class="metric-row"><span>Hedged</span><span>${formatMoney(row.hedged)}</span></div>
      <div class="bar bar-green" style="height: 6px"><span style="width: ${row.coverage * 100}%"></span></div>
    `;
    grid.appendChild(card);
  });
}

function renderFunding(fundingImpact, settlementTotals) {
  const fundingImpactEl = document.getElementById('fundingImpact');
  const liquidityBufferEl = document.getElementById('liquidityBuffer');
  const collateralHeadroomEl = document.getElementById('collateralHeadroom');
  const fundingMetricsEl = document.getElementById('fundingMetrics');

  if (fundingImpactEl) fundingImpactEl.textContent = `${fundingImpact.total >= 0 ? '+' : ''}${formatMoney(fundingImpact.total)}`;

  const t2 = settlementTotals['T+2'] || { inflows: 0, outflows: 0 };
  const buffer = t2.inflows - t2.outflows;
  if (liquidityBufferEl) liquidityBufferEl.textContent = `${buffer >= 0 ? 'Surplus' : 'Shortfall'} ${formatMoney(buffer)}`;
  if (collateralHeadroomEl) collateralHeadroomEl.textContent = formatMoney(Math.max(buffer * 0.25, 4_500_000));

  if (fundingMetricsEl) {
    fundingMetricsEl.innerHTML = '';
    fundingImpact.perCcy.forEach((item) => {
      const pill = document.createElement('div');
      pill.className = 'metric-pill';
      const tone = item.impact <= 0 ? 'muted' : 'danger';
      pill.innerHTML = `<span class="label">${item.ccy} swap</span><strong class="${tone}">${formatMoney(item.impact)}</strong><span class="muted">${(item.rate * 10_000).toFixed(1)} bps</span>`;
      fundingMetricsEl.appendChild(pill);
    });
  }
}

function renderFundingInsights(fundingImpact, buffer) {
  const insights = [];
  if (fundingImpact.total < 0) {
    insights.push('Carry drag minimal; keep rolls short to avoid negative basis widening.');
  } else {
    insights.push('Funding turning costly; consider swapping into receiving legs or netting with clients.');
  }

  if (buffer > 0) {
    insights.push('Liquidity surplus can fund overnight margins without tapping credit lines.');
  } else {
    insights.push('Shortfall expected; pre-position collateral or advance swaps to T+1.');
  }

  renderInsights(insights, 'fundingInsights');
}

function renderSettlementList(book, containerId = 'settlementList') {
  const list = document.getElementById(containerId);
  if (!list) return;
  list.innerHTML = '';
  book.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'settlement-row';
    row.innerHTML = `
      <div>
        <div class="label">${item.valueDate}</div>
        <div class="muted">${item.note}</div>
      </div>
      <div class="metric-row"><span>${item.counterparty}</span><span class="badge ${item.amount >= 0 ? 'success' : 'danger'}">${item.type}</span></div>
      <div class="metric-row"><span>${item.ccy}</span><strong>${formatMoney(item.amount)}</strong></div>
    `;
    list.appendChild(row);
  });
}

function renderLiquidityLadder(buckets) {
  const ladder = document.getElementById('liquidityLadder');
  if (!ladder) return;
  ladder.innerHTML = '';

  buckets.forEach((bucket) => {
    const row = document.createElement('div');
    row.className = 'ladder-row';
    const tone = bucket.net >= 0 ? 'success' : 'danger';
    row.innerHTML = `
      <div>
        <div class="label">${bucket.time}</div>
        <div class="muted">${bucket.book}</div>
      </div>
      <div class="muted">${bucket.note}</div>
      <div class="metric-row"><span class="badge ${tone}">${bucket.net >= 0 ? 'Inflow' : 'Outflow'}</span><strong>${formatMoney(bucket.net)}</strong></div>
    `;
    ladder.appendChild(row);
  });
}

function renderRiskAnalytics(metrics, exposures, options = {}) {
  const { metricsId = 'riskMetrics', scenarioId = 'stressScenario' } = options;
  const riskContainer = document.getElementById(metricsId);
  if (!riskContainer) return;
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

  const scenarioEl = document.getElementById(scenarioId);
  if (scenarioEl) {
    scenarioEl.innerHTML = `
      <div class="metric-row"><strong>Scenario: 80bp USDJPY spike</strong><span class="badge warning">Liquidity stress</span></div>
      <div class="metric-row"><span>Projected P&L impact</span><span>${formatMoney(metrics.realizedPnl - stressScenario)}</span></div>
      <div class="metric-row"><span>Margin call headroom</span><span>${formatMoney(portfolioValue * 0.12)}</span></div>
    `;
  }
}

function renderAlerts(exposures, settlementTotals, containerId = 'alertList') {
  const alerts = [];
  Object.entries(exposures).forEach(([ccy, value]) => {
    const limit = currencyLimits[ccy] || 80_000_000;
    const utilization = Math.abs(value) / limit;
    if (utilization >= 0.8) {
      alerts.push(`${ccy} limit at ${(utilization * 100).toFixed(0)}% — hedge or net with client flow.`);
    }
  });

  const t2 = settlementTotals['T+2'] || { inflows: 0, outflows: 0 };
  if (t2.outflows > t2.inflows) {
    const shortfall = t2.outflows - t2.inflows;
    alerts.push(`T+2 settlement shortfall of ${formatMoney(shortfall)}; pre-fund nostros or roll swaps earlier.`);
  }

  const concentration = computeCounterpartyConcentration(settlementBook);
  if (concentration.length) {
    const [largestName, largestAmount] = concentration[0];
    alerts.push(`Largest counterparty ${largestName} with ${formatMoney(largestAmount)} exposure — consider netting.`);
  }

  renderInsights(alerts, containerId);
}

function renderLiquidityMetrics(depthMetrics, containerId = 'liquidityMetrics') {
  const container = document.getElementById(containerId);
  if (!container) return;
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
  document.getElementById('pnlDelta').textContent = `+${((metrics.realizedPnl / metrics.volume) * 10_000).toFixed(2)} bps`;
  document.getElementById('totalVolume').textContent = formatMoney(metrics.volume);
  document.getElementById('volumeCount').textContent = `${metrics.trades} fills`;
  document.getElementById('executionQuality').textContent = `${metrics.avgSpread.toFixed(2)} bps`;
  document.getElementById('fillRate').textContent = `${metrics.fillRate.toFixed(1)}% hedged`;
  document.getElementById('spreadPnl').textContent = formatMoney(metrics.spreadRevenue);
  document.getElementById('spreadDelta').textContent = `${((metrics.spreadRevenue / metrics.volume) * 10_000).toFixed(2)} bps capture`;
}

function renderInsights(insights, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  insights.forEach((text) => {
    const p = document.createElement('div');
    p.textContent = `• ${text}`;
    container.appendChild(p);
  });
}

function renderProviderTable(pair) {
  const rows = providerPerformance.filter((p) => p.market === pair);
  const table = document.getElementById('providerTable');
  if (!table) return;
  table.innerHTML = rows
    .map(
      (row) => `
      <div class="table-row">
        <span>${row.name}</span>
        <span>${row.hitRate}% hit</span>
        <span>${row.responseMs} ms</span>
        <span class="muted">Skew ${row.skew} bps</span>
      </div>`
    )
    .join('');

  const best = rows.sort((a, b) => b.hitRate - a.hitRate)[0];
  renderInsights([
    `${pair} coverage strongest via ${best.name} with ${best.hitRate}% hit rate and ${best.responseMs}ms response.`,
    'Maintain at least two backup streams to avoid thin liquidity windows.',
  ], 'providerInsights');
}

function estimateSlippage(book, size) {
  const ladder = size > 0 ? book.asks : book.bids;
  let remaining = Math.abs(size);
  let cost = 0;
  let filled = 0;
  ladder.forEach((level) => {
    if (remaining <= 0) return;
    const take = Math.min(level.size, remaining);
    cost += take * level.price;
    filled += take;
    remaining -= take;
  });
  const avgPrice = cost / filled;
  const mid = computeDepthMetrics(book).mid;
  const direction = size > 0 ? 1 : -1;
  const slippageBps = ((avgPrice - mid) / mid) * 10_000 * direction;
  return { avgPrice, slippageBps };
}

function renderSlippageTable(book) {
  const sizes = [5, 10, 25];
  const table = document.getElementById('slippageTable');
  if (!table) return;
  table.innerHTML = sizes
    .map((size) => {
      const buy = estimateSlippage(book, size);
      const sell = estimateSlippage(book, -size);
      return `
        <div class="table-row">
          <span>${size}m</span>
          <span>Buy ${buy.slippageBps.toFixed(2)} bps</span>
          <span>Sell ${sell.slippageBps.toFixed(2)} bps</span>
          <span class="muted">Avg px ${buy.avgPrice.toFixed(4)}</span>
        </div>`;
    })
    .join('');

  renderInsights([
    'Use passive slices above 10m notional to avoid slippage spikes.',
    'Cross ECN vs dealer streams to reduce footprint during thin Asia hours.',
  ], 'slippageNotes');
}

function renderBehaviorTable(clientAnalytics) {
  const table = document.getElementById('behaviorTable');
  if (!table) return;
  const hedged = clientAnalytics.reduce((acc, c) => acc + c.hedgingRatio, 0) / clientAnalytics.length;
  const avgSpread = clientAnalytics.reduce((acc, c) => acc + c.avgSpread, 0) / clientAnalytics.length;
  const rows = [
    ...behaviorPatterns,
    { label: 'Avg hedge ratio', value: `${hedged.toFixed(1)}%`, detail: 'Client-side hedging participation' },
    { label: 'Desk avg spread', value: `${avgSpread.toFixed(2)} bps`, detail: 'Across routed client flow' },
  ];
  table.innerHTML = rows
    .map(
      (row) => `
        <div class="table-row">
          <span>${row.label}</span>
          <span><strong>${row.value}</strong></span>
          <span class="muted">${row.detail}</span>
        </div>`
    )
    .join('');

  renderInsights(
    [
      'Retention highest where hedge take-up exceeds 75%; keep auto-hedge defaults on.',
      'Forward appetite rising in corporates; extend quotes to 6M tenors.',
    ],
    'clientInsights'
  );
}

function renderQualityControls(windowLabel) {
  const table = document.getElementById('qualityTable');
  if (!table) return;
  table.innerHTML = controlChecks
    .map(
      (check) => `
        <div class="table-row">
          <span>${check.name}</span>
          <span class="badge ${check.status === 'Pass' ? 'success' : check.status === 'Watch' ? 'warning' : 'danger'}">${check.status}</span>
          <span class="muted">${check.detail}</span>
          <span class="muted">${windowLabel} window</span>
        </div>`
    )
    .join('');

  renderInsights(
    [
      'Latency and freshness healthy; keep heartbeat monitors at 1s cadence.',
      'Investigate the single CLS mismatch before New York cut-off.',
    ],
    'qualityInsights'
  );
}

function renderRunbooks() {
  const table = document.getElementById('runbookTable');
  if (!table) return;
  table.innerHTML = runbookEntries
    .map(
      (item) => `
        <div class="table-row">
          <span>${item.name}</span>
          <span class="badge info">${item.owner}</span>
          <span>${item.status}</span>
          <span class="muted">${item.detail}</span>
        </div>`
    )
    .join('');

  renderInsights(
    [
      'Runbooks ready for pricing failover; simulate once per week.',
      'Keep circuit breaker thresholds aligned with VaR tolerance.',
    ],
    'runbookInsights'
  );
}

function renderSettlementTable(book) {
  const table = document.getElementById('settlementTable');
  if (!table) return;
  table.innerHTML = book
    .map(
      (row) => `
        <div class="table-row">
          <span>${row.counterparty}</span>
          <span>${row.valueDate}</span>
          <span>${row.ccy}</span>
          <span class="${row.amount >= 0 ? 'success' : 'danger'}">${formatMoney(row.amount)}</span>
        </div>`
    )
    .join('');
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

const periodMultipliers = { '1d': 1, wtd: 3, mtd: 12, ytd: 55 };
const scenarioShocks = { base: 1, hawkish: 1.15, crisis: 1.35 };
let selectedPair = 'EUR/USD';
let selectedPeriod = '1d';
let selectedScenario = 'base';

function scaleMetrics(metrics, periodKey) {
  const factor = periodMultipliers[periodKey] || 1;
  return {
    ...metrics,
    volume: metrics.volume * factor,
    realizedPnl: metrics.realizedPnl * factor,
    spreadRevenue: metrics.spreadRevenue * factor,
    hedgingCost: metrics.hedgingCost * factor,
    netPnl: metrics.netPnl * factor,
  };
}

function applyScenarioExposure(exposures, scenarioKey) {
  const factor = scenarioShocks[scenarioKey] || 1;
  return Object.fromEntries(Object.entries(exposures).map(([ccy, value]) => [ccy, value * factor]));
}

function renderTradingPage(baseMetrics, clientAnalytics, exposures, coverage, fundingImpact, settlementTotals) {
  const metrics = scaleMetrics(baseMetrics, selectedPeriod);
  const book = orderBooks[selectedPair];
  const depthMetrics = computeDepthMetrics(book);

  renderKpis(metrics);
  renderPnlAttribution(metrics);
  renderDepth(document.getElementById('bidDepth'), book.bids, 'bid');
  renderDepth(document.getElementById('askDepth'), book.asks, 'ask');
  renderLiquidityMetrics(depthMetrics);
  renderClientCards(clientAnalytics, 'clientGrid');
  renderExposure(exposures, 'exposureGrid');
  renderRiskAnalytics(metrics, exposures, { metricsId: 'riskMetrics', scenarioId: 'stressScenario' });
  renderCoverage(coverage, 'coverageGrid');
  renderFunding(fundingImpact, settlementTotals);
  renderFundingInsights(fundingImpact, (settlementTotals['T+2']?.inflows || 0) - (settlementTotals['T+2']?.outflows || 0));
  renderSettlementList(settlementBook, 'settlementList');
  renderLiquidityLadder(intradayLadder);
  renderAlerts(exposures, settlementTotals, 'alertList');

  const pnlInsightText = [
    `Spread revenue represents ${((metrics.spreadRevenue / metrics.volume) * 10_000).toFixed(2)} bps capture across routed flow.`,
    `Hedging costs consume ${((metrics.hedgingCost / metrics.spreadRevenue) * 100).toFixed(0)}% of spread gains, leaving ${formatMoney(metrics.netPnl)} net.`,
    metrics.realizedPnl >= 0
      ? 'Mark-to-market gains coming from USD longs versus JPY shorts; watch BOJ commentary.'
      : 'Mark-to-market losses from USD longs; consider tightening skew or reducing overnight risk.',
  ];
  renderInsights(pnlInsightText, 'pnlInsights');
  renderInsights(generateInsights(metrics), 'riskInsights');
}

function renderMarketPage(book) {
  renderDepth(document.getElementById('marketBidDepth'), book.bids, 'bid');
  renderDepth(document.getElementById('marketAskDepth'), book.asks, 'ask');
  renderLiquidityMetrics(computeDepthMetrics(book), 'marketLiquidityMetrics');
  renderProviderTable(book.pair);
  renderSlippageTable(book);
}

function renderClientPage(clientAnalytics) {
  renderClientCards(clientAnalytics, 'clientGridFull');
  renderBehaviorTable(clientAnalytics);
}

function renderRiskPage(baseMetrics, exposures) {
  const scenarioExposure = applyScenarioExposure(exposures, selectedScenario);
  renderExposure(scenarioExposure, 'exposureGridRisk');
  renderRiskAnalytics(baseMetrics, scenarioExposure, { metricsId: 'riskMetricsDetail', scenarioId: 'stressScenarioDetail' });
  renderAlerts(scenarioExposure, computeSettlementTotals(settlementBook), 'alertListDetail');
  renderSettlementTable(settlementBook);
}

function renderTestingPage(windowKey) {
  renderQualityControls(windowKey);
  renderRunbooks();
}

function populatePairSelect() {
  const select = document.getElementById('marketPairSelect');
  if (!select) return;
  select.innerHTML = Object.keys(orderBooks)
    .map((pair) => `<option value="${pair}">${pair}</option>`)
    .join('');
  select.value = selectedPair;
  select.addEventListener('change', (e) => {
    selectedPair = e.target.value;
    renderMarketPage(orderBooks[selectedPair]);
  });
}

function wireNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const pages = document.querySelectorAll('.page');
  navItems.forEach((btn) => {
    btn.addEventListener('click', () => {
      navItems.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const pageId = btn.dataset.page;
      pages.forEach((page) => page.classList.remove('active'));
      const target = document.getElementById(pageId);
      if (target) target.classList.add('active');
    });
  });
}

function wirePairPills(clientAnalytics, baseMetrics, exposures, coverage, fundingImpact, settlementTotals) {
  document.querySelectorAll('#depthPairPills .pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#depthPairPills .pill').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      selectedPair = pill.dataset.pair;
      renderTradingPage(baseMetrics, clientAnalytics, exposures, coverage, fundingImpact, settlementTotals);
      renderMarketPage(orderBooks[selectedPair]);
    });
  });
}

function wireScenarioSwitch(baseMetrics, exposures) {
  document.querySelectorAll('#scenarioGroup .chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#scenarioGroup .chip').forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      selectedScenario = chip.dataset.scenario;
      renderRiskPage(baseMetrics, exposures);
    });
  });
}

function wirePeriodFilters(baseMetrics, clientAnalytics, exposures, coverage, fundingImpact, settlementTotals) {
  document.querySelectorAll('#periodChips .chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#periodChips .chip').forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      selectedPeriod = chip.dataset.period;
      renderTradingPage(baseMetrics, clientAnalytics, exposures, coverage, fundingImpact, settlementTotals);
    });
  });
}

function wireControlWindow() {
  const select = document.getElementById('controlWindow');
  if (!select) return;
  select.addEventListener('change', (e) => {
    renderTestingPage(e.target.value);
  });
}

function bootstrap() {
  updateTime();
  setInterval(updateTime, 10_000);

  const metrics = aggregateMetrics(trades);
  const clientAnalytics = computeClientAnalytics(trades);
  const exposures = computeExposure(trades);
  const coverage = computeHedgeCoverage(trades, exposures);
  const fundingImpact = computeFundingImpact(exposures);
  const settlementTotals = computeSettlementTotals(settlementBook);

  wireNavigation();
  populatePairSelect();
  wirePairPills(clientAnalytics, metrics, exposures, coverage, fundingImpact, settlementTotals);
  wireScenarioSwitch(metrics, exposures);
  wirePeriodFilters(metrics, clientAnalytics, exposures, coverage, fundingImpact, settlementTotals);
  wireControlWindow();

  renderTradingPage(metrics, clientAnalytics, exposures, coverage, fundingImpact, settlementTotals);
  renderMarketPage(orderBooks[selectedPair]);
  renderClientPage(clientAnalytics);
  renderRiskPage(metrics, exposures);
  renderTestingPage('1h');
}

document.addEventListener('DOMContentLoaded', bootstrap);
