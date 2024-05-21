import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { PdfViewerModule, LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService,
  ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService, PageOrganizerService, AnnotationService, FormDesignerService, FormFieldsService,} from '@syncfusion/ej2-angular-pdfviewer'


import { Component, OnInit } from '@angular/core';

@Component({
imports: [PdfViewerModule ],
standalone: true,
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
  <ejs-pdfviewer 
    id="pdfViewer" 
    [documentPath]='document' 
    [resourceUrl]='resource' 
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>`,
providers: [LinkAnnotationService, BookmarkViewService, MagnificationService,ThumbnailViewService, ToolbarService
  , NavigationService, AnnotationService, TextSearchService, TextSelectionService, PrintService, FormDesignerService, FormFieldsService, PageOrganizerService]
})
export class AppComponent implements OnInit {
    public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public resource: string = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
    ngOnInit(): void {
    }
}

