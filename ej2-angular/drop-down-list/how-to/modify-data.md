---
layout: post
title: How to modify remote data in Angular Dropdown List | Syncfusion®
description: Modify the result data in Angular Dropdown List before display when binding a remote data source, using the actionComplete event.
platform: ej2-angular
control: Modify data 
documentation: ug
domainurl: ##DomainURL##
---

# How to modify result data before remote bind in Angular Dropdown List

When binding the remote data source, by using the [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#actioncomplete) event, you can modify the result data before passing it to DropDownList.

The following sample demonstrate how to modify the result data.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/getting-started-cs17" %}