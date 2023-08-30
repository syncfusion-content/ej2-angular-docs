---
layout: post
title: Restrict groups in Angular Query builder component | Syncfusion
description: Learn here all about Restrict groups in Syncfusion Angular Query builder component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Restrict groups 
documentation: ug
domainurl: ##DomainURL##
---

# Restrict groups in Angular Query builder component

You can restrict the condition set by defining the [`maxGroupCount`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#maxgroupcount) property. By default, the value is 5. In the below demo, the `maxGroupCount` is set to 2 .

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/default-cs7/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/query-builder/default-cs7/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/default-cs7/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/default-cs7" %}

> You can use this property in the mobile mode to restrict the nested group creation.
