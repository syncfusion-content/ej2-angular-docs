---
layout: post
title: Underline a character in a text in Angular Split button component | Syncfusion
description: Learn here all about Underline a character in a text in Syncfusion Angular Split button component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Underline a character in a text 
documentation: ug
domainurl: ##DomainURL##
---

# Underline a character in a text in Angular Split button component

To underline a particular character in a text, it can be handled in [`beforeItemRender`](https://ej2.syncfusion.com/angular/documentation/api/split-button#beforeitemrender) event by adding `<u>` tag in between the text and given as innerHTML in `li` rendering.

In the following example, `C` is underlined in the text `Copy`:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/split-button/underline-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/split-button/underline-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/split-button/underline-cs1" %}