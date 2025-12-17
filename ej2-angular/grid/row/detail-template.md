---
layout: post
title: Detail template in Angular Grid component | Syncfusion
description: Learn here all about Detail template in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Detail template 
documentation: ug
domainurl: ##DomainURL##
---

# Detail Template in Angular Grid Component

The detail template feature in the Syncfusion Angular Grid enables display of additional information for each row through expandable and collapsible detail content. This feature is essential for presenting hierarchical or related data, supplementary information, or custom content that extends beyond the main grid columns. The [detailTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid#detailtemplate) property allows definition of an HTML template or Angular component for the detail row content.

Common use cases for detail templates include:
- Displaying nested data or related records
- Showing detailed information that doesn't fit in regular columns
- Embedding charts, forms, or other components within grid rows
- Creating master-detail relationships between datasets

The following example demonstrates basic detail template implementation:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { DetailRowService } from '@syncfusion/ej2-angular-grids'
import { Component, OnInit } from '@angular/core';
import { employeeData } from './datasource';

@Component({
    imports: [ GridModule],
    providers: [DetailRowService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' height='315' width='auto'>
        <e-columns>
            <e-column field="FirstName" headerText='First Name' width='140'></e-column>
            <e-column field="LastName" headerText='Last Name' width='140'></e-column>
            <e-column field="Title" headerText='Title' width='150'></e-column>
            <e-column field="Country" headerText='Country' width='150'></e-column>
        </e-columns>
        <ng-template #detailTemplate let-data>
                    <table class="detailtable" width="100%">
                        <colgroup>
                            <col width="35%">
                            <col width="35%">
                            <col width="40%">
                        </colgroup>
                        <tbody>
                            <tr>
                                <td class="photo" rowSpan="4" style="text-align : center">
                                    <img src="{{data.EmployeeID}}.png" alt="{{data.EmployeeID}}" />
                                </td>
                                <td>
                                    <span style="font-weight: 500">First Name:</span>
                                    {{data.FirstName}}
                                </td>
                                <td>
                                     <span style="font-weight: 500"> Postal Code:</span>
                                     {{data.PostalCode}}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span style="font-weight: 500">Last Name:</span>
                                    {{data.LastName}}
                                </td>
                                <td>
                                     <span style="font-weight: 500"> City:</span>
                                     {{data.City}}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span style="font-weight: 500">Title:</span>
                                    {{data.Title}}
                                </td>
                                <td>
                                     <span style="font-weight: 500"> Phone:</span>
                                     {{data.Phone}}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span style="font-weight: 500">City:</span>
                                    {{data.City}}
                                </td>
                                <td>
                                     <span style="font-weight: 500"> Country:</span>
                                     {{data.Country}}
                                </td>
                            </tr>
                        </tbody>
                    </table>
        </ng-template>
    </ejs-grid>`,
    styleUrls: ['app.style.css']
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = employeeData;
    }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-cell-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-cell-cs4" %}

## Rendering custom component

The Grid component provides a powerful capability to render custom Angular components inside detail rows. This feature enables embedding of complex UI elements, such as nested grids, charts, forms, or any other Angular component within the expandable detail section.

To render a custom component inside the detail row, define a template using the [detailTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid#detailtemplate) property and handle the [detailDataBound](https://ej2.syncfusion.com/angular/documentation/api/grid#detaildatabound) event. The `detailDataBound` event is triggered after a detail row is bound to data and provides an object of type [DetailDataBoundEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/detaildataboundeventargs) as a parameter.

**Implementation Steps:**
1. Create a placeholder HTML element in the detail template
2. Handle the `detailDataBound` event to initialize your custom component
3. Pass the row data to the custom component for context-aware rendering
4. Manage component lifecycle and cleanup when detail rows are collapsed

For example, to render a grid inside the detail row, place an HTML div element as the `detailTemplate` and render the DIV element as a grid component in the `detailDataBound` event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-cell-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-cell-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-cell-cs5" %}

## Expand by external button

The Grid supports programmatic expansion of detail rows through external controls, providing enhanced user interaction flexibility. By default, detail rows are rendered in a collapsed state, but external buttons or other UI elements can trigger their expansion to reveal additional row-specific information.

To expand a detail row using an external button, use the [expand](https://ej2.syncfusion.com/angular/documentation/api/grid/detailRow#expand) method provided by the **detailRowModule** object. This method accepts a row index parameter to specify which detail row to expand.

**Key Methods for Detail Row Control:**
- `expand(index: number)`: Expands the detail row at the specified index
- `collapse(index: number)`: Collapses the detail row at the specified index
- `expandAll()`: Expands all detail rows in the grid
- `collapseAll()`: Collapses all detail rows in the grid

Here is an example implementation:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { DetailRowService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import {TextBoxModule} from '@syncfusion/ej2-angular-inputs'
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { employeeData } from './datasource';
import { TextBoxComponent } from '@syncfusion/ej2-angular-inputs';

@Component({
imports: [
        
        GridModule,
        ButtonModule ,
        TextBoxModule       
    ],

providers: [DetailRowService],
standalone: true,
  selector: 'app-root',
  template: `
        <div style="display: inline-block; padding: 0px 30px 0px 0px">
          <ejs-textbox #textbox placeholder="Enter the row Index" width="250px" 
          floatLabelType="Auto"></ejs-textbox>
        </div>
        <button ejs-button id="sample" (click)="btnClick()">Expand</button>
        <div style="padding: 20px 0px 0px 0px">
          <ejs-grid #grid [dataSource]="data" height="315" width="auto">
            <e-columns>
              <e-column field="FirstName" headerText="First Name" width="140"></e-column>
              <e-column field="LastName" headerText="Last Name" width="140"></e-column>
              <e-column field="Title" headerText="Title" width="150"></e-column>
              <e-column field="Country" headerText="Country" width="150"></e-column>
            </e-columns>
            <ng-template #detailTemplate let-data>
              <table class="CardTable" cellpadding="3" cellspacing="2">
                <colgroup>
                  <col width="35%">
                  <col width="35%">
                  <col width="40%">
                </colgroup>
                <tbody>
                  <tr>
                    <td class="rowphoto" rowspan="4" style="text-align: center">
                      <img src="{{ data.EmployeeID }}.png" alt="{{ data.EmployeeID }}" />
                    </td>
                    <td>
                      <span style="font-weight: 500">First Name:</span>
                      {{ data.FirstName }}
                    </td>
                    <td>
                      <span style="font-weight: 500">Postal Code:</span>
                      {{ data.PostalCode }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span style="font-weight: 500">Last Name:</span>
                      {{ data.LastName }}
                    </td>
                    <td>
                      <span style="font-weight: 500">City:</span>
                      {{ data.City }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span style="font-weight: 500">Title:</span>
                      {{ data.Title }}
                    </td>
                    <td>
                      <span style="font-weight: 500">Phone:</span>
                      {{ data.Phone }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span style="font-weight: 500">City:</span>
                      {{ data.City }}
                    </td>
                    <td>
                      <span style="font-weight: 500">Country:</span>
                      {{ data.Country }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </ng-template>
          </ejs-grid>
        </div>`
  })
export class AppComponent implements OnInit {

  public data?: object[];
  @ViewChild('grid') public grid?: GridComponent;
  @ViewChild('textbox') public textbox?: TextBoxComponent;

  ngOnInit(): void {
    this.data = employeeData;
  }
  public btnClick(): void {
    const rowIndex = parseInt((this.textbox as TextBoxComponent).value as string, 10);
    if (!isNaN(rowIndex) && rowIndex >= 0) {
      (this.grid as GridComponent).detailRowModule.expand(rowIndex); 
      // Expand the detail row of the specified row index
    }
  }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-cell-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-cell-cs6" %}

## Customize detail template icon

The detail template icon in the Syncfusion Grid controls the visual representation of expandable rows. By default, the grid displays a right arrow (▶) for collapsed rows and a down arrow (▼) for expanded rows. These icons can be customized by overriding the corresponding CSS classes to match your application's design requirements.

**Default Icon CSS Classes:**
- `.e-icon-grightarrow`: Controls the collapsed state icon
- `.e-icon-gdownarrow`: Controls the expanded state icon

To customize these icons, override the following CSS styles:

```css
.e-grid .e-icon-grightarrow::before {
    content: "\e655"; /* Custom icon code for collapsed state */
}
.e-grid .e-icon-gdownarrow::before {
    content: "\e304"; /* Custom icon code for expanded state */
}
```

The following example demonstrates icon customization implementation:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { DetailRowService } from '@syncfusion/ej2-angular-grids'
import { Component } from '@angular/core';
import { employeeData } from './datasource';
import { Internationalization } from '@syncfusion/ej2-base';

let instance: Internationalization = new Internationalization();

@Component({
imports: [ GridModule ],
providers: [DetailRowService],
standalone: true,
    selector: 'app-root',
    template: `<div class="control-section">
                <ejs-grid #grid [dataSource]='data' id='Grid'>
                    <ng-template #detailTemplate let-data>
                        <table class="detailtable" width="100%">
                            <colgroup>
                                <col width="35%">
                                <col width="35%">
                                <col width="30%">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td rowspan="4" style="text-align: center;">
                                        <img class='photo' src="https://ej2.syncfusion.com/angular/demos/assets/grid/images/{{data.EmployeeID}}.png" alt="{{data.EmployeeID}}" />
                                    </td>
                                    <td>
                                        <span style="font-weight: 500;">First Name: </span> {{data.FirstName}}
                                    </td>
                                    <td>
                                        <span style="font-weight: 500;">Postal Code: </span> {{data.PostalCode}}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span style="font-weight: 500;">Last Name: </span> {{data.LastName}}
                                    </td>
                                    <td>
                                        <span style="font-weight: 500;">City: </span> {{data.City}}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span style="font-weight: 500;">Title: </span> {{data.Title}}
                                    </td>
                                    <td>
                                        <span style="font-weight: 500;">Phone: </span> {{data.HomePhone}}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span style="font-weight: 500;">Address: </span> {{data.Address}}
                                    </td>
                                    <td>
                                        <span style="font-weight: 500;">HireDate: </span> {{format(data.HireDate)}}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </ng-template>
                    <e-columns>
                        <e-column field='EmployeeID' headerText='Employee ID' width='125' 
                        textAlign='Right'></e-column>
                        <e-column field='FirstName' headerText='Name' width='120'>
                        </e-column>
                        <e-column field='Title' headerText='Title' width='170'></e-column>
                        <e-column field='HireDate' headerText='Hire Date' width='135' 
                        textAlign='Right' format='yMd'></e-column>
                        <e-column field='ReportsTo' headerText='Reports To' width='120' 
                        textAlign='Right'></e-column>
                    </e-columns>
                </ejs-grid>
            </div>`
})
export class AppComponent {

    public data?: Object[];

    ngOnInit(): void {
        this.data = employeeData;
    }
    public format(value: Date): string {
        return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
    }
}

export interface DateFormat extends Window {
    format?: Function;
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/row-detail-icon-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/row-detail-icon-cs1" %}

## Limitations

Detail template functionality has the following feature limitations:

* Frozen rows and columns
* Immutable mode
* Virtual scrolling
* Print
* Row template
* Row spanning
* Column spanning
* Lazy load grouping
* State persistence

These limitations are due to architectural constraints and rendering conflicts between the detail template system and the specified features.

## See also

* [Detail row events](../hierarchy-grid#detail-row-events)