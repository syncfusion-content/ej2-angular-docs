import { Component, ViewChild } from '@angular/core';
import { RichTextEditorModule, ToolbarService, LinkService, MarkdownEditorService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService, RichTextEditorComponent, NodeSelection, ToolbarSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';
import { ButtonPropsModel } from '@syncfusion/ej2-popups';
import { DialogComponent, DialogModule } from '@syncfusion/ej2-angular-popups';

@Component({
    imports: [
        RichTextEditorModule,
        DialogModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='customEditor' height="400px" #customEditor [editorMode]='mode' [toolbarSettings]='tools' (created)='onCreate()' [(value)]='value'>
        </ejs-richtexteditor>
        <ejs-dialog #Dialog id="editorDialog" [buttons]='dlgButtons'  [target]='target' (overlayClick)="dialogOverlay()" [header]='header' [visible]='false'
            [showCloseIcon]='false' (created)="dialogCreate()" [isModal]='true' [cssClass]='cssClass' [content]='contentData'>
        </ejs-dialog>`,
    providers: [ToolbarService, LinkService, ImageService, MarkdownEditorService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService]
})

export class AppComponent {
    @ViewChild('customEditor')
    public editorObj?: RichTextEditorComponent;
    @ViewChild('Dialog')
    public dialogObj?: DialogComponent;
    public mode: string = 'Markdown';
    public value: string =
      'In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/). The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.';
    public contentData: string =
      '<div id="rteSpecial_char"><div class="char_block" title="^">^</div><div class="char_block" title="_">_</div><div class="char_block" title="|">|</div><div class="char_block" title="¡">¡</div><div class="char_block" title="¢">¢</div><div class="char_block" title="£">£</div><div class="char_block" title="¤">¤</div><div class="char_block" title="¥">¥</div><div class="char_block" title="₹">₹</div><div class="char_block" title="§">§</div><div class="char_block" title="©">©</div></div>';
    public target: HTMLElement = document.getElementById(
      'rteSection'
    ) as HTMLElement;
    public tools: ToolbarSettingsModel = {
      items: [
        'Bold',
        'Italic',
        'StrikeThrough',
        '|',
        'Formats',
        'OrderedList',
        'UnorderedList',
        '|',
        'CreateLink',
        '|',
        {
          tooltipText: 'Insert Symbol',
          undo: true,
          click: this.onClick.bind(this),
          template: `<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar" style="width:100%">
              <div class="e-tbar-btn-text" style="font-weight: 500;"> Ω</div>
            </button>`,
        },
      ],
    };
  
    public dlgButtons: ButtonPropsModel[] = [
      {
        buttonModel: { content: 'Insert', isPrimary: true },
        click: this.onInsert.bind(this),
      },
      {
        buttonModel: { content: 'Cancel' },
        click: this.dialogOverlay.bind(this),
      },
    ];
  
    public header: string = 'Special Characters';
    public cssClass: String = 'customClass e-rte-elements';
  
    public onCreate(): void {
      (this.dialogObj as DialogComponent).target = document.getElementById(
        'customEditor'
      ) as HTMLElement;
    }
  
    public dialogCreate(): void {
      let dialogCtn: HTMLElement = document.getElementById(
        'rteSpecial_char'
      ) as HTMLElement;
      dialogCtn.onclick = (e: Event) => {
        let target: HTMLElement = e.target as HTMLElement;
        let activeEle: Element = this.dialogObj!.element.querySelector(
          '.char_block.e-active'
        ) as Element;
        if (target.classList.contains('char_block')) {
          target.classList.add('e-active');
          if (activeEle) {
            activeEle.classList.remove('e-active');
          }
        }
      };
    }
  
    public onClick() {
      this.dialogObj!.width = this.editorObj!.element.offsetWidth * 0.5;
      this.dialogObj!.show();
      this.dialogObj!.element.style.maxHeight = 'none';
    }
  
    public onInsert(): void {
      let activeEle: Element = this.dialogObj!.element.querySelector(
        '.char_block.e-active'
      ) as Element;
      if (activeEle) {
        let specialChar = (activeEle as Element).textContent as string;
        this.editorObj!.executeCommand('insertText', specialChar);
      }
      this.dialogOverlay();
    }
  
    public dialogOverlay(): void {
      let activeEle: Element = this.dialogObj!.element.querySelector(
        '.char_block.e-active'
      ) as Element;
      if (activeEle) {
        activeEle.classList.remove('e-active');
      }
      this.dialogObj!.hide();
    }
}