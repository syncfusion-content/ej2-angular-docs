---
layout: post
title: Position in Angular Tooltip component | Syncfusion
description: Learn here all about Position in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tooltip 
documentation: ug
domainurl: ##DomainURL##
---

# Position in Angular Tooltip component

Attach tooltips to 12 static locations around the target element. When initializing the Tooltip, set the [`position`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#position) property to one of the following values:

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
{% include code-snippet/tooltip/getting-started-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs15" %}

## Tip pointer positioning

Attach or detach the tooltip pointer using the [`showTipPointer`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#showtippointer) property. Adjust pointer positions using the [`tipPointerPosition`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#tippointerposition) property, which accepts one of the following values:

* `Auto`

* `Start`

* `Middle`

* `End`

The following code example demonstrates how to set the pointer to the start position.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs16" %}

By default, tip pointers are auto adjusted so that the arrow does not point outside the target element.

## Dynamic positioning

Position the tooltip and its tip pointer dynamically based on the target element. Use the [`refresh`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#refresh) method to automatically adjust the tooltip position relative to the target.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs17" %}

## Mouse trailing

Position tooltips relative to the mouse pointer by enabling this feature. Enable or disable this behavior using the [`mouseTrail`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#mousetrail) property. By default, it is set to `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs18/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs18" %}

> When mouse trailing option is enabled, the tip pointer position gets auto adjusted based on the target, and other position values like start, end, and middle are not applied (to prevent the pointer from moving out of target).

## Setting offset values

Use offset values to specify the distance between the target and tooltip element. The [`offsetX`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#offsetx) and [`offsetY`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#offsety) properties set the horizontal and vertical offset values.

* `offsetX` specifies the horizontal distance between the target and tooltip element.
* `offsetY` specifies the vertical distance between the target and tooltip element.

The following code example demonstrates how to set offset values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs19/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs19/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs19" %}

> By default, collision is handled automatically and therefore when collision is detected the Tooltip fits horizontally and flips vertically.
