---
layout: post
title: Hide the expand collapse icon in parent row in Angular Grid component | Syncfusion
description: Learn here all about Hide the expand collapse icon in parent row in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Hide the expand collapse icon in parent row 
documentation: ug
domainurl: ##DomainURL##
---

# Hide the expand collapse icon in parent row in Angular Grid component

By default, the expand/collapse icon will be visible even if the child grid is empty.

You can use [`rowDataBound`](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowdatabound) event to hide the icon when there are no records in child grid.

To hide the expand/collapse icon in parent row when no records in child grid, follow the given steps:

**Step 1**: Create CSS class with custom style to override the default style of Grid.

```css
    .e-row[aria-selected="true"] .e-customizedExpandcell {
        background-color: #e0e0e0;
    }

    .e-grid.e-gridhover tr[role='row']:hover {
        background-color: #eee;
    }

```

**Step 2**: Add the CSS class to the Grid in the [`rowDataBound`](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowdatabound-) event handler of Grid.

```typescript
    public rowDataBound(args:any){
        let filter:string = args.data.EmployeeID;
        let childrecord: any = new DataManager(this.Grid.childGrid.dataSource).executeLocal(new Query().where('EmployeeID', 'equal', parseInt(filter), true));
        if(childrecord.length == 0) {
            //here hide which parent row has no child records
            args.row.querySelector('td').innerHTML=' ';
            args.row.querySelector('td').className = 'e-customizedExpandcell';
        }
    }

```

In the below demo, the expand/collapse icon in the row with **EmployeeID** as **1** is hidden as it does not have record in child Grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/template-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/template-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/template-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/template-cs4" %}
