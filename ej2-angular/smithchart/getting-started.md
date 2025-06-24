---
layout: post
title: Getting started with Angular Smithchart component | Syncfusion
description:  Checkout and learn about Getting started with Angular Smithchart component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Smithchart component

This section explains you the steps required to create a Smith Chart and demonstrate the basic usage of the Smith Chart control.

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

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> SmitchChart package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-charts`](https://www.npmjs.com/package/@syncfusion/ej2-angular-charts/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-charts --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-charts@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-charts/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-charts@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-charts:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Add SmithChart component

Modify the template in `app.component.ts` file to render the `ej2-angular-charts` component
`[src/app/app.component.ts]`.

```javascript

import { SmithchartModule } from '@syncfusion/ej2-angular-charts'
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
imports: [
      SmithchartModule
    ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Smithchart component
    template: `<ejs-smithchart style='display: block;' id='container'></ejs-smithchart>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent  { }

```

<!-- markdownlint-disable MD033 -->

Now use the <code>app-container</code> in the index.html instead of default one.

```html
<app-container></app-container>
```

* Now run the application in the browser using the below command.

  ```
    npm start
  ```

The below example shows a basic Smithchart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs1" %}

## Module Injection

Smithchart component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the `app.component.ts`. In the current application, we are going to modify the above basic smithchart to visualize transmission lines.
For this application we are going to use  tooltip and legend feature of the smithchart. Please find relevant feature service name and description as follows.

* SmithchartLegendService - Inject this provider to use legend feature.
* TooltipRenderService - Inject this provider to use tooltip feature.

These modules should be injected to the provider section as follows,

 ```javascript

    import { Component } from '@angular/core';
    import { SmithchartModule } from '@syncfusion/ej2-angular-charts'
    import { SmithchartLegendService, TooltipRenderService } from '@syncfusion/ej2-angular-charts';

    @Component({
        imports: [
            BrowserModule,
        ],
        standalone: true,
        providers: [ SmithchartLegendService, TooltipRenderService ]
    })

 ```

## Add Series to Smithchart

Smithchart had two type of specification for adding series.
* dataSource - Using this, Data object can bind directly by specifying the resistance and reactance values, series add to smithchart.
* points - Using this, collection of resistance and reactance values can bind directly to render series.

Below sample demonstrate adding two series to smithchart both ways.
* First series Transmission1 shows dataSource bound series.
* Second series Transmission2 shows points bound series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs2" %}

## Add title to SmithChart

smithchart `title` API used to add title for smithchart. In that `text` API used to set text of the title.
API `visible` used to toggle the title.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs3" %}

## Enable Marker to Smithchart

To use series marker and it's customization in smithchart, use series `marker`. To display marker for particular series, need to specify  `marker visible` as true. Below sample marker enabled for first series only.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs4" %}

## Enable DataLabel to Smithchart Marker

To use marker dataLabel and it's customization in smithchart, use marker `dataLabel`. To display dataLabel for particular series marker, need to specify  `dataLabel visible` as true in that series `marker`. Below sample dataLabel enabled for first series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs5" %}

## Enable Legend for Smithchart

Smithchart had a legend feature, which is used to denote the correspond series. To enable the legend, need to inject `SmithchartLegendService` module in the AppModule and smithchart `legendSettings` `visible` as true. Following example sample shows enabling legend for smithchart. Series name can customize using series `name`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs6" %}

## Enable Tooltip for Smithchart Series

Smithchart had a tooltip feature, which is used to show the current point's values. To enable the tooltip, need to inject `TooltipRenderService` module in the AppModule and smithchart series `tooltip` `visible` as true. Following example sample shows enabling tooltip for smithchart series collection.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs7" %}