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

 Block Editor supports addition of embeds to help you organize, showcase contents and format your content effectively.

## Image Block

You can use the `image` block to showcase an image content within your editor.

### Configure image block

You can render Image blocks by setting the [type](../api/blockeditor/blockModel/#type) property as `Image`. By setting the `props` property, you can configure the image source, allowed file types, and display dimensions etc.

The image [props](../api/blockeditor/blockModel/) property supports the following options:

| Property | Description | Default Value |
|----------|-------------|---------------|
| saveFormat | Specifies the format to save the image | Base64 |
| src | Specifies the image path | ' '|
| allowedTypes | Specifies the allowed image file types that can be uploaded | ['.jpg', '.jpeg', '.png'] |
| width | Specifies the display width of the image | ' ' |
| height | Specifies the display height of the image | ' '|
| minWidth | Specifies the minimum width of the image in pixels or as a string unit | 40|
| maxWidth | Specifies the maximum width of the image in pixels or as a string unit | ' '|
| minHeight | Specifies the minimum height of the image in pixels or as a string unit | 40|
| maxHeight | Specifies the maximum height of the image in pixels or as a string unit | ' '|
| altText | Specifies the alternative text to be displayed when the image cannot be loaded | ' '|
| cssClass | Specifies one or more CSS classes to be applied to the image element | ' ' |
| readOnly | Specifies whether the image is in read-only mode | false


#### Type & Props

```typescript
// Adding image block
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

The below sample demonstrates the configuration of image block in the Block Editor.

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