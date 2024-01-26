# Task CareLon

This repo includes e2e and API test for local juice shop.

##

# Description of Test

- This repository uses Wdio as test run for running both API and E2E(UI) Tests.

- UI test has flow of Signup of user and it's Positive and Negative scenarios. (handful of them, can be explained more on the interview)

- API test, This test has the flow of checkout. Set up using superagent for request and chai for assertion as mentioned in the assignment.

- This repo also includes generation of allure report at the end of the task, so to understand the failuers in the run.

- This repo also has the funcitonality to capture the screenshot after failure and save it with file name. (Not useful in API test)

Please follow below instructions to run the tests.

## Pre-requisite

- Install Visual stuido code as IDE.
- Run the juice shop repo reading it's README.md file
- Install node v19 using npm install v19 ( used because it was recommended by task)

# Set Up Locally, Run Test & Generate Report

To Setup this repo, please carry out below steps.

- Run command `cd test`
- Once you're into test directory run `npm install` . This will download all the required plugins/dependecies for the project.

- Once successful, hit the command `npm run wdio`. This will run all the tests and generate logs in the console as shown in the screenshot below.

- To generate reports, open another terminal in VS Code and run the command `npm run allure`. Allure is an additional plugin that runs on java vm to generate report with a server.

# Screenshots

Console Logs of tests
![Alt text](<Screenshot 2024-01-26 at 12.14.56 PM.png>)

Reporting

![Alt text](<Screenshot 2024-01-26 at 12.14.27 PM.png>)