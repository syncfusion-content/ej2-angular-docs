---
layout: post
title: Fullscreen mode in Angular Rich Text Editor component | Syncfusion
description: Learn here all about Fullscreen mode in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Fullscreen mode
documentation: ug
domainurl: ##DomainURL##
---

# Fullscreen Mode in Angular Rich Text Editor Component

The Fullscreen mode allows the Rich Text Editor to expand and occupy the entire browser viewport. This provides a distraction-free editing experience and more space to work with content and toolbar features.

You can enable fullscreen mode using the FullScreen icon toolbar button. Once activated, the editor transitions into fullscreen view, hiding other page elements and maximizing the editing area.

## How it works

Click the fullscreen icon in the toolbar to toggle fullscreen mode. When enabled, the editor:

- Expands to fill the entire browser window.
- Adjusts its layout to optimize space for content and tools.
- Can be exited by clicking the same icon again or pressing the `Esc` key.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/fullscreen-mode/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/fullscreen-mode/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/fullscreen-mode" %}