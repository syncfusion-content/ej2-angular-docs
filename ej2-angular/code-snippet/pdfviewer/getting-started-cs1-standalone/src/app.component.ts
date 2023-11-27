
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
    [documentPath]='document' 
    [resourceUrl]='resource' 
    style="height:640px;display:block">
  </ejs-pdfviewer>
</div>`,
providers: [LinkAnnotationService, BookmarkViewService, MagnificationService,ThumbnailViewService, ToolbarService
  , NavigationService, AnnotationService, TextSearchService, TextSelectionService, PrintService, FormDesignerService, FormFieldsService]
})
export class AppComponent implements OnInit {
    public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public resource: string = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib";
    ngOnInit(): void {
    }
}

