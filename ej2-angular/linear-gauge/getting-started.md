---
layout: post
title: Getting started with Angular Linear gauge component | Syncfusion
description:  Checkout and learn about Getting started with Angular Linear gauge component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Linear gauge component

<!-- markdownlint-disable MD013 -->

This section explains the steps required to create a simple Linear Gauge and demonstrate the basic usage of the Linear Gauge component.

## Dependencies

Below is the list of minimum dependencies required to use the Linear Gauge component.

```javascript
|-- @syncfusion/ej2-angular-lineargauge
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-angular-lineargauge
    |-- @syncfusion/ej2-lineargauge
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-svg-base
```

## Setup Angular Environment

[`Angular CLI`](https://github.com/angular/angular-cli) can be used to setup the Angular applications. To install Angular CLI use the following command.

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Start a new Angular application using below Angular CLI command.

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion Linear Gauge package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-lineargauge`](https://www.npmjs.com/package/@syncfusion/ej2-angular-lineargauge/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-lineargauge --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-lineargauge@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-lineargauge/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-lineargauge@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-lineargauge:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Registering LinearGauge Module

Import **LinearGaugeModule** into Angular application in the **src/app/app.module.ts** file from the package `@syncfusion/ej2-angular-lineargauge`.

```typescript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the LinearGaugeModule for the LinearGauge component
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of Linear Gauge module in NgModule
  imports:      [ BrowserModule, LinearGaugeModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

* Modify the template in **app.component.ts** file to render the Linear Gauge component.
`[src/app/app.component.ts]`.

   ```javascript
    import { Component, ViewEncapsulation } from '@angular/core';

    @Component({
     selector: 'app-container',
     // specifies the template string for the LinearGauge component
      template: `<ejs-lineargauge id='linear-container'></ejs-lineargauge>`,
      encapsulation: ViewEncapsulation.None
    })
    export class AppComponent  { }
  ```

   Now use the `<code>app-container</code>` in the index.html instead of default one.

    ```
    <app-container></app-container>
    ```

* Now run the application in the browser using the below command.

   ```
    npm start
   ```

The below example shows a basic Linear Gauge.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/getting-started-cs1" %}

## Module Injection

LinearGauge component is segregated into the individual feature-wise modules. In order to use a particular feature, inject its feature module using the `providers: {}`. Please find the feature module name and description as follows.

* `AnnotationsService` - Inject this provider to use Annotation feature.
* `GaugeTooltipService` - Inject this provider to use Tooltip feature.

These modules should be injected in the providers section of the **app.module.ts** file as follows,

 ```javascript
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { AppComponent } from './app.component';
    import { LinearGaugeComponent } from '@syncfusion/ej2-angular-lineargauge';
    import { AnnotationsService, GaugeTooltipService} from '@syncfusion/ej2-angular-lineargauge';

    @NgModule({
        imports: [
            BrowserModule,
        ],
        declarations: [AppComponent, LinearGaugeComponent],
        bootstrap: [AppComponent],
        providers: [ AnnotationsService, GaugeTooltipService ]
    })

```

## Add Gauge Title

The title can be added to the Linear Gauge component using the [`title`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/linearGaugeModel/#title-string) property in the Linear Gauge.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/getting-started-cs2" %}

## Axis Range

The range of the axis can be set using the [`minimum`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/axis/#minimum-number) and [`maximum`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/axis/#maximum-number) properties in the Linear Gauge.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/getting-started-cs3" %}

To denote the axis labels with temperature units, add the °C as suffix to each label. This can be achieved by setting the **{value}°C** to the [`format`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/labelModel/#format-string) property in the [`labelStyle`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/axis#labelstyle-labelmodel) object of the axis. Here, **{value}** acts as a placeholder for each axis label.

To change the pointer value from the default value of the gauge, set the [`value`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointer/#value-number) property in [`pointers`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointerModel/) object of the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/getting-started-cs4" %}

## Setting the value of pointer

The pointer value is changed in the below sample using the [`value`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointer/#value-number) property in [`pointers`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointer) object of the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/getting-started-cs5" %}
