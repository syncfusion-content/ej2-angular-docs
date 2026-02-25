---
layout: post
title: Selection with Angular Rating component | Syncfusion
description:  Learn here all about Selection with Angular Rating component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Selection
documentation: ug
domainurl: ##DomainURL##
---

# Selection in Angular Rating Component

The rating component allows users to rate something using a visual scale, and the selection state can be changed by the user clicking or tapping on the stars in the rating scale or through code. The rating component has a minimum value and a reset button, and provides customization options for the selected rating value and selection behavior.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/selection/selection-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/selection/selection-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/selection/selection-cs" %}

## Min value

Set the minimum selectable rating value using the [`min`](https://ej2.syncfusion.com/angular/documentation/api/rating#min) property. Users cannot select ratings below this value. For example, setting `min` to 2 prevents users from rating below 2 stars.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/selection/min-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/selection/min-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/selection/min-cs" %}

## Single selection

Enable single-item selection mode using the [`enableSingleSelection`](https://ej2.syncfusion.com/angular/documentation/api/rating#enablesingleselection) property. When set to `true`, only one rating item is selected at a time; previously selected items are automatically deselected.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/selection/singleselection-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/selection/singleselection-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/selection/singleselection-cs" %}

## Show or hide reset button

Control the visibility of the reset button using the [`allowReset`](https://ej2.syncfusion.com/angular/documentation/api/rating#allowreset) property. When set to `true`, a reset button appears, allowing users to clear their rating selection and return to the default state.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rating/selection/allowreset-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rating/selection/allowreset-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rating/selection/allowreset-cs" %}
