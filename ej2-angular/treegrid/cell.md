---
layout: post
title: Cell in Angular TreeGrid component | Syncfusion
description: Learn here all about Cell in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Cell 
documentation: ug
domainurl: ##DomainURL##
---

# Cell in Angular TreeGrid component

In the Syncfusion Angular TreeGrid, a **cell** refers to an individual data point or a unit within a tree grid column that displays data. It represents the intersection of a row and a column, and it contains specific information associated with that row and column. Each cell can display text, numbers, or other content related to the data it represents. 

The TreeGrid component allows you to customize the appearance and behavior of cells using various features and options. You can define templates, format cell values, enable or disable editing, and perform various other operations on the cells to create interactive and informative tree grids in your web applications.

## Displaying the HTML content

Displaying HTML content in a Tree Grid can be useful in scenarios where you want to display formatted content, such as images, links, or tables, in a tabular format. TreeGrid component allows you to display HTML tags in the Tree Grid header and content. By default, the HTML content is encoded to prevent potential security vulnerabilities. However, you can leverage the [disableHtmlEncode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#disablehtmlencode) property and set its value to false. Doing so will disable HTML encoding, allowing HTML tags to be rendered as plain text within the Tree Grid. This feature is useful when you want to display HTML content in a tree grid cell.

In the following example, the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) component is added  to enable and disable the `disableHtmlEncode` property. When the switch is toggled, the [change](https://ej2.syncfusion.com/angular/documentation/api/switch/#change) event is triggered and the `disableHtmlEncode` property of the column is updated accordingly. The [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#refreshcolumns) method is called to refresh the tree grid and display the updated content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/cell-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/cell-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/cell-cs1" %}

> * The [disableHtmlEncode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#disablehtmlencode) property disables HTML encoding for the corresponding column in the tree grid. 
> * If the property is set to **true**, any HTML tags in the column's data will be displayed. 
> * If the property is set to **false**, the HTML tags will be removed and displayed as plain text.
> * Disabling HTML encoding can potentially introduce security vulnerabilities, so use caution when enabling this feature.
> * If [enableHtmlSanitizer](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#enablehtmlsanitizer) property of the tree grid is set to true, then the content is sanitized to prevent any potential security vulnerabilities.
> * You can also disable the `disableHtmlEncode` property of the column using [getColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid#getcolumns) method on [change](https://ej2.syncfusion.com/angular/documentation/api/switch/#change) event of Switch component. This is demonstrated in the below code snippet, 

```typescript
change(args) {
  if (args.checked) {
    this.treegrid.getColumns()[1].disableHtmlEncode = false;
  } else {
    this.treegrid.getColumns()[1].disableHtmlEncode = true;
  }
  this.treegrid.refresh();
}
```

## Autowrap the tree grid content

The auto wrap feature allows the cell content in the tree grid to wrap to the next line when it exceeds the boundary of the specified cell width. The cell content wrapping works based on the position of white space between words. To support the Autowrap functionality in the Tree Grid, you should set the appropriate [width](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#width) for the columns. The column width defines the maximum width of a column and helps to wrap the content automatically.

To enable auto wrap, set the [allowTextWrap](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowtextwrap) property to **true**. You can also configure the wrap mode by setting the [textWrapSettings.wrapMode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/textWrapSettings/#wrapmode) property.

Tree Grid provides the below three options for configuring:

* **Both** - This is the default value for `wrapMode`. With this option, both the tree grid **Header** and **Content** text is wrapped.
* **Header** - With this option, only the tree grid header text is wrapped.
* **Content** - With this option, only the tree grid content is wrapped.

The following example demonstrates how to set the `allowTextWrap` property to **true** and specify the wrap mode as **Content** by setting the `textWrapSettings.wrapMode` property. Also change the `textWrapSettings.wrapMode` property to **Content** and **Both** on changing the dropdown value using the [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#change) event of the DropDownList component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/cell-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/cell-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/cell-cs2" %}

> * If a column width is not specified, then the Autowrap of columns will be adjusted with respect to the tree grid's width.
> * If a column's header text contains no white space, the text may not be wrapped.
> * If the content of a cell contains HTML tags, the Autowrap functionality may not work as expected. In such cases, you can use the [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#headertemplate) and [template](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#template) properties of the column to customize the appearance of the header and cell content.

## Customize cell styles

Customizing the tree grid cell styles allows you to modify the appearance of cells in the Tree Grid control to meet your design requirements. You can customize the font, background color, and other styles of the cells. To customize the cell styles in the tree grid, you can use tree grid event, css, property or method support.

### Using event

To customize the appearance of the tree grid cell, you can use the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#querycellinfo) event of the tree grid. This event is triggered when each cell is rendered in the tree grid, and provides an object that contains information about the cell. You can use this object to modify the styles of the cell.

The following example demonstrates how to add a `queryCellInfo` event handler to the tree grid. In the event handler, checked whether the current column is **progress** field and then applied the appropriate CSS class to the cell based on its value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/cell-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/cell-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/cell-cs3" %}

> * The [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#querycellinfo) event is triggered for every cell of the tree grid, so it may impact the performance of the tree grid when used to modify a large number of cells.

### Using CSS

You can apply styles to the cells using CSS selectors. The Tree Grid provides a class name for each cell element, which you can use to apply styles to that specific cell or cells in a particular column. The `e-rowcell` class is used to style the row cells, and `e-cellselectionbackground` class is used to change the background color of the selected cell.

```CSS
.e-treegrid td.e-cellselectionbackground {
  background: #9ac5ee;
  font-style: italic;
}
```

The following example demonstrates how to customize the appearance of a specific cell when it is selected in the tree grid on selection using `className`. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/cell-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/cell-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/cell-cs4" %}

### Using property

To customize the style of the tree grid cells, define [customAttributes](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#customattributes) property to the column definition object. The `customAttributes` property takes an object with the name-value pair to customize the CSS properties for tree grid cells. You can also set multiple CSS properties to the custom class using the customAttributes property.

```CSS
.e-customcss {
        background: #d7f0f4;
    }
```
Here, setting the customAttributes property of the **taskID** column to an object that contains the CSS class 'e-customcss'. This CSS class will be applied to all the cells in the **taskID** column of the tree grid.

```typescript
<e-column field='taskID' headerText='Task ID' [customAttributes]="{class: 'e-customcss'}" textAlign='Right' width=90></e-column>
                        
```
The following example demonstrates how to customize the appearance of the **taskID** and **startDate** columns using custom attributes. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/cell-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/cell-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/cell-cs5" %}

> Custom attributes can be used to customize any cell in the tree grid, including header and footer cells.

### Using methods

The Tree Grid provides below methods to customize the appearance of the tree grid columns header and cell:

1. [getHeaderContent](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getheadercontent): The `getHeaderContent` method is used to customize the appearance of the column header in the tree grid and accessing the header element using the `querySelector` method and applying the style using the style property of the cell element.

2. [getCellFromIndex](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcellfromindex): The `getCellFromIndex` method is used to customize the appearance of a specific cell in the tree grid by specifying the index of the row and column for which you want to customize the appearance.

The following example demonstrates how to use [getColumnHeaderByIndex](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnheaderbyindex) and [getCellFromIndex](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcellfromindex) methods to customize the appearance of the **startDate** column header and specific cell inside the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#databound) event of the tree grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/cell-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/cell-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/cell-cs6" %}

> Make sure to pass the correct row and column indices to [getCellFromIndex](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcellfromindex) method, or else the appearance of the wrong cell might get customized.

## Clip mode

The clip mode feature is useful when you have a long text or content in a tree grid cell, which overflows the cell's width or height. It provides options to display the overflow content by either truncating it, displaying an ellipsis or displaying an ellipsis with a tooltip. You can enable this feature by setting [columns.clipMode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#clipmode) property to one of the below available options.

There are three types of `clipMode` available:

* **Clip**: Truncates the cell content when it overflows its area.
* **Ellipsis**: Displays ellipsis when the cell content overflows its area.
* **EllipsisWithTooltip**: Displays ellipsis when the cell content overflows its area, also it will display the tooltip while hover on ellipsis is applied. Also it will display the tooltip while hover on ellipsis is applied.

The following example demonstrates, how to set the `clipMode` property to **Clip** , **Ellipsis** and **EllipsisWithTooltip** for the **Priority** column, on changing the dropdown value using the [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#change) event of the `DropDownList` component. The [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#refreshcolumns) method is used to refresh the tree grid and display the updated content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/cell-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/cell-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/cell-cs7" %}

> * By default, [columns.clipMode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#clipmode) value is **Ellipsis**.
> * If you set the [width](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#width) property of a column, the clip mode feature will be automatically applied to that column if the content exceeds the specified width.
> * Be careful when using the Clip mode, as it may result in important information being cut off. It is generally recommended to use the Ellipsis or EllipsisWithTooltip modes instead.

## Tooltip

The Tree Grid allows you to display information about the tree grid columns to the user when they hover over them with the mouse.

### Render bootstrap tooltip in grid cells

The TreeGrid component allows rendering Bootstrap tooltips in the cells. To enable this feature, you need to add the Bootstrap CDN link and use the [ngAfterViewChecked](https://angular.io/api/core/AfterViewChecked) method to initialize the tooltip. 

This is demonstrated in the sample code below which shows how to enable Bootstrap tooltip for the **priority** field using `ng-template` in tree grid cells,

Step 1: Install the Bootstrap and jQuery package in your application using the following commands and add the script and style of the respective packages in the angular.json file,

To install bootstrap, use the following command.

```bash
npm install @ng-bootstrap/ng-bootstrap
```

To install jQuery, use the following command.

```bash
npm install jquery
```

```json

"styles": 
[
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css",
  "node_modules/@syncfusion/ej2-material-theme/styles/material.css"
],
"scripts": ["node_modules/jquery/dist/jquery.min.js"]

```

Step 2: Add the CDN link of Boostrap in the index.html file. Place the `link` tag in the `head` for the CSS, and the `script` tag for the JavaScript bundle before the closing `body`. 

```html

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js" integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js" integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ" crossorigin="anonymous"></script>

```

Step 3: The following code demonstrates how to render Bootstrap tooltip for the **priority** field with `ng-template` on tree grid cells using `ngAfterViewChecked` method,

```typescript

{% raw %}

import { Component, OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import { sampleData } from './datasource';
import { AfterViewChecked, } from '@angular/core';
import 'bootstrap';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
declare var $: any;

@Component({
    selector: 'app-container',
    encapsulation:ViewEncapsulation.None,
    template: ` <ejs-treegrid #treegrid [dataSource]='data' height='275' gridLines='Both' [treeColumnIndex]='1' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=150></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                        <e-column field='priority' headerText='Priority' textAlign='Right' width=80>
                            <ng-template #template let-data>
                                <div class="row clearfix">
                                    <div class="col-md-2" style="text-align:right">
                                        <div data-toggle="tooltip" data-container="body" [title]="data.priority" data-placement="left" data-delay='{"show":"800", "hide":"300"}'>
                                            {{data.priority}}
                                        </div>
                                    </div>
                                </div>
                            </ng-template>
                        </e-column>
                    </e-columns>
                </ejs-treegrid>`,
   
})
export class AppComponent implements AfterViewChecked {

    public data?: Object[]= sampleData;
    
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
    ngAfterViewChecked() {
        $('[data-toggle="tooltip"]').tooltip();
    }   
}
{% endraw%}

```

> * The Bootstrap CDN link must be added to the HTML file.
> * The `ngAfterViewChecked` method is called after the component's view has been fully initialized, so it is a good place to initialize the Bootstrap tooltip.

### Display custom tooltip for columns

The Tree Grid provides a feature to display custom tooltips for its columns using the [EJ2 Tooltip](https://ej2.syncfusion.com/angular/documentation/tooltip/getting-started) component. This allows you to provide additional information about the columns when hovering over the tree grid cells.

To enable custom tooltips for columns in the Tree Grid, you can render the Tree Grid control inside the Tooltip component and set the target as `.e-rowcell`. This will display the tooltip when hovering over the tree grid cells.

Change the tooltip content for the tree grid cells by using the following code in the [beforeRender](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#beforerender) event.

```typescript
 beforeRender(args): void {
    if (args.target.classList.contains('e-rowcell')) {
        // event triggered before render the tooltip on target element.
        this.tooltip.content = 'This is value "' + args.target.innerText + '" ';
    }
  }

```

The following example demonstrates how to customize the tooltip content for the tree grid cells by using the [beforeRender](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#beforerender) event of the EJ2 Tooltip component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/cell-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/cell-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/cell-cs8" %}

## Grid lines

The [gridLines](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#gridlines) in a tree grid are used to separate the cells with horizontal and vertical lines for better readability. You can enable the tree grid lines by setting the `gridLines` property to one of the following values:

| Modes | Actions |
|-------|---------|
| Both | Displays both the horizontal and vertical grid lines.|
| None | No grid lines are displayed.|
| Horizontal | Displays the horizontal grid lines only.|
| Vertical | Displays the vertical grid lines only.|
| Default | Displays grid lines based on the theme.|

The following example demonstrates how to set the `gridLines` property based on changing the dropdown value using the [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#change) event of the DropDownList component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/cell-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/cell-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/cell-cs9" %}

>By default, the tree grid renders with **Default** mode.

## See Also

[How to customize the expand/ collapse icon in tree grid](https://ej2.syncfusion.com/angular/documentation/treegrid/columns/tree-column#change-expand-and-collapse-icon)
[How to change indent space of tree column cell text](https://ej2.syncfusion.com/angular/documentation/treegrid/columns/tree-column#change-indent-space-of-tree-column-cell-text)
