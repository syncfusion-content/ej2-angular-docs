

    import { Component, ViewChild } from '@angular/core';
    import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent} from '@syncfusion/ej2-angular-richtexteditor';
    @Component({
    selector: 'app-root',
    template:`<ejs-richtexteditor #defaultRTE id='defaultRTE' [toolbarSettings]='tools' [keyConfig]='keyConfig' (create)='onCreate($event)'></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
    })
    export class AppComponent  {
        @ViewChild('defaultRTE') rteObj: RichTextEditorComponent | undefined;
        public tools = {
            items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
        'Outdent', 'Indent', '|',
        'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
        'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
        };
        public keyConfig = {
            'copy': 'ctrl+1',
            'cut': 'ctrl+2',
            'paste': 'ctrl+3'
        }
        onCreate(e: any) {
            document.onkeyup = function (e) {
                if (e.altKey && e.keyCode === 84 /* t */) {
                    // press alt+t to focus the component.
                    (this as any).rteObj.focusIn();
                }
            }
        }
    }



