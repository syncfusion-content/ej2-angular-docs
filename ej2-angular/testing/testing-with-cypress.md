---
layout: post
title: Angular Cypress Testing with Syncfusion Angular Component | Syncfusion
description: Learn here all about how to perform the E2E & Component testing with Syncfusion Angular components in Angular web applications using Cypress.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Angular Cypress Testing

This guide describes how to perform end-to-end (E2E) and component testing with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components in Angular web applications using Cypress.

## What is Cypress?

Cypress is a JavaScript-based E2E testing framework designed for modern web applications. It enables efficient, reliable front-end testing of user interfaces and behavior.

For more information, see the official [Cypress documentation](https://docs.cypress.io/guides/overview/why-cypress.html).

## Integrating Cypress with Angular

To integrate Cypress with Angular, follow the below steps.

1.Create a new Angular application and add the Syncfusion<sup style="font-size:70%">&reg;</sup> DataGrid component by following the [getting started](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-cli) documentation.

2.Once create the application, run the below command to install the Cypress.

{% tabs %}
{% highlight js tabtitle="CMD" %}

ng add @cypress/schematic

{% endhighlight %}
{% endtabs %}

![Cypress installation](../../common/how-to/images/install-cypress.png)

## Cypress Testing Types

Cypress supports two [types of testing](https://docs.cypress.io/guides/core-concepts/testing-types).

* [E2E Testing](#cypress-e2e-testing-of-syncfusion-angular-components)
* [Component Testing](#cypress-component-testing-of-syncfusion-angular-components)

For a comparison of Cypress testing types, see the [documentation](https://docs.cypress.io/guides/core-concepts/testing-types#Testing-Type-Comparison).

## Cypress E2E Testing of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Components 

The steps below demonstrate E2E testing of the Angular DataGrid component.

1. In `./cypress/e2e/spec.cy.ts`, add the following test code:

{% tabs %}
{% highlight ts tabtitle="spec.cy.ts" %}

describe('My First Test', () => {

  it('Visits the initial project page', () => {
    cy.visit('/')
  })

  it('should contain Grid rows', () => {
    cy.visit('/')
    cy.get('.e-grid').should('be.visible')
    cy.get('.e-grid').find('.e-row').should('have.length', 3)
  })
})


{% endhighlight %}
{% endtabs %}

2. Start Cypress E2E testing with this command:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

ng e2e

{% endhighlight %}
{% endtabs %}

3. The Cypress dashboard will open. Start E2E testing and select the `spec.cy.ts` file to run the tests.

![Cypress dashboard](../../common/how-to/images/cypress-e2e.png)

4. On completion, Cypress displays the result:

![Cypress test result](../../common/how-to/images/cypress-e2e-result.png)

For more information about Cypress E2E testing, refer to this [documentation](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test).

## Cypress Component Testing of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Components 

The following steps explain how to test the Angular DataGrid component in [Cypress component testing](https://docs.cypress.io/guides/component-testing/overview).

1. Create a new `app.component.cy.ts` file in the `./src/app` folder.
2. Add the following code:

{% tabs %}
{% highlight ts tabtitle="app.component.cy.ts" %}

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    it('should contain syncfusion Grid sample', () => {
        cy.mount(AppComponent)
        cy.get('.e-grid').should('be.visible')
    })

    it('should contain Grid rows', () => {
        cy.mount(AppComponent)
        cy.get('.e-grid').find('.e-row').should('have.length', 3)
    })
})

{% endhighlight %}
{% endtabs %}

3.To start the test cases, run the following command.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

ng e2e

{% endhighlight %}
{% endtabs %}

4.This will opens the dashboard. Switch to component testing type and select the `app.component.cy.ts` file to run the test cases.

![Cypress dashboard](../../common/how-to/images/cypress-component.png)

5. When tests complete, results will be shown:

![Cypress test result](../../common/how-to/images/cypress-testing.png)

6. If a licensing banner appears in automation browsers, [register the Syncfusion<sup style="font-size:70%">&reg;</sup> license key](https://ej2.syncfusion.com/angular/documentation/licensing/license-key-registration#register-syncfusion-license-key-in-the-project) in `./cypress/support/component.ts`:

{% tabs %}
{% highlight ts tabtitle="app.component.cy.ts" %}

import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('License Key');

{% endhighlight %}
{% endtabs %}

> [View the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Cypress testing sample on GitHub](https://github.com/SyncfusionExamples/Syncfusion-Angular-Cypress-Testing)