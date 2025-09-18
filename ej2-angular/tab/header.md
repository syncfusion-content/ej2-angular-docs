---
layout: post
title: Header in Angular Tab component | Syncfusion
description: Learn here all about Header in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tab 
documentation: ug
domainurl: ##DomainURL##
---

# Header in Angular Tab component

This section explains how to modify Tab header styles and configure header icons and their positions.

## Styles

You can customize header styles by adding predefined classes to the Tab root element. These CSS classes control the visual appearance and selection behavior of Tab headers:

* **e-fill**: The selected Tab header background displays as a solid fill, providing clear visual distinction for the active tab.
* **e-background**: Tab headers have a solid fill background with the selected header featuring a highlighted border for emphasis.
* **e-background e-accent**: Tab headers have a solid fill background with the selected header displaying a highlighted border in the accent color theme.

> When these custom style classes are not applied to the root element, the default Tab styling is used for all Tab items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
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

You can customize the position of Tab header icons using the [`iconPosition`](https://ej2.syncfusion.com/angular/documentation/api/tab/header/#iconposition) property. This property works in conjunction with the header items [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/tab/header/#iconcss) property to determine both the icon source and its placement. By default, Tab header icons are positioned on the left side of the header text.

The available position values are:

* **Left**: Icon appears to the left of the Tab header text (default behavior).
* **Right**: Icon appears to the right of the Tab header text.
* **Top**: Icon appears above the Tab header text.
* **Bottom**: Icon appears below the Tab header text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/icon-position-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/icon-position-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/icon-position-cs1" %}

## See Also

* [How to customize selected tab styles](./how-to/customize-selected-tab-styles)