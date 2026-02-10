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

This section explains the steps required to create a simple [Angular Range Navigator](https://www.syncfusion.com/angular-components/angular-range-selector) and demonstrates the basic usage of the Range Navigator component in an Angular environment.

## Setup angular environment

Use the [`Angular CLI`](https://github.com/angular/angular-cli) to set up an Angular application. For more details about Angular CLI and Node versions, please refer to this [page](https://ej2.syncfusion.com/angular/documentation/system-requirement).<br>

To install the Angular CLI, use the following command.

```bash
npm install -g @angular/cli
```

## Create an angular application

Start a new Angular application using below Angular CLI command.

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> chart package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> package from npm [link](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two package structures for Angular components:
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (>=20.2.36) have moved to the Ivy distribution to support the Angular Ivy rendering engine (see https://angular.io/guide/ivy); these packages are compatible with Angular version 21 and later. To install the package, run:

Add [`@syncfusion/ej2-angular-charts`](https://www.npmjs.com/package/@syncfusion/ej2-angular-charts/v/32.1.19) package to the application.

```bash
npm install @syncfusion/ej2-angular-charts --save
```

### Angular compatibility compiled package(ngcc)

For Angular versions below 12, use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To install the `ngcc` package, run:

Add [`@syncfusion/ej2-angular-charts@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-charts/v/32.1.19-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-charts@ngcc --save
```

To reference the ngcc package in `package.json`, append the suffix `-ngcc` to the package version, for example:

```bash
@syncfusion/ej2-angular-charts:"32.1.19-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Add rangeNavigator component

Modify the template in `app.component.ts` file to render the Range Navigators component `[src/app/app.component.ts]`.

```javascript

import { Component, ViewEncapsulation } from '@angular/core';
import { ChartModule, RangeNavigatorModule } from '@syncfusion/ej2-angular-charts';

@Component({
    imports: [ChartModule, RangeNavigatorModule],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the RangeNavigator component
    template: `<ejs-rangenavigator id="rn-container"></ejs-rangenavigator>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent { }

```

Now use the <code>app-container</code> in the `index.html` instead of default one.

```
<app-container></app-container>
```

* Now use the `npm start` command to run the application in the browser.

```
npm start
```

## Module injection

Range Navigator component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the `app.component.ts`. The following services are used to extend rangenavigator’s basic functionality.

* `AreaSeriesService` - Inject this module to use area series.
* `DateTimeService` - Inject this module to use date time axis.
* `RangeTooltipService` - Inject this module to show the tooltip.

Now import the above-mentioned modules from the chart package and inject them into the Range Navigator component through the `provider` section.

 ```javascript
    import { Component } from '@angular/core';
    import { ChartModule, RangeNavigatorModule, AreaSeriesService, DateTimeService, RangeTooltipService } from '@syncfusion/ej2-angular-charts';

    @Component({
        imports: [ChartModule, RangeNavigatorModule],
        standalone: true,
        providers: [ AreaSeriesService, DateTimeService, RangeTooltipService ]
    })
 ```

## Populate range navigator with data

Add a series object to the range navigator by using the [`series`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/rangenavigatorseriesmodel) property. Map the JSON fields `x` and `y` to the series [`xName`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/rangenavigatorseriesmodel#xname) and [`yName`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/rangenavigatorseriesmodel#yname) properties, and set the JSON array as the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/rangenavigatorseriesmodel#datasource) property.

Since the JSON contains category data, set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/rangenavigatormodel#valuetype) for the horizontal axis (primaryXAxis) to `DateTime`. By default, the axis valueType is `Numeric`.

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

The sample should look like our [default](https://ej2.syncfusion.com/demos/#/material/range-navigator/default.html), don’t worry about the gradient color, let it takes the default color.

## Enable tooltip

The tooltip is useful to show the selected data. You can enable tooltip by setting the [`enable`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/rangetooltipsettingsmodel#enable) property as `true` in [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/rangenavigatormodel#tooltip) object and by injecting `RangeTooltipService` module into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/getting-started/tooltip-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/getting-started/tooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/getting-started/tooltip-cs1" %}