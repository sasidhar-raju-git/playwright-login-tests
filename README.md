# Playwright Login Test Automation

A Playwright test automation framework built with TypeScript and Page Object...

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

---

## Installation

1. Clone or download the project:

   ```bash
   git clone <repo-url>
   cd playwright-login-tests
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install Playwright browsers:

   ```bash
   npx playwright install
   ```

4. Set up environment variables:**

    ```bash
    copy .env
    ```

    Edit `.env` with your actual credentials if different from the defaults.

---

## Running Tests


| Command | Description |
| :--- | :--- |
| `npm test` | Run all tests (headless) |
| `npm run test:positive` | Run positive test scenarios only |
| `npm run test:negative` | Run negative test scenarios only |
| `npm run test:headed` | Run all tests in headed (visible browser) mode |

---

## Viewing the HTML Report

After a test run, generate and open the HTML report:

```bash
npm run test:report
```

Or run tests and immediately open the report:

```bash
npx playwright test --reporter=html ; npx playwright show-report
```

---

## Project Structure

```
playwright-login-tests/
├── .env                        # Environment variables (credentials & URL)
├── package.json
├── playwright.config.ts        # Playwright configuration
├── pages/
│   └── LoginPage.ts            # Page Object Model for login page
├── tests/
│   ├── login-positive.spec.ts  # 5 positive test scenarios
│   └── login-negative.spec.ts  # 5 negative test scenarios
├── test-data/
│   └── testCases.ts            # 10 test case definitions (ID, steps, expected res)
└── utils/
    └── config.ts               # Centralised environment variable access
```
---

## Test Cases Summary

### Positive Scenarios

| ID | Title |
| :--- | :--- |
| TC001 | Valid login with correct credentials shows success page |
| TC002 | Valid login redirects away from login URL |
| TC003 | Login form fields are visible and interactive |
| TC004 | Password field masks the entered text |
| TC005 | Login page has a meaningful page title |

### Negative Scenarios
| ID | Title |
| :--- | :--- |
| TC006 | Login with invalid username shows error message |
| TC007 | Login with invalid password shows error message |
| TC008 | Login with empty username shows error message |
| TC009 | Login with empty password shows error message |
| TC010 | Login with both fields empty shows error message |

---

## Key Design Decisions

* **No hard-coded URLs or credentials** — all externalized via `.env`
* **All locators centralised** in `pages/LoginPage.ts`
* **Playwright auto-wait** used throughout — no `page.waitForTimeout()` calls
* **TypeScript** for type safety and maintainability
