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

This section explains you the steps required to create a simple Bullet Chart and demonstrate the basic usage of the Bullet Chart component in an Angular environment.

## Setup Angular Environment

You can use [`Angular CLI`](https://github.com/angular/angular-cli) to setup your Angular applications. To install Angular CLI use the following command.

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Start a new Angular application using below Angular CLI command.

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion BulletChart package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
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

## Registering Bullet Chart Module

Import Bullet Chart module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-charts` [src/app/app.module.ts].

   ```typescript
     import { NgModule } from '@angular/core';
     import { BrowserModule } from '@angular/platform-browser';
     // import the BulletChartModule for the Chart component
     import { BulletChartModule } from '@syncfusion/ej2-angular-charts';
     import { AppComponent }  from './app.component';

   @NgModule({
    //declaration of ChartModule into NgModule
    imports:      [ BrowserModule, BulletChartModule ],
    declarations: [ AppComponent ],
     bootstrap:    [ AppComponent ]
   })
   export class AppModule { }
  ```

* Modify the template in `app.component.ts` file to render the `ej2-angular-charts` component
`[src/app/app.component.ts]`.

   ```typescript
    import { Component, ViewEncapsulation } from '@angular/core';

   @Component({
    selector: 'app-container',
     // specifies the template string for the Bullet Charts component
    template: `<ejs-bulletchart id='container'></ejs-bulletchart>`,
    encapsulation: ViewEncapsulation.None
  })
   export class AppComponent  { }
  ```

Now use the <code>app-container</code> in the index.html instead of default one.
 
  ```
   <app-container></app-container>
  ```

Now run the application in the browser using the below command.

   ```
   npm start
   ```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/initialize-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/bullet-chart/getting-started/initialize-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/initialize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/initialize-cs1" %}

## Module Injection

Bullet Chart component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the AppModule. Please find relevant feature service name and description as follows.

* `BulletTooltipService` - Inject this provider to use tooltip feature.

These modules should be injected to the provider section as follows,

  ```typescript
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { AppComponent } from './app.component';
    import { BulletChartComponent } from '@syncfusion/ej2-angular-charts';
    import { BulletTooltipService } from '@syncfusion/ej2-angular-charts';
    @NgModule({
        imports: [
            BrowserModule,
        ],
        declarations: [AppComponent, BulletChartComponent],
        bootstrap: [AppComponent],
        providers: [ BulletTooltipService ]
    })
```

## Bullet Chart with Data

This section explains how to plot local data to the bullet chart.

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
       { value: 500, target: 480 },
        ];
    }
}
```

Now assign the local data to [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#datasource) property. **value** and **target** values should be mapped with [`valueField`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#valuefield) and [`targetField`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#targetfield) respectively.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/datasource-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/bullet-chart/getting-started/datasource-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/datasource-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/datasource-cs1" %}

## Add Bullet Chart Title

You can add a title using [`title`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#title) property to the bullet chart to provide quick information to the user about the data plotted in the bullet chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/title-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/bullet-chart/getting-started/title-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/title-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/title-cs1" %}

## Ranges

You can add a range using [`ranges`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#ranges) property to the bullet chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs23/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs23/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs23/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs23" %}

## Enable Tooltip

The tooltip is useful when you cannot display information by using the data labels due to space constraints. You can enable tooltip by setting the enable property as true in [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#tooltip) object and by injecting `BulletTooltipService` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/tooltip-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/bullet-chart/getting-started/tooltip-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/tooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/tooltip-cs1" %}