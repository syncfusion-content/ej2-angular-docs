---
layout: post
title: Defer update in Angular Pivotview component | Syncfusion
description: Learn here all about Defer update in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Defer update 
documentation: ug
domainurl: ##DomainURL##
---

# Defer update in Angular Pivotview component

Defer layout update support allows to update the pivot table component only on demand. On enabling this feature, end user can drag-and-drop fields between row, column, value and filter axes, apply sorting and filtering inside the Field List, resulting in change of pivot report alone but not the pivot table values. Once all operations are performed and on clicking the "Apply" button in the Field List, pivot table will start to update with the last modified report. This also helps in bringing better performance in pivot table component rendering.

The field list can be displayed in two different formats to interact with pivot table. They are:

* **In-built Field List (Popup)**: To display the field list icon in pivot table UI to invoke the built-in dialog.
* **Stand-alone Field List (Fixed)**: To display the field list in a static position within a web page.

## In-built Field List (Popup)

To enable deferred updates in the pivot table, set the property [`allowDeferLayoutUpdate`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#allowdeferlayoutupdate) in pivot table as **true**. To make a note, the defer update option can be controlled only via Field List during runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs39/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs39/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs39" %}

## Stand-alone Field List (Fixed)

The field list can be rendered in a static position, anywhere in web page layout, like a separate component. To do so, you need to set [`renderMode`](https://ej2.syncfusion.com/angular/documentation/api/pivotfieldlist/#rendermode) property to **Fixed** in pivot fieldlist.

To enable deferred updates in the static fieldlist, set the property [`allowDeferLayoutUpdate`](https://ej2.syncfusion.com/angular/documentation/api/pivotfieldlist/#allowdeferlayoutupdate) in fieldlist as **true**. To make a note, the defer update option can be controlled only via Field List during runtime.

> To make field list interact with pivot table, you need to use the **UpdateView** and **Update** methods for data source update in both field list and pivot table simultaneously.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs40/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs40/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs40" %}