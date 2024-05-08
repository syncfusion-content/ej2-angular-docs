import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor'



import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorComponent, EditorService, SelectionService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
imports: [
        
        ButtonModule,
        DocumentEditorAllModule
    ],


standalone: true,
      selector: 'app-container',
      template: `<div>
      <ejs-documenteditor #document_editor [isReadOnly]=true (created)="onCreated()" [enableSelection]=true [enableEditor]=true height="330px" style="display:block"></ejs-documenteditor>
      </div>`,
      encapsulation: ViewEncapsulation.None,
      providers: [EditorService, SelectionService]
})

export class AppComponent {
    @ViewChild('document_editor')
    public documentEditor?: DocumentEditorComponent;

    onCreated(): void {
        if ((this.documentEditor as DocumentEditorComponent).isDocumentLoaded) {
            let sfdt: string = '{"sections":[{"blocks":[{"paragraphFormat":{"styleName":"Heading 1"},"inlines":[{"text":"Headin"},{"name":"_GoBack","bookmarkType":0},{"name":"_GoBack","bookmarkType":1},{"text":"g1"}]},{"paragraphFormat":{"styleName":"Heading 2"},"inlines":[{"text":"Heading2"}]},{"paragraphFormat":{"styleName":"Heading 3"},"inlines":[{"text":"Heading3"}]},{"paragraphFormat":{"styleName":"Heading 4"},"inlines":[{"text":"Heading4"}]},{"paragraphFormat":{"styleName":"Heading 5"},"inlines":[{"text":"Heading5"}]},{"paragraphFormat":{"styleName":"Heading 6"},"inlines":[{"text":"Heading6"}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"Normal"}]}],"headersFooters":{},"sectionFormat":{"headerDistance":36.0,"footerDistance":36.0,"pageWidth":612.0,"pageHeight":792.0,"leftMargin":72.0,"rightMargin":72.0,"topMargin":72.0,"bottomMargin":72.0,"differentFirstPage":false,"differentOddAndEvenPages":false}}],"characterFormat":{"fontSize":11.0,"fontFamily":"Calibri"},"paragraphFormat":{"afterSpacing":8.0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple"},"background":{"color":"#FFFFFFFF"},"styles":[{"type":"Paragraph","name":"Normal","next":"Normal"},{"type":"Paragraph","name":"Heading 1","basedOn":"Normal","next":"Normal","link":"Heading 1 Char","characterFormat":{"fontSize":16.0,"fontFamily":"Calibri Light","fontColor":"#2F5496FF"},"paragraphFormat":{"beforeSpacing":12.0,"afterSpacing":0.0,"outlineLevel":"Level1"}},{"type":"Paragraph","name":"Heading 2","basedOn":"Normal","next":"Normal","link":"Heading 2 Char","characterFormat":{"fontSize":13.0,"fontFamily":"Calibri Light","fontColor":"#2F5496FF"},"paragraphFormat":{"beforeSpacing":2.0,"afterSpacing":0.0,"outlineLevel":"Level2"}},{"type":"Paragraph","name":"Heading 3","basedOn":"Normal","next":"Normal","link":"Heading 3 Char","characterFormat":{"fontSize":12.0,"fontFamily":"Calibri Light","fontColor":"#1F3763FF"},"paragraphFormat":{"beforeSpacing":2.0,"afterSpacing":0.0,"outlineLevel":"Level3"}},{"type":"Paragraph","name":"Heading 4","basedOn":"Normal","next":"Normal","link":"Heading 4 Char","characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496FF"},"paragraphFormat":{"beforeSpacing":2.0,"afterSpacing":0.0,"outlineLevel":"Level4"}},{"type":"Paragraph","name":"Heading 5","basedOn":"Normal","next":"Normal","link":"Heading 5 Char","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496FF"},"paragraphFormat":{"beforeSpacing":2.0,"afterSpacing":0.0,"outlineLevel":"Level5"}},{"type":"Paragraph","name":"Heading 6","basedOn":"Normal","next":"Normal","link":"Heading 6 Char","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763FF"},"paragraphFormat":{"beforeSpacing":2.0,"afterSpacing":0.0,"outlineLevel":"Level6"}},{"type":"Character","name":"Default Paragraph Font"},{"type":"Character","name":"Heading 1 Char","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":16.0,"fontFamily":"Calibri Light","fontColor":"#2F5496FF"}},{"type":"Character","name":"Heading 2 Char","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":13.0,"fontFamily":"Calibri Light","fontColor":"#2F5496FF"}},{"type":"Character","name":"Heading 3 Char","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":12.0,"fontFamily":"Calibri Light","fontColor":"#1F3763FF"}},{"type":"Character","name":"Heading 4 Char","basedOn":"Default Paragraph Font","characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496FF"}},{"type":"Character","name":"Heading 5 Char","basedOn":"Default Paragraph Font","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496FF"}},{"type":"Character","name":"Heading 6 Char","basedOn":"Default Paragraph Font","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763FF"}}]}';
            //Open the document in Document Editor.
            (this.documentEditor as DocumentEditorComponent).open(sfdt);
        }
    }
}


