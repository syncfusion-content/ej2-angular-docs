import { Component, OnInit } from '@angular/core';
import { PdfViewerModule, LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService, 
         AnnotationService, PageOrganizerService,
         FormFieldMouseLeaveArgs} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                <ejs-pdfviewer id="pdfViewer"
                    [documentPath]='document'
                    [resourceUrl]='resource'
                    (formFieldMouseLeave)='formFieldMouseLeaved($event)' 
                    style="height:640px;display:block">
                </ejs-pdfviewer>
             </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
})
export class AppComponent implements OnInit {
  public document: string = 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';
  public resource: string = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib";
  ngOnInit(): void {
  }

  public formFieldMouseLeaved(formFieldMouseLeave: FormFieldMouseLeaveArgs): void {
    console.log('form field page number: ', formFieldMouseLeave.pageIndex);
    console.log('form field event name: ' + formFieldMouseLeave.name);
    console.log('form field data: ', formFieldMouseLeave.field);
  }
}