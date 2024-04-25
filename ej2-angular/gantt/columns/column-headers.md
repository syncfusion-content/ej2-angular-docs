---
layout: post
title: Headers in Angular Gantt component | Syncfusion
description: Learn here all about Headers in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Headers
documentation: ug
domainurl: ##DomainURL##
---

# Headers in Angular Gantt component

## Header text

By default, the header text of a column in Gantt chart is displayed from the column's [field](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#field) value. However, you can easily override the default header title and provide a custom header text for the column using the [headerText](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#headertext) property. 

To enable the `headerText` property, you simply need to define it in the **e-column**. The following example demonstrates how to enable header text for a  Gantt column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnheader-cs1" %}

>* The `headerText` property is optional, and if it is not defined, then the corresponding column's field value is set as header text for that column.  
>* You can also use the [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#headertemplate) property to apply custom HTML content to the header cell.

## Header template

You can customize the header element by using the [`headerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#headertemplate) property. With this property, you can render custom HTML elements or Angular components to the header element.

In this demo, the custom element is rendered for both **TaskName** and **Duration** column headers.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnheader-cs2" %}

>* The `headerTemplate` property is only applicable to Gantt columns that have a header element.
>* You can use any HTML or Angular component in the header template to add additional functionality to the header element.


## Align the text of header text

You can horizontally align the text in column headers of the Gantt component using the [headerTextAlign](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#headertextalign) property. By default, the text is aligned to the left, but you can change the alignment by setting the value of the `headerTextAlign` property to one of the following options:

* **Left**: Aligns the text to the left (default).
* **Center**: Aligns the text to the center.
* **Right**: Aligns the text to the right.
* **Justify**: Header text is justified.

Here is an example of using the `headerTextAlign` property to align the text of a Gantt column header:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnheader-cs3" %}

>* The `headerTextAlign` property only changes the alignment of the text in the column header, and not the content of the column. If you want to align both the column header and content, you can use the [textAlign](https://ej2.syncfusion.com/documentation/api/gantt/column/#textalign) property.

## Autowrap the header text

The autowrap allows the cell content of the gantt chart to wrap to the next line when it exceeds the boundary of the specified cell width. The cell content wrapping works based on the position of white space between words. To support the Autowrap functionality in Syncfusion Gantt chart, you should set the appropriate [width](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#width) for the columns. The column width defines the maximum width of a column and helps to wrap the content automatically.

To enable autowrap, set the `allowTextWrap` property of treegrid object in gantt instance to **true**. You can also configure the auto wrap mode by setting the [textWrapSettings.wrapMode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/textWrapSettings/#wrapmode) property of treegrid object in gantt instance.

Gantt chart provides the below three options for configuring:

* **Both**: This is the default value for wrapMode. With this option, both the gantt header text and content is wrapped.
* **Header**: With this option, only the gantt header text is wrapped.
* **Content**: With this option, only the gantt content is wrapped.

>* If a column width is not specified, then the Autowrap of columns will be adjusted with respect to the gantt chart's width.
>* If a column's header text contains no white space, the text may not be wrapped.
>* If the content of a cell contains HTML tags, the Autowrap functionality may not work as expected. In such cases, you can use the [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#headertemplate) and [template](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#template) properties of the column to customize the appearance of the header and cell content.

In the example below, the `textWrapSettings.wrapMode` property is set to **Header**; only the gantt header text is wraps to the next line.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnheader-cs6" %}

## Change the height of header

Changing the height of the header can be useful in cases where the default height is not sufficient to display the header content cell. For example, if you have a header with a lot of text or if you want to add an image to the header, you may need to increase the height of the header to accommodate the content.This can be easily achieved by changing the height of the header using CSS or by dynamically adjusting the height in JavaScript.

**Using css**

You can use CSS to override the default height of the **.e-gantt .e-headercell** class to change the height of the header. Here is an example code snippet:

```css
.e-gantt .e-headercell {
  height: 130px;
}
```

**Using methods**

To change the height of the header dynamically, you can use the [getHeaderContent](https://ej2.syncfusion.com/angular/documentation/api/treegrid#getheadercontent) method of treegrid object in gantt instance to get the header content element of the gantt. Then, you can use the **querySelectorAll** method to get all the header cell elements with the class **e-headercell**. Finally, you can loop through each header cell element and set its style property to adjust the height.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnheader-cs4" %}

>* You can also use the [getHeaderTable](https://helpej2.syncfusion.com/angular/documentation/api/treegrid/#getheadertable) method of treegrid object in gantt instance  to get the table element of the header, and then adjust the height.
>* You cannot change the height of row below the default height of 42px using the **e-columnheader** class.

## Change header text dynamically

The Syncfusion Gantt chart component provides a way to modify the header text of a corresponding column in real-time based on an event. This feature can be useful in various scenarios, such as displaying a custom header text for a specific column or updating the header text dynamically based on input. By allowing for dynamic changes to the header text, the Gantt chart provides a more flexible and customizable experience.

**Using Event**

To modify the header text of a corresponding column dynamically, you can use the [headerCellInfo](https://helpej2.syncfusion.com/angular/documentation/api/gantt/#headercellinfo) event provided by the Syncfusion Gantt chart. This event is triggered for each header cell element rendered in the Gantt chart.

When the `headerCellInfo` event is triggered, it provides a **HeaderCellInfoEventArgs** object as a parameter. This object contains the following properties:

* **cell**: Defines the header cell that is being modified.
* **node**: Defines the DOM element of the header cell that is being modified.

You can use these properties to access and modify the header text of the corresponding column. Once the header text is modified, you can refresh the Gantt chart to reflect the changes by calling the [refreshHeader](https://helpej2.syncfusion.com/documentation/api/treegrid/#refreshheader) method of treegrid object in gantt instance.

**Using method**

The Gantt component provides several methods that allow you to change the column header text dynamically. Here are some of the methods of treegrid object in gantt instance you can use:

1. [getColumnByField](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnbyfield): This method takes a field name as a parameter and returns the entire column object that corresponds to that field name, including properties such as headertext, width, and alignment. You can use this method to modify any aspect of the column.

2.	[getColumnHeaderByField](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnheaderbyfield): Retrieves the header element of a column based on its field name. You can modify the **textContent** property of the header element to change the header text. This method does not return a reference to the column object itself, only to the header element.

3.	[getColumnIndexByField](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnindexbyfield): Retrieves the index of a column based on its field name. You can then use the `getColumnByIndex` method of grid object in gantt instance to retrieve the column object and modify its `headerText` property to change the header text.

4.	[getColumnByUid](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnbyuid): Retrieves the column object based on its unique identifier (UID). You can modify the `headerText` property of the column object to change the header text.

5.	[getColumnHeaderByIndex](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnheaderbyindex): Retrieves the header element of a column based on its zero-based index. You can modify the **textContent** property of the header element to change the header text. This method does not return a reference to the column object itself, only to the header element.

6.	[getColumnIndexByUid](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnindexbyuid): Retrieves the index of a column based on its unique identifier (UID). You can then use the `getColumnByIndex` method of grid object in gantt instance to retrieve the column object and modify its `headerText` property to change the header text.

7.	[getColumnHeaderByUid](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnheaderbyuid): Retrieves the header element of a column based on its unique identifier (UID). You can modify the **textContent** property of the  header element to change the header text. This method does not return a reference to the column object itself, only to the header element. If you only have an `ng-template` for the column header, and the column itself is not defined with a `field` , then you can use the `getColumnHeaderByUid` method to get a reference to the header element and modify its text content to change the header text.
	
>* When you change the header text dynamically, make sure to **refresh** the Gantt chart to reflect the changes by calling the [refreshHeader](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#refreshheader) method of treegrid object in gantt instance.
>* The UID is automatically generated by the Gantt chart component and may change whenever the gantt chart is refreshed or updated.

Here is an example of how to change the header text of a column using the `getColumnByField` method:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnheader-cs5" %}

**Changing the header text of all columns**

If you want to change the header text of all columns in the gantt chart, you can loop through the Columns collection of the gantt and set the `headerText` property for each column. Here is an example:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs7/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnheader-cs7" %}

## Change the orientation of header text

By default, the text in the column headers of the Syncfusion Gantt chart control is oriented horizontally. However, in some cases, you may want to change the orientation of the header text to vertical, diagonal, or at a custom angle. This can be achieved by adding a custom CSS class to the column header cell using the [customAttributes](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#customattributes) property of the Gantt chart columns.

Follow the below steps to change the orientation of the header text in Gantt chart:

**Step 1**: **Create a CSS class with orientation style for gantt header cell**

To `rotate` the header text, you can create a CSS class with the `transform` property that rotates the header text 90 degrees. This class will be added to the header cell using the `customAttributes` property.

```css
.e-gantt .e-headercell.orientationcss  {
  transform: rotate(90deg);
} 
```

**Step 2**: **Add the custom CSS class to the gantt chart column**

Once you have created the CSS class, you can add it to the particular column by using the `customAttributes` property. This property allows you to add any custom  attribute to the gantt column.

For example, to add the orientationcss class to the Duration column, you can use the following code:

```typescript
 <e-column field='Duration' headerText='Duration' textAlign='Center' width=90  [customAttributes]='customAttributes'></e-column>
```

**Step 3**: **Resize the header cell height**

After adding the custom CSS class to a column, you need to resize the header cell height so that the rotated header text is fully visible.

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
{% include code-snippet/gantt/columns/columnheader-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs8/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnheader-cs8" %}

## Translate header text using ngx-translate 

The ngx-translate library provides **internationalization (i18n)** and **localization (l10n)** support for Angular applications. With ngx-translate, you can easily translate your Angular application into multiple languages.

In the context of the Syncfusion Angular Gantt chart component, you can use ngx-translate to translate the header text of the Gantt chart's columns. There are two ways to achieve this: through header text and through header template.

### Through header text  

To translate the header text of the Gantt chart's columns using **ngx-translate** through header text, you can use the **translate** pipe for the [headerText](https://helpej2.syncfusion.com/angular/documentation/api/gantt/column/#headertext) property.

**Step 1**: Create and Configure the TranslateService

````typescript

import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public translate: TranslateService) { }

  changeLang(lang: string) {
    this.translate.use(lang);

    setTimeout(
      function (this: GanttComponent) {
        this.refresh();
      }.bind(this.gantt),
      800
    );
  }

  @ViewChild(GanttComponent, { static: true })
  public gantt!: GanttComponent;
  public flag: boolean = true;
  public data: Object[] = [];

  public taskSettings?: object;
  public splitterSettings?: object;
  ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Identify Site location',
        StartDate: new Date('04/02/2019'),
        lineId: 5,
        start: 'Reims',
        destination: 'France',
        Duration: 4,
        Progress: 50
      },
      {
        TaskID: 2,
        TaskName: 'Perform Soil test',
        lineId: 6,
        start: 'Münster',
        destination: 'Germany',
        StartDate: new Date('04/02/2019'),
        Duration: 4,
        Progress: 50
      },
      {
        TaskID: 3, TaskName: 'Soil test approval',
        lineId: 2,
        start: 'Rio de Janeiro',
        destination: 'Brazil',
        StartDate: new Date('04/02/2019'),
        Duration: 4,
        Progress: 50
      }
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      lineID: 'lineID',
      start: 'start',
      destination: 'destination'
    };
    this.splitterSettings = {
      position: '75%'
    };
  }
}

````

**Step 2**:  Import the **TranslateModule** and **TranslateLoader** in your app.module.ts file. You also need to import the `HttpClientModule` to enable HTTP requests for loading translation files

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
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { GanttAllModule } from '@syncfusion/ej2-angular-gantt';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    GridAllModule,
    GanttModule,
    CommonModule,
    GanttAllModule,
    ButtonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
      defaultLanguage: '',
    }),  
  ],
  
  bootstrap: [AppComponent],
})
export class AppModule {}


```

In the above code, we import the required modules and define a function called **HttpLoaderFactory** that returns an instance of **TranslateHttpLoader**, which is used to load translation files.

**Step 3**: Use the translate pipe in your HTML code to translate the `headerText` of the column.

```html
{% raw %}
<h1> Ngx translate pipe for header text in Angular Gantt component</h1>
<h1></h1>
<div class="container-fluid py-3">
  <div class="btn-group btn-group-sm py-5">
    <button (click)="changeLang('en-US')" style="margin-left:5px">EN</button>
    <button (click)="changeLang('de-DE')" style="margin-left:5px">DE</button>
    <button (click)="changeLang('pt-BR')" style="margin-left:5px">BR</button>
  </div>
</div>
<ejs-gantt #gantt height="430px"  [dataSource]="data"
        [taskFields]="taskSettings"  [splitterSettings] = "splitterSettings">    
        <e-columns>
          <e-column field="TaskID" headerText="TaskID" width="120" textAlign="Right"></e-column>
          <e-column field="TaskName" headerText="TaskName" width="120" textAlign="Right">
          </e-column>
          <e-column field="lineId" headerText="{{ 'Line' | translate }}" width="120">
          </e-column>
          <e-column field="start" headerText="{{ 'Start' | translate }}" width="140">
          </e-column>
          <e-column field="destination" headerText="{{ 'Destination' | translate }}" width="170"> </e-column>
        </e-columns>
</ejs-gantt>
{% endraw %}
```

**Step 4**: Then add the json file with the translation text in the required languages,


```json

en-US.json { 
    "changeLanguage": "Change Language",
    "Line": "Line",
    "Start": "Start",
    "Destination": "Destination"
}

```

```json

de-DE.json { 
    "changeLanguage": "Ändere Sprache",
    "Line": "Linie",
    "Start": "Startpunkt",
    "Destination": "Zielpunkt"
}

```

```json

pt-BR.json { 
    "changeLanguage": "Change Language",
    "Line": "ligne",
    "Start": "debut",
    "Destination": "destination"
}

```

### Through header template

To translate the header text of the Gantt chart's columns using **ngx-translate** through header template, you can use the **translate** pipe in the header templates of the Gantt component.

Here are the steps to use ngx-translate pipe for Gantt's header template in Angular Gantt chart component:

**Step 1**: Create and Configure the TranslateService

````typescript

import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public translate: TranslateService) { }

  changeLang(lang: string) {
    this.translate.use(lang);

    setTimeout(
      function (this: GanttComponent) {
        this.refresh();
      }.bind(this.gantt),
      800
    );
  }

  @ViewChild(GanttComponent, { static: true })
  public gantt!: GanttComponent;
  public flag: boolean = true;
  public data: Object[] = [];

  public taskSettings?: object;
  public splitterSettings?: object;
  ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Identify Site location',
        StartDate: new Date('04/02/2019'),
        lineId: 5,
        start: 'Reims',
        destination: 'France',
        Duration: 4,
        Progress: 50
      },
      {
        TaskID: 2,
        TaskName: 'Perform Soil test',
        lineId: 6,
        start: 'Münster',
        destination: 'Germany',
        StartDate: new Date('04/02/2019'),
        Duration: 4,
        Progress: 50
      },
      {
        TaskID: 3, TaskName: 'Soil test approval',
        lineId: 2,
        start: 'Rio de Janeiro',
        destination: 'Brazil',
        StartDate: new Date('04/02/2019'),
        Duration: 4,
        Progress: 50
      }
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      lineID: 'lineID',
      start: 'start',
      destination: 'destination'
    };
    this.splitterSettings = {
      position: '75%'
    };
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
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { GanttAllModule } from '@syncfusion/ej2-angular-gantt';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    GridAllModule,
    GanttModule,
    CommonModule,
    GanttAllModule,
    ButtonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
      defaultLanguage: '',
    }),  
  ],
  
  bootstrap: [AppComponent],
})
export class AppModule {}

