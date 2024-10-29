---
layout: post
title: User interactions in Angular Treeview component | Syncfusion
description: Learn here all about User interactions in Syncfusion Angular Treeview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: User interactions
documentation: ug
domainurl: ##DomainURL##
---

# User interactions in Angular Treeview component

The below methods were available in TreeView, and we can walk through one by one.

* addNodes
* removeNodes
* updateNode
* refreshNode
* moveNodes

## addNodes

TreeView allows user to add the collection of TreeView nodes based on target and index position by using the `addNodes` method. You can add parent as well as the child by passing its id and target as arguments. Here, you can achieve this by using button click.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/user-interactions-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/user-interactions-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/user-interactions-cs1" %}

## removeNodes

TreeView allows user to remove the collection of TreeView nodes by passing the array of node id by using the `removeNodes` method. You can remove parent as well as the child by passing its id value. Here, you can achieve this by using button click.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/user-interactions-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/user-interactions-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/user-interactions-cs2" %}

## updateNode

TreeView allows user to update TreeView nodes by passing the target and the text to be shown by using the `updateNode` method. You can also need to enable the `allowEditing` property. Here, you can achieve this by using button click.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/user-interactions-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/user-interactions-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/user-interactions-cs3" %}

## refreshNode

TreeView allows user to refresh TreeView nodes with new changes by passing the target and the new changes to be shown by using the `refreshNode` method while using the nodeTemplate property. Here, you can achieve this by using button click.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/user-interactions-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/user-interactions-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/user-interactions-cs4" %}

## moveNodes

TreeView allows user to move TreeView node by passing the node to be moved, the target where to be moved, index of the moved node to be placed in target by using the `moveNodes` method. Here, you can achieve this by using button click.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/user-interactions-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/user-interactions-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/user-interactions-cs5" %}