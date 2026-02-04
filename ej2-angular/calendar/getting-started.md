---
layout: post
title: Getting started with Angular Calendar component | Syncfusion
description:  Checkout and learn about Getting started with Angular Calendar component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Calendar component

This guide demonstrates how to set up and configure the Syncfusion Angular Calendar component, from initial installation through enabling core features like date selection and range restrictions. The Calendar component allows users to select dates with support for multiple date selection, custom formats, globalization, and week numbers.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

To get started quickly with Angular Calendar component using CLI and Schematics, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=I_A5xksToN0" %}

## Dependencies

Install the below required dependency package in order to use the `Calendar` component in your application.

```javascript
|-- @syncfusion/ej2-angular-calendars
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-calendars
        |-- @syncfusion/ej2-lists
        |-- @syncfusion/ej2-inputs
          |-- @syncfusion/ej2-splitbuttons
        |-- @syncfusion/ej2-popups
            |-- @syncfusion/ej2-buttons
```

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion Angular UI Components](../system-requirement).

## Setup Angular environment

Angular provides the easiest way to set up Angular CLI projects using the [Angular CLI](https://github.com/angular/angular-cli) tool.

Install the CLI application globally to your machine.

```bash
npm install -g @angular/cli
```

> **Angular 21 Standalone Architecture:** Standalone components are the default in Angular 21 and later. This guide uses the modern standalone architecture. If you need more information about standalone components, refer to the [Standalone Guide](./angular-standalone).

## Create a new application

With Angular CLI installed, execute this command to generate a new application:

```bash
ng new syncfusion-angular-calendar
```

* This command will prompt you to configure settings like enabling Angular routing and choosing a stylesheet format.

* By default, Angular CLI creates a CSS style-based application. Use SCSS if required:

```bash
ng new syncfusion-angular-calendar --style=scss
```

* Navigate to the created project folder.

```bash
cd syncfusion-angular-calendar
```

> Note: In Angular 19 and below, it uses `app.component.ts`, `app.component.html`, `app.component.css` etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Calendar package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Use the [ng add](https://angular.dev/reference/schematics) command to automatically configure the Calendar package:

```bash
ng add @syncfusion/ej2-angular-calendars
```

This command will install the package (v32.1.19), add peer dependencies, and configure the Material theme automatically.

**For Manual Installation:**

```bash
npm install @syncfusion/ej2-angular-calendars --save
```

>Note: Use @syncfusion/ej2-angular-calendars@32.1.19 for Angular 12+ (Ivy format). For legacy support, see the peer dependency requirements above.

## Import Syncfusion CSS styles

When using `ng add @syncfusion/ej2-angular-calendars`, the Material theme is automatically configured in `angular.json`. The Calendar component styles are included automatically.

If you need to manually add or customize the CSS, import the theme in `src/styles.css`:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-calendars/styles/material.css';
```

>If you want to refer the combined component styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Adding Calendar component

Now, modify the `src/app/app.ts` file to render the Calendar component using the `<ejs-calendar>` selector:

```javascript

import { CalendarModule } from '@syncfusion/ej2-angular-calendars'
import { Component } from '@angular/core';

@Component({
imports: [        
        CalendarModule //declaration of ej2-angular-calendars module into NgModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<!-- To Render Calendar -->
              <ejs-calendar></ejs-calendar>`
})
export class AppComponent  { }

```

## Running the application

After completing the configuration required to render a basic Calendar, run the following command to display the output in your default browser.

```
ng serve
```

The following example illustrates the output in your browser

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/calendar/getting-started-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/getting-started-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/getting-started-cs8" %}

## Setting the value, min and max dates

The following example demonstrates how to set value, min and max dates when initializing the Calendar. Here the Calendar allows selection of dates within a range from 9th to 15th. To learn more about range restriction in the Calendar, please refer to the [date range documentation](./date-range).

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/calendar/getting-started-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/getting-started-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/getting-started-cs9" %}

> You can refer to our [Angular Calendar](https://www.syncfusion.com/angular-components/angular-calendar) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Calendar example](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/calendar/default) that shows how to render the Calendar in Angular.

## See Also

* [Select multiple dates in the Calendar](./multi-select)
* [Render Calendar with specific culture](./globalization)
* [How to change the initial view of the Calendar](./calendar-views)
* [Render Calendar with week numbers](./how-to/render-the-calendar-with-week-numbers)
* [Show other month dates](./how-to/show-dates-of-other-months)