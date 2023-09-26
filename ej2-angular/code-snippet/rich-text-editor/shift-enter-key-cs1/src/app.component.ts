

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
                            <ejs-dropdownlist id='shiftEnterOption' #shiftEnterOption
                            [dataSource]='shiftEnterData' (change)='shiftEnterChange()'
                            [value]='shiftEnterValue' [fields]='fields' [popupHeight]='height'
                            [placeholder]='shiftEnterPlaceHolder' [floatLabelType]='floatLabel'></ejs-dropdownlist>
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

        @ViewChild('shiftEnterOption')
        public shiftEnterObj?: DropDownListComponent;

        public shiftEnterData: { [key: string]: Object }[] = [
            { Text: 'Create a new <br>', Value: 'BR' },
            { Text: 'Create a new <div>', Value: 'DIV' },
            { Text: 'Create a new <p>', Value: 'P' }
        ];

        public shiftEnterPlaceHolder: string = 'When pressing the shift + enter key';
        public floatLabel: string = 'Always';
        public fields: FieldSettingsModel = { text: 'Text', value: 'Value' };
        public rteHeight = 220;
        public height: string = '200px';
        public shiftEnterValue: string = 'BR';
        public shiftEnterChange(): void {
            if (this.shiftEnterObj!.value === 'BR') {
                this.rteObj!.shiftEnterKey = 'BR';
            } else if (this.shiftEnterObj!.value === 'DIV') {
                this.rteObj!.shiftEnterKey = 'DIV';
            } else if (this.shiftEnterObj!.value === 'P') {
                this.rteObj!.shiftEnterKey = 'P';
            }
        }
    }



