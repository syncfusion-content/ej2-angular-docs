---
layout: post
title: Virtualization in Angular ListView component | Syncfusion
description: Learn here all about Virtualization in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView 
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in Angular ListView component

UI virtualization renders only the visible list items within the viewport, significantly improving ListView performance when loading large datasets by reducing DOM elements and memory consumption.

## Module injection

To use UI Virtualization, import the `VirtualizationService` module in the AppModule and inject it into the providers section as follows:

```typescript

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListViewModule, VirtualizationService } from '@syncfusion/ej2-angular-lists';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        ListViewModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [VirtualizationService]
})
export class AppModule { }

```

## Getting started

Enable UI virtualization in ListView by setting the [`enableVirtualization`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#enablevirtualization) property to true.

The ListView supports two types of scrolling behavior:

**Window scroll** - The default scroller used by ListView, where the entire browser window acts as the scrolling container.

**Container scroll** - Used when the height property of ListView is explicitly set, creating a dedicated scrollable container within the specified dimensions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/virtualization/flat-list-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/virtualization/flat-list-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/virtualization/flat-list-cs1" %}

You can use the `ng-template` property to customize list items in UI virtualization scenarios.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/virtualization/template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/virtualization/template-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/virtualization/template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/virtualization/template-cs1" %}