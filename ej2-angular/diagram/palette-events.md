---
layout: post
title: Symbol Palette Events in EJ2 Angular Diagram component | Syncfusion
description: Learn here all about Symbol palette in Syncfusion Angular Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Symbol palette 
documentation: ug
domainurl: ##DomainURL##
---

# Symbol Palette Events in EJ2 Angular Diagram component

There are some events which will get triggered while interacting with the symbol palette. They are explained below.

## DragEnter event

[`DragEnter`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iDragEnterEventArgs) event triggers when the shape enters the diagram surface while dragging it from symbol palette. You can customize the style of the dragged shape using this event. This allows for dynamic styling changes based on the diagram's context.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/events/drag-enter/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/events/drag-enter/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/events/drag-enter" %}

## DragLeave event

[`DragLeave`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iDragLeaveEventArgs) event occurs when a shape leaves the diagram surface after being dragged inside but not dropped. This can be useful for resetting styles or handling any clean-up tasks when a shape is not intended to be placed on the diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/events/drag-leave/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/events/drag-leave/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/events/drag-leave" %}

## DragOver event

[`DragOver`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iDragOverEventArgs) event triggered when a shape is dragged over diagram while being moved from the symbol palette. This event can be used to provide visual feedback or to determine if the current drop target is valid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/events/drag-over/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/events/drag-over/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/events/drag-over" %}

## Drop event

[`Drop`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iDropEventArgs/) event triggered when a shape is dropped onto the diagram surface. This event is useful for customizing the shape's appearance and properties after it is dropped.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/events/drop/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/events/drop/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/events/drop" %}

## PaletteExpanding event

[`PaletteExpanding`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iPaletteExpandArgs/) event triggered when the palette expanded / collapsed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/events/palette-expand/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/events/palette-expand/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/events/palette-expand" %}

## PaletteSelectionChange event

[`PaletteSelectionChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iPaletteSelectionChangeArgs/) event triggered after the selection changes in the symbol palette. This event can be used to enable/disable functionality based on the selected symbol.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/events/palette-selection/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/events/palette-selection/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/events/palette-selection" %}

