# War Room

A front office tool for coaches and GMs. Track shooting, scout players, follow the standings, and build a draft board in one place instead of jumping between five tabs.

## Features

* **Standings** — league and conference standings pulled from live data
* **Shot Charts** — shot location and efficiency by zone, rendered with D3
* **Scouting** — player evaluation notes and stat breakdowns *(in progress)*
* **Draft Board** — rank and reorder prospects into a working board *(in progress)*

## Status

The frontend is deployed and Standings and Shot Charts are functional. Scouting and the Draft Board are still being built, and the Node/PostgreSQL backend isn't deployed yet, so persisted data isn't live in the demo.

## Tech Stack

* React
* TypeScript
* React Router
* TanStack Query
* D3.js
* Node.js
* PostgreSQL
* ESPN unofficial API (no key required)

## Live Demo

https://war-room-jade.vercel.app/

## Screenshot
<img width="1423" height="788" alt="Screenshot 2026-08-17 at 1 21 07 PM" src="https://github.com/user-attachments/assets/8b61a32e-126e-448a-9bee-369e99fda254" />

## Running Locally

```
git clone https://github.com/kfree23/war-room
cd war-room
npm install
npm run dev
```

