---
layout: post
title: Tab selection in Angular Tab component | Syncfusion
description: Learn here all about Tab selection in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tab selection 
documentation: ug
domainurl: ##DomainURL##
---

# Tab selection in Angular Tab component

We can able to find the tab selection whether it is selected by user interaction or programmatically way in the [`selecting`](https://ej2.syncfusion.com/angular/documentation/api/tab#selecting) and [`selected`](https://ej2.syncfusion.com/angular/documentation/api/tab#selected) event argument with the field of `isInteracted`. When the user changes the tab through click actions it will return true otherwise, it will return false. The following code example depicts to find the tab selecting the state in selecting and selected events.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/animation-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tab/animation-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/animation-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/animation-cs2" %}
