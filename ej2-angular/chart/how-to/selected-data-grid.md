---
layout: post
title: How to Display Selected Data in Angular Chart | Syncfusion
description: Learn how to display the data values selected by a drag selection in a grid using the dragComplete event of Syncfusion Angular Chart.
platform: ej2-angular
control: Selected data grid 
documentation: ug
domainurl: ##DomainURL##
---

# How to Display Selected Data in Angular Chart

Use the [`dragComplete`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#dragcomplete) event to retrieve the data values selected by a drag selection on the chart. The event's `selectedDataValues` property contains one array per series; each inner array holds the data points that fall inside the dragged region.

## How it works

When the user finishes a drag, the event receives an [`IDragCompleteEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/chart/iDragCompleteEventArgs) object:

- `args.selectedDataValues` — array of arrays; one inner array per series, in series order.

This how-to uses a single-series chart, so `args.selectedDataValues[0]` is the only required index.

## Display selected data in a grid

1. **Enable drag selection on the chart.** Bind `selectionMode` to `DragXY` (or another `Drag*` value) and wire up the `(dragComplete)` event:

   ```html
   <ejs-chart id="chart-container"
              [primaryXAxis]='primaryXAxis'
              [primaryYAxis]='primaryYAxis'
              [title]='title'
              [selectionMode]='selectionMode'
              (dragComplete)='dragComplete($event)'>
       <e-series-collection>
           <e-series [dataSource]='chartData' type='Scatter' xName='x' yName='y' name='Product A' [marker]='marker'></e-series>
       </e-series-collection>
   </ejs-chart>
   ```

2. **Define the columns and bind the grid.** Use `@ViewChild` to access the grid and push the selected points into its `dataSource`:

   ```typescript
   @ViewChild('grid') public grid?: GridComponent;

   public dragComplete(args: IDragCompleteEventArgs): void {
       this.grid!.dataSource = args.selectedDataValues[0];
       this.grid!.refresh();
   }
   ```

   ```html
   <ejs-grid #grid [dataSource]='selectedPoints'>
       <e-columns>
           <e-column field='x' headerText='X' textAlign='Right'></e-column>
           <e-column field='y' headerText='Y' textAlign='Right'></e-column>
       </e-columns>
   </ejs-grid>
   ```

The following tabs include the full component (`app.component.ts`) and the bootstrap entry (`main.ts` from the sample):

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/how-to-cs17" %}

## Result

When the user releases a drag on the chart, the grid immediately repopulates with only the data points that fall inside the dragged region.

## Troubleshooting

- **Event never fires.** `dragComplete` only raises for drag-based `selectionMode` values (`DragX`, `DragY`, `DragXY`). Point or series selection modes do not emit this event.
- **Empty grid after the drag.** The user released the pointer outside the plot area, or `selectedDataValues[0]` is empty (the chart has additional series and you picked the wrong index).
- **Grid does not update.** Make sure `GridModule` is included in the standalone component's `imports` array. If paging is enabled, also register `PageService` in the component's `providers` array.

## See also

- [Chart selection](https://ej2.syncfusion.com/angular/documentation/chart/chart-interactive/selection)
- [`IDragCompleteEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/chart/iDragCompleteEventArgs)