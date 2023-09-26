---
layout: post
title: Tool tip in Angular Pivotview component | Syncfusion
description: Learn here all about Tool tip in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tool tip 
documentation: ug
domainurl: ##DomainURL##
---

# Tool tip in Angular Pivotview component

The tooltip can be enabled or disabled by setting the [`showTooltip`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#showtooltip) property to **true** or **false**. By default, tooltip is enabled in the pivot table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs297/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs297/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs297/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs297" %}

## Tooltip Template

User can design their own tooltip by setting the property [`tooltipTemplate`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#tooltiptemplate) with own HTML elements. The property accepts both HTML string and ID attribute. The following place holders are available to display its dynamic values inside the HTML elements.

`${rowHeaders}` – Row headers of the selected value cell.

`${columnHeaders}`  – Column headers of the selected value cell.

`${rowFields}` – Row fields of the selected value cell.

`${columnFields}` – Column fields of the selected value cell.

`${valueField}` – Field name of the selected value cell.

`${aggregateType}` – Aggregate type of the selected value cell.

`${value}` – Formatted value of the selected value cell.

The tooltip customization is common for both pivot table and pivot chart or it can be done individually as well. To customize the pivot table tooltip, the above procedure needs to be followed. To customize the pivot chart tooltip alone use `template` property of tooltip under [`chartSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettings).

In the below sample, the pivot table and pivot chart shows customized tooltip layouts.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/tooltipTemplate-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/tooltipTemplate-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/tooltipTemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/tooltipTemplate-cs1" %}