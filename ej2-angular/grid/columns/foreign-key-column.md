---
layout: post
title: Foreign key column in Angular Grid component | Syncfusion
description: Learn here all about Foreign key column in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Foreign key column 
documentation: ug
domainurl: ##DomainURL##
---

# Foreign key column in Angular Grid component

The Foreign key column in the Syncfusion Grid component allows you to display related data from a foreign key data source in a column within the grid. This feature is particularly useful when you have a column in the grid that represents a foreign key relationship with another data source.

To enable and integrate the foreign key column in the Angular Grid component, follow these steps:

1.Inject the ForeignKeyService in the provider section of the AppModule.

```typescript

import { ForeignKeyService } from '@syncfusion/ej2-angular-grids';

@NgModule({
  providers: [ForeignKeyService]
})
export class AppModule { }

```

2.Define the foreign key column in the grid using the following properties:

* [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#datasource): Specifies the foreign data source that contains the related data.

* [foreignKeyField](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#foreignkeyfield): Maps the column name in the grid to the field in the foreign data source that represents the foreign key relationship.

* [foreignKeyValue](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#foreignkeyvalue): Specifies the field from the foreign data source that should be displayed in the grid as the related data.

```html
    <e-column field='EmployeeID' headerText='Employee ID' foreignKeyValue='FirstName' foreignKeyField='EmployeeID' [dataSource]='employeesData'></e-column>
```

>The `foreignKeyField` property should match the name of the field in the foreign data source that represents the foreign key relationship, and the `foreignKeyValue` property should specify the field from the foreign data source that should be displayed in the grid as the related data.

## Binding local data

The Syncfusion Grid component provides a convenient way to bind local data to a foreign key column. This allows you to display related data from a local data source within the grid. Here's an example of how to bind local data to a Foreign Key column in Syncfusion Grid:

In this example, **data** is the local data source for the Grid, and **employeeData** is the local data source for the foreign key column. The `field` property of the e-column component is set to **EmployeeID** which represents the foreign key value in the **data**. The `foreignKeyValue` property is set to **FirstName** which represents the field name in the **employeeData** that you want to display in the foreign key column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs19/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs19/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs19/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs19" %}

## Binding remote data

The Foreign key column in Syncfusion Grid allows you to bind remote data for a foreign key column. You can assign the service data as an instance of `DataManager` to the `dataSource` property, and provide the endpoint `URL` as the data source URL.

This example demonstrates how to use the foreign key column with remote data binding using the [ODataV4Adaptor](https://ej2.syncfusion.com/angular/documentation/grid/data-binding/remote-data#odata-v4-adaptor---binding-odata-v4-service) in the grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/foreignkey-cs12/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/foreignkey-cs12/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/foreignkey-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/foreignkey-cs12" %}

> * For remote data, the sorting and grouping is done based on [column.foreignKeyField](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#foreignkeyfield) instead of [column.foreignKeyValue](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#foreignkeyvalue).
> * If [column.foreignKeyField](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#foreignkeyfield) is not defined, then the column uses [column.field](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#field).

## Use edit template in foreign key column

The Syncfusion Grid provides support for using an edit template in a foreign key column. By default, a dropdown component is used for editing foreign key column. However, you can render a different component for editing by using the [column.edit](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#edit) property. Here's an example that demonstrates how to use an edit template in a foreign key column:

In this example, an [AutoComplete](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/auto-complete/default) component is rendered as the edit template for the **"EmployeeID"** foreign key column. The [dataSource](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#datasource) property of the AutoComplete component is set to the employees data, and the fields property is configured to display the **"FirstName"** field as the value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/foreignkey-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/foreignkey-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/foreignkey-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/foreignkey-cs1" %}

## Customize filter UI of foreign key column

The Syncfusion Grid allows you to customize the filtering user interface (UI) for foreign key columns by using the [column.filter](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filter) property. By default, a dropdown component is used for filtering foreign key columns. However, you can create your own custom filtering UI by specifying a template function for the `column.filter` property. Here's an example that demonstrates how to create a custom filtering UI in a foreign key column:

In this example, a [DropDownList](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/drop-down-list/default) component is rendered as the filter UI for the **"EmployeeID"** foreign key column. The [dataSource](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#datasource) property of the DropDownList component is set to the employees data, and the fields property is configured to display the **FirstName** field as the [text](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#text) and **EmployeeID** field as the [value](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#value). The `value` property is set to the current filter value of the column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/foreignkey-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/foreignkey-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/foreignkey-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/foreignkey-cs2" %}

## Use filter bar template in foreign key column

You can use the filter bar template in a foreign key column in Grid by defining the [column.filterBarTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filterbartemplate) property. This allows you to customize the filter bar for the foreign key column with a custom component or HTML template. Here's an example that demonstrates how to use a filter bar template in a foreign key column:

In this example, the **"EmployeeID"** column is a foreign key column, and the **filter** function is used as the filter bar template for this column. The `filter` function can be defined in your component code and should return the desired component or HTML template for the filter bar. The column header shows the custom filter bar template and you can select filter value by using the **DropDown** options.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/foreignkey-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/foreignkey-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/foreignkey-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/foreignkey-cs3" %}

## Perform aggregation in foreign key column

By default, aggregations are not supported in a foreign key column in the Syncfusion Grid. However, you can achieve aggregation for a foreign key column by using [customAggregate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#customaggregate).

To perform aggregation in a foreign key column, follow these steps:

1.Define a foreign key column in the Grid.
2.Implement a custom aggregate function to calculate the aggregation for the foreign key column.
3.Set the [customAggregate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#customaggregate) property of the column to the custom aggregate function.

Here's an example that demonstrates how to perform aggregation in a foreign key column:

In the provided example, the `customAggregateFn` function is used to filter the data based on the **FirstName** field of the foreign key column, using the `getForeignData` internal function. The function then counts the occurrences of **Margaret**. The result is displayed in the grid's footer template using the ng-template with the `#footerTemplate` reference.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/foreignkey-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/foreignkey-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/foreignkey-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/foreignkey-cs4" %}

## Enable multiple foreign key columns

The Syncfusion Grid component supports the feature of enabling multiple foreign key columns with editing options. This allows users to display columns from foreign data sources in the Grid component.

In the following example, **Customer Name** and **Ship City** are foreign key columns that display the **ContactName** and **City** columns from foreign data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/foreignkey-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/foreignkey-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/foreignkey-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/foreignkey-cs5" %}
