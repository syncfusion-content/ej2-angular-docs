---
layout: post
title: Headers in Angular Gantt Chart Component | Syncfusion
description: Learn here all about headers in Syncfusion Angular Gantt Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Headers
documentation: ug
domainurl: ##DomainURL##
---

# Column Headers in Angular Gantt Chart Component

The Angular Gantt Chart component provides flexible options to manage and customize column headers. You can define static header text, apply custom templates, align header content, and even update header titles dynamically through events or methods. These features help tailor the Gantt chart to match specific UI requirements and improve readability.

## Set custom header text

By default, column headers in the Gantt chart display the value defined in the [field](https://ej2.syncfusion.com/angular/documentation/api/gantt/column#field) property. To customize the header title, use the [headerText](https://ej2.syncfusion.com/angular/documentation/api/gantt/column#headertext) property within the **e-column** configuration. This allows you to define meaningful labels for each column as needed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  template: `<ejs-gantt height="370px" [dataSource]="data" [splitterSettings]="splitterSettings" [taskFields]="taskSettings">
    <e-columns>
        <e-column field="TaskName" width="290">
            <ng-template #headerTemplate let-column>
                {{ column.headerText }}
                <div>
                    <img src="assets/images/TaskName.png" width="20" height="20" />
                </div>
            </ng-template>
        </e-column>
        <e-column field="StartDate" headerText="Start Date" width="390" format="yMd" textAlign="Right">
        </e-column>
        <e-column field="Duration" headerText="Duration" width="120" textAlign="Right">
            <ng-template #headerTemplate let-column>
                {{ column.headerText }}
                <div>
                    <img src="assets/images/Duration.png" width="20" height="20">
                </div>
            </ng-template>
        </e-column>
        <e-column field="Progress" headerText="Progress" width="120" textAlign="Right">
        </e-column>
    </e-columns>
</ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;

  ngOnInit(): void {
    this.data = GanttData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      child: 'subtasks'
    };
    this.splitterSettings = {
      position: '75%'
    };
  }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnheader-cs1" %}

