import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PdfViewerModule, LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService,
  ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService  } from '@syncfusion/ej2-angular-pdfviewer';


import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule , PdfViewerModule ],
  declarations: [ AppComponent ],
  bootstrap: [AppComponent],
  providers: [LinkAnnotationService, BookmarkViewService, MagnificationService,
    ThumbnailViewService, ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService]
})
export class AppModule { }
