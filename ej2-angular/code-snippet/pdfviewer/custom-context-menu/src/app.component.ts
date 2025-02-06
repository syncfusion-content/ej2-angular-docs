import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons'
import { PdfViewerModule, LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService,
  ToolbarService, NavigationService, LoadEventArgs, TextSearchService, TextSelectionService, PrintService, AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer'

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';
import { CheckBoxComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
imports: [
    
    PdfViewerModule,
    CheckBoxModule
  ],
standalone: true,
  selector: 'app-container',
  template: `<div class="content-wrapper">
    <div>
      <ejs-checkbox label="Hide Default Context Menu" id="hide" #hide [checked]="false" (change)="contextmenuHelper($event)"></ejs-checkbox>
      <ejs-checkbox label="Add Custom option at bottom" id="toolbar" #toolbar [checked]="false" (change)="contextmenuHelper($event)"></ejs-checkbox>
    </div>
    <!--Render PDF Viewer component-->
    <ejs-pdfviewer id="pdfViewer"
        [documentPath]='document'
        [resourceUrl]='resource' 
        (documentLoad)='documentLoaded($event)'  
        (customContextMenuBeforeOpen)='customContextMenuBeforeOpen($event)'
        (customContextMenuSelect)='customContextMenuSelect($event)'
        style="height:640px;display:block">
    </ejs-pdfviewer>
             </div>`,
  encapsulation: ViewEncapsulation.None,

  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    AnnotationService,
    FormFieldsService,
    FormDesignerService,
    PageOrganizerService
  ],
})


export class AppComponent implements OnInit {
  @ViewChild('hide')
  public hideObj?: CheckBoxComponent;
  @ViewChild('toolbar')
  public toolbarObj?: CheckBoxComponent;

  public hide: any;
  public toolbar: any;
  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib';
  ;
  ngOnInit(): void {
  }
  public menuItems: MenuItemModel[] = [
    {
      text: 'Search In Google',
      id: 'search_in_google',
      iconCss: 'e-icons e-search'
    },
    {
      text: 'Lock Annotation',
      iconCss: 'e-icons e-lock',
      id: 'lock_annotation'
    },
    {
      text: 'Unlock Annotation',
      iconCss: 'e-icons e-unlock',
      id: 'unlock_annotation'
    },
    {
      text: 'Lock Form Fields',
      iconCss: 'e-icons e-lock',
      id: 'read_only_true'
    },
    {
      text: 'Unlock Form Fields',
      iconCss: 'e-icons e-unlock',
      id: 'read_only_false'
    },
  ]
  public documentLoaded(e: LoadEventArgs): void {
    var pdfViewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfViewer.addCustomMenu(this.menuItems, false, false);
  }

  public customContextMenuSelect = (e: any): void => {
    var pdfViewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    switch (e.id) {
      case 'search_in_google':
        for (var i = 0; i < pdfViewer.textSelectionModule.selectionRangeArray.length; i++) {
          var content = pdfViewer.textSelectionModule.selectionRangeArray[i].textContent;
          if ((pdfViewer.textSelectionModule.isTextSelection) && (/\S/.test(content))) {
            window.open('http://google.com/search?q=' + content);
          }
        }
        break;
      case 'lock_annotation':
        this.lockAnnotations(e);
        break;
      case 'unlock_annotation':
        this.unlockAnnotations(e);
        break;
      case 'read_only_true':
        this.setReadOnlyTrue(e);
        break;
      case 'read_only_false':
        this.setReadOnlyFalse(e);
        break;
      case 'formfield properties':
        break;
      default:
        break;
    }
  }

