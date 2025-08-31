---
layout: post
title: Detail template in Angular Grid component | Syncfusion
description: Learn here all about Detail template in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Detail template 
documentation: ug
domainurl: ##DomainURL##
---

# Detail template in Angular Grid component

The detail template in the Grid component allows you to display additional information about a specific row in the grid by expanding or collapsing detail content. This feature is useful when you need to show additional data or custom content that is specific to each row in the grid. You can use the [detailTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/#detailtemplate) property to define an HTML template for the detail row. This template can include any HTML element or Angular component that you want to display as detail content.

Here's an example of using the `detailTemplate` property in the grid component:

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

The Grid component provides a powerful feature that allows you to render custom components inside the detail row. This feature is helpful when you need to add additional information or functionality for a specific row in the grid.

To render a custom component inside the detail row, you need to define a template using the[detailTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/#detailtemplate)  property and handle the [detailDataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#detaildatabound) event.This template can include any HTML element or Angular component that you want to display as the detail content.

The `detailDataBound` event is an event that is triggered after a detail row is bound to data. This event provides an object of type [DetailDataBoundEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/detaildataboundeventargs/) as a parameter.

For example, to render grid inside the detail row, place an HTML div element as the `detailTemplate` and render the DIV element as grid component in the `detailDataBound` event.

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

The Grid provides a feature that allows users to expand the detail row of a grid using an external button. By default, detail rows render in a collapsed state, but this feature enables users to view additional details associated with a particular row. 

To achieve expanding the detail row of a grid using an external button, you need to invoke the [expand](https://ej2.syncfusion.com/angular/documentation/api/grid/detailRow/#expand) method provided by the **detailRowModule** object of the Syncfusion Grid library. This method will expand the detail row of a specific grid row.

Here is an example of how to use the `expand` method to expand a detail row:

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
    (this.grid as GridComponent).detailRowModule.expand((this.textbox as TextBoxComponent).value); 
    // Expand the detail row of the specified row index
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

The detail template icon in the Syncfusion Grid is used to expand or collapse the detail content of a row. By default, the icon represents a right arrow for the collapsed state and a down arrow for the expanded state. If you want to customize this icon, you can achieve it by overriding the following CSS styles:

```css

.e-grid .e-icon-grightarrow::before {
    content: "\e655";
}
.e-grid .e-icon-gdownarrow::before {
    content: "\e304";
}

```

Here is an example of how to customize the detail template icon:

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

Detail template is not supported with the following features:

* Frozen rows and columns
* Immutable mode
* Virtual scrolling
* Print
* Row template
* Row spanning
* Column spanning
* Lazy load grouping
* State persistence