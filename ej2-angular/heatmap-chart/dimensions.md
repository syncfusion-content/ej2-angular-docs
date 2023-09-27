---
layout: post
title: Dimensions in Angular Heatmap chart component | Syncfusion
description: Learn here all about Dimensions in Syncfusion Angular Heatmap chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dimensions 
documentation: ug
domainurl: ##DomainURL##
---

# Dimensions in Angular Heatmap chart component

## Size for container

Heat map can be rendered to its container size. You can set the size through inline or CSS.

```javascript
<div id='container'>
    <div id='element' style="width:650px; height:350px;"></div>
</div>
```

## Size for heat map

You can  set the size of heat map directly by using the [width](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#width) and [height](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#height) properties.

## In pixel

You can set the size for heat map in a pixel.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/dimension/pixel-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/dimension/pixel-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/dimension/pixel-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/dimension/pixel-cs1" %}

## In percentage

By setting value in percentage, heat map gets its dimension with respect to its container. For example, when the height is ‘50%’, heat map rendered to half of the container height.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/dimension/percentage-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/dimension/percentage-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/dimension/percentage-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/dimension/percentage-cs1" %}
