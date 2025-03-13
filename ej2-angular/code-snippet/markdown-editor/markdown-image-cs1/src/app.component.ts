import { enableRipple, createElement } from '@syncfusion/ej2-base';
import { Component, ViewChild } from '@angular/core';
import { RichTextEditorModule, ToolbarSettingsModel, ContentRender, RichTextEditorComponent, ToolbarService, LinkService, ImageService, MarkdownEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';
import { marked } from 'marked';
enableRipple(true);

@Component({
    imports: [RichTextEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='mdCustom' #mdCustom [toolbarSettings]='tools' [editorMode]='mode' (created)='onCreate()' [value]='value'>
    </ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, MarkdownEditorService, TableService]
})

export class AppComponent {
    @ViewChild('mdCustom')
    public editorObj?: RichTextEditorComponent;
    public textArea?: HTMLTextAreaElement;
    public mdsource?: HTMLElement;
    public tools: ToolbarSettingsModel = {
        items: ['Image',
            {
                tooltipText: 'Preview',
                template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
                    '<span class="e-btn-icon e-icons e-md-preview"></span></button>'
            }]
    };
    public mode: string = 'Markdown';
    public value: string = "In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/). The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.";
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