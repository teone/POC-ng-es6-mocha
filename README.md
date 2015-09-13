# POC Angular, Browserify, Mocha and ES6 Modules

After reading [this](https://medium.com/@tomastrajan/proper-testing-of-angular-js-applications-with-es6-modules-8cf31113873f) arcticle I start wondering if this concept is applicable to nowadays angular applications and what the effort will be.

## Doubt

Angular has it own [DI](https://docs.angularjs.org/guide/di), so was not sure that handle DI with **common.js** and **Browserify** was a good idea and how much complicated it will be. I tried this way one year ago with ES5 and it gives no advantages, simply add a complexity layer.

## Results

Introducing **Browserify** along with **Babel**, **Babelify** and **Watchify** has not been so complicated and the process can be handled in **npm scripts**. This add a layer of complexity in one direction, but allows you to remove complexity elsewhere as you can remove **gulp** and **bower**.

With this environment setup you are allowed to use great ES6 features like **modules**, to have a better separation of you application structure and define you angular application in a single file.

The biggest advantage of this approach is that you can now **Unit Test** your code without rely on angular's DI, with some great emprovement:

- Angular context does not need to be loaded in each test
- You don't have to mock angular DI
- You can choose your testing framework
- Tests are faster

## POC

In this proof of concept we use **mocha**, **chai** and **sinon** to test a basic controller.

### Getting Started

To get started just clone this repo and run: `npm start`.

This will install dependencies, create a bundle of your code, open your app in the browser and run tests.

Thanks to **watchify**, **browser-sync** and **mocha**, any update to your file will trigger an incrementally rebuilt of your code, reload the browser and re-run the tests.

### Things missing

- A build Script
- Service Unit tests
- UI emprovement
- Code Documentation (ng-doc)
