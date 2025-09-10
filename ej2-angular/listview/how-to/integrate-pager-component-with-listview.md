---
layout: post
title: Integrate pager component in Angular ListView component | Syncfusion
description: Learn here all about Integrate pager component with ListView in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView 
documentation: ug
domainurl: ##DomainURL##
---

# Integrate pager component with ListView in Angular ListView component

To enable paging functionality in the Syncfusion Angular ListView component, integrate the `Pager` component from the Syncfusion Grid package. This allows users to navigate through large sets of list items efficiently.

Begin by installing the `ej2-angular-grids` package, which provides the Pager component:

```shell
npm install @syncfusion/ej2-angular-grids --save
```

Next, import the Pager into your ListView sample:

```typescript
import { Pager } from "@syncfusion/ej2-angular-grids";
```

The [`totalRecordsCount`](https://ej2.syncfusion.com/angular/documentation/api/pager/#totalrecordscount) property of the Pager must be specified whenever using this particular component. By using [`pageSize`](https://ej2.syncfusion.com/angular/documentation/api/pager/#pagesize) property, the number of list items to be displayed is made available. The [`pageCount`](https://ej2.syncfusion.com/angular/documentation/api/pager/#pagecount) property allows the user to specify the visibility of the page numbers accordingly. Since the paging sample in the upcoming code snippet uses these three properties, the explanation provided here are minimal and to the point. For further API concerns in Pager component, [click here](https://ej2.syncfusion.com/angular/documentation/api/pager/).

With the help of the [`query`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#query) property of ListView, the user can specify the number of records to be displayed in the current page.

To display the correct set of records for the current page, use the [`query`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#query) property of the ListView. This property enables you to fetch and display only the records relevant to the selected page.

When the Pager's page is changed, update the ListView's `query` property to fetch the appropriate data slice. The following code demonstrates how to handle the Pager's click event and update the ListView accordingly:

```typescript
public clickevent(args) {
  this.query = new Query().range((args.currentPage - 1) * this.pagesize, (args.currentPage * this.pagesize));
}
```

In this code, the  [`currentPage`](https://ej2.syncfusion.com/angular/documentation/api/pager/#currentpage) value from the Pager event is used to calculate the range of records to display in the ListView for the selected page.

> **Note:** If the `pageSize` property is not specified, the Pager defaults to displaying 12 records per page.

The [`headerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#headertemplate) and [`template`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#template) properties of the ListView can be defined using Angular's `ng-template` to customize the appearance of list items and headers. Adjust the styles as needed to match your application's requirements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/paging-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/paging-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/paging-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/paging-cs1" %}
