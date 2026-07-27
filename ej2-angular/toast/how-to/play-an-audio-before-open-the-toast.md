---
layout: post
title: Play an audio before opening the toast | Syncfusion
description: Learn here all about Play an audio before open the toast in Syncfusion Angular Toast component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Play an audio before open the toast
documentation: ug
domainurl: ##DomainURL##
---

# Play an audio before opening the toast in Angular Toast

Here below sample demonstrates to playing audio background while opening toast. Here we have included audio play codes into beforeOpen event Function.

> If you want to stop the audio after displaying toast use [`open`](https://ej2.syncfusion.com/angular/documentation/api/toast/index-default#open) event in Toast. please check the Toast Events [`api's`](https://ej2.syncfusion.com/angular/documentation/api/toast/index-default#events) for further customization.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/toast/toast-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs11" %}
