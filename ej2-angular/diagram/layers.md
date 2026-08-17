---
layout: post
title: Layers in Angular Diagram | Syncfusion®
description: Organize diagram elements into named categories in the Angular Diagram using layers, with bulk visibility, lock, and property control across each layer.
platform: ej2-angular
control: Layers 
documentation: ug
domainurl: ##DomainURL##
---

# Layers in Angular Diagram

**Layers** provide a powerful organizational system for managing diagram elements by grouping related shapes into named categories. This functionality enables developers to build complex diagrams with selective viewing, interaction control, and bulk property management across multiple elements simultaneously.

## Core Layer Properties

In a diagram, [Layers](https://ej2.syncfusion.com/angular/documentation/api/diagram/layerModel) enable modification of properties for all shapes assigned to a specific layer. The primary configurable properties include:

* **Objects** - Define which elements belong to the layer
* **Visible** - Control layer visibility
* **Lock** - Prevent interactions with layer elements
* **AddInfo** - Store additional custom information

## Objects

The layer's [objects](https://ej2.syncfusion.com/angular/documentation/api/diagram/layer#objects) property specifies which diagram elements belong to that layer. This property contains a collection of element IDs that defines the categories of nodes and connectors the layer encompasses.

**Use case**: Separate different types of diagram elements for independent management - for example, keeping background elements in one layer and interactive elements in another.

In the following example, basic shapes are categorized in layer 1, and flow shapes are categorized in layer 2:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/layers/layers-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/layers/layers-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/layers/layers-cs1" %}

## Visible

The layer's [visible](https://ej2.syncfusion.com/angular/documentation/api/diagram/layer#visible) property controls the visibility of all elements assigned to the layer. This allows selective display of different diagram sections without removing elements permanently.

**Use case**: Create diagrams with multiple views where users can toggle between different information layers, such as showing only critical path items in a project diagram.

In the following example, the visibility of layer one is set to false. By default, the `visible` property of a layer is set to **true**:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/layers/layers-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/layers/layers-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/layers/layers-cs2" %}

## Lock

The layer's [lock](https://ej2.syncfusion.com/angular/documentation/api/diagram/layer#lock) property prevents or allows changes to element dimensions and positions. When a layer is locked, all interactions with objects in that layer are disabled, including selecting, dragging, rotating, and connecting operations.

**Use case**: Protect template elements or background graphics from accidental modification while allowing users to work with other diagram elements.

In the following example, the objects in layer one are locked. By default, the `lock` property of a layer is set to **false**:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/layers/layers-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/layers/layers-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/layers/layers-cs3" %}

## AddInfo

The [`addInfo`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layer#addinfo) property allows storage of additional custom information with layers. This can be useful for storing metadata, configuration settings, or application-specific data associated with the layer.

**Use case**: Store layer descriptions, creation timestamps, owner information, or custom application data for enhanced layer management.

The following code illustrates how to add additional information to layers:


```
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, PointModel, LayerModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [layers]="layers">
    <e-connectors>
            <e-connector id='connector' type='Straight' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint'>
            </e-connector>
    </e-connectors>
    <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150></e-node>
            <e-node id='node2' [offsetX]=350 [offsetY]=350></e-node>
    </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
    public sourcePoint: PointModel;
    public targetPoint: PointModel;
    public layers: LayerModel[];
    public addInfo: Object = { Description: 'Layer1' };
    ngOnInit(): void {
        this.sourcePoint = { x: 100, y: 100 };
        this.targetPoint = { x: 200, y: 200 };
        this.layers = [{
            id: 'layer1',
            visible: true,
            objects: ['node1', 'connector'],
            lock: true,
            addInfo: this.addInfo

        },
        {
            id: 'layer2',
            visible: true,
            objects: ['node2'],
            lock: false
        }];
    }
}
```

Nodes and connectors declared in the template are added to the default layer; assign their IDs to a layer's `objects` array to move them into a specific layer.

## Add Layer at Runtime

Layers can be added at runtime by using the [`addLayer`](https://ej2.syncfusion.com/angular/documentation/api/diagram#addlayer) public method.

The layer's [`ID`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layer#id) property defines the ID of the layer, which is used to find the layer at runtime and apply any customizations. You can also add new objects to the new layer using the `addLayer` method.

The following code illustrates how to add a layer.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/layers/layers-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/layers/layers-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/layers/layers-cs4" %}

## Remove Layer at Runtime

Layers can be removed at runtime by using the [`removeLayer`](https://ej2.syncfusion.com/angular/documentation/api/diagram#removelayer) public method.

To remove a layer, pass the ID of the layer you want to remove as a parameter to the `removeLayer` method.

The following code illustrates how to remove a layer.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/layers/layers-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/layers/layers-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/layers/layers-cs5" %}

## Move Objects at Runtime

You can move objects from one layer to another dynamically using the [`moveObjects`](https://ej2.syncfusion.com/angular/documentation/api/diagram#moveobjects) public method of the diagram control. This can be useful for managing complex diagrams with multiple layers where you need to update the categorization of elements based on user interaction or other dynamic conditions.

The following code illustrates how to move objects from one layer to another layer from the diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/layers/layers-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/layers/layers-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/layers/layers-cs6" %}

## Z-Index and Layer Ordering

The [`zIndex`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layer#zindex) property of a layer defines its position in the stacking order within the diagram. Higher z-index values render above lower values, giving you control over which layers appear in front of others.

### Bring Layer Forward

Move a layer forward in the stacking order using the [`bringLayerForward`](https://ej2.syncfusion.com/angular/documentation/api/diagram#bringlayerforward) public method. Pass the ID of the layer you want to move one step forward in the stacking order.

*Requires a diagram instance obtained via `@ViewChild`.*

```
// Move the specified layer forward in the stacking order
this.diagram.bringLayerForward('layer1');
```

### Send Layer Backward

Move a layer backward in the stacking order using the [`sendLayerBackward`](https://ej2.syncfusion.com/angular/documentation/api/diagram#sendlayerbackward) public method. Pass the ID of the layer you want to move one step backward in the stacking order.

*Requires a diagram instance obtained via `@ViewChild`.*

```
// Move the specified layer backward in the stacking order
this.diagram.sendLayerBackward('layer1');
```

The following code illustrates how to send the layer forward/backward to another layer.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/layers/layers-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/layers/layers-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/layers/layers-cs7" %}

### Layer and objects rendering order

The rendering of diagram elements with layer properties involves grouping them within a `diagram_diagramLayer` for basic shape nodes and `diagram_nativeLayer_svg` for SVG-native elements. Even if different types of nodes are added within the same layer, the rendering at the DOM level occurs in separate layers.

Note: `bringLayerForward` and `sendLayerBackward` reorder layers of the same render type only; native SVG elements always render above basic/HTML shape elements regardless of these commands.

Rendering order (back to front): Basic & Path-data shapes → SVG shapes → HTML native shapes.

## Clone Layer

Layers can be cloned along with their objects using the [`cloneLayer`](https://ej2.syncfusion.com/angular/documentation/api/diagram#clonelayer) public method. This creates an identical copy of the layer and all its assigned elements.

**Use case**: Create template layers or duplicate complex layer configurations for reuse in different diagram sections.

The following code illustrates how to clone a layer:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/layers/layers-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/layers/layers-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/layers/layers-cs8" %}

## Active Layer

All the runtime operations above (add, remove, move, clone) interact with the active layer by default; the sections below explain how to query and change it.

The active layer represents the layer with the highest z-index in a diagram. When objects are added at runtime, they are automatically assigned to the active layer. If no layers are explicitly defined, a default layer is created and set as the active layer. When multiple layers exist, the layer with the highest z-index becomes the active layer.

**Use case**: Ensure new elements are added to the appropriate layer in multi-layer diagrams, particularly in interactive editing scenarios.

### Get active layer

Retrieve the current active layer of the diagram using the [`getActiveLayer`](https://ej2.syncfusion.com/angular/documentation/api/diagram#getactivelayer) public method:

```
// Gets the currently active layer
this.diagram.getActiveLayer();
```

### Set active layer

Set any layer as the active layer using the [`setActiveLayer`](https://ej2.syncfusion.com/angular/documentation/api/diagram#setactivelayer) public method:

```
// Set the specified layer as active
// @param layerName defines the name of the layer to be set as active
this.diagram.setActiveLayer('layer2');
```