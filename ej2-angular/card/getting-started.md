---
layout: post
title: Getting Started with Angular Card Component | Syncfusion
description:  Checkout and learn about Getting started with Angular Card component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Card 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Card component

This section explains how to create a simple Card component using CSS classes, and configure the card structure including header sections, content areas, and action buttons with their available functionalities in Angular.

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

Start a new Angular application using the Angular CLI command below.

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Card package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> packages from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components:
1. Ivy library distribution package [format](https://v17.angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler (Angular's legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-layouts`](https://www.npmjs.com/package/@syncfusion/ej2-angular-layouts/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-layouts --save
```

### Angular compatibility compiled package (ngcc)

For Angular versions below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package use the command below.

Add [`@syncfusion/ej2-angular-layouts@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-layouts/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-layouts@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as shown below.

```bash
@syncfusion/ej2-angular-layouts:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding CSS reference

The following CSS files are available in the `../node_modules/@syncfusion` package folder.
These can be referenced in [src/styles.css] using the following code.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';  

```

## Adding a simple Card

Add the HTML `div` element with the `e-card` class into your `index.html`.

`[src/index.html]`

```html
        <div class = "e-card">
          Sample Card
        </div>
```

## Adding a header to the card

Cards can be created with a header using a specific structure. To add a header, create a `div` element and add the `e-card-header` class.

You can include a heading inside the card header by adding a `div` element with the `e-card-header-caption` class, and content can be added using an element with the `e-card-content` class. For detailed information, refer to the [Header and Content](./header-content).

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

Now, run the application in the browser using the following command.

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

* [How to add a header and content](./header-content)