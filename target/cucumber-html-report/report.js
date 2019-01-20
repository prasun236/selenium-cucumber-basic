$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyTest.feature");
formatter.feature({
  "line": 1,
  "name": "Reset functionality on login page of Application",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verification of Reset button",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application;verification-of-reset-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open the Chrome and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter the Username and Password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Reset the credential",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.open_the_Chrome_and_launch_the_application()"
});
formatter.result({
  "duration": 8628563329,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_the_Username_and_Password()"
});
formatter.result({
  "duration": 317392100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Reset_the_credential()"
});
formatter.result({
  "duration": 2237850489,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Regression test",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application;regression-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Blank Test",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps1.Blank_Test()"
});
formatter.result({
  "duration": 335692,
  "status": "passed"
});
});