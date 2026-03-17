---
layout: post
title: Tooltip in Angular Diagram component | Syncfusion®
description: Learn here all about Tooltip in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Tooltip 
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in EJ2 Angular Diagram Component

<!-- markdownlint-disable MD010 -->

In Graphical User Interface (GUI), a tooltip is a message that appears when the mouse hovers over an element. Tooltips enhance user experience by providing contextual information, guidance, and feedback without cluttering the interface. The diagram component provides comprehensive tooltip support while dragging, resizing, rotating nodes, and when the mouse hovers over any diagram element.

## Default tooltip

By default, the diagram displays a tooltip showing size, position, and angle information while dragging, resizing, or rotating a node. This provides real-time feedback during interactive operations:

- **Drag**: Shows current X and Y coordinates of the node
- **Resize**: Displays current width and height dimensions
- **Rotate**: Indicates the current rotation angle in degrees

The following images illustrate how the diagram displays node information during these interactions.

| Drag | Resize | Rotate |
|---|---|---|
| ![ToolTip During Drag](images/Tooltip_img1.png) | ![ToolTip During Resize](images/Tooltip_img2.png) | ![ToolTip During Rotate](images/Tooltip_img3.png) |

### Disable default tooltip

The default tooltip that appears while interacting with nodes can be disabled by removing the tooltip constraints from the [`selectorConstraints`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/selectorConstraints/) of the [`selectedItems`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/selectorModel/) property of the diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/tooltip/disabletooltip-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/tooltip/disabletooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/tooltip/disabletooltip-cs1" %}

## Tooltip for specific nodes and connectors

