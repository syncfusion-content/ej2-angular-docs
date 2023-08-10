---
layout: post
title: Group and caption aggregate in Angular Grid component | Syncfusion
description: Learn here all about Group and caption aggregate in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Group and caption aggregate 
documentation: ug
domainurl: ##DomainURL##
---

# Group and caption aggregate in Angular Grid component

Group and caption aggregate values are calculated from the current group items.
If [`groupFooterTemplate`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#groupfootertemplate) is provided then the aggregate values can be displayed in the group footer cells and if [`groupCaptionTemplate`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#groupcaptiontemplate) is provided then aggregate values can be displayed in the group caption cells.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-group-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.template.html" %}
{% include code-snippet/grid/aggregates-group-cs1/app/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/aggregates-group-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-group-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/aggregates-group-cs1" %}

> * Use the template reference variable name as **#groupFooterTemplate** to specify the group footer template and as **#groupCaptionTemplate** to specify the group caption template.
> * The aggregate values must be accessed inside the template using their corresponding [`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#type) name.
