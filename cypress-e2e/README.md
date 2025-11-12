# Cypress e2e (API) tests

This folder contains a standalone Cypress project that runs API-level end-to-end tests against the backend at http://localhost:3000.

These tests do NOT modify or edit the `frontend/` or `backend/` source code — they only use HTTP requests against the running backend.

Prerequisites
- Node 16+ (or your project's Node)
- Backend running at http://localhost:3000

Install

```bash
cd cypress-e2e
npm install
```

Run tests (headed)

```bash
cd cypress-e2e
npm run cypress:open
```

Run tests (CI / headless)

```bash
cd cypress-e2e
npm run cypress:run
```

Notes
- The tests assume the backend persists favorites via the `/favorites` endpoint. Tests attempt to clean up after themselves.
- If your backend requires any additional env config, start it with the required variables before running tests.
