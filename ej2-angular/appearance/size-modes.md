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

Modern web applications are designed to accommodate various devices, including desktops and mobile, often necessitating distinct layouts or interfaces for optimal viewing on smaller screens. Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components support two size modes: touch (bigger) and normal. The touch mode enhances mobile device responsiveness by incorporating the `e-bigger` class for improved interaction and visibility.

## Size Mode for Application

To enable touch mode (bigger) for an entire application, add the `e-bigger` class to the `body` element in the `index.html` file, as shown:

```html
<body class="e-bigger">
    ...
</body>
```

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

* [Sidebar Responsiveness](https://ej2.syncfusion.com/angular/documentation/sidebar/auto-close/)
* [DataGrid Responsiveness](https://ej2.syncfusion.com/angular/documentation/grid/columns/responsive-columns/)
* [TreeGrid Responsiveness](https://ej2.syncfusion.com/angular/documentation/treegrid/scrolling/#responsive-with-parent-container)
* [Dashboard Layout Responsiveness](https://ej2.syncfusion.com/angular/documentation/dashboard-layout/responsive-adaptive/)
* [Kanban Responsiveness](https://ej2.syncfusion.com/angular/documentation/kanban/responsive-mode/)
* [Toolbar Responsiveness](https://ej2.syncfusion.com/angular/documentation/toolbar/responsive-mode/)
* [Tab Responsiveness](https://ej2.syncfusion.com/angular/documentation/tab/adaptive/)