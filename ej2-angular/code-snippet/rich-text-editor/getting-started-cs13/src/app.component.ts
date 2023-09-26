

    import { Component, ViewChild } from '@angular/core';
    import { RichTextEditorComponent, ToolbarService, HtmlEditorService, ImageService, QuickToolbarService, LinkService, FormatPainterService } from '@syncfusion/ej2-angular-richtexteditor';
    @Component({
    selector: 'app-root',
    template:`<ejs-richtexteditor #defaultRTE id='defaultRTE' [toolbarSettings]='tools' (create)='onCreate($event)'></ejs-richtexteditor>`,
    providers: [ToolbarService, HtmlEditorService, ImageService, QuickToolbarService, LinkService, FormatPainterService ]
    })
    export class AppComponent  {
        @ViewChild('defaultRTE') rteObj: RichTextEditorComponent | undefined;
        public tools = {
            items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
        'Outdent', 'Indent', '|',
        'CreateLink', 'Image', '|', 'FormatPainter', 'ClearFormat', 'Print',
        'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
        };
        onCreate(e: any) {
            document.onkeyup = function (e) {
                if (e.altKey && e.keyCode === 84 /* t */) {
                    // press alt+t to focus the component.
                    (this as any).rteObj.focusIn();
                }
            }
        }
    }



