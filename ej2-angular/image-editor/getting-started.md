---
layout: post
title: Getting started with Angular Image editor component | Syncfusion
description:  Checkout and learn about Getting started with Angular Image editor component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Image editor component

This section explains how to create and demonstrate the basic usage of the [Angular Image Editor](https://www.syncfusion.com/angular-components/angular-image-editor) module.

To get started quickly with angular Image Editor component using angular CLI, you can check the video below.

{% youtube "https://www.youtube.com/watch?v=NmuHFPCg0UU" %}

## Dependencies

The list of dependencies required to use the Image Editor module in your application is given below:

```javascript
|-- @syncfusion/ej2-angular-image-editor
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-base
     -- @syncfusion/ej2-data
    |-- @syncfusion/ej2-buttons
     -- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-image-editor
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
```

## Setup Angular environment

You can use [Angular CLI](https://github.com/angular/angular-cli) to setup your Angular applications. To install Angular CLI use the following command.

```
npm install -g @angular/cli
```

## Create an Angular application

Start a new Angular application using below Angular CLI command.

```
ng new my-app
cd my-app
```

## Installing Syncfusion Image Editor package

To install Image Editor package, use the following command.

```
npm install @syncfusion/ej2-angular-image-editor --save
```

The above package installs [Image Editor dependencies](./getting-started#dependencies) which
are required to render the component in the Angular environment.

## Adding Image Editor module

Import Image Editor module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-image-editor`.

```typescript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importing ImageEditorModule from ej2-angular-image-editor package.
import { ImageEditorModule } from '@syncfusion/ej2-angular-image-editor';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, ImageEditorModule ], // Declaration of ImageEditor module into NgModule.
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

```

## Adding Syncfusion Image Editor component

Modify the template in `app.component.ts` file to render the Angular Image Editor component.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px;">
               <ejs-imageeditor></ejs-imageeditor>
              </div>`
})
export class AppComponent  { }
```

## Adding CSS reference

Add Angular Image Editor component's styles as given below in `style.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-image-editor/styles/material.css";
```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The following example shows a basic Image Editor component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs6" %}

> You can also explore our [Angular Image Editor example](https://ej2.syncfusion.com/angular/demos/#/material/image-editor/default.html) that shows how to render the Image Editor in Angular.
