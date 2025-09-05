---
layout: post
title: Symbol Palette Events in EJ2 Angular Diagram component | Syncfusion®
description: Learn here all about Symbol palette events in Syncfusion® Angular Diagram component including drag-drop events, palette expansion, and selection change events.
platform: ej2-angular
control: Symbol palette 
documentation: ug
domainurl: ##DomainURL##
---

# Symbol Palette Events in EJ2 Angular Diagram Component

The Symbol Palette component provides several events that trigger during user interactions such as dragging symbols, expanding palettes, and changing selections. These events enable developers to customize behavior, provide visual feedback, and implement custom logic during symbol palette operations.

## DragEnter event

The [`DragEnter`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iDragEnterEventArgs/) event triggers when a symbol enters the diagram surface while being dragged from the symbol palette. This event allows developers to customize the appearance of the dragged symbol or validate drop targets dynamically based on the diagram's current state.

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

The [`DragLeave`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iDragLeaveEventArgs/) event occurs when a dragged symbol leaves the diagram surface without being dropped. This event is particularly useful for cleaning up temporary visual changes applied during the drag operation or resetting any modified states.

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

The [`DragOver`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iDragOverEventArgs/) event triggers continuously while a symbol is being dragged over the diagram surface. This event provides real-time feedback during drag operations and enables developers to implement dynamic drop validation.

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

The [`Drop`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iDropEventArgs/) event triggers when a symbol is successfully dropped onto the diagram surface. This event serves as the final step in the drag-and-drop process and provides access to both the dropped symbol and the target location.

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

The [`PaletteExpanding`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iPaletteExpandArgs/) event triggers when a palette group is expanded or collapsed within the symbol palette. This event enables developers to control palette expansion behavior and implement custom logic based on palette state changes.

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

The [`PaletteSelectionChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iPaletteSelectionChangeArgs/) event triggers when the selection changes within the symbol palette. This event provides information about both the previously selected and newly selected symbols, enabling developers to respond to selection changes appropriately.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/events/palette-selection/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/events/palette-selection/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/events/palette-selection" %}