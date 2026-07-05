---
layout: post
title: Group in Angular Diagram component | Syncfusion®
description: Learn here all about Group in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Group 
documentation: ug
domainurl: ##DomainURL##
---

# Group in Angular Diagram Component

Groups enable developers to cluster multiple nodes and connectors into a single manageable element, acting as a container that maintains relationships between child elements while allowing both collective and individual manipulation. This powerful feature streamlines complex diagram management by treating related elements as cohesive units while preserving the ability to edit individual components when needed.

## Create group

A group functions as a container for its children (nodes, groups, and connectors). Every change made to the group affects all children proportionally, while child elements remain individually editable. Groups can contain other groups, creating nested hierarchies for complex diagram structures.

## Add group when initializing diagram

A group can be added to the diagram model through the [`nodes`](https://ej2.syncfusion.com/angular/documentation/api/diagram#nodes) collection. To define an object as a group, add the child objects to the [`children`](https://ej2.syncfusion.com/angular/documentation/api/diagram/node#children) collection of the group. The following code illustrates how to create a group node.

**Important:** When creating a group, child nodes must be declared before the group declaration.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/group-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/group-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/group-cs1" %}

Connectors can also be added to a group. To create a group using nodes and connectors in the Angular Diagram, refer to the below video link:

{% youtube "youtube:https://www.youtube.com/watch?v=CXrWa_ZDu_s&t=350s" %}

The following code illustrates how to add connectors into a group:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/groupaddconnector-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/groupaddconnector-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/groupaddconnector-cs1" %}

## Runtime group operations

### Group nodes at runtime

Groups can be dynamically created during runtime by invoking the [`diagram.group`](https://ej2.syncfusion.com/angular/documentation/api/diagram#group) method. To initiate this process, first select the nodes that should be included within the group. The [`diagram.group`](https://ej2.syncfusion.com/angular/documentation/api/diagram#group) method will encapsulate the selected nodes within a newly formed group node.

The following code illustrates how to group nodes at runtime:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/group-runtime/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/group-runtime/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/group-runtime" %}

### Ungroup nodes at runtime

Group nodes can be ungrouped dynamically using the [`diagram.unGroup`](https://ej2.syncfusion.com/angular/documentation/api/diagram#ungroup) method. This operation dissolves the group container while preserving all child elements as individual diagram elements.

The following code example shows how to ungroup a group node at runtime:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/ungroup-runtime/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/ungroup-runtime/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/ungroup-runtime" %}

### Add group node at runtime

A group node can be added at runtime using the diagram method [`diagram.add`](https://ej2.syncfusion.com/angular/documentation/api/diagram#add). This method allows programmatic addition of predefined group structures to an existing diagram.

The following code illustrates how a group node is added at runtime:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/groupadd-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/groupadd-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/groupadd-cs1" %}

### Add collection of group nodes at runtime

The collection of group nodes can be dynamically added using the [`addElements`](https://ej2.syncfusion.com/angular/documentation/api/diagram#addelements) method. Each time an element is added to the diagram canvas, the [`collectionChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iCollectionChangeEventArgs) event will be triggered.

The following code illustrates how to add group node collections at runtime:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/groupcollection-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/groupcollection-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/groupcollection-cs1" %}

## Manage group children at runtime

### Add children to group at runtime

A child node can be added to a specified group at runtime using the diagram method [`diagram.addChildToGroup`](https://ej2.syncfusion.com/angular/documentation/api/diagram#addchildtogroup). This functionality requires passing the group and the existing child node as arguments to the method.

The following code illustrates how a child node can be added to a group node at runtime:

```html

this.diagram.addChildToGroup(groupNode, childNode); 

```
### Remove children from group at runtime

A specific child can be removed from a group node at runtime using the diagram method [`diagram.removeChildFromGroup`](https://ej2.syncfusion.com/angular/documentation/api/diagram#removechildfromgroup). This functionality requires passing the group and its child node as arguments to the method.

The following code illustrates how a child node is removed from a group at runtime:

```html

this.diagram.removeChildFromGroup (groupNode, childNode); 

```
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/groupchild-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/groupchild-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/groupchild-cs1" %}

## Group styling and layout

### Group padding

The [`padding`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel#padding) property of a group node defines the spacing between the group node's edges and its children. This property helps maintain visual separation and improves the overall appearance of grouped elements.

The following code illustrates how to add padding to a node group:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/group-padding/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/group-padding/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/group-padding" %}


### Group flip

The flip functionality for a group node works similarly to that of normal nodes. When flipping a group node, the child nodes inherit the group's flip transformation while retaining their individual flip settings. The combined effect creates a hierarchical flip behavior where both the group and child transformations are applied.

**Example of combined flip behavior:**
- If a child node's flip is set to Vertical and the group node's flip is set to Horizontal, the resulting flip for the child node combines both transformations (effectively a "both" flip)
- This ensures that child nodes adapt dynamically based on the group's flip while maintaining their unique flip settings

The following example shows how to apply flip transformations to group nodes:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/group-flip/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/group-flip/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/group-flip" %}

### Group flip mode

The [`flipMode`](https://ej2.syncfusion.com/angular/documentation/api/diagram/flipMode) property of a group node behaves similarly to that of normal nodes. However, when a flip mode is applied to a group node, it takes precedence over any flip mode set on its child nodes, overriding their individual settings.

**Example of flip mode precedence:**
In the code below, the `flipMode` for the child node `Node1` is set to `LabelText`, while the `flipMode` for the group node is set to `Label`. The effective `flipMode` for both the child node and the group node will be `Label`, as the group node's `flipMode` overrides the child's setting.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/group-flipMode/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/group-flipMode/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/group-flipMode" %}

## Nested group

Nested groups are groups within groups, where a group can contain other groups as its children, creating a hierarchical structure. This feature helps manage complexity and relationships between different elements in sophisticated diagram scenarios.

![Nested Group GIF](images/nestedGroup.gif)

The following code illustrates how to create nested group nodes:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/group-nested/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/group-nested/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/group-nested" %}

### Add groups to symbol palette

Group nodes can be added to the symbol palette like normal nodes, enabling reusable group templates for consistent diagram creation. This feature allows developers to create standardized group configurations that can be dragged and dropped into diagrams.

The following code illustrates how to render group nodes in the palette:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/group-palette/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/group-palette/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/group-palette" %}

### Update group nodes at runtime

Groups can be updated dynamically similar to normal nodes, allowing modification of group properties, styling, and behavior during runtime operations.

The following code illustrates how to update group nodes at runtime:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/group-update/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/group-update/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/group-update" %}

## Container types

Containers provide automatic measurement and arrangement of child element size and position according to predefined layout behaviors. The diagram supports two container types, each optimized for different layout scenarios.

### Canvas container

The canvas panel supports absolute positioning and provides minimal layout functionality to its contained diagram elements. This container type offers maximum flexibility for precise element placement.

**Canvas container characteristics:**
- Supports absolute positioning using margin and alignment properties
- Enables rendering operations independently for each contained element
- Allows elements to be aligned vertically or horizontally
- Child elements are defined using the [`canvas.children`](https://ej2.syncfusion.com/angular/documentation/api/diagram/canvas#children) property
- Basic elements can be defined within the `basicElements` collection

### Stack container

The stack panel arranges its children in a single line or stack order, either vertically or horizontally. This container provides structured layout control through spacing and alignment properties.

**Stack container characteristics:**
- Controls spacing using margin properties of child elements and padding properties of the group
- Default [`orientation`](https://ej2.syncfusion.com/angular/documentation/api/diagram/stackPanel#orientation) is vertical
- Provides consistent alignment and distribution of child elements
- Ideal for creating organized, sequential layouts

The following code illustrates how to add a stack panel:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/stack-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/stack-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/stack-cs1" %}

### Difference between basic groups and containers

| Basic Group | Container |
| -------- | -------- |
| Arranges child elements based on the child elements' position and size properties | Each container has predefined behavior to measure and arrange child elements. Canvas and stack containers are supported in the diagram |
| The padding, minimum, and maximum size properties are not applicable for basic groups | These properties are applicable for containers |
| The children's margin and alignment properties are not applicable for basic groups | These properties are applicable for containers |

## Group interactions

Group node interactions can be performed similarly to normal nodes. Fundamental diagram interactions like selecting, dragging, resizing, and rotating apply equally to group nodes. For more information, refer to the [node interactions](./nodes/nodes-interaction) documentation.

### Selecting group nodes

When a child element within a node group is clicked, the entire containing node group is selected instead of the individual child element. Subsequent clicks on the selected element change the selection from top to bottom within the hierarchy, moving from the parent node group to its children.

![Group Interactions GIF](images/groupInteractions-Gif.gif)

## Events

The events triggered when interacting with group nodes are similar to those for individual nodes. For more information, refer to the [node events](./nodes/nodes-events) documentation.

## See Also

* [How to add annotations to the node](./labels/node-labels)
* [How to add ports to the node](./ports)
* [How to enable/disable the behavior of the node](./constraints)
* [How to add nodes to the symbol palette](./symbol-palette)
* [How to create diagram nodes using drawing tools](./tools)
* [How to perform the interaction on the group](./interaction#selecting-a-group)