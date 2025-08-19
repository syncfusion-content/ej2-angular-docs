---
layout: post
title: Size Modes in Angular Appearance component | Syncfusion
description: Learn here all about Size Modes in Syncfusion Angular Appearance component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Size Modes
documentation: ug
domainurl: ##DomainURL##
---

# Size Mode for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Components

Modern web applications need to provide optimal user experiences across a wide range of devices – from large desktop monitors to small mobile screens. Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components address this challenge by offering two distinct size modes: **normal** (default) and **touch** (bigger). This flexibility allows developers to create interfaces that are appropriately sized for different interaction methods and screen sizes.

## Understanding Size Modes

Size modes control the physical dimensions and touch targets of UI components:

- **Normal Mode**: Optimized for mouse/keyboard interactions with standard-sized UI elements
- **Touch Mode**: Provides larger UI elements with increased touch targets for better touch interaction

## Size Mode for Application

To apply touch mode (bigger) for an entire application, add the `e-bigger` class to the `body` element in the `index.html` file:

```html
<body class="e-bigger">
    <!-- Application content -->
</body>
```

This global approach ensures all Syncfusion components throughout your application render with the touch-optimized larger size.

## Size Mode for a Component

Touch mode (bigger) can also be activated for individual components by adding the `e-bigger` class to the `div` element containing the component. Alternatively, use the component's `cssClass` property to apply the `e-bigger` class.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/size-modes/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/size-modes/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/size-modes" %}

## Change Size Mode for Application at Runtime

To toggle an application's size mode between touch and normal (mouse) at runtime, simply add or remove the `e-bigger` class. The following code demonstrates how to change the size mode dynamically:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/size-modes-app/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/size-modes-app/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/size-modes-app" %}

## Change Size Mode for a Component at Runtime

You can switch a component's size mode between touch and normal at runtime by toggling the `e-bigger` CSS class.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/size-modes-cp/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/size-modes-cp/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/size-modes-cp" %}

## See Also

* [Sidebar Responsiveness](https://ej2.syncfusion.com/angular/documentation/sidebar/auto-close)
* [DataGrid Responsiveness](https://ej2.syncfusion.com/angular/documentation/grid/columns/responsive-columns)
* [TreeGrid Responsiveness](https://ej2.syncfusion.com/angular/documentation/treegrid/scrolling#responsive-with-parent-container)
* [Dashboard Layout Responsiveness](https://ej2.syncfusion.com/angular/documentation/dashboard-layout/responsive-adaptive)
* [Kanban Responsiveness](https://ej2.syncfusion.com/angular/documentation/kanban/responsive-mode)
* [Toolbar Responsiveness](https://ej2.syncfusion.com/angular/documentation/toolbar/responsive-mode)
* [Tab Responsiveness](https://ej2.syncfusion.com/angular/documentation/tab/adaptive)