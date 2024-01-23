---
layout: post
title: Getting Started with Angular Progress Button Component | Syncfusion
description:  Checkout and learn about Getting started with Angular Progress bar component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Progress Button Component

This section explains you the steps required to create a progressbar and demonstrate the basic usage of the progressbar control.

## Dependencies

Below is the list of minimum dependencies required to use the progressbar component.

```javascript
    |-- @syncfusion/ej2-angular-progressbar
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data: "*"
    |-- @syncfusion/ej2-svg-base
```

## Installation and Configuration

* You can use `Angular CLI` to setup your angular applications.

  ```shell
  npm install -g @angular/cli
  ```

 For more information, refer to [Angular sample setup](https://angular.io/guide/setup)

 ## Create an Angular Application

Start a new Angular application using below Angular CLI command.

```bash
ng new my-app
cd my-app
```
## Installing Syncfusion progressbar package

* Install progressbar packages using below command.

  ```javascript
  npm install @syncfusion/ej2-angular-progressbar --save
  ```

 The above package installs `progressbar dependencies` which are required to render the component in Angular environment

## Registering progressbar Module

* Import Chart module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-progressbar`

`[src/app/app.module.ts]`.

```javascript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the ProgressBarModule for the Chart component
import { ProgressBarModule } from '@syncfusion/ej2-angular-progressbar';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of ej2-ng-progressbar module into NgModule
  imports:      [ BrowserModule, ProgressBarModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

* Modify the template in `app.component.ts` file to render the `ej2-ng-progressbar` component

`[src/app/app.component.ts]`.

```javascript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-container',
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
npm start
```

The below example shows a basic Progressbar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progressbar/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/progressbar/getting-started-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progressbar/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/progressbar/getting-started-cs1" %}