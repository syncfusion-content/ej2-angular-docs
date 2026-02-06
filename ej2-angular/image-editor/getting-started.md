---
layout: post
title: Getting started with Angular Image Editor component | Syncfusion
description: Checkout and learn how to get started with the Angular Image Editor component of Syncfusion Essential JS 2.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Image Editor component

This article shows how to set up and use the [Angular Image Editor](https://www.syncfusion.com/angular-components/angular-image-editor) module.

To get started quickly with the Angular Image Editor using the Angular CLI, watch the video below.

{% youtube "https://www.youtube.com/watch?v=NmuHFPCg0UU" %}

## Dependencies

The list of dependencies required to use the Image Editor module in an Angular application is shown below:

```javascript
|-- @syncfusion/ej2-angular-image-editor
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-image-editor
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-data
        |-- @syncfusion/ej2-buttons
        |-- @syncfusion/ej2-lists
        |-- @syncfusion/ej2-dropdowns
        |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-splitbuttons
```

## Setup Angular environment

Use [Angular CLI](https://github.com/angular/angular-cli) to set up an Angular application. To install the Angular CLI, run:

```
npm install -g @angular/cli
```

## Create an Angular application

Create a new Angular application using the Angular CLI:

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Image Editor package

To install the Image Editor package, run:

```bash
npm install @syncfusion/ej2-angular-image-editor --save
```

The package installs the [Image Editor dependencies](./getting-started#dependencies) required to render the component.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Image Editor component

Use the following snippet in the `src/app/app.ts` file to import the Image Editor component.

```typescript
import { Component } from '@angular/core';
import { ImageEditorModule } from '@syncfusion/ej2-angular-image-editor';

@Component({
  imports: [ImageEditorModule],
  standalone: true,
  selector: 'app-root',
  template: `<!-- To render Image Editor. -->
    <div id="wrapperDiv" style="width:550px;height:350px;">
        <ejs-imageeditor></ejs-imageeditor>
    </div>`
})
export class App { }
```

## Adding CSS reference

The following CSS files are available in the `../node_modules/@syncfusion` package folder. Reference them in `src/styles.css` as shown below. Choose one theme consistently (for example, Material, Tailwind, Fluent, or Bootstrap).

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

Run the application in the browser with:

```bash
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

> Explore the [Angular Image Editor example](https://ej2.syncfusion.com/angular/demos/#/tailwind3/image-editor/default) on the Syncfusion demos site for a working demonstration of the component.
