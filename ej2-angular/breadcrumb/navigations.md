---
layout: post
title: Navigations in Angular Breadcrumb component | Syncfusion
description: Learn here all about Navigations in Syncfusion Angular Breadcrumb component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Breadcrumb 
documentation: ug
domainurl: ##DomainURL##
---

# Navigations in Angular Breadcrumb component

The Breadcrumb component enables navigation to specific paths when users click breadcrumb items. To enable navigation functionality, bind the `url` property to the breadcrumb items.

## URL

In the Breadcrumb component, each item represents a URL destination. Breadcrumb items can be configured with either relative or absolute URLs to define navigation paths.

### Relative URL

Breadcrumb items with relative URLs contain only the path segment without specifying the complete location or server details. The following example demonstrates breadcrumb items configured with relative URLs.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/navigations-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/navigations-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/navigations-cs1" %}

### Absolute URL

Breadcrumb items with absolute URLs contain the complete path and navigate directly to the specified resource when the absolute URL is bound to the breadcrumb item. The following example demonstrates breadcrumb items configured with absolute URLs.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/navigations-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/navigations-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/navigations-cs2" %}

## Enable navigation for last breadcrumb item

By default, the last breadcrumb item (active item) is not clickable. To enable navigation for the last item, set the `enableActiveItemNavigation` property to `true`. The following example demonstrates enabling navigation for the last breadcrumb item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/navigations-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/navigations-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/navigations-cs3" %}

## Open URL in new page or tab

To open a breadcrumb item in a new page or tab, configure the target attribute of the anchor element to `_blank` using the `beforeItemRender` event. The following example demonstrates opening the `All Components` item in a new tab by setting the target attribute through the `beforeItemRender` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/navigations-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/navigations-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/navigations-cs4" %}