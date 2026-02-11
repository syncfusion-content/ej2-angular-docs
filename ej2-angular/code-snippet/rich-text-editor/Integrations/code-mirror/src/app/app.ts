import { RichTextEditorAllModule, ToolbarSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent,CountService} from '@syncfusion/ej2-angular-richtexteditor';
import { createElement } from '@syncfusion/ej2-base';
import { EditorState } from '@codemirror/state';
import { html } from '@codemirror/lang-html';
import { EditorView } from '@codemirror/view';
import { basicSetup } from "codemirror";
import { oneDark } from '@codemirror/theme-one-dark';

@Component({
    imports: [  
        RichTextEditorAllModule
    ],
    standalone: true,
    selector: 'app-root',
    styleUrl: 'app.css',
    encapsulation: ViewEncapsulation.None,
    template: `<ejs-richtexteditor #editor [value]="value" [toolbarSettings]='tools' [showCharCount]='true' (actionComplete)='actionCompleteHandler($event)'></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, CountService]
})

export class App  {
    @ViewChild('editor')
    public rteObj?: RichTextEditorComponent;
    public tools: ToolbarSettingsModel = {
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

    public textArea?: HTMLElement;
    public myCodeMirror?: EditorView;
    public mirrorConversion(e?: any): void {
        const id: string = this.rteObj!.getID() + 'mirror-view';
        let mirrorView: HTMLElement = this.rteObj!.element.querySelector('#' + id) as HTMLElement;
        if (e.targetItem === 'Preview') {
            this.rteObj!.value = this.myCodeMirror!.state.doc.toString();
            this.rteObj!.dataBind();
            this.rteObj!.rootContainer.classList.remove('e-rte-code-mirror-enabled');
            this.rteObj!.focusIn();
        } else {
            this.rteObj!.rootContainer.classList.add('e-rte-code-mirror-enabled');
            this.rteObj!.rootContainer.classList.remove('e-source-code-enabled');
            const editorVlaue: string = (this.rteObj!.element.querySelector('.e-rte-srctextarea') as HTMLTextAreaElement).value;
            if (!mirrorView) {
                mirrorView = createElement('div', { className: 'rte-code-mirror', id: id, styles: 'display: none;' });
                this.rteObj!.rootContainer.appendChild(mirrorView);
                this.renderCodeMirror(mirrorView, editorVlaue === null ? '' : editorVlaue);
            }
            else {
                this.myCodeMirror!.setState(EditorState.create({doc: editorVlaue, extensions: [basicSetup, html(), EditorView.lineWrapping ]}))
            }
            this.myCodeMirror!.focus();
        }
    }

    public renderCodeMirror(mirrorView: HTMLElement, content: string): void {
        let extensions;
        if (document.body.classList && document.body.classList.contains('tailwind3-dark') && document.body.classList.contains('e-dark-mode')) {
            // basicSetup: includes line numbers, history, keymaps, etc.
            //html(): mode: 'text/html'
            extensions = [ basicSetup, html(), EditorView.lineWrapping, oneDark ]
        } else {
            extensions = [ basicSetup, html(), EditorView.lineWrapping ]
        }
        const state = EditorState.create({
            doc: content,
            extensions: extensions
        });
        
        this.myCodeMirror = new EditorView({
            state,
            parent: mirrorView
        });
    }
    public actionCompleteHandler(e: any): void {
        if (e.targetItem && (e.targetItem === 'SourceCode' || e.targetItem === 'Preview')) {
            this.mirrorConversion(e);
        }
    }
}