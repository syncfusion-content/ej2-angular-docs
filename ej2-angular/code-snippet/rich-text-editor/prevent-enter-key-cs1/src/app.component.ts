import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { RichTextEditorModule, RichTextEditorComponent, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService, ActionBeginEventArgs } from '@syncfusion/ej2-angular-richtexteditor';
import { DropDownListModule, DropDownListComponent, FieldSettingsModel } from '@syncfusion/ej2-angular-dropdowns';
@Component({
    imports: [
        RichTextEditorModule,
        DropDownListModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<div class="control-section">
        <table class='api'>
            <tbody>
                <tr>
                    <td>
                        <div>
                            <ejs-dropdownlist id='enterOption' #enterOption
                            [dataSource]='enterOptionData' (change)='enterChange()'
                            [value]='enterValue' [fields]='fields' [popupHeight]='height'
                            [placeholder]='enterPlaceHolder' [floatLabelType]='floatLabel'></ejs-dropdownlist>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <br>
        <ejs-richtexteditor id='editor' #editor [height]='editorHeight' (actionBegin)="onActionBegin($event)" [(value)]='value'></ejs-richtexteditor>
    </div>`,
    encapsulation: ViewEncapsulation.None,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService]
})
export class AppComponent {
    @ViewChild('editor')
    public editorObj?: RichTextEditorComponent;
    @ViewChild('enterOption')
    public enterObj?: DropDownListComponent;
    public value: string = "<p>In Rich Text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>";
    public enterOptionData: { [key: string]: Object }[] = [
        { Text: 'Create a new <p>', Value: 'P' },
        { Text: 'Create a new <div>', Value: 'DIV' },
        { Text: 'Create a new <br>', Value: 'BR' }
    ];

    public enterPlaceHolder: string = 'When pressing the enter key';
    public floatLabel: string = 'Always';
    public fields: FieldSettingsModel = { text: 'Text', value: 'Value' };
    public editorHeight = 220;
    public height: string = '200px';
    public enterValue: string = 'P';

    public enterChange(): void {
        if (this.enterObj!.value === 'P') {
            this.editorObj!.enterKey = 'P';
            this.editorObj!.value = `<p>In Rich Text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
        } else if (this.enterObj!.value === 'DIV') {
            this.editorObj!.enterKey = 'DIV';
            this.editorObj!.value = `<div>In Rich Text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</div><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
        } else if (this.enterObj!.value === 'BR') {
            this.editorObj!.enterKey = 'BR';
            this.editorObj!.value = `In Rich Text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:<ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
        }
    }

    public onActionBegin(args: ActionBeginEventArgs): void {
        if (args.requestType === 'EnterAction') {
            args.cancel = true;                                     // to prevent default enter key action in editor level
            (args.originalEvent as KeyboardEvent).preventDefault(); // to prevent default enter key action in browser level
        }
    }
}