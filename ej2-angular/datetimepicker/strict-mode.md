---
layout: post
title: Strict mode in Angular Datetimepicker component | Syncfusion
description: Learn here all about Strict mode in Syncfusion Angular Datetimepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Strict mode 
documentation: ug
domainurl: ##DomainURL##
---

# Strict mode in Angular Datetimepicker component

The `strictMode`is an act, that allows the user to enter only the valid date and time within the specified min/max range in textbox.
If the input entered is invalid, then the component will stay with the previous value.
Else, if the datetime is out of range, then the component will set the datetime to the min/max value.

The following example demonstrates the DateTimePicker in `strictMode` with min/max range of `5/5/2019 2:00 AM` to `5/25/2019 2:00 AM`. Here, it allows to enter only the valid date and time within the specified range. If you are trying to enter the out-of-range value as like `5/28/2019`, then the value will set to the `max` value as `5/25/2019 2:00 AM`. Since the value 28 is greater than to `max` value of 25. Or else if you are trying to enter the invalid date, then the value will stay with the previous value.

The following example demonstrates the DateTimePicker with strictMode `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datetimepicker/accessibility-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/datetimepicker/accessibility-cs7/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datetimepicker/accessibility-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datetimepicker/accessibility-cs7" %}

By default, the DateTimePicker act in strictMode `false` state, that allows to enter the invalid or out-of-range datetime in textbox.

If the datetime is out-of-range or invalid, then the model value will be set to `out of range` datetime value or `null` respectively with highlighted `error` class to indicates the datetime is out of range or invalid.

The following example demonstrates the `strictMode` as `false`. Here, it allows to enter the valid or invalid value in textbox.
If you are entering the out-of-range or invalid datetime value, then the model value will be set to `out of range` datetime value or `null` respectively with highlighted `error` class to indicates the datetime is out of range or invalid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datetimepicker/accessibility-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/datetimepicker/accessibility-cs8/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datetimepicker/accessibility-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datetimepicker/accessibility-cs8" %}

> If the value of `min` or `max` properties changed through code behind, then you have to update the `value` property to set within the range.
