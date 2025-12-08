---
layout: post
title: Clipboard Cleanup in Angular Rich Text Editor component | Syncfusion
description: Learn how to configure  Clipboard Cleanup in the Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Clipboard Cleanup
documentation: ug
domainurl: ##DomainURL##
---

# Clipboard Cleanup in Angular Rich Text Editor Component

The Rich Text Editor supports automatic cleanup of clipboard content during copy (`Ctrl + C`) and cut (`Ctrl + X`) operations. When this feature is enabled, unwanted inline styles are automatically removed from the clipboard content while preserving important structural elements such as tables, lists, and images. You can enable this behavior using the [enableClipboardCleanup](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor#enableClipboardCleanup) property.

> Rich Text Editor features are segregated into individual feature-wise modules. To enable clipboard cleanup, include the `ClipboardCleanupService` in the providers section.

When `enableClipboardCleanup` is set to `true`, copy and cut operations are intercepted to remove unwanted inline styles. When set to `false` the browser’s default copy and cut behavior applies.

> For a cleaner editing experience, `enableClipboardCleanup` is `true` by default.

```typescript

import { Component } from '@angular/core';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { ToolbarService, HtmlEditorService, QuickToolbarService, ClipboardCleanupService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [RichTextEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor></ejs-richtexteditor>`,
    providers: [ToolbarService, HtmlEditorService, QuickToolbarService, ClipboardCleanupService]
})

export class AppComponent {}

```

## Customizing Copied/Cut Content

You can use the [beforeClipboardWrite](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor#beforeClipboardWrite) event, which fires before content is written to the clipboard during copy or cut operations. This event lets you to modify the HTML and plain-text representations of the content and also determine whether the action is a copy or a cut.

In this example, the `beforeClipboardWrite` event is used to customize the selected content only during a copy operation, while the cut operation remains unaffected. To observe this behavior, try copying any text within the Rich Text Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/clipboard-cleanup/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/clipboard-cleanup/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/clipboard-cleanup" %}

## Best Practices & Troubleshooting

### Best Practices

- Always include `ClipboardCleanupService` in production application - it’s the #1 way to prevent style explosion.
- Combine with Paste Cleanup module for even stricter incoming paste handling.
- Use `beforeClipboardWrite` sparingly — heavy processing can slightly delay `Ctrl+C`.

### Common Issues

- “Copied content still has inline styles” → Confirm `ClipboardCleanupService` is in providers.
- “Event not firing” → Make sure you’re using the correct event name `beforeClipboardWrite` (camelCase in Angular).
