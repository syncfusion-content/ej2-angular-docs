---
layout: post
title:  Selection in Angular Rich Text Editor | Syncfusion
description: Learn how to select a character range using Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Text Selection
documentation: ug
domainurl: ##DomainURL##
---

# Selection in ##Platform_Name## Rich Text Editor Component

## Text selection

The Rich Text Editor supports character range-based text selection using the **Syncfusion Slider** component. This feature allows users to select a specific range of characters (e.g., 33–45) within the editor content, which is then automatically highlighted.

### Adding a Slider for character range selection

The Rich Text Editor can be integrated with the **Slider** component to enable precise character range-based text selection. The slider is configured in `range` type, allowing users to select a start and end index within the editor content. When the slider values change, the corresponding text range is highlighted automatically. 

This approach is particularly useful for scenarios where exact character-level selection is required for operations such as copying, formatting, or analysis.

```typescript

@Component({
  imports: [
    RichTextEditorAllModule, SliderModule
  ],
  standalone: true,
  selector: 'app-root',
  template: ` <ejs-slider #rangeSlider [type]="'Range'" [value]="sliderValue" [min]="0" [max]="maxLength"></ejs-slider>`,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})

export class AppComponent {
    public sliderValue: number[] = [0, 50];
    public maxLength: number = 400;
}

```

### Dynamic range adjustment based on content

When the editor is created, the actual length of the text content is calculated, and the slider’s maximum value is updated dynamically to match this length. This ensures that the slider range always reflects the current content size. The editor is also focused programmatically to make the selection visible, and an initial selection is applied based on the slider’s default values.

```typescript

@Component({
  imports: [
    RichTextEditorAllModule, SliderModule
  ],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-richtexteditor #rte [value]="rteContent" (created)="onEditorCreated()" ></ejs-richtexteditor>`,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})

export class AppComponent {
    public sliderValue: number[] = [0, 50];
    public maxLength: number = 400;
    public rteContent: string = `<p>The Syncfusion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here. Key features: Provides IFRAME and DIV modes. Bulleted and numbered lists. Handles images, hyperlinks, videos, hyperlinks, uploads, etc. Contains undo/redo manager.</p>`;
    
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
}

```

### Precise selection using DOM range

The selection logic is implemented in the [change](https://ej2.syncfusion.com/angular/documentation/api/slider/index-default#change) event of the slider. It retrieves the start and end positions from the slider and ensures they are within valid bounds. The code then uses a helper function, `getTextNodeAtOffset()`, which employs a `TreeWalker` to traverse text nodes and locate the exact node and offset for the given character positions. 

A Range object is created using these offsets and applied to the current selection using the browser’s `Selection` API. This guarantees accurate highlighting even when the content spans multiple text nodes.

```typescript

@Component({
  imports: [
    RichTextEditorAllModule, SliderModule
  ],
  standalone: true,
  selector: 'app-root',
  template: ` <ejs-slider #rangeSlider [type]="'Range'" [value]="sliderValue" [min]="0" [max]="maxLength" (change)="onChange($event)"></ejs-slider>`,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})

export class AppComponent {
    public sliderValue: number[] = [0, 50];
    public maxLength: number = 400;

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

```

### Helper function for accurate offset calculation

The `getTextNodeAtOffset()` function uses a `TreeWalker` to traverse text nodes inside the editor and determine the exact node and offset for a given character index. This ensures that even complex content structures are handled correctly.


```typescript
export class AppComponent {
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

}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/selection/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/selection/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/selection" %}

## Node selection

Node selection allows users to programmatically select entire HTML elements (nodes) such as paragraphs, images, or tables within the Rich Text Editor. This is useful when you want to highlight or manipulate specific content blocks without relying on manual user selection.

The following example demonstrates how to select a paragraph node programmatically using the browser's native `Range` and `Selection` APIs.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/node-selection/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/node-selection/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/node-selection" %}

## Cell selection

Cell selection allows users to programmatically select specific table cells within the Rich Text Editor. This is useful for highlighting or manipulating content inside tables without requiring manual user interaction.

The following example demonstrates how to select a table cell programmatically using the browser's native `Range` and `Selection` APIs.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/cell-selection/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/cell-selection/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/cell-selection" %}

## Select all content

To select all content within the Rich Text Editor, use the [selectAll](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#selectall) method. This method highlights all the text and elements inside the editor, allowing users to perform actions such as formatting or deleting the entire content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/select-all/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/select-all/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/select-all" %}