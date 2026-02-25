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

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/appearance/disabled-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/appearance/disabled-cs" %}

## Visible

can use the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/rating#visible) property of the rating component to control the visibility of the component. When the `visible` property is set to `true`, the rating component is displayed on the page. When it is set to `false`, the component is hidden.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/appearance/visible-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/appearance/visible-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/appearance/visible-cs" %}

## Read only

Use the [`readOnly`](https://ej2.syncfusion.com/angular/documentation/api/rating#readonly) property to render the rating component in a non-interactive state, preventing users from modifying the rating value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/appearance/readonly-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/appearance/readonly-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/appearance/readonly-cs" %}

## CSS classes

Customize the rating component's appearance—including colors, fonts, sizes, and other visual aspects—using the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/rating#cssclass) property. The following sections demonstrate common customization techniques.

### Changing rating symbol border color

Modify the rating icon border color by applying the `cssClass` property and setting the `text-stroke` CSS property of `.e-rating-icon` to your desired color.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/appearance/border-cs/src/app.component.ts %}
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

Customize the fill colors of rated and unrated icons by using the `cssClass` property and applying `linear-gradient` color-stops in the `background` CSS property of `.e-rating-icon`. The **first** color-stop defines the rated fill color and the **second** color-stop defines the unrated fill color.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/appearance/fill-color-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/appearance/fill-color-cs/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/rating/appearance/fill-color-cs/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/appearance/fill-color-cs" %}

This customizes the rated fill color to `#ffe814` and unrated fill color to `#d8d7d4`. The `--rating-value` variable in the linear-gradient represents the current rating value.

### Changing the item spacing

Adjust the space between rating items by using the `cssClass` property and setting the `margin` or `padding` CSS properties of `.e-rating-item-container` to your desired value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/appearance/spacing-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/appearance/spacing-cs/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/rating/appearance/spacing-cs/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/appearance/spacing-cs" %}

## Changing icon using CSS classes

Replace the default rating item icon by using the `cssClass` property and setting the `content` CSS property of `.e-icons.e-star-filled:before` to your desired font icon character code.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/appearance/icon-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/appearance/icon-cs/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/rating/appearance/icon-cs/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/appearance/icon-cs" %}
