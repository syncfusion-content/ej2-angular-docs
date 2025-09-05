---
layout: post
title: Headers in Angular TreeGrid component | Syncfusion
description: Learn here all about Headers in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column Headers 
documentation: ug
domainurl: ##DomainURL##
---

# Headers in Angular TreeGrid component

## Header text

By default, the header text of a column in the TreeGrid displays the column's [field](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#field) value. However, the default header title can be overridden by providing custom header text using the [headerText](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#headertext) property.

To enable the `headerText` property, define it in the **e-column** element. The following example demonstrates how to enable header text for a TreeGrid column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-render-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-render-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-render-cs1" %}

 >* The `headerText` property is optional. If not defined, the corresponding column's field value is set as header text for that column.  
>* The [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#headertemplate) property can also be used to apply custom HTML content to the header cell.

## Header template

The header element can be customized using the [`headerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#headerTemplate) property. This property allows rendering custom HTML elements or Angular components to the header element.

In this example, custom elements are rendered for both **taskName** and **duration** column headers.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-header-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-header-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-header-cs1" %}

>* The `headerTemplate` property is only applicable to TreeGrid columns that have a header element.
>* Any HTML or Angular component can be used in the header template to add additional functionality to the header element.

### Stacked header

The TreeGrid allows grouping multiple levels of column headers by stacking columns. This feature enables organizing columns in a more structured and understandable way. This can be achieved by setting the [column->columns](https://ej2.syncfusion.com/documentation/api/treegrid/column/#columns) property. Within this property, an array of column objects can be defined to group together as sub-headers under a main header. The `headerText` property of each sub-header column can be defined to set the text for that sub-header.

The appearance of stacked header elements can be customized using the headerTemplate property. This property accepts an ng-template reference, allowing definition of custom HTML elements or Angular components to the header element. The following example demonstrates using stacked headers with a custom `headerTemplate` in the Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-header-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-header-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-header-cs2" %}

## Align the text of header text

The text in column headers of the TreeGrid component can be horizontally aligned using the [headerTextAlign](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#headertextalign) property. By default, the text is aligned to the left, but the alignment can be changed by setting the value of the `headerTextAlign` property to one of the following options:

* **Left**: Aligns the text to the left (default).
* **Center**: Aligns the text to the center.
* **Right**: Aligns the text to the right.
* **Justify**: Header text is justified.

The following example demonstrates using the `headerTextAlign` property to align the text of a TreeGrid column header:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/header-align-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/header-align-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/header-align-cs1" %}

>* The `headerTextAlign` property only changes the alignment of the text in the column header, not the content of the column. To align both the column header and content, use the [textAlign](https://ej2.syncfusion.com/documentation/api/treegrid/column/#textalign) property.
>* The `headerTextAlign` property can also be used with the stacked header feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid. The property will align the header text in the sub-headers as well.

## Autowrap the header text

The autowrap feature allows the cell content of the TreeGrid to wrap to the next line when it exceeds the boundary of the specified cell width. The cell content wrapping works based on the position of white space between words. To support the Autowrap functionality in the Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid, set the appropriate [width](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#width) for the columns. The column width defines the maximum width of a column and helps to wrap the content automatically.

To enable autowrap, set the `allowTextWrap` property to **true**. The auto wrap mode can also be configured by setting the [textWrapSettings.wrapMode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/textWrapSettings/#wrapmode) property.

The TreeGrid provides three options for configuring:

* **Both**: This is the default value for wrapMode. With this option, both the TreeGrid header text and content is wrapped.
* **Header**: With this option, only the TreeGrid header text is wrapped.
* **Content**: With this option, only the TreeGrid content is wrapped.

>* If a column width is not specified, then the Autowrap of columns will be adjusted with respect to the TreeGrid's width.
>* If a column's header text contains no white space, the text may not be wrapped.
>* If the content of a cell contains HTML tags, the Autowrap functionality may not work as expected. In such cases, the [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#headertemplate) and [template](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#template) properties of the column can be used to customize the appearance of the header and cell content.

In the following example, the `textWrapSettings.wrapMode` property is set to **Header**; only the TreeGrid header text wraps to the next line.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/auto-wrap-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/auto-wrap-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/auto-wrap-cs1" %}

## Change the height of header

Changing the height of the header can be useful when the default height is not sufficient to display the header content cell. For example, if a header contains a lot of text or if an image needs to be added to the header, the height of the header may need to be increased to accommodate the content. This can be achieved by changing the height of the header using CSS or by dynamically adjusting the height in JavaScript.

**Using CSS**

CSS can be used to override the default height of the **.e-treegrid .e-headercell** class to change the height of the header. Here is an example code snippet:

```css
.e-treegrid .e-headercell {
  height: 130px;
}
```

**Using methods**

To change the height of the header dynamically, the [getHeaderContent](https://ej2.syncfusion.com/angular/documentation/api/treegrid#getheadercontent) method can be used to get the header content element of the TreeGrid. Then, the **querySelectorAll** method can be used to get all the header cell elements with the class **e-headercell**. Finally, each header cell element can be looped through and its style property set to adjust the height.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %} 
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs2" %}

>* The [getHeaderTable](https://ej2.syncfusion.com/angular/documentation/api/treegrid#getheadertable) method can also be used to get the table element of the header, and then adjust the height.
>* The height of row cannot be changed below the default height of 42px using the **e-columnheader** class.

## Change header text dynamically

The Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid component provides a way to modify the header text of a corresponding column in real-time based on an event. This feature can be useful in various scenarios, such as displaying custom header text for a specific column or updating the header text dynamically based on input. By allowing for dynamic changes to the header text, the TreeGrid provides a more flexible and customizable experience.

**Using Event**

To modify the header text of a corresponding column dynamically, the [headerCellInfo](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#headercellinfo) event provided by the Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid can be used. This event is triggered for each header cell element rendered in the TreeGrid.

When the `headerCellInfo` event is triggered, it provides a **HeaderCellInfoEventArgs** object as a parameter. This object contains the following properties:

* **cell**: Defines the header cell that is being modified.
* **node**: Defines the DOM element of the header cell that is being modified.

These properties can be used to access and modify the header text of the corresponding column. Once the header text is modified, the TreeGrid can be refreshed to reflect the changes by calling the [refreshHeader](https://ej2.syncfusion.com/documentation/api/treegrid#refreshheader) method.

**Using method**

The TreeGrid component provides several methods that allow changing the column header text dynamically. Here are some of the methods that can be used:

1. [getColumnByField](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnbyfield): This method takes a field name as a parameter and returns the entire column object that corresponds to that field name, including properties such as headerText, width, and alignment. This method can be used to modify any aspect of the column.

2.	[getColumnHeaderByField](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnheaderbyfield): Retrieves the header element of a column based on its field name. The **textContent** property of the header element can be modified to change the header text. This method does not return a reference to the column object itself, only to the header element.

3.	[getColumnIndexByField](https://ej2.syncfusion.com/documentation/api/treegrid/#getcolumnindexbyfield): Retrieves the index of a column based on its field name. The `getColumnByIndex` method can then be used to retrieve the column object and modify its `headerText` property to change the header text.

4.	[getColumnByUid](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnbyuid): Retrieves the column object based on its unique identifier (UID). The `headerText` property of the column object can be modified to change the header text.

5.	[getColumnHeaderByIndex](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnheaderbyindex): Retrieves the header element of a column based on its zero-based index. The **textContent** property of the header element can be modified to change the header text. This method does not return a reference to the column object itself, only to the header element.

6.	[getColumnIndexByUid](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnindexbyuid): Retrieves the index of a column based on its unique identifier (UID). The `getColumnByIndex` method can then be used to retrieve the column object and modify its `headerText` property to change the header text.

7.	[getColumnHeaderByUid](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnheaderbyuid): Retrieves the header element of a column based on its unique identifier (UID). The **textContent** property of the header element can be modified to change the header text. This method does not return a reference to the column object itself, only to the header element.
	
>* When changing the header text dynamically, make sure to **refresh** the TreeGrid to reflect the changes by calling the [refreshHeader](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#refreshheader) method.
>* The UID is automatically generated by the TreeGrid component and may change whenever the TreeGrid is refreshed or updated.

The following example demonstrates how to change the header text of a column using the `getColumnByField` method:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/change-headertext-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/change-headertext-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/change-headertext-cs1" %}

**Changing the header text of all columns**

To change the header text of all columns in the TreeGrid, loop through the Columns collection of the TreeGrid and set the `headerText` property for each column. Here is an example:

 {% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/change-headertext-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/change-headertext-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/change-headertext-cs3" %}
                                                           
## Change the orientation of header text

By default, the text in the column headers of the Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid control is oriented horizontally. However, in some cases, the orientation of the header text may need to be changed to vertical, diagonal, or at a custom angle. This can be achieved by adding a custom CSS class to the column header cell using the [customAttributes](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#customattributes) property of the TreeGrid columns.

Follow the steps below to change the orientation of the header text in TreeGrid:

**Step 1**: **Create a CSS class with orientation style for TreeGrid header cell**

To `rotate` the header text, a CSS class with the `transform` property that rotates the header text 90 degrees can be created. This class will be added to the header cell using the `customAttributes` property.

```css
.orientationcss .e-headercelldiv {
    transform: rotate(90deg);
}
```

**Step 2**: **Add the custom CSS class to the TreeGrid column**

Once the CSS class has been created, it can be added to the particular column by using the `customAttributes` property. This property allows adding any custom attribute to the TreeGrid column.

For example, to add the **orientationcss** class to the EndDate column, the following code can be used:

```typescript
<e-column field='EndDate' headerText='End Date' width='90' format="yMd" textAlign='Center' [customAttributes]='customAttributes' ></e-column>
```

**Step 3**: **Resize the header cell height**

After adding the custom CSS class to a column, the header cell height needs to be resized so that the rotated header text is fully visible. This can be achieved by using the 'created' event of the TreeGrid, as shown in the following code:

```typescript
setHeaderHeight(args) {
    let textWidth: number = document.querySelector('.orientationcss > div').scrollWidth;//Obtain the width of the headerText content.
    let headerCell: NodeList = document.querySelectorAll('.e-headercell');
    for(let i: number = 0; i < headerCell.length; i++) {
        (<HTMLElement>headerCell.item(i)).style.height = textWidth + 'px'; //Assign the obtained textWidth as the height of the headerCell.
    }
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/header-orientation-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/header-orientation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/header-orientation-cs1" %}

## Translate header text using ngx-translate 

The ngx-translate library provides **internationalization (i18n)** and **localization (l10n)** support for Angular applications. With ngx-translate, Angular applications can be easily translated into multiple languages.

In the context of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid component, ngx-translate can be used to translate the header text of the TreeGrid's columns. There are two ways to achieve this: through header text and through header template.

### Through header text  

To translate the header text of the TreeGrid's columns using **ngx-translate** through header text, the **translate** pipe can be used for the [headerText](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#headertext) property.

**Step 1**: Create and Configure the TranslateService

````typescript

import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public translate: TranslateService) {
  }

  @ViewChild('treegrid', { static: true })
  public treegrid!: TreeGridComponent;
  public flag: boolean = true;
  public data: Object[] = [];

  changeLanguage(lang: string) {
    this.translate.use(lang);

    setTimeout(() => {
      this.treegrid.refreshHeader();
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
        subtasks [
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
        ]
      }
    ];
  }
}

````

**Step 2**: Import the **TranslateModule** and **TranslateLoader** in the app.module.ts file. The `HttpClientModule` also needs to be imported to enable HTTP requests for loading translation files.

```ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
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
    TreeGridAllModule,
    BrowserModule,
    ButtonModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

```

In the above code, the required modules are imported and a function called **HttpLoaderFactory** is defined that returns an instance of **TranslateHttpLoader**, which is used to load translation files.

**Step 3**:  Use the translate pipe in the HTML code to translate the `headerText` of the column.

```html
{%  raw %}
<h1> Ngx translate pipe for header text in Angular TreeGrid component</h1>
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
  <ejs-treegrid #treegrid [dataSource]="data" childMapping="subtasks" treeColumnIndex='1' height="350">
    <e-columns>
      <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right"></e-column>
      <e-column field="lineId" headerText="{{ 'Line' | translate }}" width="120" textAlign="Right">
      </e-column>
      <e-column field="start" headerText="{{ 'Start' | translate }}" width="140">
      </e-column>
      <e-column field="destination" headerText="{{ 'Destination' | translate }}" width="170">
      </e-column>
    </e-columns>
  </ejs-treegrid>
<div>
{% endraw %}
```

**Step 4**: Add the json file with the translation text in the required languages,

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

### Through header template

To translate the header text of the TreeGrid's columns using **ngx-translate** through header template, the **translate** pipe can be used in the header templates of the TreeGrid component.

Here are the steps to use ngx-translate pipe for TreeGrid's header template in Angular TreeGrid component:

**Step 1**: Create and Configure the TranslateService

````typescript
import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public translate: TranslateService) {
  }

  @ViewChild('treegrid', { static: true })
  public treegrid!: TreeGridComponent;
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
        subtasks [
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
        ]
      }
    ];
  }
}


