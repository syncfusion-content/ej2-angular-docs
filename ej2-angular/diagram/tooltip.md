---
layout: post
title: Tooltip in Angular Diagram component | Syncfusion
description: Learn here all about Tooltip in Syncfusion Angular Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tooltip 
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in Angular Diagram component

<!-- markdownlint-disable MD010 -->

In Graphical User Interface (GUI), the tooltip is a message that is displayed when mouse hovers over an element. The diagram provides tooltip support while dragging, resizing, rotating a node, and when the mouse hovers any diagram element.

## Default tooltip

By default, diagram displays a tooltip to provide the size, position, and angle related information while dragging, resizing, and rotating. The following images illustrate how the diagram displays the node information during an interaction.

| Drag | Resize | Rotate |
|---|---|---|
| ![ToolTip During Drag](images/Tooltip_img1.png) | ![ToolTip During Resize](images/Tooltip_img2.png) | ![ToolTip During Rotate](images/Tooltip_img3.png) |

## Common tooltip for all nodes and connectors

The diagram provides support to show tooltip when the mouse hovers over any node/connector.

To show tooltip on mouse over, the [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/diagram#tooltip) property of diagram model needs to be set with the tooltip [`content`](https://ej2.syncfusion.com/angular/documentation/api/diagram/diagramTooltip/#content) and [`position`](https://ej2.syncfusion.com/angular/documentation/api/diagram/diagramTooltip/#position) as shown in the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/tooltip/tooltip-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/tooltip/tooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/tooltip/tooltip-cs1" %}

### Disable tooltip at runtime

The tooltip on mouse over can be disabled by assigning the [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/diagram#tooltip) property as `null`. The following code example illustrates how to disable the mouse over tooltip at runtime.

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

## Tooltip for a specific node/connector

The tooltip can be customized for each node and connector. Remove the **InheritTooltip** option from the [`constraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram#constraints) of that node/connector. The following code example illustrates how to customize the tooltip for individual elements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/tooltip/tooltipnodes-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/tooltip/tooltipnodes-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/tooltip/tooltipnodes-cs1" %}

## Tooltip for Ports

The tooltip feature has been implemented to support Ports, providing the ability to display information or descriptions when the mouse hovers over them.

To display tooltips on mouseover, set the desired tooltip [`content`](https://ej2.syncfusion.com/angular/documentation/api/diagram/diagramTooltip/#content) by utilizing the [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/diagram#tooltip) property.

Tooltips for Ports can be enabled or disabled using the [`PortConstraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/port#constraints-portconstraints) Tooltip property.


```ts
let ports: [{
        offset: {x: 1,y: 0.5},
        tooltip: {content: 'Port Tootip'},
        
        //enable Port Tooltip Constraints
        constraints: PortConstraints.Default | PortConstraints.ToolTip,
        
        //disable Port Tooltip Constraints
        constraints: PortConstraints.Default ~& PortConstraints.ToolTip
    }]
```

Dynamic modification of tooltip content is supported, allowing you to change the displayed tooltip content during runtime.

```js
{
    //change tooltip content at run time
    diagram.nodes[0].ports[0].tooltip.content = 'New Tooltip Content';
    diagram.databind;
}
```

The following image illustrates how the diagram displays tooltips during an interaction with ports:

![Tooltip](../diagram/images/PortTooltip.gif)

Here, the code provided below demonstrates the port tooltip Interaction.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/tooltip/tooltipports-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/tooltip/tooltipports-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/tooltip/tooltipports-cs1" %}

## Tooltip template content

Any text or image can be added to the tooltip, by default. To customize the tooltip layout or to create your own visualized element on the tooltip, template can be used.

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

The diagram provides support to show tooltip around the node/connector that is hovered by the mouse. The tooltip can be aligned by using the [`position`](https://ej2.syncfusion.com/angular/documentation/api/diagram/diagramTooltip#position) property of the tooltip.

The [`relativeMode`](https://ej2.syncfusion.com/angular/documentation/api/diagram/diagramTooltip#relativemode) property of the tooltip defines whether the tooltip has to be displayed around the object or at the mouse position.

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

To display the tooltip at mouse position, need to set **mouse** option to the [`relativeMode`](https://ej2.syncfusion.com/angular/documentation/api/diagram/diagramTooltip#relativemode) property of the tooltip.

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

To animate the tooltip, a set of specific animation effects are available, and it can be controlled by using the [`animation`](https://ej2.syncfusion.com/angular/documentation/api/diagram/diagramTooltip#animation) property. The animation property also allows you to set delay, duration, and various other effects of your choice.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/tooltip/tooltipanimation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/tooltip/tooltipanimation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/tooltip/tooltipanimation-cs1" %}

## Tooltip for Annotation

Tooltips can be added to annotations to display additional information on mouseover. 
To display tooltips on mouseover, set the desired tooltip text to the [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/diagram#tooltip) property of the annotation.
Tooltips for Annotations can be enabled or disabled by setting the [`AnnotationConstraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationConstraints#AnnotationConstraints) property as [`Tooltip`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationConstraints#AnnotationConstraints). 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/tooltip/annotationtooltip-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/tooltip/annotationtooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/tooltip/annotationtooltip-cs1" %}