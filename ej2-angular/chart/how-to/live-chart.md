---
layout: post
title: Live chart in Angular Chart component | Syncfusion
description: Learn here all about Live chart in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Live chart 
documentation: ug
domainurl: ##DomainURL##
---

# Live chart in Angular Chart component

You can update a chart with live data by using the `setInterval` method.

To update live data in a chart, follow the given steps:

**Step 1**:

Initialize the chart with series.

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

Update the data to series, and refresh the chart at a specified interval by using the `setInterval` method.

To refresh the chart, invoke the [`refresh`](https://ej2.syncfusion.com/angular/documentation/api/chart#refresh) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs12" %}