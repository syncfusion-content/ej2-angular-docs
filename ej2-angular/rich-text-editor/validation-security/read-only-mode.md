---
layout: post
title: Controlling Editor Access in Angular Rich Text Editor component | Syncfusion
description: Learn all about Controlling Editor Access in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Controlling Editor Access
documentation: ug
domainurl: ##DomainURL##
---

# Controlling Editor Access in Angular Rich Text Editor component

The Syncfusion Angular Rich Text Editor provides read-only and disabled modes to control user interaction with the editor. Read-only mode allows users to view formatted content without editing, while disabled mode prevents all interactions, including toolbar access. These features are useful for displaying content without modifications or temporarily restricting input.

## Read-only mode

Read-only mode prevents users from editing the content in the Rich Text Editor while preserving the ability to view formatted text. This feature is particularly useful when you want to display formatted content without permitting modifications.

To enable the read-only mode, set the [readonly](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#readonly) property to `true`. 
The content remains viewable with its formatting intact, but editing is restricted.

The following example demonstrates how to enable read-only mode in the Rich Text Editor:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/read-only-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/read-only-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/read-only-cs1" %}

## Disabled mode

In disabled mode, the Rich Text Editor becomes completely non-interactive, preventing users from editing its content. This is especially useful when you want to display read-only content or temporarily restrict user input without removing the editor from the UI.

### How to disable the editor

To disable the editor, set the [enabled](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#enabled) property to `false`.

When disabled, the editor becomes non-interactive, ensuring that users cannot edit or modify the content.

The following example demonstrates how to disable the Rich Text Editor by setting the `enabled` property to `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/disable-editor-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/disable-editor-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/disable-editor-cs1" %}