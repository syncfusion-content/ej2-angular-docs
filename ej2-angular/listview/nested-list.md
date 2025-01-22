---
layout: post
title: Nested list in Angular ListView component | Syncfusion
description: Learn here all about Nested list in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView 
documentation: ug
domainurl: ##DomainURL##
---

# Nested list in Angular ListView component

ListView component supports Nested list. For that, we should define [`child`](https://ej2.syncfusion.com/angular/documentation/api/list-view/fieldSettingsModel/#child) property for the nested list in array of JSON.

The below samples illustrates, how the list is generated with the nested source.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/nested-list-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/nested-list-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/nested-list-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/nested-list-cs1" %}