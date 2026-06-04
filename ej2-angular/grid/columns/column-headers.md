---
layout: post
title: Angular Grid - Column Headers | Syncfusion
description: Angular Grid column headers support header templates, tooltips, multi-line layouts, and customization options for enhanced header appearance and interactions.
platform: ej2-angular
control: Column headers 
documentation: ug
domainurl: ##DomainURL##
---

# Headers in Angular Grid Component

Column headers in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid display the titles for each column, making it clear what data is shown. They provide context and make the grid easier to read and navigate. Headers can be customized by adjusting text alignment, applying templates, stacking multiple headers, or updating them dynamically, offering flexibility to design the grid as needed.

## Header text

In the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid, the [headerText](https://ej2.syncfusion.com/angular/documentation/api/grid/column#headertext) property of the `ColumnDirective` defines the label shown in a column’s header; when this property is not set, the column automatically displays its [field](https://ej2.syncfusion.com/angular/documentation/api/grid/column#field) value, so assigning header text provides a more descriptive label in place of the field name.

To enable the `headerText` property, define it in the `e-column` element. The following example demonstrates enabling header text for a Grid column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs20/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs20/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs20" %}

> * The `headerText` property is optional. If not defined, the corresponding column's field value is set as header text for that column.  
> * The [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column#headertemplate) property can be used to apply custom HTML content to the header cell.
> * If both the `field` and `headerText` are not defined in the column, the column renders with **empty** header text.

## Header template

The [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column#headertemplate) property provides full control over customizing column header cells. Instead of plain text, the header can render custom HTML elements or Angular components, such as icons, styled labels, or interactive elements, to create a richer and more engaging design.

The following example demonstrates custom elements rendered for the "Customer ID", "Freight", and "Order Date" column headers.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonModule, SwitchModule, ChangeEventArgs  } from '@syncfusion/ej2-angular-buttons';
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
  imports: [ GridModule, DropDownListAllModule, ButtonModule,SwitchModule ],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-grid [dataSource]="data" height="315px">
              <e-columns>
                <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120"></e-column>
                <e-column field="CustomerID" headerText="Customer ID" width="140">
                  <ng-template #headerTemplate let-data>
                    <div>
                      <span class="e-icon-userlogin e-icons employee"></span> Customer ID
                    </div>
                  </ng-template>
                </e-column>
                <e-column field="Freight" headerText="Freight" format="C" width="120">
                  <ng-template #headerTemplate let-data>
                    <div>
                      <ejs-dropdownlist index="0" width="130" [dataSource]="dropdownData">
                      </ejs-dropdownlist>
                    </div>
                  </ng-template>
                </e-column>
                <e-column field="OrderDate" textAlign="Right" format="yMd" width="140">
                  <ng-template #headerTemplate let-data>
                    <div>
                      <ejs-switch (change)="onSwitchToggle($event)"></ejs-switch>
                      <label style="padding: 0px 0px 0px 10px">{{ headerText }}</label>
                    </div>
                  </ng-template>
                </e-column>
              </e-columns>
           </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data: Object[] = [];
  public dropdownData: string[] = [];
  public headerText: string = 'Order Date';

  ngOnInit() {
    this.data = data;
    this.dropdownData = ['Freight', 'Shipment', 'Cargo'];
  }
  onSwitchToggle(args:ChangeEventArgs) {
    this.headerText = args.checked ? 'Purchase Date' : 'Order Date';
  }

}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/header-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/header-template-cs1" %}

> * The `headerTemplate` property applies only to Grid columns that have a header element.
> * Any HTML or Angular component can be used in the header template to add functionality to the header element.

## Stacked header 

Stacked headers enable hierarchical organization of column headers by grouping related columns under parent headers. This feature is useful for complex data layouts where columns need logical grouping for better readability and organization. Stacked headers are implemented using the [ColumnDirective](https://ej2.syncfusion.com/documentation/api/grid/column#columns) property to define an array of column objects as sub-headers under a main header. 

The `headerText` property of each sub-header column sets the display text. The appearance of stacked header elements can be customized using the `headerTemplate` property, which accepts a template reference enabling definition of custom HTML elements or Angular components.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { GridModule,PageService,ColumnModel } from '@syncfusion/ej2-angular-grids';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { Component, OnInit } from '@angular/core';
import { orderDetails } from './datasource';

@Component({
  imports: [ GridModule,DropDownListAllModule],
  providers: [PageService],
  standalone: true,
  selector: 'app-root',
  template: `<div>
              <ejs-grid [dataSource]="data" allowPaging="true">
                <e-columns>
                  <e-column field="OrderID" width="120" textAlign="Center">
                    <ng-template #headerTemplate let-data>
                      <div>
                        <a href="#">OrderID</a>
                      </div>
                    </ng-template>
                  </e-column>
                  <e-column headerText="Order Details" [columns]="orderColumns">
                    <ng-template #headerTemplate let-data>
                      <div>
                        <ejs-dropdownlist index="0" 
                        [dataSource]="dropdownData">
                        </ejs-dropdownlist>
                      </div>
                    </ng-template>
                  </e-column>
                  <e-column headerText="Ship Details" [columns]="shipColumns">
                    <ng-template #headerTemplate let-column>
                      <div>
                        <span>{{ column.headerText }}</span>
                        <span>(<i class="fa fa-truck"></i>)</span>
                      </div>
                    </ng-template>
                  </e-column>
                </e-columns>
              </ejs-grid>
            </div>`
})
export class AppComponent implements OnInit {

  public data?: Object[] = [];
  public orderColumns?: ColumnModel[];
  public shipColumns?: ColumnModel[];
  public dropdownData?: string[];

  public ngOnInit(): void {

    this.data = orderDetails;
    this.orderColumns = [
      {
        field: 'OrderDate',
        headerText: 'Order Date',
        format: 'yMd',
        width: 130,
        textAlign: 'Right',
        minWidth: 10,
      },
      {
        field: 'Freight',
        headerText: 'Freight ($)',
        width: 120,
        format: 'C1',
        textAlign: 'Right',
        minWidth: 10,
      },
    ];

    this.shipColumns = [
      {
        field: 'ShippedDate',
        headerText: 'Shipped Date',
        format: 'yMd',
        textAlign: 'Right',
        width: 150,
        minWidth: 10,
      },
      {
        field: 'ShipCountry',
        headerText: 'Ship Country',
        width: 150,
        minWidth: 10,
      },
    ];

    this.dropdownData = ['Order Details', 'Order Information'];
  }

}

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/stacked-header-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/stacked-header-cs2" %}

## Header text alignment

Header text alignment improves readability and visual organization of the grid. The [headerTextAlign](https://ej2.syncfusion.com/angular/documentation/api/grid/column#headertextalign) property controls text positioning inside column headers. By default, header text is aligned to the left, but it can be changed to better match the data or design. Supported options are:

* `Left`: Aligns text to the left (default).
* `Center`: Aligns text to the center.
* `Right`: Aligns text to the right.
* `Justify`: Justifies header text.

The following example demonstrates dynamically changing the alignment of the header text based on DropDown selection:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs26/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs26/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs26" %}

> * The `headerTextAlign` property only changes the alignment of the text in the column header, not the content of the column. To align both the column header and content, use the [textAlign](https://ej2.syncfusion.com/documentation/api/grid/column#textalign) property.
> * The `headerTextAlign` property also works with the stacked header feature in Syncfusion<sup style="font-size:70%">&reg;</sup> Grid, aligning the header text in sub-headers as well.

## Autowrap the header text

Header text wrapping enables proper display of lengthy column names or descriptive labels within defined column widths. When content exceeds boundary limits, automatic wrapping to multiple lines maintains readability and prevents text overflow. The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid supports configurable text wrapping with options to wrap headers only, content only, or both, optimizing space usage without sacrificing information clarity.

To enable autowrap, set the `allowTextWrap` property to `true`. The auto wrap mode can be configured using the [textWrapSettings.wrapMode](https://ej2.syncfusion.com/angular/documentation/api/grid/textWrapSettings#wrapmode) property.

Grid provides the below three options for configuring:

* `Both`: This is the default value for wrapMode. With this option, both the grid header text and content is wrapped.
* `Header`: With this option, only the grid header text is wrapped.
* `Content`: With this option, only the grid content is wrapped.

> * If a `ColumnDirective` width is not specified, then the Autowrap of columns will be adjusted with respect to the grid's width.
> * If a `ColumnDirective` header text contains no white space, the text may not be wrapped.
> * If the content of a cell contains HTML tags, the Autowrap functionality may not work as expected. In such cases, use the [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column#headertemplate) and [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column#template) properties of the column to customize the appearance of the header and cell content.

In the following example, the `textWrapSettings.wrapMode` property is set to `Header` to wrap only the grid header text to the next line.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/autowrap-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/autowrap-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/autowrap-cs3" %}

## Change the height of header

When the default header height is not sufficient to display content, it can be adjusted to fit the design requirements. This is especially useful when headers are customized with a header template that includes icons, images, or multi‑line text. Header height can be modified using CSS styles or dynamic methods, ensuring that all content is visible and the grid remains well‑organized.

**Using CSS**

Use CSS to override the default height of the `.e-grid .e-headercell` class to change the height of the header.

```css
.e-grid .e-headercell {
  height: 130px;
}
```

**Using methods**

To dynamically adjust the header height, use the [getHeaderContent](https://ej2.syncfusion.com/angular/documentation/api/grid#getheadercontent) method to retrieve the header content element. Then use `querySelectorAll` to access all header cell elements with the class `e-headercell` and adjust their height via the style property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs28/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs28/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs28" %}

> * The [getHeaderTable](https://ej2.syncfusion.com/angular/documentation/api/grid#getheadertable) method can also be used to access the header table element for adjustment.
> * The header row height cannot be reduced below the default height of "42px" using the `e-columnheader` class.

## Change header text dynamically

Dynamic header modification is essential for interactive grids where header content needs to change based on input, runtime conditions, or business logic. The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component enables real-time modification of column header text through events or property accessors. This feature is particularly useful in scenarios such as localization, conditional labeling, or updating headers based on applied filters or grouping.

**Using Event:**

The [headerCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid#headercellinfo) event of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid enables modification of header text dynamically. This event triggers for each header cell element rendered in the Grid. When the `headerCellInfo` event triggers, it provides a `HeaderCellInfoEventArgs` object containing the following properties:

* `cell`: Defines the header cell that is being modified.
* `node`: Defines the DOM element of the header cell that is being modified.

These properties can be used to access and modify the header text of the corresponding column. Once the header text is modified, refresh the Grid to reflect the changes by calling the [refreshHeader](https://ej2.syncfusion.com/documentation/api/grid#refreshheader) method of the Grid.

**Using method:**

The Grid component provides several methods to change column header text dynamically:

| # | Method                          | Description                                                                                                           |
|---|---------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| 1 | [getColumnByField](https://ej2.syncfusion.com/angular/documentation/api/grid#getcolumnbyfield)             | Returns the entire column object corresponding to a field name, including properties such as header text, width, and alignment. |
| 2 | [getColumnHeaderByField](https://ej2.syncfusion.com/angular/documentation/api/grid#getcolumnheaderbyfield)        | Retrieves the header element of a column by its field name. Modify the `textContent` property to change header text. This method returns only the header element reference, not the column object. |
| 3 |  [getColumnIndexByField](https://ej2.syncfusion.com/documentation/api/grid#getcolumnindexbyfield)         | Retrieves the column index by field name. Use with `getColumnByIndex` to retrieve the column object and modify its `headerText` property. |
| 4 | [getColumnByUid](https://ej2.syncfusion.com/angular/documentation/api/grid#getcolumnbyuid)               | Retrieves the column object by its unique identifier (UID). Modify the `headerText` property to change header text. |
| 5 | [getColumnHeaderByIndex](https://ej2.syncfusion.com/angular/documentation/api/grid#getcolumnheaderbyindex)        | Retrieves the header element by its zero-based index. Modify the `textContent` property to change header text. |
| 6 | [getColumnIndexByUid](https://ej2.syncfusion.com/angular/documentation/api/grid#getcolumnindexbyuid)          | Retrieves the column index by unique identifier. Use with `getColumnByIndex` to modify the `headerText` property. |
| 7 | [getColumnHeaderByUid](https://ej2.syncfusion.com/angular/documentation/api/grid#getcolumnheaderbyuid)         | Retrieves the header element by its unique identifier. Modify the `textContent` property to change header text. If the column has only a template without a defined field, this method provides access to the header element. |
	
> * When header text is changed dynamically, the Grid must be refreshed by calling the [refreshHeader](https://ej2.syncfusion.com/angular/documentation/api/grid#refreshheader) method to reflect the changes.
> * UIDs are automatically generated by the Grid component and may change when the grid is refreshed or updated.

Here is an example of changing the header text of a column using the `getColumnByField` method:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/change-headertext-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/change-headertext-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/change-headertext-cs1" %}

**Conditional header text customization**

The column `headerValueAccessor` property in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid enables customization of column header cell text. This is useful in scenarios requiring alternate language display, specific formatting, or additional header information. This property triggers every time the header cell renders. This property accepts a callback function with two arguments:

  * `field`: Represents the current field of the column.
  * `column`: Represents the current column object.

> * Use `headerValueAccessor` only to modify header text; avoid DOM operations such as adding or manipulating elements. Use the [headerCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid#headercellinfo) event for DOM-related customizations.
> * The callback function should return a string representing the new header text.
> * The [refreshHeader](https://ej2.syncfusion.com/angular/documentation/api/grid#refreshheader) method can be used to refresh only the column header after dynamically changing the header content.
> * This property can be applied to individual columns or for all columns by adding it to the grid's properties.
  
Here's an example of using the `headerValueAccessor` property to change the header text of a column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/change-valueaccessor-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/change-valueaccessor-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/change-valueaccessor-cs1" %}

**Changing the header text of all columns**

To change header text for all columns, loop through the columns collection and set the `headerText` property for each column.

 {% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/change-headertext-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/change-headertext-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/change-headertext-cs5" %}

## Change the orientation of header text

By default, column header text in the Grid is oriented horizontally. In data visualization scenarios especially grids with many columns where horizontal headers consume excessive space rotating the header text vertically, diagonally, or at a custom angle optimizes layout and enhances visual hierarchy and readability. This can be achieved by applying a custom CSS class to the header cell using the [customAttributes](https://ej2.syncfusion.com/angular/documentation/api/grid/column#customattributes) property, then defining CSS transformations.

Follow these steps to change header text orientation in Grid:

**Step 1: Create a CSS class with orientation style for grid header cell**

Create a CSS class with the `transform` property to rotate header text "90" degrees. This class will be applied to the header cell using the `customAttributes` property.

```css
.orientation .e-headercelldiv {
    transform: rotate(90deg);
}
```

**Step 2: Add the custom CSS class to the grid column**

Add the custom CSS class to a column using the `customAttributes` property. 

For example, to add the "orientationcss" class to the "Freight" column:

```typescript
<e-column field='Freight' headerText='Freight' textAlign='Center' format='C2' [customAttributes]='customAttributes' width=80></e-column>
```

**Step 3: Resize the header cell height**

After adding the custom CSS class to a column, resize the header cell height to ensure the rotated header text displays fully using the following code:

```typescript
setHeaderHeight(args) {
    let textWidth: number = document.querySelector('.orientation > div').scrollWidth;//Obtain the width of the headerText content.
    let headerCell: NodeList = document.querySelectorAll('.e-headercell');
    for(let i: number = 0; i < headerCell.length; i++) {
        (<HTMLElement>headerCell.item(i)).style.height = textWidth + 'px'; //Assign the obtained textWidth as the height of the headerCell.
    }
}

```

The following example demonstrates changing the orientation of the "Freight" column header text to "90" degrees:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/header-orientation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/header-orientation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/header-orientation-cs1" %}

## Translate header text using ngx-translate 

The `ngx-translate` library provides `internationalization (i18n)` and `localization (l10n)` support for Angular applications. With `ngx-translate`, Angular applications can be easily translated into multiple languages.

In the context of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component, ngx-translate can be used to translate the header text of the Grid's columns. There are two ways to achieve this: through header text and through header template.

### Through header text  

To translate the header text of the Grid's columns using `ngx-translate` through header text, use the `translate` pipe for the [headerText](https://ej2.syncfusion.com/angular/documentation/api/grid/column#headertext) property.

**Step 1**: Create and Configure the TranslateService

````typescript

import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public translate: TranslateService) {
  }

  @ViewChild('grid', { static: true })
  public grid!: GridComponent;
  public flag: boolean = true;
  public data: Object[] = [];

  changeLanguage(lang: string) {
    this.translate.use(lang);

    setTimeout(() => {
      this.grid.refreshHeader();
    }, 500);
  }

  ngOnInit(): void {
    this.data = [
      {
        OrderID: 10248,
        CustomerID: 'VINET',
        lineId: 5,
        start: 'Reims',
        destination: 'France',
      },
      {
        OrderID: 10249,
        CustomerID: 'TOMSP',
        lineId: 6,
        start: 'Münster',
        destination: 'Germany',
      },
      {
        OrderID: 10250,
        CustomerID: 'HANAR',
        lineId: 2,
        start: 'Rio de Janeiro',
        destination: 'Brazil',
      },
    ];
  }
}

````

**Step 2**: Use the translate pipe in HTML code to translate the `headerText` of the column.


{% tabs %}
{% highlight ts tabtitle="app.component.html" %}
{% raw %}
<h1> Ngx translate pipe for header text in Angular Grid component</h1>
<h1></h1>
<div class="container-fluid py-3">
  <div class="btn-group btn-group-sm py-5">
    <button  ejs-button type="button" class="btn btn-sm btn-info"
     (click)="changeLanguage('en')">en</button>
    <button  ejs-button type="button" class="btn btn-sm btn-success"
    (click)="changeLanguage('de')">de</button>
    <button  ejs-button ejs-button type="button" ejs-button class="btn btn-sm btn-warning"
    (click)="changeLanguage('es-ES')">es</button>
  </div>
</div>
<div style="padding:20px 0px 0px 0px">
  <ejs-grid #grid [dataSource]="data" height="350">
    <e-columns>
      <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right"></e-column>
      <e-column field="lineId" headerText="{{ 'Line' | translate }}" width="120" textAlign="Right">
      </e-column>
      <e-column field="start" headerText="{{ 'Start' | translate }}" width="140">
      </e-column>
      <e-column field="destination" headerText="{{ 'Destination' | translate }}" width="170">
      </e-column>
    </e-columns>
  </ejs-grid>
<div>
{% endraw %}
{% endhighlight %}
{% endtabs %}


**Step 3**: Import the `TranslateModule` and `TranslateLoader` in the **app.module.ts** file. Also import the `HttpClientModule` to enable HTTP requests for loading translation files.

```ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: '',
    }),
    CommonModule,
    GridAllModule,
    BrowserModule,
    ButtonModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

```

In the above code, the required modules are imported and a function called `HttpLoaderFactory` is defined that returns an instance of `TranslateHttpLoader`, which is used to load translation files.

**Step 4**: Add the json file with the translation text in the required languages:

```json
en.json { 

    "Line": "Line",
    "Start": "Start",
    "Destination": "Destination"

}
```

```json

de.json { 
 "changeLanguage": "Ändere Sprache",
    "Line": "Linie",
    "Start": "Startpunkt",
    "Destination": "Zielpunkt"
}

```

```json
es-ES.json {
    "changeLanguage": "cambiar idioma",
    "Line": "Línea",
    "Start": "Comenzar",
    "Destination": "Destino"
  }
  
```

The following screenshot represents the translation of the header text of a Syncfusion Angular Grid component to multiple languages using ngx-translate:

![ng-translate-headertext](../images/ng-translate-headertext.gif)

### Through header template

To translate the header text of the Grid's columns using `ngx-translate` through header template, use the `translate` pipe in the header templates of the Grid component.

Here are the steps to use ngx-translate pipe for Grid's header template in Angular Grid component:

**Step 1**: Create and Configure the `TranslateService`

````typescript
import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public translate: TranslateService) {
  }

  @ViewChild('grid', { static: true })
  public grid!: GridComponent;
  public flag: boolean = true;
  public data: Object[] = [];

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit(): void {
    this.data = [
      {
        OrderID: 10248,
        CustomerID: 'VINET',
        lineId: 5,
        start: 'Reims',
        destination: 'France',
      },
      {
        OrderID: 10249,
        CustomerID: 'TOMSP',
        lineId: 6,
        start: 'Münster',
        destination: 'Germany',
      },
      {
        OrderID: 10250,
        CustomerID: 'HANAR',
        lineId: 2,
        start: 'Rio de Janeiro',
        destination: 'Brazil',
      },
    ];
  }
}


````

**Step 2**: Use the `ngx-translate` pipe in Angular Grid component header templates to translate the headers dynamically.

{% tabs %}
{% highlight ts tabtitle="app.component.html" %}
{% raw %}
<h1> Ngx translate pipe for header template in Angular Grid component</h1>
<h1></h1><div class="container-fluid py-3">
  <div class="btn-group btn-group-sm py-5">
    <button ejs-button type="button" class="btn btn-sm btn-info" 
    (click)="changeLanguage('en-US')"> en-US</button>
    <button ejs-button type="button" class="btn btn-sm btn-success"
    (click)="changeLanguage('de-DE')"> de-DE</button>
  </div>
</div>
<div style="padding:20px 0px 0px 0px">
  <ejs-grid [dataSource]="data" height="350">
    <e-columns>
      <e-column
        field="OrderID"
        headerText="Order ID"
        width="120"
        textAlign="Right"
      ></e-column>
      <e-column field="lineId" width="120" textAlign="Right"
        ><ng-template #headerTemplate let-data>
          <div>
            {{ 'Line' | translate }}
          </div>
        </ng-template></e-column
      >
      <e-column field="start" width="140"
        ><ng-template #headerTemplate let-data>
          <div>
            {{ 'Start' | translate }}
          </div>
        </ng-template></e-column
      >
      <e-column field="destination" width="170"
        ><ng-template #headerTemplate let-data>
          <div>
            {{ 'Destination' | translate }}
          </div>
        </ng-template></e-column>
    </e-columns>
  </ejs-grid>
</div>
{% endraw %}
{% endhighlight %}
{% endtabs %} 

**Step 3**: Import the required modules in **app.module.ts** file along with translate loader function:

```ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'en-US',
    }),
    CommonModule,
    GridAllModule,
    BrowserModule,
    ButtonModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

```

**Step 4**: Add the json file with the translation text in the required languages:

```json

en.json { 

    "Line": "Line",
    "Start": "Start",
    "Destination": "Destination"
}

```

```json

de.json { 
 "changeLanguage": "Ändere Sprache",
    "Line": "Linie",
    "Start": "Startpunkt",
    "Destination": "Zielpunkt"
}

```

The following screenshot represents the translation of the header text of a Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component to multiple languages using ngx-translate:

![ng-translate-headerTemplate](../images/ng-translate-headerTemplate.gif)

## Custom tooltip for header

Tooltips in headers provide contextual information that helps understand the purpose or content of each column without cluttering the UI. Custom tooltips for headers display additional information when hovering over column headers in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid, particularly useful when space limitations prevent full descriptions in headers or when additional column metadata needs to be communicated.

Custom tooltips can be enabled using the [beforeRender](https://ej2.syncfusion.com/angular/documentation/api/grid#beforeRender) event of the Grid component. This event triggers before each header cell renders, enabling addition of a custom tooltip using the [tooltip](https://ej2.syncfusion.com/angular/documentation/tooltip/content) component.

Here's an example of using the `beforeRender` event to add a custom tooltip to a header cell:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs27/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs27/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs27" %}

> The [headerCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid#querycellinfo) event can also be used to customize the header tooltip. This event is triggered for each header cell after it is rendered.

## Customize header text styles 

Header styling enables visual distinction and emphasizes important columns or data categories within the grid. Customizing header appearance through font, background color, and other styles meets specific design requirements and improves information hierarchy. The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component provides multiple approaches for header customization through CSS, properties, methods, or event-based styling.

### Using CSS

Styles can be applied to header cells using CSS selectors. The Grid assigns the `.e-headercell` class to each header cell element, which can be used to change the background color and text color of column headers.

```CSS
  .e-grid .e-headercell {
    background-color: #a2d6f4;
    color:rgb(3, 2, 2);
  }
```
Here's an example that demonstrates customizing the appearance of a column header in the Grid using **className**:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/header-style-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/header-style-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/header-style-cs1" %}

### Using property 

Column header appearance in Grid can be customized using the [customAttributes](https://ej2.syncfusion.com/angular/documentation/api/grid/column#customattributes) property. This property accepts an object with name-value pairs to customize CSS properties for grid header cells. Multiple CSS properties can be set to the custom class using the `customAttributes` property.

To customize column headers, follow these steps:

**Step 1:** Define a CSS class specifying the desired styles for header cells.

  ```CSS
    .e-grid .e-headercell.custom {
       background-color: rgb(43, 205, 226);
       color: black;
    }

  ```

**Step 2:** Set the `customAttributes` property of the column to an object containing the CSS class "customcss". This class will be applied to the column's header cell.

  ```ts

    {field="Freight" headerText="Freight" [customAttributes]="{class: '.custom'} }

  ```

The following example demonstrates customizing the appearance of the "OrderID" and "OrderDate" columns using custom attributes:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/header-style-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/header-style-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/header-style-cs2" %}

### Using method 

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid provides methods to customize column header appearance:

| # | Method | Description |
|---|--------|-------------|
| 1 | [getColumnHeaderByIndex](https://ej2.syncfusion.com/angular/documentation/api/grid#getcolumnheaderbyindex) | Customizes a specific column header by specifying the column index. |
| 2 | [getColumnHeaderByField](https://ej2.syncfusion.com/angular/documentation/api/grid#getcolumnheaderbyfield) | Retrieves the header element by field name to customize its appearance. |
| 3 | [getColumnHeaderByUid](https://ej2.syncfusion.com/angular/documentation/api/grid#getcolumnheaderbyuid) | Retrieves the header element by unique ID to customize its appearance. |
| 4 | [getColumnIndexByField](https://ej2.syncfusion.com/angular/documentation/api/grid#getcolumnindexbyfield) | Retrieves the column index by field name to access and customize the header element. |
| 5 | [getColumnIndexByUid](https://ej2.syncfusion.com/angular/documentation/api/grid#getcolumnindexbyuid) | Retrieves the column index by unique ID to access and customize the header element. |

Here's an example of using these methods to change the style of a specific column header:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/header-method-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/header-method-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/header-method-cs2" %}

> The UID is automatically generated by the Grid component and may change whenever the grid is refreshed or updated.

### Using event

To customize the appearance of the grid header, handle the [headerCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid#querycellinfo) event of the grid. This event is triggered when each header cell is rendered in the grid, and provides an object that contains information about the header cell. This object can be used to modify the styles of the header column.

The following example demonstrates adding a `headerCellInfo` event handler to the grid. In the event handler, it checks whether the current header column is the "Order Date" field and then applies the appropriate CSS class to the cell based on its value:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/header-style-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/header-style-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/header-style-cs3" %}

## Refresh header 

Header refresh functionality enables synchronization between the visual display and underlying column definitions. Whenever column properties are programmatically modified (such as header text, width, or alignment), refreshing the header ensures the UI reflects all changes immediately. The [refreshHeader](https://ej2.syncfusion.com/angular/documentation/api/grid#refreshheader) method provides a lightweight approach to update only the header section without reloading the entire grid.

The following example demonstrates using the `refreshHeader` method to update the grid header:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/refresh-header-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/refresh-header-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/refresh-header-cs1" %}

> * The `refreshHeader` method updates only the grid header and not the entire grid.
> * To refresh the entire grid, use the `refresh` method instead.

## Get header element 

Accessing header elements programmatically is necessary for advanced customizations, styling, or interaction handling that go beyond built-in configuration options. The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid provides multiple methods to retrieve specific header elements by various identifiers, enabling direct DOM manipulation or reading header metadata.

| # | Method | Description | Example |
|---|--------|-------------|---------|
| 1 | [getHeaderContent](https://ej2.syncfusion.com/angular/documentation/api/grid#getheadercontent) | Returns the header div element of the Grid, providing access to the entire header content. | `const headerElement = grid.getHeaderContent();` |
| 2 | [getHeaderTable](https://ej2.syncfusion.com/angular/documentation/api/grid#getheadertable) | Returns the header table element of the Grid, providing access only to the header table. | `const headerTableElement = grid.getHeaderTable();` |
| 3 | [getColumnHeaderByUid](https://ej2.syncfusion.com/angular/documentation/api/grid#getcolumnindexbyuid) | Returns the column header element by its unique identifier. | `const columnHeaderElement = grid.getColumnHeaderByUid("e-grid2");` |
| 4 | [getColumnHeaderByIndex](https://ej2.syncfusion.com/angular/documentation/api/grid#getcolumnheaderbyindex) | Returns the column header element by its index. | `const columnHeaderElement = grid.getColumnHeaderByIndex(0);` |
| 5 | [getColumnHeaderByField](https://ej2.syncfusion.com/angular/documentation/api/grid#getcolumnheaderbyfield) | Returns the column header element by its field name. | `const columnHeaderElement = grid.getColumnHeaderByField("OrderID");` |

> The UID is automatically generated by the Grid component and may change whenever the grid is refreshed or updated.