---
layout: post
title: Indent in Angular TreeGrid component | Syncfusion
description: Learn here all about Indent in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Indent 
documentation: ug
domainurl: ##DomainURL##
---

# Indent and outdent in Angular TreeGrid component

The Syncfusion Angular TreeGrid component provides built-in support for indenting and outdenting rows, allowing you to easily adjust the hierarchy level of rows within the tree grid.

**Indent** - The indent feature moves the selected row to a deeper hierarchical level within the tree grid, indenting it by one level of hierarchy. The indent action moves the selected row as the last child of its previous row.

**Outdent** - The outdent feature moves the selected record up by one level of hierarchy within the tree grid. The outdent action moves the selected row as a sibling to its parent row.

To utilize the indent and outdent functionality, inject the **RowDDService** in the provider section of the **AppModule**. This service is responsible for handling the indent and outdent operations in the TreeGrid component.

The tree grid toolbar includes built-in items for executing indent and outdent actions. These items can be defined using the toolbar property.

The following demo illustrates how to enable indent and outdent functionalities in the tree grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/indent-outdent-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/indent-outdent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/indent-outdent-cs1" %}

## Indent/Outdent a row programmatically

You can programmatically change the hierarchy level of a record using the [indent](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#indent) and [outdent](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#outdent) methods provided by the TreeGrid component.

Before performing the indent or outdent action, you need to select the row. This can be done using the [selectRow](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#selectrow) method with the desired index of the row.

The following demo illustrates how to programmatically indent or outdent a row using a button click. Upon clicking the button, the row is selected using the `selectRow` method with the desired index, followed by either the `indent` or `outdent` method to perform the action.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/programmatic-indent-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/programmatic-indent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/programmatic-indent-cs1" %}

## Indent and outdent events 

In the Tree Grid, you can retrieve the details of indenting and outdenting actions using the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actioncomplete) event of the tree grid. Within the `actionComplete` event, you can access the indent/outdent details according to the action using the **args.requestType** property with values **indented** or **outdented**.

The following demo demonstrates how to retrieve the details of indenting and outdenting actions using the `actionComplete` event with the **args.requestType** property:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { sampleData } from './datasource';

@Component({
  selector: 'app-container',
  template: `
    <p id="message" style="color:red">{{message}}</p>
  <ejs-treegrid [dataSource]='data'  [treeColumnIndex]='1' height='270' childMapping='subtasks'  [toolbar]='toolbarOptions' (actionComplete)="actioncomplete($event)" >
                <e-columns>
                    <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='priority' headerText='Priority' textAlign='Right' width=90></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                 </e-columns>
            </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
  public data?: Object[];
  public toolbarOptions?: string[];
  public message: string = '';

  ngOnInit(): void {
    this.data = sampleData;
    this.toolbarOptions = ['Indent', 'Outdent'];
  }
  actioncomplete(args: any) {
    if (args.requestType == 'outdented') {
      this.message = 'Task ID ' + args.data[0].taskID + ' has been outdented';
    } else if (args.requestType == 'indented') {
      this.message = 'Task ID ' + args.data[0].taskID + ' has been indented';
    }
  }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/indent-outdent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/indent-outdent-cs2" %}

## Limitation 

* The indent/outdent feature does not support multiple row selection.