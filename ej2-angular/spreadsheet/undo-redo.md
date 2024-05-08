---
layout: post
title: Undo redo in Angular Spreadsheet component | Syncfusion
description: Learn here all about Undo redo in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Undo redo 
documentation: ug
domainurl: ##DomainURL##
---

# Undo redo in Angular Spreadsheet component

`Undo` option helps you to undone the last action performed and `Redo` option helps you to do the same action which is reverted in the Spreadsheet. You can use the [`allowUndoRedo`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#allowundoredo) property to enable or disable undo redo functionality in spreadsheet.

> * The default value for `allowUndoRedo` property is `true`.

By default, the `UndoRedo` module is injected internally into Spreadsheet to perform undo redo.

## Undo

It reverses the last action you performed with Spreadsheet. Undo can be done by any of the following ways:

* Select the undo item from HOME tab in Ribbon toolbar.
* Use `Ctrl + Z` keyboard shortcut to perform the undo.
* Use the [`undo`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#undo) method programmatically.

## Redo

It reverses the last undo action you performed with Spreadsheet. Redo can be done by any of the following ways:

* Select the redo item from HOME tab in Ribbon toolbar.
* Use `Ctrl + Y` keyboard shortcut to perform the redo.
* Use the [`redo`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#redo) method programmatically.

## Update custom actions in UndoRedo collection

You can update your own custom actions in UndoRedo collection, by using the [`updateUndoRedoCollection`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#updateundoredocollection) method. And also customize the undo redo operations of your custom action by using `actionComplete` event.

The following code example shows `How to update and customize your own actions for undo redo` functionality in the Spreadsheet control.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/undo-redo-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/undo-redo-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/undo-redo-cs1" %}

## Note

You can refer to our [Angular Spreadsheet](https://www.syncfusion.com/angular-ui-components/angular-spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Spreadsheet example](https://ej2.syncfusion.com/angular/demos/#/material/spreadsheet/default) to knows how to present and manipulate data.

## See Also

* [Sorting](./sort)
* [Filtering](./filter)
* [Hyperlink](./link)