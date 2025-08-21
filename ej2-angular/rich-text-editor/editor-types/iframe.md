---
layout: post
title: IFrame Editing Mode | Syncfusion
description: Learn how to use Iframe mode in the Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: IFrame Editing Mode
documentation: ug
domainurl: ##DomainURL##
---

# IFrame Editing Mode in the Angular Rich Text Editor Component

The iframe editor in the Rich Text Editor provides an isolated environment for content editing by using an iframe element as the content area. This ensures separation from the parent page's styles and scripts, preventing conflicts and enhancing compatibility.In this mode, the editor displays only the body tag of the iframe, offering a clean and isolated workspace for content creation.

## Configuring the Iframe editor

Iframe editing mode is enabled using the [iframeSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#iframesettings) property. When this option is enabled, the Rich Text Editor creates an iframe element as the content area during initialization.

The following example demonstrates enabling iframe mode:

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

Custom attributes can be applied to the iframe's body element using the `attributes` field of the [iframeSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#iframesettings) property. This property accepts name/value pairs in string format, enabling you to override the default appearance of the content area.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs6" %}

## Integrating external CSS and scripts

The Rich Text Editor allows you to apply an external CSS file to style the iframe element. This can be done using the [styles](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#iframesettings) field in the iframeSettings property. By including an external CSS file, you can easily change the appearance of the editor's content to meet your specific requirements.

Likewise, add the external script file to the `< iframe >` element using the [scripts](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#iframesettings) field of iframeSettings to provide the additional functionalities to the RichTextEditor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs7" %}

> You can also explore our [iframe in Angular Rich Text Editor example](https://ej2.syncfusion.com/angular/demos/#/tailwind3/rich-text-editor/iframe) that shows how to render the iframe in Angular Rich Text Editor.

## Integrating Mention with Iframe

Rich Text Editor supports advanced features such as Mention component, even when it is rendered inside an iframe. To enable mention functionality within the iframe-mode Rich Text Editor, you need to correctly set the [target](https://helpej2.syncfusion.com/angular/documentation/api/mention#target) of the Mention component.

Specifically, assign the `inputElement` of the Rich Text Editor to the target property of the Mention component. This ensures that the Mention popup is triggered correctly when the user types a designated character (such as @) inside the Rich Text Editor's editable area.

Here's an example of how to integrate Mention with Iframe editor,

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/mention-iframe/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/mention-iframe/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/mention-iframe" %}

## See Also

* [Implementing Inline Editing](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/inline-editing)
* [Using the Markdown Editor](https://ej2.syncfusion.com/angular/documentation/markdown-editor/getting-started)
