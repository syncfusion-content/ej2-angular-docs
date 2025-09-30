---
layout: post
title: Work Breakdown Structure (WBS) in Angular Gantt component | Syncfusion
description: Learn how to integrate and manage WBS codes in the Syncfusion Angular Gantt component to improve task hierarchy visualization and project tracking.
platform: ej2-angular
control: WBS Column 
documentation: ug
domainurl: ##DomainURL##
---

# Work Breakdown Structure (WBS) in Gantt component

The Work Breakdown Structure (WBS) organizes project tasks hierarchically by assigning unique codes to each task. This improves task visibility and management, especially in complex projects like construction or enterprise software development.

## Configuration and implementation

To enable WBS in the Gantt component:

- **Enable WBS Codes**: Set [enableWBS](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enablewbs) to **true**  to automatically generate unique task codes and define their predecessors.
- **Auto-Update Codes**: Set [enableAutoWbsUpdate](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enableautowbsupdate) to **true** to keep WBS codes accurate during operations like sorting, editing, or drag-and-drop.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/wbscolumn-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/wbscolumn-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/columns/wbscolumn-cs1" %}

## Managing WBS code updates

To optimize performance, WBS code updates can be controlled using the [actionBegin](https://ej2.syncfusion.com/angular/documentation/gantt/events#actionbegin) and [dataBound](https://ej2.syncfusion.com/angular/documentation/gantt/events#databound) events. This is especially useful during operations like row drag-and-drop, where auto-update is enabled only for that action to ensure efficient and accurate code handling.

In the following example, WBS auto-update is enabled only during the **row drag and drop** action using these events.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/wbscolumn-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/wbscolumn-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/columns/wbscolumn-cs2" %}

## Limitations

The WBS feature has a few limitations in the Gantt component:

* Editing of the WBS code and WBS predecessor columns is not supported.
* Load on demand is not supported with the WBS feature.
* WBS Code and WBS Predecessor fields cannot be mapped directly from the data source.
