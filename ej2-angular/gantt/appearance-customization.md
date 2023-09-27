---
layout: post
title: Appearance customization in Angular Gantt component | Syncfusion
description: Learn here all about Appearance customization in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Appearance customization 
documentation: ug
domainurl: ##DomainURL##
---

# Appearance customization in Angular Gantt component

## Taskbar customization

### Taskbar height

The height of child taskbars and parent taskbars can be customized by using [`taskbarHeight`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskbarheight) property. The following code example shows how to use the [`taskbarHeight`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskbarheight) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/appearance-customization/taskbar-height-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/appearance-customization/taskbar-height-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/appearance-customization/taskbar-height-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/appearance-customization/taskbar-height-cs1" %}

> NOTE
The [`taskbarHeight`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskbarheight) value should be lower than [`rowHeight`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowheight) property value and these properties accept only pixel values.

### Conditional formatting

The default taskbar UI can be replaced with custom templates by using the [`queryTaskbarInfo`](https://ej2.syncfusion.com/angular/documentation/api/gantt/iQueryTaskbarInfoEventArgs) event. The following code example shows customizing the taskbar UI based on task progress values in Gantt component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/appearance-customization/formatting-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/appearance-customization/formatting-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/appearance-customization/formatting-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/appearance-customization/formatting-cs1" %}

### Change gripper icon in taskbar

You can change the gripper icon in the taskbar by applying styles to their respective class elements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/appearance-customization/change-gripper-icon-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/appearance-customization/change-gripper-icon-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/appearance-customization/change-gripper-icon-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/appearance-customization/change-gripper-icon-cs1" %}

## Task labels

The Gantt component maps any data source fields to task labels using the [`labelSettings.leftLabel`](https://ej2.syncfusion.com/angular/documentation/api/gantt/labelSettings/#leftlabel), [`labelSettings.rightLabel`](https://ej2.syncfusion.com/angular/documentation/api/gantt/labelSettings/#rightlabel), and [`labelSettings.taskLabel`](https://ej2.syncfusion.com/angular/documentation/api/gantt/labelSettings/#tasklabel) properties. You can customize the task labels with templates.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/appearance-customization/tasklabeltemplate-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/appearance-customization/tasklabeltemplate-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/appearance-customization/tasklabeltemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/appearance-customization/tasklabeltemplate-cs1" %}

## Connector lines

The width and background color of connector lines in Gantt can be customized using the [`connectorLineWidth`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#connectorlinewidth) and [`connectorLineBackground`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#connectorlinebackground) properties. The following code example shows how to use these properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/appearance-customization/dependency-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/appearance-customization/dependency-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/appearance-customization/dependency-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/appearance-customization/dependency-cs1" %}

## Customize rows and cells

While rendering the TreeGrid part in Gantt, the [`rowDataBound`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowdatabound) and [`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#querycellinfo) events trigger for every row and cell. Using these events, you can customize the rows and cells. The following code example shows how to customize the cell and row elements using these events.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/appearance-customization/customize-row-cells-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/appearance-customization/customize-row-cells-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/appearance-customization/customize-row-cells-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/appearance-customization/customize-row-cells-cs1" %}

## Grid lines

In Gantt component, you can show or hide the grid lines in the TreeGrid side and chart side by using the [`gridLines`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#gridlines) property.

The following options are available in Gantt component for rendering grid lines,

* Horizontal: The horizontal grid lines alone will be visible.
* Vertical: The vertical grid lines alone will be visible.
* Both: Both the horizontal and vertical grid lines will be visible on the TreeGrid and chart sides.
* None: Gridlines will not be visible on TreeGird and chart sides.

> By default, the [`gridLines`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#gridLines) property is set with `Horizontal` type.

The following code example shows how to change the gridlines rendering mode in the Gantt component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/appearance-customization/gridlines-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/appearance-customization/gridlines-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/appearance-customization/gridlines-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/appearance-customization/gridlines-cs1" %}

## Splitter

In the Gantt component, the Splitter separates the TreeGrid section from the Chart section. You can change the position of the Splitter when loading the Gantt component using the [`splitterSettings`](https://ej2.syncfusion.com/angular/documentation/api/gantt/splitterSettings/) property. By splitting the TreeGrid from the chart, the width of the TreeGrid and chart sections will vary in the component. The [`splitterSettings.position`](https://ej2.syncfusion.com/angular/documentation/api/gantt/splitterSettings/#position) property denotes the percentage of the TreeGrid section’s width to be rendered and this property supports both pixels and percentage values. You can define the splitter position as column index value using the [`splitterSettings.columnIndex`](https://ej2.syncfusion.com/angular/documentation/api/gantt/splitterSettings/#columnindex) property. You can also define the splitter position with built-in splitter view modes by using the [`splitterSettings.view`](https://ej2.syncfusion.com/angular/documentation/api/gantt/splitterSettings/#view) property. The following list is the possible values for this property:

* `Default`: Shows Grid side and Gantt side.
* `Grid`: Shows Grid side alone in Gantt.
* `Chart`: Shows chart side alone in Gantt.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/appearance-customization/changesplitter/initial-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/appearance-customization/changesplitter/initial-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/appearance-customization/changesplitter/initial-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/appearance-customization/changesplitter/initial-cs1" %}

### Change splitter position dynamically

In Gantt, we can change the splitter position dynamically by using [`setSplitterPosition`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#setsplitterposition) method. Either We can change the splitter position with splitter position or columnIndex values by passing these values as arguments to [`setSplitterPosition`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#setsplitterposition) method. The following code example shows how to use this methods.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/appearance-customization/changesplitter/dynamic-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/appearance-customization/changesplitter/dynamic-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/appearance-customization/changesplitter/dynamic-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/appearance-customization/changesplitter/dynamic-cs1" %}

## See also

* [How to display parent tasks in bold](https://www.syncfusion.com/forums/160494)