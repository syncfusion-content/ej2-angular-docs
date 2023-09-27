---
layout: post
title: State persistence in Angular Common control | Syncfusion
description: Learn here all about State persistence in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# State Persistence in Syncfusion Angular components

Syncfusion Angular UI components support persisting their state across page refreshes or navigation. To enable this feature, set the `enablePersistence` property to `true` for the desired component. This stores the component's state in the browser's `localStorage` object on the `unload` event of the page. For example, the `enablePersistence` property can be set for the Grid component, as shown in the following code snippet.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/state-persistence-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/common/state-persistence-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/state-persistence-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/state-persistence-cs1" %}

## State Persistence supported components and properties

The following table illustrates the list of Syncfusion Angular components that are supported with state persistence and the properties that are stored in the `localStorage`.

<!-- markdownlint-disable MD033 -->

<table>
<tr>
<td><b>component Name</b></td>
<td><b>Properties</b></td>
</tr>
<tr>
<td>Grid</td>
<td>
<ul>
<li>Columns</li>
<li>filterSettings</li>
<li>searchSettings</li>
<li>groupSettings</li>
<li>pageSettings</li>
<li>selectedRowIndex</li>
<li>scrollPosition</li>
</ul>
</td>
</tr>
<tr>
<td>Accordion</td>
<td>
<ul>
<li>expandedIndices</li>
</ul>
</td>
</tr>
<tr>
<td>Tabs</td>
<td>
<ul>
<li>selectedItem</li>
</ul>
</td>
</tr>
<tr>
<td>Schedule</td>
<td>
<ul>
<li>currentView</li>
<li>selectedDate</li>
<li>scrollLeft</li>
<li>scrollTop</li>
</ul>
</td>
</tr>
<tr>
<td>Kanban</td>
<td>
<ul>
<li>columns</li>
<li>dataSource</li>
<li>swimlaneToggleArray</li>
</ul>
</td>
</tr>
<tr>
<td>Chart</td>
<td>
<ul>
<li>zoomFactor</li>
<li>zoomPosition</li>
</ul>
</td>
</tr>
<tr>
<td>Maps</td>
<td>
<ul>
<li>zoomSettings</li>
</ul>
</td>
</tr>
<tr>
<td>Pivot Table</td>
<td>
<ul>
<li>dataSourceSettings</li>
<li>pivotValues</li>
<li>gridSettings</li>
<li>chartSettings</li>
<li>displayOption</li>
</ul>
</td>
</tr>
<tr>
<td>TreeGrid</td>
<td>
<ul>
<li>columns</li>
<li>pageSettings</li>
<li>searchSettings</li>
<li>filterSettings</li>
<li>selectedRowIndex</li>
<li>sortSettings</li>
</ul>
</td>
</tr>
<tr>
<td>Switch, Checkbox</td>
<td>
<ul>
<li>checked</li>
</ul>
</td>
</tr>
<tr>
<td>RadioButton</td>
<td>
<ul>
<li>checked</li>
<li>value</li>
</ul>
</td>
</tr>
<tr>
<td>ColorPicker, ListBox, In-placeEditor, RichTextEditor, <br>
Autocomplete, Calendar, ComboBox, DatePicker, DropDownList, <br>
MaskedTextBox, NumericTextBox, Textbox, TimePicker, Multiselect, <br> 
DateTimePicker, Slider, Dropdown Tree</td>
<td>
<ul>
<li>value</li>
</ul>
</td>
</tr>
<tr>
<td>QueryBuilder</td>
<td>
<ul>
<li>rule</li>
</ul>
</td>
</tr>
<tr>
<td>Splitter</td>
<td>
<ul>
<li>paneSettings</li>
</ul>
</td>
</tr>
<tr>
<td>DateRangePicker</td>
<td>
<ul>
<li>startDate</li>
<li>endDate</li>
<li>value</li>
</ul>
</td>
</tr>
<tr>
<td>Uploader</td>
<td>
<ul>
<li>filesData</li>
</ul>
</td>
</tr>
<tr>
<td>ListView</td>
<td>
<ul>
<li>cssClass</li>
<li>enableRtl</li>
<li>htmlAttributes</li>
<li>enable</li>
<li>fields</li>
<li>animation</li>
<li>headerTitle</li>
<li>sortOrder</li>
<li>showIcon</li>
<li>height</li>
<li>width</li>
<li>showCheckBox</li>
<li>checkBoxPosition</li>
</ul>
</td>
</tr>
<tr>
<td>TreeView</td>
<td>
<ul>
<li>selectedNodes</li>
<li>checkedNodes</li>
<li>expandedNodes</li>
</ul>
</td>
</tr>
<tr>
<td>Dashboard Layout</td>
<td>
<ul>
<li>panels</li>
</ul>
</td>
</tr>
<tr>
<td>File Manager</td>
<td>
<ul>
<li>view</li>
<li>path</li>
<li>selectedItems</li>
</ul>
</td>
</tr>
<tr>
<td>Sidebar</td>
<td>
<ul>
<li>type</li>
<li>position</li>
<li>isOpen</li>
</ul>
</td>
</tr>
</table>

<!-- markdownlint-enable MD033 -->

Check out the following component's document to learn more about the state persistence.

* [Grid](https://ej2.syncfusion.com/angular/documentation/grid/state-persistence/state-persistence/)
* [TreeGrid](https://ej2.syncfusion.com/angular/documentation/treegrid/state-persistence/state-persistence/)
* [Pivot Table](https://ej2.syncfusion.com/angular/documentation/pivotview/state-persistence/)
* [Gantt](https://ej2.syncfusion.com/angular/documentation/gantt/state-persistence/)
* [Kanban](https://ej2.syncfusion.com/angular/documentation/kanban/persistence/)
* [Schedule](https://ej2.syncfusion.com/angular/documentation/schedule/state-persistence/)
* [QueryBuilder](https://ej2.syncfusion.com/angular/documentation/query-builder/how-to/state-persistence/)
* [Tabs](https://ej2.syncfusion.com/angular/documentation/tab/how-to/set-state-persistence-of-the-tab-component/)