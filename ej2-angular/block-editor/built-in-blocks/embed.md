---
layout: post
title: Embed Blocks in Angular Block Editor Component | Syncfusion
description: Checkout and learn about Embed Blocks with Angular Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Embed Blocks in Angular Block Editor component

The Block Editor supports the addition of embeds to help you organize and showcase visual content effectively.

## Adding an Image Block

You can use the [Image](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blocktype) block to showcase an image content within your editor.

### Configure Image Block

You can render an `Image` block by setting the [blockType](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockmodel#blocktype) property to `Image` in the block model. The [properties](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockmodel#properties) property allows you to configure the image source, allowed file types, display dimensions, and more.

#### Global Image Settings

You can configure global settings for image blocks using the [imageBlockSettings](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/iimageblocksettings) property in the Block Editor root configuration. This ensures consistent behavior for image uploads, resizing, and display.

The `imageBlockSettings` property supports the following options:

| Property | Description | Default Value |
|----------|-------------|---------------|
| saveFormat | Specifies the format to save the image. | `Base64` |
| allowedTypes | Specifies allowed image file types for upload. | `['.jpg', '.jpeg', '.png']` |
| width | Specifies the default display width of the image. | `auto` |
| height | Specifies the default display height of the image. | `auto` |
| enableResize | Enables or disables image resizing. | `true` |
| minWidth | Minimum width allowed for resizing. | `''` |
| maxWidth | Maximum width allowed for resizing. | `''` |
| minHeight | Minimum height allowed for resizing. | `''` |
| maxHeight | Maximum height allowed for resizing. | `''` |

#### Configure Image Block Properties

The `Image` block [properties](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockmodel#properties) property supports the following options:

| Property | Description | Default Value |
|----------|-------------|---------------|
| src | Specifies the image path. | `''` |
| width | Specifies the display width of the image. | `''` |
| height | Specifies the display height of the image. | `''` |
| altText | Specifies the alternative text to display when the image cannot be loaded. | `''` |

### BlockType & Properties

The following example demonstrates how to pre-configure an `Image` block in the editor.

```typescript
// Adding an Image block
 {
    blockType: 'Image',
    properties: {
        src: '',
        width: '200px',
        height: '100px',
        altText: '',
    }
}
```

This sample demonstrates the configuration of the `Image` block in the Block Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/blocks/block-types/image-block/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/blocks/block-types/image-block/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/blocks/block-types/image-block/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/block-editor/blocks/block-types/image-block" %}