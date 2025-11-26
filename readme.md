# FX Monitoring and Trading Dashboard

Single-page prototype of an internal treasury portal to monitor FX transactions, market depth, client profitability, and risk exposure with finance-aware calculations. Navigation along the left switches between Trading Desk, Market Depth, Client Analytics, Risk & Exposure, and Testing views.

## Running locally
1. Start a simple server from the repo root (prevents CORS/font blocking):
   ```bash
   python -m http.server 8000
   ```
2. Open http://localhost:8000 in your browser to view the dashboard.

## What this prototype shows
- **Execution quality & spreads** — weighted-average spread (bps), spread capture in P&L, and realized P&L calculated from simulated trade blotter data.
- **Market depth** — level-II bid/ask ladder with imbalance and top-of-book spread metrics plus provider hit-rates and slippage estimator per pair.
- **Client analytics** — segment-level notional share, average spread, hedging ratios, and behavioral patterns (tenors, holding periods, hedge take-up).
- **Risk & exposure** — currency net positions against desk limits, VaR (95%/99%) from historical returns, stress-loss illustration, and scenario toggles.
- **Funding & settlements** — overnight swap drag, hedge coverage by currency, liquidity buffer from upcoming settlements, and a settlement ladder with counterparties.
- **Intraday liquidity** — hourly cash ladder for CLS prefunding, margin movements, and nostro sweeps to project funding gaps.
- **Controls & alerts** — limit utilization prompts, settlement shortfall warnings, counterparty concentration signals, and control-plane checks for data quality/runbooks.
- **Operational hygiene** — London clock, limit tags, hedging balance indicators, operational testing pane, and narrative insight bullets to guide dealers.
