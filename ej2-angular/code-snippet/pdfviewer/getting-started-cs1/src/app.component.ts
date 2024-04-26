import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { PdfViewerModule, LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService,
  ToolbarService, NavigationService,AnnotationService, TextSearchService, TextSelectionService, PrintService,FormDesignerService, FormFieldsService, PageOrganizerService} from '@syncfusion/ej2-angular-pdfviewer'


import { Component, OnInit } from '@angular/core';

@Component({
imports: [ PdfViewerModule ],
standalone: true,
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
  <ejs-pdfviewer 
    id="pdfViewer" 
    [serviceUrl]='service' 
    [documentPath]='document' 
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>`,
  providers: [LinkAnnotationService, BookmarkViewService, MagnificationService,ThumbnailViewService, ToolbarService
    , NavigationService, AnnotationService, TextSearchService, TextSelectionService, PrintService, FormDesignerService, FormFieldsService, PageOrganizerService]
})
export class AppComponent implements OnInit {
    public service = 'https://services.syncfusion.com/angular/production/api/pdfviewer';
    public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    ngOnInit(): void {
    }
}

