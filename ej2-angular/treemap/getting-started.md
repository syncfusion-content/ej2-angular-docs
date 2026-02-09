---
layout: post
title: Getting started with Angular TreeMap component | Syncfusion
description:  Checkout and learn about Getting started with Angular TreeMap component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular TreeMap component

This document explains the steps required to create and render a TreeMap component and demonstrates the component's basic usage.

{% youtube "https://www.youtube.com/watch?v=1AvAKz1EPc8" %}

## Setup Angular Environment

Prerequisites: Node.js (LTS) and npm must be installed before creating an Angular project.

Use the [`Angular CLI`](https://github.com/angular/angular-cli) to create and manage Angular applications. Install the CLI with one of the following approaches depending on preference.

```bash
npm install -g @angular/cli
```

Note: Confirm that the installed Angular and Node.js versions meet project requirements before proceeding.

## Create an Angular Application

Create a new Angular application with the Angular CLI:

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

Note: For npm v5 and later, installed packages are added to `dependencies` by default. For earlier npm versions, include `--save` to add the package to `dependencies`.

## Add TreeMap component

Modify the template in `app.component.ts` to render the `ej2-angular-treemap` component. The example below shows a minimal standalone component that mounts an empty TreeMap container.

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

Run the application with:

```
npm start
```


The following example shows a basic TreeMap component instance.

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

Since we did not specify [dataSource](https://ej2.syncfusion.com/angular/documentation/api/treemap#datasource) for the TreeMap, no items will be rendered and only an empty SVG element will be appended to the treemap container.

## Render TreeMap

This section shows how to render a TreeMap using a bound data source. The example visualizes the number of international airports in South America.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs15" %}

Here, TreeMap is displayed using a data source, and the [weightValuePath](https://ej2.syncfusion.com/angular/documentation/api/treemap#weightvaluepath) property is set to the data source's **Count** field as the value. The leaf level items of TreeMap can be customized using [leafItemSettings](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel). `leafItemSettings` allows you to change properties such as [fill](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel#fill), [border](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel#border) and [labelPosition](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel#labelposition).

## Module Injection

The TreeMap component is divided into individual feature-based modules. To use a specific feature, you must inject its **Service** module into the `AppModule`. The modules available in TreeMap, as well as their descriptions, are listed below.

* TreeMapHighlightService - Inject this provider to use highlight feature.
* TreeMapSelectionService - Inject this provider to use selection feature.
* TreeMapLegendService - Inject this provider to use legend feature.
* TreeMapTooltipService - Inject this provider to use tooltip feature.

## Apply Color Mapping

The color mapping feature supports customization of item colors based on the underlying value of item received from bounded datasource. Specify the field name from which the values have to be compared for the item in [equalColorValuePath](https://ej2.syncfusion.com/angular/documentation/api/treemap#equalcolorvaluepath) or [rangeColorValuePath](https://ej2.syncfusion.com/angular/documentation/api/treemap#rangecolorvaluepath) property.

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

You can show legend for the TreeMap by setting true to the [visible](https://ej2.syncfusion.com/angular/documentation/api/treemap/legendSettingsModel#visible) property in [legendSettings](https://ej2.syncfusion.com/angular/documentation/api/treemap#legendsettings) object and by injecting the `TreeMapLegendService` module in the AppModule.

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

Labels can be added to show additional information of the items in TreeMap. By default, visibility of the label is true. This can be customized using [showLabels](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel#showlabels) property in [leafItemSettings](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel).

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

The tooltip is useful when labels cannot display information by using due to space constraints. Tooltip can be enabled by setting the [visible](https://ej2.syncfusion.com/angular/documentation/api/treemap/tooltipSettingsModel#visible) property as true in [tooltipSettings](https://ej2.syncfusion.com/angular/documentation/api/treemap/tooltipSettingsModel) object and by injecting `TreeMapTooltipService` module in the AppModule.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs58/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs58/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs58" %}
