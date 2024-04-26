---
layout: post
title: Splitter in Angular Gantt component | Syncfusion
description: Learn here all about Splitter in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
control: Splitter 
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Splitter in Angular Gantt component

## Splitter

In the Gantt component, the Splitter separates the TreeGrid section from the Chart section. You can change the position of the Splitter when loading the Gantt component using the [`splitterSettings`](https://ej2.syncfusion.com/angular/documentation/api/gantt/splitterSettings/) property. By splitting the TreeGrid from the chart, the width of the TreeGrid and chart sections will vary in the component. The [`splitterSettings.position`](https://ej2.syncfusion.com/angular/documentation/api/gantt/splitterSettings/#position) property denotes the percentage of the TreeGrid section’s width to be rendered and this property supports both pixels and percentage values. You can define the splitter position as column index value using the [`splitterSettings.columnIndex`](https://ej2.syncfusion.com/angular/documentation/api/gantt/splitterSettings/#columnindex) property. You can also define the splitter position with built-in splitter view modes by using the [`splitterSettings.view`](https://ej2.syncfusion.com/angular/documentation/api/gantt/splitterSettings/#view) property. The following list is the possible values for this property:

* `Default`: Shows Grid side and Gantt side.
* `Grid`: Shows Grid side alone in Gantt.
* `Chart`: Shows chart side alone in Gantt.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/appearance-customization/changesplitter/initial-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/appearance-customization/changesplitter/initial-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/appearance-customization/changesplitter/initial-cs1" %}

## Change splitter position dynamically

In Gantt, we can change the splitter position dynamically by using [`setSplitterPosition`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#setsplitterposition) method. Either We can change the splitter position with splitter position or columnIndex values by passing these values as arguments to [`setSplitterPosition`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#setsplitterposition) method. The following code example shows how to use this methods.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/appearance-customization/changesplitter/dynamic-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/appearance-customization/changesplitter/dynamic-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/appearance-customization/changesplitter/dynamic-cs1" %}