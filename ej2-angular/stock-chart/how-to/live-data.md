---
layout: post
title: Live data in Angular Stock chart component | Syncfusion
description: Learn here all about Live data in Syncfusion Angular Stock chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Live data 
documentation: ug
domainurl: ##DomainURL##
---

# Live data in Angular Stock chart component

You can update a stockchart with live data by using the set interval.

To update live data in a chart, follow the given steps:

**Step 1**:

Initialize the chart with series.

```javascript

  import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    // specifies the template string for the StockChart component
    template: `<ejs-stockchart id="chart-container" #chart [primaryXAxis]='primaryXAxis' [periods]='periods'>
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]='series1' type='Candle' xName='x' yName='high' high='high' low='low' name='India' width=2 >
            </e-stockchart-series>

        </e-stockchart-series-collection>
    </ejs-stockchart>`
})
export class AppComponent {

}
```

**Step 2**:

Update the data to series, and refresh the chart at specified interval by using the set interval.

To refresh the chart, invoke the `refresh` method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/how-to-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/stock-chart/how-to-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/how-to-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/how-to-cs1" %}