  public customContextMenuBeforeOpen = (e: any): void => {
    var pdfViewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (var i = 0; i < e.ids.length; i++) {
      var search = document.getElementById(e.ids[i]);
      if (search) {
        search.style.display = 'none';
        if (e.ids[i] === 'search_in_google' && (pdfViewer.textSelectionModule) && pdfViewer.textSelectionModule.isTextSelection) {
          search.style.display = 'block';
        } else if (e.ids[i] === "lock_annotation" || e.ids[i] === "unlock_annotation") {
          var isLockOption = e.ids[i] === "lock_annotation";
          for (var j = 0; j < pdfViewer.selectedItems.annotations.length; j++) {
            var selectedAnnotation: any = pdfViewer.selectedItems.annotations[j];
            if (selectedAnnotation && selectedAnnotation.annotationSettings) {
              var shouldDisplay = (isLockOption && !selectedAnnotation.annotationSettings.isLock) ||
                (!isLockOption && selectedAnnotation.annotationSettings.isLock);
              search.style.display = shouldDisplay ? 'block' : 'none';
            }
          }
        } else if ((e.ids[i] === "read_only_true" || e.ids[i] === "read_only_false") && pdfViewer.selectedItems.formFields.length !== 0) {
          var isReadOnlyOption = e.ids[i] === "read_only_true";
          for (var j = 0; j < pdfViewer.selectedItems.formFields.length; j++) {
            var selectedFormFields = pdfViewer.selectedItems.formFields[j];
            if (selectedFormFields) {
              var selectedFormField = pdfViewer.selectedItems.formFields[j].isReadonly;
              var displayMenu = (isReadOnlyOption && !selectedFormField) || (!isReadOnlyOption && selectedFormField);
              search.style.display = displayMenu ? 'block' : 'none';
            }
          }
        } else if (e.ids[i] === 'formfield properties' && pdfViewer.selectedItems.formFields.length !== 0) {
          search.style.display = 'block';
        }
      }
    }
  }

  public lockAnnotations(e: any) {
    var pdfViewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (var i = 0; i < pdfViewer.annotationCollection.length; i++) {
      if (pdfViewer.annotationCollection[i].uniqueKey === pdfViewer.selectedItems.annotations[0].id) {
        pdfViewer.annotationCollection[i].annotationSettings.isLock = true;
        pdfViewer.annotationCollection[i].isCommentLock = true;
        pdfViewer.annotation.editAnnotation(pdfViewer.annotationCollection[i]);
      }
      e.cancel = false;
    }
  }

  public unlockAnnotations(e: any) {
    var pdfViewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (var i = 0; i < pdfViewer.annotationCollection.length; i++) {
      if (pdfViewer.annotationCollection[i].uniqueKey === pdfViewer.selectedItems.annotations[0].id) {
        pdfViewer.annotationCollection[i].annotationSettings.isLock = false;
        pdfViewer.annotationCollection[i].isCommentLock = false;
        pdfViewer.annotation.editAnnotation(pdfViewer.annotationCollection[i]);
      }
      e.cancel = false;
    }
  }

  public setReadOnlyTrue(e: any) {
    var pdfViewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    var selectedFormFields = pdfViewer.selectedItems.formFields;
    for (var i = 0; i < selectedFormFields.length; i++) {
      var selectedFormField = selectedFormFields[i];
      if (selectedFormField) {
        pdfViewer.formDesignerModule.updateFormField(selectedFormField, {
          isReadOnly: true,
        } as any);
      }
      e.cancel = false;
    }
  }

  public setReadOnlyFalse(e: any) {
    var pdfViewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    var selectedFormFields = pdfViewer.selectedItems.formFields;
    for (var i = 0; i < selectedFormFields.length; i++) {
      var selectedFormField = selectedFormFields[i];
      if (selectedFormField) {
        pdfViewer.formDesignerModule.updateFormField(selectedFormField, {
          isReadOnly: false,
        } as any);
      }
      e.cancel = false;
    }
  }

  public contextmenuHelper(e: any): void {
    var pdfViewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    this.hide = this.hideObj
    this.toolbar = this.toolbarObj
    pdfViewer.addCustomMenu(this.menuItems, this.hide.checked, this.toolbar.checked);
  }

}