---
layout: post
title: Getting started with Angular Progress bar component | Syncfusion
description:  Checkout and learn about Getting started with Angular Progress bar component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Progress Bar Component

This section explains the steps required to create a progress bar and demonstrate the basic usage of the Progress bar component. By the end of this guide, you will have a fully functional progress bar running in your Angular application.

## Dependencies

Below is the list of minimum dependencies required to use the progressbar component.

```javascript
    |-- @syncfusion/ej2-angular-progressbar
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data: "*"
    |-- @syncfusion/ej2-svg-base
```

## Prerequisites

Before you begin, ensure that Node.js and npm are installed on your system.

## Installation and Configuration

* You can use `Angular CLI` to set up your Angular applications.

  ```shell
  npm install -g @angular/cli
  ```

 For more information, refer to [Angular sample setup](https://angular.dev/tools/cli/setup-local)

 ## Create an Angular Application

Start a new Angular application using below Angular CLI command.

```bash
ng new my-app
cd my-app
```
## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Progress Bar Package

* Install the Progress bar package using the following command:

  ```javascript
  npm install @syncfusion/ej2-angular-progressbar --save
  ```

 The above package installs `progressbar dependencies` which are required to render the component in Angular environment

## Add Progress Bar Component

Modify the template in `app.component.ts` file to render the `ej2-ng-progressbar` component.

File: `src/app/app.component.ts`

```javascript

import { ProgressBarModule } from '@syncfusion/ej2-angular-progressbar'
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
imports: [
         ProgressBarModule
    ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Charts component
    template: `<ejs-progressbar id='percentage'></ejs-progressbar>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent  { }

```

Now use the **app-container** in the index.html instead of default one.

```html
<app-container></app-container>
```

* Now run the application in the browser using the below command.

```
ng serve
```

After the development server starts, open your browser and navigate to `http://localhost:4200/`. You should see the basic progress bar component displayed on the page.

The following example demonstrates a basic Progress bar component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progressbar/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progressbar/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progressbar/getting-started-cs1" %}