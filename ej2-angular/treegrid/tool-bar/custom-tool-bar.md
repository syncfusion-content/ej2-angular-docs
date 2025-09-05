---
layout: post
title: Custom tool bar in Angular TreeGrid component | Syncfusion
description: Learn how to add and configure custom toolbars in the Syncfusion Angular TreeGrid component, including event handling, alignment, and mixing with built-in items.
platform: ej2-angular
control: Custom tool bar
documentation: ug
domainurl: ##DomainURL##
---

# Custom tool bar in Angular TreeGrid component

Custom toolbar items can be added to the TreeGrid by defining the [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbar) property as a collection of [`ItemModels`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel/).
Actions for these custom toolbar items are defined in the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbarclick) event.

By default, custom toolbar items are positioned on the `left`. You can change the position of a toolbar item using the [`align`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel/#align) property. In the sample below, the `Quick Filter` toolbar item is positioned on the `right`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs36/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs36/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs36" %}

> * The [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#toolbar) property can include both built-in and custom items.
> * If a toolbar item does not match a built-in item, it is treated as a custom toolbar item.

## Built-in and custom items in toolbar

The TreeGrid allows using both built-in and custom toolbar items together.

In the example below, `ExpandAll` and `CollapseAll` are built-in toolbar items, while `Click` is a custom toolbar item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs37/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs37/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs37" %}