---
layout: post
title: Header in Angular Tab | Syncfusion
description: Customize the Angular Tab header with e-fill or e-background CSS classes, header icons, and the iconPosition property.
platform: ej2-angular
control: Tab 
documentation: ug
domainurl: ##DomainURL##
---

# Header in Angular Tab

This section explains how to modify Tab header styles and configure header icons and their positions.

## Styles

Apply these predefined classes to the Tab root element via the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#cssclass) property to control the visual appearance and selection behavior of Tab headers:

* **e-fill**: The selected Tab header background displays as a solid fill, providing clear visual distinction for the active tab.
* **e-background**: Tab headers have a solid fill background with the selected header featuring a highlighted border for emphasis.
* **e-background e-accent**: Combine `e-background` with `e-accent` to apply a solid fill background with the selected header displaying a highlighted border in the accent color theme.

> When the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#cssclass) property is not configured with these custom style classes, the default Tab styling is used for all Tab items.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/header-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/tab/header-cs1/src/app.component.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/header-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/header-cs1" %}

## Icon positions

Customize the position of Tab header icons using the [`iconPosition`](https://ej2.syncfusion.com/angular/documentation/api/tab/headerModel#iconposition) property. This property works in conjunction with the header item's [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/tab/headerModel#iconcss) property to determine both the icon source and its placement.

The available position values are:

* **Left**: Icon appears to the left of the Tab header text (default).
* **Right**: Icon appears to the right of the Tab header text.
* **Top**: Icon appears above the Tab header text. Supported only when the header orientation is vertical (`headerPlacement="Left"` or `"Right"`); see [Orientation](./orientation).
* **Bottom**: Icon appears below the Tab header text. Supported only when the header orientation is vertical.

In RTL layouts, the `Left` and `Right` values are mirrored: `Right` places the icon on the visual left and `Left` places it on the visual right.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/icon-position-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/icon-position-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/icon-position-cs1" %}

## See Also

* [How to customize selected tab styles](./how-to/customize-selected-tab-styles)
* [Style and Appearance](./style)
* [Orientation](./orientation)