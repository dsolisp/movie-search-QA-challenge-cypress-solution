---
mode: agent
---
# QA Assignment Prompt

This file contains the step-by-step QA plan and instructions for addressing all requirements in the Movie Search Platform QA Testing Challenge. Use this as your guide for planning, tracking, and documenting your QA work. Do not mix this file with your final QA documentation or results.

---

## 1. Set Up Testing Framework
- [ ] Install Cypress (`npm install cypress --save-dev` in frontend and backend if needed).
- [ ] Configure Cypress for both frontend and backend testing.
- [ ] Document setup steps in `QA_Assignment.md`.

## 2. Build Foundational Test Suite
- [ ] Write Cypress tests for critical user workflows:
  - [ ] Movie search (frontend UI and backend API).
  - [ ] Add/remove favorites.
  - [ ] Pagination.
- [ ] Write API endpoint tests (at least 3–5 key endpoints).
- [ ] Write essential component tests (e.g., MovieCard).
- [ ] Document all test cases and results in `QA_Assignment.md`.

## 3. Identify and Document Quality Issues
- [ ] Perform exploratory testing (manual and automated).
- [ ] Log all discovered bugs in `QA_Assignment.md`:
  - [ ] Severity (P0–P3).
  - [ ] Steps to reproduce.
  - [ ] Expected vs. actual behavior.
  - [ ] Impact assessment.

## 4. Propose QA Processes
- [ ] Outline a testing strategy in `QA_Assignment.md`:
  - [ ] Approach and coverage plan.
  - [ ] Quality gates and checkpoints.
  - [ ] Bug tracking process.
  - [ ] Recommendations for improvement.

## 5. Set Up Test Infrastructure
- [ ] Ensure Cypress tests run automatically (CI or local).
- [ ] Configure basic test reporting.
- [ ] Document infrastructure setup and reporting in `QA_Assignment.md`.

## 6. Document Everything
- [ ] Create and maintain `QA_Assignment.md`:
  - [ ] Test suite details.
  - [ ] Bug reports.
  - [ ] Testing strategy.
  - [ ] Infrastructure setup.
  - [ ] Automation results and screenshots (if applicable).

---

**Note:** Cypress is recommended for its ease of use, great documentation, and support for both UI and API testing. Alternatives like Playwright or TestCafe are also friendly, but Cypress is most widely used for web apps.

**Do not mix this prompt with your final QA documentation. Use `QA_Assignment.md` for your actual work and results.**