The tooltip can be customized for each node and connector. To show different tooltips for different diagram elements on mouse over, set the [`tooltip`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/#tooltip) property of the node or connector with the tooltip [`content`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/diagramTooltip/#content) and [`position`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/diagramTooltip/#position). The following code example illustrates how to customize the tooltip for individual elements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/tooltip/tooltip-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/tooltip/tooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/tooltip/tooltip-cs1" %}

## Inherit diagram tooltip

The diagram supports inheriting the diagram tooltip when the mouse hovers over any node or connector. To show a tooltip on mouse over, set the diagram's [`tooltip`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/#tooltip) property with the tooltip [`content`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/diagramTooltip/#content) and [`position`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/diagramTooltip/#position). Ensure that the nodes and connectors have their constraints set to **InheritTooltip**, as shown in the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/tooltip/tooltipnodes-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/tooltip/tooltipnodes-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/tooltip/tooltipnodes-cs1" %}

### Disable tooltip at runtime

The tooltip on mouse over can be disabled by assigning the [`tooltip`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/#tooltip) property as `null`. The following code example illustrates how to disable the mouse over tooltip at runtime.

```typescript

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [tooltip]="tooltip">
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
    ngOnInit(): void {
        this.tooltip = null
    }
}

```

## Tooltip for Ports

The tooltip feature has been implemented to support Ports, providing the ability to display information or descriptions when the mouse hovers over them.

To display tooltips on mouseover, set the desired tooltip [`content`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/diagramTooltip/#content) by utilizing the [`tooltip`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/#tooltip) property.

Tooltips for Ports can be enabled or disabled using the [`PortConstraints`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/port/#constraints) Tooltip property.

```ts
let ports: [{
        offset: {x: 1,y: 0.5},
        tooltip: {content: 'Port Tooltip'},
        
        //enable Port Tooltip Constraints
        constraints: PortConstraints.Default | PortConstraints.ToolTip,
        
        //disable Port Tooltip Constraints
        constraints: PortConstraints.Default &~ PortConstraints.ToolTip
    }]
```

Dynamic modification of tooltip content is supported, allowing you to change the displayed tooltip content during runtime.

```ts
{
    //change tooltip content at run time
    diagram.nodes[0].ports[0].tooltip.content = 'New Tooltip Content';
    diagram.databind();
}
```

Here, the code provided below demonstrates the port tooltip interaction.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/tooltip/tooltipports-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/tooltip/tooltipports-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/tooltip/tooltipports-cs1" %}

The following image illustrates how the diagram displays tooltips during an interaction with ports:

![Tooltip](../diagram/images/PortTooltip.gif)

## Tooltip template content

The tooltip template content allows you to customize the tooltip by using HTML templates. This means you can define the structure and style of the tooltip using HTML, providing greater flexibility and control over its appearance. By leveraging HTML templates, you can include rich content such as formatted text, images, and other HTML elements within the tooltip, enhancing the user experience with more informative and visually appealing tooltips.

The following code example illustrates how to add formatted HTML content to the tooltip.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/tooltip/tooltiptemplate-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/tooltip/tooltiptemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/tooltip/tooltiptemplate-cs1" %}

## Tooltip alignments

### Tooltip relative to object

The diagram provides support to show tooltip around the node/connector that is hovered by the mouse. The tooltip can be aligned by using the [`position`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/diagramTooltip/#position) property of the tooltip. The [`relativeMode`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/diagramTooltip/#relativemode) property of the tooltip defines whether the tooltip has to be displayed around the object or at the mouse position.

The following code example illustrates how to position the tooltip around object.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/tooltip/tooltipobject-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/tooltip/tooltipobject-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/tooltip/tooltipobject-cs1" %}

### Tooltip relative to mouse position

To display the tooltip at mouse position, need to set **mouse** option to the [`relativeMode`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/diagramTooltip/#relativemode) property of the tooltip.

The following code example illustrates how to show tooltip at mouse position.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/tooltip/tooltipmouse-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/tooltip/tooltipmouse-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/tooltip/tooltipmouse-cs1" %}

## Tooltip animation

To animate the tooltip, a set of specific animation effects are available, and it can be controlled by using the [`animation`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/diagramtooltip/#animation) property. The animation property also allows you to set delay, duration, and various other effects of your choice.

Refer the following sample where we used zoomIn animation for tooltip open and zoomOut animation for tooltip close with delay and duration. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/tooltip/tooltipanimation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/tooltip/tooltipanimation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/tooltip/tooltipanimation-cs1" %}

## Sticky tooltip

A sticky tooltip will remain visible even after you move the mouse away from the node or connector. You can activate this feature by setting the [`isSticky`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/diagramTooltipModel/#issticky) property of the tooltip. 

The following example shows how to render sticky tooltip. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/tooltip/stickytooltip-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/tooltip/stickytooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/tooltip/stickytooltip-cs1" %}

## Hide tooltip pointer

The [`showTipPointer`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/diagramTooltipModel/#showtippointer) property allows to control the visibility of tooltip pointer. By default, the `showTipPointer` is set as true.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/tooltip/hidetooltip-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/tooltip/hidetooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/tooltip/hidetooltip-cs1" %}

## Tooltip size

By default, the size of the tooltip is calculated based on its content. If you want to customize the size, you can use the [`width`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/diagramTooltipModel/#width) and [`height`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/diagramTooltipModel/#height) properties of the tooltip.

The following code example shows how to set the size for the tooltip:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/tooltip/tooltipsize-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/tooltip/tooltipsize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/tooltip/tooltipsize-cs1" %}

## Show/Hide tooltip at runtime

You can show or hide the tooltip dynamically using a button click with the [`showTooltip`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/#showtooltip) and [`hideTooltip`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/#hidetooltip) methods of the diagram. This allows you to control the tooltip visibility programmatically rather than relying on user hover actions. In some cases, you may want to display the tooltip without requiring the user to hover over the object.

The following example demonstrates how to show or hide the tooltip at runtime:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/tooltip/showhidetooltip-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/tooltip/showhidetooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/tooltip/showhidetooltip-cs1" %}

## Tooltip for Annotation

Tooltips can be added to annotations to display additional information on mouseover. 
To display tooltips on mouseover, set the desired tooltip text to the [`tooltip`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/#tooltip) property of the annotation.
Tooltips for Annotations can be enabled or disabled by setting the [`AnnotationConstraints`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/annotationConstraints/#AnnotationConstraints) property as [`Tooltip`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/#tooltip). 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/tooltip/annotationtooltip-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/tooltip/annotationtooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/tooltip/annotationtooltip-cs1" %}