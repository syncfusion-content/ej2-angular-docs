---
layout: post
title: How to in Angular Listview component | Syncfusion
description: Learn here all about How to in Syncfusion Angular Listview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: How to 
documentation: ug
domainurl: ##DomainURL##
---

# How to in Angular Listview component

## Get selected items in the ListView component

Single or many items can be selected by users in the ListView component. An API is used to get selected items from the list items. This is called as the [`getSelectedItems`](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#getselecteditems) method.

**`getSelectedItems` method**

This is used to get the details of the currently selected item from the list items. It returns the [`SelectedItem`](https://ej2.syncfusion.com/angular/documentation/listview/api-selectedItem) | [`SelectedCollection`](https://ej2.syncfusion.com/angular/documentation/listview/api-selectedCollection)

The `getSelectedItems` method returns the following items from the selected list items.

| Return type | Purpose |
|------------|-------------------|
| text | Returns the text of selected item lists |
| data | Returns the whole data of selected list items, i.e., returns the fields data of selected li.|
| item | Returns the collections of list items |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/checklist-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/checklist-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/checklist-cs3" %}

## Use dynamic templates of ListView based on device

The Syncfusion Essential JS2 components are desktop and mobile-friendly. So, you can use Syncfusion components in both modes. The component templates are not always fixed. Applications may need to load various templates depending upon the device.

### Integration

In the ListView component, template support is being used. In some cases, the component wrapper is always responsive across all devices, but the template contents are dynamically changed with unspecified (sample side) dimensions. CSS customization is also needed in sample-side to align template content responsively in both mobile and desktop modes. Here, two templates have been loaded for mobile and desktop modes. To check the device mode, a [browser module](https://ej2.syncfusion.com/documentation/base/?lang=typescript) has been imported from the [ej2-base](https://ej2.syncfusion.com/documentation/base/api.html?lang=typescript) package.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/dynamic-template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/dynamic-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/dynamic-template-cs1" %}

## Load list items in child list dynamically

To load list items in child list dynamically, push the new list item data into the existing [`dataSource`](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#datasource) using the [`select`](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#select) event.

Refer to the following steps to load list item into the child list:

1. Initially, render the ListView with the required data source.

2. Bind the [`select`](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#select) event that triggers selecting list item in the ListView component. By using the select event, you can push the new list item to the child list of the data source on specifying its item index. Item index can be obtained from the [`SelectEventArgs`](https://ej2.syncfusion.com/angular/documentation/listview/api-selectEventArgs.html) of the select event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/checklist-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/checklist-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/checklist-cs4" %}

## List Items Count in Group Header

The ListView component supports wrapping list items into a group based on the category. The category of each list item can be mapped with groupBy field of the data source. You can display grouped list items count in the list-header using the group header template. Refer to the following code sample to display grouped list item count.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/item-count-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/item-count-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/item-count-cs2" %}

## Customize ListView as mobile contact layout

You can customize the ListView using the [template](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#template) property. Refer to the following steps to customize ListView as mobile contact view with our `ej2-avatar`.

* Render the ListView with [dataSource](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#datasource) that has avatar data. You can set avatar data as either text or class names. Refer to the following codes.

```typescript

let data: any = [
    {
    text: "Jenifer",
    contact: "(206) 555-985774",
    id: "1",
    avatar: "",
    pic: "pic01"
  },
  { text: "Amenda", contact: "(206) 555-3412", id: "2", avatar: "A", pic: "" },
];

```

* Set `avatar` classes in ListView template to customize contact icon. In the following codes, medium size avatar has been set using the class name `e-avatar e-avatar-circle` from data source.

{% raw %}

```typescript
  <ng-template #template let-data="">
                <div class="e-list-wrapper e-list-multi-line e-list-avatar">
                    <span class="e-avatar e-avatar-circle" *ngIf="data.avatar !== ''">{{data.avatar}}</span>
                    <span class="{{data.pic}} e-avatar e-avatar-circle" *ngIf="data.pic !== '' "> </span>
                    <span class="e-list-item-header">{{data.text}}</span>
                    <span class="e-list-content">{{data.contact}}</span>
                </div>
    </ng-template>
```

{% endraw %}

> Avatars can be set in different sizes in avatar classes. To know more about avatar classes, refer to [Avatar](https://ej2.syncfusion.com/demos/#/material/avatar/default.html).

* Sort the contact names using the [`sortOder`](https://ej2.syncfusion.com/angular/documentation/listview/api-listview#sortorder) property of ListView.
* Enable the [`showHeader`](https://ej2.syncfusion.com/angular/documentation/listview/api-listview#showheader) property, and set the [`headerTitle`](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#headertitle) as `Contacts`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/avatar-template-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/avatar-template-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/avatar-template-cs2" %}

## Filter list items in the ListView component

The filtered data can be displayed in the ListView component depending upon on user inputs using the [`DataManager`](https://ej2.syncfusion.com/angular/documentation/data/getting-started.html). Refer to the following steps to render the ListView with filtered data.

* Render a textbox to get input for filtering data.

* Render ListView with [`dataSource`](https://ej2.syncfusion.com/angular/documentation/listview/api-listview/#datasource), and set the [`sortOrder`](https://ej2.syncfusion.com/angular/documentation/listview/api-listview/#sortorder) property.

* Bind the `keyup` event for textbox to perform filtering operation. To filter list data, pass the list data source to the `DataManager`, manipulate the data using the [`executeLocal`](https://ej2.syncfusion.com/documentation/data/api-datamanager/#executelocal) method, and then update filtered data as ListView dataSource.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/getting-started-cs2" %}

> In this demo, data has been filtered with starting character of the list items. You can also filter list items with ending character by passing the `endswith` in [where](https://ej2.syncfusion.com/documentation/data/api-query/#where) clause instead of `startswith`.

## Trace all events in ListView

The ListView component triggers events based on its actions. The events can be used as extension points to perform custom operations. Refer to the following steps to trace the ListView events:

1. Render the ListView with [dataSource](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#datasource), and bind the [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#actionbegin), [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#actioncomplete), and [`select`](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#select) events.

2. Perform custom operations in `actionBegin`, `actionComplete`, and select events.

3. Provide event log details for `actionBegin` and `actionComplete` events, and they will be displayed in the event trace panel when the ListView action starts and the dataSource bound successfully.

4. Get the selected item details from the [`SelectEventArgs`](https://ej2.syncfusion.com/angular/documentation/listview/api-selectEventArgs) in the select event, and display the selected list item text in the event trace panel while selecting list items.

5. Use clear button to remove event trace information.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/getting-started-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/getting-started-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/getting-started-cs3" %}

## Load the spinner until list items are loaded

The features of the ListView component such as remote data-binding take more time to fetch data from corresponding dataSource/remote URL. In this case, you can use EJ2 [Spinner](https://ej2.syncfusion.com/angular/documentation/spinner/) to enhance the appearance of the UI. This section explains how to load a spinner component to groom the appearance.

Refer to the following code sample to render the spinner component.

```typescript
    createSpinner({
        target: this.spinnerEle.nativeElement
    });
    showSpinner(this.spinnerEle.nativeElement);
```

Refer to the following code sample to render the ListView component.

```typescript
let listviewInstance: ListView = new ListView({
    //Bind the DataManager instance to the dataSource property
    dataSource= new DataManager({
        url: '//js.syncfusion.com/ejServices/Wcf/Northwind.svc/',
        crossDomain: true
    }),

    //Bind the Query instance to the query property
    query= new Query().from('Products').select('ProductID,ProductName').take(10),

    //Map the appropriate columns to the fields property
    fields= { id: 'ProductID', text: 'ProductName' },

});

//Render the initialized ListView
listviewInstance.appendTo("#element");
```

Here, the data is fetched from `Northwind` Service URL; it takes a few seconds to load the data. To enhance the UI, the spinner component has been rendered initially. After the data is loaded from remote URL, the spinner component will be hidden in ListView [actionComplete](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#actioncomplete) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/getting-started-cs4" %}

## Add and remove list items from the ListView component

You can add or remove list items from the ListView component using the [`addItem`](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#additem) and [`removeItem`](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#removeitem) methods.
Refer to the following steps to add or remove a list item.

* Render the ListView with data source, and use the [template](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#template) property to append the delete icon for each list item. Also, bind the click event for the delete icon using the
[actionComplete](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#actioncomplete) handler.

* Render the Add Item button, and bind the click event. On the click event handler, pass data with random id to the [`addItem`](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#additem) method to add a new list item on clicking the Add Item button.

* Bind the click handler to the delete icon created in step 1. Within the click event, remove the list item by passing the delete icon list item to [`removeItem`](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#removeitem) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/addItem-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/addItem-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/addItem-cs1" %}

## Customize dual list

The dual list contains two ListView. This allows you to move list items from one list to another using the client-side events. This section explains how to integrate the ListView component to achieve dual list.

### Use cases

* Stock exchanges of two different countries
* Job applications (skill sets)

### Integration of Dual List

Here, two ListView components have been used to display the list items. An ej2-button is used to transfer data between the ListView, and a textbox is used to achieve the UI of filtering support.

The dual list supports:

* Moving whole data from one list to another.
* Moving selected data from one list to another.
* Filtering the list by using a client-side typed character.

In the ListView component, sorting is enabled using the
[sortOrder](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#sortorder) property, and
the [select](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#select) event is triggered
while selecting an item. Here, the select event is triggered to enable and disable button states.

### Manipulating data

### Moving whole data from the first list to the second list(>>)

* Here, the whole data can be moved from the first ListView to the second by clicking the first button. When clicking the button, the whole list items are sliced, and `concat` with the second ListView. This button is enabled only when the data source
of the first ListView is not empty.

### Moving whole data from the second list to the first list(<<)

* The functionality of the second button is the same as above, and data is transferred from the second list to the first list. This button is enabled only when the data source of the second ListView is not empty.

### Moving selected item from one list to another list (>) and (<)

* The [Select](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#select) event is triggered when selecting a list item in the ListView. The selected items can be transferred between two lists. These buttons will be enabled when selecting an item in lists.

### Filtering method

* The filtering method is used to filter list items when typing a character in the text box. In this method, the [`dataManager`](https://ej2.syncfusion.com/angular/documentation/data/getting-started) has been used to fetch data from the data source and display in ListView.

### Sorting

* By using the dual list, list items can be sorted in the ListView component using the
[sortOrder](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#sortorder) property.
You can enable sorting in one ListView; in the same order, data can be transferred to another ListView.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/dual-list-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/dual-list-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/dual-list-cs1" %}

## Hide checkbox in listview

The checkbox of the any list item can be hidden by using [`htmlAttributes`](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#htmlattributes) of
[`fields`](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#fields) object. With the help of `htmlAttributes` we can add unique class to each list item that will be rendered from the data source, from the CSS class we can hide the checkbox of the list item.

In this sample, we had hidden the multiple leaf node of nested list. The `e-checkbox-hidden` class has been added in the data source where the checkbox needs to be hidden. Refer the below snippet for simple data source.

```typescript
    {
        'text': 'New York',
        'id': '3002',
        'category': 'USA',
        'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' }
    }
```

Even though we have hidden the checkbox the functionality will be same for the list item which might affect the `getSelectedItems` method. So, to counteract that we will follow certain logic in the `select` event. The Logic here is to remove the `e-active` class from the other checkbox hidden list item which will be added when we select on that item and retain `e-active` on currently selected item.

> In this process we will exclude the visible checkbox list items and only consider the hidden checkbox items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/hide-checkbox-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/hide-checkbox-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/hide-checkbox-cs1" %}

## Customize ListView with dynamic tags

You can customize the ListView items using the [`template`](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#template) property. Here, the dynamic tags are added and removed in the list item from another ListView. Refer to the following steps to achieve this.

* Initialize dynamic ListView with required property that holds the tags of parent ListView, and bind the [`select`](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#select) event (triggers when the list item is selected), in which you can get and add the selected item value as tags into parent ListView. Refer to the following code sample.

```typescript

//Select the event that is is rendered inside dialog for ListView
addTag(e) {
    let listTag = document.createElement('span');
    listTag.className = 'advanced-option';
    let labelElem = document.createElement('span');
    labelElem.className = 'label';
    let deleteElem = document.createElement('span');
    deleteElem.className = 'delete';
    deleteElem.onclick = this.removeTag;
    labelElem.innerHTML = e.text;
    listTag.appendChild(labelElem);
    listTag.appendChild(deleteElem);
    let tag = document.createElement('span');
    tag.className = 'advanced-option-list';
    tag.appendChild(listTag);
    this.listviewInstance.element.querySelector('.e-active').appendChild(tag);
}

```

* Render the dialog component with empty content and append the created dynamic ListView object to the dialog on [`created`](https://ej2.syncfusion.com/angular/documentation/dialog/api-dialog/#created) event.

* Bind the click event for button icon (+) to update the ListView data source with tags, and open the dialog with this dynamic ListView. Refer to the following code sample.

```typescript

//Method to hide/show the dialog and update the ListView data source
renderDialog(id) {
    if (document.getElementsByClassName('e-popup-open').length != 0) {
        this.dialog.hide();
    }
    else {
        this.listObj.dataSource = this.datasource[id];
        this.listObj.dataBind();
        this.dialog.show();
    }

}

```

* Bind the click event with added dynamic tags to remove it. Refer to the following code sample.

```typescript

//Method to remove the list item
removeTag() {
    this.parentNode.parentNode.remove();
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/dynamic-tag-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/dynamic-tag-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/dynamic-tag-cs1" %}

## ListView manipulation in grid layout

In Listview, list items can be rendered in grid layout with following data manipulations.

* Add Item

* Remove Item

* Sort Items

* Filter Items

### Grid Layout

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
{% include code-snippet/listview/grid-layout-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/grid-layout-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/grid-layout-cs1" %}

### Data manipulation

In this section, we will discuss about ListView data manipulations.

#### Add Item

We can add list item using [`addItem`](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#additem) API. This will accept array of data as argument.

```typescript

 this.$refs.listViewInstance.addItem([{text: 'Apricot', id: '32'}]);

```

In the below sample, you can add new fruit item by clicking add button which will open dialog box with fruit name and image URL text box. After entering the item details, click the add button. This will add your new fruit item.

#### Remove item

We can remove list item using [`removeItem`](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#removeitem) API. This will accept fields with `id` or list item element as argument.

```typescript

 this.$refs.listViewInstance.removeItem({id: '32'});

```

In the below sample, you can remove fruit by hovering the fruit item which will show delete button and click that delete button to delete that fruit from your list.

#### Sort Items

Listview can be sorted either in Ascending or Descending order. To enable sorting in your ListView, set [`sortOrder`](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#sortorder) as `Ascending` or `Descending`.

```typescript

<ejs-listview sortOrder='Ascending'></ejs-listview>

```

We can also set sorting after component initialization.

```typescript

this.listViewInstance.sortOrder = 'Ascending'

```

In the below sample, we have sorted fruits in `Ascending` order. To sort it in descending, click on sort order icon and vice versa.

#### Filter Items

Listview data can be filtered with the help of [`dataManager`](https://ej2.syncfusion.com/angular/documentation/data/getting-started). After filtering the data, update ListView [`dataSource`](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#datasource) with filtered data.

```typescript

let value = this.textboxEle.nativeElement.value;  //input text box value
let filteredData = new DataManager(this.listdata).executeLocal(
        new Query().where("text", "startswith", value, true)
);

listViewInstance.dataSource = filteredData;

```

In the below sample, we can filter fruit items with the help of search text box. This will filter fruit items based on your input. Here we used [`startswith`](https://ej2.syncfusion.com/angular/documentation/data/querying/#filter-operators) of input text to filter data in DataManager.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/grid-manipulation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/grid-manipulation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/grid-manipulation-cs1" %}

## ListView with hyper-link navigation

We can use `anchor` tag along with `href` attribute in our ListView [`template`](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#template) property for navigation.

{% raw %}

```typescript

<ng-template #template let-data="">
   <a target='_blank' href="{{data.url}}">{{data.name}}</a>
</ng-template>

```

{% endraw %}

In the below sample, we have rendered `ListView` with search engines URL.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/navigation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/navigation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/navigation-cs1" %}

## Load HTML content via AJAX

We can set external `HTML` page content as [`template`](https://ej2.syncfusion.com/vue/documentation/listview/api-listView/#template) for our `ListView` component by making use of `AJAX` call.

```typescript

let ajax = new Ajax('./template.html', 'GET', false);
    ajax.onSuccess = (e)=>{
        this.listtemplate = e;
    };
    ajax.send();

```

In the below sample, we have rendered smartphone settings template from external `HTML` file.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/ajax-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/ajax-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/ajax-cs1" %}

## ListView with Drag and Drop feature (Reorder)

In ListView component, we don't have drag and drop support. But we can achieve this requirement using [`TreeView`](https://ej2.syncfusion.com/angular/documentation/treeview/getting-started) component with ListView appearance.

Drag and Drop in TreeView component was enabled by setting [`allowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/treeview/api-treeView/#allowdraganddrop) to `true`.

```typescript

<ejs-treeview id='element' [fields]='fields' allowDragAndDrop='true'></ejs-treeview>

```

The TreeView component is used to represent hierarchical data in a tree like structure. So, list items in TreeView can be dropped to child of target element. we can prevent this behaviour by cancelling the [`nodeDragStop`](https://ej2.syncfusion.com/angular/documentation/treeview/api-treeView/#nodedragstop) and [`nodeDragging`](https://ej2.syncfusion.com/angular/documentation/treeview/api-treeView/#nodedragging) events.

```typescript

<ejs-treeview id='element' [fields]='fields' allowDragAndDrop='true' (nodeDragging)='onDragStop($event)' (nodeDragStop)='onDragStop($event)'></ejs-treeview>

fields= { dataSource: this.data, id: 'id', text: 'text' },

onDragStop(args) {
    //Block the Child Drop operation in TreeView
   let  draggingItem = document.getElementsByClassName("e-drop-in");
    if (draggingItem.length == 1) {
        draggingItem[0].classList.add('e-no-drop');
        args.cancel = true;
    }
}

```

In the below sample, we have rendered draggable list items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/reorder-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/reorder-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/reorder-cs1" %}

## Customize ListView as Chat Window

ListView can be customizable as chat window. To achieve that, use ListView [template](https://ej2.syncfusion.com/angular/documentation/listview/api-listView/#template) property and [Avatar](https://ej2.syncfusion.com/angular/documentation/avatar/getting-started.html) component.

    * Listview template property is used to showcase the ListView as chat window.
    * Avatar component is used to design the image of contact person.

Refer the below template code snippet for Template of chat window.

{% raw %}

```typescript
        <ng-template #template let-data="">
            <div class="settings" *ngIf="data.chat!='receiver' then senderTemplate else receiverTemplate "></div>
            <ng-template #senderTemplate>
                <div id="content">
                    <div class="name">{{data.text}}</div>
                    <div id="info">{{data.contact}}</div>
                </div>
                <div id="image" *ngIf="data.avatar!=''"><span class="e-avatar img1 e-avatar-circle">{{data.avatar}}</span></div>
                <div id="image" *ngIf="data.avatar==''"><span class="{{data.pic}} img1 e-avatar e-avatar-circle"> </span></div>
            </ng-template>

            <ng-template #receiverTemplate>
                <div id="image2" *ngIf="data.avatar!=''"><span class="e-avatar img2 e-avatar-circle">{{data.avatar}}</span></div>
                <div id="image2" *ngIf="data.avatar==''"><span class="{{data.pic}} img2 e-avatar e-avatar-circle"> </span></div>
                <div id="content1">
                    <div class="name1">{{data.text}}</div>
                    <div id="info1">{{data.contact}}</div>
                </div>
            </ng-template>
        </ng-template>
```

{% endraw %}

### Chat order in template

In ListView template, we have rendered the list items based on receiver and sender information from dataSource of listview.

### Adding messages to chat window

    * Use textbox to get message from user.
    * Add the textbox message to ListView dataSource using [addItem](https://ej2.syncfusion.com/documentation/angular/listview/api-listView/#additem) method.

```typescript

public btnClick() {
    let value = this.textboxEle.nativeElement.value;
    this.listObj.addItem([{ text: "Amenda", contact: value, id: "2", avatar: "A", pic: "", chat: "receiver" }]);
    this.textboxEle.nativeElement.value = "";
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/chat-window-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/chat-window-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/chat-window-cs1" %}