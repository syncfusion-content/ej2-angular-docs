---
layout: post
title: Css customization in Angular Datepicker component | Syncfusion
description: Learn here all about Css customization in Syncfusion Angular Datepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Css customization 
documentation: ug
domainurl: ##DomainURL##
---

# Css customization in Angular Datepicker component

To customize DatePicker UI, you can make use of [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/datepicker#cssclass) which will be added to DatePicker component as the root CSS class. With this CSS class, you can override existing styles of DatePicker.

Following is the list of classes that provides flexible way to customize the DateRangePicker component.

| **Class Name** | **Description** |
| --- | --- |
| e-date-wrapper | Applied to DatePicker wrapper element. |
| e-datepicker |  Applied to input element and DatePicker popup element. |
| e-datepicker .e-date-wrapper | Applied to input element only. |
| e-input-group-icon.e-date-icon | Applied to popup icon button. |
| e-float-text | Applied to floating label text element. |
| e-popup | Applied to popup element. |
| e-datepicker.e-popup | Applied to DatePicker popup element only. |
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
| e-footer-container | Applied to the Calendar footer container.|
| e-today | Applied to the Calendar Today Cell.|

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datepicker/customization-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/datepicker/customization-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datepicker/customization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datepicker/customization-cs1" %}
