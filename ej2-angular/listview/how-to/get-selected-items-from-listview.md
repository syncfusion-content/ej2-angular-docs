---
layout: post
title: Get selected items from ListView in Angular ListView component | Syncfusion
description: Learn here all about Get selected items from ListView in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView 
documentation: ug
domainurl: ##DomainURL##
---

# Get selected items from ListView in Angular ListView component

Single or many items can be selected by users in the ListView component. An API is used to get selected items from the list items. This is called as the [`getSelectedItems`](https://ej2.syncfusion.com/angular/documentation/api/listview/#getselecteditems) method.

**`getSelectedItems` method**

This is used to get the details of the currently selected item from the list items. It returns the [`SelectedItem`](https://ej2.syncfusion.com/angular/documentation/api/list-view/selectedItem) | [`SelectedCollection`](https://ej2.syncfusion.com/angular/documentation/api/list-view/selectedCollection)

The `getSelectedItems` method returns the following items from the selected list items.

| Return type | Purpose |
|------------|-------------------|
| text | Returns the text of selected item lists |
| data | Returns the whole data of selected list items, i.e., returns the fields data of selected li.|
| item | Returns the collections of list items |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/checklist-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/checklist-cs5/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/checklist-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/checklist-cs5" %}
