---
layout: post
title: Paste Clean-up in Angular Block Editor Component | Syncfusion
description: Checkout and learn about Paste Clean-up with Angular Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Paste Clean-up in Angular Block Editor component

The Block Editor component provides robust paste clean-up functionalities to ensure that pasted content integrates seamlessly and maintains styling and structural consistency. This feature helps remove unwanted formatting, scripts, and elements copied from external sources like web pages or word processors.

You can configure the paste behavior using the [pasteCleanupSettings](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#pastecleanupsettings) property, which allows you to define how content is handled when pasted into the editor.

## Configuring allowed styles

The [allowedStyles](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/pastecleanupsettingsmodel#allowedstyles) property lets you define which CSS styles are permitted in pasted content. Any style not in this list is stripped out, ensuring that only desired visual attributes are preserved.

By default, the following styles are allowed:

['font-weight', 'font-style', 'text-decoration', 'text-transform'].

In the below example, only `font-weight` and `font-style` styles will be retained from the pasted content. All other inline styles will be removed.

```typescript
import { BlockEditorModule } from '@syncfusion/ej2-angular-blockeditor';
import { Component } from '@angular/core';

@Component({
    imports: [ BlockEditorModule ],
    standalone: true,
    selector: 'app-root',
    template: `<!-- To Render BlockEditor component. -->
    <div class="container" style="width: 40px; margin: 50px auto;">
        <ejs-blockeditor [pasteCleanupSettings]="pasteCleanupSettings" />
    </div>`
})

export class AppComponent {
    pasteCleanupSettings: {
        allowedStyles: ['font-weight', 'font-style']
    }
}
```

## Setting denied tags

The [deniedTags](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/pastecleanupsettingsmodel#deniedtags) property specifies a list of HTML tags to be removed from pasted content. This is useful for stripping potentially problematic elements like `<script>` or `<iframe>` tags. By default, this property is an empty array, so no tags are removed.

In the below example, any `<script>` or `<iframe>` tags found in the pasted content will be removed, preventing unwanted behavior or styling issues.

```typescript
import { BlockEditorModule } from '@syncfusion/ej2-angular-blockeditor';
import { Component } from '@angular/core';

@Component({
    imports: [ BlockEditorModule ],
    standalone: true,
    selector: 'app-root',
    template: `<!-- To Render BlockEditor component. -->
    <div class="container" style="width: 40px; margin: 50px auto;">
        <ejs-blockeditor [pasteCleanupSettings]="pasteCleanupSettings" />
    </div>`
})

export class AppComponent {
    pasteCleanupSettings: {
        deniedTags: ['script', 'iframe']
    }
}
```

Below example demonstrates the usage of paste settings that allows only specific styles and also removes the specific tags from the pasted content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/paste-cleanup/allowedstyle/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/paste-cleanup/allowedstyle/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/paste-cleanup/allowedstyle/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/block-editor/paste-cleanup/allowedstyle" %}

## Disable Keep format

By default, the editor retains the formatting of pasted content (e.g., bold, italics, links). You can disable this by setting the [keepFormat](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/pastecleanupsettingsmodel#keepformat) property to `false`. When disabled, the editor primarily pastes content as plain text, regardless of the `allowedStyles` configuration.

```typescript
import { BlockEditorModule } from '@syncfusion/ej2-angular-blockeditor';
import { Component } from '@angular/core';

@Component({
    imports: [ BlockEditorModule ],
    standalone: true,
    selector: 'app-root',
    template: `<!-- To Render BlockEditor component. -->
    <div class="container" style="width: 40px; margin: 50px auto;">
        <ejs-blockeditor [pasteCleanupSettings]="pasteCleanupSettings" />
    </div>`
})

export class AppComponent {
    pasteCleanupSettings: {
        keepFormat: false
    }
}
```

## Allowing plain text

To paste content as plain text, stripping all HTML tags and inline styles, set the [plainText](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/pastecleanupsettingsmodel#plaintext) property to `true` in [pasteCleanupSettings](https://ej2.syncfusion.com/angular/documentation/api/blockeditor#pastesettings). This ensures that only raw text is inserted, which is ideal for maintaining strict content consistency. By default, this property is `false`.

```typescript
import { BlockEditorModule } from '@syncfusion/ej2-angular-blockeditor';
import { Component } from '@angular/core';

@Component({
    imports: [ BlockEditorModule ],
    standalone: true,
    selector: 'app-root',
    template: `<!-- To Render BlockEditor component. -->
    <div class="container" style="width: 40px; margin: 50px auto;">
        <ejs-blockeditor [pasteCleanupSettings]="pasteCleanupSettings" />
    </div>`
})

export class AppComponent {
    pasteCleanupSettings: {
        plainText: true
    }
}
```

Below example demonstrates the usage of paste settings that disables the keep format and allows plain text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/paste-cleanup/plaintext/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/paste-cleanup/plaintext/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/paste-cleanup/plaintext/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/block-editor/paste-cleanup/plaintext" %}

### Events

The Block Editor provides events to monitor and interact with the paste action.

|Name|Args|Description|
|---|---|---|
|[beforePasteCleanup](https://ej2.syncfusion.com/angular/documentation/api/blockeditor#beforepastecleanup)|BeforePasteCleanupEventArgs|Triggers before the content is pasted into the editor.|
|[afterPasteCleanup](https://ej2.syncfusion.com/angular/documentation/api/blockeditor#afterpastecleanup)|AfterPasteCleanupEventArgs|Triggers after the content is pasted into the editor.|

Below snippet demonstrates how to configure above events in the editor.

```typescript
<ejs-blockeditor (beforePasteCleanup)="onBeforePasteCleanup()" />
```

```typescript
<ejs-blockeditor (afterPasteCleanup)="onAfterPasteCleanup()" />
```