---
layout: post
title: Dual list box in Angular List box component | Syncfusion
description: Learn here all about Dual list box in Syncfusion Angular List box component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dual list box 
documentation: ug
domainurl: ##DomainURL##
---

# Dual list box in Angular List box component

The dual list box allows the user to move items between two list boxes by clicking the toolbar buttons. Dual list box can be created by listing items in the [`toolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/list-box/#toolbarsettings) along with the `scope` property.

The following operations can be performed in dual list box,

| Options | Description |
|------|-------------|
| moveUp | Move the selected item in the upward direction within the list box. |
| moveDown | Move the selected item in the downward direction within the list box. |
| moveTo |  Move the selected item to the another list box. |
| moveFrom | Move the selected item from one list box to the another list box. |
| moveAllTo | Move all the items to the another list box. |
| moveAllFrom |  Move all the items from one list box to the another list box. |

The following example illustrates how to move items from `Group A` to `Group B` list box.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listbox/dual-list-box-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listbox/dual-list-box-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listbox/dual-list-box-cs1" %}