---
layout: post
title: Display tooltip on svg and canvas elements in Angular Tooltip component | Syncfusion
description: Learn here all about Display tooltip on svg and canvas elements in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Display tooltip on svg and canvas elements 
documentation: ug
domainurl: ##DomainURL##
---

# Display tooltip on svg and canvas elements in Angular Tooltip component

Tooltip can be displayed on both SVG and Canvas elements. You can directly attach the `<svg>` or `<canvas>` elements to show tooltips on data visualization elements.

** SVG **

Create the SVG square element and refer to the following code snippet to render the tooltip on SVG square.

```typescript
        <ejs-tooltip cssClass='e-tooltip-css' content='SVG Square' target='#square'>
            <svg>
                <rect id="square" class="shape" x="50" y="20" width="50" height="50" style="fill:#FDA600;stroke:none;stroke-width:5;stroke-opacity:0.9" />
            </svg>
        </ejs-tooltip>
```

** Canvas **

Create the canvas circle element and refer to the following code snippet to render the tooltip on Canvas circle.

```typescript
        <ejs-tooltip cssClass='e-tooltip-css' content='Canvas Circle' target='#circle'>
            <canvas #circle id="circle" class="shape" width="60" height="60"></canvas>
        </ejs-tooltip>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/svg-canvas-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tooltip/svg-canvas-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/svg-canvas-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/svg-canvas-cs3" %}
