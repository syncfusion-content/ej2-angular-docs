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

This section explains you the steps required to create a TreeMap control and demonstrate the basic usage of the TreeMap control.

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

## Adding Syncfusion TreeMap package

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.

To install treemap component, use the following command.

```bash
npm install @syncfusion/ej2-angular-treemap --save
```

> The **--save** will instruct NPM to include the treemap package inside of the `dependencies` section of the `package.json`.

## Registering TreeMap Module

Import TreeMap module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-treemap` [src/app/app.module.ts].

```typescript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the TreeMapModule for the TreeMap component
import { TreeMapModule } from '@syncfusion/ej2-angular-treemap';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of chart module into NgModule
  imports:      [ BrowserModule, TreeMapModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

* Modify the template in `app.component.ts` file to render the `ej2-angular-treemap` component `[src/app/app.component.ts]`.

```javascript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
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

The below example shows a basic map.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    // specifies the template string for the treemap component
    template: `<ejs-treemap id="treemap-container"></ejs-treemap>`
})
export class AppComponent {

}
```

As we didn't specify shapeData to the treemap, no shape will be rendered and only an empty SVG element is appended to the treemap container.

## Module Injection

TreeMap component is segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature Service in the AppModule.  Find the modules available in TreeMap and its description as follows.

* TreeMapHighlightService - Inject this provider to use highlight feature.
* TreeMapSelectionService - Inject this provider to use selection feature.
* TreeMapLegendService - Inject this provider to use legend feature.
* TreeMapTooltipService - Inject this provider to use tooltip series.

In the current application, we are going to modify the above basic treemap to visualize international airport count in South America.

In this demo, we are just rendering TreeMap with labels. For this there is no need to import any modules.

## Render TreeMap

This session explains how to render TreeMap with datasource.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs15/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs15/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs15" %}

Here TreeMap is created with the datasource and set [`weightValuePath`] as Count field in the datasouce. You can customize the leaf level TreeMap items using [`leafItemSettings`]. Properties like [`fill`], [`border`], [`labelPosition`] can be changed using [`leafItemSettings`].

## Apply Color Mapping

The color mapping feature supports customization of item colors based on the underlying value of item received from bounded datasource. Specify the field name from which the values have to be compared for the item in [`equalColorValuePath`] or [`rangeColorValuePath`] property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs16/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs16/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs16" %}

## Enable Legend

You can show legend for the TreeMap by setting true to the [`visible`] property in [`legendSettings`] object and by injecting the `TreeMapLegendService` module in the AppModule.

```typescript

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-treemap id='container' style='display: block;' [legendSettings]='legendSettings' [dataSource]='data' equalColorValuePath='Count' weightValuePath='Count' [leafItemSettings]='leafItemSettings'>
    </ejs-treemap>`
})
export class AppComponent {
    public legendSettings: object = {
        visible: true,
        position: 'Top',
        shape: 'Rectangle'
    };
    public data: object[] = [
        { Title: 'State wise International Airport count in South America', State: 'Brazil', Count: 25 },
        { Title: 'State wise International Airport count in South America', State: 'Colombia', Count: 12 },
        { Title: 'State wise International Airport count in South America', State: 'Argentina', Count: 9 },
        { Title: 'State wise International Airport count in South America', State: 'Ecuador', Count: 7 },
        { Title: 'State wise International Airport count in South America', State: 'Chile', Count: 6 },
        { Title: 'State wise International Airport count in South America', State: 'Peru', Count: 3 },
        { Title: 'State wise International Airport count in South America', State: 'Venezuela', Count: 3 },
        { Title: 'State wise International Airport count in South America', State: 'Bolivia', Count: 2 },
        { Title: 'State wise International Airport count in South America', State: 'Paraguay', Count: 2 },
        { Title: 'State wise International Airport count in South America', State: 'Uruguay', Count: 2 },
        { Title: 'State wise International Airport count in South America', State: 'Falkland Islands',Count: 1 },
        { Title: 'State wise International Airport count in South America', State: 'French Guiana', Count:1 },
        { Title: 'State wise International Airport count in South America', State: 'Guyana', Count: 1 },
        { Title: 'State wise International Airport count in South America', State: 'Suriname', Count: 1 },
    ];
    public leafItemSettings: object = {
        labelPath: 'State',
        colorMapping: [
            {
                value: 25,
                color: '#634D6F'
            },
            {
                value: 12,
                color: '#B34D6D'
            },
            {
                value: 9,
                color: '#557C5C'
            },
            {
                value: 7,
                color: '#44537F'
            },
            {
                value: 6,
                color: '#637392'
            },
            {
                value: 3,
                color: '#7C754D'
            },
            {
                value: 2,
                color: '#2E7A64'
            },
            {
                value: 1,
                color: '#95659A'
            },
        ]
    };
}

