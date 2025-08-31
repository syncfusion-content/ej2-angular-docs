---
layout: post
title: Cell Customization and Styling in Angular Grid component | Syncfusion
description: Learn here all about Cell customization, styling, and content management in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Cell 
documentation: ug
domainurl: ##DomainURL##
---

# Cell Customization and Styling in Angular Grid component

In the Syncfusion Angular Grid, a **cell** represents the intersection of a row and column, displaying specific data values. Each cell can contain text, numbers, HTML content, or custom templates. The Grid component provides comprehensive options to customize cell appearance, behavior, and content rendering to create interactive and visually appealing data presentations.

## Displaying the HTML content

The Grid component supports rendering HTML content within cells, enabling rich formatting such as images, links, styled text, and embedded components. By default, HTML content is encoded for security. To render HTML tags directly, set the [disableHtmlEncode](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#disablehtmlencode) property to **false** for specific columns.

The following example demonstrates HTML content rendering control using the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) component. The [change](https://ej2.syncfusion.com/angular/documentation/api/switch/#change) event toggles the [disableHtmlEncode](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#disablehtmlencode) property, and the [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/grid/#refreshcolumns) method updates the display.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-cell-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-cell-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-cell-cs3" %}

> * The [disableHtmlEncode](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#disablehtmlencode) property controls HTML encoding for specific columns in the grid.
> * When set to **false**, HTML tags in the column data render as formatted content.
> * When set to **true** (default), HTML tags display as plain text for security.
> * Disabling HTML encoding may introduce security vulnerabilities; use with caution and validate content sources.
> * The [enableHtmlSanitizer](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablehtmlsanitizer) property sanitizes HTML content when enabled to prevent security risks.
> * Alternative implementation using [getColumns](https://ej2.syncfusion.com/angular/documentation/api/grid#getcolumns) method:

```typescript
change(args) {
  if (args.checked) {
    this.grid.getColumns()[1].disableHtmlEncode = false;
  } else {
    this.grid.getColumns()[1].disableHtmlEncode = true;
  }
  this.grid.refresh();
}
```

## Autowrap the grid content

Auto wrap functionality automatically wraps cell content to multiple lines when it exceeds the specified column width. Content wrapping occurs at white space boundaries between words. To enable effective auto wrapping, define appropriate [width](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#width) values for columns.

Enable auto wrap by setting [allowTextWrap](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowtextwrap) to **true**. Configure the wrapping behavior using [textWrapSettings.wrapMode](https://ej2.syncfusion.com/angular/documentation/api/grid/textWrapSettings/#wrapmode) property.

Grid provides three wrap mode options:

* **Both** - Default value. Wraps both header and content text.
* **Header** - Wraps only column header text.
* **Content** - Wraps only cell content text.

The following example demonstrates auto wrap configuration with [allowTextWrap](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowtextwrap) set to **true** and [textWrapSettings.wrapMode](https://ej2.syncfusion.com/angular/documentation/api/grid/textWrapSettings/#wrapmode) set to **Content**. The DropDownList [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#change) event dynamically switches between wrap modes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/autowrap-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/autowrap-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/autowrap-cs1" %}

> * Without specified column widths, auto wrap adjusts content relative to the grid's total width.
> * Header text without white spaces may not wrap properly.
> * HTML content in cells may interfere with auto wrap functionality. Use [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#headertemplate) and [template](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) properties for custom HTML content rendering.

## Customize cell styles

Grid provides multiple approaches for customizing cell appearance including events, CSS classes, column properties, and methods. Choose the appropriate technique based on your styling requirements and performance considerations.

### Using event

The [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#querycellinfo) event enables dynamic cell styling during grid rendering. This event triggers for each cell, providing access to cell data, column information, and DOM elements for conditional formatting.

The following example demonstrates [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#querycellinfo) event usage to apply conditional styling to the **Freight** column based on cell values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-cell-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-cell-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-cell-cs1" %}

> * The [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#querycellinfo) event fires for every grid cell, potentially impacting performance with large datasets.

### Using CSS

Apply cell styles using CSS selectors targeting specific grid elements. The Grid generates predictable class names for styling row cells (`e-rowcell`) and selection backgrounds (`e-selectionbackground`).

```CSS
.e-grid td.e-cellselectionbackground {
  background: #9ac5ee;
  font-style: italic;
}
```

The following example demonstrates CSS-based cell styling for selected rows using custom class names.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-cell-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-cell-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-cell-cs12" %}

### Using property

The [customAttributes](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#customattributes) property applies CSS classes to specific columns. Define custom CSS classes and assign them through the column configuration for consistent styling across all cells in that column.

```CSS
.custom-css {
  background: #d7f0f4;
  font-style: italic;
  color: navy;
}
```

Configure the column with custom attributes:

```typescript
{
    field: 'ShipCity', headerText: 'Ship City', customAttributes: {class: 'custom-css'}, width: '120'
}
```

The following example demonstrates [customAttributes](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#customattributes) property usage for styling **OrderID** and **ShipCity** columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-cell-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-cell-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-cell-cs2" %}

> Custom attributes apply to all cells in the specified column, including header and content cells.

### Using methods

Grid provides programmatic methods for targeted cell and header customization:

1. [getColumnHeaderByIndex](https://ej2.syncfusion.com/angular/documentation/api/grid/#getcolumnheaderbyindex): Access and customize specific column headers by index position.

2. [getCellFromIndex](https://ej2.syncfusion.com/angular/documentation/api/grid/#getcellfromindex): Access and customize individual cells by specifying row and column indices.

The following example demonstrates method-based styling using [getColumnHeaderByIndex](https://ej2.syncfusion.com/angular/documentation/api/grid/#getcolumnheaderbyindex) and [getCellFromIndex](https://ej2.syncfusion.com/angular/documentation/api/grid/#getcellfromindex) within the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-cell-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-cell-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-cell-cs13" %}

> Ensure accurate row and column indices when using [getCellFromIndex](https://ej2.syncfusion.com/angular/documentation/api/grid/#getcellfromindex) to avoid styling incorrect cells.

## Clip Mode

Clip mode controls how cell content displays when it exceeds the available cell space. Configure content overflow behavior using the [columns.clipMode](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#clipmode) property with three available options:

* **Clip**: Truncates overflowing content without visual indicators.
* **Ellipsis**: Displays ellipsis (...) for overflowing content.
* **EllipsisWithTooltip**: Shows ellipsis with hover tooltip displaying full content.

The following example demonstrates clip mode functionality with dynamic switching using a DropDownList [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#change) event. The [refresh](https://ej2.syncfusion.com/angular/documentation/api/grid/#refresh) method applies the updated clip mode settings.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/clipmode-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/clipmode-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/clipmode-cs1" %}

> * Default [columns.clipMode](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#clipmode) value is **Ellipsis**.
> * Clip mode automatically applies when column [width](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#width) is specified and content exceeds that width.
> * **Clip** mode may hide important information; **Ellipsis** or **EllipsisWithTooltip** provide better user experience.

## Tooltip

Grid supports tooltip functionality for enhanced user experience when interacting with cell content. Two implementation approaches are available: Bootstrap integration for custom styling and native Syncfusion tooltip for consistent theming.

### Render bootstrap tooltip in grid cells

Integrate Bootstrap tooltips with grid cells for custom tooltip styling and behavior. This approach requires Bootstrap framework installation and configuration.

**Step 1**: Install Bootstrap and jQuery packages:

```bash
npm install @ng-bootstrap/ng-bootstrap
npm install jquery
```

Configure angular.json with required styles and scripts:

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css",
  "node_modules/@syncfusion/ej2-material-theme/styles/material.css"
],
"scripts": ["node_modules/jquery/dist/jquery.min.js"]
```

**Step 2**: Add Bootstrap CDN links to index.html:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js" integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js" integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ" crossorigin="anonymous"></script>
```

**Step 3**: Implement Bootstrap tooltip with Angular lifecycle hooks:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { AfterViewChecked, Component } from '@angular/core';
import { orderDataSource } from './data';
import 'bootstrap';
declare var $: any;
@Component({
  selector: 'app-root',
  template: `
  <div>
    <ejs-grid [dataSource]='data' [allowPaging]='true'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120>
        <ng-template #template let-data>
          <div class="row clearfix">
            <div class="col-md-2" style="text-align:right">
              <div
                data-toggle="tooltip"
                data-container="body"
                [title]="data.CustomerID"
                data-placement="left"
                data-delay='{"show":"800", "hide":"300"}'>
                <i class="fas fa-pencil-alt"></i> {{data.CustomerID }}
              </div>
            </div>
          </div>
        </ng-template>
        </e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
        <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
      </e-columns>
    </ejs-grid>
 </div>`
})
export class AppComponent implements AfterViewChecked {
  public data = orderDataSource;

  ngAfterViewChecked() {
    $('[data-toggle="tooltip"]').tooltip();
  }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

The following screenshot represents the Bootstrap tooltip for the **CustomerID** field:

![Bootstrap tooltip](./images/bootstrap-tooltip.gif)

> * Bootstrap CDN links are required in the HTML file for proper functionality.
> * The `ngAfterViewChecked` lifecycle hook ensures tooltip initialization after view rendering.

### Display custom tooltip for columns

The native [EJ2 Tooltip](https://ej2.syncfusion.com/angular/documentation/tooltip/getting-started) component provides consistent theming and behavior with other Syncfusion components. Render the Grid inside the Tooltip component with target set to `.e-rowcell` for cell-level tooltips.

Customize tooltip content dynamically using the [beforeRender](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#beforerender) event:

```typescript
beforeRender(args): void {
  if (args.target.classList.contains('e-rowcell')) {
    // Customize tooltip content based on cell data
    this.tooltip.content = 'This is value "' + args.target.innerText + '" ';
  }
}
```

The following example demonstrates custom tooltip implementation using the [beforeRender](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#beforerender) event for dynamic content generation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-tooltip-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-tooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-tooltip-cs1" %}

## Grid lines

Grid lines provide visual separation between cells using horizontal and vertical borders for improved readability. Configure line display using the [gridLines](https://ej2.syncfusion.com/angular/documentation/api/grid/#gridlines) property with the following options:

| Mode | Description |
|------|-------------|
| Both | Displays both horizontal and vertical grid lines |
| None | Hides all grid lines |
| Horizontal | Shows only horizontal grid lines |
| Vertical | Shows only vertical grid lines |
| Default | Uses theme-based grid line settings |

The following example demonstrates dynamic grid line configuration using a DropDownList [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#change) event to modify the [gridLines](https://ej2.syncfusion.com/angular/documentation/api/grid/#gridlines) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/autowrap-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/autowrap-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/autowrap-cs2" %}

> Grid renders with **Default** mode by default, applying theme-appropriate grid line styling.

## See Also

* [Is it possible to apply gradient color based on min and max value in Angular Grid?](https://www.syncfusion.com/forums/160346/is-it-possible-to-apply-gradient-color-based-on-min-and-max-value-in-angular-grid)
* [How to customize the header cell styles using methods](columns/headers#using-methods)