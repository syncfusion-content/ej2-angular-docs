---
layout: post
title: How to remove checkbox of parent node in Angular Tree View | Syncfusion
description: Hide Angular Tree View parent node checkboxes via CSS while keeping leaf-node checkboxes for a cleaner selection interface.
platform: ej2-angular
control: TreeView 
documentation: ug
domainurl: ##DomainURL##
---

# How to remove checkbox of parent node in Angular Tree View

By enabling the [`showCheckBox`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#showcheckbox) property, you can render checkbox before each node of TreeView. However, certain application scenarios require checkboxes to appear only for leaf nodes, while parent nodes should remain without checkboxes for a cleaner interface or specific workflow requirements. In such cases, you can selectively hide parent node checkboxes through CSS customization while maintaining the underlying checkbox functionality.

The TreeView assigns `.e-checkbox-wrapper` to every checkbox element. Combine this selector with a level selector that matches parents only. The component emits `.e-level-<n>` on each node `<li>` and you can use the absence of `.e-has-children` to scope leaf-node leaves; the typical pattern is to hide the wrapper for every tree level except the deepest leaves using nested `:not()` selectors, or to programmatically disable parent checkboxes via the [`drawNode`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#drawnode) event.
{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tree-view/remove-parent-checkbox-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/remove-parent-checkbox-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/remove-parent-checkbox-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/remove-parent-checkbox-cs1" %}