````

**Step 2**: Import the required modules in **app.module.ts** file along with translate loader function,

```ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
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
    TreeGridAllModule,
    BrowserModule,
    ButtonModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

```

**Step 3**: Use the ngx-translate pipe in the Angular TreeGrid component header templates to translate the headers dynamically.

```Html
{% raw %}
<h1> Ngx translate pipe for header template in Angular TreeGrid component</h1>
<h1></h1><div class="container-fluid py-3">
  <div class="btn-group btn-group-sm py-5">
    <button ejs-button type="button" class="btn btn-sm btn-info" 
    (click)="changeLanguage('en-US')"> en-US</button>
    <button ejs-button type="button" class="btn btn-sm btn-success"
    (click)="changeLanguage('de-DE')"> de-DE</button>
  </div>
</div>
<div style="padding:20px 0px 0px 0px">
  <ejs-treegrid [dataSource]="data" childMapping='subtasks' treeColumnIndex=1 height="350">
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
  </ejs-treegrid>
</div>
{% endraw %}
```

**Step 4**: Add the json file with the translation text in the required languages,

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

## Custom tooltip for header

Custom tooltips for headers provide additional information when hovering over a column header in the Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid. This can be useful when there is not enough space to display all information related to a column, or when additional context may be helpful.

To enable custom tooltips for headers, the [beforeRender](https://ej2.syncfusion.com/angular/documentation/api/tooltip#beforerender) event of the Tooltip component can be used. This event is triggered for each header cell before it is rendered, allowing addition of a custom tooltip to the header cell using the [tooltip](https://ej2.syncfusion.com/angular/documentation/tooltip/content) component.

The following example demonstrates how to use the `beforeRender` event to add a custom tooltip to a header cell:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %} 
{% include code-snippet/treegrid/header-tooltip-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/header-tooltip-cs1/src/main.ts %}
{% endhighlight %}   
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/header-tooltip-cs1" %}

