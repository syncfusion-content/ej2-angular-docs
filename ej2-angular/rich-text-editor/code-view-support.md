---
layout: post
title: Code View in Angular Rich Text Editor component | Syncfusion
description: Learn here all about Code View in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Code view 
documentation: ug
domainurl: ##DomainURL##
---

# Code View Support in Angular Rich Text Editor Component

Rich Text Editor includes the ability for users to directly edit HTML code via `Source View` in the text area. If you made any modification in Source view directly, the changes will be reflected in the Rich Text Editor's content. So, the users will have more flexibility over the content they have created.

## Configuring Source Code Tool in the Toolbar

You can add the `SourceCode` tool in the Rich Text Editor using the `toolbarSettings` [items](../api/rich-text-editor/toolbarSettings/#items) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/code-view-support-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/code-view-support-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/code-view-support-cs1" %}

>This functionality can also be enabled through the use of the [`CodeMirror`](https://codemirror.net/) plugin. It helps to highlight the HTML content and ensures that any modifications in the code view are instantly reflected in the preview mode.

The Rich Text Editor provides the[`showSourceCode`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#showsourcecode) method, which allows you to toggle programmatically between the code view and the formatted text view. When invoked, this method switches the editor’s view to the opposite state.

## See Also

* [Integrating Code-Mirror for Enhanced Syntax Highlighting](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/third-party-integration#codemirror-integration)