```

## Add Labels

Labels can be added to show additional information of the items in TreeMap. By default, visibility of the label is true. This can be customized using [`showLabels`] property in [`leafItemSettings`].

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-treemap id='container' style='display: block;' [legendSettings]='legendSettings' [dataSource]='data' equalColorValuePath='Count' weightValuePath='Count' [leafItemSettings]='leafItemSettings'>
    </ejs-treemap>`
})
export class AppComponent {
    public legendSettings: object = {
        visible: true,
        position: 'Top',
        shape: 'Rectangle'
    };
    public data: object[] = [
        { Title: 'State wise International Airport count in South America', State: 'Brazil', Count: 25 },
        { Title: 'State wise International Airport count in South America', State: 'Colombia', Count: 12 },
        { Title: 'State wise International Airport count in South America', State: 'Argentina', Count: 9 },
        { Title: 'State wise International Airport count in South America', State: 'Ecuador', Count: 7 },
        { Title: 'State wise International Airport count in South America', State: 'Chile', Count: 6 },
        { Title: 'State wise International Airport count in South America', State: 'Peru', Count: 3 },
        { Title: 'State wise International Airport count in South America', State: 'Venezuela', Count: 3 },
        { Title: 'State wise International Airport count in South America', State: 'Bolivia', Count: 2 },
        { Title: 'State wise International Airport count in South America', State: 'Paraguay', Count: 2 },
        { Title: 'State wise International Airport count in South America', State: 'Uruguay', Count: 2 },
        { Title: 'State wise International Airport count in South America', State: 'Falkland Islands',Count: 1 },
        { Title: 'State wise International Airport count in South America', State: 'French Guiana', Count:1 },
        { Title: 'State wise International Airport count in South America', State: 'Guyana', Count: 1 },
        { Title: 'State wise International Airport count in South America', State: 'Suriname', Count: 1 },
    ];
    public leafItemSettings: object = {
        showLabels: true,
        labelPath: 'State',
        labelPosition: 'Center',
        labelStyle: {
            color: 'white'
        },
        colorMapping: [
            {
                value: 25,
                color: '#634D6F'
            },
            {
                value: 12,
                color: '#B34D6D'
            },
            {
                value: 9,
                color: '#557C5C'
            },
            {
                value: 7,
                color: '#44537F'
            },
            {
                value: 6,
                color: '#637392'
            },
            {
                value: 3,
                color: '#7C754D'
            },
            {
                value: 2,
                color: '#2E7A64'
            },
            {
                value: 1,
                color: '#95659A'
            },
        ]
    };
}

```

## Enable Tooltip

The tooltip is useful when labels cannot display information by using due to space constraints. Tooltip can be enabled by setting the [`visible`] property as true in [`tooltipSettings`] object and by injecting `TreeMapTooltipService` module in the AppModule.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-treemap id='container' style='display: block;' [tooltipSettings]='tooltipSettings' [legendSettings]='legendSettings' [dataSource]='data' equalColorValuePath='Count' weightValuePath='Count' [leafItemSettings]='leafItemSettings'>
    </ejs-treemap>`
})
export class AppComponent {
    public legendSettings: object = {
        visible: true,
        position: 'Top',
        shape: 'Rectangle'
    };
    public tooltipSettings: object = {
        visible: true,
    };
    public data: object[] = [
        { Title: 'State wise International Airport count in South America', State: 'Brazil', Count: 25 },
        { Title: 'State wise International Airport count in South America', State: 'Colombia', Count: 12 },
        { Title: 'State wise International Airport count in South America', State: 'Argentina', Count: 9 },
        { Title: 'State wise International Airport count in South America', State: 'Ecuador', Count: 7 },
        { Title: 'State wise International Airport count in South America', State: 'Chile', Count: 6 },
        { Title: 'State wise International Airport count in South America', State: 'Peru', Count: 3 },
        { Title: 'State wise International Airport count in South America', State: 'Venezuela', Count: 3 },
        { Title: 'State wise International Airport count in South America', State: 'Bolivia', Count: 2 },
        { Title: 'State wise International Airport count in South America', State: 'Paraguay', Count: 2 },
        { Title: 'State wise International Airport count in South America', State: 'Uruguay', Count: 2 },
        { Title: 'State wise International Airport count in South America', State: 'Falkland Islands',Count: 1 },
        { Title: 'State wise International Airport count in South America', State: 'French Guiana', Count:1 },
        { Title: 'State wise International Airport count in South America', State: 'Guyana', Count: 1 },
        { Title: 'State wise International Airport count in South America', State: 'Suriname', Count: 1 },
    ];
    public leafItemSettings: object = {
        showLabels: true,
        labelPath: 'State',
        labelPosition: 'Center',
        labelStyle: {
            color: 'white'
        },
        colorMapping: [
            {
                value: 25,
                color: '#634D6F'
            },
            {
                value: 12,
                color: '#B34D6D'
            },
            {
                value: 9,
                color: '#557C5C'
            },
            {
                value: 7,
                color: '#44537F'
            },
            {
                value: 6,
                color: '#637392'
            },
            {
                value: 3,
                color: '#7C754D'
            },
            {
                value: 2,
                color: '#2E7A64'
            },
            {
                value: 1,
                color: '#95659A'
            },
        ]
    };
}

```