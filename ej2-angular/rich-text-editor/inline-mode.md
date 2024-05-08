---
layout: post
title: Inline mode in Angular Rich text editor component | Syncfusion
description: Learn here all about Inline mode in Syncfusion Angular Rich text editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Inline mode 
documentation: ug
domainurl: ##DomainURL##
---

# Inline mode in Angular Rich text editor component

This is the inline example for the Rich Text Editor. For this you must set the [`inlineMode`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#inlinemode) property.

Inline edition allows you to select any editable element or click the element on the page and edit it in-place.

Inline editing is a true WYSIWYG formation and on the contrary to Rich Text Editor HTML/MD editing, the styles that are used for edited content comes directly from the document stylesheet. This means that inline editors ignore the default Rich Text Editor content styles.

## Show on select/click

Enabling the [`onSelection`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/inlineMode/#onselection) option of inlineMode makes the inline Rich Text Editor to appear.  You can select the text in the editable area otherwise the inline Rich Text Editor will be appear once click into the editable area.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs12" %}