---
layout: post
title: Link in Angular Rich Text Editor component | Syncfusion
description: Learn how to insert, edit, and manage links in the Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Link 
documentation: ug
domainurl: ##DomainURL##
---

# Link in Angular Rich Text Editor Component

A hyperlink can be insert into the editor for quick access to the related information. The hyperlink itself can be a text or an image.

## Inserting link

To insert a hyperlink:

1. Place the cursor where you want to insert the link, or select the text or image to convert into a hyperlink.
2. Click the "Insert Link" tool in the toolbar to open the Insert Link dialog.
3. Configure the dialog options as described below.

>To use use image and link tool, configure `ImageService, LinkService` in the provider section.

| Options | Description |
|----------------|--------------------------------------|
| Web Address | Enter or paste the destination URL for your link (e.g., `https://example.com`)|
| Display Text | Enter or edit the required text that you want to display text for the link|
| Tooltip | To display additional helpful information when you place the pointer on the hyperlink, type the required text in the “Tooltip” field. |
| Open Link in New Window | Specify whether, the given link will be open in new window (`target="_blank"`) or not. |

The following example demonstrates inserting a hyperlink:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs16" %}

> The Rich Text Editor validates URLs as you type in the Web Address field. Invalid URLs will be highlighted in red when you click the insert button in the `Insert Link` dialog.

## Editing and removing links

To edit or remove a hyperlink:

1. Select the linked text or image.
2. To edit, click the `EditLink` tool to reopen the Insert Link dialog and modify the settings.
3. To remove, click the `RemoveLink` tool in the toolbar, which deletes the hyperlink while preserving the text or image.

## Auto link generation

The Rich Text Editor supports automatic link generation. When you type a URL and press Space or Enter, the editor automatically converts the typed URL into a clickable hyperlink.

## Inserting a related link

By default, the URL entered in the Web Address field is automatically converted into an absolute URL by prefixing it with https:// for hyperlinks. This ensures that the URL is properly formatted and accessible when used as a hyperlink.

However, if you want to accept the given URL without validating it for hyperlinks and without automatically adding a protocol (such as https://) or domain, you need to set the [enableAutoUrl](https://helpej2.syncfusion.com/angular/documentation/api/rich-text-editor/#enableautourl) property to true. By default, this property is set to false, meaning that automatic URL conversion is enabled unless explicitly disabled.

The following example demonstrates disabling auto-link protocol prefixing:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/relative-url/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/relative-url/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/relative-url" %}

## See also

* [Link Quick Toolbar](./toolbar/quick-toolbar#link-quick-toolbar)
* [Image with links](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/insert-images#hyperlinking-images)
* [Insert File Attachments](./how-to/file-attachments)