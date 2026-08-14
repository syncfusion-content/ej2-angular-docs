---
layout: post
title: How to underline a character in a text in Angular Split Button | Syncfusion
description: Underline a specific character in Angular Split Button popup text using the beforeItemRender event.
platform: ej2-angular
control: Underline a character in a text 
documentation: ug
domainurl: ##DomainURL##
---

# How to underline a character in a text in Angular Split Button

To underline a particular character in a text, it can be handled in [`beforeItemRender`](https://ej2.syncfusion.com/angular/documentation/api/split-button#beforeitemrender) event by adding `<u>` tag in between the text and given as innerHTML in `li` rendering.

In the following example, `C` is underlined in the text `Copy`:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/split-button/underline-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/split-button/underline-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/split-button/underline-cs1" %}