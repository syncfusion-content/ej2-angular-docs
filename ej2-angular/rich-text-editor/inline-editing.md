---
layout: post
title: Inline editing in Angular Rich Text Editor component | Syncfusion
description: Learn here all about Inline editing in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Inline editing 
documentation: ug
domainurl: ##DomainURL##
---

# Inline editing in the Angular Rich Text Editor component

Inline editing is a feature of the Rich Text Editor that allows users to edit content directly within the editor where it is displayed. Unlike traditional editing interfaces where the editor toolbar is in a separate area at the top or bottom, inline editing offers a seamless, on-the-spot editing experience. You can click on the text or select the text you wish to edit and make changes immediately.

Enable inline editing in the Rich Text Editor by using the [`inlineMode`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#inlinemode) with the `enable` property as `true`. This configuration activates the feature, allowing direct content editing within its displayed context.

## Toolbar on Selection

The inline toolbar in the Rich Text Editor is triggered based on the [`onSelection`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/inlineMode/#onselection) option within the inlineMode settings. 

When `onSelection` is set to `true`, the toolbar appears only when text is selected. If `onSelection` is set to `false`, the inline toolbar appears when editable text is focused, regardless of selection.

This feature enhances the inline editing experience by providing immediate access to formatting options.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs12" %}