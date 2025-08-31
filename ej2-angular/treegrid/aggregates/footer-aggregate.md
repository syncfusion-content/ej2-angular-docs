---
layout: post
title: Footer aggregate in Angular TreeGrid component | Syncfusion
description: Learn about configuring and displaying footer aggregates in the Syncfusion Angular TreeGrid component, including API usage, templates, and formatting options.
platform: ej2-angular
control: Footer aggregate
documentation: ug
domainurl: ##DomainURL##
---

# Footer aggregate in Angular TreeGrid component

Footer aggregate values are calculated for all rows and displayed in the footer cells of the TreeGrid. Use the [`footerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#footertemplate) property to render aggregate values in footer cells.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/aggregate-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/aggregate-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/aggregate-cs3" %}

> Access aggregate values inside the template by referring to the corresponding [`type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#type) property name, such as Sum, Average, etc.
> Obtain the footer content element programmatically using the [`getFooterContent`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getfootercontent) method of the TreeGrid instance.
> Retrieve the footer content table element using the [`getFooterContentTable`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getfootercontenttable) method.

## How to format aggregate value

Format the aggregate value result by using the [`format`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#format) property. The `format` property can be set to standard numeric or date formats according to your requirements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/aggregate-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/aggregate-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/aggregate-cs4" %}