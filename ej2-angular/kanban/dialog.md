---
layout: post
title: Dialog Editing in Angular Kanban Component | Syncfusion
description: Learn how to use the dialog module in the Syncfusion Angular Kanban component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dialog 
documentation: ug
domainurl: ##DomainURL##
---

# Dialog in Angular Kanban Component

The Kanban component provides a built-in dialog module for adding, editing, and deleting cards, configured through the [dialogSettings](https://ej2.syncfusion.com/angular/documentation/api/kanban/#dialogsettings) property. User can edit a card using the following ways.

* Built-in dialog module
* Custom Fields
* Dialog template

## Default Dialog

Double-clicking a card opens the dialog with fields mapped from `cardSettings` and `swimlaneSettings` for editing. The dialog includes `Save`, `Delete`, and `Cancel` buttons:

- **Save**: Updates the card with modified details.
- **Delete**: Removes the selected card.
- **Cancel**: Discards changes.

The dialog displays with the following fields which mapped to dialog fields by default.

Key | Type | Text
-----|-----|----
`cardSettings.headerField` | Input | ID
keyField | DropDown | -
`cardSettings.contentField` | TextArea | -
`cardSettings.priority` (If applicable) | Numeric | -
`swimlaneSettings.keyField` (If applicable) | DropDown | -

The following sample demonstrates the default dialog for card editing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/getting-started-key-field-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/getting-started-key-field-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/getting-started-key-field-cs1" %}

## Custom Fields

Customize dialog fields using the `fields` property in `dialogSettings`. The `key` property maps to the `dataSource` value, and the `type` property specifies the component type. Available types include:

* String
* Numeric
* TextArea
* DropDown
* TextBox
* Input

> If `type` is not defined in the fields, then it renders as the HTML input element in dialog.

The following sample demonstrates custom dialog fields.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/custom-dialog-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/custom-dialog-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/custom-dialog-cs1" %}

### Custom Fields label

By default, the fields `key` mapping value is considered as a `label` and you can change this label by using `text` property. The following sample shows custom labels for dialog fields.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/label-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/label-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/label-cs1" %}

### Fields Validation

The dialog fields can be validated while click on the `Save` button. This can be achieved by using `validationRules` property. The following sample demonstrates field validation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/fields-validation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/fields-validation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/fields-validation-cs1" %}

## Dialog Template

Using the dialog template, you can render your own dialog by defining the `template` property. Initialize the template as SCRIPT element Id or HTML string which holds the template and map it to the template property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/dialog-template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/dialog-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/dialog-template-cs1" %}

## Prevent Dialog

Prevent the dialog from opening on card double-click by setting `args.cancel` to `true` in the [dialogOpen](https://ej2.syncfusion.com/angular/documentation/api/kanban/#dialogopen) event. The following sample demonstrates preventing dialog opening.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/prevent-dialog-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/prevent-dialog-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/prevent-dialog-cs1" %}

## Persisting data in server

The modified card data can be persisted in the database using the RESTful web services. All the CRUD operations in the Kanban are done through [DataManager](https://ej2.syncfusion.com/angular/documentation/data/). The `DataManager` has an option to bind all the CRUD related data in server-side.

> For your information, the ODataAdaptor persists data in the server as per OData protocol.

In the below section covers how to get the edited data details on the server-side using the [UrlAdaptor](https://ej2.syncfusion.com/angular/documentation/data/adaptors#url-adaptor).

### URL adaptor

You can use the [UrlAdaptor](https://ej2.syncfusion.com/angular/documentation/data/adaptors#url-adaptor) of `DataManager` when binding datasource for remote data. In the initial load of Kanban, data are fetched from remote data and bound to the Kanban using `url` property of `DataManager`.

You can map the CRUD operation in Kanban can be mapped to server-side controller actions using the properties `insertUrl`, `removeUrl`, `updateUrl`, and `crudUrl`.

* `insertUrl` – You can perform single insertion operation on server-side.
* `updateUrl` – You can update single data on server-side.
* `removeUrl` – You can remove single data on server-side.
* `crudUrl` – You can perform bulk data operation on server-side.

The following code example describes the above behavior.

```typescript
import { Component } from '@angular/core';
import { CardSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-root',
    template: `<ejs-kanban keyField='Status' [dataSource]='dataManager' [cardSettings]='cardSettings'>
                    <e-columns>
                    <e-column headerText='To do' keyField='Open'></e-column>
                    <e-column headerText='In Progress' keyField='InProgress'></e-column>
                    <e-column headerText='Testing' keyField='Testing'></e-column>
                    <e-column headerText='Done' keyField='Close'></e-column>
                    </e-columns>
                </ejs-kanban>`
})
export class AppComponent {
    public cardSettings: CardSettingsModel = {
        contentField: 'Summary',
        headerField: 'Id'
    };
    private dataManager: DataManager = new DataManager({
        url: 'Home/DataSource',
        updateUrl: 'Home/Update',
        insertUrl: 'Home/Insert',
        removeUrl: 'Home/Delete',
        adaptor: new UrlAdaptor(),
        crossDomain: true
    });
}

```

The server-side controller code to handle CRUD operations is as follows.

```typescript

private NORTHWNDEntities db = new NORTHWNDEntities();
public ActionResult DataSource() {
    var DataSource = db.Tasks.ToList();
    return Json(DataSource, JsonRequestBehavior.AllowGet);
}
public ActionResult Insert(Params value) {
    //Insert card data into the database
    return Json(value, JsonRequestBehavior.AllowGet);
}
public ActionResult Update(Params value) {
    //Update card data into the database
    return Json(value, JsonRequestBehavior.AllowGet);
}
public void Delete(Params value) {
    //Delete card data from the database
}

public class Params {
    public int Id { get; set; }
    public string Status { get; set; }
    public string Summary { get; set; }
    public string Assignee { get; set; }
}

```

### Insert card

Using the `insertUrl` property, you can specify the controller action mapping URL to perform insert operation on the server-side.

The following code example describes the above behavior.

```typescript
public ActionResult Insert(Params value)
{
    //Insert card in the database
}

```

The newly added record details are bound to the `value` parameter.

### Update card

Using the `updateUrl` property, the controller action mapping URL can be specified to perform save/update operation on the server-side.

The following code example describes the above behavior.

```typescript
public ActionResult Update(Params value)
{
    //Update card data in the database
}

```

The updated record details are bound to the `value` parameter.

### Delete card

Using the `removeUrl` property, the controller action mapping URL can be specified to perform delete operation on the server-side.

The following code example describes the above behavior.

```typescript
public void Delete(int key)
{
    //Delete card in the database
}

```

The deleted card primary key value is bound to the `key` parameter.

### CRUD URL

Using the `crudUrl` property, the controller action mapping URL can be specified to perform all the CRUD operations at the server-side using a single method instead of specifying a separate controller action method for CRUD (insert, update and delete) operations.

The action parameter of `crudUrl` is used to get the corresponding CRUD action.

The following code example describes the above behavior.

```typescript
import { Component } from '@angular/core';
import { CardSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-root',
    template: `<ejs-kanban keyField='Status' [dataSource]='dataManager' [cardSettings]='cardSettings'>
                    <e-columns>
                    <e-column headerText='To do' keyField='Open'></e-column>
                    <e-column headerText='In Progress' keyField='InProgress'></e-column>
                    <e-column headerText='Testing' keyField='Testing'></e-column>
                    <e-column headerText='Done' keyField='Close'></e-column>
                    </e-columns>
                </ejs-kanban>`
})
export class AppComponent {
    public cardSettings: CardSettingsModel = {
        contentField: 'Summary',
        headerField: 'Id'
    };
    private dataManager: DataManager = new DataManager({
        url: 'Home/DataSource',
        updateUrl: 'Home/UpdateData',
        insertUrl: 'Home/UpdateData',
        removeUrl: 'Home/UpdateData',
        crudUrl: 'Home/UpdateData',
        adaptor: new UrlAdaptor(),
        crossDomain: true
    });
}

```

```typescript

private NORTHWNDEntities db = new NORTHWNDEntities();
public ActionResult DataSource() {
    var DataSource = db.Tasks.ToList();
    return Json(DataSource, JsonRequestBehavior.AllowGet);
}
public ActionResult UpdateData(EditParams param) {
    if (param.action == "insert" || (param.action == "batch" && param.added != null)) {
        if (param.action == "insert") {
            db.Tasks.Add(param.value);
        } else {
            foreach (var temp in param.added) {
                db.Tasks.Add(temp);
            }
        }
    }
    if (param.action == "update" || (param.action == "batch" && param.changed != null)) {
        if (param.action == "update") {
            Task old = db.Tasks.Where(o => o.Id == param.value.Id).SingleOrDefault();
            if (old != null) {
                db.Entry(old).CurrentValues.SetValues(param.value);
            }
        } else {
            foreach (var temp in param.changed) {
                Task old = db.Tasks.Where(o => o.Id == temp.Id).SingleOrDefault();
                if (old != null) {
                    db.Entry(old).CurrentValues.SetValues(temp);
                }
            }
        }
    }
    if (param.action == "remove" || (param.action == "batch" && param.deleted != null)) {
        if (param.action == "remove") {
            int key = Convert.ToInt32(param.key);
            db.Tasks.Remove(db.Tasks.Where(o => o.Id == key).SingleOrDefault());
        } else {
            foreach (var temp in param.deleted) {
                db.Tasks.Remove(db.Tasks.Where(o => o.Id == temp.Id).SingleOrDefault());
            }
        }
    }
    db.SaveChanges();
    return Json(param, JsonRequestBehavior.AllowGet);
}

public class EditParams {
    public string key { get; set; }
    public string action { get; set; }
    public List<Tasks> added { get; set; }
    public List<Tasks> changed { get; set; }
    public List<Tasks> deleted { get; set; }
    public Tasks value { get; set; }
}

```

> The `crudUrl` is used to update the bulk data sent to the server-side. Multiple selections and `sortBy` as `Index` properties are used for `crudUrl` properties to update the modified bulk data to the server-side.
