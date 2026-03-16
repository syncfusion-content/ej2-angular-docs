---
layout: post
title: Position in Angular Tooltip component | Syncfusion
description: Learn here all about Position in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Position 
documentation: ug
domainurl: ##DomainURL##
---

# Position in Angular Tooltip component

Attach tooltips to 12 static locations around the target. Set the position property to any of the following values when initializing the tooltip:

* `TopLeft`

* `TopCenter`

* `TopRight`

* `BottomLeft`

* `BottomCenter`

* `BottomRight`

* `LeftTop`

* `LeftCenter`

* `LeftBottom`

* `RightTop`

* `RightCenter`

* `RightBottom`

> By default, Tooltip is placed at the `TopCenter` of the target element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs34/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs34/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs34" %}

## Tip pointer positioning

Attach or detach the tooltip pointer using the `showTipPointer` property. Adjust pointer positions using the `tipPointerPosition` property, which accepts one of the following values:

* `Auto`

* `Start`

* `Middle`

* `End`

The following code example demonstrates how to set the pointer to the start position.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs35/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs35/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs35" %}

By default, tip pointers are auto adjusted so that the arrow does not point outside the target element.

## Dynamic positioning

Position the tooltip and its tip pointer dynamically based on the target's location. Use the `refresh` method to automatically adjust the tooltip position relative to the target.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs36/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs36/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs36" %}

## Mouse trailing

Position tooltips relative to the mouse pointer by enabling this feature. Enable or disable this behavior using the `mouseTrail` property. By default, it is set to `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs37/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs37/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs37" %}

> When mouse trailing option is enabled, the tip pointer position gets auto adjusted based on the target, and
> other position values like start, end, and middle are not applied (to prevent the pointer from moving out of target).

## Setting offset values

Offset values are set to specify the distance between the target and tooltip element.
`offsetX` and `offsetY` properties are used to specify the offset left and top values.

* `offsetX` specifies the distance between the target and Tooltip element in X axis.
* `offsetY` specifies the distance between the target and Tooltip element in Y axis.

The following code example illustrates how to set offset values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs38/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs38/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs38" %}

> By default, collision is handled automatically and therefore when collision is detected the Tooltip fits horizontally and flips vertically.
