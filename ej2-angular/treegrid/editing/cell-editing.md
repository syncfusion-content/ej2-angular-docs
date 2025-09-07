---
layout: post
title: Cell editing in Angular TreeGrid component | Syncfusion
description: Learn how to use cell editing in the Syncfusion Angular TreeGrid component, including enabling, editing, and handling cell edit events.
platform: ej2-angular
control: Cell editing 
documentation: ug
domainurl: ##DomainURL##
---

# Cell editing in Angular TreeGrid component

In Cell edit mode, double-clicking a cell switches it to an editable state. You can change the cell value and save it back to the data source. To enable Cell edit mode, set the [`editSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettingsModel/#mode) property to `Cell`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs7" %}

> Cell edit mode is the default editing mode in TreeGrid.
> The following events occur during cell editing:
> 1. [`cellEdit`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#celledit) is triggered when editing begins.
> 2. [`cellSave`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#cellsave) fires when saving the cell.
> 3. [`cellSaved`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#cellsaved) occurs after the cell is saved.
