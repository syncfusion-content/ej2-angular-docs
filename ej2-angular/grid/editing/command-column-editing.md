---
layout: post
title: Command column editing in Angular Grid component | Syncfusion
description: Learn here all about Command column editing in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Command column editing 
documentation: ug
domainurl: ##DomainURL##
---

# Command column editing in Angular Grid component

The command column editing feature allows you to add CRUD (Create, Read, Update, Delete) action buttons in a column for performing operations on individual rows.This feature is commonly used when you need to enable inline editing, deletion, or saving of row changes directly within the grid. 

To enable command column editing, you can utilize the [column.commands](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#commands) property. By defining this property, you can specify the command buttons to be displayed in the command column, such as Edit, Delete, Save, and Cancel.

To utilize CRUD operations, you need to inject the **CommandColumnService** module into the **@NgModule.providers** section. This service provides the necessary functionalities for handling the command column actions.

The available built-in command buttons are: 

| Command Button | Actions |
|----------------|---------|
| Edit | Edit the current row.|
| Delete | Delete the current row.|
| Save | Update the edited row.|
| Cancel | Cancel the edited state. |

Here's an example that demonstrates how to add CRUD action buttons in a column using the `command` column property : 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/command-column-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/command-column-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/command-column-cs1" %}

## Custom command column

The custom command column feature in the Grid component allows you to add custom command buttons in a column to perform specific actions on individual rows. This feature is particularly useful when you need to provide customized functionality for editing, deleting, or performing any other operation on a row.

To add custom command buttons in a column, you can utilize the [column.commands](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#commands) property. Furthermore, you can define the actions associated with these custom buttons using the [commandClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#commandClick) event.

Here's an example that demonstrates how to add custom command buttons using the `commands` property and customize the button click behavior to display grid details in a dialog using the `commandClick` event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, EditService, CommandColumnService } from '@syncfusion/ej2-angular-grids'
import { DialogModule } from '@syncfusion/ej2-angular-popups'
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { CommandModel, CommandClickEventArgs, GridComponent, Column, IRow, EditSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        DialogModule
    ],

providers: [EditService, CommandColumnService],
standalone: true,
  selector: 'app-root',
  template: `
        <ejs-grid #grid [dataSource]="data" [editSettings]="editSettings" (commandClick)="commandClick($event)" height="310px">
        <e-columns>
            <e-column field="OrderID" headerText="Order ID" textAlign="Right" isPrimaryKey="true" width="100"></e-column>
            <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
            <e-column field="Freight" headerText="Freight" textAlign="Right" editType="numericedit" width="120" format="C2"></e-column>
            <e-column field="ShipCountry" headerText="Ship Country" editType="dropdownedit" width="150"></e-column>
            <e-column headerText="Commands" width="140" [commands]="commands"></e-column>
        </e-columns>
        </ejs-grid>
        <ejs-dialog #dialog header="Row Information" [content]="dialogContent" showCloseIcon="true"
            width="400px" [visible]="dialogVisible" (close)="dialogClose()">
            <ng-template #dialogContent>
                <ng-container *ngIf="rowData">
                    <p><b>ShipName:</b> {{ rowData.ShipName }}</p>
                    <p><b>ShipPostalCode:</b> {{ rowData.ShipPostalCode }}</p>
                    <p><b>ShipAddress:</b> {{ rowData.ShipAddress }}</p>
                </ng-container>
            </ng-template>
        </ejs-dialog>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public commands?: CommandModel[];
    @ViewChild('grid') public grid?: GridComponent;
    public rowData: any;
    public dialogVisible: boolean = false;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowDeleting: true };
        this.commands = [{ buttonOption: { content: 'Details', cssClass: 'e-flat' } }];
    }
    public commandClick(args: CommandClickEventArgs): void {
        this.rowData = args.rowData;
        if (this.rowData) {
            this.dialogVisible = true;
        }
    }
    public dialogClose(): void {
        this.dialogVisible = false;
    }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/command-column-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/command-column-cs2" %}
