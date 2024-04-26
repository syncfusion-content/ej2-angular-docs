---
layout: post
title: Create dual list from listview in Angular Listview component | Syncfusion
description: Learn here all about Create dual list from listview in Syncfusion Angular Listview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Create dual list from listview 
documentation: ug
domainurl: ##DomainURL##
---

# Create dual list from listview in Angular Listview component

The dual list contains two ListView. This allows you to move list items from one list to another using the client-side
events. This section explains how to integrate the ListView component to achieve dual list.

## Use cases

* Stock exchanges of two different countries
* Job applications (skill sets)

## Integration of Dual List

Here, two ListView components have been used to display the list items. An ej2-button is used to transfer data between
the ListView, and a textbox is used to achieve the UI of filtering support.

The dual list supports:

* Moving whole data from one list to another.
* Moving selected data from one list to another.
* Filtering the list by using a client-side typed character.

In the ListView component, sorting is enabled using the
[sortOrder](https://ej2.syncfusion.com/angular/documentation/api/list-view/#sortorder) property, and
the [select](https://ej2.syncfusion.com/angular/documentation/api/list-view/#select) event is triggered
while selecting an item. Here, the select event is triggered to enable and disable button states.

## Manipulating data

## Moving whole data from the first list to the second list(>>)

* Here, the whole data can be moved from the first ListView to the second by clicking the first button. When clicking the button,
the whole list items are sliced, and `concat` with the second ListView. This button is enabled only when the data source
of the first ListView is not empty.

## Moving whole data from the second list to the first list(<<)

* The functionality of the second button is the same as above, and data is transferred from the second list to the first
list. This button is enabled only when the data source of the second ListView is not empty.

## Moving selected item from one list to another list (>) and (<)

* The [Select](https://ej2.syncfusion.com/angular/documentation/api/list-view/#select) event is triggered
when selecting a list item in the ListView. The selected items can be transferred between two lists. These buttons will be
enabled when selecting an item in lists.

## Filtering method

* The filtering method is used to filter list items when typing a character in the text box. In this
method, the [`dataManager`](https://ej2.syncfusion.com/angular/documentation/data/getting-started) has been
used to fetch data from the data source and display in ListView.

## Sorting

* By using the dual list, list items can be sorted in the ListView component using the
[sortOrder](https://ej2.syncfusion.com/angular/documentation/api/list-view/#sortorder) property.
You can enable sorting in one ListView; in the same order, data can be transferred to another ListView.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/dual-list-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/dual-list-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/dual-list-cs2" %}
