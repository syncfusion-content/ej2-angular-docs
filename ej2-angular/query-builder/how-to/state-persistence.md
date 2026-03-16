---
layout: post
title: State persistence in Angular Query builder component | Syncfusion
description: Learn here all about State persistence in Syncfusion Angular Query builder component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: State persistence 
documentation: ug
domainurl: ##DomainURL##
---

# State persistence in Angular Query builder component

State persistence maintains the Query Builder's current configuration in the browser's `localStorage` across page refreshes and navigation. When enabled, the [`rule`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#rule) object is stored in local storage. To enable state persistence, set the [`enablePersistence`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#enablepersistence) property to true.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/default-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/default-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/default-cs10" %}
