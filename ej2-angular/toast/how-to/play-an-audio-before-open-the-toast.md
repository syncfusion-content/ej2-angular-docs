---
layout: post
title: Play an audio before open the toast in Angular Toast component | Syncfusion
description: Learn here all about Play an audio before open the toast in Syncfusion Angular Toast component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Play an audio before open the toast 
documentation: ug
domainurl: ##DomainURL##
---

# Play an audio before open the toast in Angular Toast component

Here below sample demonstrates to playing audio background while opening toast. Here we have included audio play codes into beforeOpen event Function.

> If you want to stop the audio after displaying toast use [`open`](https://ej2.syncfusion.com/angular/documentation/api/toast/#open) event in Toast. please check the Toast Events [`api's`](https://ej2.syncfusion.com/angular/documentation/api/toast/#events) for further customization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toast/toast-cs11/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/toast/toast-cs11/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toast/toast-cs11/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toast/toast-cs11" %}
