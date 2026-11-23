# Test Execution Results

**Application:** Restful Booker Platform  
**Test Environment:** https://automationintesting.online/  
**Tools:** Chrome DevTools, Postman, Playwright

## 1. Test Execution Summary

| Testing Type | Passed | Failed | Total |
|---|---:|---:|---:|
| Manual Testing | 3 | 1 | 4 |
| API Testing | 5 | 3 | 8 |
| Playwright Automation | 3 | 0 | 3 |
| **Total** | **11** | **4** | **15** |

Testing was performed independently using the acceptance criteria and test cases developed for this portfolio.

## 2. Manual Testing Results

### TC-001: Verify Booking Navigation

**Requirement:** REQ-001  
**Acceptance Criterion:** AC-001  
**Status:** PASS

**Expected Result:** Clicking Booking navigates to the Our Rooms section.

**Actual Result:** The page scrolls to the correct section, but some content appears above the visible area and requires additional scrolling.

**Notes:** Minor usability concern observed at a 1440px viewport. No confirmed defect.

### TC-002: Verify Room Categories Are Displayed

**Requirement:** REQ-001  
**Acceptance Criterion:** AC-002  
**Status:** PASS

**Expected Result:** The Single, Double, and Suite room categories are displayed.

**Actual Result:** All three room categories were displayed successfully.

### TC-003: Verify Book Now Buttons Are Displayed

**Requirement:** REQ-001  
**Acceptance Criterion:** AC-003  
**Status:** PASS

**Expected Result:** Each room category displays a Book Now button.

**Actual Result:** All three room categories displayed a Book Now button.

### TC-004: Verify Single Room Reservation Interface

**Requirement:** REQ-002  
**Acceptance Criteria:** AC-004, AC-005  
**Status:** FAIL

**Expected Result:** Clicking Book Now opens the reservation interface without remaining on a loading screen.

**Actual Result:** The reservation page remained on a loading screen. Chrome DevTools and Postman both returned HTTP 500 when requesting `GET /api/room/1`.

**Related Defect:** [BUG-001](../bug-reports/BUG-001.md)

**Evidence:** [API Error Screenshot](../screenshots/TC-004-postman-api-500.png)

## 3. API Testing Results

API requests were executed using Postman. Response status codes, returned data, and expected behavior were checked using JavaScript assertions and manual investigation.

| Test Case | Description | Acceptance Criterion | Status |
|---|---|---|---|
| API-001 | Valid administrator login | AC-011 | PASS |
| API-002 | Invalid administrator login | AC-012 | PASS |
| API-003 | Retrieve available rooms | AC-013 | PASS |
| API-004 | Retrieve bookings by room | AC-015 | PASS |
| API-005 | Create a reservation | AC-014 | PASS |
| API-006 | Retrieve an individual reservation | AC-016 | FAIL |
| API-007 | Update an existing reservation | AC-017 | FAIL |
| API-008 | Delete an existing reservation | AC-018 | FAIL |

### Successful API Tests

**API-001:** Valid credentials successfully authenticated and returned a token.

**API-002:** Invalid credentials returned HTTP 401 with an error message.

**API-003:** The rooms endpoint returned HTTP 200 with room information.

**API-004:** The booking endpoint returned HTTP 200 with reservations associated with room ID 1.

**API-005:** A reservation was created successfully and a booking ID was returned.

### Failed API Tests

**API-006:** Retrieving an individual booking using its ID returned HTTP 500.

**Related Defect:** [BUG-002](../bug-reports/BUG-002.md)

**API-007:** Updating an existing booking using PUT returned HTTP 500. The operation also failed through the administrator interface.

**Related Defect:** [BUG-003](../bug-reports/BUG-003.md)

**API-008:** Deleting an existing booking using DELETE returned HTTP 500. The operation also failed through the administrator interface.

**Related Defect:** [BUG-004](../bug-reports/BUG-004.md)

The underlying causes of these failures were not confirmed.

### Postman Collection Runner

Four selected API requests were executed automatically using Postman's Collection Runner.

| Request | Assertions Passed |
|---|---:|
| POST Admin Login | 2 |
| GET All Rooms | 4 |
| GET Bookings by Room | 3 |
| POST Create Booking | 1 |
| **Total** | **10** |

**Result:** 10 assertions passed, 0 failed.

**Evidence:** [Postman Collection Runner Screenshot](../screenshots/API-collection-run-10-passed.png)

The three API requests that previously returned HTTP 500 were excluded from this collection run. Their failures are documented separately above.

## 4. Playwright Automation Results

Three automated browser tests were executed using Playwright with JavaScript.

**Browser:** Chromium

| Test Case | Description | Acceptance Criteria | Status |
|---|---|---|---|
| AUT-001 | Valid administrator login | AC-011 | PASS |
| AUT-002 | Invalid administrator login | AC-012 | PASS |
| AUT-003 | Verify room categories | AC-001, AC-002 | PASS |

**Result:** 3 tests passed, 0 failed.

**Test Script:** [restful-booker.spec.js](../automation/tests/restful-booker.spec.js)

## 5. Defect Summary

Four issues were documented during testing.

| Defect | Description |
|---|---|
| [BUG-001](../bug-reports/BUG-001.md) | Room reservation pages fail to load |
| [BUG-002](../bug-reports/BUG-002.md) | Individual booking retrieval returns HTTP 500 |
| [BUG-003](../bug-reports/BUG-003.md) | Updating an existing reservation returns HTTP 500 |
| [BUG-004](../bug-reports/BUG-004.md) | Deleting an existing reservation returns HTTP 500 |

Each bug report contains reproduction steps, expected and actual results, investigation notes, and supporting screenshots.

## 6. Testing Limitations

Testing was conducted on a public practice application that periodically resets its data.

Some reservation operations returned HTTP 500 under the tested conditions. The causes of these failures were not confirmed.

Results reflect the application's behavior during testing and may differ in future executions.