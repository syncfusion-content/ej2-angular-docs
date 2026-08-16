---
layout: post
title: Symmetric Layout in Angular Diagram | Syncfusion®
description: Use the force-directed symmetric layout in the Syncfusion® Angular Diagram to position nodes via spring and repulsion for organic arrangements.
platform: ej2-angular
control: Symmetric layout 
documentation: ug
domainurl: ##DomainURL##
---

# Symmetric Layout in Angular Diagram

The symmetric layout is a force-directed algorithm that positions nodes by simulating physical forces between them. Nodes are repositioned iteratively by moving them closer together or pushing them further apart until the system reaches an equilibrium state, creating a balanced and visually appealing arrangement.

## Understanding symmetric layout

Symmetric layout works by applying spring-like forces between connected nodes and repulsion forces between all nodes. This creates a natural, organic layout where strongly connected components cluster together while maintaining proper spacing throughout the diagram.

The layout's [`springLength`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layout#springlength) property defines the ideal length that edges should maintain. This serves as the resting length for the springs connecting nodes. The default value is `50`.

Edge attraction and vertex repulsion forces are controlled using the layout's [`springFactor`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layout#springfactor) property. Higher values cause sibling nodes to repel each other more strongly, creating greater separation between unconnected elements.

The algorithm continues iterating until node positions stabilize and relative positions no longer change significantly between iterations. You can control the maximum number of iterations using the layout's [`maxIteration`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layout#maxiteration) property. The default value is `30`.

The layout's [`margin`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layout#margin) property (of type `MarginModel`) specifies the spacing between the layout content and the diagram boundary, keeping the arranged nodes from being placed flush against the diagram edges.

```
public layout: LayoutModel = {
    type: 'SymmetricalLayout',
    springLength: 80,
    springFactor: 0.8,
    maxIteration: 500,
    margin: { left: 20, top: 20 },
};
```

## Implementation

To use the symmetric layout, inject `SymmetricLayout` using `Diagram.Inject(SymmetricLayout)`. This enables the diagram to apply the symmetric force-directed algorithm when the layout `type` is set to `SymmetricalLayout`.

The following code demonstrates how to arrange nodes using symmetric layout:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/symmetric-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/symmetric-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/symmetric-cs1" %}

![Symmetric layout](../images/symmetric.png)