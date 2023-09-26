

    import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
    import { createElement } from '@syncfusion/ej2-base';
    import { RichTextEditorComponent, ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
    import { DropDownListComponent, FieldSettingsModel } from '@syncfusion/ej2-angular-dropdowns';
    @Component({
    selector: 'app-root',
    template:`<div class="control-section">
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
        <ejs-richtexteditor id='defaultRTE' #defaultRTE [height]='rteHeight'>
            <ng-template #valueTemplate>
                <p>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>
            </ng-template>
        </ejs-richtexteditor>
    </div>`,
    encapsulation: ViewEncapsulation.None,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
    })
    export class AppComponent  {
         @ViewChild('defaultRTE')
        public rteObj?: RichTextEditorComponent;

        @ViewChild('enterOption')
        public enterObj?: DropDownListComponent;

        public enterOptionData: { [key: string]: Object }[] = [
            { Text: 'Create a new <p>', Value: 'P' },
            { Text: 'Create a new <div>', Value: 'DIV' },
            { Text: 'Create a new <br>', Value: 'BR' }
        ];

        public enterPlaceHolder: string = 'When pressing the enter key';
        public floatLabel: string = 'Always';
        public fields: FieldSettingsModel = { text: 'Text', value: 'Value' };
        public rteHeight = 220;
        public height: string = '200px';
        public enterValue: string = 'P';

        public enterChange(): void {
            if (this.enterObj!.value === 'P') {
                this.rteObj!.enterKey = 'P';
                this.rteObj!.value = `<p>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
            } else if (this.enterObj!.value === 'DIV') {
                this.rteObj!.enterKey = 'DIV';
                this.rteObj!.value = `<div>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</div><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
            } else if (this.enterObj!.value === 'BR') {
                this.rteObj!.enterKey = 'BR';
                this.rteObj!.value = `In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:<ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
            }
        }
    }



