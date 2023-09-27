---
layout: post
title: Check box column in Angular Gantt component | Syncfusion
description: Learn here all about Check box column in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Check box column 
documentation: ug
domainurl: ##DomainURL##
---

# Check box column in Angular Gantt component

To render boolean values as checkbox in columns, you need to set [`displayAsCheckBox`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#displayascheckbox) property as **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/checkbox-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/checkbox-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/checkbox-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/checkbox-cs1" %}

## Controlling Grid actions

You can enable or disable gantt action for a particular column by setting the [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowfiltering), [`allowSorting`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowsorting), [`allowReordering`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowreordering), and [`allowEditing`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#editsettings) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/gridactions-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/gridactions-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/gridactions-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/gridactions-cs1" %}

## Column type

Column type can be specified using the `columns.type` property. It specifies the type of data the column binds.

If the `format` is defined for a column, the column uses `type` to select the appropriate format option [number](../common/internationalization/#number-formatting) or [date](../common/internationalization/#manipulating-datetime).

Gantt column supports the following types:
* string
* number
* boolean
* date
* datetime

> If the `type` is not defined, it will be determined from the first record of the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#datasource).
> In case if the first record of the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#datasource) is null/blank value for a column then it is necessary to define the `type` for that column.