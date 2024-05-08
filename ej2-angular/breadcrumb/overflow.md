---
layout: post
title: Overflow in Angular Breadcrumb component | Syncfusion
description: Learn here all about Overflow in Syncfusion Angular Breadcrumb component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Overflow 
documentation: ug
domainurl: ##DomainURL##
---

# Overflow in Angular Breadcrumb component

## Overflow Mode

In the Breadcrumb component, `maxItems` and `overflowMode` properties were used to limit the number of breadcrumb items to be displayed.

In the following example, the maxItems is set as 3 with overflowMode as Default. To prevent breadcrumb item navigation, the `enableNavigation` property has been set to false in the Breadcrumb component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/navigations-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/navigations-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/navigations-cs5" %}

The following overflow modes are available in the Breadcrumb component.

* Collapsed
* Menu
* Wrap
* Scroll
* Hidden
* None

## Collapsed

Collapsed mode shows the first and last Breadcrumb items and hides the remaining items with a collapsed icon. When the collapsed icon is clicked, all items become visible and navigable.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/navigations-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/navigations-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/navigations-cs6" %}

## Menu

Menu mode shows the number of Breadcrumb items that can be accommodated within the container space and creates a submenu with the remaining items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/navigations-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/navigations-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/navigations-cs7" %}

## Wrap

Wrap mode wraps the items to multiple lines when the Breadcrumb’s width exceeds the container space.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/navigations-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/navigations-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/navigations-cs8" %}

## Scroll

Scroll mode shows an HTML scroll bar when the Breadcrumb’s width exceeds the container space.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/navigations-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/navigations-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/navigations-cs9" %}

## Hidden

Hidden mode shows the maximum number of items possible in the container space and hides the remaining items. Clicking on a previous item will make the hidden item visible.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/navigations-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/navigations-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/navigations-cs10" %}

## None

None mode shows all the items on a single line.
