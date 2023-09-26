---
layout: post
title: Update value in Angular Rich text editor component | Syncfusion
description: Learn here all about Update value in Syncfusion Angular Rich text editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Update value 
documentation: ug
domainurl: ##DomainURL##
---

# Update value in Angular Rich text editor component

To achieve this, you need to bind the `keydown` event to the RTE content and capture the `ctrl + s` key press using its keyCode.
In the `keydown` event handler, the `updateValue` method is called to update the [`value`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#value) property and then you can save the content in the required database using the same.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/how-to/save-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rich-text-editor/how-to/save-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/how-to/save-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/how-to/save-cs1" %}
