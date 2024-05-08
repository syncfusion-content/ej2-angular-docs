---
layout: post
title: Custom tool bar in Angular Treegrid component | Syncfusion
description: Learn here all about Custom tool bar in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Custom tool bar 
documentation: ug
domainurl: ##DomainURL##
---

# Custom tool bar in Angular Treegrid component

Custom toolbar items can be added by defining the [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbar) as a collection of [`ItemModels`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel/).
Actions for this customized toolbar items are defined in the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbarclick) event.

By default, Custom toolbar items are in position `Left`. You can change the position by using the [`align`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel/#align) property. In the below sample, we have applied position `Right` for the `Quick Filter` toolbar item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs36/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs36/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs36" %}

> * The [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbar) has options to define both built-in and custom toolbar items.
> * If a toolbar item does not match the built-in items, it will be treated as a custom toolbar item.

## Built-in and custom items in toolbar

TreeGrid have an option to use both built-in and custom toolbar items at same time.

In the below example, `ExpandAll`, `CollapseAll` are built-in toolbar items and `Click` is custom toolbar item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs37/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs37/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs37" %}