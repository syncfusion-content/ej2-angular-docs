---
layout: post
title: Set maximum group count in Angular Query Builder UI | Syncfusion
description: Limit the number of nested groups in the Syncfusion Angular Query Builder UI by setting the maxGroupCount property, useful in mobile layouts.
platform: ej2-angular
control: Restrict groups 
documentation: ug
domainurl: ##DomainURL##
---

# How to set maximum group count in Angular Query Builder UI

Restrict group creation by defining the [`maxGroupCount`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#maxgroupcount) property. By default, the value is 5. In the following example, `maxGroupCount` is set to 2.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/default-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/default-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/default-cs7" %}

> You can use this property in the mobile mode to restrict the nested group creation.
