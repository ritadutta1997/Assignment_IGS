# Assignment_IGS
Scenario:-

Our developers have finished coding a borrowing calculator and would like to make sure
that the calculator continues to work as they make other changes to the page. They
have asked you to build some automated tests covering various use cases to verify that
the calculator is working properly. They intend to run these tests as part of every build.
They have asked you to use Cucumber, with UI test automation tool of your choice (e.g.
Puppeteer, WebdriverIO, Selenium Webdriver, etc) and language of your choice selected
between JavaScript or Java. The tests should run in a browser of your choice.

The current working production page is here: https://www.anz.com.au/personal/home-
loans/calculators-tools/much-borrow/

Exercise:-

The exercise is to create a Java/JavaScript project (or projects) in Eclipse/Intellij, add
Cucumber and any other add-ins you might need.  
Develop the following three tests:
1) A person with the following details:
a. Single,
b. 0 dependants,
c. buying a home to live in,
d. with income of $80,000,
e. other income $10,000,
f. living expenses $500,
g. current home loan repayments $0,
h. other loan repayments $100,
i. other commitments $0
j. and total credit card limits $10,000
has a borrowing estimate of $479,000.
2) Clicking the ‘start over’ button clears the form.
3) Entering only $1 for Living expenses, and leaving all other fields as zero, clicking
‘Work out how much I could borrow’ returns the following message:
“Based on the details you&#39;ve entered, we&#39;re unable to give you an estimate of
your borrowing power with this calculator. For questions, call us on 1800 100
641.”

**********************************************************************************************

Answers for the questions given in the assignment document:-

1.What other tests would you suggest could be written? You do not need to write
them out in detail or code them.

Ans:-There could be many test scenarios :-
1. We can check the functionality of the search button.
2. We can check the functionality of the "Work out how much I could borrow" button without entering any values in the form, it should give an error.
3. We can check the functionality of each web element on the page.
4. We can check the functionality of the Login button.
5. We can check every functionality of the tab listed on the header.

2. If this test was part of a much larger test set, how would you speed it up?

Ans:-At first we can create a Page Object Model to manage the locators of the web elements.
We can use some common methods which can be reused in the code.
We can use hooks.
We can use examples using Scenario Outline to test the scenarios with different test datas.
We can have a test data repository.

3. Sometimes UI tests can fail unpredictably. For example, the page may not have
fully loaded before test automation attempts to click a button on a webpage. How
would you improve the reliability of these tests?

Ans:-We will check if the page is loaded or not by providing some wait.
Then we can introduce an explicit wait to check if the element is visible or not then we will do any operation over the element.

*****************************************************************************************************
Test result :- can be found in testresults.json file

When we will execute the test scenarios it will create a json file in the Results folder. We can check the passed and failed steps in that json file

*******************************************************************************************************

To run this project:-

1. Install node js 
2. Execute npm install command
3. For running the tests:-
   execute protractor conf.js
