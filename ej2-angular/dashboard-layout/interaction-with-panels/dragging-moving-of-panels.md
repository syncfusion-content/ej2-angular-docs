---
layout: post
title: Dragging panels in Angular Dashboard Layout component | Syncfusion
description: Learn here all about dragging moving of panels in Syncfusion Angular Dashboard Layout component, it's elements and more.
platform: ej2-angular
control: Dashboard Layout
documentation: ug
domainurl: ##DomainURL##
---

# Dragging and Moving Dashboard Layout Panels in Angular

The Dashboard Layout component provides dragging functionality to reorder panels within the layout. While dragging a panel, a holder is highlighted beneath the panel indicating where the panel will be positioned upon release. This visual feedback allows users to determine whether to place the panel in the current position or revert to its previous position without disrupting the layout.

When one or more panels collide during dragging, the colliding panels are automatically pushed in the direction where space is available—left, right, top, or bottom. The position changes of these collided panels are updated dynamically during the drag operation, allowing users to determine the optimal placement for the panel being dragged.

The Dashboard Layout triggers the following events during panel dragging operations:

* [dragStart](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#dragstart) - Triggers when panel drag starts
* [drag](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#drag) - Triggers when panel is being dragged
* [dragStop](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#dragstop) - Triggers when panel drag stops

The following sample demonstrates dragging and pushing of panels. For example, while dragging the panel 0 over panel 1, these panels get collided and push the panel 1 towards the feasible direction, so that, the panel 0 gets placed in the panel 1 position.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dashboard-layout/dragging-of-panels-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dashboard-layout/dragging-of-panels-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/dragging-of-panels-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dashboard-layout/dragging-of-panels-cs1" %}

## Customizing the Drag Handle

By default, the entire panel acts as the drag handle, allowing the dragging action to occur when clicking anywhere on the panel. However, the dragging handler for panels can be customized using the [`draggableHandle`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#draggablehandle) property to restrict the dragging action to a specific element within the panel.

The following sample demonstrates customizing the dragging handler of panels, where the dragging action occurs only when interacting with the panel header.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dashboard-layout/customizing-the-dragging-handler-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dashboard-layout/customizing-the-dragging-handler-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/customizing-the-dragging-handler-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dashboard-layout/customizing-the-dragging-handler-cs1" %}

## Disabling Panel Dragging

By default, panel dragging is enabled in the Dashboard Layout. The dragging functionality can be disabled using the [allowDragging](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#allowdragging) API. Setting [allowDragging](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#allowdragging) to false disables the dragging functionality in Dashboard Layout.

The following sample demonstrates a Dashboard Layout with dragging support disabled.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dashboard-layout/disable-dragging-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dashboard-layout/disable-dragging-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/disable-dragging-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dashboard-layout/disable-dragging-cs1" %}

> Refer to the [Angular Dashboard Layout](https://www.syncfusion.com/angular-components/angular-dashboard-layout) feature tour page for its comprehensive feature representations. Also explore the [Angular Dashboard Layout example](https://ej2.syncfusion.com/angular/demos/#/material3/dashboard-layout/default) to see practical implementations of panel manipulation.