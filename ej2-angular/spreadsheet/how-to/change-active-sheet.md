---
layout: post
title: Changing the active sheet while importing a file in the Angular Spreadsheet component | Syncfusion
description: Learn here all about changing the active sheet index while importing a file in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more. 
platform: ej2-angular
control: Spreadsheet
documentation: ug
domainurl: ##DomainURL##
---

## Changing the active sheet while importing a file in Angular Spreadsheet component

You can change the active sheet of imported file by updating [`activeSheetIndex`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#activesheetindex) property on the [`openComplete`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#opencomplete) event.

The following code example shows how to set the active sheet when importing an Excel file.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/change-active-sheet-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/change-active-sheet-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/change-active-sheet-cs1" %}