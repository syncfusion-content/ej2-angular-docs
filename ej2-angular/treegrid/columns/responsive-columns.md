---
layout: post
title: Responsive columns in Angular Treegrid component | Syncfusion
description: Learn here all about Responsive columns in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Responsive columns 
documentation: ug
domainurl: ##DomainURL##
---

# Responsive columns in Angular Treegrid component

You can toggle column visibility based on media queries which are defined at the [`hideAtMedia`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#hideatmedia).
The [`hideAtMedia`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#hideatmedia) accepts valid [Media Queries]( http://cssmediaqueries.com/what-are-css-media-queries.html ).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs26/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs26/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs26/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs26" %}