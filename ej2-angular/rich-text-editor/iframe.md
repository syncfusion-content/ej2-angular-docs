---
layout: post
title: IFrame Editing Mode | Syncfusion
description: Learn here all about Iframe in Syncfusion Angular Rich text editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: IFrame Editing Mode 
documentation: ug
domainurl: ##DomainURL##
---

# IFrame Editing Mode in Angular Rich Text Editor Component

The iframe editor in the Rich Text Editor component provides an isolated environment for content editing. It uses an iframe element to create a separate document, ensuring better compatibility and separation from the parent page's styles and scripts. In this mode, the editor displays only the body tag of the iframe, offering a clean and isolated workspace for content creation.

## Configuring the Iframe Editor

To enable the iframe editor, you can use the [iframeSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#iframesettings) property. When this option is enabled, the Rich Text Editor creates an iframe element as the content area during initialization.

Here's an example of how to enable the iframe editor:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs5" %}

## Customizing IFrame Attributes

You can add custom attributes to the body tag of the iframe using the attributes field of the [`iframeSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#iframesettings) property. This property accepts name/value pairs in string format, enabling you to override the default appearance of the content area.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs6" %}

## Integrating External CSS and Scripts

The Rich Text Editor allows you to apply an external CSS file to style the iframe element. This can be done using the [`styles`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#iframesettings) field in the iframeSettings property. By including an external CSS file, you can easily change the appearance of the editor’s content to meet your specific requirements.

Likewise, add the external script file to the `< iframe >` element using the [`scripts`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#iframesettings) field of iframeSettings to provide the additional functionalities to the RichTextEditor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs7" %}

> You can also explore our [iframe in Angular Rich Text Editor example](https://ej2.syncfusion.com/angular/demos/#/material/rich-text-editor/iframe) that shows how to render the iframe in Angular Rich Text Editor.

## See also

* [Implementing Inline Editing](./inline-editing.md)
* [Using the Markdown Editor](./markdown.md)
