---
layout: post
title: Integrate pager component with listview in Angular Listview component | Syncfusion
description: Learn here all about Integrate pager component with listview in Syncfusion Angular Listview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Integrate pager component with listview 
documentation: ug
domainurl: ##DomainURL##
---

# Integrate pager component with listview in Angular Listview component

The first and foremost step is to obtain the `Pager` component from `Grid`. Install the ej2-angular-grids package using the following command.

```shell
npm install @syncfusion/ej2-angular-grids --save
```

Import the Pager to the ListView sample which has been created.

```shell
import { Pager } from "@syncfusion/ej2-angular-grids";
```

The [`totalRecordsCount`](https://ej2.syncfusion.com/angular/documentation/api/pager/#totalrecordscount) property of the Pager must be specified whenever using this particular component. By using [`pageSize`](https://ej2.syncfusion.com/angular/documentation/api/pager/#pagesize) property, the number of list items to be displayed is made available. The [`pageCount`](https://ej2.syncfusion.com/angular/documentation/api/pager/#pagecount) property allows the user to specify the visibility of the page numbers accordingly. Since the paging sample in the upcoming code snippet uses these three properties, the explanation provided here are minimal and to the point. For further API concerns in Pager component, [click here](https://ej2.syncfusion.com/angular/documentation/api/pager/).

With the help of the [`query`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#query) property of ListView, the user can specify the number of records to be displayed in the current page.

The `query` property helps in splitting the entire datasource based on the user’s convenience. In the sample provided below, when clicking the next button in pager, it fetches the datasource based on the page size and the current page of the Pager component.

The [`headerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#headertemplate) and the [`template`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#template) property of ListView is defined within ng-template. The required styles can be changed here accordingly.

```typescript
public clickevent(args) {
  this.query = new Query().range((args.currentPage - 1) * this.pagesize, (args.currentPage * this.pagesize));
}
```

In the above code snippet, the event stores the [`currentPage`](https://ej2.syncfusion.com/angular/documentation/api/pager/#currentpage) value, and the datasource which is to be displayed in the next page is obtained.

Note: When `pageSize` isn't mentioned, it defaults to 12 records per page.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/paging-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/listview/paging-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/paging-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/paging-cs1" %}
