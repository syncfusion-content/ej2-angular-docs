---
layout: post
title: Code Mirror in Angular Rich text editor component | Syncfusion
description: Learn here all about code mirror integration in Syncfusion Angular Rich text editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: CodeMirror
documentation: ug
domainurl: ##DomainURL##
---

# Integrate Code Mirror into Angular Rich Text Editor Component

RichTextEditor offers a basic HTML source view through the `view-source` property. For enhanced source editing features such as syntax highlighting, `CodeMirror` can be integrated with the Rich Text Editor.

## Prerequisites

Before proceeding, complete the base Rich Text Editor setup described in the Getting Started guide. The guide covers Angular CLI setup, package installation, CSS imports, module injection, and basic editor markup: [Getting Started with Angular Rich Text Editor](getting-started.md).

## Key features

- Replace the RTE source textarea with a CodeMirror EditorView.  
- Preserve editor undo/redo by inserting source changes via the RTE APIs.
- Support light/dark themes and minimize bundle size via dynamic imports.

## Setup or Installation

Install the required code mirror packages using the following command:

```bash
npm install codemirror @codemirror/state @codemirror/view @codemirror/lang-html @codemirror/theme-one-dark
```

## Configure CodeMirror for the rich text editor

### Step 1: import packages and providers
- import CodeMirror modules in the component where the integration runs. Provide ToolbarService, HtmlEditorService, ImageService, etc., as needed.

### Step 2: Configure actionComplete event
- Configure the actionComplete event to call `mirrorConversion` method while toggling between `SourceCode` and `Preview`.

```typescript
public actionCompleteHandler(e: any): void {
    if (e.targetItem && (e.targetItem === 'SourceCode' || e.targetItem === 'Preview')) {
        this.mirrorConversion(e);
    }
}
```

- On `SourceCode`: create a temporary element and append to the rich text editor root cause and call renderCodeMirror method to render the code mirror.

```typescript
mirrorView = createElement('div', { className: 'rte-code-mirror', id: id, styles: 'display: none;' });
this.rteObj!.rootContainer.appendChild(mirrorView);
this.renderCodeMirror(mirrorView, editorVlaue === null ? '' : editorVlaue);
```

- On `Preview`: serialize the EditorView document (state.doc.toString()) and set it as the RTE value, call dataBind(), and restore RTE focus.

```typescript
this.rteObj!.value = this.myCodeMirror!.state.doc.toString();
this.rteObj!.dataBind();
this.rteObj!.rootContainer.classList.remove('e-rte-code-mirror-enabled');
this.rteObj!.focusIn();
```

### Step 3: Configure renderCodeMirror method
- Create a reusable renderCodeMirror function that builds an EditorState with desired extensions: basicSetup, html(), EditorView.lineWrapping, and optional theme extension.

```typescript
const state = EditorState.create({
    doc: content,
    extensions: [ basicSetup, html(), EditorView.lineWrapping ]
});
```

- Store the EditorView instance on the component and reuse it on subsequent SourceCode activations to preserve state.

```typescript
const state = EditorState.create({
    doc: content,
    extensions: extensions
});

this.myCodeMirror = new EditorView({
    state,
    parent: mirrorView
});
```

### Step 4: how to implement dark theme
- Detect application or Syncfusion dark mode classes (for example, document.body.classList.contains('e-dark-mode')).  
- When dark mode is active, include the oneDark extension (or alternative theme) in the CodeMirror extensions array when creating the EditorState.  
- Toggle theme only when recreating or updating the EditorState; prefer reusing the same EditorView and apply theme changes via state replacement if necessary.

```typescript
let extensions;
if (document.body.classList && document.body.classList.contains('tailwind3-dark') && document.body.classList.contains('e-dark-mode')) {
    extensions = [ basicSetup, html(), EditorView.lineWrapping, oneDark ]
} else {
    extensions = [ basicSetup, html(), EditorView.lineWrapping ]
}
```

## Example for Code Mirror integration

Below is the example integration of Code Mirror with the Angular Rich Text Editor.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/rich-text-editor/Integrations/code-mirror/src/app/app.ts %}
{% endhighlight %}

{% highlight css tabtitle="app.css" %}
{% include code-snippet/rich-text-editor/Integrations/code-mirror/src/app/app.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/Integrations/code-mirror" %}

## Additional resources

- GitHub Repository: [Angular Rich Text Editor integrations samples](https://github.com/SyncfusionExamples/angular-richtexteditor-codemirror)
- CodeMirror 6 — Official documentation and guides: https://codemirror.net/6/docs/  
- @codemirror packages on npm — state, view, language, and theme modules: https://www.npmjs.com/search?q=%40codemirror  
- CodeMirror examples and extensions gallery: https://codemirror.net/6/examples/  
- Syncfusion Angular Rich Text Editor — API reference and integration notes: https://ej2.syncfusion.com/angular/documentation/rich-text-editor/  
- Syncfusion demos — CodeMirror integration sample: https://ej2.syncfusion.com/angular/demos/#/material/rich-text-editor/overview  
