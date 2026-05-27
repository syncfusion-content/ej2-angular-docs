---
layout: post
title: Setting Cursor at Specific Range in Editor | Syncfusion
description: Learn here all about Set the cursor at the specific range in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Setting Cursor at Specific Range in Editor
documentation: ug
domainurl: ##DomainURL##
---

# Setting Cursor at Specific Range in Angular Rich Text Editor Component

This can be achieved by using the `setRange` method in the Rich Text Editor with a `NodeSelection` instance. In the sample below, the text node (the exact position inside the editor content) is passed to the `setStart` method, and then the range is applied using the `setRange` method of the Rich Text Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/how-to/cut-copy-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/how-to/cut-copy-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/how-to/cut-copy-cs2" %}
