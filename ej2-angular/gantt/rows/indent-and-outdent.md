---
layout: post
title: Indent and outdent in Angular Gantt component | Syncfusion
description: Learn here all about Indent and outdent in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Indent and outdent 
documentation: ug
domainurl: ##DomainURL##
---

# Indent and outdent in Angular Gantt component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt component provides built-in support for indenting and outdenting rows, allowing you to easily adjust the hierarchy level of rows within the gantt.

**Indent** - The indent feature moves the selected row to a lower hierarchical level within the gantt, indenting it by one level. The indent action moves the selected row as the last child of its previous row.

**Outdent** - The outdent feature moves the selected row up by one level in the hierarchy within the gantt. The outdent action moves the selected row as a sibling to its parent row.

To enable indent and outdent functionality, you need to set [editSettings.allowEditing](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowediting) property to `true` and inject the **EditService** and **SelectionService** in the providers section of the **AppComponent**. The `Indent` and `Outdent` actions can be performed by using in-built context menu or [toolbaritems](https://ej2.syncfusion.com/angular/documentation/api/gantt/toolbarItem/). 

The following demo illustrates how to enable `Indent` and `Outdent` functionalities in the gantt using the [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#toolbar) property.

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

You can programmatically change the hierarchy level of a row using the [indent](https://ej2.syncfusion.com/angular/documentation/api/gantt/#indent) and [outdent](https://ej2.syncfusion.com/angular/documentation/api/gantt/#outdent) methods provided by the Gantt component.

Before performing the indent or outdent action, you need to select the row. This can be done using the [selectRow](https://ej2.syncfusion.com/angular/documentation/api/gantt/#selectrow) method by passing the desired row index as an argument.

The following demo illustrates how to programmatically indent or outdent a row using a external button click. Upon clicking the button, the row is selected using the `selectRow` method, followed by either the `indent` or `outdent` method to perform the action.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/rows/indent-outdent-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/rows/indent-outdent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/rows/indent-outdent-cs2" %}

## Indent and outdent events 

In the Gantt, you can retrieve the details of indenting and outdenting actions using the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/gantt/#actioncomplete) event of the gantt. Within the `actionComplete` event, you can access the indent/outdent details based on the action using the [args.requestType](https://ej2.syncfusion.com/angular/documentation/api/gantt/iTaskAddedEventArgs/#requesttype) property with values **indented** or **outdented**.

The following demo demonstrates how to retrieve the details of indenting and outdenting actions using the `actionComplete` event with the `args.requestType` property:

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

* The indent and outdent feature does not support multiple rows selection.