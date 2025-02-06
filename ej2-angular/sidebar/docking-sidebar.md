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

The dock state of the Sidebar reserves some space on the page that always remains visible when the Sidebar is in a collapsed state. It is used to show a shortened form of content, such as icons alone instead of lengthy text. To achieve this , set [`enableDock`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#enabledock) to true along with the required  [`dockSize`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#docksize).

In the following example, each list item includes an icon along with accompanying text. The visibility of the text is dynamically controlled through CSS rules based on the Sidebar's state. When the **enableDock** property is enabled, the **e-dock** class is applied, adjusting the text visibility accordingly. 

To show the icons alone in a docked (closed) state, the following CSS is applied:

```css
.e-dock.e-close span.e-text {
  display: none;
}
```

To show the text along with icons when the Sidebar is open, this CSS is used:

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
