---
layout: post
title: Text Selection Using Slider in Angular Rich Text Editor component | Syncfusion
description: Learn how to select a character range using Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Text Selection
documentation: ug
domainurl: ##DomainURL##
---

# Text Selection Using Slider in Angular Component

The Syncfusion Rich Text Editor supports character range-based text selection using the **Syncfusion Slider** control. This feature allows users to select a specific range of characters (e.g., 33–45) within the editor content, which is then automatically highlighted.

This functionality is useful for scenarios where precise text selection is needed for operations such as copying, formatting, or analysis.

> **Note:** The example below assumes the Rich Text Editor contains plain text wrapped in a single `<p>` tag for simplicity.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/selection/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/selection/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/selection" %}