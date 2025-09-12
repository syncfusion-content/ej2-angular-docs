---
layout: post
title: Customize Angular ListView as grid layout | Syncfusion
description: Learn here all about Manipulate ListView as grid layout in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView
documentation: ug
domainurl: ##DomainURL##
---

# Manipulate ListView as grid layout in Angular ListView component

The ListView component can display items in a grid layout with support for data manipulations such as adding, removing, sorting, and filtering items.

## Grid Layout

To render list items in a grid layout:

1. Initialize the ListView with a dataSource
2. Apply the following CSS to transform the list items into a grid layout:

```css
#element .e-list-item {
    height: 100px;
    width: 100px;
    float: left;
}
```

Here's a basic example of ListView with grid layout:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/grid-layout-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/grid-layout-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/grid-layout-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/grid-layout-cs2" %}

## Data Manipulation

The ListView component supports various data manipulation operations to manage list items effectively.

### Add Item

Use the [`addItem`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#additem) method to add new items to the ListView. The method accepts an array of items as its argument.

```typescript

this.$refs.listViewInstance.addItem([{text: 'Apricot', id: '32'}]);

```

### Remove Item

To remove items, use the [`removeItem`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#removeitem) method. Pass either the item object with an id or the list item element as the argument.

```typescript

 this.$refs.listViewInstance.removeItem({id: '32'});

```

### Sort Items

Enable sorting by setting the [`sortOrder`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#sortorder) property to either 'Ascending' or 'Descending'.

```typescript
// In template
<ejs-listview [sortOrder]="'Ascending'" [dataSource]="data"></ejs-listview>

// In component
this.listViewInstance.sortOrder = 'Ascending'

```

### Filter Items

ListView data can be filtered with the help of [`dataManager`](https://ej2.syncfusion.com/angular/documentation/data/getting-started). After filtering the data, update ListView [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#datasource) with filtered data.

```typescript

let value = this.textboxEle.nativeElement.value;  //input text box value
let filteredData = new DataManager(this.listdata).executeLocal(
        new Query().where("text", "startswith", value, true)
);

listViewInstance.dataSource = filteredData;

```

The following example demonstrates all these data manipulation features:
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/grid-manipulation-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/grid-manipulation-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/grid-manipulation-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/grid-manipulation-cs2" %}