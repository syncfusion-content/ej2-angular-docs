---
layout: post
title: Mind-map layout in Angular Diagram component | Syncfusion®
description: Learn here all about Mind-map layout in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Mind-map layout 
documentation: ug
domainurl: ##DomainURL##
---

# Mind Map layout in Angular Diagram control

A mind map is a powerful visualization technique that organizes information around a central concept, with related topics branching outward in a tree-like structure. This layout is particularly useful for brainstorming, knowledge mapping, and hierarchical data representation. The Angular Diagram component supports mind map layouts through the [`type`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layout#type) property, which should be set to `MindMap`.

## Prerequisites

To use mind map layout functionality, you must inject the `MindMap` module into the diagram component:

```typescript
import { MindMap } from '@syncfusion/ej2-angular-diagrams';
Diagram.Inject(MindMap);
```

## Mind Map Orientation

The [`orientation`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layout#orientation) property determines how the mind map tree structure is arranged spatially. By default, the orientation is set to `Horizontal`, positioning the root node centrally with branches extending left and right.

The following code example demonstrates how to create a mind map layout:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/mindMap-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/mindMap-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/mindMap-cs1" %}

The following table outlines the available orientation options:

|Orientation Type |Description|
| -------- | ----------- |
|Horizontal|Arranges the mind map with the root node centered, branches extending horizontally left and right|
|Vertical|Arranges the mind map with the root node at the top or center, branches extending vertically up and down|

## Mind Map Branch Control

The mind map layout provides flexible branch positioning through the [`getBranch`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layoutModel#getbranch) method. This method allows you to control which side of the root node each branch appears on, enabling customized layouts based on your specific requirements.

The `getBranch` method receives a node object as a parameter and should return a string value indicating the desired branch position: `'Left'`, `'Right'`, or `'SubLeft'`/`'SubRight'` for nested branches.

The following code example shows how to position all branches on the right side of the mind map:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/mindMap-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/mindMap-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/mindMap-cs2" %}

![Mind map layout showing branched structure with nodes arranged around a central concept](../images/mindmap.png)

## Common Use Cases

Mind map layouts are ideal for:
- **Brainstorming sessions**: Visualizing ideas and their relationships
- **Knowledge mapping**: Organizing complex information hierarchically
- **Decision trees**: Mapping out decision processes and outcomes
- **Organizational charts**: Displaying reporting structures with a central focus
- **Project planning**: Breaking down projects into manageable components

## Best Practices

- Keep the root node content concise and descriptive
- Use consistent styling for nodes at the same hierarchical level
- Limit branch depth to maintain readability
- Consider color coding to differentiate branch categories
- Ensure adequate spacing between branches to prevent overlap