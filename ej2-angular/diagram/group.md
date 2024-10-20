---
layout: post
title: Group in Angular Diagram component | Syncfusion
description: Learn here all about Group in Syncfusion Angular Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Group 
documentation: ug
domainurl: ##DomainURL##
---

# Group in Angular Diagram component

## Create group

Group is used to cluster multiple nodes and connectors into a single element. It acts like a container for its children (nodes, groups, and connectors). Every change made to the group also affects the children. Child elements can be edited individually.


## Add group when initializing diagram

A group can be added to the diagram model through [`nodes`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#nodes) collection. To define an object as group, add the child objects to the [`children`](https://ej2.syncfusion.com/angular/documentation/api/diagram/node/#children) collection of the group.  The following code illustrates how to create a group node.

* While creating group, its child node need to be declared before the group declaration.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/group-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/group-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/group-cs1" %}

Connectors can be added to a group. To create a group using Nodes and Connectors in the Angular Diagram, refer to the below video link,

{% youtube "youtube:https://www.youtube.com/watch?v=CXrWa_ZDu_s&t=350s" %}

The following code illustrates how to add connectors into a group.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/groupaddconnector-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/groupaddconnector-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/groupaddconnector-cs1" %}

## Group nodes at runtime

Groups can be dynamically created during runtime in the diagram by invoking the [`diagram.group`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#group) method. To initiate this process, first, select the nodes that you intend to include within the group. Subsequently, by utilizing the [`diagram.group`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#group) method, the selected nodes will be encapsulated within a newly formed group node.

The following code illustrates how to group at runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/group-runtime/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/group-runtime/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/group-runtime" %}

## UnGroup nodes at runtime

Group node can be unGrouped dynamically, by using the [`diagram.unGroup`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#ungroup) method. The following code example shows how to unGroup group node at runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/ungroup-runtime/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/ungroup-runtime/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/ungroup-runtime" %}

## Add group node at runtime

A group node can be added at runtime by using the diagram method [`diagram.add`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#add).

The following code illustrates how a group node is added at runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/groupadd-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/groupadd-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/groupadd-cs1" %}

## Add collection of group nodes at runtime

* The collection of group nodes can be dynamically added using [`addElements`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#addelements) method.Each time an element is added to the diagram canvas, the [`collectionChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iCollectionChangeEventArgs/) event will be triggered.

The following code illustrates how to add group nodes collection at runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/groupcollection-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/groupcollection-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/groupcollection-cs1" %}

## Add/Remove children from group

### Add children To group at runtime

A childNode can be added to the specified Group at runtime by utilizing the diagram method [`diagram.addChildToGroup`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#addchildtogroup). 

This functionality is achieved by passing the group and existing children as arguments to the method.

The following code illustrates how a child node and a group node can be passed as arguments to the method and executed at runtime.

```html

this.diagram.addChildToGroup(groupNode, childNode); 

```
### Remove children from group at runtime

A specific child from a group node can be removed at runtime by utilizing the diagram method [`diagram.removeChildFromGroup`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#removechildfromgroup). 

This functionality is achieved by passing the group and its children as arguments to the method.

The following code illustrates how a child node is removed from a group at runtime.

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

## Group padding

The [`Padding`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel/#padding) property of a group node defines the spacing between the group node’s edges and its children.

The following code illustrates how to add Padding to the node group.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/group-padding/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/group-padding/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/group-padding" %}

## Nested group

Nested groups are essentially groups within groups, where a group can contain other groups as its children, creating a hierarchy that helps manage complexity and relationships between different elements.

![Nested Group GIF](images/nestedGroup.gif)

 The following code illustrates how to create nested group node.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/group-nested/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/group-nested/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/group-nested" %}

## Add Group in palette

Group node can be added in symbol palette like the normal nodes.  The following code illustrates how to render group node in palette.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/group-palette/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/group-palette/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/group-palette" %}

## Update group node at runtime

Group can be updated dynamically similar to the normal nodes.  The following code illustrates how to update group node at runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/group-update/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/group-update/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/group-update" %}

## Container

Containers are used to automatically measure and arrange the size and position of the child elements in a predefined manner. There are two types of containers available.

***Canvas***

* The canvas panel supports absolute positioning and provides the least layout functionality to its contained diagram elements.

* Canvas allows you to position its contained elements by using the margin and alignment properties.

* Rendering alone possible in canvas container.

* It allows elements to be either vertically or horizontally aligned.

* Child can be defined with the collection [`canvas.children`](https://ej2.syncfusion.com/angular/documentation/api/diagram/canvas/#children) property.

* Basic element can be defined with the collection of `basicElements`.

***Stack***

* Stack panel is used to arrange its children in a single line or stack order, either vertically or horizontally.

* It controls spacing by setting margin properties of child and padding properties of group. By default, a stack panel’s [`orientation`](https://ej2.syncfusion.com/angular/documentation/api/diagram/stackPanel/#orientation) is vertical.

The following code illustrates how to add a stack panel.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/stack-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/stack-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/stack-cs1" %}

## Difference between a basic group and containers

| Group | Container |
| -------- | -------- |
| It arranges the child elements based on the child elements position and size properties. | Each container has a predefined behavior to measure and arrange its child elements. Canvas and stack containers are supported in the diagram. |
| The Padding, Min, and Max Size properties are not applicable for basic group. | It is applicable for container. |
| The Children’s margin and alignment properties are not applicable for basic group. |  It is applicable for container. |

## Interaction

Group node interactions can be performed similarly to normal nodes. Fundamental diagram interactions like selecting, dragging, resizing, and rotating apply equally to group nodes. For more informatation refer to the [`nodes interactions`](https://ej2.syncfusion.com/angular/documentation/diagram/nodes#interaction)

### Selecting a Node Group

When a child element within a node group is clicked, the entire contained node group is selected instead of the individual child element. Subsequent clicks on the selected element change the selection from top to bottom within the hierarchy, moving from the parent node group to its children.

![Group Interactions GIF](images/groupInteractions-Gif.gif)

## Events

The events triggered when interacting with group nodes are similar to those for individual nodes.

## See Also

* [How to add annotations to the node](./labels)
* [How to add ports to the node](./ports)
* [How to enable/disable the behavior of the node](./constraints)
* [How to add nodes to the symbol palette](./symbol-palette)
* [How to create diagram nodes using drawing tools](./tools)
* [How to perform the interaction on the group](./interaction#selection)