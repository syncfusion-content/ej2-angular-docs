---
layout: post
title: Highlight.js in Angular Rich Text Editor | Syncfusion
description: Learn here all about Highlight.js in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Highlight.js
documentation: ug
domainurl: ##DomainURL##
---

# Integrate Highlight.js into the Angular Rich Text Editor

The [Highlight.js](https://highlightjs.org/) integration with the Syncfusion Angular Rich Text Editor allows for syntax highlighting, ensuring that code blocks remain highlighted during editing, previewing, and exporting.

## Prerequisites

Before proceeding, complete the base Rich Text Editor setup described in the Getting Started guide. The guide covers Angular CLI setup, package installation, CSS imports, module injection, and basic editor markup: [Getting Started with Angular Rich Text Editor](../getting-started.md).

## Key features

- Highlight language-aware code blocks inside the editor content and preview
- Keep highlighting after edits, inserts, and exports
- Register only the languages you need to reduce bundle size

## Setup or Installation

Install the highlight.js package using the following command:

```bash
npm install highlight.js
```

## Configure Highlight.js for the Rich Text Editor

### Step 1: Configure editor content target

- Use the `ViewChild` decorator to access the Angular Rich Text Editor instance. 
- The RichTextEditor renders editable content inside an element with class `.e-rte-content`. You will run highlight.js against `pre code` elements inside that container.

### Step 2: Register languages and load theme

- Import the `highlight.js` core and the language modules you need into your Angular component.

```typescript
import highlight from 'highlight.js/lib/common';
```
- Then call `highlight.registerLanguage(name, module)` for each language.

```typescript
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';

highlight.registerLanguage('javascript', javascript);
highlight.registerLanguage('typescript', typescript);
```
- Add a highlight.js theme stylesheet to your global styles.

Option A — `angular.json`:

```json
"styles": [
  "src/styles.scss",
  "node_modules/highlight.js/styles/github.css"
]
```

Option B — import from `src/styles.css`:

```css
@import 'highlight.js/styles/atom-one-dark.min.css';
```

### Step 3: Wire the RichTextEditor events

- Use the Rich Text Editor's `created` event to highlight existing blocks at startup.
- Use `change` event to re-run highlighting after edits.

### Step 4: Add Highlight.js Styles to Ensure Proper Code Block Rendering
To ensure that Highlight.js styles correctly apply inside the Rich Text Editor and override the default Rich Text Editor code block formatting, include the following Highlight.js style rules in your app.css file.

```css
.e-richtexteditor .e-rte-content .e-content pre code, 
.e-richtexteditor .e-rte-content .e-content pre[data-language], 
.e-richtexteditor .e-rte-content .e-content pre[data-language] code{
    color: #abb2bf;
    background-color: #282c34;
}
```

## Example: Integrate with Syncfusion Rich Text Editor (`app.ts`)

The following examples demonstrate how Highlight.js can be seamlessly integrated with the Syncfusion Rich Text Editor to enable automatic syntax highlighting within editor content.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/rich-text-editor/Integrations/highlightjs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/Integrations/highlightjs/src/main.ts %}
{% endhighlight %}

{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rich-text-editor/Integrations/highlightjs/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/Integrations/highlightjs" %}

## Additional Resources

- GitHub Repository: [Angular Rich Text Editor with Highlight.js](https://github.com/SyncfusionExamples/angular-richtexteditor-highlightjs/tree/master)
- [Highlight.js](https://highlightjs.org)
- [Syncfusion RichTextEditor API](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor)
