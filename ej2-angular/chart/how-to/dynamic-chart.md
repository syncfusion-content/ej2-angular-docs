---
layout: post
title: How to Render Dynamic Chart in Angular Chart | Syncfusion
description: Learn here all about Dynamic chart in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dynamic chart 
documentation: ug
domainurl: ##DomainURL##
---

# How to Add Charts Dynamically in Angular Chart

You can add one or more chart instances dynamically to the page each time a button is clicked. This is useful when users need to add side-by-side comparisons, build dashboards interactively, or generate a chart per data subset.

## Add charts dynamically through a button click

Follow these steps to render a new `<ejs-chart>` instance every time the button is clicked.

**Step 1**: Add the Syncfusion Button to the component template.

Define a Syncfusion Button (`<button ej-button>`) and bind its `(click)` event to an `Add()` handler on the component. The `template` shown below is what the sample component renders.

```typescript
template: `
  <div>
    <button ej-button id="add" (click)="Add()">Add Chart</button>
    <div *ngFor="let item of items">
      <ejs-chart [id]="item.id" [title]="title">
        <e-series-collection>
          <e-series
            [dataSource]="chartData"
            type="Line"
            xName="x"
            yName="y"
            name="Germany"
            [marker]="marker">
          </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
  </div>
`
```

The key points to note:

* `ButtonModule` (from `@syncfusion/ej2-angular-buttons`) and `ChartModule` (from `@syncfusion/ej2-angular-charts`) must be added to the component's `imports` array. `CommonModule` is included so that `*ngFor` works in a standalone component.
* Each chart instance must have a **unique `id`** so the DOM contains distinct chart containers. The sample binds `[id]` to `item.id` (the id stored when the item was added) rather than to a single shared property.
* The `items` array holds the list of chart containers to render. Pushing a new entry into `items` causes Angular to render a new `<ejs-chart>` automatically.

**Step 2**: Define the chart data and the click handler.

Initialize `chartData`, `title`, and `marker` in `ngOnInit`, and implement `Add()` to push a new id into `items` on every click.

```typescript
export class AppComponent implements OnInit {
  public i: number = 0;
  public chartData?: Object[];
  public marker?: Object;
  public title?: string;
  public items: any = [];

  ngOnInit(): void {
    this.chartData = [
      { x: 1, y: 21 }, { x: 2, y: 24 }, { x: 3, y: 36 },
      { x: 4, y: 38 }, { x: 5, y: 54 }, { x: 6, y: 57 }, { x: 7, y: 70 }
    ];
    this.title = 'Inflation - Consumer Price';
    this.marker = { visible: true };
  }

  Add(): void {
    const id = 'chart-container' + this.i;
    this.items.push({ id });
    this.i++;
  }
}
```

**Field reference**

| Field | Type | Description |
| --- | --- | --- |
| `i` | `number` | Counter used to build a unique id for each new chart. |
| `chartData` | `Object[]` | Data array bound to each chart's [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#datasource). |
| `marker` | `Object` | Marker configuration bound to [`marker`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#marker); `{ visible: true }` enables data-point markers. |
| `title` | `string` | Chart title rendered via the [`title`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#title) property. |
| `items` | `Array<{ id: string }>` | List of chart containers. Each entry corresponds to one rendered `<ejs-chart>`. |

Each click of **Add Chart** appends a new `{ id }` object to `items`, which causes Angular to render an additional `<ejs-chart>` on the page.

> **Troubleshooting:** Duplicate ids cause the second chart to overwrite the first; ensure every chart instance uses a unique id (the sample uses `'chart-container' + i`). For very large numbers of charts, consider a virtual scroll container or a dashboard layout, as rendering dozens of simultaneous charts can impact performance.

## Complete sample

The complete component is shown below for reference.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/how-to-cs7" %}

## See also

* [Getting Started with Angular Chart](https://ej2.syncfusion.com/angular/documentation/chart/getting-started)
* [Chart Series API reference](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective)
* [Syncfusion Button for Angular – Getting Started](https://ej2.syncfusion.com/angular/documentation/button/getting-started)