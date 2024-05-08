---
layout: post
title: Render listview with hyper link navigation in Angular Listview component | Syncfusion
description: Learn here all about Render listview with hyper link navigation in Syncfusion Angular Listview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Render listview with hyper link navigation 
documentation: ug
domainurl: ##DomainURL##
---

# Render listview with hyper link navigation in Angular Listview component

We can use `anchor` tag along with `href` attribute in our ListView [`template`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#template) property for navigation.

```typescript

<ng-template #template let-data="">
   <a target='_blank' href="{{data.url}}">{{data.name}}</a>
</ng-template>

```

In the below sample, we have rendered `ListView` with search engines URL.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/navigation-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/navigation-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/navigation-cs2" %}
