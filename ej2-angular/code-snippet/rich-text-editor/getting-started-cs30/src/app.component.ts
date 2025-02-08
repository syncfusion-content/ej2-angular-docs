import { Component, ViewChild } from '@angular/core';
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService, RichTextEditorComponent, NodeSelection, ToolbarSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';
import { ButtonPropsModel } from '@syncfusion/ej2-popups';
import { DialogComponent, DialogModule } from '@syncfusion/ej2-angular-popups';

@Component({
    imports: [
        RichTextEditorModule,
        DialogModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='customEditor' #customEditor [toolbarSettings]='tools' (created)='onCreate()' [(value)]='value'>
        </ejs-richtexteditor>
        <ejs-dialog #Dialog id="editorDialog" [buttons]='dlgButtons' (overlayClick)="dialogOverlay()" [header]='header' [visible]='false'
            [showCloseIcon]='false' [target]='target' (created)="dialogCreate()" [isModal]='true' [cssClass]='cssClass' [content]='contentData'>
        </ejs-dialog>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService]
})

export class AppComponent {
    @ViewChild('customEditor')
    public editorObj?: RichTextEditorComponent;
    @ViewChild('Dialog')
    public dialogObj?: DialogComponent;
    public value: string = "<div style='display: block;'><p style='margin-right: 10px'>The custom command \"insert special character\" is configured as the last item of the toolbar. Click on the command and choose the special character you want to include from the popup.</p></div>";
    public contentData: string = "<div id=\"rteSpecial_char\"><div class=\"char_block\" title=\"^\">^</div><div class=\"char_block\" title=\"_\">_</div><div class=\"char_block\" title=\"|\">|</div><div class=\"char_block\" title=\"¡\">¡</div><div class=\"char_block\" title=\"¢\">¢</div><div class=\"char_block\" title=\"£\">£</div><div class=\"char_block\" title=\"¤\">¤</div><div class=\"char_block\" title=\"¡\">¡</div><div class=\"char_block\" title=\"¢\">¢</div><div class=\"char_block\" title=\"£\">£</div><div class=\"char_block\" title=\"¤\">¤</div><div class=\"char_block\" title=\"¥\">¥</div><div class=\"char_block\" title=\"₹\">₹</div><div class=\"char_block\" title=\"¦\">¦</div><div class=\"char_block\" title=\"§\">§</div><div class=\"char_block\" title=\"¨\">¨</div><div class=\"char_block\" title=\"©\">©</div><div class=\"char_block\" title=\"ª\">ª</div><div class=\"char_block\" title=\"«\">«</div></div>";
    public selection: NodeSelection = new NodeSelection();
    public ranges?: Range;
    public tools: ToolbarSettingsModel = {
        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'Blockquote', 'OrderedList',
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
    public dlgButtons: ButtonPropsModel[] = [{ buttonModel: { content: "Insert", isPrimary: true }, click: this.onInsert.bind(this) },
    { buttonModel: { content: 'Cancel' }, click: this.dialogOverlay.bind(this) }];
    public header: string = 'Special Characters';
    public target: HTMLElement = document.getElementById('rteSection') as HTMLElement;
    public height: string = '350px';
    public onCreate(): void {
        let customBtn: HTMLElement = document.getElementById('custom_tbar') as HTMLElement;
        (this.dialogObj as DialogComponent).target = document.getElementById('rteSection') as HTMLElement;
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
        this.editorObj!.focusIn();
        this.ranges = this.selection.getRange(document);
        this.dialogObj!.width = this.editorObj!.element.offsetWidth * 0.5;
        this.dialogObj!.show();
        this.dialogObj!.element.style.maxHeight = 'none';
    }

    public onInsert(): void {
        let activeEle: Element = this.dialogObj!.element.querySelector('.char_block.e-active') as Element;
        if (activeEle) {
            this.ranges!.insertNode(document.createTextNode((activeEle as Element).textContent as string));
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
    public cssClass: String = "customClass e-rte-elements";
}