---
layout: post
title: Convert complex JSON to flat JSON and assign it to the pivot table in Angular Pivotview component | Syncfusion
description: Learn here all about how to convert complex JSON to flat JSON and assign it to the pivot table in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Convert complex JSON to flat JSON and assign it to the pivot table 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->
# Convert complex JSON to flat JSON and assign it to the pivot table in Angular Pivotview component

By default, flat JSON can only bind to the pivot table. However, you can connect complex JSON to the pivot table by converting it to flat JSON via code-behind and binding it to the pivot table using the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#datasource) property in the [load](https://ej2.syncfusion.com/angular/documentation/api/pivotview#load) event.

In the following example, the **complexToFlatJson()** method is used to convert complex JSON to flat JSON and bind it to the pivot table using the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#datasource) property, then modifying the field names in the [rows](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#rows) and [columns](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#columns) based on the converted flat JSON under [dataSourceSettings](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/) in the [load](https://ej2.syncfusion.com/angular/documentation/api/pivotview#load) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs316/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs316/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs316/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs316" %}