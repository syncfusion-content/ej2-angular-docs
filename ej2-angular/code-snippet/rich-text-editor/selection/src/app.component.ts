import { Component, ViewChild } from '@angular/core';
import { SliderComponent, ChangeEventArgs, SliderModule } from '@syncfusion/ej2-angular-inputs';
import { RichTextEditorComponent, RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, VideoService, AudioService, PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RichTextEditorModule, SliderModule],
  template: `
    <div id="container">
      <div class="sliderwrap">
        <label class="labeltext userselect">Range Slider</label>
        <ejs-slider
          #rangeSlider
          [type]="'Range'"
          [value]="sliderValue"
          [min]="0"
          [max]="maxLength"
          (change)="onChange($event)"
        ></ejs-slider>
      </div>

      <ejs-richtexteditor
        #rte
        [value]="rteContent"
        (created)="onEditorCreated()"
      ></ejs-richtexteditor>
    </div>
  `,
  providers: [
    ToolbarService,
    LinkService,
    ImageService,
    HtmlEditorService,
    QuickToolbarService,
    TableService,
    VideoService,
    AudioService,
    PasteCleanupService,
  ],
})
export class AppComponent {
  @ViewChild('rangeSlider') rangeSlider!: SliderComponent;
  @ViewChild('rte') rte!: RichTextEditorComponent;

  sliderValue: number[] = [0, 50];
  maxLength: number = 400;

  rteContent: string = `<p>The Syncfusion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here. Key features: Provides IFRAME and DIV modes. Bulleted and numbered lists. Handles images, hyperlinks, videos, hyperlinks, uploads, etc. Contains undo/redo manager.</p>`;

  onEditorCreated(): void {
    setTimeout(() => {
      const panel = this.rte.contentModule.getEditPanel() as HTMLElement;
      const realLength = panel.textContent?.length ?? 0;

      this.maxLength = realLength;
      this.rangeSlider.max = realLength;
      this.rangeSlider.dataBind();

      panel.focus();

      this.onChange({ value: this.rangeSlider.value } as ChangeEventArgs);
    }, 100);
  }

  getTextNodeAtOffset(root: Node, offset: number): { node: Text; offset: number } | null {
    let currentOffset = 0;
    const walker: TreeWalker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);

    while (walker.nextNode()) {
      const node = walker.currentNode as Text;
      const nodeLength = node.textContent?.length ?? 0;

      if (currentOffset + nodeLength >= offset) {
        return {
          node,
          offset: offset - currentOffset,
        };
      }

      currentOffset += nodeLength;
    }

    return null;
  }

  onChange(args: ChangeEventArgs): void {
    const [start, end] = args.value as any;
    const panel = this.rte.contentModule.getEditPanel() as HTMLElement;
    const maxLength = panel.textContent?.length ?? 0;

    const safeStart = Math.min(start, maxLength);
    const safeEnd = Math.min(end, maxLength);

    const startInfo = this.getTextNodeAtOffset(panel, safeStart);
    const endInfo = this.getTextNodeAtOffset(panel, safeEnd);

    if (startInfo && endInfo) {
      const range = document.createRange();
      range.setStart(startInfo.node, startInfo.offset);
      range.setEnd(endInfo.node, endInfo.offset);

      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }
}