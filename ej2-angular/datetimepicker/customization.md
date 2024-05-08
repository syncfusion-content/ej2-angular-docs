---
layout: post
title: Customization in Angular Datetimepicker component | Syncfusion
description: Learn here all about Customization in Syncfusion Angular Datetimepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customization 
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Angular Datetimepicker component

The DateTimePicker is available for UI customization that can be achieved by using available properties and events in the component.

## Day and Time Cell format

The DateTimePicker is available for UI customization based on your application requirements.
It can be achieved by using [`renderDayCell`](https://ej2.syncfusion.com/angular/documentation/api/datetimepicker/renderDayCellEventArgs#renderdaycelleventargs) event that provides an option to customize each day cell on rendering.

The following example disables the weekends of every month by using `renderDayCell` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datetimepicker/accessibility-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datetimepicker/accessibility-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datetimepicker/accessibility-cs2" %}

## Adding mandatory asterisk to placeholder and float label

You can add a mandatory `asterisk(*)` to placeholder and float label using <b>.e-input-group.e-control-wrapper.e-float-input .e-float-text::after</b> class.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datetimepicker/asterisk-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datetimepicker/asterisk-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datetimepicker/asterisk-cs1" %}

## See Also

* [How to disable the DateTimePicker component](./how-to/disable-placeholder-readonly)
* [How to customize the DateTimePicker day header](./how-to/customize-the-datetimepicker-day-header)