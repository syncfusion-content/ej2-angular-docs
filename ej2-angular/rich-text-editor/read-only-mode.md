---
layout: post
title: Read-only Mode in Angular Rich Text Editor component | Syncfusion
description: Learn all about Read-only Mode in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Read-only Mode
documentation: ug
domainurl: ##DomainURL##
---

# Read-only Mode in the Angular Rich Text Editor component

The Rich Text Editor component offers a read-only mode that prevents you from editing the content while still allowing them to view it. This feature is particularly useful when you want to display formatted content without permitting modifications.

To enable the read-only mode, set the [`readonly`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#readonly) property to `true`. 

This will allow you to view the content without making any modifications.

Please refer to the sample and code snippets below to demonstrate how to enable the read-only mode in the Rich Text Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/read-only-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/read-only-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/read-only-cs1" %}

## See Also

[How to Disable and Enable the Rich Text Editor](./disable-editor.md)