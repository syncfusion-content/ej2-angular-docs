---
layout: post
title: Getting started with Angular Range slider component | Syncfusion
description:  Checkout and learn about Getting started with Angular Range slider component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Range slider component

The Slider component is available in `@syncfusion/ej2-angular-inputs` package. Utilize this package to render the Slider Component.

## Setting up angular project

Angular provides the easiest way to set angular CLI projects using [`Angular CLI`](https://github.com/angular/angular-cli) tool.

Install the CLI application globally to your machine.

```bash
npm install -g @angular/cli
```

## Create a new application

```bash
ng new syncfusion-angular-app
```

By default, it install the CSS style base application. To setup with SCSS, pass --style=SCSS argument on create project.

Example code snippet.

```bash
ng new syncfusion-angular-app --style=SCSS
```

Navigate to the created project folder.

```bash
cd syncfusion-angular-app
```

## Installing Syncfusion RangeSlider Package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-inputs`](https://www.npmjs.com/package/@syncfusion/ej2-angular-inputs/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-inputs --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-inputs@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-inputs/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-inputs@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-inputs:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding Slider Module

After installing the package, the component modules are available to configure into your application from installed syncfusion package. Syncfusion Angular package provides two different types of `ngModules`.

Refer to [`Ng-Module`](https://ej2.syncfusion.com/angular/documentation/common/ng-module.html) to learn about `ngModules`.

Refer to the following snippet to import the Slider module in `app.module.ts` from the `@syncfusion/ej2-angular-inputs`.

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Imported syncfusion Slider module from inputs package
import { SliderModule } from '@syncfusion/ej2-angular-inputs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    // Registering EJ2 Slider Module
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Adding Syncfusion Slider Component

Add the Slider component snippet in `app.component.ts` as follows.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>
    Hello Angular, Syncfusion Angular UI Slider!
  </h1>

  <ejs-slider id='slider' [value]=30></ejs-slider>
 `
 })
export class AppComponent {
}
```

## Adding Slider CSS reference

Add Slider component styles as given in the `angular-cli.json` file within the apps -> styles section.

>Note: If you are using Angular 6 project, add the changes in `angular.json` file.

```typescript
{
  "apps": [
    {
      "styles": [
        "styles.css",
        "./node_modules/@syncfusion/ej2-angular-inputs/styles/material.css",
        "../node_modules/@syncfusion/ej2-base/styles/material.css",
        "../node_modules/@syncfusion/ej2-buttons/styles/material.css",
        "../node_modules/@syncfusion/ej2-popups/styles/material.css"
      ]
    }
  ]
}
```

The below example shows a basic `Slider` example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/getting-started-01-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/getting-started-01-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/getting-started-01-cs1" %}

## Types

The types of Slider are as follows:

| **Types** | **Usage** |
| --- | --- |
| Default | Shows a default Slider to select a single value. |
| MinRange | Displays the shadow from the start value to the current selected value. |
| Range | Selects a range of values. It also displays the shadow in-between the selection range. |

>Both the Default Slider and Min-Range Slider have same behavior that is used to select a single value.
In Min-Range Slider, a shadow is considered from the start value to current handle position. But the Range Slider contains two handles that is used to select a range of values and a shadow is considered in between the two handles.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/getting-started-02-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/getting-started-02-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/getting-started-02-cs1" %}

## Customization

### Orientation

The Slider can be displayed, either in horizontal or vertical orientation. By default, the Slider renders in horizontal orientation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/getting-started-03-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/getting-started-03-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/getting-started-03-cs1" %}

### Tooltip

The Slider displays the tooltip to indicate the current value by clicking the Slider bar or drag the Slider handle. The Tooltip position can be customized by using the `placement` property. Also decides the tooltip display mode on a page, i.e., on hovering, focusing, or clicking on the Slider handle and it always remains/displays on the page.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/getting-started-04-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/getting-started-04-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/getting-started-04-cs1" %}

### Buttons

The Slider value can be changed by using the Increase and Decrease buttons. In Range Slider, by default the first handle value will be changed while clicking the button. Change the handle focus and press the button to change the last focused handle value.

> After enabling the slider buttons if the 'Tab' key is pressed, the focus goes to the handle
and not to the button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/getting-started-05-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/getting-started-05-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/getting-started-05-cs1" %}

## See Also

[Slider Types](#types)

[Slider Formatting](./format)

[Orientation Slider](#orientation)

[Ticks in Slider](./ticks)

[Tooltip in Slider](#tooltip)
