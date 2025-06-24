import { enableRipple, createElement } from '@syncfusion/ej2-base';
import { Component, ViewChild } from '@angular/core';
import { RichTextEditorModule, ToolbarSettingsModel, ContentRender, RichTextEditorComponent, MarkdownFormatter, ToolbarService, LinkService, ImageService, MarkdownEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';
import { marked } from 'marked';
enableRipple(true);

@Component({
    imports: [RichTextEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='mdCustom' #mdCustom [toolbarSettings]='tools' [editorMode]='mode' [formatter]='formatter' (created)='onCreate()' [value]='value'>
    </ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, MarkdownEditorService, TableService]
})

export class AppComponent {
    @ViewChild('mdCustom')
    public editorObj?: RichTextEditorComponent;
    public textArea?: HTMLTextAreaElement;
    public mdsource?: HTMLElement;
    public tools: ToolbarSettingsModel = {
        items: ['Bold', 'Italic', 'StrikeThrough', '|',
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
        selectionTags: { 'Bold': '__', 'Italic': '_' }

    });
    public value: string = "The sample is configured with customized markdown syntax using the __formatter__ property. Type the content and click the toolbar item to view customized markdown syntax. For unordered list, you need to add a plus sign before the word (e.g., + list1). Or to make a phrase bold, you need to add two underscores before and after the phrase (e.g., __this text is bold__).";
    public onCreate(): void {
        this.textArea = (this.editorObj!.contentModule as ContentRender).getEditPanel() as HTMLTextAreaElement;
        this.textArea.addEventListener('keyup', () => {
            this.markDownConversion();
        });
        this.mdsource = document.getElementById('preview-code') as HTMLElement;
        this.mdsource ?.addEventListener('click', (e: MouseEvent) => {
            this.fullPreview();
        });
    }
    public async markDownConversion(): Promise<void> {
        if (this.mdsource ?.classList.contains('e-active')) {
            let id: string = this.editorObj ?.getID() + 'html-view';
            let htmlPreview: Element = this.editorObj!.element.querySelector('#' + id) as Element;
            htmlPreview.innerHTML = await marked(((this.editorObj!.contentModule as ContentRender).getEditPanel() as HTMLTextAreaElement).value);
        }
    }
    public async fullPreview(): Promise<void> {
        let id: string = this.editorObj!.getID() + 'html-preview';
        let htmlPreview: HTMLElement = this.editorObj!.element.querySelector('#' + id) as HTMLElement;
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
            htmlPreview.innerHTML = await marked(((this.editorObj!.contentModule as ContentRender).getEditPanel() as HTMLTextAreaElement).value);
            this.mdsource!.parentElement!.title = 'Code View';
        }
    }
}



