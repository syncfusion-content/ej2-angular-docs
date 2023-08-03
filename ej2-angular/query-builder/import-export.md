---
layout: post
title: Import export in Angular Query builder component | Syncfusion
description: Learn here all about Import export in Syncfusion Angular Query builder component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Import export 
documentation: ug
domainurl: ##DomainURL##
---

# Import export in Angular Query builder component

Importing allows you to view or edit the predefined conditions which is available in JSON or SQL. You can import the conditions either initial rendering or post rendering.

## Initial rendering

To apply conditions initially, you can define the [`rule`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#rule) Here, you can import structured JSON object by defining the [`rule`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#rule) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/filtering-cs8/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/query-builder/filtering-cs8/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs8/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/filtering-cs8" %}

## Post rendering

### Importing from JSON

You can set the conditions from structured JSON object through the [`setRules`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#setrules) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/filtering-cs9/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/query-builder/filtering-cs9/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs9/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/filtering-cs9" %}

### Importing from SQL

You can set the conditions from SQL query through the [`setRulesFromSql`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#setrulesfromsql) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/filtering-cs10/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/query-builder/filtering-cs10/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs10/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/filtering-cs10" %}

## Exporting

Exporting allows you to save or maintain the created conditions through the Query Builder. You can export the defined conditions by the following ways.

## Exporting to JSON

You can export the defined conditions to structured JSON object through the [`getRules`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#getrules) method.

## Exporting to SQL

You can export the defined conditions to SQL query through the [`getSqlFromRules`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#getsqlfromrules) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/export-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/query-builder/export-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/export-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/export-cs1" %}
