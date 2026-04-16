---
layout: post
title: Customize number, date & time in Angular PivotView | Syncfusion
description: Learn here all about customizing number, date and time values in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize number date and time values 
documentation: ug
domainurl: ##DomainURL##
---

# Customize number, date and time values in Angular Pivotview component

You can format the number, date, and time values for each field using the [`formatSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#formatsettings) option under [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings). This configuration is applied during component initialization to ensure consistent data presentation across the pivot view.

## Number formatting

For numeric fields, the formatting settings include the following properties:

* [`name`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatsettingsmodel#name): Specifies the field name to which the formatting should be applied.
* [`format`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatsettingsmodel#format): Defines the number format pattern for the respective field (e.g., 'N2' for two decimal places, 'C' for currency).

> Also, you can customize the applied number format by setting the [`NumberFormatOptions`](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization#manipulating-numbers) options in [`formatSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#formatsettings) itself.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs163/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs163/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs163" %}

## Date and Time formatting

For date and time fields, the formatting settings include these properties:

* [`name`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatsettingsmodel#name): Specifies the field name to which the formatting should be applied.
* [`format`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatsettingsmodel#format): Defines the date/time format pattern for the respective field (e.g., 'dd/MM/yyyy', 'MMM yyyy').
* [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatsettingsmodel#type): Specifies the format type to be used for the respective field (Date, Time, or DateTime).

> Also, you can customize the applied date format by setting [`DateFormatOptions`](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization#manipulating-datetime) options in [`formatSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#formatsettings) itself.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs164/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs164/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs164" %}

## Limitations of date formatting

According to Firefox and Edge browser standards, most date and time formats used in data sources are not supported. For example: Apr-2000, Apr-01-2000, 01-03-2000, 2000-Apr-01 and similar formats are not recognized. However, [`ISO formats`](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) are supported across all browsers for consistent date handling.