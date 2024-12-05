---
layout: post
title: Layers in Angular Diagram component | Syncfusion
description: Learn here all about Layers in Syncfusion Angular Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Layers 
documentation: ug
domainurl: ##DomainURL##
---

# Layers in Angular Diagram component

**Layer** organizes related shapes within a diagram control as named categories. Assigning shapes to different layers enables selective viewing, removal, and locking of distinct shape categories.

In a diagram, [Layers](https://ej2.syncfusion.com/angular/documentation/api/diagram/layerModel/) facilitate the modification of properties for all shapes assigned to a specific layer. Key properties that can be configured include:

* Objects
* Visible
* Lock
* AddInfo

## Objects

The layer's [objects](https://ej2.syncfusion.com/angular/documentation/api/diagram/layer/#objects) property specifies which diagram elements belong to that layer. This property contains a collection where you can define the categories of nodes and connectors that the layer encompasses.

In the following example, the basic shapes are categorized in layer 1, and the flow shapes are categorized in layer 2.

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

The layer's [visible](https://ej2.syncfusion.com/angular/documentation/api/diagram/layer#visible) property is used to control the visibility of the elements assigned to the layer.  You can hide objects in one layer while showing objects in another layer.

In the following example, the visibility of layer one is set to false. By default, the `visible` property of a layer is set to **true**.

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

The layer's [lock](https://ej2.syncfusion.com/angular/documentation/api/diagram/layer/#lock) property is used to prevent or allow changes to the element's dimensions and positions. Locking a layer prevents any interactions with the objects in that layer, such as selecting, dragging, rotating, and connecting. 

In the following example the objects in layer one is locked. By default, the `lock` property of a layer is set to **false**.

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

The [`addInfo`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layer/#addinfo) property of layers allow you to maintain additional information to the layers.

The following code illustrates how to add additional information to the layers.

```typescript
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

## Add layer at runtime

Layers can be added at runtime by using the [`addLayer`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#addlayer) public method.

The layer's [`ID`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layer/#id) property defines the ID of the layer, which is used to find the layer at runtime and apply any customizations. You can also add new objects to the new layer using the `addLayer` method.

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

## Remove layer at runtime

Layers can be removed at runtime by using the [`removeLayer`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#removelayer) public method.

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

## moveObjects

You can move objects from one layer to another dynamically using the [`moveObjects`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#moveobjects) public method of the diagram control. This can be useful for managing complex diagrams with multiple layers where you need to update the categorization of elements based on user interaction or other dynamic conditions.

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

## Z-Index

[`zIndex`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layer/#zindex) property of a layer defines its Z order within the diagram. This property allows you to control the layer's position in the stacking order. You can adjust the layer's z-index by moving it forward or backward relative to other layers in the diagram.

### Bring Layer Forward

Layers can be moved forward at runtime by using the [`bringLayerForward`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#bringlayerforward) public method.


```typescript
// move the layer forward
this.diagram.bringLayerForward('layer1');

```

### Send Layer Backward

Layers can be moved backward at runtime by using the [`sendLayerBackward`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#sendlayerbackward) public method.


```typescript
// move the layer backward
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

The rendering of diagram elements with layer properties involves grouping them within a `diagram_diagramLayer` for basic shape nodes and `diagram_nativeLayer_svg` for SVG-native elements. Even if different types of nodes are added within the same layer, the rendering at the DOM level occurs in separate layers. Therefore, when executing layering commands like [`bringLayerForward`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#bringlayerforward) and [`sendLayerBackward`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#sendlayerbackward), the native SVG elements will always render above the basic shape elements. 

The order of rendering is as follows: HTML shapes -> SVG shapes -> Path data shapes & Basic shapes.

## Clone Layer

Layers can be cloned with its object by using the [`cloneLayer`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#clonelayer) public method.

The following code illustrates how to clone the layer.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/layers/layers-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/layers/layers-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/layers/layers-cs8" %}

## Active layer

Active Layer refers to the layer with the highest z-index in a diagram compared to other layers. When adding objects at runtime, they are stored in this active layer. If no layers are explicitly defined in the diagram, a default layer is created and automatically set as the active layer. However, when multiple layers are defined, the layer with the highest z-index takes precedence as the active layer.

Public methods are available to get and set the active layer, which are explained below.

### Get ActiveLayer

Active layer of the diagram can be retrieved by using the [`getActiveLayer`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#getactivelayer) public method.

The following code illustrates how to fetch active layer from the diagram.

```typescript
// gets the active layer back
this.diagram.getActiveLayer();

```

### Set ActiveLayer

You can set any layer to be the active layer of the diagram by using the [`setActiveLayer`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#setactivelayer) public method.

The following code illustrates how to set active layer for diagram.

```typescript

// set the active layer
//@param layerName defines the name of the layer which is to be active layer
this.diagram.setActiveLayer('layer2');

```