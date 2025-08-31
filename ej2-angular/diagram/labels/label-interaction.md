---
layout: post
title: Label Interaction in Angular Diagram component | Syncfusion®
description: Learn how to enable interactive label features in Syncfusion® Angular Diagram including selection, dragging, rotation, resizing, editing, and drag limits.
platform: ej2-angular
control: Label Interaction
documentation: ug
domainurl: ##DomainURL##
---

# Interactive Label Features

The Diagram component allows labels to be interactive through selecting, dragging, rotating, and resizing operations. Label interaction is disabled by default. Enable label interaction using the `constraints` property of the label. You can also control specific interaction types by enabling individual constraints for selecting, dragging, rotating, or resizing. The following code demonstrates how to enable interactive mode.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/interaction-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/interaction-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/interaction-cs1" %}

## Constraints

The [`constraints`](https://ej2.syncfusion.com/angular/documentation/diagram/constraints#annotation-constraints) property of labels allows enabling or disabling specific label behaviors. Use these constraints to control which interaction types are available for each label.

## Label Editing

The Diagram component supports editing labels at runtime, both programmatically and interactively. By default, labels are in view mode. Labels can be switched to edit mode using two approaches:

### Programmatic Editing
Use the [`startTextEdit`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#starttextedit) method to programmatically enter edit mode for a specific label.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/programaticallyEdit-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/programaticallyEdit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/programaticallyEdit-cs1" %}

### Interactive Editing
Labels can be edited interactively through user actions:
1. Double-clicking the label
2. Selecting the item and pressing the F2 key

Double-clicking any label enables editing mode. When the editor loses focus, the label content is updated. The [`doubleClick`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#doubleclick) event triggers when double-clicking on nodes, connectors, or the diagram canvas.

## Label Rotation

The [`rotationReference`](https://ej2.syncfusion.com/angular/documentation/api/diagram/shapeAnnotation/#rotationreference) property controls whether labels rotate relative to their parent node or remain fixed relative to the page. The following code examples demonstrate how to configure rotationReference for labels.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/Rotation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/Rotation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/Rotation-cs1" %}

| Value | Description | Image |
| -------- | -------- | -------- |
| Page | The label maintains its original orientation even when the parent node rotates. | ![No_Rotation](../images/page_rotationreference.gif) |
| Parent | The label rotates along with its parent node. | ![Rotation](../images/parent_rotationreference.gif)|

## Read-only Labels

The Diagram component supports creating read-only labels that cannot be edited by users. Set the read-only constraint in the label's [`constraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#constraints) property. The following code demonstrates how to enable read-only mode.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/read-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/read-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/read-cs1" %}

## Drag Limits

The diagram control supports defining [`dragLimit`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#draglimit) properties for connector labels to restrict dragging within specified boundaries. The drag limit automatically updates the label position to the nearest segment offset when dragging.

Configure drag limit boundaries using the [`left`](https://ej2.syncfusion.com/angular/documentation/api/diagram/marginModel/#left), [`right`](https://ej2.syncfusion.com/angular/documentation/api/diagram/marginModel/#right), [`top`](https://ej2.syncfusion.com/angular/documentation/api/diagram/marginModel/#top), and [`bottom`](https://ej2.syncfusion.com/angular/documentation/api/diagram/marginModel/#bottom) properties. These properties limit connector label dragging based on user-defined values.

Drag limits are disabled by default for connectors. Enable drag limits by setting the connector constraints to include drag functionality.

The following code demonstrates how to configure dragLimit for connector labels:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/dragLimit-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/dragLimit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/dragLimit-cs1" %}

## Multiple Labels

Nodes and connectors support multiple labels. Each label can have independent properties and constraints. The following code demonstrates how to add multiple labels to nodes and connectors.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/read-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/read-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/read-cs2" %}