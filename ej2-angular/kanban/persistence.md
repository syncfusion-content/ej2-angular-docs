---
layout: post
title: Persistence in Angular Kanban component | Syncfusion
description: Learn here all about Persistence in Syncfusion Angular Kanban component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Persistence 
documentation: ug
domainurl: ##DomainURL##
---

# Persistence in Angular Kanban component

State persistence refers to the Kanban state maintained in the browser's [`localStorage`](https://www.w3schools.com/html/html5_webstorage.asp#) even if the browser is refreshed or if you move to the next page within the browser.

State persistence stores Kanban datasource, column and swimlane expand/collapse state in the local storage when the [`enablePersistence`](https://ej2.syncfusion.com/angular/documentation/api/kanban/#enablepersistence) is defined as true.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/persistence-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/persistence-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/persistence-cs1" %}