> * The `headerText` property is optional. If not defined, the column's field value will be used as the header text by default.
> * To apply custom HTML content to the header cell, use the [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/gantt/column#headertemplate) property.

## Customize header using template

You can customize the column header in the Gantt chart using the [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/gantt/column#headertemplate) property. This allows rendering custom HTML or Angular components within the header.

In this example, custom elements are applied to both the **TaskName** and **Duration** column headers.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs2/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs2/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnheader-cs2" %}

>* The `headerTemplate` property is only applicable to Gantt columns that have a header element.

## Align header text

You can align the column header text in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt Chart component using the [headerTextAlign](https://ej2.syncfusion.com/angular/documentation/api/gantt/column#headertextalign) property. By default, the text is aligned to the **left**. The available alignment options are:

- **Left:** Aligns text to the left (default).  
- **Center:** Aligns text to the center.  
- **Right:** Aligns text to the right.  
- **Justify:** Distributes text evenly across the header.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs3/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs3/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnheader-cs3" %}

>* The `headerTextAlign` property only changes the alignment of the text in the column header, and not the content of the column. If you want to align both the column header and content, you can use the [textAlign](https://ej2.syncfusion.com/documentation/api/gantt/column#textalign) property.

## Enable header text wrapping

You can enable autowrap in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt Chart component to allow cell content to wrap onto the next line when it exceeds the defined column width. This wrapping behavior is based on the whitespace between words. To activate this feature, set the `allowTextWrap` property to **true** and specify an appropriate column [width](https://ej2.syncfusion.com/angular/documentation/api/gantt/column#width).

The wrapping behavior is defined using the `textWrapSettings.wrapMode` property of the `treeGrid` object. Available options include:

- **Header:** Wraps only the header text.
- **Content:** Wraps only the cell content.
- **Both:** Wraps both header and content (default).

> * If column width is not defined, autowrap adjusts based on the overall Gantt chart width.
> * Header text without white space may not wrap.  
> * If cell content includes HTML tags, autowrap may not function as expected. In such cases, use [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/gantt/column#headertemplate) and [template](https://ej2.syncfusion.com/angular/documentation/api/gantt/column#template) properties to customize the header and cell layout.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs6/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs6/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnheader-cs6" %}

## Adjust header height

To customize the Gantt header height for displaying full content such as long text or images, apply changes using CSS or dynamic method.

**Using css:**

You can override the default height by targeting **.e-gantt .e-headercell**:

```css
.e-gantt .e-headercell {
  height: 130px;
}
```

**Using method:**

To change the height dynamically, use the `getHeaderContent` method to access the header, then loop through each **.e-headercell** and set the desired height.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs4/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs4/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnheader-cs4" %}

>* You can also use the `getHeaderTable` method of `treeGrid` object in gantt instance to get the table element of the header, and then adjust the height.

## Update header text dynamically

The Angular Gantt Chart component allows dynamic updates to column header text, either through events or method calls. This is useful for customizing headers based on user input or application logic.

**Using Event**

To modify header text during rendering, use the [headerCellInfo](https://ej2.syncfusion.com/angular/documentation/gantt/events#headercellinfo) event. After updating the text, call the `refreshHeader` method of the `treeGrid` object to apply changes.

**Using method**

You can also change header text programmatically using the following methods:

- `getColumnByField`: Returns the column object by field name.  
- `getColumnHeaderByField`: Returns the header element by field name.  
- `getColumnIndexByField`: Returns the column index by field name.  
- `getColumnByUid`: Returns the column object by UID.  
- `getColumnHeaderByIndex`: Returns the header element by index.  
- `getColumnIndexByUid`: Returns the column index by UID.  
- `getColumnHeaderByUid`: Returns the header element by UID.  

These methods allow access to the column or header element, where you can update the `headerText` or `textContent` as needed.

> * After modifying header text, call `refreshHeader` to reflect the changes.  
> * Column UID's are auto-generated and may change when the chart is refreshed

Here is an example of how to change the header text of a column using the `getColumnByField` method:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs5/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs5/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnheader-cs5" %}

**Changing the header text of all columns:**

To modify the header text of all columns in the Gantt Chart component, iterate through the columns collection and set the [headerText](https://ej2.syncfusion.com/angular/documentation/api/gantt/column#headertext) property for each column. This approach ensures consistent customization across all headers.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs7/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs7/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnheader-cs7" %}

## Rotate header text

By default, header text in the Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt Chart component is displayed horizontally. To rotate it vertically, diagonally, or at a custom angle, follow the steps below using the [customAttributes](https://ej2.syncfusion.com/angular/documentation/api/gantt/column#customattributes) property of the column.

**Step 1**: Create a CSS class with rotation styles.

```css
.e-gantt .e-headercell.orientationcss  {
  transform: rotate(90deg);
} 
```

**Step 2:** Apply the CSS class to the desired column using `customAttributes`.

```typescript
 <e-column field='Duration' headerText='Duration' textAlign='Center' width=90  [customAttributes]='customAttributes'></e-column>
```

**Step 3:** Adjust the header cell height to fit the rotated text.

```typescript
public setHeaderHeight(args) {
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

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs8/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="app.component.css" %}
{% include code-snippet/gantt/columns/columnheader-cs8/src/app.component.css %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columnheader-cs8/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnheader-cs8" %}

## Localize header text using ngx-translate 

The ngx-translate library provides **internationalization (i18n)** and **localization (l10n)** support for Angular applications. With ngx-translate, you can easily translate your Angular application into multiple languages.

In the context of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt chart component, you can use ngx-translate to translate the header text of the Gantt chart's columns. There are two ways to achieve this: through header text and through header template.

### Through header text  

To translate the header text of the Gantt chart's columns using **ngx-translate** through header text, you can use the **translate** pipe for the [headerText](https://helpej2.syncfusion.com/angular/documentation/api/gantt/column#headertext) property.

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
<h1> Ngx translate pipe for header text in Angular Gantt Chart component</h1>
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

To translate the header text of the Gantt chart's columns using **ngx-translate** through header template, you can use the **translate** pipe in the header templates of the Gantt Chart component.

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
<h1> Ngx translate pipe for header template in Angular Gantt Chart component</h1>
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

## Add custom tooltip to header

You can display additional information in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt Chart component by adding custom tooltips to column headers. This is especially helpful when space is limited or when extra context is needed. To implement this, use the [beforeRender](https://ej2.syncfusion.com/angular/documentation/api/gantt#beforeRender) event of the `Tooltip` component. This event triggers before each header cell is rendered, allowing you to assign a custom tooltip dynamically.

The following example demonstrates how to use the `beforeRender` event to add a tooltip to a header cell:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/customtooltip-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/customtooltip-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/customtooltip-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/customtooltip-cs1" %}

> * The [headerCellInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt#headercellinfo) event can also be used to customize the header tooltip. This event is triggered for each header cell after it is rendered.

## Style header text 

To modify the appearance of column headers in the Gantt, follow the steps below. You can use CSS, properties, methods, or events provided by the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt Chart component.

### Using CSS

You can apply styles to Gantt Chart component header cells using the **.e-headercell** class. This allows you to customize font, background color, and other visual properties.

```CSS
  .e-gantt .e-headercell {
    background-color: #a2d6f4;
    color:rgb(3, 2, 2);
  }
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="app.component.css" %}
{% include code-snippet/gantt/columns/headerstyle-cs1/src/app.component.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/headerstyle-cs1" %}

### Using property

To customize the appearance of column headers in the Gantt Chart component, use the [customAttributes](https://ej2.syncfusion.com/angular/documentation/api/gantt/column#customattributes) property. It accepts an object containing CSS class names that apply styles directly to header cells.

**Step 1:** Define a CSS class with the desired styles.

```css
.e-gantt .e-headercell.customcss {
  background-color: rgb(43, 205, 226);
  color: black;
}
```

**Step 2:** Assign the class using `customAttributes` in the column definition.

```ts
<e-column field='TaskName' headerText='Task Name' textAlign='Left' width=290 [customAttributes]="{ class: 'customcss' }"></e-column>

```

The following example demonstrates how to style the **TaskName** and **Duration** column headers using custom attributes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="app.component.css" %}
{% include code-snippet/gantt/columns/headerstyle-cs2/src/app.component.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs2/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs2/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/headerstyle-cs2" %}

### Using method 

The Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt Chart component provides methods in the `treeGrid` object to customize column header appearance:

- `getColumnHeaderByIndex(index)` – Gets the header element by column index.
- `getColumnHeaderByField(field)` – Retrieves the header element using the field name.
- `getColumnHeaderByUid(uid)` – Accesses the header element by unique ID.
- `getColumnIndexByField(field)` – Returns the index of a column using its field name.
- `getColumnIndexByUid(uid)` – Returns the index of a column using its unique ID.

The following example demonstrates how to apply custom styles to specific column headers in the Gantt chart using the `dataBound` event:

- Set font color to black for the header at index 0 of the **TaskID** column.
- Apply pink background and black font color to the **TaskName** header.
- Apply the same styles to the **Duration** header using both UID (`grid-column11`) and index 3.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs3/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs3/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/headerstyle-cs3" %}

>* The UID is automatically generated by the Gantt chart component and may change whenever the gantt chart is refreshed or updated.

### Using event

To customize the Gantt Chart component header appearance, use the [headerCellInfo](https://ej2.syncfusion.com/angular/documentation/gantt/events#headercellinfo) event. This event triggers when each header cell is rendered and provides access to its details, allowing you to apply custom styles.

The following example demonstrates how to check if the current header column is the **TaskID** field and apply a CSS class conditionally:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs4/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs4/src/data.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/columns/headerstyle-cs4" %}

## Refresh header programmatically 

To refresh the header in Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt Chart component after updating column properties (such as text, width, or alignment), use the `refreshHeader` method from the `treeGrid` object. This method re-renders the header to reflect the latest column changes.

The following example demonstrates how to update the header text of the column at index 1 for the **TaskName** column using a button click.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs5/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/headerstyle-cs5/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/headerstyle-cs5" %}

>* The `refreshHeader` method updates only the Gantt header and not the entire Gantt chart.

## Access header element 

To retrieve the header element in a Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt chart component, you can use one of the following methods available in the `treeGrid` object of the Gantt instance:

1. `getHeaderContent`: This method returns the header <div> element of the Gantt chart. You can use it to access the entire header content.

    ```ts
    const headerElement = this.gantt.treeGrid.getHeaderContent();    
    ```
2. `getHeaderTable`: This method returns the header <table> element of the Gantt chart. You can use it to access only the header table.

   ```ts
    const headerTableElement = this.gantt.treeGrid.getHeaderTable();
   ```

3. `getColumnHeaderByUid`: This method returns the column header element by its unique identifier (UID).


   ```ts
    const columnHeaderElement = this.gantt.treeGrid.getColumnHeaderByUid("e-grid2");
   ```

4. `getColumnHeaderByIndex`: This method returns the column header element by its index.

   ```ts
    const columnHeaderElement = this.gantt.treeGrid.getColumnHeaderByIndex(0);
   ```
5. `getColumnHeaderByField`: This method returns the column header element by its field name.

   ```ts
    const columnHeaderElement = this.gantt.treeGrid.getColumnHeaderByField("TaskID"); 
   ```

>* The UID is automatically generated by the Gantt chart component and may change whenever the Gantt is refreshed or updated.