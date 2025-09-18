---
layout: post
title: Design in Angular AppBar component | Syncfusion
description: Learn here all about Design in Syncfusion Angular AppBar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: AppBar 
documentation: ug
domainurl: ##DomainURL##
---

# Design in Angular Appbar component

## Spacer

`Spacer` provides spacing between AppBar content elements, creating additional space in the content layout for better visual organization.

The following example demonstrates how to add spacing between the home and pan buttons in the AppBar:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/appbar/spacer-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/appbar/spacer-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/appbar/spacer-cs1" %}

## Separator

`Separator` displays a vertical line that visually groups or separates AppBar content elements for improved organization.

The following example demonstrates how to add a vertical line between a group of buttons in the AppBar:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/appbar/separator-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/appbar/separator-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/appbar/separator-cs1" %}

## Designing AppBar with Menu

The AppBar renders with a Menu component in its header area. The Menu component inherits styles from the AppBar component using the `e-inherit` CSS class, ensuring consistent theming and appearance.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/appbar/menu-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/appbar/menu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/appbar/menu-cs1" %}

## Designing AppBar with Buttons

The AppBar renders with Button and DropDownButton components in its header area. These components inherit styles from the AppBar using the `e-inherit` CSS class, maintaining visual consistency across the interface.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/appbar/buttons-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/appbar/buttons-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/appbar/buttons-cs1" %}

## Designing AppBar with SideBar

The AppBar integrates with the SideBar component positioned below the AppBar. Click the menu icon to expand or collapse the Sidebar. This example uses the `toggle` method to show or hide the Sidebar when the AppBar button is clicked.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/appbar/sidebar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/appbar/sidebar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/appbar/sidebar-cs1" %}

## Media Query

Media Query enables the AppBar to adapt to different screen sizes with responsive behavior. Resize the screen to observe how the AppBar layout adjusts dynamically.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/appbar/media-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/appbar/media-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/appbar/media-cs1" %}