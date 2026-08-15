---
layout: post
title: How to display Tooltip on SVG and canvas in Angular Tooltip | Syncfusion
description: Show the Syncfusion Angular Tooltip on SVG shapes and canvas elements by attaching the tooltip to the SVG or canvas target element.
platform: ej2-angular
control: Tooltip 
documentation: ug
domainurl: ##DomainURL##
---

# How to display Tooltip on SVG and canvas in Angular Tooltip

The Tooltip component can display on both SVG and canvas elements. Attach `<svg>` or `<canvas>` elements directly to show tooltips on data visualization elements.

**SVG**

Create an SVG square element and use the following code snippet to render the tooltip on the SVG square.

```typescript
<ejs-tooltip cssClass='e-tooltip-css' content='SVG Square' target='#square'>
    <svg>
        <rect id="square" class="shape" x="50" y="20" width="50" height="50" style="fill:#FDA600;stroke:none;stroke-width:5;stroke-opacity:0.9" />
    </svg>
</ejs-tooltip>
```

**Canvas**

Create a canvas circle element and use the following code snippet to render the tooltip on the canvas circle.

```typescript
<ejs-tooltip cssClass='e-tooltip-css' content='Canvas Circle' target='#circle'>
    <canvas #circle id="circle" class="shape" width="60" height="60"></canvas>
</ejs-tooltip>
```

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tooltip/svg-canvas-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tooltip/svg-canvas-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/svg-canvas-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/svg-canvas-cs2" %}
