---
layout: post
title: Positioning Cursor at Content End in Rich Text Editor | Syncfusion
description: Learn here all about Focus cursor at the end of the content in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Positioning Cursor at Content End in Rich Text Editor
documentation: ug
domainurl: ##DomainURL##
---

# Positioning the Cursor at the End of Content in the Rich Text Editor Component

To focus the cursor at the end of the content in the Rich Text Editor, you need to ensure the editor is focused and then manipulate the selection to place the cursor at the end. This involves focusing the editor using the `focus` method and then using the `Range` and `Selection` objects to collapse the range at the end of the content. Adding a slight delay (using `setTimeout`) ensures that the focus is properly set before manipulating the cursor position.

The following example illustrates how to programmatically focus the cursor at the end of the Rich Text Editor content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/how-to/cursor-at-end-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/how-to/cursor-at-end-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/how-to/cursor-at-end-cs1" %}