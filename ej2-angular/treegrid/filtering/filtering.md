---
layout: post
title: Filtering in Angular TreeGrid component | Syncfusion
description: Learn here all about Filtering in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Filtering 
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in Angular TreeGrid component

Filtering is a powerful feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid component that enables selectively viewing data based on specific criteria. It allows narrowing down large datasets and focusing on the information needed, thereby enhancing data analysis and decision-making.

To use filter, inject **FilterService** in the provider section of **AppModule**.

To enable filtering in the TreeGrid, set the [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowfiltering) property of the TreeGrid to true. Once filtering is enabled, various filtering options can be configured through the [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettings/) property of the TreeGrid. This property allows defining the behavior and appearance of the filter.

In the TreeGrid component, filtering actions are executed based on the [filterSettings.hierarchyMode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettingsModel/#hierarchymode) to preserve the hierarchical structure of the data.

When filtering is implemented in a TreeGrid containing hierarchical data, the filter hierarchy mode dictates how the filtering action propagates throughout the hierarchical structure. This ensures that the filtering operation considers the parent-child relationships within the data.

For further information about the filter hierarchy mode, refer to [this section](https://ej2.syncfusion.com/angular/documentation/treegrid/filtering/filtering#filter-hierarchy-modes).

This video demonstrates the filtering feature in Angular TreeGrid:

{% youtube "https://www.youtube.com/watch?v=3aQueqaspzQ" %}

Here is an example that demonstrates the default filtering feature of the TreeGrid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-cs9/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-cs9" %}

> * Filtering can be applied and cleared by using [filterByColumn](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filter/#filterbycolumn) and [clearFiltering](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filter/#clearfiltering) methods.
> * To disable filtering for a particular column, set [columns.allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#allowfiltering) to false.

## Filter hierarchy modes

The TreeGrid component offers support for a variety of filtering modes through the [filterSettings.hierarchyMode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettingsModel/#hierarchymode) property. By utilizing these filter hierarchy modes, the TreeGrid offers flexibility in displaying filtered records based on their parent-child relationships, allowing customization of the filtering behavior according to specific requirements.

The following are the types of filter modes available in the TreeGrid:

* **Parent** : 
      * This is the **default** filter hierarchy mode in TreeGrid. 
      * Filtered records are displayed along with their parent records. 
      * If a filtered record has no parent record, only the filtered record is displayed.

* **Child** : 
      * Filtered records are displayed along with their child records.
      * If a filtered record has no child record, only the filtered record is displayed.

* **Both** : 
      * Filtered records are displayed along with both their parent and child records.
      * If a filtered record has neither parent nor child records, only the filtered record is displayed.

* **None** : 
      * Only the filtered records are displayed.

The following demo illustrates filtering records with different hierarchy modes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs10/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-cs10/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-cs10" %}

## Initial filter

To apply an initial filter, specify the filter criteria using the [predicate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/predicate/) object in [filterSettings.columns](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettingsModel/#columns). The `predicate` object represents the filtering condition and contains properties such as field, operator, and value.

Here is an example of how to configure the initial filter using the `predicate` object:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-cs11/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-cs11" %}

### Initial filter with multiple values for same column

In the TreeGrid component, an initial filter containing multiple values for a particular column can be established, which helps preset filter conditions for a specific column using multiple values. This functionality allows displaying filtered records in the TreeGrid right after the TreeGrid is initially loaded.

To apply the filter with multiple values for same column at initial rendering, set the filter [predicate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/predicate/) object in [filterSettings.columns](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettingsModel/#columns).

The following example demonstrates how to perform an initial filter with multiple values for same **taskName** column using `filterSettings.columns` and `predicate`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs12/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-cs12/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-cs12" %}

### Initial filter with multiple values for different columns 

By applying an initial filter with multiple values for different columns in the TreeGrid, predefined filter settings can be set for each column. This results in filtered records of the TreeGrid right after the TreeGrid is initially loaded.

To apply the filter with multiple values for different column at initial rendering, set the filter [predicate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/predicate/) object in [filterSettings.columns](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettingsModel/#columns).

The following example demonstrates how to perform an initial filter with multiple values for different **Task ID** and **Task Name** columns using `filterSettings.columns` and `predicate`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs13/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-cs13/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-cs13" %}

## Filter operators

The Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid component provides various filter operators that can be used to define filter conditions for columns. The filter operator for a column can be defined using the [operator](https://ej2.syncfusion.com/angular/documentation/api/treegrid/predicateModel/#operator) property in the [filterSettings.columns](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettings/#columns) object.

The available operators and its supported data types are:

Operator |Description |Supported Types
-----|-----|-----
startsWith |Checks whether a value begins with the specified value. |String
endsWith |Checks whether a value ends with specified value. |String
contains |Checks whether a value contains with specified value. |String
doesnotstartwith |Checks whether the value does not begin with the specified value. |String
doesnotendwith |Checks whether the value does not end with the specified value. |String
doesnotcontain |Checks whether the value does not contain the specified value. |String
equal |Checks whether a value equal to specified value. |String &#124; Number &#124; Boolean &#124; Date
notEqual |Checks whether a value not equal to specified value. |String &#124; Number &#124; Boolean &#124; Date
greaterThan |Checks whether a value is greater than with specified value. |Number &#124; Date
greaterThanOrEqual|Checks whether a value is greater than or equal to specified value. |Number &#124; Date
lessThan |Checks whether a value is less than with specified value. |Number &#124; Date
lessThanOrEqual |Checks whether a value is less than or equal to specified value. |Number &#124; Date
isnull |Returns the values that are null. |String &#124; Number &#124; Date
isnotnull |Returns the values that are not null. |String &#124; Number &#124; Date
isempty |Returns the values that are empty. |String
isnotempty |Returns the values that are not empty. |String
between|Filter the values based on the range between the start and end specified values. |Number &#124; Date

### Change default filter operator for particular column

The TreeGrid component provides the flexibility to change the default filter operator for a particular column. By default, the filter operator for string-type columns is **startsWith**, for numerical-type columns is **equal**, and for boolean-type columns is also **equal**. However, the filter operator can be customized to better match the nature of the data in a specific column. This can be achieved using the [operators](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettingsModel/#operators) property within the [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#filtersettings) configuration.

Here's an example that demonstrates how to change the default filter operator column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs14/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-cs14/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="dataSource.ts" %}
{% include code-snippet/treegrid/filtering-cs14/src/dataSource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-cs14" %}

## Prevent filtering for particular column

In the TreeGrid, filtering can be prevented for a specific column by utilizing the [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowfiltering) property of the column object and setting it to false. This feature is useful when filtering options need to be disabled for a particular column.

Here's an example that demonstrates how to remove the filter bar for the taskName column in the TreeGrid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs15/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-cs15/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-cs15" %}

## Handling filtering at server end based on hierarchy modes 

In the TreeGrid component, filtering actions can be executed using the remote data binding feature. This guide provides step-by-step instructions on how to carry out filtering actions with remote data binding, focusing on server-side handling based on hierarchy modes.

When implementing filtering with remote data in the TreeGrid, it's essential to manage the server-side logic for handling the filtered records according to the filter hierarchy mode.

For further information about the filter hierarchy mode, refer to [this section](https://ej2.syncfusion.com/angular/documentation/treegrid/filtering/filtering#filter-hierarchy-modes).

In the following code example, different filter hierarchy modes are handled on the server side. Within the dropdown, the hierarchy mode can be changed. Using the [addParams](https://ej2.syncfusion.com/documentation/api/data/query/#addparams) method, the hierarchy mode is passed to the server side. Based on the hierarchy mode, the records are filtered using the `PerformFiltering` method.

```typescript

import { Component, ViewChild } from '@angular/core';
import { DataManager, Query, UrlAdaptor } from '@syncfusion/ej2-data';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';
@Component({
  selector: 'app-root',
  template: `<div style="padding-top: 7px; display: inline-block">Hierarchy Mode
               <ejs-dropdownlist (change)='onChange($event)'  [dataSource]='dropData' value='Parent' [fields]='fields'></ejs-dropdownlist>
             </div>

             <ejs-treegrid #treegrid [dataSource]='data' [allowPaging]=true [allowFiltering]=true  [treeColumnIndex]='1' height='400' idMapping='TaskID' parentIdMapping='ParentValue' hasChildMapping='isParent' >
                <e-columns>
                  <e-column field='TaskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                  <e-column field='TaskName' headerText='Task Name' width='180'></e-column>
                  <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
                  </e-columns>
              </ejs-treegrid>
 `,

})
export class AppComponent {
  @ViewChild('treegrid')
  public treeGridObj?: TreeGridComponent;

  public dropData?: Object[] = [
    { id: 'Parent', mode: 'Parent' },
    { id: 'Child', mode: 'Child' },
    { id: 'Both', mode: 'Both' },
    { id: 'None', mode: 'None' },
  ];
  public fields?: Object = { text: 'mode', value: 'id' };

  public data: DataManager = new DataManager({
    adaptor: new UrlAdaptor,
    url: "Home/Datasource",
  });
  onChange(e: ChangeEventArgs): any {
   let mode: any = <string>e.value;
        (this.treeGridObj as TreeGridComponent).filterSettings.hierarchyMode = mode;

        var param = (this.treeGridObj as TreeGridComponent).query.params;
        var filterParam_inx = param.findIndex(x => x.key == 'filter_mode');

        (this.treeGridObj as TreeGridComponent).query.params = param.splice(filterParam_inx);
   
        (this.treeGridObj as TreeGridComponent).query.addParams("filter_mode", mode);
        this.treeGridObj?.clearFiltering();
  }
}

```

Here's a code snippet demonstrating server-side handling of filtering action:

```
 public class ExtDataManagerRequest : DataManagerRequest
 {
     public string filter_mode { get; set; } = "Parent";

 }
 public ActionResult DataSource(ExtDataManagerRequest dm)
 {
     List<TreeData> data = new List<TreeData>();
     data = TreeData.GetTree();
     DataOperations operation = new DataOperations();
     IEnumerable<TreeData> DataSource = data;
     
     if (!(dm.Where != null && dm.Where.Count > 1))
     {
         DataSource = operation.PerformFiltering(DataSource, dm.Where, "and");

     }
    
     if (dm.Search != null && dm.Search.Count > 0) // Searching
     {
         DataSource = operation.PerformSearching(DataSource, dm.Search);
     }
     if (dm.Sorted != null && dm.Sorted.Count > 0 && dm.Sorted[0].Name != null) // Sorting
     {
         DataSource = operation.PerformSorting(DataSource, dm.Sorted);
     }
     if (dm.Where != null && dm.Where.Count > 1) //filtering
     {
         if (dm.filter_mode == "Parent") {
             //Filter the current filter object
             DataSource = operation.PerformFiltering(DataSource, dm.Where[1].predicates, "and");

             //If the filtered data does not contain parent records, create a filter query to filter the parent records of the filtered data.
             var parentPredicates = new List<WhereFilter>();
             //generate predicate of the equivalent parent record of filtered child record
             var parentDataPredicate = new WhereFilter() { Field = "TaskID", value = DataSource.ToList<TreeData>().First().ParentValue, Operator = "equal" };  
             parentPredicates.Add(parentDataPredicate);
             
             var parentData = operation.PerformFiltering(TreeData.tree, parentPredicates, "and");
            
             // concate the parent and filtered records
             DataSource = (DataSource.Cast<TreeData>()).Concat((IEnumerable<TreeData>)parentData);  

         }

         else if (dm.filter_mode == "Child" || dm.filter_mode == "Both") {
             //Filter the current filter object
             DataSource = operation.PerformFiltering(DataSource, dm.Where[1].predicates, "and");  //filter the child records by passing the query
             
             var parentPredicates = new List<WhereFilter>();
             //generate predicate of the equivalent parent record of filtered child record
             var parentDataPredicate = new WhereFilter() { Field = "TaskID", value = DataSource.ToList<TreeData>().First().ParentValue, Operator = "equal" };                       parentPredicates.Add(parentDataPredicate);
             
             var parentData = operation.PerformFiltering(TreeData.tree, parentPredicates, "and");
             
             var childData = operation.PerformFiltering(parentData, dm.Where[1].predicates, "and");
            
             if (parentData.ToList().Count() > 0 && dm.filter_mode == "Both")
             {// concate the parent and filtered records
                 DataSource = (DataSource.Cast<TreeData>()).Concat((IEnumerable<TreeData>)parentData);   
             }
             else if (parentData.ToList().Count() > 0 && dm.filter_mode == "Child")
             {// concate the parent and child filtered records

                 DataSource = (DataSource.Cast<TreeData>()).Concat((IEnumerable<TreeData>)childData);                       }
             else if (parentData.ToList().Count() == 0)
             {
                 var childparentPredicates = new List<WhereFilter>();
                 //generate predicate of the  parent record from filtered record
                 var childparentDataPredicate = new WhereFilter() { Field = "ParentValue", value = null, Operator = "equal" };
                 childparentPredicates.Add(childparentDataPredicate);
                 var parent_Data = operation.PerformFiltering(DataSource, childparentPredicates, "and");
                 //Filter the all the child records
                 var child_Data = TreeData.GetTree().ToList().Where(item => item.ParentValue == parent_Data.ToList<TreeData>().First().TaskID);
                //Concate parnet and child records
                 DataSource = child_Data.Concat((IEnumerable<TreeData>)parent_Data);
             }
         }
         else if(dm.filter_mode =="None")
         {
             //Filter the current filter object
             DataSource = operation.PerformFiltering(DataSource, dm.Where[1].predicates, "and");  //filter the child records by passing the query

         }
     }

     int count = DataSource.ToList<TreeData>().Count;
    
     if (dm.Skip != 0)
     {
         DataSource = operation.PerformSkip(DataSource, dm.Skip);   //Paging
     }
     if (dm.Take != 0)
     {
         DataSource = operation.PerformTake(DataSource, dm.Take);
     }
     return dm.RequiresCounts ? Json(new { result = DataSource, count = count }) : Json(DataSource);

 }

```

## Wildcard and LIKE operator filter

**Wildcard** and **LIKE** filter operators filter the value based on the given string pattern, and they apply to string-type columns. But they work slightly differently.

### Wildcard filtering

The **Wildcard** filter can process one or more search patterns using the "*" symbol, retrieving values matching the specified patterns.

* The **Wildcard** filter option is supported for the TreeGrid that has all search options.

**For example:**

Operator |Description
-----|-----
a*b |Everything that starts with "a" and ends with "b".
a* |Everything that starts with "a".
*b |Everything that ends with "b".
*a* |Everything that has an "a" in it.
*a*b* |Everything that has an "a" in it, followed by anything, followed by a "b", followed by anything.

### LIKE filtering

The **LIKE** filter can process single search patterns using the "%" symbol, retrieving values matching the specified patterns. The following TreeGrid features support LIKE filtering on string-type columns:

* Filter Menu
* Filter Bar with the [filterSettings.showFilterBarOperator](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettingsModel/#showfilterbarstatus) property enabled on the TreeGrid [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettings/).
* Custom Filter of Excel filter type.

**For example:**

Operator |Description
-----|-----
%ab% |Returns all the value that are contains "ab" character.
ab% |Returns all the value that are ends with "ab" character.
%ab |Returns all the value that are starts with "ab" character.

>By default, the TreeGrid uses different filter operators for different column types. The default filter operator for string type columns is **startsWith**, for numerical type columns is **equal**, and for boolean type columns is also **equal**.

## Diacritics filter

The diacritics filter feature in the TreeGrid is useful when working with text data that includes accented characters (diacritic characters). By default, the TreeGrid ignores these characters during filtering. However, if diacritic characters need to be considered in the filtering process, this feature can be enabled by setting the [filterSettings.ignoreAccent](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettingsModel/#ignoreaccent) property to true using the [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettings/).

Consider the following sample where the `ignoreAccent` property is set to true in order to include diacritic characters in the filtering process:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs16/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-cs16/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-cs16" %}

## Filtering with case sensitivity

The TreeGrid provides the flexibility to enable or disable case sensitivity during filtering. This feature is useful when controlling whether filtering operations should consider the case of characters. It can be achieved by using the [enableCaseSensitivity](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#enablecasesensitivity) property within the [filterSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/) of the grid object through the TreeGrid instance.

Below is an example code demonstrating how to enable or disable case sensitivity while filtering:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs17/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-cs17/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-cs17" %}

## Enable different filter dialog for a column

The TreeGrid offers the flexibility to customize filtering behavior for different columns by enabling various types of filters such as **Menu**, **Excel**. This feature allows tailoring the filtering experience to suit the specific needs of each column in the TreeGrid. For example, a menu-based filter might be preferred for a task name column, an Excel-like filter for a Start date column. 

It can be achieved by adjusting the [column.filter.type](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#filter) property based on requirements.

Here's an example where the menu filter is enabled by default for all columns, but the filter types can be dynamically modified through a dropdown:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs18/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-cs18/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-cs18" %}

> [View the GitHub sample demonstrating different filter dialogs in a TreeGrid column.](https://github.com/SyncfusionExamples/How-to-Work-with-Filtering-Options-in-Angular-Tree-Grid/)

## Filter grid programmatically with single and multiple values using method 

Programmatic filtering in the TreeGrid with single and multiple values allows applying filters to specific columns in the TreeGrid without relying on interactions through the interface.

This can be achieved by utilizing the [filterByColumn](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#filterbycolumn) method of the TreeGrid.

The following example demonstrates how to programmatically filter the TreeGrid using single and multiple values for the **taskID** and **taskName** columns. This is accomplished by calling the `filterByColumn` method within an external button click function.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs19/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-cs19/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs19/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-cs19" %}

## How to get filtered records

Retrieving filtered records in the TreeGrid is essential when working with data that matches the currently applied filters. This can be achieved using available properties in the TreeGrid component.

**1. Using the Filtered result property**

The `filteredResult` property of filter module serves to obtain an array of records that correspond to the currently applied filters on the TreeGrid.

This property retrieves an array of records that match the currently applied filters on the TreeGrid by leveraging the filter module.

Below is an example demonstrating how to retrieve filtering data in a TreeGrid using the `filteredResult` property:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs20/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-cs20/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs20/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-cs20" %}

**2. Using the properties in the FilterEventArgs object**

Alternatively, the properties available in the [FilterEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/filterEventArgs/) object can be used to obtain the filter record details.

* [columns](https://ej2.syncfusion.com/angular/documentation/api/grid/filterEventArgs/#columns): This property returns the collection of filtered columns.

* [currentFilterObject](https://ej2.syncfusion.com/angular/documentation/api/grid/filterEventArgs/#currentfilterobject): This property returns the object that is currently filtered.

* [currentFilteringColumn](https://ej2.syncfusion.com/angular/documentation/api/grid/filterEventArgs/#currentfilteringcolumn): This property returns the column name that is currently filtered.

To access these properties, use the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actioncomplete) event handler as shown below:

```typescript
actionComplete(args: FilterEventArgs) {
    var column = args.columns;
    var object = args.currentFilterObject;
    var name = args.currentFilteringColumn;
}
```

## Clear filtering using methods

The TreeGrid provides a method called [clearFiltering](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#clearfiltering) to clear the filtering applied to the TreeGrid. This method is used to remove the filter conditions and reset the TreeGrid to its original state. 

Here's an example of how to clear the filtering in a TreeGrid using the `clearFiltering` method:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs21/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-cs21/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs21/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-cs21" %}

## Filtering events

Filtering events allow customizing the behavior of the TreeGrid when filtering is applied. Filtering can be prevented for specific columns, messages can be shown, or other actions can be performed to suit application needs.

To implement filtering events in the TreeGrid, the available events such as [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin) and [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actioncomplete) can be utilized. These events allow intervening in the filtering process and customizing it as needed.

In the given example, the filtering is prevented for **duration** column during `actionBegin` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, FilterService  } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit,ViewChild} from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    imports: [
    TreeGridAllModule,
    ],
    providers: [FilterService],
    standalone: true,
    selector: 'app-container',
    template: `<div id='message' style='color:red'>{{message}}</div>
                <ejs-treegrid #treegrid id='treegrid' [dataSource]='data' [treeColumnIndex]='1' height='275' [allowFiltering]='true' childMapping='subtasks' (actionBegin)="actionBegin($event)" (actionComplete)="actionComplete($event)">
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' type='date' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

     @ViewChild('treegrid')
     public treegrid:TreeGridComponent | undefined;
      public data?: Object[];
      public message: string ='';
    ngOnInit(): void {
        this.data = sampleData;
    }

    actionBegin(args: any) {
      if (args.requestType == 'filtering' && args.currentFilteringColumn == 'duration') {
          args.cancel = true;
          this.message = 'The ' + args.type + ' event has been triggered and the ' + args.requestType + ' action is cancelled for ' + args.currentFilteringColumn +' column.';
      }
  }

  actionComplete(args: any) {
      if (args.requestType == 'filtering' && args.currentFilteringColumn) {
          this.message = 'The ' + args.type + ' event has been triggered and the ' + args.requestType + ' action for the ' + args.currentFilteringColumn + ' column has been successfully executed';
      } else {
          this.message = '';
      }
  }
}

{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/treegrid/filtering-cs22/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs22/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/filtering-cs22" %}