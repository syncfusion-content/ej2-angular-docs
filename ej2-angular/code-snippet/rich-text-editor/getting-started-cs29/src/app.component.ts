

  import { Component, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent,CountService} from '@syncfusion/ej2-angular-richtexteditor';
import { createElement, addClass, removeClass, Browser } from '@syncfusion/ej2-base';

@Component({
selector: 'app-root',
template: `<ejs-richtexteditor #toolsRTE id='alltoolRTE' [toolbarSettings]='tools' [showCharCount]='true' (actionComplete)='actionCompleteHandler($event)' [maxLength]='maxLength'>
        <ng-template #valueTemplate>
          <p>The Rich Text Editor is WYSIWYG ("what you see is what you get") editor useful to create and edit content, and return the valid <a href="https://ej2.syncfusion.com/home/" target="_blank">HTML markup</a> or <a href="https://ej2.syncfusion.com/home/" target="_blank">markdown</a> of the content</p>
            <p><b>Toolbar</b></p>
            <ol>
                <li>
                    <p> Toolbar contains commands to align the text, insert link, insert image, insert list, undo/redo operations, HTML view, etc </p>
                </li>
                <li>
                    <p> Toolbar is fully customizable </p>
                </li>
            </ol>
            <p><b>Links</b></p>
            <ol>
                <li>
                    <p>You can insert a hyperlink with its corresponding dialog </p>
                </li>
                <li>
                    <p>Attach a hyperlink to the displayed text. </p>
                </li>
                <li>
                    <p> Customize the quick toolbar based on the hyperlink </p>
                </li>
            </ol>
            <p><b>Image.</b></p>
            <ol>
                <li>
                    <p> Allows you to insert images from an online source as well as the
                    local computer </p>
                </li>
                <li>
                    <p> You can upload an image </p>
                </li>
                <li>
                    <p>Provides an option to customize quick toolbar for an image </p>
                </li>
            </ol>
        </ng-template>
    </ejs-richtexteditor>`,
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



