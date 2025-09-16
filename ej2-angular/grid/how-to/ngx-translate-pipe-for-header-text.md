---
layout: post
title: Ngx translate pipe for header text in Angular Grid component | Syncfusion
description: Learn how to use ngx-translate pipe to localize the header text of columns in the Syncfusion Angular Grid component, including setup and implementation guidance.
platform: ej2-angular
control: Ngx translate pipe for header text 
documentation: ug
domainurl: ##DomainURL##
---

# Ngx translate pipe for header text in Angular Grid component

The Syncfusion Angular Grid supports column header text localization using the ngx-translate library. You can dynamically translate the `headerText` of grid columns by applying the `translate` pipe to the `headerText` property in your column definitions.

The example below demonstrates how to apply ngx-translate to the grid column headers. Use the translate pipe within the template to bind the localized values:

```typescript
import { Component } from '@angular/core';  
import {TranslateService} from '@ngx-translate/core';  
  
@Component({
    selector: 'app-container',
    template: `<ejs-grid id="Grid" [dataSource]="dataSource" allowPaging="true">  
                    <e-columns>  
                        <e-column field="OrderID" [isPrimaryKey]="true" headerText="{{ 'Id' | translate }}"></e-column>
                        <e-column field="CustomerID" headerText="{{ 'Value' | translate }}"></e-column>
                    </e-columns>  
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    constructor(translate: TranslateService) {
        // Specifies the available languages to the service
        translate.addLangs(['en', 'fr'])
        // Specifies the current languages to the service
        translate.use('fr');
    }

    public dataSource: any = [
    {
      OrderID: 10248, CustomerID: 'VINET', OrderDate: new Date(8364186e5),
    },
    {
      OrderID: 10249, CustomerID: 'TOMSP', OrderDate: new Date(836505e6),
    }];
}
```

Add the required module imports to your `app.module.ts` and configure the translate loader:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';

import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    GridAllModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Create JSON translation files for the required languages (for example, `en.json` and `fr.json`) and store them in the specified assets path:

```json
en.json
{  
    "Value": "Order ID!",
    "Id": "Customer ID"
}
```

```json
fr.json
{  
    "Value": "numéro de commande!",
    "Id": "N ° de client"
}
```

> [Angular 5 sample](https://www.syncfusion.com/downloads/support/directtrac/general/ze/translate_header_text-841014797)