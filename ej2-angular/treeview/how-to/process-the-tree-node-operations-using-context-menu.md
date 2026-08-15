---
layout: post
title: Manage tree node actions using context menu in Angular Tree View | Syncfusion
description: Manage Angular Tree View add, remove, and rename actions by integrating the context menu select event with TreeView methods.
platform: ej2-angular
control: TreeView 
documentation: ug
domainurl: ##DomainURL##
---

# How to manage tree node actions using context menu in Angular Tree View

You can integrate the context menu with the TreeView component to perform essential TreeView operations such as adding, removing, and renaming nodes. This integration provides users with an intuitive right-click interface for managing tree structure and node content.

The following example demonstrates how to use the context menu's `select` event to handle TreeView operations including node addition, deletion, and text editing. The implementation shows proper event handling and TreeView method usage for comprehensive node management.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tree-view/context-menu-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/context-menu-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/context-menu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/context-menu-cs1" %}