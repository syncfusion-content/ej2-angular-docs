---
layout: post
title: Open Dialog on Context Menu Item Click in Angular | Syncfusion
description: Learn here all about Open a dialog on contextmenu item click in Syncfusion Angular Context menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Context Menu
documentation: ug
domainurl: ##DomainURL##
---

# Open Dialog on Context Menu Click in Angular

This section explains how to open a dialog when a ContextMenu item is clicked. This integration is commonly used for modal workflows, form interactions, and confirmation dialogs. The functionality is achieved by handling the dialog opening logic in the `select` event of the ContextMenu component.

When a ContextMenu item is selected, the `select` event provides access to the clicked item's details, allowing you to conditionally open dialogs based on the selected menu option. This pattern is particularly useful for actions that require additional user input or confirmation before execution.

In the following sample, a Dialog will open when clicking the `Save As...` menu item:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/context-menu/dialog-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/dialog-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/dialog-cs1" %}