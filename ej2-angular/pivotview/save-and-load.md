---
layout: post
title: Save and Load in Angular Pivot Table | Syncfusion
description: Learn how the Angular Pivot Table saves and restores the dataSourceSettings report through custom toolbar export and import actions.
control: Pivot Table
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Save and Load in Angular Pivot Table

The Syncfusion<sup style="font-size:70%">&reg;</sup> Pivot Table component allows users to save and restore report settings—also known as [dataSourceSettings](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#datasourcesettings)—through custom toolbar options. This functionality simplifies report management by allowing users to export settings as a JSON file and import them later to restore the Pivot Table configuration.

## Customizing the Toolbar

To enable the export and import functionality, customize the Pivot Table's toolbar using the [toolbarTemplate](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#toolbartemplate) property. Add **Save** and **Open** buttons as described below. The sample also requires the `ToolbarService` module, which must be injected into the Pivot Table via the `@NgModule.providers` section.

> The template referenced by `toolbarTemplate` (for example, `#template`) must be a `div` that is a sibling of the Pivot Table in the DOM. The sample below places the `<div id="template">` immediately after the component.

### Save Button

The **Save** button is rendered as an anchor element. When clicked, the current report settings are retrieved using the [`getPersistData`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#getpersistdata) method, converted into a base64-encoded JSON string, and assigned to the anchor's `href` attribute so the browser downloads a file named `pivot.JSON`. The downloaded file contains the full [dataSourceSettings](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#datasourcesettings), including rows, columns, values, and filters.

### Open Button

The **Open** button is rendered as a label-wrapped file input. When a file is selected, the [change](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) event reads the file as text and assigns the parsed JSON to the Pivot Table's [dataSourceSettings](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#datasourcesettings), restoring the saved report.

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

* [Pivot Table Toolbar](https://ej2.syncfusion.com/angular/documentation/pivotview/tool-bar#see-also)

* [Toolbar Component](https://ej2.syncfusion.com/angular/documentation/toolbar/getting-started)