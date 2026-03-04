---
layout: post
title: Pane content in Angular Splitter component | Syncfusion
description: Learn here all about Pane content in Syncfusion Angular Splitter component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Splitter 
documentation: ug
domainurl: ##DomainURL##
---

# Pane content in Angular Splitter component

This guide explains how to use plain text, HTML markup, templates, or Angular UI components as content within the panes of the Syncfusion Angular Splitter.

## Template

You can use `ng-template` to render HTML elements directly inside the Splitter pane.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/splitter/template-cs1" %}

## Angular UI Components

Angular UI components can be embedded within Splitter panes, supporting their native behaviors and event bindings.

Refer to the [Accordion within splitter](https://ej2.syncfusion.com/angular/demos/#/material3/splitter/accordion-navigation-menu) and [Listview within splitter](https://ej2.syncfusion.com/angular/demos/#/material3/splitter/details-view) samples.

## Plain content

Plain text content can be added to panes using either inner HTML or the [content](https://ej2.syncfusion.com/angular/documentation/api/splitter/panePropertiesModel#content) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/plain-content-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/plain-content-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/splitter/plain-content-cs1" %}

## HTML Markup

The Splitter is a layout-based container component. Populate pane content dynamically using existing HTML markup, making it easy to update content without modifying component logic.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/html-content-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/html-content-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/splitter/html-content-cs1" %}

## Pane content using selector

Pane [content](https://ej2.syncfusion.com/angular/documentation/api/splitter/panePropertiesModel#content) can be assigned using query selectors such as element IDs or CSS class names. The following example demonstrates how to load an element into a pane using its ID.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/selector-content-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/selector-content-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/splitter/selector-content-cs1" %}