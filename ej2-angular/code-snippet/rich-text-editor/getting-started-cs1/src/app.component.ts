

    import { Component } from '@angular/core';
    import { ToolbarService, LinkService, ImageService, HtmlEditorService} from '@syncfusion/ej2-angular-richtexteditor';
    @Component({
    selector: 'app-root',
    template:`<ejs-richtexteditor #defaultRTE id='defaultRTE' [toolbarSettings]='tools'></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
    })
    export class AppComponent  {
        public tools = {
            items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
        'Outdent', 'Indent', '|',
        'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
        'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
        };
    }



