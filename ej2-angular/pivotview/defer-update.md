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

Defer layout update support allows updating the pivot table component only on demand, significantly improving performance for complex data operations. When this feature is enabled, users can drag-and-drop fields between row, column, value and filter axes, apply sorting and filtering inside the Field List, resulting in changes to the pivot report configuration without immediately updating the pivot table values. Once all operations are performed and the "Apply" button is clicked in the Field List, the pivot table will update with the final modified report. This approach reduces multiple unnecessary renders and brings better performance, especially when working with large datasets or performing multiple field operations.

The field list can be displayed in two different formats to interact with the pivot table:

* **In-built Field List (Popup)**: Displays the field list icon in the pivot table UI to invoke the built-in dialog.
* **Stand-alone Field List (Fixed)**: Displays the field list in a static position within a web page.

## In-built Field List (Popup)

To enable deferred updates in the pivot table, set the [`allowDeferLayoutUpdate`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#allowdeferlayoutupdate) property to **true**. Note that the defer update option can be controlled only via Field List during runtime.

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

The field list can be rendered in a static position anywhere in the web page layout, functioning as a separate component. To achieve this, set the [`renderMode`](https://ej2.syncfusion.com/angular/documentation/api/pivotfieldlist/index-default#rendermode) property to **Fixed** in the pivot fieldlist.

To enable deferred updates in the static fieldlist, set the [`allowDeferLayoutUpdate`](https://ej2.syncfusion.com/angular/documentation/api/pivotfieldlist/index-default#allowdeferlayoutupdate) property to **true** in the fieldlist. Note that the defer update option can be controlled only via Field List during runtime.

> To make the field list interact with the pivot table, use the **updateView** and **update** methods to synchronize data source updates between both the field list and pivot table components simultaneously.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs40/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs40/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs40" %}