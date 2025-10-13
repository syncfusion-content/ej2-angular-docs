---
layout: post
title: Indent and outdent in Angular Gantt component | Syncfusion
description: Learn how to use Indent and Outdent features in the Syncfusion Angular Gantt component to manage task hierarchy effectively.
platform: ej2-angular
control: Indent and outdent 
documentation: ug
domainurl: ##DomainURL##
---

# Indent and outdent in Angular Gantt component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt component provides built-in support for indenting and outdenting rows, allowing hierarchy levels to be adjusted within the Gantt chart.

 * **Indent** – Moves a selected row one level deeper, making it the last child of its previous row.
 * **Outdent** – Shifts a row one level up, placing it as a sibling to its parent.

To enable indent and outdent functionality, set [editSettings.allowEditing](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowediting) to **true**, inject **EditService** and **SelectionService** in **AppComponent**, and use either the **built-in context menu** or [toolbaritems](https://ej2.syncfusion.com/angular/documentation/api/gantt/toolbarItem/) to perform `Indent` and `Outdent` actions.

The following sample demonstrates how to enable `Indent` and `Outdent` functionalities in the Gantt using the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/gantt/#toolbar) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/rows/indent-outdent-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/rows/indent-outdent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/rows/indent-outdent-cs1" %}

## Indent and outdent a row programmatically

You can programmatically adjust a row's hierarchy in the Angular Gantt component using the [indent](https://ej2.syncfusion.com/angular/documentation/api/gantt/#indent) and [outdent](https://ej2.syncfusion.com/angular/documentation/api/gantt/#outdent) methods. Before performing these actions, select the target row by calling the [selectRow](https://ej2.syncfusion.com/angular/documentation/api/gantt/#selectrow) method with the appropriate row index.

The following sample demonstrates how to programmatically select row index **2** and perform indent or outdent actions using an external button click.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/rows/indent-outdent-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/rows/indent-outdent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/rows/indent-outdent-cs2" %}

## Retrieve Indent and outdent details

You can retrieve indent and outdent details using the [actionComplete](https://ej2.syncfusion.com/angular/documentation/gantt/events#actioncomplete) event, where the `args.requestType` value will be either `indented` or `outdented`, indicating the type of action performed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/rows/indent-outdent-events-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/rows/indent-outdent-events-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/rows/indent-outdent-events-cs1" %}

## Limitation 

* The indent and outdent feature does not support selecting and modifying multiple rows simultaneously.