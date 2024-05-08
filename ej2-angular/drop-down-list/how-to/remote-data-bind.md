---
layout: post
title: Remote data bind in Angular Drop down list component | Syncfusion
description: Learn here all about Remote data bind in Syncfusion Angular Drop down list component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Remote data bind 
documentation: ug
domainurl: ##DomainURL##
---

# Remote data bind in Angular Drop down list component

Before component rendering, you can get the total items count by using [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#actioncomplete) &nbsp; event with its result arguments. After rendering this component, you can get the total items count by using [`getItems`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#getitems) method.

The following example demonstrate how to get the total items count.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/get-item-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/get-item-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/get-item-cs1" %}