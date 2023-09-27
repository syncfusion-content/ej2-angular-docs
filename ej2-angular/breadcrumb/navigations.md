---
layout: post
title: Navigations in Angular Breadcrumb component | Syncfusion
description: Learn here all about Navigations in Syncfusion Angular Breadcrumb component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Navigations 
documentation: ug
domainurl: ##DomainURL##
---

# Navigations in Angular Breadcrumb component

The breadcrumb item navigates to the path while clicking the item. To enable navigation, `url` property was bound to the items.

## URL

In the Breadcrumb component, the item represents the url. The breadcrumb items can be provided with either relative or absolute URL.

### Relative URL

The breadcrumb items with relative URL contain only the path but do not locate the path or server. The following example represents the breadcrumb items with relative url.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/navigations-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/breadcrumb/navigations-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/navigations-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/navigations-cs1" %}

### Absolute URL

The breadcrumb items with Absolute URL contain the path and locate to the resource if the absolute url is bound to the breadcrumb item. The following example represents the breadcrumb items with absolute url.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/navigations-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/breadcrumb/navigations-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/navigations-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/navigations-cs2" %}

## Enable navigation for last Breadcrumb item

The feature enables the last item of the Breadcrumb component by setting the `enableActiveItemNavigation` property to true. In the following example, the last item of the `Breadcrumb` was enabled.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/navigations-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/breadcrumb/navigations-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/navigations-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/navigations-cs3" %}

## Open URL in new page or tab

To open the breadcrumb item in a new page or tab, set the target property of the required item url to blank in the Breadcrumb component. In the following example, the target property of `All Components` item url was set to blank by using the `beforeItemRender` event which locates to the path in the new tab.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/navigations-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/breadcrumb/navigations-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/navigations-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/navigations-cs4" %}