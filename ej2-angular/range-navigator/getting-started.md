---
layout: post
title: Getting started with Angular Range navigator component | Syncfusion
description:  Checkout and learn about Getting started with Angular Range navigator component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Range navigator component

This section explains you the steps required to create a simple RangeNavigator and demonstrate the basic usage of the RangeNavigator component in an Angular environment.

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

## Installing Syncfusion Chart package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-charts`](https://www.npmjs.com/package/@syncfusion/ej2-angular-charts/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-charts --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-charts@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-charts/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-charts@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-charts:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Add RangeNavigator component

Modify the template in `app.component.ts` file to render the `ej2-angular-charts` component `[src/app/app.component.ts]`.

```javascript

import { ChartModule, RangeNavigatorModule } from '@syncfusion/ej2-angular-charts';
import { Component,ViewEncapsulation } from '@angular/core';

@Component({
imports: [
  ChartModule, RangeNavigatorModule
],
standalone: true,
selector: 'app-root',
// specifies the template string for the RangeNavigator component
template: `<ejs-rangenavigator id="rn-container"></ejs-rangenavigator>`,
encapsulation: ViewEncapsulation.None
})
export class AppComponent { }

```

<!-- markdownlint-disable MD033 -->

Now use the <code>app-container</code> in the index.html instead of default one.

```
<app-container></app-container>
```

* Now run the application in the browser using the below command.

```
npm start
```

## Module Injection

To create range navigator with additional features, inject the required modules. The following modules are used to extend rangenavigator’s basic functionality.

* `AreaSeriesService` - Inject this module to use area series.
* `DateTimeService` - Inject this module to use date time axis.
* `RangeTooltipService` - Inject this module to show the tooltip.

These modules should be injected to the provider section as follows,

 ```javascript
    import { Component } from '@angular/core';
    import { ChartModule, RangeNavigatorModule } from '@syncfusion/ej2-angular-charts';
    import { AreaSeriesService, DateTimeService, RangeTooltipService } from '@syncfusion/ej2-angular-charts';

    @Component({
        imports: [
            ChartModule,
            RangeNavigatorModule
        ],
        standalone: true,
        providers: [ AreaSeriesService, DateTimeService, RangeTooltipService ]
    })

 ```

## Populate Range Navigator with Data

Now, we are going to provide data to the range navigator. Add a series object to the range navigator  by using `series` property. Now map the field names x and y in the JSON data to the `xName` and `yName` properties of the series, then set the JSON data to dataSource property.
Since the JSON contains Datetime data, set the `valueType` as `DateTime`. By default, the axis valueType is Numeric.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/getting-started/default-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/getting-started/default-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/getting-started/default-cs6" %}

>Note: Get data from [here](https://ej2.syncfusion.com/demos/src/range-navigator/data-source/default-data.json).

The sample should look like our [default](https://ej2.syncfusion.com/angular/demos/#/material/range-navigator/default), don’t worry about the gradient color, let it takes the default color.

## Enable Tooltip

The tooltip is useful to show the selected data. You can enable tooltip by setting the enable property as true in `tooltip` object and by injecting `RangeTooltipService` module into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/getting-started/tooltip-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/getting-started/tooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/getting-started/tooltip-cs1" %}