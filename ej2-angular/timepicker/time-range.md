---
layout: post
title: Time range in Angular Timepicker component | Syncfusion
description: Learn here all about Time range in Syncfusion Angular Timepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Time range 
documentation: ug
domainurl: ##DomainURL##
---

# Time range in Angular Timepicker component

TimePicker provides an option to select a time value within a specified range by using the [`min`](https://ej2.syncfusion.com/angular/documentation/api/timepicker#min) and [`max`](https://ej2.syncfusion.com/angular/documentation/api/timepicker#max) properties.  The min value should always be lesser than the max value.

When the min and max properties are configured and the selected time value is out-of-range or invalid, then the model value will be set to `out of range` time value or `null` respectively with highlighted `error` class to indicates the time is out of range or invalid.

The value property depends on the min/max with respect to [`strictMode`](./strict-mode/) property.
The following example allows you to select a time value within a range of `9:00 AM` to `11:30 AM`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timepicker/getting-started-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/timepicker/getting-started-cs8/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timepicker/getting-started-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timepicker/getting-started-cs8" %}

> If the value of `min` or `max` property is changed through code behind you have to update the `value` property to set within the range.