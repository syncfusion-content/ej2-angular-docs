---
layout: post
title: Set the cursor at the specific range in Angular Rich text editor component | Syncfusion
description: Learn here all about Set the cursor at the specific range in Syncfusion Angular Rich text editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Set the cursor at the specific range 
documentation: ug
domainurl: ##DomainURL##
---

# Set the cursor at the specific range in Angular Rich text editor component

This can be achieved by using `setRange` method in the RTE using `NodeSelection` instance. In this below sample, you have passed the text node (specific location in RTE content) in `setStart` method and passed the range in `setRange` method of RTE.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/how-to/cut-copy-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/how-to/cut-copy-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/how-to/cut-copy-cs2" %}
