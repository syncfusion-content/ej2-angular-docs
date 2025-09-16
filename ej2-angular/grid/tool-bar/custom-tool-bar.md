---
layout: post
title: Custom tool bar in Angular Grid component | Syncfusion
description: Learn here all about Custom tool bar in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Custom tool bar 
documentation: ug
domainurl: ##DomainURL##
---

# Custom toolbar in Angular Grid component

A custom toolbar in the Syncfusion Angular Grid allows for distinctive toolbar layouts, styles, and functionality tailored to specific application needs, enabling a personalized experience within the Grid.

Achieve customization by using the `toolbarTemplate` property, which provides extensive options for defining toolbar structure. Use a custom template for the toolbar and handle toolbar item actions in the **clicked** event.

The sample below demonstrates how to render a custom toolbar using `toolbarTemplate`:

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

Rendering an image with text in the Syncfusion Angular Grid's custom toolbar enhances visual presentation and provides additional context for an improved experience.

Use `ng-template` along with the `DomSanitizer` service and the `bypassSecurityTrustResourceUrl` method to securely present an image as a base64-encoded string.

- **DomSanitizer**: Angular's `DomSanitizer` service allows you to mark a value as trusted, enabling secure rendering for specific contexts. This is crucial for preventing XSS attacks.
- **bypassSecurityTrustResourceUrl**: Marks a URL—including a base64 image— as safe for use as a resource.

The following example shows how to render an image in the toolbar using `ng-template`:

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

Render DropDownList in custom toolbar in Syncfusion Angular Grid enables you to extend the functionality of the custom toolbar by incorporating a [DropDownList](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started) component, allowing you to perform various actions within the Grid based on their selections.

Implement this using `ng-template`. In the example below, the **DropDownList** component is included in the custom toolbar. Its [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#change) event is bound to an **onChange** method.

In **onChange**, evaluate the selected item's text to determine actions, such as:
- Calling [endEdit](https://ej2.syncfusion.com/angular/documentation/api/grid#endedit) for "Update"
- Using [startEdit](https://ej2.syncfusion.com/angular/documentation/api/grid#startedit) for "Edit"
- Executing [deleteRecord](https://ej2.syncfusion.com/angular/documentation/api/grid#deleterecord) for "Delete"

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

For example, the template can include custom buttons. Clicking the **ExcelExport** button triggers [excelExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexport), **PdfExport** triggers [pdfExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexport), and **Print** triggers [print](https://ej2.syncfusion.com/angular/documentation/api/grid/#print).

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
