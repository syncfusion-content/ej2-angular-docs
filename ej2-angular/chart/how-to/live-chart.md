---
layout: post
title: How to Live Chart in Angular Chart | Syncfusion
description: Learn here all about Live chart in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Live chart 
documentation: ug
domainurl: ##DomainURL##
---

# How to Update the Angular Chart with Live Data

Update a chart in real time by refreshing it on a timer. The Chart component repaints with the latest data each time you call its [`refresh`](https://ej2.syncfusion.com/angular/documentation/api/chart#refresh) method, which makes it straightforward to stream live values.

To update the chart with live data, follow these steps:

**Step 1**:

Initialize the Chart component with a series and a chart-level `loaded` handler that starts the live update. Disable animation to prevent visual jitter on each refresh.

```typescript
import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-container',
    // specifies the template string for the Chart component
    template: `<ejs-chart #chart id='chart-container' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title' (loaded)='loaded($event)'>
                  <e-series-collection>
                      <e-series [dataSource]='series1' type='Line' xName='x' yName='y' [animation]='animation'></e-series>
                  </e-series-collection>
               </ejs-chart>`
})
export class AppComponent {
    @ViewChild('chart')
    public chart?: ChartComponent;
    public series1: Object[] = [];
    public primaryXAxis: Object = {};
    public primaryYAxis: Object = { minimum: 0, maximum: 50 };
    public title: string = 'Live Chart';
    public animation: Object = { enable: false };
}
```

**Step 2**:

Seed the series with an initial set of points and start a timer that pushes a new value, slides the window, and calls `refresh()` on each tick.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}

> **How it works:** the constructor fills `series1` with 100 points. On each `setInterval` tick, the handler pushes a new `{ x, y }` value, removes the oldest point with `shift()`, reassigns `series[0].dataSource`, and calls [`refresh`](https://ej2.syncfusion.com/angular/documentation/api/chart#refresh) so the Chart component re-renders with the latest data. The `getElement('chart-container')` check stops the timer if the chart is removed from the DOM.

> **Note:** Always clear the timer (`clearInterval`) when the component is destroyed (for example, in `ngOnDestroy`) to avoid memory leaks. Add a `LineSeriesService` (and any other series services you reference) to the component's `providers` array.

{% previewsample "page.domainurl/samples/chart/how-to-cs12" %}

## Troubleshooting

* **Chart flickers on every tick** – keep `animation: { enable: false }` on the series; otherwise each `refresh()` replays the enter animation.
* **Memory leak on navigation** – make sure the component clears its `setInterval` handle when it is destroyed.
* **Y values drift outside the axis range** – the `primaryYAxis` in the sample is fixed to `{ minimum: 0, maximum: 50 }`; widen it if your live values exceed that range.

## See also

* [Getting Started with Angular Chart](https://ej2.syncfusion.com/angular/documentation/chart/getting-started)
* [`ChartComponent.refresh` API reference](https://ej2.syncfusion.com/angular/documentation/api/chart#refresh)
* [MDN: `setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval)