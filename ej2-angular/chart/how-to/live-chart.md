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

You can update a chart with live data by using the set interval.

To update live data in a chart, follow the given steps:

**Step 1**:

Initialize the chart with series.

```javascript

  import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    // specifies the template string for the Chart component
    template: `<ejs-chart id="chart-container"></ejs-chart>`
})
export class AppComponent {
    <e-series-collection>
                <e-series [dataSource]='data' type='Line' xName='x' yName='y'> </e-series>
    </e-series-collection>
}
```

**Step 2**:

Update the data to series, and refresh the chart at specified interval by using the set interval.

To refresh the chart, invoke the `refresh` method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs12" %}