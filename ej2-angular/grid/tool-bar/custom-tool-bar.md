---
layout: post
title: Angular Grid - Custom Toolbar | Syncfusion
description: Angular Grid toolbar items support built-in and custom actions, layout customization, and event handling for an adaptable and effective toolbar.
platform: ej2-angular
control: Custom Toolbar 
documentation: ug
domainurl: ##DomainURL##
---

# Custom toolbar in Angular Grid Component

Custom toolbar in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid enables the creation of a customized toolbar layout and functionality to match specific application requirements. This is achieved by utilizing the [toolbarTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#toolbartemplate) property, which provides comprehensive customization options for the toolbar layout and styling. Define a custom template for the toolbar and handle the actions of the toolbar items in the [clicked](https://ej2.syncfusion.com/angular/documentation/api/toolbar/index-default#clicked) event.

The following example demonstrates rendering the custom toolbar `toolbarTemplate` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/toolbar-template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/toolbar-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/toolbar-template-cs1" %}

## Render Image with Text in Custom Toolbar

Rendering an image with text in custom toolbar in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid enables easy display of an image along with text in the toolbar of the grid. This feature enhances the visual presentation of the grid, providing additional context and improving the overall experience.

Use `ng-template` along with the `DomSanitizer` service and the `bypassSecurityTrustResourceUrl` method to securely present an image as a base64-encoded string.

- **DomSanitizer**: Angular's `DomSanitizer` service allows you to mark a value as trusted, enabling secure rendering for specific contexts. This is crucial for preventing XSS attacks.
- **bypassSecurityTrustResourceUrl**: Marks a URL—including a base64 image— as safe for use as a resource.

The following example demonstrates rendering an image in the toolbar using `ng-template`:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/toolbar-template-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/toolbar-template-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/toolbar-template-cs3" %}

> Styles and layout of the image and text in the custom toolbar can be further adjusted as per specific design requirements.

## Render DropDownList in Custom Toolbar

Render DropDownList in custom toolbar in Syncfusion Angular Grid enables you to extend the functionality of the custom toolbar by incorporating a [DropDownList](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started) component, allowing you to perform various actions within the grid based on their selections.

Implement this using `ng-template`. In the example below, the `DropDownList` component is included in the custom toolbar. Its [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#change) event is bound to an `onChange` method.

In the `onChange` method, the text of the selected item is checked to determine the appropriate action. For example, if `Update` is chosen, the [endEdit](https://ej2.syncfusion.com/angular/documentation/api/grid#endedit) method is called to exit the edit mode. If `Edit` is selected, the selected record is passed to the [startEdit](https://ej2.syncfusion.com/angular/documentation/api/grid#startedit) method to initiate the edit mode dynamically. Similarly, if `Delete` is picked, the selected record is passed to the [deleteRecord](https://ej2.syncfusion.com/angular/documentation/api/grid#deleterecord) method to remove it from the grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/toolbar-template-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/toolbar-template-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/toolbar-template-cs4" %}

## Render a Component or Element Using the Toolbar Template

Use `ng-template` in the Syncfusion Angular Grid to add custom components or elements—such as [Button](https://ej2.syncfusion.com/angular/documentation/button/getting-started), input fields, or icons—to the toolbar. This offers flexibility for advanced layouts and direct interactions.

To render custom components or elements within the toolbar, use the `toolbarTemplate` property. This allows the inclusion of other components, such as a [Button](https://ej2.syncfusion.com/angular/documentation/button/getting-started), and enables specific grid actions based on the button click. For example, when the `ExcelExport` button is clicked, the [excelExport](https://ej2.syncfusion.com/angular/documentation/api/grid#excelexport) method is called to export the grid to `Excel`. Similarly, when the `PdfExport` button is clicked, the [pdfExport](https://ej2.syncfusion.com/angular/documentation/api/grid#pdfexport) method is called to export the grid to PDF format. Likewise, when the `Print` button is clicked, the [print](https://ej2.syncfusion.com/angular/documentation/api/grid#print) method is triggered to print the grid.

The following example demonstrates rendering the `Button` component in the toolbar using `toolbarTemplate` property and performing grid action based on the corresponding button click.

Below is an example demonstrating this approach:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/toolbar-template-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/toolbar-template-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/toolbar-template-cs2" %}