```

**Step 3**: Use the ngx-translate pipe in your Angular Gantt chart component header templates to translate the headers dynamically.

```Html
{% raw %}
<h1> Ngx translate pipe for header template in Angular Gantt component</h1>
<h1></h1>
<div class="container-fluid py-3">
  <div class="btn-group btn-group-sm py-5">
    <button (click)="changeLang('en-US')" style="margin-left:5px">EN</button>
    <button (click)="changeLang('de-DE')" style="margin-left:5px">DE</button>
    <button (click)="changeLang('pt-BR')" style="margin-left:5px">BR</button>
  </div>
</div>
<div style="padding:20px 0px 0px 0px">
  <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [splitterSettings]="splitterSettings">
  <e-columns>
    <e-column field="TaskID" headerText="TaskID" width="120" textAlign="Right"></e-column>
    <e-column field="TaskName" headerText="TaskName" width="120" textAlign="Right"></e-column>
    <e-column field='lineId' headerText='Line' width=90>
      <ng-template #headerTemplate let-data>
        <div>
          {{ 'Line' | translate }}
        </div>
      </ng-template>
    </e-column>
    <e-column field='start' headerText='Start' width=120>
      <ng-template #headerTemplate let-data>
        <div>
          {{ 'Start' | translate }}
        </div>
      </ng-template>
    </e-column>
    <e-column field='destination' headerText='Destination' width=80>
      <ng-template #headerTemplate let-data>
        <div>
          {{ 'Destination' | translate }}
        </div>
      </ng-template>
    </e-column>
  </e-columns>
