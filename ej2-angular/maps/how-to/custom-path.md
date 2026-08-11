---
layout: post
title: How to render a custom path in Angular Maps | Syncfusion
description: Learn here all about Custom path in Syncfusion Angular Maps component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Custom path 
documentation: ug
domainurl: ##DomainURL##
---

# How to render a custom path in Angular Maps

Maps component can be customized as the desired layout using the custom path map feature. Here, the Maps component has been showcased with normal geometry type shapes to represent the bus seat selection layout. Please refer to the following example to render the bus seat selection.

[`app.module.ts`]

```typescript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { MapsModule } from '@syncfusion/ej2-angular-maps';
import { SelectionService } from '@syncfusion/ej2-angular-maps';


@NgModule({
  imports:      [ BrowserModule,MapsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ SelectionService ]
})
export class AppModule { }
```

[`app.component.ts`]

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { seatData } from './MapData/seatSelection-data/seatSelection';

@Component({
    selector: 'my-app',
    // specifies the template string for the maps component
    template:`<div class="control-section">
    <div align='center'>
    <ejs-maps id='container' height='400px' style="display:block;">
    <e-layers>
    <e-layer [shapeData]='seatdata' [selectionSettings]="selectionSettings" geometryType='Normal'></e-layer>
    </e-layers>
    </ejs-maps>
    </div>
    </div>`,
    encapsulation: ViewEncapsulation.None
  })
  export class AppComponent {
       public seatdata=seatData;
       public selectionSettings = {
        enable: true,
        opacity: 1,
        enableMultiSelect: true
    };
}
```

[`index.html`]

```html
   <div class="col-lg-9 control-section">
        <div style="width:200px;margin:auto;padding-bottom:20px">
          <img src="bus-icon.png" style="width:25px;height:25px;float:left">
          <div style="padding-left:30px;font-size:20px;font-weight:400;">Bus seat selection</div>
        </div>
        <div style="border: 3px solid darkgray;width:200px;display:block;margin:auto;border-radius:5px">
          <img src="wheel.png" style="width:30px;height:30px;margin-left:18%;margin-top:10px">
          <my-app>Loading AppComponent content here ...</my-app>
        </div>
      </div>
```