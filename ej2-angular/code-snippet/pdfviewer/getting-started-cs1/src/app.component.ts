
import { Component, OnInit } from '@angular/core';
import {LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService,
  ToolbarService, NavigationService, AnnotationService, TextSearchService, TextSelectionService, 
  PrintService, FormDesignerService, FormFieldsService} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
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
    , NavigationService, AnnotationService, TextSearchService, TextSelectionService, PrintService, FormDesignerService, FormFieldsService]
})
export class AppComponent implements OnInit {
    public service = 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';
    public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    ngOnInit(): void {
    }
}

