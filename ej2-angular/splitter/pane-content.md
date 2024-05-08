---
layout: post
title: Pane content in Angular Splitter component | Syncfusion
description: Learn here all about Pane content in Syncfusion Angular Splitter component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Pane content 
documentation: ug
domainurl: ##DomainURL##
---

# Pane content in Angular Splitter component

This section explains how to provide plain text content or HTML markup or integrate other Angular UI controls as content of Splitter.

## Template

You can render the HTML element directly to the Splitter pane content using ng-template.

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

You can render any Angular UI components along with their native and control events within Splitter as pane content.

You can refer [Accordion within splitter](https://ej2.syncfusion.com/angular/demos/#/material/splitter/accordion-navigation-menu) and [Listview within splitter](https://ej2.syncfusion.com/angular/demos/#/material/splitter/details-view) samples.

## Plain content

You can add the plain text as a pane contents using either inner HTML or [content](https://ej2.syncfusion.com/angular/documentation/api/splitter/panePropertiesModel/#content) API

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

Splitter is a layout based container component. You can render the pane contents from existing HTML markup. Converting HTML markup as Splitter pane is easy way to add the panes content dynamically.

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

You can set HTML element as pane [content](https://ej2.syncfusion.com/angular/documentation/api/splitter/panePropertiesModel/#content) using the query selectors such as ID or CSS class selectors.

The following code demonstrates how to fetch an element from the document and load it to pane using its ID.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/selector-content-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/selector-content-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/splitter/selector-content-cs1" %}