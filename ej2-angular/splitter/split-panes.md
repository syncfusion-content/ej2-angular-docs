---
layout: post
title: Split panes in Angular Splitter component | Syncfusion
description: Learn here all about Split panes in Syncfusion Angular Splitter component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Split panes 
documentation: ug
domainurl: ##DomainURL##
---

# Split panes in Angular Splitter component

This section explain about split panes behaviours.

## Horizontal layout

By default, Splitter will render in horizontal orientation. Splitter container will be split as panes in horizontal flow direction with vertical separator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/horizontal-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/horizontal-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/splitter/horizontal-cs1" %}

## Vertical layout

By setting [orientation](https://ej2.syncfusion.com/angular/documentation/api/splitter/#orientation) property as `Vertical`, Splitter will render in vertical orientation. Splitter container will be split as panes in vertical flow direction with horizontal separator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/vertical-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/vertical-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/splitter/vertical-cs1" %}

## Multiple panes

You can render the multiple panes with both `Horizontal` and `Vertical` orientations.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/multiple-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/multiple-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/splitter/multiple-cs1" %}

## Separator

By default, pane separator will be render with `1px` width/height. You can customize the separator size by using [separatorSize](https://ej2.syncfusion.com/angular/documentation/api/splitter/#separatorsize) property.

> For Horizontal orientation, it will be considered as separator width.
> For Vertical orientation, it will be considered as separator height.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/separator-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/separator-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/splitter/separator-cs1" %}

## Nested Splitter

Splitter provides support to render the nested pane to achieve the complex layouts. You can use the same `<div>` element for splitter pane and nested splitter.

> Also you can render the nested splitter using direct child of the splitter pane. For this, nested splitter should have `100%` width and height to match with the parent pane dimensions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/nested-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/nested-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/splitter/nested-cs1" %}

## Add or remove pane

You can add or remove panes programmatically to the splitter, By using [addPane](https://ej2.syncfusion.com/angular/documentation/api/splitter#addpane) and [removePane](https://ej2.syncfusion.com/angular/documentation/api/splitter#removepane) methods.

### Add pane

You can add the panes dynamically in the splitter by passing [pane properties](https://ej2.syncfusion.com/documentation/api/splitter/panePropertiesModel/) along with index to the addPane method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/add-pane-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/add-pane-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/splitter/add-pane-cs1" %}

### Remove pane

You can remove the split panes dynamically by passing the pane index to [removePane](https://ej2.syncfusion.com/angular/documentation/api/splitter#removepane) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/splitter/remove-pane-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/splitter/remove-pane-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/splitter/remove-pane-cs1" %}

## See Also

* [Resizable split panes](./resize)
* [Collapsible panes](./expand-collapse)
* [Define size to a panes](./pane-sizing)
* [Specify content to a panes](./pane-content)