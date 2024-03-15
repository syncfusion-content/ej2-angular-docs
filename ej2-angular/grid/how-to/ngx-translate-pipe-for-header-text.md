---
layout: post
title: Ngx translate pipe for header text in Angular Grid component | Syncfusion
description: Learn here all about Ngx translate pipe for header text in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ngx translate pipe for header text 
documentation: ug
domainurl: ##DomainURL##
---

# Ngx translate pipe for header text in Angular Grid component

You can use the ngx-translate to translate the headerText of grid’s column. This can be achieved by using the translate pipe for **headerText** property.

This is demonstrated in the below sample code where translate is applied to headerText property of the grid columns,

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

Import the required modules in app.module.ts file along with translate loader function,

```typescript

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {GridAllModule} from '@syncfusion/ej2-angular-grids';

import {AppComponent} from './app.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

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

Then add the json file with the translation text in the required languages,

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