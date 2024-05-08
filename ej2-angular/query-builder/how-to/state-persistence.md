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

State persistence allows you to maintain the current state in the browser’s `localStorage` even if the browser is refreshed or if you move to the next page within the browser. State persistence stores the Query Builder’s [`rule`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#rule) object in the local storage when the [`enablePersistence`](https://ej2.syncfusion.com/vue/documentation/state-persistence/) is defined to true.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/default-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/default-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/default-cs10" %}
