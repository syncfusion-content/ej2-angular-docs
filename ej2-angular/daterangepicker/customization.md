---
layout: post
title: Customization in Angular Daterangepicker component | Syncfusion
description: Learn here all about Customization in Syncfusion Angular Daterangepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customization 
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Angular Daterangepicker component

DateRangePicker makes available for the UI customization which can be achieved with properties, events that are available with this component.

## Day cell format

[`renderDayCell`](https://ej2.syncfusion.com/angular/documentation/api/daterangepicker/renderDayCellEventArgs#renderdaycelleventargs) is a event which provides the option to customize each day cell while rendering itself.
The following example disables the weekends of every month using `renderDayCell` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/daterangepicker/getting-started-cs2" %}

## First day of week

Start day in a week will differ based on culture and it can be customized based on application needs.
For this customization, you can make use of `firstDayOfWeek` property.
By default, first day of week in en-US is Sunday.

In below example, first day of the week in the pop-up calendar is customized to Monday with help of the `firstDayOfWeek` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/daterangepicker/getting-started-cs3" %}

## Preset Ranges

DateRangePicker has an option to set the pre-defined ranges with label using `presets` property.
With help of this, we can set the frequently used ranges as preset ranges for quick selection in a DateRangePicker popup.
Here in following sample, you can choose the mostly using options from pre-defined ranges easily.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/daterangepicker/getting-started-cs4" %}

## See Also

* [How to customize DateRangePicker using cssClass](./how-to/customization-using-cssclass)
* [How to disable DateRangePicker component](./how-to/disable-placeholder-readonly)
* [How to customize the DateRangePicker day header](./how-to/customize-the-daterangepicker-day-header)