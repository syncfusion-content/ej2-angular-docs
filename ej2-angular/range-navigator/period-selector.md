---
layout: post
title: Period selector in Angular Range navigator component | Syncfusion
description: Learn here all about Period selector in Syncfusion Angular Range navigator component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Period selector 
documentation: ug
domainurl: ##DomainURL##
---

# Period selector in Angular Range navigator component

The period selector allows to select a range with specified periods.

## Periods

An array of objects that allows the users to specify pre-defined time intervals. The [`interval`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#interval) property specifies the count value of the button, and the `text` property specifies the text to be displayed on the button. The [`intervaltype`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#intervaltype) property allows the users to customize the interval type, and it supports the following types:

* Auto
* Years
* Quarter
* Months
* Weeks
* Days
* Hours
* Minutes
* Seconds

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/periodselector/periods-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/periodselector/periods-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/periodselector/periods-cs1" %}

>To use the period selector feature, inject the `PeriodSelectorService` into the `@NgModule.providers`.

## Positioning period selector

The [`position`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/periodSelectorSettingsModel/#position) property allows the users to position the period selector at the **Top** or **Bottom**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/periodselector/position-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/periodselector/position-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/periodselector/position-cs1" %}

## Height

The [`height`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/periodSelectorSettingsModel/#height) property allows the users to specify the height of the period selector. The default value of the height property is **43px**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/periodselector/position-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/periodselector/position-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/periodselector/position-cs2" %}

## Visibility of range navigator

The [`disableRangeSelector`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#disablerangeselector) property allows the users to display only the period selector and not the Range Selector.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/periodselector/position-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/periodselector/position-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/periodselector/position-cs3" %}

## See Also

* [LightWeight](./lightweight/)