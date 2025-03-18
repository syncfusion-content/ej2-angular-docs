import { enableRipple } from '@syncfusion/ej2-base';
import { Component, ViewChild } from '@angular/core';
import {
  RichTextEditorModule,
  ToolbarSettingsModel,
  RichTextEditorComponent,
  ContentRender,
  ToolbarService,
  LinkService,
  ImageService,
  MarkdownEditorService,
  TableService,
  EditorMode,
} from '@syncfusion/ej2-angular-richtexteditor';
import { Browser } from '@syncfusion/ej2-base';
import { marked } from 'marked';
import {
  SplitterComponent,
  SplitterModule,
} from '@syncfusion/ej2-angular-layouts';
enableRipple(true);

@Component({
    imports: [RichTextEditorModule, SplitterModule],
    standalone: true,
    selector: 'app-root',
    template: ` <div class="sample-container markdown-preview"><ejs-splitter id="splitter-rte-markdown-preview" #splitterInstance height='450px' width='100%' (resizing)="resizing()" (created)='updateOrientation()'>
    <e-panes>
        <e-pane size='50%' [resizable]='true' cssClass='pane1' min='40%' >
            <ng-template #content>
                <div class="content">
                    <ejs-richtexteditor id="markdown" #markdown [value]="value" height='447px' [toolbarSettings]='tools' saveInterval='10' [editorMode]='mode'
                        (created)='onCreate()' (change)='onChange()' (actionComplete)='updateValue()'>
                    </ejs-richtexteditor>
                </div>
            </ng-template>
        </e-pane>
        <e-pane cssClass='pane2' min='40%'>
            <ng-template #content>
                <div class="heading right">
                    <h6 class="title"><b>Markdown Preview</b></h6>
                    <div class="splitter-default-content source-code pane2" style="padding: 20px;"></div>
                </div>
            </ng-template>
        </e-pane>
    </e-panes>
</ejs-splitter></div>`,
    providers: [ToolbarService, LinkService, ImageService, MarkdownEditorService, TableService]
})

export class AppComponent {
    @ViewChild('markdown')
    public editorObj?: RichTextEditorComponent;

    @ViewChild('splitterInstance')
    public splitterObj!: SplitterComponent;

    public textArea?: HTMLTextAreaElement;
    public mdsource?: HTMLElement;
    public mdSplit?: HTMLElement;
    public htmlPreview?: HTMLElement;
    public tools: ToolbarSettingsModel = {
        enableFloating: false,
        items: [
            'Bold',
            'Italic',
            'StrikeThrough',
            '|',
            'Formats',
            'Blockquote',
            'OrderedList',
            'UnorderedList',
            '|',
            'CreateLink',
            'Image',
            'CreateTable',
            '|',
            'Undo',
            'Redo',
        ],
    };

    public value: string =
        'In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/). The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.';

    public srcArea: any;
    public mode: EditorMode = 'Markdown';

    public resizing(): void {
        this.editorObj!.refreshUI();
    }

    public updateOrientation(): void {
        debugger;
        if (Browser.isDevice) {
        (this.splitterObj as any).orientation = 'Vertical';
        (document.body.querySelector('.heading') as HTMLElement).style.width =
            'auto';
        }
    }

    public onCreate(): void {
        setTimeout(() => {
        this.editorObj!.refreshUI();
        this.textArea = (
            this.editorObj!.contentModule as ContentRender
        ).getEditPanel() as HTMLTextAreaElement;
        this.srcArea = document.querySelector('.source-code');
        this.updateValue();
        }, 0);
    }
    public onChange(): void {
        this.updateValue();
    }

    public async updateValue(): Promise<void> {
        this.srcArea.innerHTML = await marked(
        (
            (
            this.editorObj!.contentModule as ContentRender
            ).getEditPanel() as HTMLTextAreaElement
        ).value
        );
    }
}