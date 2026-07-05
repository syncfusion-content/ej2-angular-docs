---
layout: post
title: Implementing Ctrl+s Shortcut for Value Updates | Syncfusion
description: Learn here all about Update value in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Implementing Ctrl+s Shortcut for Value Updates
documentation: ug
domainurl: ##DomainURL##
---

# Implementing the Ctrl+S Shortcut for Value Updates in the Angular Rich Text Editor Component

To implement this functionality, you need to bind a `keydown` event to the Rich Text Editor content and capture the <kbd>Ctrl</kbd> + <kbd>S</kbd> key press using the keyCode.

In the `keydown` event handler, the `updateValue` method is called to update the [value](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#value) property, and then you can save the content to the required database using the same.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/how-to/save-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/how-to/save-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/how-to/save-cs1" %}