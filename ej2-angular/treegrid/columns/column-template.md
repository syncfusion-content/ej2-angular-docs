---
layout: post
title: Column template in Angular Treegrid component | Syncfusion
description: Learn here all about Column template in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column template 
documentation: ug
domainurl: ##DomainURL##
---

# Column template in Angular Treegrid component

The column [`template`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#template) has options to display custom element instead of a field value in the column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/column-template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/column-template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/column-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/column-template-cs1" %}

> TreeGrid actions such as editing, filtering and sorting etc. will depend upon the column [`field`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#field). If the [`field`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#field) is not specified in the template column, the treegrid actions cannot be performed.

## Using condition template

You can render the template elements based on condition.

In the following code, checkbox is rendered based on `Approved` field value.

```
   <e-column headerText='Approved' width='150' textAlign='Center'>
             <ng-template #template let-data>
                  <div *ngIf="data.approved; else elseblock">
                      <input type="checkbox" checked>
                  </div>
              </ng-template>
              <ng-template #elseblock><input type="checkbox"></ng-template>
        </e-column>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs13/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs13/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs13" %}