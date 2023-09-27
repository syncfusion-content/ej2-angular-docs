---
layout: post
title: Rendering mode in Angular Heatmap chart component | Syncfusion
description: Learn here all about Rendering mode in Syncfusion Angular Heatmap chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Rendering mode 
documentation: ug
domainurl: ##DomainURL##
---

# Rendering mode in Angular Heatmap chart component

Heat map can be displayed using **Canvas** or **Scalable Vector Graphics (SVG)** rendering logic to improve the initial load performance and scalability. Heat map can also be automatically switched between **Canvas** and **SVG** modes based on dataset size. You can enable this mode by setting the [renderingMode](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#renderingmode) property to **Auto**.

> If the **Auto** mode is enabled in the heat map and there are more than 10,000 data points, then the heat map will be rendered in a **Canvas** mode; Otherwise, the heat map will be rendered in a **SVG** mode.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/rendering-mode/rendermode-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/rendering-mode/rendermode-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/rendering-mode/rendermode-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/rendering-mode/rendermode-cs1" %}