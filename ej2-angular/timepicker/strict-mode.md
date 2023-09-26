---
layout: post
title: Strict mode in Angular Timepicker component | Syncfusion
description: Learn here all about Strict mode in Syncfusion Angular Timepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Strict mode 
documentation: ug
domainurl: ##DomainURL##
---

# Strict mode in Angular Timepicker component

The [`strictMode`](https://ej2.syncfusion.com/angular/documentation/api/timepicker#strictmode) is an act that allows you to enter only valid time value within the specified min/max range in the textbox. If the time value is invalid, the component value sets to the previous value.
If the time value is out of range, the component sets the time value to min/max value.

The following example demonstrates the TimePicker in `strictMode` with min/max range of `10:00 AM` to `4:00 PM` . It allows you to enter only valid time within the specified range. If you enter the out-of-range value like `8:00 PM`, the value sets to the max time `4:00 PM` as the value `8:00 PM` is greater than `max` value of `4:00 PM`. If you enter invalid time value like `9:00 tt`, the value sets to the previous value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timepicker/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/timepicker/getting-started-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timepicker/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timepicker/getting-started-cs6" %}

By default, the TimePicker act in strictMode `false` state, that allows to enter the invalid or out-of-range time in textbox.

If the time is out-of-range or invalid, then the model value will be set to `out of range` time value or `null` respectively with highlighted `error` class to indicates the time is out of range or invalid.

The following example demonstrates the `strictMode` as `false`. Here, it allows to enter the valid or invalid value in textbox.
If you are entering the out-of-range or invalid time value, then the model value will be set to `out of range` time value or `null` respectively with highlighted `error` class to indicates the time is out of range or invalid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timepicker/getting-started-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/timepicker/getting-started-cs7/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timepicker/getting-started-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timepicker/getting-started-cs7" %}

> If the value of `min` or `max` property is changed through code behind, update the `value` property to set within the range.