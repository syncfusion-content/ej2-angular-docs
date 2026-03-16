---
layout: post
title: Chart Dimensions in Angular Chart Component | Syncfusion
description: Learn here all about Chart dimensions in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Chart dimensions 
documentation: ug
domainurl: ##DomainURL##
---

# Chart Dimensions in Angular Chart Component

## Container Size

Charts render to the size of their parent container. You can control sizing via the parent container (CSS or inline style) or by using the chart's `width` and `height` properties directly.

Chart can render to its container size. You can set the size via inline or CSS as demonstrated below.

```html
<div style="width:650px; height:350px;">
  <ejs-chart id="chart-container"></ejs-chart>
</div>
```

```javascript
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<div style="width:650px; height:350px;">
        <ejs-chart id="chart-container"></ejs-chart>
    </div>`
})
export class AppComponent {
}
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/getting-started/datasource-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/getting-started/datasource-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/getting-started/datasource-cs1" %}

## Chart Size

You can also set size for chart directly through [`width`](https://ej2.syncfusion.com/angular/documentation/api/chart#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/chart#height) properties.

<!-- markdownlint-disable MD036 -->
**In Pixel**
<!-- markdownlint-disable MD036 -->

You can set the size of chart in pixel as demonstrated below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/getting-started/datasource-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/getting-started/datasource-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/getting-started/datasource-cs2" %}

**In Percentage**

By setting value in percentage, chart gets its dimension with respect to its container. For example,
when the height is ‘50%’, chart renders to half of the container height.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/getting-started/datasource-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/getting-started/datasource-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/getting-started/datasource-cs3" %}

> Note:  When you do not specify the size, it takes `450px` as the height and window size as its width.