---
layout: post
title: How to get dynamic icon in Angular Tree View | Syncfusion
description: Read bound iconCss classes from the Angular Tree View via the getTreeData method inside events like nodeChecking.
platform: ej2-angular
control: TreeView 
documentation: ug
domainurl: ##DomainURL##
---

# How to get dynamic icon in Angular Tree View

The TreeView component allows you to retrieve the original bound data using the [`getTreeData`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#gettreedata) method. When you pass a node ID to this method, it returns the corresponding node information; when called without parameters, it returns information for all tree nodes. You can use this method to get the bound iconCss class within events like [`nodeChecking`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodechecking), enabling dynamic icon retrieval based on node states or user interactions.

 Refer to the following sample for an implementation example.

The following handler reads the bound `iconCss` field from each affected node during the `nodeChecking` event:

```typescript
public onNodeChecking(args: NodeCheckEventArgs): void {
  const nodeData = args.data[0];
  const iconClass = nodeData && nodeData.iconCss;
  console.log('Icon class for node', nodeData && nodeData.id, 'is', iconClass);
}
```

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tree-view/icon-css-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/icon-css-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/icon-css-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/icon-css-cs1" %}
