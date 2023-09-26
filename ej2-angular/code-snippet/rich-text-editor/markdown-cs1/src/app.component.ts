


import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
/**
 * Rich Text Editor Markdown Preview demo
 */
import { Component, ViewChild } from '@angular/core';
import { addClass, removeClass, Browser } from '@syncfusion/ej2-base';
import { RichTextEditorComponent, ToolbarService, LinkService } from '@syncfusion/ej2-angular-richtexteditor';
import { ImageService, MarkdownEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import { createElement, KeyboardEventArgs, isNullOrUndefined } from '@syncfusion/ej2-base';
import * as Marked from 'marked';
    @Component({
    selector: 'app-root',
    template: `<ejs-richtexteditor id='mdPreview' #mdPreview [toolbarSettings]='tools' [editorMode]='mode' (created)='onCreate()' (actionComplete)="actionComplete($event)">
        <ng-template #valueTemplate>
            In Rich Text Editor , you click the toolbar buttons to format the words and the changes are visible immediately.
            Markdown is not like that. When you format the word in Markdown format, you need to
            add Markdown syntax to the word to indicate which words
            and phrases should look different from each other.
            Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text.
            You can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/).
            The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.
        </ng-template>
    </ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, MarkdownEditorService]
    })
export class AppComponent  {
        @ViewChild('mdPreview')
public rteObj?: RichTextEditorComponent;
public textArea?: HTMLTextAreaElement;
public mdsource?: HTMLElement;
public mdSplit?: HTMLElement;
public htmlPreview?: HTMLElement;
public tools: object = {
    items: ['Bold', 'Italic', 'StrikeThrough', '|', 'Formats', 'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', '|',
        {
            tooltipText: 'Preview',
            template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
            '<span class="e-btn-icon e-md-preview e-icons"></span></button>'
        }, {
            tooltipText: 'Split Editor',
            template: '<button id="MD_Preview" class="e-tbar-btn e-control e-btn e-icon-btn">' +
            '<span class="e-btn-icon e-view-side e-icons"></span></button>'
        }, 'FullScreen', '|', 'Undo', 'Redo']
};
public mode: string = 'Markdown';
public onCreate(): void {
    let script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
    document.head.appendChild(script);
    this.textArea = (this.rteObj!.contentModule as any).getEditPanel() as HTMLTextAreaElement;
    this.textArea.addEventListener('keyup', () => {
        this.markDownConversion();
    });
    this.mdsource = document.getElementById('preview-code') as any;
    this.mdsource!.addEventListener('click', (e: MouseEvent) => {
        this.fullPreview({ mode: true, type: 'preview' });
        if ((e.target as HTMLElement).parentElement!.classList.contains('e-active')) {
            this.rteObj!.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'OrderedList',
                'UnorderedList', 'CreateLink', 'Image']);
            (e.target as HTMLElement)!.parentElement!.parentElement!.nextElementSibling!.classList.add('e-overlay');
        } else {
            this.rteObj!.enableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'OrderedList',
                'UnorderedList', 'CreateLink', 'Image']);
            (e.target as HTMLElement).parentElement!.parentElement!.nextElementSibling!.classList.remove('e-overlay');
        }
    });
    this.mdSplit = document.getElementById('MD_Preview') as any;
    this.mdSplit!.addEventListener('click', (e: MouseEvent) => {
        if (this.rteObj!.element.classList.contains('e-rte-full-screen')) {
            this.fullPreview({ mode: true, type: '' });
        }
        this.mdsource!.classList.remove('e-active');
        this.rteObj!.showFullScreen();
    });
}
public actionComplete(e: any): void {
    if (e.targetItem === 'Maximize' && isNullOrUndefined(e.args)) {
        this.fullPreview({ mode: true, type: '' });
    } else if (!this.mdSplit!.parentElement!.classList.contains('e-overlay')) {
        if (e.targetItem === 'Minimize') {
            this.textArea!.style.display = 'block';
            this.textArea!.style.width = '100%';
            if (this.htmlPreview) { this.htmlPreview.style.display = 'none'; }
            this.mdSplit!.classList.remove('e-active');
            this.mdsource!.classList.remove('e-active');
        }
        this.markDownConversion();
    }
}
public markDownConversion(): void {
    if (this.mdSplit!.classList.contains('e-active')) {
        let id: string = this.rteObj!.getID() + 'html-preview';
        let htmlPreview: HTMLElement = this.rteObj!.element.querySelector('#' + id) as HTMLElement;
        debugger
        htmlPreview.innerHTML =  Marked(((this.rteObj!.contentModule as any).getEditPanel() as HTMLTextAreaElement).value);
    }
}
public fullPreview(e: { [key: string]: string | boolean }): void {
    let id: string = this.rteObj!.getID() + 'html-preview';
    this.htmlPreview = this.rteObj!.element.querySelector('#' + id) as HTMLElement;
    if ((this.mdsource!.classList.contains('e-active') || this.mdSplit!.classList.contains('e-active')) && e['mode']) {
        this.mdsource!.classList.remove('e-active');
        this.mdSplit!.classList.remove('e-active');
        this.textArea!.style.display = 'block';
        this.textArea!.style.width = '100%';
        this.htmlPreview.style.display = 'none';
    } else {
        this.mdsource!.classList.add('e-active');
        this.mdSplit!.classList.add('e-active');
        if (!this.htmlPreview) {
            this.htmlPreview = createElement('div', { className: 'e-content' });
            this.htmlPreview.id = id;
            this.textArea!.parentNode!.appendChild(this.htmlPreview);
        }
        if (e['type'] === 'preview') {
            this.textArea!.style.display = 'none';
            this.htmlPreview.classList.add('e-pre-source');
        } else {
            this.htmlPreview.classList.remove('e-pre-source');
            this.textArea!.style.width = '50%';
        }
        this.htmlPreview.style.display = 'block';
        this.htmlPreview.innerHTML = Marked(((this.rteObj!.contentModule as any).getEditPanel() as HTMLTextAreaElement).value);
    }
}
}



