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

## Adding Syncfusion Tooltip package

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.

To install Tooltip component, use the following command.

```
npm install @syncfusion/ej2-angular-popups --save
```

> The **--save** will instruct NPM to include the tooltip package inside of the `dependencies` section of the `package.json`.

## Registering Tooltip Module

* Import Tooltip module into Angular application(app.module.ts) from the package
`@syncfusion/ej2-angular-popups`.

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
{% include code-snippet/tooltip/getting-started-cs27/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tooltip/getting-started-cs27/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs27/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs27" %}

### Initialize Tooltip within a container

It is possible to create Tooltip on multiple targets within a container. To do so, define the `selector` property with specific target elements - so that the tooltip will be initialized only on those matched targets within a container. In this case, the Tooltip content gets assigned from the `title` attribute of the target element.

Refer the following code example, to create a Tooltip on multiple targets within a container.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs28/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tooltip/getting-started-cs28/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs28/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs28" %}

> In the above sample, `details` refers to the container's id, and the target `.e-info` refers to the target elements available
> within that container.

## See Also

[Positioning Tooltip](./position)

[Tooltip Open Mode](./open-mode)

[Customize the Tooltip](./customization)
