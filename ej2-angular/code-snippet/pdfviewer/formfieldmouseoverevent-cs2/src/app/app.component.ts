import { Component, OnInit } from '@angular/core';
import { PdfViewerModule, LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService, 
         AnnotationService, PageOrganizerService,
         FormFieldMouseoverArgs} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                <ejs-pdfviewer id="pdfViewer"
                    [documentPath]='document'
                    [resourceUrl]='resource'
                    (formFieldMouseover)='formFieldMouseovered($event)' 
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

  public formFieldMouseovered(formFieldMouseover: FormFieldMouseoverArgs): void {
    console.log('form field page number: ', formFieldMouseover.pageIndex);
    console.log('form field event name: ' + formFieldMouseover.name);
    console.log('form field data: ', formFieldMouseover.field);
    console.log(' mouse over x position '+ formFieldMouseover.X + ' mouse over y position '+ formFieldMouseover.Y );
    console.log(' mouse over X position respect to the page '+ formFieldMouseover.pageX + ' mouse over Y position respect to the page '+ formFieldMouseover.pageY);
  }
}