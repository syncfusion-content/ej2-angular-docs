---
layout: post
title: Customize selected tab styles in Angular Tab component | Syncfusion
description: Learn here all about Customize selected tab styles in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize selected tab styles 
documentation: ug
domainurl: ##DomainURL##
---

# Customize selected tab styles in Angular Tab component

You can customize the Tab style by overriding its header and active tab CSS classes. Define HTML string for adding animation and customizing the Tab header and pass it to [`text`](https://ej2.syncfusion.com/angular/documentation/api/tab/header#text) property. Now you can override the style using custom CSS classes added to the Tab elements.

> You can add the custom class into Tab component using [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item#cssclass)
property which is used to customize the Tab component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/custom-styles-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tab/custom-styles-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/custom-styles-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/custom-styles-cs1" %}
