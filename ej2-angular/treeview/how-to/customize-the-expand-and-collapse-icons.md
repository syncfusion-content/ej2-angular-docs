---
layout: post
title: How to customize the expand and collapse icons in Angular Tree View | Syncfusion
description: Replace Angular Tree View expand and collapse icons by applying custom CSS through the cssClass property.
platform: ej2-angular
control: TreeView 
documentation: ug
domainurl: ##DomainURL##
---

# How to customize the expand and collapse icons in Angular Tree View

The TreeView component displays default expand and collapse icons for parent nodes. These icons can be customized to match application themes or design requirements by using the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#cssclass) property along with custom CSS styling.

The `cssClass` property allows you to apply custom CSS classes to the TreeView component, which can then be used to override the default expand and collapse icon styles. The TreeView uses specific CSS selectors for these icons that can be targeted through custom CSS rules.

To customize the expand and collapse icons, define custom CSS classes that target the TreeView's icon elements and apply these styles using the `cssClass` property. The custom CSS should override the default icon fonts or background images with the desired custom icons.

The TreeView renders the expand/collapse icons on `.e-icon-expandable` and `.e-icon-collapsible` elements. You can override them with any of the following approaches:

* **Custom font glyphs**: Set a different `font-family` and `content` value to swap the built-in character glyph.
* **Background image**: Replace the icon with `background-image` and hide the original text via `font-size: 0`.
* **SVG sprite**: Apply `background-image` with an inline SVG `data:` URL for vector icons that scale on high-DPI screens.

The CSS used in the sample below applies a square `background-image` to both states:

```css
.accordion-tree .e-icon-expandable,
.accordion-tree .e-icon-collapsible {
  background-image: url('./icons/folder.svg');
  background-size: contain;
  background-repeat: no-repeat;
  font-size: 0;
}
```

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tree-view/getting-started-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/getting-started-cs9/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/getting-started-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/getting-started-cs9" %}