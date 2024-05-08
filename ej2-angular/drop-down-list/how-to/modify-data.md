---
layout: post
title: Modify data in Angular Drop down list component | Syncfusion
description: Learn here all about Modify data in Syncfusion Angular Drop down list component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Modify data 
documentation: ug
domainurl: ##DomainURL##
---

# Modify data in Angular Drop down list component

When binding the remote data source, by using the [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#actioncomplete) event, you can modify the result data before passing it to DropDownList.

The following sample demonstrate how to modify the result data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/getting-started-cs17" %}