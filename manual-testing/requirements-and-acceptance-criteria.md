# Reservation Management System
## Requirements and Acceptance Criteria

**Project:** Restful Booker Platform QA Testing Portfolio  
**Application:** https://automationintesting.online/  
**Document Type:** Simulated Software Requirements  
**Status:** Independent QA Practice

## 1. Purpose

This document outlines the functional requirements and acceptance criteria used to guide testing of the Restful Booker Platform.

I independently developed the acceptance criteria for portfolio purposes based on the application's functionality and my understanding of software testing practices. The API requirements were informed by the application's official documentation.

**API Documentation:** https://www.postman.com/automation-in-testing/restful-booker-collections/documentation/ci13ds3/restful-booker-platform

## 2. Application Overview

Restful Booker Platform is a hotel reservation practice application that allows guests to browse rooms, access reservation functionality, and view hotel information. It also provides administrator functionality for managing rooms and bookings.

## 3. Functional Requirements

### REQ-001: Room Browsing and Navigation

**Requirement:** Guests should be able to navigate to the room listings and view available room categories.

**Acceptance Criteria:**

AC-001: Clicking Booking navigates to the Our Rooms section.

AC-002: The Single, Double, and Suite room categories are displayed.

AC-003: Each room category includes a Book Now button.

### REQ-002: Room Reservations

**Requirement:** Guests should be able to access the reservation interface for their selected room.

**Acceptance Criteria:**

AC-004: Clicking Book Now opens the reservation interface for the selected room.

AC-005: The reservation interface loads successfully without remaining on a loading screen.

AC-006: The reservation interface identifies the selected room.

### REQ-003: Location and Contact

**Requirement:** Guests should be able to access hotel location and contact information.

**Acceptance Criteria:**

AC-007: Clicking Location navigates to the location section.

AC-008: Clicking Contact navigates to the Send Us a Message section.

### REQ-004: Administrator Login

**Requirement:** Administrators should be able to access the login page.

**Acceptance Criteria:**

AC-009: Clicking Admin opens the administrator login page.

AC-010: The login page displays username and password fields.

### REQ-005: Administrator Authentication

**Requirement:** The system should authenticate administrators using valid credentials and reject invalid login attempts.

**Acceptance Criteria:**

AC-011: Valid credentials allow access to the Admin interface. Successful API authentication returns a nonempty token.

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

The requirements and acceptance criteria in this document were developed independently for portfolio purposes. They are not official specifications provided by the application's development team.

The acceptance criteria reflect proposed expected behavior based on application exploration and published API documentation. They serve as a reference for test case design, execution, and defect investigation.