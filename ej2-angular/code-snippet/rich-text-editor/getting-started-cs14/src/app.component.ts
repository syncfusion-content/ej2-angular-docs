import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor'
import { DialogModule } from '@syncfusion/ej2-angular-popups'
import { Component, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, MarkdownEditorService, RichTextEditorComponent} from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [ 
        RichTextEditorAllModule,
        DialogModule
    ],
    standalone: true,
    selector: 'app-root',
    template:`<ejs-richtexteditor #defaultRTE id='defaultRTE' [toolbarSettings]='tools' [editorMode]='mode' [value]='rteValue' (create)='onCreate($event)'></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, MarkdownEditorService]
})
    
export class AppComponent  {
    @ViewChild('defaultRTE') rteObj: RichTextEditorComponent | undefined;
    
    public tools = {
        items: ['Bold', 'Italic', 'StrikeThrough', '|',
        'Formats', 'OrderedList', 'UnorderedList', '|',
        'CreateLink', 'Image', '|','Undo', 'Redo']
    };

    public rteValue: string = `In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/). The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.`;
    
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



