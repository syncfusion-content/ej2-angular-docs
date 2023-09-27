---
layout: post
title: Adding new tasks in Angular Gantt component | Syncfusion
description: Learn here all about Adding new tasks in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Adding new tasks 
documentation: ug
domainurl: ##DomainURL##
---

# Adding new tasks in Angular Gantt component

Tasks can be dynamically added to the Gantt project by enabling the [`editSettings.allowAdding`](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowadding) property.

## Toolbar

A row can be added to the Gantt component from the toolbar while the  [`editSettings.allowAdding`](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowadding) property is set to `true`. On clicking the toolbar add icon, you should provide the task information in the add dialog.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/addrow-toolbar-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/managing-tasks/addrow-toolbar-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/addrow-toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/managing-tasks/addrow-toolbar-cs1" %}

> By default, the new row will be added to the top most row in the Gantt component.

## Context menu

A row can also be added above, below or child of the selected row by using context menu support. For this, we need to enable the property[`enableContextMenu`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enablecontextmenu) and inject the `ContextMenuService` in the provider section of `AppModule`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/contextmenu-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/managing-tasks/contextmenu-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/contextmenu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/managing-tasks/contextmenu-cs1" %}

## Using method

You can add rows to the Gantt component dynamically using the [`addRecord`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#addrecord) method and you can define the add position of the default new record by using the [`rowPosition`](https://ej2.syncfusion.com/angular/documentation/api/gantt/rowPosition/) property. You can also pass the `rowIndex` as an additional parameter.

* Top of all the rows
* Bottom to all the existing rows
* Above the selected row
* Below the selected row
* As child to the selected row

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/addrow-dynamic-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/managing-tasks/addrow-dynamic-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/addrow-dynamic-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/managing-tasks/addrow-dynamic-cs1" %}