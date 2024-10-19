---
layout: post
title: Events of node interaction in Angular Diagram component | Syncfusion
description: Learn here all about Nodes in Syncfusion Angular Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Events of node
documentation: ug
domainurl: ##DomainURL##
---

## Events

Diagram provides some events support for node that triggers when interacting with the node.

## Click event

Triggers when the node is clicked. The following code example explains how to get the [`click`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#click) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs0/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs0/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-events-cs0" %}

## Selection change event

Triggers when the node is selected in diagram.
The following code example explains how to get the [`selectionChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#selectionchange) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-events-cs1" %}

 You can prevent selection by setting the `cancel` property of [`SelectionChangeEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iselectionchangeeventargs/) to true, as shown in the code snippet below.

```ts
  public selectionChange(args:ISelectionChangeEventArgs): void {
    if(args.state === 'Changing'){
        //Prevents selection
      args.cancel = true;
    }
  },

```

## Position change event

While dragging the node through interaction, the position change event can be used to do the customization.
The following code example explains how to get the [`positionChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram/idraggingeventargs/) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-events-cs2" %}

You can prevent dragging by setting the `cancel` property of [`DraggingEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/diagram/idraggingeventargs/) to true, as shown in the code snippet below.

 ```ts
    public positionChange(args: IDraggingEventArgs): void {
       if (args.state == 'Progress') {
        //Prevents dragging
        args.cancel = true;
       }
    },

```

## Size change event

While resizing the node during the interaction, the size change event can be used to do the customization.
The following code example explains how to get the [`sizeChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram/isizechangeeventargs/) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-events-cs3" %}

 ```ts
    public sizeChange(args: ISizeChangeEventArgs): void {
     if (args.state == 'Progress') {
      //Prevents resizing
      args.cancel = true;
     }
    },

```

## Rotate change event

While rotating the node during the interaction, the rotate change event can be used to do the customization.
The following code example explains how to get the [`rotateChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram/irotationeventargs/) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-events-cs4" %}

You can prevent rotation by setting the `cancel` property of [`RotationEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/diagram/irotationeventargs/) to true, as shown in the code snippet below.

 ```ts
  public rotateChange(args: IRotationEventArgs): void {
    if (args.state == 'Progress') {
      //Prevents rotation
      args.cancel = true;
    }
  },

```

## Property change event

Triggers when there is any property change occurred for the node. The following code example explains how to get the [`propertyChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram/ipropertychangeeventargs/) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-events-cs5" %}


## Collection change event

Triggers when the node is added or removed in diagram dynamically.
The following code example explains how to get the [`collectionChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#collectionchange) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-events-cs6" %}

You can prevent changes to the diagram collection, such as adding or deleting nodes, by setting the `cancel` property of [`CollectionChangeEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/diagram/icollectionchangeeventargs/) to true, as shown in the code snippet below.

 ```ts
    public collectionChange(args: ICollectionChangeEventArgs): void {
      if (args.state == 'Changing') {
      //Prevents collection change - Prevents Adding or deleting nodes
      args.cancel = true;
      }
    },

```

## Mouse Events

### Mouse enter event

The [`mouseEnter`](https://ej2.syncfusion.com/angular/documentation/api/diagram/imouseeventargs/) is triggered when the mouse enters the node surface.

### Mouse over event

The [`mouseOver`](https://ej2.syncfusion.com/angular/documentation/api/diagram/imouseeventargs/) is triggered when the mouse hover over the node surface.

### Mouse leave event

The [`mouseLeave`](https://ej2.syncfusion.com/angular/documentation/api/diagram/imouseeventargs/) is triggered when the mouse leaves the node surface.

The following code example shows how to handle these events in the diagram and change the color of a node based on these events:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-events-cs7" %}