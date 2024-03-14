---
layout: post
title: Detail template in Angular TreeGrid component | Syncfusion
description: Learn here all about Detail template in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Detail template 
documentation: ug
domainurl: ##DomainURL##
---

# Detail Template in Angular TreeGrid component

The detail template in the TreeGrid component allows you to display additional information about a specific row in the tree grid. This feature is useful when you need to show additional data or custom content that is specific to each row in the tree grid. You can use the [detailTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#detailtemplate) property to define an HTML template for the detail row. This template can include any HTML element or Angular component that you want to display as detail content.

Here's an example of using the `detailTemplate` property in the tree grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { TreeGridComponent, DetailRowService } from '@syncfusion/ej2-angular-treegrid';
import { textdata } from './datasource';
import { Internationalization } from '@syncfusion/ej2-base';

let instance: Internationalization = new Internationalization();

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height=317 width='auto' childMapping= 'Children' >
                    <e-columns>
                        <e-column field='Name' headerText='First Name' width='160'></e-column>
                        <e-column field='DOB' headerText = 'DOB' width='105' type='date' format='yMd'></e-column>
                        <e-column field='Designation' headerText = 'Designation' width='180'></e-column>
                        <e-column field='Country' headerText = 'Country' width='148'></e-column>
                    </e-columns>
                    <ng-template #detailTemplate let-data>
                        <div>
                            <div style="position: relative; display: inline-block; float: left; font-weight: bold; width: 10%;padding:5px 4px 2px 27px;;">
                                <img src="{{data.FullName}}.png" alt="{{data.FullName}}"/>
                            </div>
                            <div style="padding-left: 10px; display: inline-block; width: 66%; text-wrap: normal;font-size:13px;font-family:'Segoe UI';">
                                <div class="e-description" style="word-wrap: break-word;">
                                    <b>{{data.Name}}</b> was born on {{format(data.DOB)}}. Now lives at {{data.Address}}, {{data.Country}}. {{data.Name}} holds a position of <b>{{data.Designation}}</b> in our WA department, (Seattle USA).
                                </div>
                                <div class="e-description" style="word-wrap: break-word;margin-top:5px;">
                                    <b style="margin-right:10px;">Contact:</b>{{data.Contact}}
                                </div>
                            </div>
                        </div>
                    </ng-template>
                </ejs-treegrid>`,
providers: [DetailRowService]
})
export class AppComponent implements OnInit {

    public data?: Object[];

    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;

    ngOnInit(): void {
        this.data = textdata;
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
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/row-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/row-cs2" %}

## Rendering custom component

The TreeGrid component provides a powerful feature that allows you to render custom components inside the detail row. This feature is helpful when you need to add additional information or functionality for a specific row in the tree grid.

To render a custom component inside the detail row, you need to define a template using the [detailTemplate](https://ej2.syncfusion.com/angular/documentation/api/tregrid/#detailtemplate) property and handle the [detailDataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#detaildatabound) event. This template can include any HTML element or Angular component that you want to display as the detail content.

The `detailDataBound` event is triggered after a detail row is bound to data. This event provides an object of type [DetailDataBoundEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/detaildataboundeventargs/) as a parameter.

For example, to render grid inside the detail row, place an HTML div element as the `detailTemplate` and render the DIV element as Grid component in the `detailDataBound` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/detail-template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/detail-template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/detail-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/detail-template-cs1" %}

## Custom button in custom column to hide or show detail template 

You can display or conceal the detail row by utilizing a custom button through the column template feature of the Tree Grid.

The column template feature provides options to render a custom component in a TreeGrid column instead of a field value. You can achieve this by utilizing the [template](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#template) property of the Tree Grid. This property allows you to display custom elements in a column instead of the field value. It is advantageous when you wish to display images, buttons, or other customized content within a column.

For more information about column template, refer this [section](https://ej2.syncfusion.com/angular/documentation/treegrid/columns/column-template).

Here's an illustrative example showcasing how to implement showing/hiding a detail row using the column template. Utilize the column template to render a button. In the button click event, retrieve the detail row and add a CSS class to the detail row element. Based on the CSS class, you can toggle the visibility of the detail row.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  TreeGridComponent,
  DetailRowService,
} from '@syncfusion/ej2-angular-treegrid';
import { textdata } from './datasource';
import { Internationalization } from '@syncfusion/ej2-base';
import { CommandModel } from '@syncfusion/ej2-grids';

let instance: Internationalization = new Internationalization();

@Component({
  selector: 'app-container',
  encapsulation: ViewEncapsulation.None,
  template: `<ejs-treegrid #treegrid [dataSource]='data' height=317 width='auto'  childMapping= 'Children'  >
                <e-columns>
                    <e-column field='Name' headerText='First Name' width='160'></e-column>
                    <e-column field='DOB' headerText = 'DOB' width='105' type='date' format='yMd'></e-column>
                    <e-column field='Designation' headerText = 'Designation' width='180'></e-column>
                    <e-column field='Country' headerText = 'Country' width='148'></e-column>
                    <e-column headerText = 'Show or hide Button' width='250'>
                      <ng-template #template let-data>
                        <div class="e-section-control">
                         <button ejs-button cssClass="e-flat" content="Hide/Show Detail Row" (click)="detailrow($event)"></button>
                         </div>
                      </ng-template>
                    </e-column>
                </e-columns>
                <ng-template #detailTemplate let-data>
                 <div>
                  <div style="position: relative; display: inline-block; float: left; font-weight: bold; width: 10%;padding:5px 4px 2px 27px;;">
                    <img src="{{data.FullName}}.png" alt="{{data.FullName}}"/>
                  </div>
                  <div style="padding-left: 10px; display: inline-block; width: 66%; text-wrap: normal;font-size:13px;font-family:'Segoe UI';">
                    <div class="e-description" style="word-wrap: break-word;">
                         <b>{{data.Name}}</b> was born on {{format(data.DOB)}}. Now lives at {{data.Address}}, {{data.Country}}. {{data.Name}} holds a position of <b>{{data.Designation}}</b> in our WA department, (Seattle USA).
                    </div>
                    <div class="e-description" style="word-wrap: break-word;margin-top:5px;">
                       <b style="margin-right:10px;">Contact:</b>{{data.Contact}}
                    </div>
                  </div>
                 </div>
                </ng-template>
              </ejs-treegrid>`,
  styles: [
    `.e-hidedetailrow{
    display: none; /*//hide detailrow*/
    }`,
  ],
  providers: [DetailRowService],
})
export class AppComponent implements OnInit {
  public data?: Object[];

  @ViewChild('treegrid')
  public treegrid?: TreeGridComponent;

  ngOnInit(): void {
    this.data = textdata;
  }

  detailrow(args: any) {
    //Here get the corresponding row of the button clicked
    var target_row = args.target.closest('.e-row');

    //Check whether the next row is a detail row and if it is, determine if it is hidden or not.
    if (
      target_row.nextSibling.classList.contains('e-hidedetailrow') &&
      target_row.nextSibling.classList.contains('e-detailrow')
    ) {
      target_row.nextSibling.classList.remove('e-hidedetailrow');
    } else if (target_row.nextSibling.classList.contains('e-detailrow')) {
      target_row.nextSibling.classList.add('e-hidedetailrow');
    }
  }

  public format(target_rowue: Date): string {
    return instance.formatDate(target_rowue, { skeleton: 'yMd', type: 'date' });
  }
}
export interface DateFormat extends Window {
  format?: Function;
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/detail-template-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/detail-template-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/detail-template-cs2" %}

## Render detail template for only parent records 

In the Tree Grid, you have the capability to render the detail row exclusively for parent records based on a condition. The [detailTemplate](https://ej2.syncfusion.com/angular/documentation/api/tregrid/#detailtemplate) property allows you to include any HTML element or Angular component that you wish to display as the detail content, contingent on a condition.

In the following demonstration, the detail row is presented only for parent records using a condition in the ng-template.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  TreeGridComponent,
  DetailRowService,
} from '@syncfusion/ej2-angular-treegrid';
import { textdata } from './datasource';
import { Internationalization } from '@syncfusion/ej2-base';

let instance: Internationalization = new Internationalization();

@Component({
  selector: 'app-container',
  template: `<ejs-treegrid #treegrid [dataSource]='data' height=317 width='auto' childMapping= 'Children' >
                <e-columns>
                    <e-column field='Name' headerText='First Name' width='160'></e-column>
                    <e-column field='DOB' headerText = 'DOB' width='105' type='date' format='yMd'></e-column>
                    <e-column field='Designation' headerText = 'Designation' width='180'></e-column>
                    <e-column field='Country' headerText = 'Country' width='148'></e-column>
                </e-columns>
                <ng-template #detailTemplate let-data>
                  <div *ngIf="data.hasChildRecords">
                      <div style="position: relative; display: inline-block; float: left; font-weight: bold; width: 10%;padding:5px 4px 2px 27px;;">
                          <img src="{{data.FullName}}.png" alt="{{data.FullName}}"/>
                      </div>
                      <div style="padding-left: 10px; display: inline-block; width: 66%; text-wrap: normal;font-size:13px;font-family:'Segoe UI';">
                          <div class="e-description" style="word-wrap: break-word;">
                             <b>{{data.Name}}</b> was born on {{format(data.DOB)}}. Now lives at {{data.Address}}, {{data.Country}}. {{data.Name}} holds a position of <b>{{data.Designation}}</b> in our WA department, (Seattle USA).
                          </div>
                          <div class="e-description" style="word-wrap: break-word;margin-top:5px;">
                            <b style="margin-right:10px;">Contact:</b>{{data.Contact}}
                          </div>
                      </div>
                  </div>
                 </ng-template>
              </ejs-treegrid>`,
  providers: [DetailRowService],
})
export class AppComponent implements OnInit {
  public data?: Object[];

  @ViewChild('treegrid')
  public treegrid?: TreeGridComponent;

  ngOnInit(): void {
    this.data = textdata;
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
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/detail-template-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/detail-template-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/detail-template-cs3" %}

## Limitations 

Detail template is not supported with the following features:

* Frozen rows and columns
* Immutable mode
* Infinite scrolling
* Virtual scrolling
* Print
* Row template
* Row spanning
* Column spanning
* State persistence