> * The [headerCellInfo](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#headercellinfo) event can also be used to customize the header tooltip. This event is triggered for each header cell after it is rendered.

## Customize header text styles 

Customizing the TreeGrid header styles allows modifying the appearance of the column header in the TreeGrid control to meet design requirements. The font, background color, and other styles of the header cells can be customized. To customize the header styles in the TreeGrid, CSS, properties, methods, or event support provided by the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid component can be used.

### Using CSS

Styles can be applied to the header cells using CSS selectors. The TreeGrid provides a class name for each header cell element, which can be used to apply styles to that specific header cell. The **.e-headercell** class can be used to change the background color and text color of the column header.

```CSS
  .e-treegrid .e-headercell {
    background-color: #a2d6f4;
    color:rgb(3, 2, 2);
  }
```
The following example demonstrates how to customize the appearance of a specific column header in the TreeGrid using **className**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/header-style-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/header-style-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/header-style-cs1" %}

### Using property 

The appearance of the column headers in TreeGrid can be customized using the [customAttributes](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#customattributes) property. The `customAttributes` property takes an object with the name-value pair to customize the CSS properties for TreeGrid header cells. Multiple CSS properties can also be set to the custom class using the customAttributes property.

To customize the header of a column, follow the steps below:

Step 1: Define a CSS class that specifies the styles to apply to the header cell of the column. For example, to change the background color and text color of the header cell, define a CSS class like this:

  ```CSS
    .e-treegrid .e-headercell.customcss {
       background-color: rgb(43, 205, 226);
      color: black;
    }

  ```

Step 2: Set the **customAttributes** property of the desired column to an object that contains the CSS class **customcss**. This CSS class will be applied to the header cell of the specified column in the TreeGrid.

  ```ts

     <e-column field='taskID' headerText='Task ID' textAlign='Right' [customAttributes]="{class:'customcss'}" width=120></e-column>

  ```

The following example demonstrates how to customize the appearance of the **TaskID** column using custom attributes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/header-style-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/header-style-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/header-style-cs2" %}

### Using method 

The Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid component provides methods to customize the appearance of the TreeGrid columns header.

1. [getColumnHeaderByIndex](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnheaderbyindex): This method is used to customize the appearance of a specific column header in the TreeGrid by specifying the index of the column for which to customize the header.

2. [getColumnHeaderByField](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnheaderbyfield): This method is used to retrieve the header element of a specific column by its field name. The retrieved element can be used to customize the appearance of the header element.

3. [getColumnHeaderByUid](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnheaderbyuid): This method is used to retrieve the header element of a specific column by its unique ID. The retrieved element can be used to customize the appearance of the header element.

 4. [getColumnIndexByField](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnindexbyfield):This method is used to retrieve the index of a specific column by its field name. The retrieved index can be used to access the header element and customize its appearance.

 5. [getColumnIndexByUid](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnindexbyuid): This method is used to retrieve the index of a specific column by its unique ID. The retrieved index can be used to access the header element and customize its appearance.

The following example demonstrates how to use these methods to change the style of a specific column header:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/header-style-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/header-style-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/header-style-cs3" %}

>* The UID is automatically generated by the TreeGrid component and may change whenever the TreeGrid is refreshed or updated.

### Using event

To customize the appearance of the TreeGrid header, the [headerCellInfo](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#querycellinfo) event of the TreeGrid can be handled. This event is triggered when each header cell is rendered in the TreeGrid, and provides an object that contains information about the header cell. This object can be used to modify the styles of the header column.

The following example demonstrates how to add a `headerCellInfo` event handler to the TreeGrid. In the event handler, it is checked whether the current header column is the **Start Date** field and then the appropriate CSS class is applied to the cell based on its value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/header-style-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/header-style-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/header-style-cs4" %}

## How to refresh header 

The refresh header feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid allows updating the header section of the TreeGrid whenever changes are made to the TreeGrid's columns. This feature is useful when changes in the header need to be reflected immediately, such as modifying the column header text, width, or alignment.

To use the refresh header feature, the [refreshHeader](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#refreshheader) method of the TreeGrid component can be called. This method updates the TreeGrid header with the latest changes made to the columns.

The following example demonstrates how to use the `refreshHeader` method to update the TreeGrid header:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-header-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-header-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/refresh-header-cs1" %}

>* The `refreshHeader` method updates only the TreeGrid header and not the entire TreeGrid.
>* To refresh the entire TreeGrid, the `refresh` method can be used instead.

## How to get header element 

To get the header element in a Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid, one of the following methods can be used:

1. [getHeaderContent](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getheadercontent): This method returns the header div element of the TreeGrid. This method can be used to access the entire header content of the TreeGrid.

    ```ts
    const headerElement = this.treegrid.getHeaderContent();    
    ```
2. [getHeaderTable](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getheadertable): This method returns the header table element of the TreeGrid. This method can be used to access only the header table of the TreeGrid.

   ```ts
    const headerTableElement = this.treegrid.getHeaderTable();
   ```

3. [getColumnHeaderByUid](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnindexbyuid): This method returns the column header element by its unique identifier.

   ```ts
    const columnHeaderElement = this.treegrid.getColumnHeaderByUid("e-treegrid2");
   ```

4. [getColumnHeaderByIndex](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnheaderbyindex): This method returns the column header element by its index.

   ```ts
    const columnHeaderElement = this.treegrid.getColumnHeaderByIndex(0);
   ```
5. [getColumnHeaderByField](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnheaderbyfield): This method returns the column header element by its field name.

   ```ts
    const columnHeaderElement = this.treegrid.getColumnHeaderByField("taskID"); 
   ```

>* The UID is automatically generated by the TreeGrid component and may change whenever the TreeGrid is refreshed or updated. 