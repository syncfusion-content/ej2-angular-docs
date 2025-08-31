---
layout: post
title: Cell in Angular TreeGrid component | Syncfusion
description: Learn about cell customization, formatting, tooltips, and styling in the Syncfusion Angular TreeGrid, including clip mode, autowrap, and cell templates.
platform: ej2-angular
control: Cell 
documentation: ug
domainurl: ##DomainURL##
---

# Cell in Angular TreeGrid component

In the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid, a **cell** represents the intersection of a row and a column, displaying specific data associated with that row and column. Each cell can contain text, numbers, or other content relevant to the underlying data.

The TreeGrid component enables comprehensive customization of cell appearance and behavior. Features include templates, cell value formatting, editing capabilities, and interactive enhancements for building dynamic and informative TreeGrid applications.

## Displaying HTML content

Displaying HTML content in the TreeGrid is helpful when presenting formatted data such as images, links, or tables. By default, HTML content is encoded to prevent security vulnerabilities. To render HTML tags within cells, set the [disableHtmlEncode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#disablehtmlencode) property to **true** for the required column. Disabling encoding allows HTML tags to be rendered as HTML within the TreeGrid.

In the following example, the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) component is used to enable or disable the `disableHtmlEncode` property. Toggling the switch triggers the [change](https://ej2.syncfusion.com/angular/documentation/api/switch/#change) event, which updates the column property and calls the [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#refreshcolumns) method to update content rendering.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/cell-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/cell-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/cell-cs1" %}

> - The [disableHtmlEncode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#disablehtmlencode) property disables HTML encoding for the specified column.
> - If set to **false**, HTML tags in the column's data are rendered. If set to **true**, HTML tags are displayed as plain text.
> - Disabling HTML encoding may introduce security risks (such as XSS). Use [enableHtmlSanitizer](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#enablehtmlsanitizer) to mitigate vulnerabilities.
> - Column properties can be controlled at runtime via the [getColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid#getcolumns) method and [change](https://ej2.syncfusion.com/angular/documentation/api/switch/#change) events.

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

## Autowrap the TreeGrid content

The auto wrap feature ensures that cell content wraps to the next line when exceeding the defined cell width. Wrapping behavior is determined by available whitespace and column width settings.

To enable auto wrap, set the [allowTextWrap](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowtextwrap) property to **true**. The wrap behavior can be further defined by [textWrapSettings.wrapMode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/textWrapSettings/#wrapmode):
- **Both**: (default) Wraps header and content text.
- **Header**: Wraps only header text.
- **Content**: Wraps only content cells.

The following example demonstrates configuring `allowTextWrap` and dynamically changing wrap modes using the [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#change) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/cell-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/cell-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/cell-cs2" %}

> - Column width influences the auto wrap result. If not specified, wrapping adjusts to the TreeGrid's width.
> - If header text lacks whitespace, wrapping may not occur.
> - HTML tags within cell content may affect wrapping. For these cases, consider using [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#headertemplate) and [template](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#template).

## Customize cell styles

TreeGrid cell styling can be tailored using several approaches: event handlers, CSS classes, column property settings, and methods.

### Using event

To programmatically customize cell appearance as it renders, use the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#querycellinfo) event. This event provides cell context for custom CSS logic.

In the following example, a `queryCellInfo` event handler assigns custom classes to the **progress** field based on value:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/cell-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/cell-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/cell-cs3" %}

> Using `queryCellInfo` with a large dataset may impact performance, as the event triggers for each cell during rendering.

### Using CSS

The TreeGrid assigns CSS classes to each cell, enabling direct styling. Use `.e-rowcell` to target row cells, and `.e-cellselectionbackground` for selected cells.

```css
.e-treegrid td.e-cellselectionbackground {
  background: #9ac5ee;
  font-style: italic;
}
```

The following example customizes selection appearance using a class name:

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

The [customAttributes](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#customattributes) property in a column definition applies custom attributes or class names to all cells in that column.

```css
.e-customcss {
  background: #d7f0f4;
}
```
```typescript
<e-column field='taskID' headerText='Task ID' [customAttributes]="{class: 'e-customcss'}" textAlign='Right' width=90></e-column>
```
The example below demonstrates custom styling for **taskID** and **startDate** columns:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/cell-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/cell-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/cell-cs5" %}

> Custom attributes can apply styles to content, header, and footer cells.

### Using methods

Use [getHeaderContent](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getheadercontent) to access and style column headers, or [getCellFromIndex](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcellfromindex) for specific cell styling.

The following example shows how to use [getColumnHeaderByIndex](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnheaderbyindex) and [getCellFromIndex](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcellfromindex) inside the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#databound) event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/cell-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/cell-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/cell-cs6" %}

> Ensure the correct row and column indices are provided to prevent styling the incorrect cell.

## Clip mode

When cell content exceeds cell width, the [columns.clipMode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#clipmode) property defines how overflow is handled:

- **Clip**: Truncates content beyond cell boundaries.
- **Ellipsis**: Shows an ellipsis for overflow content.
- **EllipsisWithTooltip**: Shows ellipsis and displays the full content as a tooltip on hover.

The following example configures the `clipMode` property and updates its value dynamically using the [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#change) event, with [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#refreshcolumns):

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/cell-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/cell-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/cell-cs7" %}

> - The default [columns.clipMode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#clipmode) is **Ellipsis**.
> - When setting [width](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#width), clip mode activates automatically if content overflows.
> - The “Clip” mode may cause information loss—prefer “Ellipsis” or “EllipsisWithTooltip” for better accessibility.

## Tooltip

The TreeGrid supports contextual information via tooltips on cells and columns.

### Render Bootstrap tooltip in grid cells

To use Bootstrap tooltips, include the Bootstrap CSS and JavaScript via CDN or npm, then initialize the tooltip in Angular's `ngAfterViewChecked` lifecycle.

Install Bootstrap and jQuery:

```bash
npm install @ng-bootstrap/ng-bootstrap
npm install jquery
```

Update `angular.json`:

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css",
  "node_modules/@syncfusion/ej2-material-theme/styles/material.css"
],
"scripts": ["node_modules/jquery/dist/jquery.min.js"]
```

Add Bootstrap CDN links in `index.html` as needed.

Example code demonstrates tooltip initialization and template usage for cells:

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
{% endraw %}
```

> - Add the Bootstrap CDN link to the HTML file.
> - `ngAfterViewChecked` ensures tooltips initialize after view updates.

### Display custom tooltip for columns

Use the [EJ2 Tooltip](https://ej2.syncfusion.com/angular/documentation/tooltip/getting-started) component to render TreeGrid tooltips, setting the target to `.e-rowcell`. Update tooltip content in the [beforeRender](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#beforerender) event:

```typescript
beforeRender(args): void {
  if (args.target.classList.contains('e-rowcell')) {
      this.tooltip.content = 'This is value "' + args.target.innerText + '" ';
  }
}
```

The following example demonstrates customizing tooltip content with EJ2 Tooltip:

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

The [gridLines](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#gridlines) property controls the display of horizontal and vertical grid lines:

| Modes      | Actions                                                |
|------------|--------------------------------------------------------|
| Both       | Displays both horizontal and vertical grid lines.      |
| None       | No grid lines are displayed.                           |
| Horizontal | Shows only horizontal grid lines.                      |
| Vertical   | Shows only vertical grid lines.                        |
| Default    | Follows the theme's default grid line setting.         |

The example below demonstrates dynamic grid line selection via dropdown using the [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#change) event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/cell-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/cell-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/cell-cs9" %}

> By default, the TreeGrid uses **Default** mode for grid lines.

## See also

- [How to customize the expand/collapse icon in TreeGrid](https://ej2.syncfusion.com/angular/documentation/treegrid/columns/tree-column#change-expand-and-collapse-icon)
- [How to change indent space of tree column cell text](https://ej2.syncfusion.com/angular/documentation/treegrid/columns/tree-column#change-indent-space-of-tree-column-cell-text)
