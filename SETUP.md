# Movie Search QA Challenge - Setup & Configuration

## Prerequisites

- Node.js 18+
- OMDb API key (free at https://www.omdbapi.com/apikey.aspx)

## Local Setup

### 1. Backend Configuration

```bash
cd backend
cp env.example .env
# Edit .env and add your OMDb API key
OMDB_API_KEY=your_key_here
```

### 2. Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install

# Cypress Tests
cd cypress-e2e
npm install
```

### 3. Start Services

**Terminal 1 - Backend:**
```bash
cd backend
npm start
# Runs on http://localhost:3000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
# Runs on http://localhost:3001
```

**Terminal 3 - Run Tests:**
```bash
cd cypress-e2e
npm run cypress:run    # Headless mode
npm run cypress:open   # Interactive mode
```

## GitHub Actions Setup

### 1. Add OMDB API Key Secret

1. Go to: https://github.com/dsolisp/movie-search-QA-challenge-cypress-solution/settings/secrets/actions
2. Click "New repository secret"
3. Name: `OMDB_API_KEY`
4. Value: Your OMDb API key
5. Click "Add secret"

### 2. Workflows

The workflow runs automatically on:
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop`

View workflow runs: https://github.com/dsolisp/movie-search-QA-challenge-cypress-solution/actions

## Test Suite

### API Tests (11 tests)
```bash
cd cypress-e2e
npm run cypress:run -- --spec "cypress/e2e/api_endpoints.cy.ts"
```

### UI Tests (6 tests)
```bash
cd cypress-e2e
npm run cypress:run -- --spec "cypress/e2e/ui_flows.cy.ts"
```

### Component Tests (6 tests)
```bash
cd cypress-e2e
npm run cypress:run:component
```

### All Tests (Headless)
```bash
cd cypress-e2e
npm run cypress:run
```

### All Tests (Interactive)
```bash
cd cypress-e2e
npm run cypress:open
```

## Test Reports

After running tests, reports are generated at:
```
cypress-e2e/cypress/reports/
```

View Mochawesome HTML reports in your browser after test execution.

## Project Structure

```
.
├── backend/              # Express.js API
├── frontend/             # Next.js React app
├── cypress-e2e/          # Cypress test suite
│   ├── cypress/
│   │   ├── e2e/          # E2E tests
│   │   ├── component/    # Component tests
│   │   ├── page-objects/ # Page Object Model
│   │   └── utils/        # Test utilities
│   └── cypress.config.ts
├── .github/workflows/    # GitHub Actions
└── QA_Assignment.md      # Complete QA report
```

## Troubleshooting

### Port Already in Use
If ports 3000 or 3001 are in use:
```bash
# Find process on port 3000
lsof -i :3000
# Kill it
kill -9 <PID>
```

### OMDB API Key Not Set
Make sure `.env` file exists in backend directory with valid key:
```bash
cat backend/.env
# Should show: OMDB_API_KEY=your_actual_key
```

### Tests Failing with "Cannot find module"
```bash
cd cypress-e2e
rm -rf node_modules package-lock.json
npm install
```

## Documentation

- **QA Report**: See `QA_Assignment.md` for comprehensive QA analysis, bug reports, and recommendations
- **Cypress README**: See `cypress-e2e/README.md` for test implementation details

## Questions?

Check the QA_Assignment.md file for detailed documentation on:
- Test strategy
- Bug reports (9 bugs documented)
- Quality recommendations
- Test infrastructure setup
