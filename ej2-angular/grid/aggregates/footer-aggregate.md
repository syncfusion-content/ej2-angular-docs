---
layout: post
title: Footer aggregate in Angular Grid component | Syncfusion
description: Learn here all about Footer aggregate in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Footer aggregate 
documentation: ug
domainurl: ##DomainURL##
---

# Footer aggregate in Angular Grid component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component allows you to calculate and display aggregate values in the footer cells. The footer aggregate value is calculated from all the rows in the grid. You can use the [footerTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#footertemplate) property to render the aggregate value in the footer cells.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-footer-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.template.html" %}
{% raw %}
<ejs-grid [dataSource]='data' height='210px'>
    <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='Freight' width=150></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
    </e-columns>
    <e-aggregates>
        <e-aggregate>
            <e-columns>
                <e-column field="Freight" type="sum">
                    <ng-template #footerTemplate let-data>Sum: {{data.sum}}</ng-template>
                </e-column>
            </e-columns>
        </e-aggregate>
        <e-aggregate>
            <e-columns>
                <e-column field="Freight" type="max">
                    <ng-template #footerTemplate let-data>Max: {{data.max}}</ng-template>
                </e-column>
            </e-columns>
        </e-aggregate>
    </e-aggregates>
</ejs-grid>
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-footer-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/aggregates-footer-cs1" %}

> * Use the template reference variable name **#footerTemplate** to specify the footer template.
> * Inside the template, access the aggregate values using their corresponding [type](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#type) name. For example, to access the sum aggregate value, use **data.sum**.

## Format the aggregate value

To format the aggregate value result in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component, you can use the [format](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#format) property of the[AggregateColumnDirective](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/). The `format` property allows you to specify a format string that determines how the aggregate value will be displayed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-footer-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.template.html" %}
{% raw %}
<ejs-grid [dataSource]="data" height="210px">
    <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="right" width="120"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="150"></e-column>
        <e-column field="Freight" width="150"></e-column>
        <e-column field="ShipName" headerText="Ship Name" width="150"></e-column>
    </e-columns>
    <e-aggregates>
        <e-aggregate>
            <e-columns>
                <e-column field="Freight" type="sum" format="N0">
                    <ng-template #footerTemplate let-data>Sum: {{ data.sum }}</ng-template>
                </e-column>
            </e-columns>
        </e-aggregate>
        <e-aggregate>
            <e-columns>
                <e-column field="Freight" type="max" format="N0">
                    <ng-template #footerTemplate let-data>Max: {{ data.max }}</ng-template>
                </e-column>
            </e-columns>
        </e-aggregate>
    </e-aggregates>
</ejs-grid>
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-footer-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/aggregates-footer-cs2" %}

## How to place aggregates on top of the Grid

By default, the aggregated values are placed at the bottom of the footer section. It is possible to place the aggregated values at the top of the header. This is achieved by using the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event, [getHeaderContent](https://ej2.syncfusion.com/angular/documentation/api/grid/#getheadercontent), and [getFooterContent](https://ej2.syncfusion.com/angular/documentation/api/grid/#getfootercontent) methods of the Grid.

In the following, footer content is appended to the header content using the `dataBound` event of the Grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { AggregateService } from '@syncfusion/ej2-angular-grids'
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [GridModule],
providers: [AggregateService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid  #grid [dataSource]='data' height='210px' (dataBound)="dataBound()">
    <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='Freight' width=150></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
    </e-columns>
    <e-aggregates>
        <e-aggregate>
            <e-columns>
                <e-column field="Freight" type="sum">
                    <ng-template #footerTemplate let-data>Sum: {{data.sum}}</ng-template>
                </e-column>
            </e-columns>
        </e-aggregate>
        <e-aggregate>
            <e-columns>
                <e-column field="Freight" type="max">
                    <ng-template #footerTemplate let-data>Max: {{data.max}}</ng-template>
                </e-column>
            </e-columns>
        </e-aggregate>
    </e-aggregates>
</ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }
    dataBound() {
        (this.grid as GridComponent).getHeaderContent().append((this.grid as GridComponent).getFooterContent());
    }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-footer-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/aggregates-footer-cs3" %}