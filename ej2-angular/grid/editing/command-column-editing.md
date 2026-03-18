---
layout: post
title: Angular Grid - Command Column Editing | Syncfusion
description: Angular Grid command column enables edit, save, and delete actions with customizable templates and event handling for flexible data operations.
platform: ej2-angular
control: Command column editing 
documentation: ug
domainurl: ##DomainURL##
---

# Command Column Editing in Angular Grid Component

The command column editing feature enables the addition of CRUD (Create, Read, Update, Delete) action buttons within a dedicated column, allowing users to perform operations on individual rows. This approach streamlines inline editing, deletion, and saving of changes directly within the grid interface.

## Enable command column editing

Command column editing is activated through the [commands](https://ej2.syncfusion.com/angular/documentation/api/grid/column#commands) property. This property specifies which command buttons display in the command column, such as `Edit`, `Delete`, `Save`, and `Cancel`.

To enable command column functionality, include the `CommandColumnService` module into the component's providers array. This service supports the required logic for handling command column actions.

```ts
import { Component } from '@angular/core';
import { GridComponent, EditService, CommandColumnService } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  template: `<ejs-grid [dataSource]='data'>
    <!-- Grid configuration -->
  </ejs-grid>`,
  providers: [EditService, CommandColumnService]
})
export class AppComponent {
  public data: any[] = [...];
}
```

The following built-in command buttons are available:

| Command Button | Actions |
|----------------|---------|
| `Edit` | Enables inline editing for the current row. |
| `Delete` | Removes the current row from the grid. |
| `Save` | Updates changes made to the edited row. |
| `Cancel` | Discards changes and exits edit mode.|

The example below illustrates to display CRUD action buttons in a column using the `command` column property:

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

The custom command column feature extends the Grid component's capabilities by enabling custom command buttons in a column to perform specific actions on individual rows. This is particularly powerful when specialized functionality for editing, deletion, or custom operations is required beyond the built-in command set.

To define custom command buttons, use the [column.commands](https://ej2.syncfusion.com/angular/documentation/api/grid/column#commands) property. Associate the desired actions with these buttons through the [commandClick](https://ej2.syncfusion.com/angular/documentation/api/grid#commandClick) event, allowing custom logic to be executed on button click.

The following example demonstrates to display custom command buttons using the `commands` property and customize the button click behavior via the `commandClick` event, which here is used to show row details in a dialog:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { GridModule, EditService, CommandColumnService } from '@syncfusion/ej2-angular-grids';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { CommandModel, CommandClickEventArgs, GridComponent, Column, IRow, EditSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [GridModule, DialogModule],
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
