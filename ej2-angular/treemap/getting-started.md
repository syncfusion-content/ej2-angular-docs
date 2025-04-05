---
layout: post
title: Getting started with Angular Treemap component | Syncfusion
description:  Checkout and learn about Getting started with Angular Treemap component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Treemap component

This section explains the steps required to create a TreeMap control and demonstrates the basic usage of the TreeMap component.

{% youtube "https://www.youtube.com/watch?v=1AvAKz1EPc8" %}

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

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> TreeMap package

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.

To install treemap component, use the following command.

```bash
npm install @syncfusion/ej2-angular-treemap --save
```

> The **--save** will instruct NPM to include the treemap package inside of the `dependencies` section of the `package.json`.

## Add TreeMap component

Modify the template in `app.component.ts` file to render the `ej2-angular-treemap` component `[src/app/app.component.ts]`.

```javascript

import { TreeMapModule, TreeMapAllModule } from '@syncfusion/ej2-angular-treemap'
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
imports: [
      TreeMapModule, TreeMapAllModule
    ],
    standalone: true,
    selector: 'app-container',
  // specifies the template string for the treemap component
  template: `<ejs-treemap id='treemap-container'></ejs-treemap>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  { }

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

The below example shows a basic treemap.

```typescript

import { TreeMapModule, TreeMapAllModule } from '@syncfusion/ej2-angular-treemap'
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
imports: [
      TreeMapModule, TreeMapAllModule
    ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the treemap component
    template: `<ejs-treemap id='treemap-container'></ejs-treemap>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent  { }

```

Since we did not specify [dataSource](https://ej2.syncfusion.com/angular/documentation/api/treemap/#datasource) for the TreeMap, no items will be rendered and only an empty SVG element will be appended to the treemap container.

## Render TreeMap

This section explains how to render a TreeMap with a data source. In this example, we are going to modify the above basic treemap to visualize international airport count in South America.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs15" %}

Here, TreeMap is displayed using a data source, and the [weightValuePath](https://ej2.syncfusion.com/angular/documentation/api/treemap/#weightvaluepath) property is set to the data source's **Count** field as the value. The leaf level items of TreeMap can be customized using [leafItemSettings](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel/). `leafItemSettings` allows you to change properties such as [fill](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel/#fill), [border](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel/#border) and [labelPosition](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel/#labelposition).

## Module Injection

The TreeMap component is divided into individual feature-based modules. To use a specific feature, you must inject its **Service** module into the `AppModule`. The modules available in TreeMap, as well as their descriptions, are listed below.

* TreeMapHighlightService - Inject this provider to use highlight feature.
* TreeMapSelectionService - Inject this provider to use selection feature.
* TreeMapLegendService - Inject this provider to use legend feature.
* TreeMapTooltipService - Inject this provider to use tooltip feature.

## Apply Color Mapping

The color mapping feature supports customization of item colors based on the underlying value of item received from bounded datasource. Specify the field name from which the values have to be compared for the item in [equalColorValuePath](https://ej2.syncfusion.com/angular/documentation/api/treemap/#equalcolorvaluepath) or [rangeColorValuePath](https://ej2.syncfusion.com/angular/documentation/api/treemap/#rangecolorvaluepath) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs16" %}

## Enable Legend

You can show legend for the TreeMap by setting true to the [visible](https://ej2.syncfusion.com/angular/documentation/api/treemap/legendSettingsModel/#visible) property in [legendSettings](https://ej2.syncfusion.com/angular/documentation/api/treemap/#legendsettings) object and by injecting the `TreeMapLegendService` module in the AppModule.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs56/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs56/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs56" %}

## Add Labels

Labels can be added to show additional information of the items in TreeMap. By default, visibility of the label is true. This can be customized using [showLabels](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel/#showlabels) property in [leafItemSettings](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs57/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs57/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs57" %}

## Enable Tooltip

The tooltip is useful when labels cannot display information by using due to space constraints. Tooltip can be enabled by setting the [visible](https://ej2.syncfusion.com/angular/documentation/api/treemap/tooltipSettingsModel/#visible) property as true in [tooltipSettings](https://ej2.syncfusion.com/angular/documentation/api/treemap/tooltipSettingsModel) object and by injecting `TreeMapTooltipService` module in the AppModule.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs58/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs58/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs58" %}
