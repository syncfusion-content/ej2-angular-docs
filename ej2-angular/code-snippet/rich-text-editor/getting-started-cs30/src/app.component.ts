


import { Component, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService , RichTextEditorComponent, NodeSelection} from '@syncfusion/ej2-angular-richtexteditor';
import { Dialog } from '@syncfusion/ej2-popups';
@Component({
    selector: 'app-root',
    template: `<ejs-richtexteditor id='customRTE' #customRTE [toolbarSettings]='tools' (created)='onCreate()'>
            <ng-template #valueTemplate>
                <div style="display:block;"><p style="margin-right:10px">The custom
                command "insert special character" is configured as the last item of
                the toolbar.Click on the command and choose the special character you want
                to include from the popup.</p></div>
            </ng-template>
        </ejs-richtexteditor>
        <ejs-dialog #Dialog id="rteDialog" [buttons]='dlgButtons' (overlayClick)="dialogOverlay()" [header]='header' [visible]='false'
            [showCloseIcon]='false' [target]='target' (created)="dialogCreate()" [isModal]='true'>
            <ng-template #content>
                <div id="rteSpecial_char">
                    <div class="char_block" title="^">^</div>
                    <div class="char_block" title="_">_</div>
                    <div class="char_block" title="|">|</div>
                    <div class="char_block" title="¡">¡</div>
                    <div class="char_block" title="¢">¢</div>
                    <div class="char_block" title="£">£</div>
                    <div class="char_block" title="¤">¤</div>
                    <div class="char_block" title="¡">¡</div>
                    <div class="char_block" title="¢">¢</div>
                    <div class="char_block" title="£">£</div>
                    <div class="char_block" title="¤">¤</div>
                    <div class="char_block" title="¥">¥</div>
                    <div class="char_block" title="₹">₹</div>
                    <div class="char_block" title="¦">¦</div>
                    <div class="char_block" title="§">§</div>
                    <div class="char_block" title="¨">¨</div>
                    <div class="char_block" title="©">©</div>
                    <div class="char_block" title="ª">ª</div>
                    <div class="char_block" title="«">«</div>
                </div>
            </ng-template>
        </ejs-dialog>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService]
})
export class AppComponent  {
@ViewChild('customRTE')
public rteObj?: RichTextEditorComponent;
@ViewChild('Dialog')
public dialogObj?: Dialog;
public selection: NodeSelection = new NodeSelection();
public ranges?: Range;
public tools: object = {
    items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'OrderedList',
    'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode',
    {
        tooltipText: 'Insert Symbol',
        undo: true,
        click: this.onClick.bind(this),
        template: '<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar"  style="width:100%">'
                  + '<div class="e-tbar-btn-text" style="font-weight: 500;"> Ω</div></button>'
    }, '|', 'Undo', 'Redo'
    ]
};
public dlgButtons: any = [{ buttonModel: { content: "Insert", isPrimary: true }, click: this.onInsert.bind(this) },
{ buttonModel: { content: 'Cancel' }, click: this.dialogOverlay.bind(this) }];
public header: string = 'Special Characters';
public target: HTMLElement = document.getElementById('rteSection') as HTMLElement;
public height: any = '350px';
public onCreate(): void {
    let customBtn: HTMLElement = document.getElementById('custom_tbar') as HTMLElement;
    (this.dialogObj as any).target = document.getElementById('rteSection');
}
public dialogCreate(): void {
    let dialogCtn: HTMLElement = document.getElementById('rteSpecial_char') as HTMLElement;
    dialogCtn.onclick = (e: Event) => {
        let target: HTMLElement = e.target as HTMLElement;
        let activeEle: Element = this.dialogObj!.element.querySelector('.char_block.e-active') as Element;
        if (target.classList.contains('char_block')) {
            target.classList.add('e-active');
            if (activeEle) {
                activeEle.classList.remove('e-active');
            }
        }
    };
}

public onClick() {
    this.rteObj!.focusIn();
    this.ranges = this.selection.getRange(document);
    this.dialogObj!.width = this.rteObj!.element.offsetWidth * 0.5;
    this.dialogObj!.dataBind();
    this.dialogObj!.show();
    this.dialogObj!.element.style.maxHeight = 'none';
}

public onInsert(): void {
    let activeEle: Element = this.dialogObj!.element.querySelector('.char_block.e-active') as Element;
    if (activeEle) {
        this.ranges!.insertNode(document.createTextNode((activeEle as any).textContent));
    }
    this.dialogOverlay();
}

public dialogOverlay(): void {
    let activeEle: Element = this.dialogObj!.element.querySelector('.char_block.e-active') as Element;
    if (activeEle) {
        activeEle.classList.remove('e-active');
    }
    this.dialogObj!.hide();
}
}



