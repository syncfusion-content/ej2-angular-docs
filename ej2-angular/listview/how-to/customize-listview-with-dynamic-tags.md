---
layout: post
title: Customize listview with dynamic tags in Angular Listview component | Syncfusion
description: Learn here all about Customize listview with dynamic tags in Syncfusion Angular Listview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize listview with dynamic tags 
documentation: ug
domainurl: ##DomainURL##
---

# Customize listview with dynamic tags in Angular Listview component

You can customize the ListView items using the [`template`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#template) property. Here, the dynamic tags are added and removed in the list item from another ListView. Refer to the following steps to achieve this.

* Initialize dynamic ListView with required property that holds the tags of parent ListView, and bind the [`select`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#select) event (triggers when the list item is selected), in which you can get and add the selected item value as tags into parent ListView. Refer to the following code sample.

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

* Render the dialog component with empty content and append the created dynamic ListView object to the dialog on [`created`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#created) event.

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
{% include code-snippet/listview/dynamic-tag-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/listview/dynamic-tag-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/dynamic-tag-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/dynamic-tag-cs2" %}
