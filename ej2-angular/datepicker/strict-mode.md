---
layout: post
title: Strict mode in Angular Datepicker component | Syncfusion
description: Learn here all about Strict mode in Syncfusion Angular Datepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Strict mode 
documentation: ug
domainurl: ##DomainURL##
---

# Strict mode in Angular Datepicker component

The [`strictMode`](https://ej2.syncfusion.com/angular/documentation/api/datepicker#strictmode)is an act,that allows the user to enter only the valid date within the specified `min/max` range in textbox.
If the date is invalid, then the component will stay with the previous value.
Else, if the date is out of range, then the component will set the date to the min/max date.

The following example demonstrates the DatePicker in `strictMode` with min/max range of 5th to 25th in a month of May.
Here, it allows to enter only the valid date within the specified range. If you are trying to enter the out-of-range value as like 28th of May, then the value will set to the max date of 25th May. Since the value 28th is greater than to max value of 25th.
Or else if you are trying to enter the invalid date, then the value will stay with the previous value.

The following example demonstrates the DatePicker with strictMode `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datepicker/getting-started-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datepicker/getting-started-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datepicker/getting-started-cs12" %}

By default, the DatePicker act in strictMode `false` state, that allows to enter the invalid or out-of-range date in textbox.

If the date is out-of-range or invalid, then the model value will be set to `out of range` date value or `null` respectively with highlighted  `error` class to indicates the date is out of range or invalid.

The following example demonstrates the `strictMode` as `false`. Here, it allows to enter the valid or invalid value in textbox.
If you are entering out-of-range or invalid date value, then the model value will be set to `out of range` date value or `null` respectively with highlighted  `error` class to indicates the date is out of range or invalid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datepicker/getting-started-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datepicker/getting-started-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datepicker/getting-started-cs13" %}

> If the value of min or max properties changed through code behind, then you have to update the `value` property to set within the range.