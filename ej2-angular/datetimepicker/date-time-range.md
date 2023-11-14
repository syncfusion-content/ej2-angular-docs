---
layout: post
title: Date time range in Angular Datetimepicker component | Syncfusion
description: Learn here all about Date time range in Syncfusion Angular Datetimepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Date time range 
documentation: ug
domainurl: ##DomainURL##
---

# Date time range in Angular Datetimepicker component

DateTimePicker provides an option to select a date and time value within a specified range by using the [`min`](https://helpej2.syncfusion.com/angular/documentation/api/datetimepicker/#min) and [`max`](https://ej2.syncfusion.com/angular/documentation/api/datetimepicker/#max)properties.
Always the min value has to be lesser than the max value.

When the min and max properties are configured and the selected datetime value is out-of-range or invalid, then the model value will be set to `out of range` datetime value or `null` respectively with highlighted `error` class to indicates the datetime is out of range or invalid.

The value property depends on the min/max with respect to [`strictMode`](./strict-mode) property.

The below example allows selecting a date within the range from 7th to 27th day in a month.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datetimepicker/accessibility-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/datetimepicker/accessibility-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datetimepicker/accessibility-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datetimepicker/accessibility-cs3" %}

> If the value of `min` or `max` properties changed through code behind, then you have to update the `value` property to set within the range.
