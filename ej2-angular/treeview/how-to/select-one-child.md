---
layout: post
title: Select one child in Angular TreeView component | Syncfusion
description: Learn here all about Select one child in Syncfusion Angular TreeView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: TreeView
documentation: ug
domainurl: ##DomainURL##
---

# Select one child in Angular TreeView component

The TreeView component supports both single and multiple node selections through the `allowMultiSelection` property. In scenarios where the application requires selecting only one child node at a time under a specific parent node while maintaining multi-selection capability across different parent branches, this can be implemented using the [`nodeSelecting`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodeselecting) event. This event provides control over the selection process by allowing custom logic to prevent or modify selection behavior based on the current selection state and parent-child relationships.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/select-one-child-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/select-one-child-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/select-one-child-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/select-one-child-cs1" %}