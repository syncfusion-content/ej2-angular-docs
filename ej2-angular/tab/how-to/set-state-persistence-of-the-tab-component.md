---
layout: post
title: Set state persistence of Angular Tab component | Syncfusion
description: Learn here all about Set state persistence of the tab component in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# Set state persistence of the tab component in Angular Tab component

State persistence allows the Tab component to retain the current model values in the browser's local storage for state maintenance.
This action is handled through the [`enablePersistence`](https://ej2.syncfusion.com/angular/documentation/api/tab/#enablepersistence) property which is set to false by default.
When set to true, the Tab component will preserve specific model values will be retained even after page refreshes or browser sessions.

The following sample demonstrates how to set state persistence of the Tab component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/persistence-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/persistence-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/persistence-cs1" %}