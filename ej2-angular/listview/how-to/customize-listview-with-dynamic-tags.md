---
layout: post
title: Dynamic tags in Angular ListView | Syncfusion
description: Learn here all about Customize ListView with dynamic tags in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView
documentation: ug
domainurl: ##DomainURL##
---

# Customize ListView with dynamic tags in Angular ListView component

The ListView component can be customized to display items with dynamic tags using the [`template`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#template) property. This implementation allows users to add and remove tags dynamically from list items through interaction with a secondary ListView rendered within a Dialog component.

## Implementation approach

The dynamic tag functionality requires coordination between a parent ListView, a Dialog component, and a secondary ListView that serves as a tag selector. The following steps outline the complete implementation:

* Initialize a dynamic ListView with the required properties to hold available tags for the parent ListView items. Bind the [`select`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#select) event handler to capture user selections and add the chosen values as tags to the corresponding parent ListView item.

    ```typescript

    //Select event handler for the tag selector ListView rendered within the dialog
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

* Configure the Dialog component with appropriate content and append the dynamically created ListView to the dialog during the [`created`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#created) event. This ensures the tag selector ListView is properly initialized when the dialog becomes available.

* Implement click event handling for the add button icon (+) to update the ListView data source with available tags and display the dialog containing the dynamic ListView selector. This method manages both the data binding and dialog visibility states.

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

* Bind click event handlers to dynamically added tags to enable removal functionality. This allows users to delete tags after they have been added to ListView items.

    ```typescript

    //Method to remove individual tag elements from list items
    removeTag() {
        this.parentNode.parentNode.remove();
    }

    ```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/dynamic-tag-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/dynamic-tag-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/dynamic-tag-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/dynamic-tag-cs2" %}