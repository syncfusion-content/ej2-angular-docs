---
layout: post
title: Customization using cssclass in Angular Daterangepicker component | Syncfusion
description: Learn here all about Customization using cssclass in Syncfusion Angular Daterangepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customization using cssclass 
documentation: ug
domainurl: ##DomainURL##
---

# Customization using cssclass in Angular Daterangepicker component

To customize UI, you can make use of [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/daterangepicker#cssclass) which will be added to DateRangePicker component as the root CSS class.
With this CSS class, you can override existing styles of DateRangePicker.

Following is the list of classes that provides flexible way to customize the DateRangePicker component.

| **Class Name** | **Description** |
| --- | --- |
| e-date-range-wrapper | Applied to DateRangePicker wrapper |
| e-range-icon | Applied to the DateRangePicker icon. |
| e-popup | Applied to DateRangePicker popup wrapper.|
| e-calendar | Applied to both Calendar element. |
| e-right-calendar | Applied to right Calendar element. |
| e-left-calendar | Applied to left Calendar element. |
| e-start-label | Applied to start label in popup. |
| e-end-calendar | Applied to end label in a popup. |
| e-day-span | Applied to day span details label in a popup. |
| e-footer | Applied to footer elements in a popup. |
| e-apply | Applied to apply button in footer in a popup. |
| e-cancel | Applied to cancel button in footer in a popup. |
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

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/daterangepicker/customcss-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/daterangepicker/customcss-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/daterangepicker/customcss-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/daterangepicker/customcss-cs1" %}
