---
layout: post
title: Expand collapse in Angular Splitter component | Syncfusion
description: Learn here all about Expand collapse in Syncfusion Angular Splitter component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Expand collapse 
documentation: ug
domainurl: ##DomainURL##
---

# Expand collapse in Angular Splitter component

## Collapsible panes

The Splitter panes can be configured with built-in expand and collapse functionalities. By default, the collapsible behavior is disabled. Enable the [collapsible](https://ej2.syncfusion.com/angular/documentation/api/splitter/panePropertiesModel/#collapsible) behavior in the paneSettings property to show or hide the expand or collapse icons in the panes. You can dynamically expand and collapse the panes by clicking on the corresponding icons.

The following code shows how to enable collapsible behavior.

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

The Splitter provides public method to control the expand and collapse behavior programmatically using the [expand](https://ej2.syncfusion.com/angular/documentation/api/splitter/#expand) and [collapse](https://ej2.syncfusion.com/angular/documentation/api/splitter/#collapse) methods. Refer to the following code example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/expand-collapse-method-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/expand-collapse-method-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/splitter/expand-collapse-method-cs1" %}

## Specify initial state to panes

You can render specific panes with collapsed state on page load. Specify a Boolean value to the [collapsed](https://ej2.syncfusion.com/angular/documentation/api/splitter/#collapsed) property to control this behavior. The following code explains how to collapse panes on rendering (the second panes renders with collapsed state).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/collapsed-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/collapsed-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/splitter/collapsed-cs1" %}

> You can also explore our [Angular Splitter Expand and Collapse example](https://ej2.syncfusion.com/angular/demos/#/material/splitter/expand-and-collapse) that shows how to render the expand and collapse feature in Angular Splitter.

## See Also

* [Resizable split panes](./resize)