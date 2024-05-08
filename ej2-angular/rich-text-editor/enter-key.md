---
layout: post
title: Enter key in Angular Rich text editor component | Syncfusion
description: Learn here all about Enter key in Syncfusion Angular Rich text editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Enter key 
documentation: ug
domainurl: ##DomainURL##
---

# Enter key in Angular Rich text editor component

Rich Text Editor allows to customize the tag that is inserted when pressing the enter key and shift + enter key in the Rich Text Editor.

## Enter key customization

By default, the `<p>` tag will be created while pressing the enter key. The enter key can be customized by using the [`enterKey`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#enterkey) property, where the possible tags that can be used to customize are `<p>`, `<div>`, and `<br>`.

When the enter key is customized with any of the possible values, pressing the enter key in the editor will create a new tag that is configured. Also, when the enter key is configured the default value of the Rich Text Editor will also change respectively with the configured values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/enter-key-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/enter-key-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/enter-key-cs1" %}

## Shift-Enter key customization

By default, the `<br>` tag will be created while pressing the shift + enter key. The shift + enter key can be customized by using the [`shiftEnterKey`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#shiftEnterkey) property where the possible tags that can be used to customize are `<br>`, `<p>`, `<div>`.  

When the shift + enter key is customized with any of the possible values, pressing the shift + enter key in the editor will create a new tag that is configured. Also, when the shift + enter key is configured the default value of the Rich Text Editor will change respectively with the configured values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/shift-enter-key-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/shift-enter-key-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/shift-enter-key-cs1" %}
