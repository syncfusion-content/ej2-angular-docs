---
layout: post
title: Text Selection Using Slider in Angular Rich Text Editor component | Syncfusion
description: Learn how to select a character range using Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Text Selection
documentation: ug
domainurl: ##DomainURL##
---

# Selection in ##Platform_Name## Rich Text Editor Component

## Text selection

The Rich Text Editor supports character range-based text selection using the **Syncfusion Slider** component. This feature allows users to select a specific range of characters (e.g., 33–45) within the editor content, which is then automatically highlighted.

This functionality is useful for scenarios where precise text selection is needed for operations such as copying, formatting, or analysis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/selection/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/selection/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/selection" %}

## Node selection

Node selection allows users to programmatically select entire HTML elements (nodes) such as paragraphs, images, or tables within the Rich Text Editor. This is useful when you want to highlight or manipulate specific content blocks without relying on manual user selection.

The following example demonstrates how to select a paragraph node programmatically using the browser's native `Range` and `Selection` APIs.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/node-selection/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/node-selection/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/node-selection" %}

## Cell selection

Cell selection allows users to programmatically select specific table cells within the Rich Text Editor. This is useful for highlighting or manipulating content inside tables without requiring manual user interaction.

The following example demonstrates how to select a table cell programmatically using the browser's native `Range` and `Selection` APIs.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/cell-selection/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/cell-selection/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/cell-selection" %}

## Select all content

To select all content within the Rich Text Editor, use the [selectAll](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#selectall) method. This method highlights all the text and elements inside the editor, allowing users to perform actions such as formatting or deleting the entire content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/select-all/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/select-all/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/select-all" %}