---
layout: post
title: Angular selenium in Angular Frameworks & Syncfusion feature component.
description: Learn here all about Angular selenium in Syncfusion Angular Frameworks and Syncfusion feature component.
platform: ej2-angular
control: Angular E2E
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started for Selenium E2E Testing using Protractor in Angular

This documents explains the selenium E2E testing for Angular web applications using `Protractor`.

N> Starting from Angular version 12, the Angular CLI no longer includes Protractor by default and has plans to remove Protractor support in the future. As a result, Protractor reached its end-of-life in August 2023. For more information, refer to this [article]("https://blog.angular.io/the-state-of-end-to-end-testing-with-angular-d175f751cb9c").

## Selenium

Selenium is the most preferred framework for End-to-End (E2E) testing of the web applications. But users cannot utilize Selenium directly for the dynamic web applications such as Angular.

Normally, HTML elements are located using CSS selectors such as ID, Class, attributes, and values in Selenium. However, when working with Angular applications, due to synchronization issues, you cannot identify Angular-specific attributes like ng-model, ng-class, ng-bind, and ng-options using regular CSS selectors.

[`Protractor`](https://www.protractortest.org/#/) is specifically developed to overcome the above problem in Selenium E2E testing for Angular web applications.

## Protractor

Protractor is a wrapper around WebDriverJS, which is the JavaScript binding for the WebDriver API. It is an End-to-End (E2E) testing framework specifically developed to automate Angular web applications using new locator strategies.

For more information about the list of Protractor API, refer to this [documentation](https://www.protractortest.org/#/api).

## E2E Testing for Angular

Using Protractor, users can test the web application either using `in-build ChromeDriver` of Chrome browser or `Selenium Standalone server`.

### Protractor with ChromeDriver

To setup the Protractor with ChromeDriver, set the `directConnect` property to true in the `e2e/protractor.conf.js` configuration file as shown below.

{% tabs %}
{% highlight js tabtitle="protractor.conf.js" h_lines="9" %}

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};

{% endhighlight %}
{% endtabs %}

The Angular web application created using Angular CLI prior to v12 will automatically include the configuration and setup for the built-in ChromeDriver Protractor E2E testing, along with a sample test case.

### Protractor with Standalone Selenium Server

To set up Protractor with a Selenium Standalone server, follow these steps:

1. Open the  Protractor configuration `e2e/protractor.conf.js` file.
2. Set the `directConnect` property to false.
3. Set the `seleniumAddress` property to `http://localhost:4444/wd/hub`.
4. Ensure that the Selenium server is up and running before executing the test cases. The Protractor configuration for Selenium standalone as shown in the following code block.

{% tabs %}
{% highlight js tabtitle="protractor.conf.js" h_lines="9 11" %}

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: false,
  baseUrl: 'http://localhost:4200/',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};

{% endhighlight %}
{% endtabs %}

To install/update and start the Selenium server, run the following commands before running the test cases and maintain the server in active state until the testing is finished.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

webdriver-manager update

webdriver-manager start

{% endhighlight %}
{% endtabs %}

## Testing Syncfusion Angular Component using Protractor

The Syncfusion Angular Components are accessed using Protractor locators like ID, CSS, name, and more. The following code samples explain how to use the Angular button component in Protractor testing.

1.To install the Angular Button component, refer to the [Getting Started](https://ej2.syncfusion.com/angular/documentation/button/getting-started#installing-syncfusion-button-package) documentation.

2.Set the ID to the Button component in the `./src/app/app.component.ts` file as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<!-- To render Button. -->
            <button id="my_button" ejs-button>Button</button>`
})
export class AppComponent  { }

{% endhighlight %}
{% endtabs %}

2.Get the EJ2 Angular Button component using the Protractor locator in the `./e2e/src/app.po.ts` file as follows.

{% tabs %}
{% highlight ts tabtitle="app.po.ts" %}

element(by.id('my_button')).getText()

{% endhighlight %}
{% endtabs %}

3.To check the actual and expected value, use the `expect` method in the `./e2e/src/app.e2e-spec.ts` file as follows.

{% tabs %}
{% highlight ts tabtitle="app.e2e-spec.ts" %}

import { AppPage } from './app.po';

it('should display welcome message', () => {
  page.navigateTo();
  // console.log(page.getTitleText());
  expect(page.getTitleText()).toEqual('BUTTON');
});

{% endhighlight %}
{% endtabs %}

4.To start the test cases, run the following command.

{% tabs %}
{% highlight js tabtitle="protractor.conf.js" %}

ng e2e

{% endhighlight %}
{% endtabs %}

## See also

* [Migration from Protractor to Cypress](https://docs.cypress.io/guides/end-to-end-testing/protractor-to-cypress)
* [Cypress Testing of Syncfusion Angular Components](./testing-with-cypress)