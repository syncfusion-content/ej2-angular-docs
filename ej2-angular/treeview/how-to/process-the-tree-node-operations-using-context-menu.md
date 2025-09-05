---
layout: post
title: Manage tree node actions using context menu | Syncfusion
description: Learn here all about Process the tree node operations using context menu in Syncfusion Angular TreeView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: TreeView 
documentation: ug
domainurl: ##DomainURL##
---

# Perform tree node actions using context menu

You can integrate the context menu with the TreeView component to perform essential TreeView operations such as adding, removing, and renaming nodes. This integration provides users with an intuitive right-click interface for managing tree structure and node content.

The following example demonstrates how to use the context menu's `select` event to handle TreeView operations including node addition, deletion, and text editing. The implementation shows proper event handling and TreeView method usage for comprehensive node management.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
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