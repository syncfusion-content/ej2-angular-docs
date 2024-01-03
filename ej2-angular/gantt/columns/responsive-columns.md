---
layout: post
title: Responsive columns in Angular Gantt component | Syncfusion
description: Learn here all about Responsive columns in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Responsive columns 
documentation: ug
domainurl: ##DomainURL##
---

# Responsive columns in Angular Gantt component

You can toggle the column visibility based on media queries, which are defined in the [`hideAtMedia`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#hideatmedia). The [`hideAtMedia`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#hideatmedia) accepts valid [Media Queries]( http://cssmediaqueries.com/what-are-css-media-queries.html ).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/responsivecolumn-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/responsivecolumn-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/responsivecolumn-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/responsivecolumn-cs1" %}