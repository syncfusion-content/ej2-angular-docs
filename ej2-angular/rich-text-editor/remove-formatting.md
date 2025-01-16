---
layout: post
title: Remove Formatting in Angular Rich Text Editor component | Syncfusion
description: Learn all about Remove Formatting in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Remove Formatting
documentation: ug
domainurl: ##DomainURL##
---

# Remove Formatting in the Angular Rich Text Editor Component

The Angular Rich Text Editor component offers a powerful `Clear Format` feature to remove any applied formatting from selected text.

This feature is particularly useful when you need to:

- Remove multiple styles at once
- Quickly standardize text formatting
- Prepare text for new styling

### Configuring Clear Format

To enable the Clear Format feature in your Rich Text Editor, you need to add it to the toolbar items. Follow these steps:

1. Open your component file where you've implemented the Rich Text Editor.
2. Locate the [`toolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#toolbarsettings) property in your Rich Text Editor configuration.
3. Add `'ClearFormat'` to the `items` array within `toolbarSettings`.

Here's an example of how to configure the Clear Format feature:

```typescript

@Component({
    selector: 'app-root',
    template: `<ejs-richtexteditor [toolbarSettings]='tools'></ejs-richtexteditor>`
})
export class AppComponent {
    public tools: object = {
        items: 
        [
            'Bold', 'Italic', 'Underline', '|', 'Formats',  'Alignments', 'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', 'ClearFormat',
            '|', 'Undo', 'Redo'
        ]
    };
}

```

## Using Clear Format

Once configured, you can use the Clear Format feature as follows:

1. Select the text with formatting you want to remove.
2. Click the `Clear Format` button in the toolbar.
3. The selected text will revert to its original, unformatted state.

Using `Clear Format` makes it easy to undo styling changes and keep your text looking consistent. Examples and code snippets below show how to use 'Clear Format' effectively in the Rich Text Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/remove-format-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/remove-format-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/remove-format-cs1" %}

## See Also

[Copy and Apply Formatting](./format-painter.md)