---
layout: post
title: Resize in Angular Splitter component | Syncfusion
description: Learn here all about Resize in Syncfusion Angular Splitter component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Splitter 
documentation: ug
domainurl: ##DomainURL##
---

# Resizing panes in Angular Splitter component

By default, pane resizing is enabled in the Angular Splitter component. A gripper element is added to the separator to make resizing intuitive and user-friendly.

> The horizontal Splitter allows resizing in horizontal directions.  
> The vertical Splitter allows resizing in vertical directions.

During resizing, the adjacent panes automatically adjust their dimensions to accommodate the change.

## Minimum and Maximum size constraints

You can define minimum and maximum sizes for each pane. Resizing is restricted within these boundaries to maintain layout integrity.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/validation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/validation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/splitter/validation-cs1" %}

## Disabling pane resizing

You can disable the resizing for the pane by setting `false` to the [resizable](https://ej2.syncfusion.com/angular/documentation/api/splitter/panePropertiesModel/#resizable) property within paneSettings.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/fixed-pane-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/fixed-pane-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/splitter/fixed-pane-cs2" %}

> **Note**: Resizing is enabled only when the adjacent pane’s `resizable` property is also set to `true`.

## Refreshing content during resize

You can refresh pane content dynamically during resizing by using the following events:

- [`resizeStart`](https://ej2.syncfusion.com/angular/documentation/api/splitter/#resizestart)
- [`resizing`](https://ej2.syncfusion.com/angular/documentation/api/splitter/#resizing)
- [`resizeStop`](https://ej2.syncfusion.com/angular/documentation/api/splitter/#resizestop)

## Customizing Resize-gripper and Cursor

You can style the resize gripper icon and cursor using CSS to match your application's design.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/grip-customization-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/grip-customization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/splitter/grip-customization-cs1" %}

## See Also

* [Collapsible panes](./expand-collapse)