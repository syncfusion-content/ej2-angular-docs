import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { PdfViewerModule, LoadEventArgs, LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService,
  ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService, AnnotationService, FormDesignerService, FormFieldsService, TextFieldSettings,PdfViewerComponent,  } from '@syncfusion/ej2-angular-pdfviewer'



import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
@Component({
imports: [PdfViewerModule ],
standalone: true,
  selector: 'app-root',
  // Specifies the template string for the PDF Viewer component.
  template: `<div class="content-wrapper">
  <ejs-pdfviewer id="pdfViewer" #pdfviewer [serviceUrl]='service' [documentPath]='document' (documentLoad)='documentLoaded($event)' style="height:640px;display:block"></ejs-pdfviewer>
  </div>`,
  providers: [LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService, ToolbarService,
NavigationService, TextSearchService, TextSelectionService, PrintService, AnnotationService, FormDesignerService, FormFieldsService,TextFieldSettings]
})
export class AppComponent implements OnInit {
  @ViewChild('pdfviewer')
  public pdfviewerControl?: PdfViewerComponent;
  public service: string = 'https://services.syncfusion.com/angular/production/api/pdfviewer';
  public document: string = 'FormDesigner.pdf';

  documentLoaded(e: LoadEventArgs): void {
    this.pdfviewerControl?.formDesignerModule.addFormField("Textbox", { name: "Textbox", bounds: { X: 146, Y: 229, Width: 150, Height: 24 } } as TextFieldSettings);
  }

  ngOnInit(): void {
  }
}


