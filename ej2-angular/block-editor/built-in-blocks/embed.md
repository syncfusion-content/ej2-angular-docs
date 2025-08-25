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

You can use the `image` block to showcase an image content within your editor.

### Configure Image Block

You can render an `Image` block by setting the [type](../api/blockeditor/blockModel/#type) property to `Image` in the block model. The `props` property allows you to configure the image source, allowed file types, display dimensions, and more.

The `Image` block [props](../api/blockeditor/blockModel/) property supports the following options:

| Property | Description | Default Value |
|----------|-------------|---------------|
| saveFormat | Specifies the format for saving the image. When set to `Base64`, the image data is embedded directly into the saved content. | `Base64` |
| allowedTypes | Specifies the allowed image file types that can be uploaded. | `['.jpg', '.jpeg', '.png']` |
| width | Specifies the display width of the image. | `''` |
| height | Specifies the display height of the image. | `''` |
| minWidth | Specifies the minimum width of the image in pixels. | `40` |
| maxWidth | Specifies the maximum width of the image as a pixel or percentage string. | `''` |
| minHeight | Specifies the minimum height of the image in pixels. | `40`|
| maxHeight | Specifies the maximum height of the image as a pixel or percentage string. | `''` |
| altText | Specifies the alternative text to display when the image cannot be loaded. | `''` |
| cssClass | Specifies one or more CSS classes to apply to the image element for custom styling. | `''` |
| readOnly | Specifies whether the image is in a read-only (non-editable) state. | `false` |

### Type & Props

The following example demonstrates how to pre-configure an `Image` block in the editor.

```typescript
// Adding an Image block
 {
    type: 'Image',
    props: {
        src: '',
        saveFormat: 'Base64',
        allowedTypes: ['.png', '.gif'],
        width: '200px',
        height: '100px',
        minWidth: 50,
        maxWidth: 500,
        minHeight: 50,
        maxHeight: 300,
        altText: '',
        cssClass: 'img-custom',
        readOnly: true
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