---
layout: post
title: Save and Load Report through the Toolbar in Angular | Syncfusion
description: Learn how to save and load reports through custom toolbar options in the Syncfusion Angular Pivotview component.
control: Tool bar
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Export and import reports as JSON through custom toolbar options

The Syncfusion<sup style="font-size:70%">&reg;</sup> Pivot Table component allows users to save and restore report settings (also known as [dataSourceSettings](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#datasourcesettings)) through custom toolbar options. This function simplifies report configuration by allowing options to be exported and imported as JSON files.

## Customizing the Toolbar

To enable the export and import functionality, you can customize the Pivot Table's toolbar using the [toolbarTemplate](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#toolbartemplate) property. Here's how you can add **Save** and **Open** buttons to the toolbar:

### Save Button

The **Save** button, which rendered as an anchor element, it allows users to download the current report (also known as [dataSourceSettings](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#datasourcesettings)) as a JSON file. Each time the Pivot Table component is rendered or refreshed, the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#databound) event is triggered. During this event, the current **dataSourceSettings** are serialized into JSON format and set to the **href** attribute of the anchor element. Clicking the **Save** button initiates the download of the current report configuration as a JSON file.

### Open Button

The **Open** button, which rendered as an input file element, it allows users to select a JSON file containing report settings (also known as [dataSourceSettings](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#datasourcesettings)) from their file system. When a file is selected, the [change](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) event retrieves the report settings from the JSON file and assigns them to the Syncfusion<sup style="font-size:70%">&reg;</sup> Pivot Table component.

Here is an example demonstrating how to add **Save** and **Open** buttons to the toolbar and handle exporting and importing report configurations in the Syncfusion<sup style="font-size:70%">&reg;</sup> Pivot Table component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/save-and-load/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/save-and-load/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/save-and-load" %}

 For more information and to access the quick start project, visit: [GitHub Repository](https://github.com/SyncfusionExamples/save-and-load-report-through-the-toolbar-in-angular-pivotview-component)

## See Also

* [Pivotview Toolbar](https://ej2.syncfusion.com/angular/documentation/pivotview/tool-bar#see-also)

* [Toolbar Component](https://ej2.syncfusion.com/angular/documentation/toolbar/getting-started)