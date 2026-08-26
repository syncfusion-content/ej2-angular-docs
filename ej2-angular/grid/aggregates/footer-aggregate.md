---
layout: post
title: Angular Grid Footer Aggregate | Syncfusion
description: Learn how to display and format footer aggregate values in Angular Data Grid, apply summary calculations, and combine multiple aggregates.
control: Footer aggregate
platform: ej2-angular
control: Footer aggregate 
documentation: ug
domainurl: ##DomainURL##
---

# Footer Aggregate in Angular Data Grid

The [Angular Data Grid](https://www.syncfusion.com/angular-components/angular-data-grid) supports calculating and displaying aggregate values in the footer cells. These footer aggregates are computed from all rows in the grid. The [footerTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn#footertemplate) property can be used to customize the rendering of aggregate values in the footer cells, allowing formatted text or custom layouts to be displayed.

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
                <e-column field="Freight" type="Sum">
                    <ng-template #footerTemplate let-data>Sum: {{data.Sum}}</ng-template>
                </e-column>
            </e-columns>
        </e-aggregate>
        <e-aggregate>
            <e-columns>
                <e-column field="Freight" type="Max">
                    <ng-template #footerTemplate let-data>Max: {{data.Max}}</ng-template>
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

> * Ensure the `AggregateService` is injected into the component's `providers` array to enable aggregate functionality.
> * Inside the template, access each aggregate value using its [type](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn#type) name. For example, use `data.Sum` to access the sum aggregate and `data.Max` to access the maximum aggregate.

## Format aggregate values

Aggregate values displayed in footer cells can be formatted using the [format](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn#format) property of the `AggregateColumnDirective`. This property accepts a format string that defines the appearance of the aggregate value, such as currency, number of decimal places, or percentage format.

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
                <e-column field="Freight" type="Sum" format="N0">
                    <ng-template #footerTemplate let-data>Sum: {{ data.Sum }}</ng-template>
                </e-column>
            </e-columns>
        </e-aggregate>
        <e-aggregate>
            <e-columns>
                <e-column field="Freight" type="Max" format="N0">
                    <ng-template #footerTemplate let-data>Max: {{ data.Max }}</ng-template>
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

By default, aggregate values are displayed in the footer section of the Data Grid. To display these values in the header section instead, handle the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid#databound) event and use the [getHeaderContent](https://ej2.syncfusion.com/angular/documentation/api/grid#getheadercontent) and [getFooterContent](https://ej2.syncfusion.com/angular/documentation/api/grid#getfootercontent) methods. The footer content is then appended to the header after the Data Grid is rendered.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { GridModule, GridComponent, AggregateService } from '@syncfusion/ej2-angular-grids'
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';

@Component({
imports: [GridModule],
providers: [AggregateService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' height='210px' (dataBound)="dataBound()">
    <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='Freight' width=150></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
    </e-columns>
    <e-aggregates>
        <e-aggregate>
            <e-columns>
                <e-column field="Freight" type="Sum">
                    <ng-template #footerTemplate let-data>Sum: {{data.Sum}}</ng-template>
                </e-column>
            </e-columns>
        </e-aggregate>
        <e-aggregate>
            <e-columns>
                <e-column field="Freight" type="Max">
                    <ng-template #footerTemplate let-data>Max: {{data.Max}}</ng-template>
                </e-column>
            </e-columns>
        </e-aggregate>
    </e-aggregates>
</ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid')
    public grid!: GridComponent;

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