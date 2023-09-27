---
layout: post
title: Create collapsible tabs in Angular Tab component | Syncfusion
description: Learn here all about Create collapsible tabs in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Create collapsible tabs 
documentation: ug
domainurl: ##DomainURL##
---

# Create collapsible tabs in Angular Tab component

You can achieve collapse and expand functionality in Tab by adding/removing a custom CSS class in the click event handler for each tab.
* Define a CSS class to set the style property display as none. Here 'collapse' class is added to the content element for hiding it using [`created`](https://ej2.syncfusion.com/angular/documentation/api/tab#created) event.
* Bind the [`selected`](https://ej2.syncfusion.com/angular/documentation/api/tab#selected) event for Tab to collapse the initially selected Tab item
and bind custom click handler for the Tab headers.
* In the event handler, add and remove 'collapse' class to hide and show the corresponding Tab content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/collapse-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tab/collapse-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/collapse-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/collapse-cs1" %}
