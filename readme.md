# FX Monitoring and Trading Dashboard

Single-page prototype of an internal treasury portal to monitor FX transactions, market depth, client profitability, and risk exposure with finance-aware calculations.

## Running locally
1. Start a simple server from the repo root (prevents CORS/font blocking):
   ```bash
   python -m http.server 8000
   ```
2. Open http://localhost:8000 in your browser to view the dashboard.

## What this prototype shows
- **Execution quality & spreads** — weighted-average spread (bps), spread capture in P&L, and realized P&L calculated from simulated trade blotter data.
- **Market depth** — level-II bid/ask ladder with imbalance and top-of-book spread metrics.
- **Client analytics** — segment-level notional share, average spread, and hedging ratios for banks, asset managers, hedge funds, and corporates.
- **Risk & exposure** — currency net positions against desk limits, VaR (95%/99%) from historical returns, and stress-loss illustration.
- **Funding & settlements** — overnight swap drag, hedge coverage by currency, liquidity buffer from upcoming settlements, and a settlement ladder with counterparties.
- **Intraday liquidity** — hourly cash ladder for CLS prefunding, margin movements, and nostro sweeps to project funding gaps.
- **Controls & alerts** — limit utilization prompts, settlement shortfall warnings, and counterparty concentration signals to trigger hedging actions.
- **Operational hygiene** — London clock, limit tags, hedging balance indicators, and narrative insight bullets to guide dealers.
