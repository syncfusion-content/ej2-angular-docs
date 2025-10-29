import { Component,ViewChild } from '@angular/core';
import {SliderComponent,ChangeEventArgs,SliderModule} from '@syncfusion/ej2-angular-inputs';
import { RichTextEditorModule,RichTextEditorComponent,ToolbarSettingsModel, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [RichTextEditorModule, SliderModule],
    standalone: true,
    selector: 'app-root',
    template: `<div id="container">
                    <div class="sliderwrap">
                    <label class="labeltext userselect">Range Slider</label>
                    <ejs-slider
                        #rangeSlider
                        [type]="'Range'"
                        [value]="sliderValue"
                        [min]="0"
                        [max]="maxLength"
                        (change)="onSliderChange($event)"
                    ></ejs-slider>
                    </div>

                    <ejs-richtexteditor
                    #rte
                    [value]="rteContent"
                    [height]="400"
                    ></ejs-richtexteditor>
                </div>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService]
})
export class AppComponent {
  @ViewChild('rangeSlider') rangeSlider!: SliderComponent;
  @ViewChild('rte') rte!: RichTextEditorComponent;

  sliderValue: number[] = [0, 50];
  maxLength: number = 400;

  rteContent: string = `<p>The Syncfusion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here. Key features: Provides IFRAME and DIV modes. Bulleted and numbered lists. Handles images, hyperlinks, videos, hyperlinks, uploads, etc. Contains undo/redo manager.</p>`;

  ngAfterViewInit(): void {
    const panel = this.rte.contentModule.getEditPanel();
    const textNode = panel.firstChild?.firstChild;
    if (textNode) {
      this.maxLength = textNode.textContent.length;
      this.rangeSlider.max = this.maxLength;
      this.rangeSlider.dataBind();
    }
  }

  onSliderChange(args: ChangeEventArgs): void {
    const value = args.value as any;
    const [start, end] = value;

    const panel = this.rte.contentModule.getEditPanel();
    const textNode = panel.firstChild?.firstChild;
    if (!textNode) return;

    const text = textNode as Text;
    const safeStart = Math.min(start, text.length);
    const safeEnd = Math.min(end, text.length);

    const range = document.createRange();
    range.setStart(textNode, safeStart);
    range.setEnd(textNode, safeEnd);

    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
  }
}