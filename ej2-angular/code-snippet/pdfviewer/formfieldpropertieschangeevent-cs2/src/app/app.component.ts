import { Component, OnInit } from '@angular/core';
import { PdfViewerModule, LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService, 
         AnnotationService, PageOrganizerService,
         FormFieldPropertiesChangeArgs} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                <ejs-pdfviewer id="pdfViewer"
                    [documentPath]='document'
                    [resourceUrl]='resource'
                    (formFieldPropertiesChange)='formFieldPropertiesChanged($event)' 
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

  public formFieldPropertiesChanged(formFieldMove: FormFieldPropertiesChangeArgs): void {
    console.log('form field page number: ', formFieldMove.pageIndex);
    console.log('form field event name: ' + formFieldMove.name);
    console.log('form field data: ', formFieldMove.field);
    console.log('Whether form field alignment changed '+ formFieldMove.isAlignmentChanged);
    console.log('Whether form field backgropund color changed '+ formFieldMove.isBackgroundColorChanged);
    console.log('Whether form field border color changed '+ formFieldMove.isBorderColorChanged);
    console.log('Whether form field border width changed '+ formFieldMove.isBorderWidthChanged);
    console.log('Whether form field color changed changed '+ formFieldMove.isColorChanged);
    console.log('Whether form field custom data changed '+ formFieldMove.isCustomDataChanged);
    console.log('Whether form field font family changed '+ formFieldMove.isFontFamilyChanged);
    console.log('Whether form field font size changed '+ formFieldMove.isFontSizeChanged);
    console.log('Whether form field font style changed '+ formFieldMove.isFontStyleChanged);
    console.log('Whether form field maximum length changed '+ formFieldMove.isMaxLengthChanged);
    console.log('Whether form field name changed '+ formFieldMove.isNameChanged);
    console.log('Whether form field readonly changed '+ formFieldMove.isReadOnlyChanged);
    console.log('Whether form field required changed '+ formFieldMove.isRequiredChanged);
    console.log('Whether form field print changed '+ formFieldMove.isPrintChanged);
    console.log('Whether form field tool tip changed '+ formFieldMove.isToolTipChanged);
    console.log('Whether form field visiblity changed '+ formFieldMove.isVisibilityChanged);
    console.log('Whether form field value changed '+ formFieldMove.isValueChanged);
    console.log('Whether form field new value changed '+ formFieldMove.newValue);
    console.log('Whether form field old valuue changed '+ formFieldMove.oldValue);
  }
}