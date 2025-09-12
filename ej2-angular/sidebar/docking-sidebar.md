---
layout: post
title: Docking Sidebar in Angular Sidebar component | Syncfusion
description: Learn here all about Docking Sidebar in Syncfusion Angular Sidebar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Sidebar
documentation: ug
domainurl: ##DomainURL##
---

# Docking Sidebar in Angular Sidebar component

The Sidebar component supports docking, which reserves a compact, always-visible portion of the Sidebar when collapsed, ideal for displaying icons or minimal content. Docking is enabled by setting the [`enableDock`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#enabledock) property to `true` (default: `false`) and specifying the [`dockSize`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#docksize) property (default: `auto`) to define the width of the docked state, using a `string` (e.g., `"50px"`) or `number` (e.g., `50`).

## Configuring Docked Sidebar

In the following example, each list item includes an icon along with accompanying text. The visibility of the text is dynamically controlled through CSS rules based on the Sidebar's state. When the **enableDock** property is enabled, the **e-dock** class is applied, adjusting the text visibility accordingly. 

The following CSS, applied in `styles.css`, hides text in the docked (closed) state:

```css
.e-dock.e-close span.e-text {
  display: none;
}
```

This CSS displays text alongside icons when the Sidebar is open:

```css
.e-dock.e-open span.e-text {
  display: inline-block;
}
```

In the docked state, only icons in the list are visible, hinting at the hidden text content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sidebar/dock-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/sidebar/dock-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/dock-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sidebar/dock-cs1" %}

## See Also

* [How to add Sidebar navigation](./how-to/sidebar-with-treeview)
