---
layout: post
title: Mail Merge in Angular Rich Text Editor | Syncfusion
description: Learn how to use and customize the Mail Merge in the Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Mail Merge
documentation: ug
domainurl: ##DomainURL##
---

# Mail Merge in Angular Rich Text Editor Component

The Rich Text Editor can be customized to implement **Mail Merge** functionality by inserting placeholders into the editor using custom toolbar items. These placeholders are later replaced with actual data to generate personalized content such as letters, invoices, and reports.

This feature simplifies the creation of dynamic documents by allowing users to insert merge fields that are automatically populated with real data during content generation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/mail-merge/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/mail-merge/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/mail-merge" %}