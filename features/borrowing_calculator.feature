Feature: Borrowing Calculator 
As a user of borrowing calculator application
I can use the functionality of the application 
to check the application is working properly

Scenario: Borrowing Estimation
Given user launches the borrowing calculator homepage
When  user provides all the required details in "Your details" section
And   user provides all the required details in "Your earnings" section
And   user provides all the required details in "Your expenses" section
Then  user clicks the "Work out how much I could borrow" button
Then  user gets the estimated borrow "$482,000"

Scenario: Clear the borrowing estimation form
Given user launches the borrowing calculator homepage
When  user provides all the required details in "Your details" section
And   user provides all the required details in "Your earnings" section
And   user provides all the required details in "Your expenses" section
Then  user clicks the "Work out how much I could borrow" button
Then  user gets the estimated borrow "$482,000"
And   user clicks on "Start over"
Then  the borrowing estimation form gets clear

Scenario: User gets an error message based on the details entered
Given user launches the borrowing calculator homepage
When  user only sends monthly living expenses value as "1"
Then  user clicks the "Work out how much I could borrow" button
And   user gets the error message "Based on the details you've entered, we're unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 035 500."