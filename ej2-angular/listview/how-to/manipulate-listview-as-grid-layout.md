---
layout: post
title: Manipulate ListView as grid layout in Angular ListView component | Syncfusion
description: Learn here all about Manipulate ListView as grid layout in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView
documentation: ug
domainurl: ##DomainURL##
---

# Manipulate ListView as grid layout in Angular ListView component

In ListView, list items can be rendered in grid layout with following data manipulations.

* Add Item

* Remove Item

* Sort Items

* Filter Items

## Grid Layout

In this section, we will discuss about rendering of list items in grid layout.

* Initialize and render ListView with dataSource which will render list items in list layout.

* Now, add the below CSS to list item. This will make list items to render in grid layout

```css
#element .e-list-item {
    height: 100px;
    width: 100px;
    float: left;
}
```

In the below sample, we have rendered List items in grid layout.

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

## Data manipulation

In this section, we will discuss about ListView data manipulations.

### Add Item

We can add list item using [`addItem`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#additem) API. This will accept array of data as argument.

```typescript

this.$refs.listViewInstance.addItem([{text: 'Apricot', id: '32'}]);

```
In the below sample, you can add new fruit item by clicking add button which will open dialog box with fruit name and image URL text box. After entering the item details, click the add button. This will add your new fruit item.

### Remove item

We can remove list item using [`removeItem`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#removeitem) API. This will accept fields with `id` or list item element as argument.

```typescript

 this.$refs.listViewInstance.removeItem({id: '32'});

```

In the below sample, you can remove fruit by hovering the fruit item which will show delete button and click that delete button to delete that fruit from your list.

### Sort Items

ListView can be sorted either in Ascending or Descending order. To enable sorting in your ListView, set [`sortOrder`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#sortorder) as `Ascending` or `Descending`.

```typescript

<ejs-listview sortOrder='Ascending'></ejs-listview>

```

We can also set sorting after component initialization.

```typescript

this.listViewInstance.sortOrder = 'Ascending'

```

In the below sample, we have sorted fruits in `Ascending` order. To sort it in descending, click on sort order icon and vice versa.

### Filter Items

ListView data can be filtered with the help of [`dataManager`](https://ej2.syncfusion.com/angular/documentation/data/getting-started). After filtering the data, update ListView [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#datasource) with filtered data.

```typescript

let value = this.textboxEle.nativeElement.value;  //input text box value
let filteredData = new DataManager(this.listdata).executeLocal(
        new Query().where("text", "startswith", value, true)
);

listViewInstance.dataSource = filteredData;

```

In the below sample, we can filter fruit items with the help of search text box. This will filter fruit items based on your input. Here we used `startswith` of input text to filter data in DataManager.

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
