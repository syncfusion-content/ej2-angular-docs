---
layout: post
title: Exporting in Angular Schedule component | Syncfusion
description: Learn here all about Exporting in Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Scheduler
documentation: ug
domainurl: ##DomainURL##
---

# Exporting in Angular Schedule component

The Scheduler supports exporting appointments to Excel and ICS files on the client side. It offers client-side methods to export appointments in either Excel or iCal format. Explore how to implement exporting in the Scheduler.

## Excel Exporting

The Scheduler allows you to export events to an Excel file by using the [`exportToExcel`](https://ej2.syncfusion.com/angular/documentation/api/schedule#exporttoexcel) client-side method. By default, it exports all fields mapped through [`eventSettings`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings) property.

> Before enabling Excel export, import and inject the `ExcelExport` module from `@syncfusion/ej2-schedule` using the `Inject` method of the Scheduler.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/excel-export-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/excel-export-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/schedule/excel-export-cs1" %}

![Excel Exporting](images/schedule-excel-export.png)

### Exporting with custom fields

By default, Scheduler exports all the default event fields that are mapped to it through the [`eventSettings`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings) property. To limit the number of fields on the exported excel file, it provides an option to export only the custom fields of the event data. To export such custom fields alone, define the required `fields` through the [`ExportOptions`](https://ej2.syncfusion.com/angular/documentation/api/schedule/exportOptions) interface and pass it as argument to the `exportToExcel` method as shown in the following example. For example: `['Id', 'Subject', 'StartTime', 'EndTime', 'Location']`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/excel-export-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/excel-export-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/schedule/excel-export-cs2" %}

![Excel Exporting with custom Fields](images/schedule-excel-export-custom-fields.png)

### Exporting individual occurrences of a recurring series

By default, the Scheduler exports recurring events as a single data by exporting only its parent record into the excel file. If you want to export each individual occurrences of a recurring series appointment as separate records in an Excel file, define the [`includeOccurrences`](https://ej2.syncfusion.com/angular/documentation/api/schedule/exportOptions#includeoccurrences) option as `true` through the [`ExportOptions`](https://ej2.syncfusion.com/angular/documentation/api/schedule/exportOptions) interface and pass it as argument to the [`exportToExcel`](https://ej2.syncfusion.com/angular/documentation/api/schedule#exporttoexcel) method. By default, the [`includeOccurrences`](https://ej2.syncfusion.com/angular/documentation/api/schedule/exportOptions#includeoccurrences) option is set to `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/excel-export-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/excel-export-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/schedule/excel-export-cs3" %}

### Exporting custom event data

By default, the whole event collection bound to the Scheduler gets exported as an excel file. To export only specific events of Scheduler or some custom event collection, you need to pass those custom data collection as a parameter to the [`exportToExcel`](https://ej2.syncfusion.com/angular/documentation/api/schedule#exporttoexcel) method as shown in this following example, through the `customData` option of [`ExportOptions`](https://ej2.syncfusion.com/angular/documentation/api/schedule/exportOptions) interface.

> By default, event data are taken from the Scheduler `dataSource`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/excel-export-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/excel-export-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/excel-export-cs4" %}

### Customizing column header with custom fields exporting

Using fields property, we can only export the defined fields into excel without customizing the header. Now we can provide the alternate support to customize the header of custom fields exporting using the `fieldsInfo` option through the `ExportFieldInfo` interface and pass it as an argument to the [`exportToExcel`](https://ej2.syncfusion.com/angular/documentation/api/schedule#exporttoexcel) method as shown in the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/excel-export-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/excel-export-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/excel-export-cs5" %}

![Excel Exporting with custom header texts](images/schedule-excel-export-custom-header.png)

### Export with custom file name

By default, the Scheduler allows you to download the exported Excel file with a name `Schedule.xlsx`. It also provides an option to export the excel file with a custom file name, by defining the desired `fileName` through the [`ExportOptions`](https://ej2.syncfusion.com/angular/documentation/api/schedule/exportOptions) interface and passing it as an argument to the [`exportToExcel`](https://ej2.syncfusion.com/angular/documentation/api/schedule#exporttoexcel) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/excel-export-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/excel-export-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/schedule/excel-export-cs6" %}

### Excel file formats

By default, the Scheduler exports event data to an excel file in the `.xlsx` format. You can also export the Scheduler data in either of the file type such as `.xlsx` or `csv` formats, by defining the [`exportType`](https://ej2.syncfusion.com/angular/documentation/api/schedule/exportOptions#exporttype) option as either `csv` or `xlsx` through the [`ExportOptions`](https://ej2.syncfusion.com/angular/documentation/api/schedule/exportOptions) interface. By default, the `exportType` is set to `xlsx`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/excel-export-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/excel-export-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/excel-export-cs7" %}

### Custom separator in CSV

The Scheduler exports the event data to CSV format with `,` as separator. You can change separator by setting [separator](https://ej2.syncfusion.com/angular/documentation/api/schedule/exportOptions#separator) property in [ExportOptions](https://ej2.syncfusion.com/angular/documentation/api/schedule/exportOptions#exporttype).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/excel-export-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/excel-export-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/excel-export-cs8" %}

### How to customize the excel sheet on before exporting

Customizing an Excel sheet before export is made easy with the [`excelExport`](https://ej2.syncfusion.com/angular/documentation/api/schedule#excelExport) event. This event provides users with robust flexibility to tailor the exported data, format it according to specific needs, and include additional elements for enhanced presentation.

With the [`excelExport`](https://ej2.syncfusion.com/angular/documentation/api/schedule#excelExport) event, you can:

- **Adjust the formatting:** Apply specific styles such as font type, size, color, and cell formatting to make the output visually appealing and consistent with your requirements.

- **Customize headers and footers:** Personalize the Excel sheet by modifying the header and footer content, offering more control over the exported document.

- **Cancel the export:** The event supports cancellation of the export process by setting the `cancel` property to `true`. This feature ensures you can prevent export based on specific conditions, offering you full control over the Excel export workflow.

Here’s an example of how you can add a custom header and footer to an Excel sheet before exporting using the [`excelExport`](https://ej2.syncfusion.com/angular/documentation/api/schedule#excelExport) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/excel-export-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/excel-export-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/excel-export-cs9" %}

## Exporting calendar events as ICS file

You can export the Scheduler events to a calendar (.ics) file format, and open it on any of the other default calendars such as Google or Outlook. To export the events of Scheduler to an ICS file, you need to first import the `ICalendarExport` module from `@syncfusion/ej2-schedule` package and then inject it using the `Schedule.Inject(ICalendarExport)` method.

The following code example shows how the Scheduler events are exported to a calendar (.ics) file by making use of the [`exportToICalendar`](https://ej2.syncfusion.com/angular/documentation/api/schedule#exporttoicalendar) public method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/calendar-export-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/calendar-export-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/calendar-export-cs1" %}

### Exporting calendar with custom file name

By default, the calendar is exported with a file name `Calendar.ics`. To change this file name on export, pass the custom string value as `fileName` to the method argument so as to get the file downloaded with this provided name.

The following example downloads the iCal file with a name `ScheduleEvents.ics`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/calendar-export-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/calendar-export-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/calendar-export-cs2" %}

## Import events from other calendars

The events from external calendars (ICS files) can be imported into Scheduler by using the `importICalendar` method. This method accepts the `blob object` of an .ics file to be imported, as a mandatory argument.

> To import an ICS file containing events into Scheduler, you need to first import the `ICalendarImport` module from `@syncfusion/ej2-schedule` package and then inject it using the `Schedule.Inject(ICalendarImport)` method.

The following example shows how to import an ICS file into Scheduler, using the `importICalendar` method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/calendar-export-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/calendar-export-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/calendar-export-cs3" %}

## How to print the Scheduler element

The Scheduler allows you to print the Scheduler element by using the `print` client-side method. The print method works in two ways. You can find it below.

* Using print method without options.
* Using a print method with options.

> To print the Schedule, you need to import the `PrintService` module from the `@syncfusion/ej2-angular-schedule` package and then inject it using `providers:[PrintService]`.

### Using print method without options

You can print the Schedule element with the current view by using the [`print`](https://ej2.syncfusion.com/angular/documentation/api/schedule#print) method without passing the options. The following example shows how to print the Scheduler using the [`print`](https://ej2.syncfusion.com/angular/documentation/api/schedule#print) method without passing options.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/print-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/print-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/print-cs1" %}

### Using print method with options

You can print the Schedule element based on your needs using the [`print`](https://ej2.syncfusion.com/angular/documentation/api/schedule#print) method by passing the print options used in this example with its values. The following example shows how to print the Scheduler using the [`print`](https://ej2.syncfusion.com/angular/documentation/api/schedule#print) method by passing the options.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/print-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/print-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/print-cs2" %}

### Customizing the print layout

The [`beforePrint`](https://ej2.syncfusion.com/angular/documentation/api/schedule#beforePrint) event enables users to customize the print layout of the Scheduler control without altering the actual schedule layout or data. This event returns the HTML element used for printing, which can be tailored based on specific requirements before the print operation is triggered. Additionally, users can prevent the print action by setting the `cancel` property to `true`, giving them full control over when and how the print operation takes place.

Key customization options:

- **Customizing the header and footer:** Add custom header and footer content of the print layout to include additional information.
- **Controlling print output:** Fine-tune the layout to ensure that only the necessary details are printed, ensuring a clean and structured printout.

Here’s an example of how you can add a custom header and footer to the print layout using the [`beforePrint`](https://ej2.syncfusion.com/angular/documentation/api/schedule#beforePrint) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/print-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/print-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/print-cs3" %}

> You can refer to our [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Scheduler example](https://ej2.syncfusion.com/angular/demos/#/material/schedule/overview) to knows how to present and manipulate data.
