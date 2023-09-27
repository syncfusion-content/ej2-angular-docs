---
layout: post
title: Underline a character in the item text in Angular Context menu component | Syncfusion
description: Learn here all about Underline a character in the item text in Syncfusion Angular Context menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Underline a character in the item text 
documentation: ug
domainurl: ##DomainURL##
---

# Underline a character in the item text in Angular Context menu component

To underline a particular character in a text, it can be handled in `beforeItemRender` event by adding `<u>` tag in between the text and given as innerHTML in `li` rendering.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/context-menu/separators-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/context-menu/separators-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/separators-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/separators-cs2" %}
