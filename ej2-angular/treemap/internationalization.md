---
layout: post
title: Internationalization in Angular Treemap component | Syncfusion
description: Learn here all about Internationalization in Syncfusion Angular Treemap component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Internationalization 
documentation: ug
domainurl: ##DomainURL##
---

# Internationalization in Angular Treemap component

The TreeMap control supports internationalization for the following elements:

* Data label
* Tooltip

For more information about number and date formatter, refer to [`internationalization`](http://ej2.syncfusion.com/documentation/base/intl.html).

<!-- markdownlint-disable MD036 -->

## Globalization

Globalization is the process of designing and developing a component that works in different cultures/locales. Internationalization library is used to globalize number, date, and time values in the tree map control using the [`format`](https://ej2.syncfusion.com/angular/documentation/api/treemap/#format) property in the Treemap.

**Numeric format**

In the following code example, tooltip is globalized to Deutsch culture.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-treemap id='container' style='display: block;' [dataSource]='data' weightValuePath='GDP' format='c' useGroupingSeparator= 'true'
   >
    </ejs-treemap>`
})
export class AppComponent {
    public data: object[] = [
    {State:"United States", GDP:17946, percentage:11.08, Rank:1},
    {State:"China", GDP:10866, percentage: 28.42, Rank:2},
    {State:"Japan", GDP:4123, percentage:-30.78, Rank:3},
    {State:"Germany", GDP:3355, percentage:-5.19, Rank:4},
    {State:"United Kingdom", GDP:2848, percentage:8.28, Rank:5},
    {State:"France", GDP:2421, percentage:-9.69, Rank:6},
    {State:"India", GDP:2073, percentage:13.65, Rank:7},
    {State:"Italy", GDP:1814, percentage:-12.45, Rank:8},
    {State:"Brazil", GDP:1774, percentage:-27.88, Rank:9},
    {State:"Canada", GDP:1550, percentage:-15.02, Rank:10}
    ];
}

```

## Right-to-left rendering

The TreeMap control supports right-to-left rendering for all its elements such as nodes, tooltip, data labels, and legends.

## Legend with Rtl support

If set the [`enableRtl`](https://ej2.syncfusion.com/angular/documentation/api/treemap/#enablertl) property to **true**, then the legend icon will be rendered on the right and the legend text will be rendered on the left of the legend icon.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs17/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs17/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs17" %}

## Tooltip with Rtl support

If the [`enableRtl`](https://ej2.syncfusion.com/angular/documentation/api/treemap/#enablertl) property is set to **true**, the tooltip data will be rendered in reverse direction.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs18/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs18/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs18" %}

## Treemap Item Rendering Direction

The direction of TreeMap item is `TopLeftBottomRight` by default and customize the rendering direction of the TreeMap item by setting the [`renderDirection`](https://ej2.syncfusion.com/angular/documentation/api/treemap/#renderdirection) property.

The TreeMap can be rendered in the following directions:

* TopLeftBottomRight
* TopRightBottomLeft
* BottomRightTopLeft
* BottomLeftTopRight

The following example demonstrate, how to render the treemap in the RTL direction with `TopLeftBottomRight`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs19/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs19/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs19/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs19" %}

The following example demonstrate, how to render the treemap in the RTL direction with `TopRightBottomLeft`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs20/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs20/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs20/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs20" %}

The following example demonstrate, how to render the treemap in the RTL direction with `BottomRightTopLeft`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs21/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs21/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs21/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs21" %}

The following example demonstrate, how to render the treemap in the RTL direction with `BottomLeftTopRight`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs22/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs22/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs22/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs22" %}