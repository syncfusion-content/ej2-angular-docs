---
layout: post
title: Getting started with Angular Card component | Syncfusion
description:  Checkout and learn about Getting started with Angular Card component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Card component

This section explains how to create a simple **Card** using Styles, and how to configure the structure for the header section, Horizontal, action buttons, content section, and configure its available functionalities in Angular using Angular quickstart.

## Dependencies

The Card Component is pure CSS component so no specific dependencies to render the card.

```js
|-- @syncfusion/ej2-layouts
```

## Setup Angular Environment

You can use [`Angular CLI`](https://github.com/angular/angular-cli) to setup your Angular applications.
To install Angular CLI use the following command.

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Start a new Angular application using below Angular CLI command.

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Card package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://v17.angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-layouts`](https://www.npmjs.com/package/@syncfusion/ej2-angular-layouts/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-layouts --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-layouts@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-layouts/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-layouts@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-layouts:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding CSS reference

The following CSS files are available in `../node_modules/@syncfusion` package folder.
This can be referenced in [src/styles.css] using following code.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';  

```

## Adding a simple Card

* Add the HTML `div` element with `e-card` class into your `index.html`.

`[src/index.html]`

```html
        <div class = "e-card">
          Sample Card
        </div>
```

## Adding a header to the card

You can create cards with a header in a specific structure. For adding header you need to create `div` element and add `e-card-header` class.

* You can include heading inside the card header by adding an `div` element with `e-card-header-caption` class, and also content will be added by adding element with `e-card-content`. For detailed information, refer to the [Header and Content](./header-content/).

  ```html
        <div class="e-card"> --> Root Element
            <div class="e-card-header"> --> Root Header Element
                <div class="e-card-header-caption"> --> Root Heading Element
                    <div class="e-card-header-title"></div> --> Heading Title Element
                </div>
            </div>
            <div class="e-card-content"></div> --> Card content Element
        </div>
  ```

* Now, run the application in the browser using the following command.

     ```
       npm start
     ```

Output will be as follows:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/card/card-header-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/card/card-header-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/card/card-header-cs2" %}

## See Also

* [How to add a header and content](./header-content/)
