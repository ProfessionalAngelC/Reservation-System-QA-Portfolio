# Reservation Management System QA Portfolio

## Project Overview

This is an independent QA testing project I completed using the Restful Booker Platform, a public hotel reservation practice application.

I wanted to get hands-on experience with the software testing process, from understanding application functionality and writing test cases to executing tests, investigating bugs, and documenting results.

I worked with manual testing, API testing using Postman, and browser automation using Playwright.

**Application:** https://automationintesting.online/

## What I Did

I started by exploring the application to understand how the room listings, reservation process, and administrator features worked.

Since this was an independent project, I developed my own proposed requirements and acceptance criteria based on the application's functionality. I used those criteria to create test scenarios and test cases.

From there, I completed the following:

1. Created functional requirements, acceptance criteria, and 15 test cases covering manual, API, and automated browser testing.
2. Executed four manual test cases covering room navigation, room listings, and reservation functionality.
3. Used Postman to test eight API requests, including authentication, retrieving room information, creating reservations, updating reservations, and deleting reservations.
4. Wrote JavaScript assertions in Postman to check response status codes and returned data.
5. Used Postman's Collection Runner to automatically execute four selected API requests. All 10 assertions passed.
6. Created three Playwright tests using JavaScript to automate successful login, invalid login, and room category verification.
7. Used Chrome DevTools and Postman to investigate failed API requests and compare frontend behavior with backend responses.
8. Documented four bugs with reproduction steps, expected and actual results, and screenshots.
9. Configured a GitHub Actions workflow to run the Playwright tests automatically.

## Testing Results

| Test Type | Test Cases | Passed | Failed |
|---|---:|---:|---:|
| Manual Testing | 4 | 3 | 1 |
| Postman API Testing | 8 | 5 | 3 |
| Playwright Automation | 3 | 3 | 0 |
| **Total** | **15** | **11** | **4** |

### Manual Testing

I tested the room listings, navigation, and reservation interface.

Three test cases passed. One failed because the Single room reservation page remained stuck on a loading screen.

### API Testing with Postman

I tested eight API requests covering:

- Valid and invalid administrator authentication
- Retrieving available rooms
- Retrieving bookings by room
- Creating a reservation
- Retrieving an individual reservation
- Updating an existing reservation
- Deleting an existing reservation

Five requests produced the expected results. Three returned HTTP 500 errors when retrieving, updating, or deleting an individual booking.

I also wrote JavaScript assertions and used collection variables to store authentication tokens and booking IDs.

To practice automated API execution, I ran four selected requests through Postman's Collection Runner.

**Collection Runner result: 10 assertions passed, 0 failed.**

The requests that previously returned HTTP 500 were investigated separately and were not included in the passing collection run.

[View Postman Collection](api-testing/Restful%20Booker%20-%20API%20Testing.postman_collection.json)

[View Collection Runner Results](screenshots/API-collection-run-10-passed.png)

### Playwright Automation

I created three automated browser tests using Playwright and JavaScript:

1. Successful administrator login
2. Invalid administrator login
3. Verification that Single, Double, and Suite room categories are displayed

All three tests passed in Chromium.

I also configured a GitHub Actions workflow to execute the Playwright tests on pushes and pull requests. The workflow still needs to be verified through an actual GitHub Actions run.

[View Playwright Tests](automation/tests/restful-booker.spec.js)

[View GitHub Actions Workflow](.github/workflows/playwright.yml)

## Bug Investigation

During testing, I found several operations that did not behave as expected.

I used Chrome DevTools to inspect network requests, HTTP status codes, and API responses. I also reproduced the requests in Postman to investigate whether the same failures occurred outside the browser interface.

I documented four issues:

| Bug ID | Finding |
|---|---|
| [BUG-001](bug-reports/BUG-001.md) | Room reservation pages remained stuck loading. The room detail API returned HTTP 500. |
| [BUG-002](bug-reports/BUG-002.md) | Retrieving an individual booking returned HTTP 500, although bookings could be retrieved using the room ID filter. |
| [BUG-003](bug-reports/BUG-003.md) | Updating an existing booking returned HTTP 500 in Postman and through the administrator interface. |
| [BUG-004](bug-reports/BUG-004.md) | Deleting an existing booking returned HTTP 500 in Postman and through the administrator interface. |

Each bug report includes reproduction steps, expected and actual behavior, investigation notes, and supporting screenshots.

These were findings from my testing of the public practice environment. I did not confirm their underlying causes.

## Tools Used

| Tool | How I Used It |
|---|---|
| Chrome DevTools | Inspected network requests, API responses, and HTTP errors |
| Postman | Tested API endpoints, wrote assertions, and ran automated API requests |
| Playwright | Automated browser testing using JavaScript |
| Visual Studio Code | Wrote and organized test scripts and documentation |
| GitHub | Version control and project documentation |
| GitHub Actions | Configured automated Playwright test execution |

## Project Documentation

| Document | Description |
|---|---|
| [Requirements and Acceptance Criteria](manual-testing/requirements-and-acceptance-criteria.md) | Functional requirements and acceptance criteria I developed for this project |
| [Test Cases](manual-testing/test-cases.md) | Manual, API, and automated browser test scenarios |
| [Test Execution Results](manual-testing/test-execution.md) | Recorded test results and supporting findings |
| [Bug Reports](bug-reports/) | Four documented issues with reproduction steps and evidence |
| [Screenshots](screenshots/) | Supporting screenshots from testing and investigations |

## Running the Playwright Tests

The Playwright tests are located in the `automation` folder.

To run them locally, install Node.js and execute:

```bash
cd automation
npm ci
npx playwright install chromium
npx playwright test restful-booker.spec.js --project=chromium
```

The tests use the public Restful Booker Platform and do not require a local application server.

The Postman collection can be imported into Postman using the JSON file in the `api-testing` folder.

## API Documentation

For API testing, I referenced the official Restful Booker Platform documentation to understand the available endpoints, HTTP methods, request bodies, and authentication requirements.

[Restful Booker Platform API Documentation](https://www.postman.com/automation-in-testing/restful-booker-collections/documentation/ci13ds3/restful-booker-platform)

## Project Limitations

This project was completed independently using a public practice application. The requirements and acceptance criteria were written for portfolio purposes and were not provided by the application's development team.

The application periodically resets its data, so test results may differ between executions.

Some reservation operations returned HTTP 500 during testing, preventing successful completion of the full CRUD workflow. The underlying causes were not confirmed.

## What I Learned

This project helped me practice how different parts of QA testing connect.

I gained experience creating acceptance criteria and test cases, executing tests, investigating unexpected behavior, writing bug reports, and using Postman and Playwright for automated testing.

One of the most useful parts was investigating API failures. I learned how to use Chrome DevTools and Postman together to gather evidence rather than relying only on what appeared in the browser.

It also helped me understand the importance of documenting both successful tests and failures clearly.