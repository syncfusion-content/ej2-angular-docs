---
layout: post
title: Resize in Angular Splitter component | Syncfusion
description: Learn here all about Resize in Syncfusion Angular Splitter component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Resize 
documentation: ug
domainurl: ##DomainURL##
---

# Resize in Angular Splitter component

By default, resizing will be enable for split panes. Resizing gripper element will be add to the separator to makes the resize easy.

> Horizontal Splitter will allows to resize in horizontal directions.
> Vertical Splitter will allows to resize in vertical directions.

While resizing, previous and next panes will be adjust its dimensions automatically.

## Min and Max validation

Splitter allows you to set the minimum and maximum sizes for each pane. Resizing will not be occur over the minimum and maximum values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/validation-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/splitter/validation-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/validation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/splitter/validation-cs1" %}

## Prevent resizing

You can disable the resizing for the pane by setting `false` to the [resizable](https://ej2.syncfusion.com/angular/documentation/api/splitter/panePropertiesModel/#resizable) property within paneSettings.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/fixed-pane-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/splitter/fixed-pane-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/fixed-pane-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/splitter/fixed-pane-cs2" %}

>Note: Splitter resizing will be enabled only when the target of the adjacent pane's `resizable` api is also in `true` state.

## Refresh content on resizing

While resizing the panes, you can refresh the pane contents by using either [resizeStart](https://ej2.syncfusion.com/angular/documentation/api/splitter/#resizestart), [resizing](https://ej2.syncfusion.com/angular/documentation/api/splitter#resizestart) or [resizeStop](https://ej2.syncfusion.com/angular/documentation/api/splitter/#resizestart) events.

## Customize Resize-gripper and Cursor

You can customize the resize gripper icon and cursor in CSS level.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/grip-customization-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/splitter/grip-customization-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/grip-customization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/splitter/grip-customization-cs1" %}

## See Also

* [Collapsible panes](./expand-collapse)