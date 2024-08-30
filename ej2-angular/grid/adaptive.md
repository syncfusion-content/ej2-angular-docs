---
layout: post
title: Adaptive in Angular Grid component | Syncfusion
description: Learn here all about Adaptive in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Adaptive 
documentation: ug
domainurl: ##DomainURL##
---

# Adaptive in Angular Grid component

The Grid user interface (UI) was redesigned to provide an optimal viewing experience and improve usability on small screens. This interface will render the filter, sort, column chooser, column menu(supports only when the `rowRenderingMode` as Horizontal) and edit dialogs adaptively and have an option to render the grid row elements in the vertical direction.

## Render adaptive dialogs

The Syncfusion Angular Grid offers a valuable feature for rendering adaptive dialogs, specifically designed to enhance the user experience on smaller screens. This feature proves especially useful for optimizing the interface on devices with limited screen real estate. The functionality is achieved by enabling the [enableAdaptiveUI](https://ej2.syncfusion.com/angular/documentation/api/grid/#enableadaptiveui) property, allowing the grid to render filter, sort, and edit dialogs in full-screen mode.

The following sample demonstrates how to enable and utilize adaptive dialogs in the Syncfusion Angular Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/adaptive-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/adaptive-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/adaptive-cs1" %}

## Vertical row rendering

The Syncfusion Angular Grid introduces the feature of vertical row rendering, allowing you to display row elements in a vertical order. This is particularly useful for scenarios where a vertical presentation enhances data visibility. This is achieved by setting the [rowRenderingMode](https://ej2.syncfusion.com/angular/documentation/api/grid#rowrenderingmode) property to the value **Vertical**.

>The default row rendering mode is **Horizontal**.

The following sample demonstrates how to dynamically change the row rendering mode between **Vertical** and **Horizontal** based on a DropDownList selection:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, SortService, FilterService, EditService, ToolbarService, AggregateService } from '@syncfusion/ej2-angular-grids'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, RowRenderingDirection } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

@Component({
imports: [
        
        GridModule,
        DropDownListModule
    ],

providers: [PageService,
                SortService,
                FilterService,
                EditService,
                ToolbarService,
                AggregateService],
standalone: true,
    selector: 'app-root',
    template: `

        <div style="display: flex; padding: 0px 0px 20px 200px">
            <label style="padding: 30px 17px 0 0;"> Select row rendering mode :</label>
            <ejs-dropdownlist #dropdown style="padding: 26px 0 0 0" index="0" width="150" 
            [dataSource]="dropDownData"  (change)="changeAlignment($event)">
            </ejs-dropdownlist>
        </div>
        <div class="e-adaptive-demo e-bigger">
                    <div class="e-mobile-layout">
                        <div class="e-mobile-content">
                           <ejs-grid #adaptive id="adaptivebrowser" [dataSource]='data' enableAdaptiveUI='true' [rowRenderingMode]="rowMode"
                    height='100%' allowPaging='true' allowFiltering='true'
                    allowSorting='true' [editSettings]='editSettings'
                    [filterSettings]='filterSettings' [toolbar]='toolbar' (load)='onLoad()'>
                    <e-columns>
                        <e-column field='SNO' headerText='S NO' width='150' isPrimaryKey='true' [validationRules]='orderidrules'>
                        </e-column>
                        <e-column field='Model' headerText='Model' width='200' editType='dropdownedit'
                            [validationRules]='customeridrules'>
                        </e-column>
                        <e-column field='Developer' headerText='Developer' width='200' [validationRules]='customeridrules' [filter]='menuFilter'></e-column>
                        <e-column field='ReleaseDate' headerText='Released Date' width='200' type='date' format='yMMM' editType='datepickeredit'>
                        <e-column field='AndroidVersion' headerText='Android Version' width='200' [validationRules]='customeridrules' [filter]='checkboxFilter'></e-column>
                        </e-column>
                    </e-columns>
                    <e-aggregates>
                        <e-aggregate>
                            <e-columns>
                                <e-column type="Count" field="Model" >
                                    <ng-template #footerTemplate let-data>Total Models: {{data.Count}}</ng-template>
                                </e-column>
                            </e-columns>
                        </e-aggregate>
                    </e-aggregates>
                </ejs-grid>
                        </div>
                    </div>
                    <br />
                    <div class="datalink">Source:
                  <a href="https://en.wikipedia.org/wiki/List_of_Android_smartphones"
                    target="_blank">Wikipedia: List of Android smartphones</a>
                    </div>
                </div>`
})

export class AppComponent implements OnInit {
    @ViewChild('adaptive')
    public grid?: GridComponent;
    public data?: object[];
    public editSettings?: Object;
    public toolbar?: string[];
    public orderidrules?: Object;
    public customeridrules?: Object;
    public filterSettings?: Object;
    public menuFilter?: Object;
    public checkboxFilter?: Object;
    public rowMode?: string;
    public dropDownData: Object[] = [
        { text: 'Vertical', value: 'Vertical' },
        { text: 'Horizontal', value: 'Horizontal' },
    ];

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
        this.orderidrules = { required: true, number: true };
        this.customeridrules = { required: true };
        this.filterSettings = { type: 'Excel' };
        this.menuFilter = {
            type: 'Menu'
        };
        this.checkboxFilter = {
            type: 'CheckBox'
        };
    }

    public changeAlignment(args: ChangeEventArgs): void {
        (this.grid as GridComponent).rowRenderingMode = (args.value as RowRenderingDirection);
    }

    public onLoad(): void {
        (this.grid as GridComponent).adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0] as HTMLElement;
    }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/adaptive-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/adaptive-cs2" %}

> [enableAdaptiveUI](https://ej2.syncfusion.com/angular/documentation/api/grid/#enableadaptiveui) property must be enabled for vertical row rendering.

### Supported features by vertical row rendering

The following features are only supported in vertical row rendering:

* Paging, including Page size dropdown
* Sorting
* Filtering
* Selection
* Dialog Editing
* Aggregate
* Infinite scroll
* Toolbar - Options like **Add**, **Filter**, **Sort**, **Edit**, **Delete**, **Search**, and **Toolbar template** are available when their respective features are enabled. The toolbar dynamically includes a three-dotted icon, containing additional features like **ColumnChooser**, **Print**, **PdfExport**, **ExcelExport**, or **CsvExport**, once these features are enabled. Please refer to the following snapshot.

![VerticalmodeColumnMenu](./images/VerticalmodeColumnMenu.gif)

A snapshot of the adaptive grid displaying enabled paging along with a pager dropdown.

![AdaptivePagerDropdown](./images/PagerDropdown_Adaptive.gif)

> The Column Menu feature, which includes grouping, sorting, autofit, filter, and column chooser, is exclusively supported for the Grid in **Horizontal** [rowRenderingMode](https://ej2.syncfusion.com/angular/documentation/api/grid#rowrenderingmode).

## See Also

* [Effective ways to utilize responsiveness](https://www.syncfusion.com/blogs/post/essential-js-2-effective-ways-to-utilize-responsiveness-in-the-angular-grid.aspx)
