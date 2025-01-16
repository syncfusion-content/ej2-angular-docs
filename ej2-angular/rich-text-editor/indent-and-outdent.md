---
layout: post
title: Indent and Outdent in Angular Rich Text Editor component | Syncfusion
description:  Checkout and learn about Indent and Outdent in Angular Rich Text Editor component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Indent and Outdent
documentation: ug
domainurl: ##DomainURL##
---
# Increase and Decrease Indent in Angular Rich Text Editor Component

The Rich Text Editor allows you to set indentation for text blocks such as paragraphs, headings, or lists. This feature helps you visually organize and structure your content, making it easier to read and understand.

The Rich Text Editor allows you to configure two types of indentation tools, `Indent` and `Outdent` tool  in the Rich Text Editor toolbar using the `toolbarSettings` [items](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#items) property.

| Options | Description |
|----------------|---------|
| Indent | Increases the indentation |
| Outdent | Decreases the indentation |

To adjust the text indentation:

1. Select the desired text or paragraph.
2. Click the Indent or Outdent button in the toolbar.
3. The indentation of the selected text will be modified accordingly.

To configure the `Indent` and `Outdent` toolbar item, refer to the below code.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/indent-and-outdent-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/indent-and-outdent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/indent-and-outdent-cs1" %}