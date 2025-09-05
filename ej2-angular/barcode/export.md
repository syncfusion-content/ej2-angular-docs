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

The Angular Barcode component provides robust export functionality that allows developers to save barcode content as image files or retrieve it as base64 strings. This feature is essential for applications that need to store, share, or integrate barcode data with external systems.

## Export as Image File

The Barcode component supports exporting content as downloadable image files in various formats. This method is ideal when users need to save barcodes locally for printing, documentation, or offline use.

The following code example demonstrates how to export a barcode as an image file:

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
        <ejs-barcodegenerator style="display: block;" #barcode id="barcode" width="200px" height="150px" mode="SVG" type="Codabar" value="123456789">
        </ejs-barcodegenerator>
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

The filename parameter specifies the name of the downloaded file, while the second parameter determines the image format (PNG, JPG, etc.).

## Export as Base64 String

The base64 export method converts barcode content into a base64-encoded string format. This approach is particularly useful for web applications that need to embed barcode images directly into HTML, send them via APIs, or store them in databases without creating separate image files.

The following code example shows how to export a barcode as a base64 string:

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
        <ejs-barcodegenerator style="display: block;" #barcode id="barcode" width="200px" height="150px" mode="SVG" type="Codabar" value="123456789">
        </ejs-barcodegenerator>
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
>The format parameter specifies the type of the exported image. Both PNG and JPG formats are supported for export operations. Choose PNG for better quality and transparency support, or JPG for smaller file sizes.