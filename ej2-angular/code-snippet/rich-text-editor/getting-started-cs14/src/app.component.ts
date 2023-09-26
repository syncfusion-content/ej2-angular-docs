

    import { Component, ViewChild } from '@angular/core';
    import { ToolbarService, LinkService, ImageService, MarkdownEditorService, RichTextEditorComponent} from '@syncfusion/ej2-angular-richtexteditor';
    @Component({
    selector: 'app-root',
    template:`<ejs-richtexteditor #defaultRTE id='defaultRTE' [toolbarSettings]='tools' [editorMode]='mode'(create)='onCreate($event)'></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, MarkdownEditorService]
    })
    export class AppComponent  {
        @ViewChild('defaultRTE') rteObj: RichTextEditorComponent | undefined;
        public tools = {
           items: ['Bold', 'Italic', 'StrikeThrough', '|',
            'Formats', 'OrderedList', 'UnorderedList', '|',
            'CreateLink', 'Image', '|','Undo', 'Redo']
        };
        public mode = 'Markdown';
        onCreate(e: any) {
            document.onkeyup = function (e) {
                if (e.altKey && e.keyCode === 84 /* t */) {
                    // press alt+t to focus the component.
                    (this as any).rteObj.focusIn();
                }
            }
        }
    }



