---
layout: post
title: Getting started with Angular Accordion component | Syncfusion
description:  Checkout and learn about Getting started with Angular Accordion component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Accordion
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Accordion component

This section explains how to create a simple [Angular Accordion](https://www.syncfusion.com/angular-components/angular-accordion) and configure its core functionalities, such as expanding and collapsing items, in Angular using Angular CLI. The Accordion component is ideal for organizing content into collapsible sections, supporting single or multiple item expansion.

To get started quickly with the Angular Accordion, watch this video demonstrating its basic setup and configuration:

{% youtube "https://www.youtube.com/watch?v=NqmBYegDskk" %}

## Dependencies

The following dependencies are required to use the Accordion component in your Angular application:

```javascript
|-- @syncfusion/ej2-angular-navigations
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-navigations
```

## Setup Angular Environment

Use [`Angular CLI`](https://github.com/angular/angular-cli) to set up your Angular application. Install Angular CLI with the following command:

```bash
npm install -g @angular/cli
```
> **Angular 21 Standalone Architecture:** Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. If you need more information about the standalone architecture, refer to the [Standalone Guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone).

### Installing a specific version

To install a particular version of Angular CLI, use:

```bash
npm install -g @angular/cli@21.0.0
```

## Create a new application

With Angular CLI installed, execute this command to generate a new application:

```bash
ng new syncfusion-angular-app
```

* This command will prompt you to configure settings like enabling Angular routing and choosing a stylesheet format.

```bash

? Which stylesheet format would you like to use? (Use arrow keys)
> CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ]
  Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less            [ http://lesscss.org                                             ]

```

* By default, a CSS-based application is created. Use SCSS if required:

```bash
ng new syncfusion-angular-app --style=scss
```

* During project setup, when prompted for the Server-side rendering (SSR) option, choose the appropriate configuration.

![Initial_setup](images/SSR.png)

* Select the required AI tool or 'none' if you do not need any AI tool.

![Initial_setup](images/Ai.png)

* Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> Note: In Angular 19 and below, it uses `app.component.ts`, `app.component.html`, `app.component.css` etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Accordion package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available on npm as `@syncfusion` scoped packages. Find all Angular Syncfusion<sup style="font-size:70%">&reg;</sup> packages at [npm](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Syncfusion<sup style="font-size:70%">&reg;</sup> provides two package structures for Angular components:
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-navigations`](https://www.npmjs.com/package/@syncfusion/ej2-angular-navigations/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-navigations --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-navigations@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-navigations/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-navigations@ngcc --save
```

In the `package.json` file, specify the ngcc package version with the `-ngcc` suffix:

```bash
@syncfusion/ej2-angular-navigations:"20.2.38-ngcc"
```

> Note: Without the `-ngcc` suffix, the Ivy package is installed by default, which may cause warnings for Angular versions below 12.

## Adding CSS reference

Include the following CSS files from the `../node_modules/@syncfusion` folder in `[src/styles.css]`:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material3';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material3';
```

## Add Accordion component

Modify the template in `[src/app/app.component.ts]` to render the Accordion component using the `<ejs-accordion>` selector:

```typescript
import { AccordionModule } from '@syncfusion/ej2-angular-navigations'
import { Component } from '@angular/core';

@Component({
imports: [
  AccordionModule
],
standalone: true,
selector: 'app-root',
  // specifies the template string for the Accordion component
  template: ` <ejs-accordion>
        <e-accordionitems>
          <e-accordionitem expanded='true'>
            <ng-template #header>
              <div>ASP.NET</div>
            </ng-template>
            <ng-template #content>
              <div>Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web
                services. ASP.NET pages execute on the server and generate markup such as HTML, WML, or XML that is sent to a desktop
                or mobile browser. ASP.NET pages use a compiled,event-driven programming model that improves performance and enables
                the separation of application logic and user interface.</div>
            </ng-template>
          </e-accordionitem>
          <e-accordionitem>
            <ng-template #header>
              <div>ASP.NET MVC</div>
            </ng-template>
            <ng-template #content>
              <div>The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model,
                the view, and the controller. The ASP.NET MVC framework provides an alternative to the ASP.NET Web Forms pattern for
                creating Web applications. The ASP.NET MVC framework is a lightweight, highly testable presentation framework that
                (as with Web Forms-based applications) is integrated with existing ASP.NET features, such as master pages and membership-based
                authentication.
              </div>
            </ng-template>
          </e-accordionitem>
          <e-accordionitem>
            <ng-template #header>
              <div>JavaScript</div>
            </ng-template>
            <ng-template #content>
              <div>JavaScript (JS) is an interpreted computer programming language.It was originally implemented as part of web browsers
                so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter
                the document content that was displayed.More recently, however, it has become common in both game development and
                the creation of desktop applications.</div>
            </ng-template>
          </e-accordionitem>
        </e-accordionitems>
      </ejs-accordion>`
})
export class AppComponent { }
```

## Initialize the Accordion using Items
The Accordion can be populated using an array of [`items`](https://ej2.syncfusion.com/angular/documentation/api/accordion#items) property for dynamic data. The following example demonstrates initialization with `items`:

```javascript
import { AccordionModule } from '@syncfusion/ej2-angular-navigations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AccordionModule],
  template: `
    <ejs-accordion [items]="accordionItems"></ejs-accordion>
  `,
})
export class AppComponent {
  public accordionItems = [
    {
      header: 'ASP.NET',
      content: `Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services. ASP.NET pages execute on the server and generate markup such as HTML, WML, or XML that is sent to a desktop or mobile browser. ASP.NET pages use a compiled, event-driven programming model that improves performance and enables the separation of application logic and user interface.`,
      expanded: true,
    },
    {
      header: 'ASP.NET MVC',
      content: `The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller. The ASP.NET MVC framework provides an alternative to the ASP.NET Web Forms pattern for creating Web applications. It is lightweight, highly testable, and integrates with existing ASP.NET features like master pages and membership-based authentication.`,
    },
    {
      header: 'JavaScript',
      content: `JavaScript (JS) is an interpreted programming language originally implemented in web browsers to enable client-side scripting. It allows interaction with users, asynchronous communication, and dynamic content updates. Today, JavaScript is widely used in game development and desktop application creation as well.`,
    },
  ];
}

```

* Run the application in the browser using the following command.

```shell
npm start
```

The following example shows how to initialize the Accordion:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/accordion/accordion-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/accordion/accordion-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/accordion/accordion-cs4" %}

## Initialize the Accordion using HTML elements

Alternatively, the Accordion can be rendered using HTML elements within the `<ejs-accordion>` tag. Follow this structure:

```html
  <ejs-accordion>   <!-- Root Accordion Element -->
       <div>      <!-- Accordion Item Container -->
            <div>   <!-- Accordion Header Container -->
                <div> </div> <!-- Accordion Header -->
            </div>
            <div>  <!-- Accordion Panel Container -->
                <div> </div> <!-- Accordion Content -->
             </div>
        </div>
  </ejs-accordion>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/accordion/accordion-container-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/accordion/accordion-container-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/accordion/accordion-container-cs1" %}

> You can customize the Accordion’s appearance using the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/accordion/accordionItem#cssclass) property.

## See Also

* [How to load accordion items dynamically](./how-to/load-accordion-items-dynamically)

> Refer to the [Angular Accordion](https://www.syncfusion.com/angular-components/angular-accordion) feature tour page for its groundbreaking features or explore the [Angular Accordion example](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/accordion/default) to see how to configure the Accordion in Angular.