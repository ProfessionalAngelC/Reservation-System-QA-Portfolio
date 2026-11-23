# Reservation Management System
## Requirements and Acceptance Criteria

**Project:** Restful Booker Platform QA Testing Portfolio  
**Application:** https://automationintesting.online/  
**Document Type:** Simulated Software Requirements  
**Status:** Independent QA Practice

## 1. Purpose

This document outlines the functional requirements and acceptance criteria used to guide my testing of the Restful Booker Platform.

I independently developed the acceptance criteria for portfolio purposes based on the application's functionality. For API testing, I also referenced the application's published documentation.

The requirements focus on the functionality I selected for testing rather than the entire application.

**API Documentation:** https://www.postman.com/automation-in-testing/restful-booker-collections/documentation/ci13ds3/restful-booker-platform

## 2. Application Overview

Restful Booker Platform is a hotel reservation practice application that allows guests to browse rooms and make reservations. It also includes administrator functionality for managing rooms and bookings.

## 3. Functional Requirements

### REQ-001: Room Browsing and Navigation

**Requirement:** Guests should be able to navigate to the room listings and view the available room categories.

**Acceptance Criteria:**

AC-001: Clicking Booking navigates to the Our Rooms section.

AC-002: The Single, Double, and Suite room categories are displayed.

AC-003: Each room category includes a Book Now button.

### REQ-002: Room Reservations

**Requirement:** Guests should be able to open the reservation interface for their selected room.

**Acceptance Criteria:**

AC-004: Clicking Book Now opens the reservation interface for the selected room.

AC-005: The reservation interface loads successfully without remaining on a loading screen.

### REQ-005: Administrator Authentication

**Requirement:** The system should allow administrators to log in using valid credentials and reject invalid login attempts.

**Acceptance Criteria:**

AC-011: The administrator login page provides username and password fields. Valid credentials allow access to the administrator interface, and successful API authentication returns a nonempty token.

AC-012: Invalid credentials are rejected. The frontend displays an error message, and the authentication API does not return a token.

### REQ-006: Room and Booking API

**Requirement:** The system should support retrieving room information and managing reservations through its documented API endpoints.

**Acceptance Criteria:**

AC-013: GET requests return available rooms with valid room IDs, types, and prices.

AC-014: POST requests successfully create reservations and return a booking ID.

AC-015: GET requests retrieve reservations filtered by room ID.

AC-016: GET requests retrieve an existing reservation using its booking ID.

AC-017: PUT requests allow authorized users to update an existing reservation.

AC-018: DELETE requests allow authorized users to delete an existing reservation.

## 4. Scope and Assumptions

I independently developed these requirements and acceptance criteria for my QA portfolio. They are not official specifications provided by the application's development team.

The criteria represent my selected testing scope and were used to design manual test cases, API tests, and automated browser tests.

The original requirement and acceptance criteria IDs were retained to maintain consistency with the test cases and execution documentation.
