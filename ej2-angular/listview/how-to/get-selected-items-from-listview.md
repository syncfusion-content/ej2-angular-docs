---
layout: post
title: Get selected items in Angular ListView component | Syncfusion
description: Learn here all about Get selected items from ListView in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView 
documentation: ug
domainurl: ##DomainURL##
---

# Get selected items from ListView in Angular ListView component

Users can select single or multiple items in the ListView component. The [`getSelectedItems`](https://ej2.syncfusion.com/angular/documentation/api/listview/#getselecteditems) method is used to retrieve the selected items from the ListView.

**`getSelectedItems` method**

This method retrieves details of the currently selected items from the ListView. It returns either a [`SelectedItem`](https://ej2.syncfusion.com/angular/documentation/api/list-view/selectedItem/) or a [`SelectedCollection`](https://ej2.syncfusion.com/angular/documentation/api/list-view/selectedCollection/), depending on the selection mode.

The `getSelectedItems` method provides the following properties for the selected items:

| Return type | Purpose |
|-------------|-------------------------------------------------------------|
| text        | Returns the text of the selected list items.                |
| data        | Returns the complete data object of the selected list items, including all mapped fields. |
| item        | Returns the collection of selected list item elements.      |

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
