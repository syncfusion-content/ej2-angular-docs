---
layout: post
title: Expand collapse in Angular Splitter component | Syncfusion
description: Learn here all about Expand collapse in Syncfusion Angular Splitter component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Splitter 
documentation: ug
domainurl: ##DomainURL##
---

# Expand and collapse panes in Angular Splitter Component

## Collapsible panes

The Angular Splitter component provides built-in expand and collapse functionality for its panes. By default, this behavior is disabled. To enable it, set the [collapsible](https://ej2.syncfusion.com/angular/documentation/api/splitter/panePropertiesModel#collapsible) property within `paneSettings`. This displays expand and collapse icons in the panes. users can dynamically expand and collapse the panes by clicking on the corresponding icons

The following example demonstrates how to enable collapsible behavior:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/expand-collapse-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/expand-collapse-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/splitter/expand-collapse-cs1" %}

## Programmatically control the expand and collapse action

Pane visibility can be controlled by programmatically using the Splitter’s public methods: [expand](https://ej2.syncfusion.com/angular/documentation/api/splitter#expand) and [collapse](https://ej2.syncfusion.com/angular/documentation/api/splitter#collapse). These methods allow you to dynamically toggle panes based on application logic.

The following example demonstrates using these methods:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/expand-collapse-method-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/expand-collapse-method-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/splitter/expand-collapse-method-cs1" %}

## Set initial collapsed state

To render a pane in a collapsed state on initial load, set the [collapsed](https://ej2.syncfusion.com/angular/documentation/api/splitter#collapsed) property to `true`. This is useful for customizing the default layout based on user preferences or screen size.

In the following example, the second pane is rendered in a collapsed state:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/collapsed-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/collapsed-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/splitter/collapsed-cs1" %}

> Explore our [Angular Splitter Expand and Collapse example](https://ej2.syncfusion.com/angular/demos/#/material3/splitter/expand-and-collapse) to see this feature in action.

## See Also

* [Resizable split panes](./resize)