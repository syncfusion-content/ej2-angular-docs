import { Component, ViewChild } from '@angular/core';
import { NodeSelection, ToolbarService, QuickToolbarService, LinkService, ImageService, PasteCleanupService, HtmlEditorService, RichTextEditorModule, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [RichTextEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `<div><button (click)="setBackground()" class="e-btn" style="margin:5px">Apply</button>
  <ejs-richtexteditor #editor [value]="value"></ejs-richtexteditor></div>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, PasteCleanupService],
})
export class AppComponent {
    @ViewChild('editor')
    public editorObj!: RichTextEditorComponent;

    public value: string =
        "<p>The Rich Text Editor component is the WYSIWYG ('what you see is what you get') editor that provides the best user experience to create and update content. Users can format their content using standard toolbar commands.</p>";

    private nodeSelection: NodeSelection = new NodeSelection();

    setBackground() {
        const rteContent = (this.editorObj as any).contentModule.getDocument();
        const firstParagraph = (this.editorObj as any).contentModule
            .getEditPanel()
            .querySelector('p');

        if (firstParagraph && firstParagraph.firstChild) {
            this.nodeSelection.setSelectionText(
                rteContent,
                firstParagraph.firstChild,
                firstParagraph.firstChild,
                4, // Start index
                20 // End index
            );
            this.editorObj.executeCommand('backColor', 'yellow');
        }
    }
}
