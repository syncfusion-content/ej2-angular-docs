---
layout: post
title: Angular Grid - Footer Aggregate | Syncfusion
description: Angular Grid footer aggregate enables setting footer values, applying formatting, and combining multiple aggregates for each column.
control: Footer aggregate
platform: ej2-angular
control: Footer aggregate 
documentation: ug
domainurl: ##DomainURL##
---

# Footer Aggregate in Angular Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid supports calculating and displaying aggregate values in the footer cells. These footer aggregates are computed from all rows in the grid. The [footerTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn#footertemplate) property can be used to customize the rendering of aggregate values in the footer cells, allowing formatted text or custom layouts to be displayed.

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


> Inside the template, access each aggregate value using its [type](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn#type) name. For example, use `data.sum` to access the sum aggregate and data.max to access the maximum aggregate.

## Format aggregate value

Aggregate values displayed in footer cells can be formatted using the [format](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn#format) property of the `AggregateColumnDirective`. This property accepts a format string that defines the appearance of the aggregate value, such as specifying currency, number of decimal places, or percentage format.

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

## Display aggregates in the header

By default, aggregate values are displayed at the bottom of the grid in the footer section. It is also possible to place these values at the top of the header. This can be achieved by handling the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid#databound) event of the Grid and using the [getHeaderContent](https://ej2.syncfusion.com/angular/documentation/api/grid#getheadercontent), and [getFooterContent](https://ej2.syncfusion.com/angular/documentation/api/grid#getfootercontent) methods. In this approach, the footer content is programmatically appended to the header content once the grid has finished rendering.

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

## See also
- [Aggregates overview](./aggregates)
- [Group and caption aggregates](./group-and-caption-aggregate)
- [Reactive aggregates](./reactive-aggregate)
- [Aggregates API](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn)