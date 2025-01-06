---
layout: post
title: Enter key in Angular Rich Text Editor component | Syncfusion
description: Learn here all about Enter key Configuration in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Enter key Configuration
documentation: ug
domainurl: ##DomainURL##
---

# Enter key Configuration in Angular Rich Text Editor Component

Rich Text Editor allows you to customize the behavior of the Enter key and Shift+Enter key combinations. This feature provides flexibility in formatting and structuring content within the editor.

### Available Options

The enterKey property accepts the following values:

* `P` (default)
* `DIV`
* `BR`

The shiftEnterKey property accepts the following values:

* `BR` (default)
* `P`
* `DIV`

## Enter key Customization

By default, pressing the Enter key in the Rich Text Editor creates a new `<p>` tag. You can customize this behavior using the [`enterKey`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#enterkey) property.

When you customize the Enter key, the editor will create the specified tag when the Enter key is pressed. This configuration also affects the default content structure of the Rich Text Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/enter-key-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/enter-key-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/enter-key-cs1" %}

## Shift-Enter key Customization

By default, pressing Shift+Enter in the Rich Text Editor inserts a `<br>` tag. You can customize this behavior using the [`shiftEnterKey`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#shiftEnterkey) property.

When you customize the Shift+Enter key, the editor will create the specified tag when the key combination is pressed. This configuration also affects the default content structure of the Rich Text Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/shift-enter-key-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/shift-enter-key-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/shift-enter-key-cs1" %}

## Preventing The Enter key Manipulation

In some cases, you may want to prevent the default Enter key behavior entirely. The Rich Text Editor allows you to intercept and prevent the default action of the Enter key at the editor level by handling the `actionBegin event`. To ensure that the default behavior is also suppressed at the browser level, you need to call the `preventDefault()` method on the event object within the event handler. This approach allows for precise control over the editor's behavior in response to the Enter key press, facilitating the implementation of custom functionality.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/prevent-enter-key-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/prevent-enter-key-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/prevent-enter-key-cs1" %}