---
layout: post
title: Set state persistence of the tab component in Angular Tab component | Syncfusion
description: Learn here all about Set state persistence of the tab component in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Set state persistence of the tab component 
documentation: ug
domainurl: ##DomainURL##
---

# Set state persistence of the tab component in Angular Tab component

State persistence allows the Tab to retain the current modal value in the browser cookies for state maintenance.
This action is handled through the [`enablePersistence`](https://ej2.syncfusion.com/angular/documentation/api/tab#enablepersistence) property which is set to false by default.
When it is set to true, some of the Tab component model values will be retained even after refreshing the page.

The following sample demonstrates how to set state persistence of the Tab component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/persistence-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tab/persistence-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/persistence-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/persistence-cs1" %}
