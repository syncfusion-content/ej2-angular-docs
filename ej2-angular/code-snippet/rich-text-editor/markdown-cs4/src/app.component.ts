


import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
/**
 * Rich Text Editor Markdown Preview Sample
 */
import { Component, ViewChild } from '@angular/core';
import { RichTextEditorComponent, MarkdownFormatter, ToolbarService } from '@syncfusion/ej2-angular-richtexteditor';
import { LinkService, ImageService, MarkdownEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import { createElement, KeyboardEventArgs } from '@syncfusion/ej2-base';
import * as Marked from 'marked';
    @Component({
    selector: 'app-root',
    template: `<ejs-richtexteditor id='mdCustom' #mdCustom [toolbarSettings]='tools' [editorMode]='mode' [formatter]='formatter' (created)='onCreate()'>
        <ng-template #valueTemplate>
          The sample is configured with customized markdown syntax using the __formatter__ property.
          Type the content and click the toolbar item to view customized markdown syntax.
          For unordered list, you need to add a plus sign before the word (e.g., + list1).
          Or To make a phrase bold, you need to add two underscores before and after the phrase (e.g., __this text is bold__).
        </ng-template>
    </ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, MarkdownEditorService]
    })
    export class AppComponent  {
    @ViewChild('mdCustom')
    public rteObj?: RichTextEditorComponent;
    public textArea?: HTMLTextAreaElement;
    public mdsource?: HTMLElement;
    public tools: object = {
        items:  ['Bold', 'Italic', 'StrikeThrough', '|',
        'Formats', 'OrderedList', 'UnorderedList', '|',
        'CreateLink', 'Image', '|',
        {
            tooltipText: 'Preview',
            template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
                '<span class="e-btn-icon e-icons e-md-preview"></span></button>'
        }, 'Undo', 'Redo']
    };
    public mode: string = 'Markdown';
     public formatter: MarkdownFormatter = new MarkdownFormatter({
        listTags: { 'OL': '1., 2., 3.', 'UL': '+ ' },
        formatTags: {
            'Blockquote': '> '
        },
        selectionTags: {'Bold': '__',  'Italic': '_'}

    });
    public onCreate(): void {
        this.textArea = (this.rteObj!.contentModule as any).getEditPanel() as HTMLTextAreaElement;
        this.textArea.addEventListener('keyup', () => {
            this.markDownConversion();
        });
        this.mdsource = document.getElementById('preview-code') as any;
        this.mdsource?.addEventListener('click', (e: MouseEvent) => {
            this.fullPreview();
        });
    }
    public markDownConversion(): void {
        if (this.mdsource?.classList.contains('e-active')) {
            let id: string = this.rteObj?.getID() + 'html-view';
            let htmlPreview: Element = this.rteObj!.element.querySelector('#' + id) as Element;
            htmlPreview.innerHTML = Marked(((this.rteObj!.contentModule as any).getEditPanel() as HTMLTextAreaElement).value);
        }
    }
    public fullPreview(): void {
        let id: string = this.rteObj!.getID() + 'html-preview';
        let htmlPreview: HTMLElement = this.rteObj!.element.querySelector('#' + id) as HTMLElement;
        if (this.mdsource!.classList.contains('e-active')) {
            this.mdsource!.classList.remove('e-active');
            this.textArea!.style.display = 'block';
            htmlPreview.style.display = 'none';
        } else {
            this.mdsource!.classList.add('e-active');
            if (!htmlPreview) {
                htmlPreview = createElement('div', { className: 'e-content e-pre-source' });
                htmlPreview.id = id;
                this.textArea!.parentNode!.appendChild(htmlPreview);
            }
            this.textArea!.style.display = 'none';
            htmlPreview.style.display = 'block';
            htmlPreview.innerHTML = Marked(((this.rteObj!.contentModule as any).getEditPanel() as HTMLTextAreaElement).value);
            this.mdsource!.parentElement!.title = 'Code View';
        }
    }
    }



