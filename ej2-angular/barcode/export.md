---
layout: post
title: Export in Angular Barcode component | Syncfusion®
description: Learn here all about Export in Syncfusion® Angular Barcode component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Export 
documentation: ug
domainurl: ##DomainURL##
---

# Export in Angular Barcode component

Export barcode as an image and base64 string is common for barcode,QRcode and datamatrix. The following code samples explain how to export the barcode as an image and base64 string.

## Export

Barcode provides the support to export its content as an image in the specified image type and downloads it in the browser.
The following code example shows how to export the barcode as an image

```typescript

import { Component,ViewChild } from '@angular/core';
import { BarcodeGeneratorComponent } from '@syncfusion/ej2-angular-barcode-generator';
import { ClickEventArgs, } from '@syncfusion/ej2-navigations';

@Component({
  selector: "app-container",
  // specifies the template string for the barcode generator component
  template: `
    <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
        <button type="button" (click)="onClick()" id="btn">Export</button>
    </div>
    <div>
    <ejs-barcodegenerator style="display: block;"  #barcode id="barcode" width="200px" height="150px" mode="SVG" type="Codabar" value="123456789">
    </div>`
})
export class AppComponent {
  @ViewChild('barcode')
  public barcode: BarcodeGeneratorComponent;
  public data: string;
  public filename = 'Export';
  public onClick(){
    this.barcode.exportImage(this.filename,'PNG');
  };
}

```

The filename specifies the name of the file to be downloaded.

### Export As Base64String

Barcode provides the support to export its content as an image in the specified image type and returns it as base64 string.
The following code example shows how to export the barcode as a base64 string

```typescript

import { Component,ViewChild } from '@angular/core';
import { BarcodeGeneratorComponent } from '@syncfusion/ej2-angular-barcode-generator';
import { ClickEventArgs, } from '@syncfusion/ej2-navigations';

@Component({
  selector: "app-container",
  // specifies the template string for the barcode generator component
  template: `
  <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
    <button type="button" (click)="onClick()" id="btn">Export</button>
  </div>
  <div>
    <ejs-barcodegenerator style="display: block;"  #barcode id="barcode" width="200px" height="150px" mode="SVG" type="Codabar" value="123456789">
  </div>`
})
export class AppComponent {
    @ViewChild('barcode')
    public barcode: BarcodeGeneratorComponent;
    public data: string ;
    public filename = 'Export';
    async onClick(){
        this.data = await this.barcode.exportAsBase64Image('JPG');
    };
}

```

>**Note:**
>Format is to specify the type or format of the exported file. You can export the barcode to the image formats such as PNG, JPG.