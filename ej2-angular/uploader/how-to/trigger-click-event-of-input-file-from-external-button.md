---
layout: post
title: How to trigger click from external button | Syncfusion
description: Open the file browser from an external button in the Angular Uploader by wiring its click event to the hidden file input click handler for custom trigger UI.
platform: ej2-angular
control: Trigger click event of input file from external button 
documentation: ug
domainurl: ##DomainURL##
---

# How to trigger a click from an external button

You can trigger the click event of the file input element from an external button using the button's `click` event. In the following example, the file input's click event is triggered when an external button is clicked, allowing users to open the file browser without using the default Uploader button.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/uploader/external-click-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/external-click-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/external-click-cs1" %}

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to trigger the file browser from an external button and browse the files you want to upload to the server.
