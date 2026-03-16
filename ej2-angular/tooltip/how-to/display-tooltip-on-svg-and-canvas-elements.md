---
layout: post
title: Display svg and canvas in Angular Tooltip component | Syncfusion
description: Learn here all about Display Tooltip on svg and canvas elements in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tooltip 
documentation: ug
domainurl: ##DomainURL##
---

# Display Angular Tooltip component on SVG and canvas elements

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
{% highlight ts tabtitle="app.component.ts" %}
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
