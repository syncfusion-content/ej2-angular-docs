---
layout: post
title: Maintain state persistence in Angular Query Builder UI | Syncfusion
description: Persist the Syncfusion Angular Query Builder UI rule object in localStorage across page refreshes and navigation by setting enablePersistence to true.
platform: ej2-angular
control: State persistence 
documentation: ug
domainurl: ##DomainURL##
---

# How to maintain the state persistence in Angular Query Builder UI

State persistence maintains the Query Builder's current configuration in the browser's `localStorage` across page refreshes and navigation. When enabled, the [`rule`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#rule) object is stored in local storage. To enable state persistence, set the [`enablePersistence`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#enablepersistence) property to true.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/default-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/default-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/default-cs10" %}
