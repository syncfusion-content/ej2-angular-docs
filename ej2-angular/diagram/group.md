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

Group is used to cluster multiple nodes and connectors into a single element. It acts like a container for its children (nodes, groups, and connectors). Every change made to the group also affects the children. Child elements can be edited individually.

## Create group

## Add group when initializing diagram

A group can be added to the diagram model through [`nodes`](https://ej2.syncfusion.com/angular/documentation/api/diagram#nodes-NodeModel) collection. To define an object as group, add the child objects to the [`children`](https://ej2.syncfusion.com/angular/documentation/api/diagram/node#children-string) collection of the group.

* The [`padding`](https://ej2.syncfusion.com/angular/documentation/api/diagram/node#padding-MarginModel) property of a group node defines the spacing between the group node’s edges and its children.

* While creating group, its child node need to be declared before the group declaration.

* Add a node to the existing group child by using the `diagram.group` method.

* The group’s `diagram.unGroup` method is used to define whether the group can be ungrouped or not.

* A group can be added into a child of another group.

To create a group using Nodes and Connectors in the Angular Diagram, refer to the below video link,

{% youtube "youtube:https://www.youtube.com/watch?v=CXrWa_ZDu_s&t=350s" %}

The following code illustrates how to create a group node.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/group-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/groups/group-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/group-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/group-cs1" %}

The following code illustrates how a ungroup  at runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/ungroup-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/groups/ungroup-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/ungroup-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/ungroup-cs1" %}

Connectors can be added to a group. The following code illustrates how to add connectors into a group.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/groupaddconnector-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/groups/groupaddconnector-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/groupaddconnector-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/groupaddconnector-cs1" %}

## Add group at runtime

A group node can be added at runtime by using the client-side method `diagram.add`.

The following code illustrates how a group node is added at runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/groupadd-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/groups/groupadd-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/groupadd-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/groups/groupadd-cs1" %}

## Container

Containers are used to automatically measure and arrange the size and position of the child elements in a predefined manner.

There are two types of containers available.

* Canvas
* Stack

## Canvas

* The canvas panel supports absolute positioning and provides the least layout functionality to its contained diagram elements.

* Canvas allows you to position its contained elements by using the margin and alignment properties.

* Rendering alone possible in canvas container.

* It allows elements to be either vertically or horizontally aligned.

* Child can be defined with the collection [`canvas.children`](https://ej2.syncfusion.com/angular/documentation/api/diagram/canvas#children-DiagramElement) property.

* Basic element can be defined with the collection of [`basicElements`](https://ej2.syncfusion.com/angular/documentation/api/diagram#basicElements-DiagramElement).

## Stack

* Stack panel is used to arrange its children in a single line or stack order, either vertically or horizontally.

* It controls spacing by setting margin properties of child and padding properties of group. By default, a stack panel’s [`orientation`](https://ej2.syncfusion.com/angular/documentation/api/diagram/stackPanel#orientation-Orientation) is vertical.

The following code illustrates how to add a stack panel.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/groups/stack-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/groups/stack-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/groups/stack-cs1/app/main.ts %}
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

You can edit the group and its children at runtime. For more information about how to interact with a group, refer to `Edit Groups`.

## See Also

* [How to add annotations to the node](./labels)
* [How to add ports to the node](./ports)
* [How to enable/disable the behavior of the node](./constraints)
* [How to add nodes to the symbol palette](./symbol-palette)
* [How to create diagram nodes using drawing tools](./tools)
* [How to perform the interaction on the group](./interaction#selection)