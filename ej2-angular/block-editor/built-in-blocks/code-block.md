---
layout: post
title: Code Blocks in Angular Block Editor Component | Syncfusion
description: Checkout and learn about Code Blocks with Angular Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Code Blocks in Angular Block Editor component

The Syncfusion Block Editor allows you to render code snippets with syntax highlighting by setting the block's [type](../api/blockeditor/blockModel/#type) property to `Code`. You can customize the available programming languages and set a default language using the `props` property.

## Configure code properties

For Code blocks, you can configure syntax highlighting and language options using the [props](../api/blockeditor/blockModel/) property. This property supports the following options:

| Property | Description | Default Value |
|----------|-------------|---------------|
| [languages](../api/blockeditor/codeSettingsModel/#languages) | Specifies the array of language options for syntax highlighting. | [] |
| [defaultLanguage](../api/blockeditor/codeSettingsModel/#defaultlanguage) | Defines the default language to use for syntax highlighting. | 'javascript' |

Each language object within the `languages` array requires the following properties:
- [language](../api/blockeditor/codeLanguageModel/#language): The language value used for syntax highlighting.
- [label](../api/blockeditor/codeLanguageModel/#label): The display name shown in the language selector dropdown.

### Type & Props
```typescript
// Adding Code block
{
    type: 'Code',
    content: [
        {
            //your content
        }
    ],
    props: {
        defaultLanguage: 'javascript',
        languages: [
        { language: 'javascript', label: 'JavaScript' },
        { language: 'typescript', label: 'TypeScript' },
        { language: 'html', label: 'HTML' },
        { language: 'css', label: 'CSS' }
        ]
    }
    }
```

The following example demonstrates how to configure and render a Code block within the Block Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/blocks/block-types/code-block/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/blocks/block-types/code-block/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/blocks/block-types/code-block/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/block-editor/blocks/block-types/code-block" %}