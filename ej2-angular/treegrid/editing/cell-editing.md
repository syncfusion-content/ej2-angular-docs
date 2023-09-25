---
layout: post
title: Cell editing in Angular Treegrid component | Syncfusion
description: Learn here all about Cell editing in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Cell editing 
documentation: ug
domainurl: ##DomainURL##
---

# Cell editing in Angular Treegrid component

In Cell edit mode, when you double click on a cell, it is changed to edit state.
You can change the cell value and save to the data source.
To enable Cell edit, set the [`editSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettingsModel/#mode) as `Cell`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs7/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs7" %}

> Cell edit mode is the default mode of editing.
> The following events are triggered for the cell edit mode.
> 1. [`cellEdit`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#celledit) event when user begin to edit the cell.
> 2. [`cellSave`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#cellsave) event triggers on saving the cell.
> 3. [`cellSaved`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#cellsaved) event triggers after the cell was saved.