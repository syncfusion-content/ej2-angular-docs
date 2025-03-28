---
layout: post
title: Date time format in Angular Datetimepicker component | Syncfusion
description: Learn here all about Date format in Syncfusion Angular Datetimepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Date time format 
documentation: ug
domainurl: ##DomainURL##
---

# Date time format in Angular Datetimepicker component

## Date time Format

Date time format is a way of representing the date and time value in different string format in textbox.

By default the DateTimePicker's format is based on the culture. You can also set the own custom format by using the [`format`](https://ej2.syncfusion.com/angular/documentation/api/datetimepicker#format) property.

>Once the format property has been defined it will be common to all the cultures.

To know more about the date format standards, refer to the [Internationalization Date Format](http://ej2.syncfusion.com/documentation/base/internationalization#date-formatter-and-parser) section.

The following example demonstrates the DateTimePicker with the custom format (`yyyy-MM-dd hh:mm`).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datetimepicker/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datetimepicker/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datetimepicker/getting-started-cs1" %}

## Input formats

The [`inputFormats`](https://helpej2.syncfusion.com/angular/documentation/api/datetimepicker/#inputformats) property in the DatetimePicker control allows users to enter dates and times in various formats, providing flexibility in date and time entry. This property accepts an array of predefined formats that the control recognizes, enabling users to input dates in different ways while ensuring they are parsed correctly.
 
When the user types the date and time in any of the specified input formats, it will be automatically converted to the display format after pressing Enter, the Tab key, or when the input loses focus. This enhances the user experience by allowing intuitive data entry through various custom input formats.

The following example demonstrates the DateTimePicker with multiple input formats.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datetimepicker/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datetimepicker/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datetimepicker/getting-started-cs2" %}
