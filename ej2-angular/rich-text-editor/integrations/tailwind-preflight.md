---
layout: post
title: Tailwind Preflight in Angular Rich Text Editor | Syncfusion
description: Learn here all about integrating Tailwind preflight in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tailwind Preflight Integration
documentation: ug
domainurl: ##DomainURL##
---

# Integrate Tailwind preflight into the Angular Rich Text Editor

The [Tailwind CSS Preflight](https://tailwindcss.com/docs/preflight) provides a modern baseline of styles that resets browser defaults and establishes a consistent foundation for your application. This guide explains how to integrate Tailwind CSS Preflight with the Syncfusion Angular Rich Text Editor while preserving the editor's styling and functionality.

## Prerequisites

Before proceeding, ensure you have completed the base Rich Text Editor setup described in the Getting Started guide. The guide covers Angular CLI setup, package installation, CSS imports, module injection, and basic editor markup: [Getting Started with Angular Rich Text Editor](../getting-started.md).

## Key features

- Browser normalization: Resets inconsistent default browser styles (margins, headings, lists, form elements) to a predictable baseline.
- Sensible typography defaults: Provides reasonable defaults for headings, paragraphs, lists, blockquotes, and code blocks so content displays consistently.
- Easy to override: Rules are intentionally minimal and can be overridden or extended to match your design system.
- Component compatibility: Safe to layer component or theme styles on top (import component styles after Preflight when necessary).
- Predictable form styling: Normalizes form elements so utilities and component styles behave consistently across browsers.

## Setup or Installation

Install the required packages for Tailwind CSS using the following commands:

```bash
npm install -D tailwindcss
```

## Configure Tailwind CSS Preflight for the Rich Text Editor

### Step 1: Add Tailwind directives to your styles

In your global styles file (`src/styles.css`), add the Tailwind directives:

```css
/* Tailwind CSS directives */
@layer theme, base, components, utilities;
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/preflight.css" layer(base);
@import "tailwindcss/utilities.css" layer(utilities);
```

### Step 2: Isolate Tailwind CSS Preflight from editor content

To prevent Tailwind CSS Preflight from affecting the Rich Text Editor content area, add the preflight‑reset CSS directly into `app.css` or `styles.css`.

```css
.e-rte-content li {
    margin-bottom: 10px !important;
    padding: unset !important;
}

.e-rte-content ul {
    list-style-type: disc !important;
    padding: unset !important;
    margin-left: 40px;
}

.e-rte-content ol {
    list-style-type: decimal !important;
    padding: unset !important;
    margin-left: 40px;
}

.e-rte-content ul[style*="list-style-type: circle"]{
    list-style-type: circle !important;
    padding: unset !important;
    margin-left: 40px;
}

.e-rte-content ul[style*="list-style-type: square"]{
    list-style-type: square !important;
    padding: unset !important;
    margin-left: 40px;
}

.e-rte-content ol[style*="list-style-type: upper-alpha"]{
    list-style-type: upper-alpha !important;
    padding: unset !important;
    margin-left: 40px;
}

.e-rte-content ol[style*="list-style-type: lower-alpha"]{
    list-style-type: lower-alpha !important;
    padding: unset !important;
    margin-left: 40px;
}

.e-rte-content ol[style*="list-style-type: upper-roman"]{
    list-style-type: upper-roman !important;
    padding: unset !important;
    margin-left: 40px;
}

.e-rte-content ol[style*="list-style-type: lower-roman"]{
    list-style-type: lower-roman !important;
    padding: unset !important;
    margin-left: 40px;
}

.e-rte-content ol[style*="list-style-type: lower-greek"]{
    list-style-type: lower-greek !important;
    padding: unset !important;
    margin-left: 40px;
}

```

## Example: Integrate Tailwind CSS with Syncfusion Rich Text Editor

Here's a complete working example demonstrating Tailwind CSS Preflight integration with the Angular Rich Text Editor:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/rich-text-editor/Integrations/tailwind-preflight/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/Integrations/tailwind-preflight/src/main.ts %}
{% endhighlight %}

{% highlight css tabtitle="app.css" %}
{% include code-snippet/rich-text-editor/Integrations/tailwind-preflight/src/app.css %}
{% endhighlight %}

{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rich-text-editor/Integrations/tailwind-preflight/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/Integrations/tailwind-preflight" %}

## Configuring Tailwind CSS Preflight Styles with the IFrame Editor

When the Rich Text Editor is running in IFrame mode (`[iframeMode]="true"`), the editable content is rendered inside a separate document. Tailwind CSS Preflight does not automatically apply inside that IFrame — you must inject the editor-specific reset rules into the IFrame head so content renders as expected.

### Step 1: Enable IFrame mode

Enable IFrame editing using `iframeSettings` and include the editor reset stylesheet via `styles` so the CSS is injected automatically into the IFrame head. See the full IFrame guide: [IFrame Editing Mode](../editor-types/iframe.md).

Template (bind `iframeSettings`):

```html
<ejs-richtexteditor id="tailwindRTE" [iframeSettings]='iframe'></ejs-richtexteditor>
```

Component example (`app.ts`):

```typescript
public iframe: IFrameSettingsModel = { 
    enable: true, 
    resources: {
        styles:['../styles.css']
    }
};
```

> Notes: Using `iframeSettings.styles` is the preferred approach — Syncfusion will load the listed CSS files into the IFrame automatically.

### Step 2: Add Tailwind directives to your global styles

In `src/styles.css` include Tailwind directives and import Syncfusion theme after them so component styles override Preflight where needed:

```css
@layer theme, base, components, utilities;
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/preflight.css" layer(base);
@import "tailwindcss/utilities.css" layer(utilities);
```

### Step 3: Isolate Tailwind CSS Preflight from editor content

To prevent Tailwind CSS Preflight from affecting the Rich Text Editor content area, add the preflight‑reset CSS directly into `styles.css`.

```css
body.e-content li {
    margin-bottom: 10px !important;
    padding: unset !important;
}

body.e-content ul {
    list-style-type: disc !important;
    padding: unset !important;
    margin-left: 40px;
}

body.e-content ol {
    list-style-type: decimal !important;
    padding: unset !important;
    margin-left: 40px;
}

body.e-content ul[style*="list-style-type: circle"]{
    list-style-type: circle !important;
    padding: unset !important;
    margin-left: 40px;
}

body.e-content ul[style*="list-style-type: square"]{
    list-style-type: square !important;
    padding: unset !important;
    margin-left: 40px;
}

body.e-content ol[style*="list-style-type: lower-greek"]{
    list-style-type: lower-greek !important;
    padding: unset !important;
    margin-left: 40px;
}

body.e-content ol[style*="list-style-type: upper-alpha"]{
    list-style-type: upper-alpha !important;
    padding: unset !important;
    margin-left: 40px;
}

body.e-content ol[style*="list-style-type: lower-alpha"]{
    list-style-type: lower-alpha !important;
    padding: unset !important;
    margin-left: 40px;
}

body.e-content ol[style*="list-style-type: upper-roman"]{
    list-style-type: upper-roman !important;
    padding: unset !important;
    margin-left: 40px;
}

body.e-content ol[style*="list-style-type: lower-roman"]{
    list-style-type: lower-roman !important;
    padding: unset !important;
    margin-left: 40px;
}

```

### Example: Integrate Tailwind CSS with Syncfusion Rich Text Editor in IFrame mode

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/rich-text-editor/Integrations/tailwind-preflight-iframe/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/Integrations/tailwind-preflight-iframe/src/main.ts %}
{% endhighlight %}

{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rich-text-editor/Integrations/tailwind-preflight-iframe/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/Integrations/tailwind-preflight" %}

## Additional Resources

- GitHub Repository: [Angular Rich Text Editor Examples](https://github.com/SyncfusionExamples/angular-richtexteditor-tailwind/tree/master)
- Tailwind CSS Preflight Reference: [https://tailwindcss.com/docs/preflight](https://tailwindcss.com/docs/preflight)
- Angular Rich Text Editor Documentation: [https://ej2.syncfusion.com/angular/documentation/rich-text-editor/getting-started](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/getting-started)
