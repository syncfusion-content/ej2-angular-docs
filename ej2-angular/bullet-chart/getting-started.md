---
layout: post
title: Getting started with Angular Bullet chart component | Syncfusion
description:  Checkout and learn about Getting started with Angular Bullet chart component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Bullet chart component

This section explains the steps required to create a simple [Angular Bullet Chart](https://www.syncfusion.com/angular-components/angular-bullet-chart) and demonstrates the basic usage of the Bullet Chart component in an Angular environment.

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

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> bulletChart package

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

## Add bullet chart component

Modify the template in `app.component.ts` file to render the Bullet Charts component `[src/app/app.component.ts]`.

```typescript

import { Component, ViewEncapsulation } from '@angular/core';
import { BulletChartModule } from '@syncfusion/ej2-angular-charts';

@Component({
    imports: [BulletChartModule],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Bullet Charts component
    template: `<ejs-bulletchart id='container'></ejs-bulletchart>`,
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

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/initialize-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/initialize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/initialize-cs1" %}

## Module injection

Bullet Chart component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the `app.component.ts`. In the current application, we are going to use tooltip feature of the chart.

* `BulletTooltipService` - Inject this provider to use tooltip feature.

Now import the above-mentioned modules from the chart package and inject them into the Bullet Chart component through the `provider` section.

  ```typescript
    import { Component } from '@angular/core';
    import { BulletChartModule, BulletTooltipService } from '@syncfusion/ej2-angular-charts';
    @Component({
        imports: [BulletChartModule],
        standalone: true,
        providers: [BulletTooltipService]
    })
```

## Bullet chart with data

This section explains how to plot the following JSON data to the Bullet Chart.

```typescript
    export class AppComponent implements OnInit {
    public data: Object[];
    ngOnInit(): void {
        // Data for bullet chart
        this.data = [
            { value: 100, target: 80 },
            { value: 200, target: 180 },
            { value: 300, target: 280 },
            { value: 400, target: 380 },
            { value: 500, target: 480 }
        ];
    }
}
```

Now assign the local data to [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bulletchartmodel#datasource) property. `value` and `target` values should be mapped with [`valueField`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bulletchartmodel#valuefield) and [`targetField`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bulletchartmodel#targetfield) respectively.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/datasource-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/datasource-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/datasource-cs1" %}

## Add bullet chart title

You can add a title using the [`title`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bulletchartmodel#title) property to the Bullet Chart to provide quick information to the user about the data plotted in the Bullet Chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/title-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/title-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/title-cs1" %}

## Ranges

You can add a range using the [`ranges`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bulletchartmodel#ranges) property of the Bullet Chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs23/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs23/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs23" %}

## Enable tooltip

You can use tooltip for the Bullet Chart by setting the [`enable`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bullettooltipsettingsmodel#enable) property to `true` in [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bulletchartmodel#tooltip) object and by injecting the `BulletTooltipService` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/tooltip-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/tooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/tooltip-cs1" %}