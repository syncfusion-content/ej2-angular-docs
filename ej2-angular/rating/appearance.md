---
layout: post
title: Appearance with Angular Rating component | Syncfusion
description:  Learn here all about Appearance with Angular Rating component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Appearance
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in Angular Rating Component

You can also customize the appearance of rating component.

## Items count

You can specify the number of rating items using the [`itemsCount`](https://ej2.syncfusion.com/angular/documentation/api/rating#itemscount) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/appearance/items-count-cs/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rating/appearance/items-count-cs/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/appearance/items-count-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/appearance/items-count-cs" %}

## Disabled

You can disable the rating component by using the [`disabled`](https://ej2.syncfusion.com/angular/documentation/api/rating#disabled) property. When the `disabled` property is set to `true`, the rating component will be disabled and the user will not be able to interact with it and a disabled rating component may have a different visual appearance than an enabled one.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/appearance/disabled-cs/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rating/appearance/disabled-cs/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/appearance/disabled-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/appearance/disabled-cs" %}

## Visible

You can use the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/rating#visible) property of the rating component to component the visibility of the component. When the `visible` property is set to `true`, the rating component will be visible on the page. When it is set to `false`, the component will be hidden.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/appearance/visible-cs/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rating/appearance/visible-cs/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/appearance/visible-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/appearance/visible-cs" %}

## Read only

You can use the [`readOnly`](https://ej2.syncfusion.com/angular/documentation/api/rating#readonly) property of the rating component to make the component non-interactive and prevent the user from changing the rating value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/appearance/readonly-cs/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rating/appearance/readonly-cs/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/appearance/readonly-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/appearance/readonly-cs" %}

## CssClass

You can customize the appearance of the rating component, such as by changing its colors, fonts, sizes, or other visual aspects by using the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/rating#cssclass) property.

### Changing rating symbol border color

You can change the rating icon border color in rating component, you can use the `cssClass` property and set the `text-stroke` CSS property of `.e-rating-icon` to your desired border color.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/appearance/border-cs/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rating/appearance/border-cs/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/appearance/border-cs/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/rating/appearance/border-cs/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/appearance/border-cs" %}

### Changing rated/un-rated symbol fill color

You can customize the fill colors of rated and un-rated icons in the rating component using the `cssClass` property and the `linear-gradient` color-stops in the `background` CSS property of `.e-rating-icon`. The **first** color-stop defines the rated fill color and the **second** defines the un-rated fill color.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/appearance/fill-color-cs/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rating/appearance/fill-color-cs/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/appearance/fill-color-cs/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/rating/appearance/fill-color-cs/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/appearance/fill-color-cs" %}

This will customize the rated fill color to `#ffe814` and un-rated fill color to `#d8d7d4`. `--rating-value` in the linear-gradient provides the current value of the rating item.

### Changing the item spacing

You can change the space between the rating items in rating component, by using the `cssClass` property and setting the `margin` / `padding` CSS property of `.e-rating-item-container` to your desired size.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/appearance/spacing-cs/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rating/appearance/spacing-cs/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/appearance/spacing-cs/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/rating/appearance/spacing-cs/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/appearance/spacing-cs" %}

## Changing icon using CssClass

You can change the rating item icon in rating component, you can use the `cssClass` property and set the `content` CSS property of `.e-icons.e-star-filled:before` to your desired font icon.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/appearance/icon-cs/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rating/appearance/icon-cs/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/appearance/icon-cs/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/rating/appearance/icon-cs/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/appearance/icon-cs" %}
