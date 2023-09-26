---
layout: post
title: Bullet chart dimensions in Angular Bullet chart component | Syncfusion
description: Learn here all about Bullet chart dimensions in Syncfusion Angular Bullet chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Bullet chart dimensions 
documentation: ug
domainurl: ##DomainURL##
---

# Bullet chart dimensions in Angular Bullet chart component

## Size for Container

The size of the Bullet Chart is determined by the container size, and it can be changed inline or via CSS as following.

```
    <div style="width:650px; height:350px;">
        <ejs-bulletchart id="app-container"></ejs-bulletchart>
    </div>
```

```javascript
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<div style="width:650px; height:350px;">
        <ejs-bulletchart id="app-container"></ejs-bulletchart>
    </div>`
})
export class AppComponent {
    constructor(){
        /*
        */
    }
}
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs10/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs10/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs10" %}
<!-- markdownlint-disable MD036 -->

## Size for Bullet Chart

<!-- markdownlint-disable MD036 -->

The [`width`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#height) properties are used to adjust the size of the Bullet Chart.

### Pixel

Can set the size of the Bullet Chart in pixels as shown below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs11/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs11" %}

### Percentage

By setting a value in percentage, the Bullet Chart gets its dimension with respect to its container. For example, when the height is **50%**, the Bullet Chart renders to half of the container’s height.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs12/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs12/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs12" %}

>If the size is not specified, the Bullet Chart will be rendered with a height of **126px** and a width of the window.