# QA Test Cases

**Application:** Restful Booker Platform  
**Test Environment:** https://automationintesting.online/  
**Tools:** Browser, Postman, Playwright

## 1. Manual Test Cases

### TC-001: Verify Booking Navigation

**Requirement:** REQ-001  
**Acceptance Criterion:** AC-001  
**Test Type:** Functional, Positive  
**Priority:** Medium

**Preconditions:** Website is accessible and user is on the homepage.

**Test Steps:**
1. Open the application homepage.
2. Locate the navigation menu.
3. Click Booking.
4. Observe the page navigation.

**Expected Result:** The page navigates to the Our Rooms section where room listings are displayed.

### TC-002: Verify Room Categories Are Displayed

**Requirement:** REQ-001  
**Acceptance Criterion:** AC-002  
**Test Type:** Functional, Positive  
**Priority:** Medium

**Preconditions:** Website is accessible.

**Test Steps:**
1. Open the homepage.
2. Click Booking in the navigation menu.
3. Locate the Our Rooms section.
4. Check the displayed room categories.

**Expected Result:** Single, Double, and Suite room categories are displayed.

### TC-003: Verify Book Now Buttons Are Displayed

**Requirement:** REQ-001  
**Acceptance Criterion:** AC-003  
**Test Type:** Functional, Positive  
**Priority:** Medium

**Preconditions:** Website is accessible.

**Test Steps:**
1. Open the homepage.
2. Navigate to the Our Rooms section.
3. Check each room category for a Book Now button.

**Expected Result:** All three room categories display a Book Now button.

### TC-004: Verify Single Room Reservation Interface

**Requirement:** REQ-002  
**Acceptance Criteria:** AC-004, AC-005  
**Test Type:** Functional, Positive  
**Priority:** High

**Preconditions:** Website is accessible and the Single room is displayed.

**Test Steps:**
1. Open the homepage.
2. Navigate to the Our Rooms section.
3. Locate the Single room.
4. Click Book Now.
5. Allow up to 20 seconds for the reservation interface to load.

**Expected Result:** The Single room reservation interface loads successfully without remaining on a loading screen.

## 2. API Test Cases Using Postman

### API-001: Valid Administrator Login

**Requirement:** REQ-005  
**Acceptance Criterion:** AC-011  
**Test Type:** API, Positive

**Test Steps:**
1. Send a POST request to `/api/auth/login`.
2. Include valid administrator credentials.
3. Verify the response status and authentication token.

**Expected Result:** The request succeeds and returns a nonempty authentication token.

### API-002: Invalid Administrator Login

**Requirement:** REQ-005  
**Acceptance Criterion:** AC-012  
**Test Type:** API, Negative

**Test Steps:**
1. Send a POST request to `/api/auth/login`.
2. Include an incorrect password.
3. Verify the response status and message.

**Expected Result:** The API returns HTTP 401, rejects the credentials, and does not issue a token.

### API-003: Retrieve Available Rooms

**Requirement:** REQ-006  
**Acceptance Criterion:** AC-013  
**Test Type:** API, Positive

**Test Steps:**
1. Send a GET request to `/api/room/`.
2. Verify the HTTP status.
3. Check the returned room categories, IDs, and prices.

**Expected Result:** The API returns HTTP 200 and valid room information, including Single, Double, and Suite.

### API-004: Retrieve Bookings by Room

**Requirement:** REQ-006  
**Acceptance Criterion:** AC-015  
**Test Type:** API, Positive

**Test Steps:**
1. Authenticate using the administrator login request.
2. Send a GET request to `/api/booking/?roomid=1`.
3. Verify the response status and booking information.

**Expected Result:** The API returns HTTP 200 and booking records associated with room ID 1.

### API-005: Create a Reservation

**Requirement:** REQ-006  
**Acceptance Criterion:** AC-014  
**Test Type:** API, Positive

**Test Steps:**
1. Authenticate using the administrator login request.
2. Send a POST request to `/api/booking/` with valid guest information, room ID, and booking dates.
3. Verify the response status and returned booking ID.

**Expected Result:** The reservation is created successfully and a booking ID is returned.

### API-006: Retrieve an Individual Reservation

**Requirement:** REQ-006  
**Acceptance Criterion:** AC-016  
**Test Type:** API, Positive

**Test Steps:**
1. Authenticate using the administrator login request.
2. Obtain an existing booking ID.
3. Send a GET request to `/api/booking/{bookingId}`.
4. Verify the response.

**Expected Result:** The API successfully returns the reservation associated with the requested booking ID.

### API-007: Update an Existing Reservation

**Requirement:** REQ-006  
**Acceptance Criterion:** AC-017  
**Test Type:** API, Positive

**Test Steps:**
1. Authenticate using the administrator login request.
2. Identify an existing reservation.
3. Send a PUT request to `/api/booking/{bookingId}` with modified guest information.
4. Verify that the changes were saved.

**Expected Result:** The reservation is updated successfully and the modified information is retained.

### API-008: Delete an Existing Reservation

**Requirement:** REQ-006  
**Acceptance Criterion:** AC-018  
**Test Type:** API, Positive

**Test Steps:**
1. Authenticate using the administrator login request.
2. Identify an existing reservation.
3. Send a DELETE request to `/api/booking/{bookingId}`.
4. Verify that the reservation was removed.

**Expected Result:** The reservation is deleted successfully and can no longer be retrieved.

## 3. Automated Browser Test Cases Using Playwright

### AUT-001: Valid Administrator Login

**Requirement:** REQ-005  
**Acceptance Criterion:** AC-011  
**Test Type:** UI Automation, Positive

**Test Steps:**
1. Open `/admin`.
2. Enter valid administrator credentials.
3. Click Login.
4. Verify that Logout becomes visible.

**Expected Result:** The administrator successfully logs in and the Logout button is displayed.

### AUT-002: Invalid Administrator Login

**Requirement:** REQ-005  
**Acceptance Criterion:** AC-012  
**Test Type:** UI Automation, Negative

**Test Steps:**
1. Open `/admin`.
2. Enter an incorrect password.
3. Click Login.
4. Check for the authentication error.

**Expected Result:** The login is rejected and the message "Invalid credentials" is displayed.

### AUT-003: Verify Room Categories

**Requirement:** REQ-001  
**Acceptance Criteria:** AC-001, AC-002  
**Test Type:** UI Automation, Positive

**Test Steps:**
1. Open the homepage.
2. Click Booking in the navigation menu.
3. Verify the Our Rooms heading.
4. Verify the Single, Double, and Suite headings.

**Expected Result:** The Our Rooms section is displayed with all three room categories.

## 4. Test Scope

This document contains 15 test cases covering manual functional testing, API testing, and browser automation.

The test cases were designed using independently developed acceptance criteria and the application's documented API functionality.

Execution results and defect evidence are recorded separately in the test execution document and bug reports.