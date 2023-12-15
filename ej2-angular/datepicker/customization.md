---
layout: post
title: Customization in Angular Datepicker component | Syncfusion
description: Learn here all about Customization in Syncfusion Angular Datepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customization 
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Angular Datepicker component

You can customize the  entire appearance of the input element and Calendar by using custom [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/datepicker/#cssclass) property.
Also you can use the calendar's [`renderDayCell`](https://ej2.syncfusion.com/angular/documentation/api/datepicker/renderDayCellEventArgs/#renderdaycelleventargs) event to customize the appearance of the each day cell.

Below is the list of classes that provides flexible way to customize the DatePicker component.

| **Class Name** | **Description** |
| --- | --- |
| e-date-wrapper | Applied to DatePicker wrapper |
| e-datepicker | Applied to the DatePicker element.|
| e-float-text | Applied to the floating label.  |
| e-date-icon | Applied to the DatePicker icon. |
| e-popup-wrapper | Applied to DatePicker popup wrapper.|
| e-calendar | Applied to Calendar element. |
| e-header | Applied to Calendar header.|
| e-title |Applied to Calendar title. |
| e-icon-container | Applied to Calendar previous and next icon container.|
| e-prev |  Applied to Calendar previous icon.|
| e-next | Applied to Calendar next icon.|
| e-weekend | Applied to Calendar weekend dates.|
| e-other-month |  Applied to Calendar other month dates.|
| e-day | Applied to each day cell of the Calendar.|
| e-selected | Applied to Calendar selected dates.|
| e-disabled | Applied to Calendar disabled dates.|

The following example disables the weekends of every month using `renderDayCell` event.
Here we have used the `e-disabled` class to highlight the disabled date.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datepicker/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/datepicker/getting-started-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datepicker/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datepicker/getting-started-cs2" %}

## Adding mandatory asterisk to placeholder and float label

You can add a mandatory `asterisk(*)` to placeholder and float label using <b>.e-input-group.e-control-wrapper.e-float-input .e-float-text::after</b> class.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datepicker/asterisk-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/datepicker/asterisk-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datepicker/asterisk-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datepicker/asterisk-cs1" %}

## See Also

* [Render DatePicker with CSS customization](./how-to/css-customization)
* [How to disable the DatePicker control](./how-to/disable-placeholder-readonly)
* [How to set read-only for DatePicker](./how-to/disable-placeholder-readonly)
* [How to customize the DatePicker day header](./how-to/customize-the-datepicker-day-header)
