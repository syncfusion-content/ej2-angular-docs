---
layout: post
title: Virtualization in Angular Listview component | Syncfusion
description: Learn here all about Virtualization in Syncfusion Angular Listview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Virtualization 
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in Angular Listview component

UI virtualization loads only viewable list items in a view port which will increase ListView performance on loading large number of data.

## Module injection

In order to use UI Virtualization, we need to import `VirtualizationService` module in the AppModule and it should be injected to the provider section as follow

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

UI virtualization can be enabled in ListView by setting `enableVirtualization` property to true.

It has two type of scroller

**Window scroll** - This scroller is used in ListView by default.

**Container scroll** - This will be used, if the height property of ListView was set.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/virtualization/flat-list-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/virtualization/flat-list-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/virtualization/flat-list-cs1" %}

We can use `ng-template` property to customize list items in UI virtualization.

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
