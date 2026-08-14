---
layout: post
title: How to open in edit mode in Angular In-place Editor | Syncfusion
description: Open the Angular In-place Editor in edit mode at load using enableEditMode, and toggle the editor open or closed from a checkbox.
platform: ej2-angular
control: Dynamic edit mode 
documentation: ug
domainurl: ##DomainURL##
---

# How to open in edit mode in Angular In-place Editor

At component initial load, if you want to open editor state without interacting **In-place Editor** input element, it can be achieved by configuring the [enableEditMode](https://ej2.syncfusion.com/angular/documentation/api/inplace-editor#enableeditmode) property to `true`.

In the following sample, editor opened at initial load and when toggling a checkbox, it will remove or open the editor.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/in-place-editor/dynamic-edit-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/in-place-editor/dynamic-edit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/in-place-editor/dynamic-edit-cs1" %}