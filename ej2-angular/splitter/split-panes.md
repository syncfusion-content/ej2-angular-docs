---
layout: post
title: Split panes in Angular Splitter component | Syncfusion
description: Learn here all about Split panes in Syncfusion Angular Splitter component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Splitter 
documentation: ug
domainurl: ##DomainURL##
---

# Split panes in Angular Splitter component

This section explains the behavior of split panes in the Angular Splitter component.

## Horizontal layout

By default, the Splitter renders in horizontal orientation, dividing the container into panes with a vertical separator.

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

Set the [orientation](https://ej2.syncfusion.com/angular/documentation/api/splitter/#orientation) property to `Vertical` to render the Splitter in vertical orientation, dividing the container into panes with a horizontal separator.

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

You can render multiple panes in both `Horizontal` and `Vertical` orientations.

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

By default, the pane separator is rendered with a `1px` width/height. You can customize the separator size using the [separatorSize](https://ej2.syncfusion.com/angular/documentation/api/splitter/#separatorsize) property.

- For horizontal orientation, this defines the separator’s width.
- For vertical orientation, this defines the separator’s height.

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

Splitter supports nested panes for complex layouts. You can use the same `<div>` element for both the parent pane and the nested Splitter.

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

You can add or remove panes programmatically using the [addPane](https://ej2.syncfusion.com/angular/documentation/api/splitter/#addpane) and [removePane](https://ej2.syncfusion.com/angular/documentation/api/splitter/#removepane) methods.

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

You can remove the split panes dynamically by passing the pane index to [removePane](https://ej2.syncfusion.com/angular/documentation/api/splitter/#removepane) method.

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

- [Resizable split panes](./resize)
- [Collapsible panes](./expand-collapse)
- [Define pane size](./pane-sizing)
- [Specify pane content](./pane-content)
