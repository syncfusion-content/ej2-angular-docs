---
layout: post
title: Interactive context menu in Angular Spreadsheet | Syncfusion
description: Learn here all about how to identify the context menu opened in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more. 
platform: ej2-angular
control: Spreadsheet
documentation: ug
domainurl: ##DomainURL##
---

# Identify the context menu opened in Angular Spreadsheet Component

The Spreadsheet includes several context menus that will open and display depending on the action. When you right-click on a cell, for example, a context menu with options related to the cell element appears.

The class name returned by the [contextMenuBeforeOpen](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#contextmenubeforeopen) event can be used to identify the context menu that is opened. The context menus and their class names are tabulated below.

| Class name | Context menu name |
|-------|---------|
| .e-sheet-content | Cell context menu |
| .e-toolbar-item | Footer context menu |
| .e-rowhdr-table | Row header context menu |
| .e-colhdr-table | Column header context menu |

The following code example shows how to identify the context menu opened.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/contextmenu-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/contextmenu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/contextmenu-cs1" %}