</ejs-gantt>
<div>
{% endraw %}  
```

**Step 4**: Then add the json file with the translation text in the required languages,

```json

en-US.json { 
    "changeLanguage": "Change Language",
    "Line": "Line",
    "Start": "Start",
    "Destination": "Destination"
}

```

```json

de-DE.json { 
    "changeLanguage": "Ändere Sprache",
    "Line": "Linie",
    "Start": "Startpunkt",
    "Destination": "Zielpunkt"
}

```

```json

pt-BR.json { 
    "changeLanguage": "Change Language",
    "Line": "ligne",
    "Start": "debut",
    "Destination": "destination"
}

```

## Custom tooltip for header

Custom tooltips for headers provide additional information when hovering over a column header in the Syncfusion Gantt chart. This can be useful in situations where there is not enough space to display all of the information related to a column, or when there is additional context that may be helpful.

To enable custom tooltips for headers, you can use the [beforeRender](https://ej2.syncfusion.com/angular/documentation/api/gantt/#beforeRender) event of the Tooltip component. This event is triggered for each header cell before it is rendered, allowing you to add a custom tooltip to the header cell using [tooltip](https://ej2.syncfusion.com/angular/documentation/tooltip/content) component.

Here's an example of how to use the `beforeRender` event to add a custom tooltip to a header cell:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/customtooltip-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/customtooltip-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/customtooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/customtooltip-cs1" %}

> * The [headerCellInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#headercellinfo) event can also be used to customize the header tooltip. This event is triggered for each header cell after it is rendered.


## Customize header text styles 

Customizing the gantt header styles allows you to modify the appearance of the column header in the Gantt control to meet your design requirements. You can customize the font, background color, and other styles of the header cells. To customize the header styles in the gantt, you can use CSS, properties, methods, or event support provided by the Syncfusion Angular Gantt chart component.

### Using CSS

You can apply styles to the header cells using CSS selectors. The Gantt provides a class name for each header cell element, which you can use to apply styles to that specific header cell. The **.e-headercell** class can be used to change the background color and text color of the column header.

```CSS
  .e-gantt .e-headercell {
    background-color: #a2d6f4;
    color:rgb(3, 2, 2);
  }
