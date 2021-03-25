# Tests with JavaScript

## Tecnologies Used:

* [NodeJS](https://nodejs.org/en/)
* [Mocha](https://mochajs.org/)
* [Chai](https://www.npmjs.com/package/chai)

## Run:

* In project folder run: **mocha**

## Brief explanation

* TDD - Test Drive Development
  * Software development based on tests that are written before our production code.

* BDD - Behavior Driven Development
  * It is an Agile development technique that encourages collaboration between developers, quality sectors and non-technical or business people in a software project, it relates to the concept of verification and validation.

### The tests have three parts:

* RED: It's when the test result fails.
* GREEN: It's when the result test is positive.
* BLUE: Refactoring. 

![banner](https://github.com/pauloteixeira01/js-test/blob/main/img/banner.png)

### The process of creating test-oriented programming is simple:

  1.  **RED:** Write a test that fails. Think about what the code should do, describe the context and define what checks need to be done. There is no limit on the number of tests, so the less each test describes and checks the better, this is also known as **Baby Steps**. At the beginning there is also no need to worry about whether the class / method does not yet exist. Think about the test first and only after it is ready will you create the necessary architecture, and then the whole cycle begins again.
  
  2.  **GREEN:** Pass the test. Now, write the minimum code for the test to pass.

  3.  **BLUE:** Refactoring. It means that once the test has passed, look for whether the code can be improved, note that the code already works but in most cases there is always something that can make it smaller. Generally for a test to pass it is necessary to insert duplication through constants.
