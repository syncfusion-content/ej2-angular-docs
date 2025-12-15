---
layout: post
title: Table Blocks in Angular Block Editor Component | Syncfusion
description: Checkout and learn about Table Blocks with Angular Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Table Blocks in Angular Block Editor component

The Syncfusion Block Editor allows you to render structured data in rows and columns by setting the block's [blockType](../api/blockeditor/blockModel#blockType) property to `Table`. You can customize the table layout, header, row numbers, and define columns and rows using the `properties` property.

### Configure Table Block

For Table blocks, you can configure layout and structure using the [properties](../api/blockeditor/blockModel#properties) property. This property supports the following options:

| Property | Description | Default Value |
|----------|-------------|---------------|
| width | Specifies the display width of the table. | `100%` |
| enableHeader | Specifies whether to enable header for the table. | `true` |
| enableRowNumbers | Specifies whether to enable row numbers for the table. | `true` |
| readOnly | Specifies whether to render the table in read-only mode, disabling edits. | `false` |
| columns | Defines the columns of the table, including their types and headers. | `[]` |
| rows | Defines the rows of the table, each containing cells tied to columns. | `[]` |

### BlockType & Properties

The following example demonstrates how to pre-configure a `Table` block in the editor.

```typescript
// Adding an Table block
{
    blockType: BlockType.Table,
    properties: {
        columns: [{ id: 'col1', headerText: 'Column 1' }, { id: 'col2', headerText: 'Column 2' }],
        rows: [
            {
                cells: [
                    {
                        columnId: 'col1',
                        blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 1' }] }]
                    },
                    {
                        columnId: 'col2',
                        blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 2' }] }]
                    }
                ]
            },
            {
                cells: [
                    {
                        columnId: 'col1',
                        blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 3' }] }]
                    },
                    {
                        columnId: 'col2',
                        blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 4' }] }]
                    }
                ]
            }
        ]
    }
}
```

This sample demonstrates the configuration of the `Table` block in the Block Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/blocks/block-types/table-block/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/blocks/block-types/table-block/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/blocks/block-types/table-block/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/block-editor/blocks/block-types/table-block" %}