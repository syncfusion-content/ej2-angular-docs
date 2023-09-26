---
layout: post
title: Getting started with Angular Tooltip component | Syncfusion
description:  Checkout and learn about Getting started with Angular Tooltip component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Tooltip component

This section briefly explains how to create a simple **Tooltip** component and configure its available functionalities in angular.

## Dependencies

The following list of dependencies are required to use Tooltip component in your application.

```javascript
|-- @syncfusion/ej2-angular-popups
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
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

## Installing Syncfusion Tooltip package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-popups`](https://www.npmjs.com/package/@syncfusion/ej2-angular-popups/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-popups --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-popups@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-popups/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-popups@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-popups:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Registering Tooltip Module

* Import Tooltip module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-popups`.

```javascript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Syncfusion ej2-angular-popups module
import { TooltipModule } from '@syncfusion/ej2-angular-popups';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, TooltipModule ], //declaration of TooltipModule module into NgModule
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

## Adding CSS Reference

* Add Tooltip component's styles as given below in `styles.css`.

`[style.css]`

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-angular-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-angular-popups/styles/material.css";
```

> We can also use [CRG](https://crg.syncfusion.com/) to generate combined component styles.

## Add Tooltip component

Modify the template in `app.component.ts` file to render the `Tooltip` component. Add the Angular Tooltip by using `<ejs-tooltip>` selector in `template` section of the app.component.ts file.

```javascript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
        <ejs-tooltip id='tooltip' content='Tooltip content'>
            Hover Me
        </ejs-tooltip>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  { }
```

## Run the application

* Now, run the application in the browser using the following command.

```shell
ng serve --open
```

The following code example depicts the way to initialize Tooltip on a single element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tooltip/getting-started-cs7/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs7" %}

### Initialize Tooltip within a container

It is possible to create Tooltip on multiple targets within a container. To do so, define the `selector` property with specific target elements - so that the tooltip will be initialized only on those matched targets within a container. In this case, the Tooltip content gets assigned from the `title` attribute of the target element.

Refer the following code example, to create a Tooltip on multiple targets within a container.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tooltip/getting-started-cs8/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs8" %}

> In the above sample, `details` refers to the container's id, and the target `.e-info` refers to the target elements available
> within that container.

## See Also

[Positioning Tooltip](./position)

[Tooltip Open Mode](./open-mode)

[Customize the Tooltip](./customization)
