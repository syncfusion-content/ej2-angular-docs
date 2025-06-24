import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor'
import { DialogModule } from '@syncfusion/ej2-angular-popups'
import { Component, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent,CountService} from '@syncfusion/ej2-angular-richtexteditor';
import { createElement, addClass, removeClass, Browser } from '@syncfusion/ej2-base';

@Component({
    imports: [  
        RichTextEditorAllModule,
        DialogModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor #toolsRTE id='alltoolRTE' [value]="value" [toolbarSettings]='tools' [showCharCount]='true' (actionComplete)='actionCompleteHandler($event)' [maxLength]='maxLength'></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, CountService]
})

export class AppComponent  {
    @ViewChild('toolsRTE') public rteObj?: RichTextEditorComponent;
    public tools: object = {
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
        'Outdent', 'Indent', '|',
        'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
        'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
    };
    public value = `<p>The Syncfudion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul>
        <li>
            <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p>
        </li>
        <li>
            <p>Bulleted and numbered lists.</p>
        </li>
        <li>
            <p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p>
        </li>
        <li>
            <p>Contains undo/redo manager. </p>
        </li>
        </ul><div style="display: inline-block; width: 60%; vertical-align: top; cursor: auto;"><img alt="Sky with sun" src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png" width="309" style="min-width: 10px; min-height: 10px; width: 309px; height: 174px;" class="e-rte-image e-imginline e-rte-drag-image" height="174" /></div>  `;

    public maxLength: number = 1000;
    public textArea?: HTMLElement;
    public myCodeMirror?: any;
    ngAfterViewInit(): void {
        let rteObj: RichTextEditorComponent = this.rteObj as any;
        setTimeout(() => { this.textArea = (rteObj.contentModule as any).getEditPanel() as HTMLElement; }, 600);
    }
    public mirrorConversion(e?: any): void {
        let id: string = this.rteObj!.getID() + 'mirror-view';
        let mirrorView: HTMLElement = this.rteObj!.element.querySelector('#' + id) as HTMLElement;
        let charCount: HTMLElement = this.rteObj!.element.querySelector('.e-rte-character-count') as HTMLElement;
        if (e.targetItem === 'Preview') {
            this.textArea!.style.display = 'block';
            mirrorView.style.display = 'none';
            this.textArea!.innerHTML = this.myCodeMirror.getValue();
            charCount.style.display = 'block';
        } else {
            if (!mirrorView) {
                mirrorView = createElement('div', { className: 'e-content' });
                mirrorView.id = id;
                this.textArea!.parentNode!.appendChild(mirrorView);
            } else {
                mirrorView.innerHTML = '';
            }
            this.textArea!.style.display = 'none';
            mirrorView.style.display = 'block';
            this.renderCodeMirror(mirrorView, this.rteObj!.value);
            charCount.style.display = 'none';
        }
    }

    public renderCodeMirror(mirrorView: HTMLElement, content: string): void {
    // this.myCodeMirror = CodeMirror(mirrorView, {
    //     value: content,
    //     lineNumbers: true,
    //     mode: 'text/html',
    //     lineWrapping: true,

    // });
    }
    public actionCompleteHandler(e: any): void {
        if (e.targetItem && (e.targetItem === 'SourceCode' || e.targetItem === 'Preview')) {
            (this.rteObj!.sourceCodeModule.getPanel() as HTMLTextAreaElement).style.display = 'none';
            this.mirrorConversion(e);
        } else {
            setTimeout(() => { this.rteObj!.toolbarModule.refreshToolbarOverflow(); }, 400);
        }
    }
}



