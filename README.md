# BookingChallenge
Automation of specific components for the Booking site with cypress

Within this project the following automations were carried out
- [x] Browse and search for accommodation: Open the browser and navigate to the Booking.com home page (https://www.booking.com).
- [x] Find the search input field and enter the destination of your choice (for example, "New York").
- [x] Select check-in and check-out dates. Make sure these dates are at least one month from today's date to avoid availability issues.
- [x] Submit the search.
- [x] Filter Search Results: Once on the search results page, apply a filter to narrow down the results. For example, you can filter by "Star Rating" and select "5 Stars."
- [x] Wait for the page to reload with the filtered results.
- [x] Select an Accommodation: From the filtered search results, select the first available accommodation to view its details.
- [x] Validate that you have accessed the accommodation details page and that the page includes the name, rating and services of the accommodation.
- [x] Check availability: On the accommodation details page, find the "Check availability" button and click on it.
- [x] Validate that you are shown available rooms or apartments. Verify the presence of pricing information for available options.

To run the project you must execute the following commands
1. npm init -y
2. npm install cypress --save-dev
3. npx cypress open