```
Here's an example that demonstrates how to customize the appearance of a specific column header in the Gantt chart using **className**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/headerstyle-cs1" %}

### Using property 

You can customize the appearance of the column headers in Gantt chart using the [customAttributes](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#customattributes) property. The `customAttributes` property takes an object with the name-value pair to customize the CSS properties for gantt header cells. You can also set multiple CSS properties to the custom class using the customAttributes property.

To customize the header of a column, you can follow the steps below:

Step 1: Define a CSS class that specifies the styles you want to apply to the header cell of the column. For example, to change the background color and text color of the header cell, define a CSS class like this:

  ```CSS
    .e-gantt .e-headercell.customcss {
       background-color: rgb(43, 205, 226);
      color: black;
    }

  ```

Step 2: Set the **customAttributes** property of the desired column to an object that contains the CSS class **customcss**. This CSS class will be applied to the header cell of the specified column in the Gantt.

```ts

  <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=290 [customAttributes]="{class:'customcss'}"></e-column>

```

The following example demonstrates how to customize the appearance of the **TaskName** and **Duration** columns using custom attributes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/headerstyle-cs2" %}

### Using method 

The Syncfusion Gantt provides methods in treegrid object in gantt instance to customize the appearance of the gantt chart columns header.

1. [getColumnHeaderByIndex](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnheaderbyindex): The method is used to customize the appearance of a specific column header in the grid by specifying the index of the column for which you want to customize the header.

2. [getColumnHeaderByField](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnheaderbyfield): This method is used to retrieve the header element of a specific column by its field name. You can use the retrieved element to customize the appearance of the header element.
3. [getColumnHeaderByUid](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnheaderbyuid): This method is used to retrieve the header element of a specific column by its unique ID. You can use the retrieved element to customize the appearance of the header element.

 4. [getColumnIndexByField](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnindexbyfield):This method is used to retrieve the index of a specific column by its field name. You can use the retrieved index to access the header element and customize its appearance.

 5. [getColumnIndexByUid](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnindexbyuid): This method is used to retrieve the index of a specific column by its unique ID. You can use the retrieved index to access the header element and customize its appearance.

Here's an example of how to use these methods to change the style of a specific column header:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/headerstyle-cs3" %}

>* The UID is automatically generated by the Gantt cahrt component and may change whenever the gantt chart is refreshed or updated.

### Using event

To customize the appearance of the gantt chart header, you can handle the [headerCellInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#querycellinfo) event of the gantt chart. This event is triggered when each header cell is rendered in the gantt, and provides an object that contains information about the header cell. You can use this object to modify the styles of the header column.

The following example demonstrates how to add a `headerCellInfo` event handler to the gantt chart. In the event handler, checked whether the current header column is **TaskID** field and then applied the appropriate CSS class to the cell based on its value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/columns/headerstyle-cs4" %}

## How to refresh header 

The refresh header feature in the Syncfusion Angular Gantt chart allows you to update the header section of the gantt whenever changes are made to the gantt chart's columns. This feature is useful when you want to reflect changes in the header immediately, such as modifying the column header text, width, or alignment.

To use the refresh header feature, you can call the [refreshHeader](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#refreshheader) method of treegrid object in gantt instance. This method updates the gantt chart header with the latest changes made to the columns.

The following example demonstrates how to use the `refreshHeader` method to update the gantt header:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/headerstyle-cs5" %}

>* The `refreshHeader` method updates only the gantt header and not the entire gantt chart.

## How to get header element 

To get the header element in a Syncfusion Gantt chart, you can use one of the following methods of treegrid object in gantt instance:

1. [getHeaderContent](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getheadercontent): This method returns the header div element of the Gantt. You can use this method to access the entire header content of the Gantt.

    ```ts
    const headerElement = this.gantt.treeGrid.getHeaderContent();    
    ```
2. [getHeaderTable](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getheadertable): This method returns the header table element of the Gantt. You can use this method to access only the header table of the Gantt.

   ```ts
    const headerTableElement = this.gantt.treeGrid.getHeaderTable();
   ```

3. [getColumnHeaderByUid](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnindexbyuid): This method returns the column header element by its unique identifier.

   ```ts
    const columnHeaderElement = this.gantt.treeGrid.getColumnHeaderByUid("e-grid2");
   ```

4. [getColumnHeaderByIndex](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnheaderbyindex): This method returns the column header element by its index.

   ```ts
    const columnHeaderElement = this.gantt.treeGrid.getColumnHeaderByIndex(0);
   ```
5. [getColumnHeaderByField](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnheaderbyfield): This method returns the column header element by its field name.

   ```ts
    const columnHeaderElement = this.gantt.treeGrid.getColumnHeaderByField("TaskID"); 
   ```

>* The UID is automatically generated by the Gantt chart component and may change whenever the gantt is refreshed or updated.