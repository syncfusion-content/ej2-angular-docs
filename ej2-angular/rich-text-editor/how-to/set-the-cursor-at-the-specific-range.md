---
layout: post
title: Set the Cursor at the Specific Range | Syncfusion
description: Learn here all about Set the cursor at the specific range in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Set the cursor at the specific range 
documentation: ug
domainurl: ##DomainURL##
---

# Set the Cursor at the Specific Range in Angular Rich Text Editor Component

This can be achieved by using `setRange` method in the Rich Text Editor using `NodeSelection` instance. In this below sample, you have passed the text node (specific location in Rich Text Editor content) in `setStart` method and passed the range in `setRange` method of Rich Text Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/how-to/cut-copy-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/how-to/cut-copy-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/how-to/cut-copy-cs2" %}
