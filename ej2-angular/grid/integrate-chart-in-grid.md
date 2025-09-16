---
layout: post
title: Integrate Chart in Angular Grid | Syncfusion
description: Learn here all about integrate Chart in Syncfusion Angular Grid of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Integrate Chart  
documentation: ug
domainurl: ##DomainURL##
---

# Integrate Chart in Syncfusion Angular Grid

The Grid and Chart Integration feature in Syncfusion enables users to visualize tabular data in graphical format by seamlessly linking the Grid with Chart components. This powerful feature allows interactive data visualization through various Chart types such as bar, line, or pie charts directly from Grid data using the [ContextMenu](https://ej2.syncfusion.com/angular/documentation/grid/context-menu) functionality.

This integration is particularly valuable in dashboards, reporting tools, and data-driven applications where both tabular and visual representations enhance data comprehension and decision-making processes.

## Steps for Chart Integration

Follow these comprehensive steps to integrate Charts into your Angular Grid:

### Dependencies

The following dependencies are required for Chart integration functionality:

```javascript
|-- dependencies
  |-- @syncfusion/ej2-grid-chart
    |--@syncfusion/ej2-angular-grids
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-grids
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-notifications
    |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-charts
```

### Setup Angular Environment

Use [Angular CLI](https://github.com/angular/angular-cli) to setup your Angular applications. Install Angular CLI using the following command:

```bash
npm install -g @angular/cli
```

### Create an Angular Application

Start a new Angular application using the Angular CLI command:

```bash
ng new my-app
```

This command will prompt you for project settings such as Angular routing and stylesheet format preferences.

![Initial_setup](images/Initial-setup.png)

By default, it creates a CSS-based application.

Navigate to the created project folder:

```bash
cd my-app
```

### Add Syncfusion Angular Packages

All Essential JS 2 packages are published in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry.

Install the `Grid-Chart` package using the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-grid-chart --save

{% endhighlight %}
{% endtabs %}

### Import Syncfusion CSS Styles

Syncfusion Angular controls include [built-in themes](https://ej2.syncfusion.com/angular/documentation/appearance/overview) available in installed packages. Apply themes by importing required CSS files from the node_modules directory.

To use the **Material** theme, add the following imports to the **src/styles.css** file:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-grids/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grid-chart/styles/material.css';
```

## Chart Integration via Context Menu in Grid

This section demonstrates how to dynamically render Charts based on user interactions within the Syncfusion Angular Grid using context menu functionality. Users can right-click on selected rows and choose from various Chart types to visualize data instantly, enhancing interactivity and providing seamless analytical experiences.

For example, in a sales dashboard, you can select sales records for specific products and instantly view comparative bar or pie Charts illustrating online versus retail sales or revenue trends over time. This functionality improves decision-making by providing immediate visual feedback.

### Implementation Steps

**Step 1: Inject Required Modules**

Import necessary modules from Grid, Chart, and GridChart packages, and inject the `ContextMenuService` to enable context menu functionality:

```typescript
import { ContextMenuClickEventArgs, ContextMenuService, GridModule, ContextMenuItem, GridComponent} from '@syncfusion/ej2-angular-grids';
import { CategorySeries, ChartChanges, ChartPopupArgs, GridChart } from '@syncfusion/ej2-grid-chart';
import { ChartModel } from '@syncfusion/ej2-charts';

@Component({
  imports: [ GridModule],
  providers: [ContextMenuService],
  standalone: true,
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
```

**Step 2: Define Chart Options in Grid Context Menu**

Add Chart visualization options as context menu items using the [contextMenuItems](https://ej2.syncfusion.com/angular/documentation/api/grid/#contextmenuitems) property:

```typescript
export class AppComponent implements OnInit {
  public contextMenuItems?: ContextMenuItem[];

  ngOnInit(): void {
    this.contextMenuItems = [ 'Bar', 'StackingBar', 'StackingBar100', 'Pie', 'Column', 'StackingColumn', 'StackingColumn100', 'Line', 'StackingLine', 'StackingLine100', 'Area', 'StackingArea', 'StackingArea100', 'Scatter'];
  }
}
```

**Step 3: Initialize GridChart Instance on Grid Creation**

Inside the Grid's [created](https://ej2.syncfusion.com/angular/documentation/api/grid/#created) event, instantiate a **GridChart** object for dynamic Chart rendering:

```typescript
created(): void {
  this.gridChart = new GridChart({
    enableRtl: (this.grid as GridComponent).enableRtl,
    locale: (this.grid as GridComponent).locale,
  });
}
```

This ensures Chart instance readiness for seamless context menu interaction.

**Step 4: Handle Context Menu Click to Render Chart**

Use the [contextMenuClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#contextmenuclick) event to detect selected Chart types and render Charts using the `gridChart.render()` method.

The `ContextMenuClick` event provides the following arguments:

* `args.chartType`: The selected Chart type
* `args.gridInstance`: Current Grid instance
* `args.records`: Selected data records for Chart visualization

Use `gridChart.render` with three parameters:

* `chartArgs`: Contains Grid instance, Chart type, and selected records
* `chartModel`: Specifies Chart configurations for appearance and behavior
* `categorySeries`: Defines data fields for categories and series

```typescript
contextMenuClick(args: ContextMenuClickEventArgs) {
  if (args.chartType) {
    // Prepare Chart arguments
    const chartArgs: ChartPopupArgs = {
      gridInstance: (args.gridInstance as GridComponent),
      chartType: args.chartType,
      records: args.records as SalesRecord[],
    };

    // Configure Chart model
    const chartModel: ChartModel = {
      primaryXAxis: {
        valueType: 'Category',
        labelRotation: 315
      }
    };

    // Combine Chart models
    const model: ChartChanges = { chart: chartModel, accumulationChart: {} };

    // Define category and series fields
    const categorySeries: CategorySeries = {
      category: ['Product', 'Month'],
      series: ['Online', 'Retail']
    };

    // Render Chart
    (this.gridChart as GridChart).render(chartArgs, model, categorySeries);
  }
}
```

The following complete example demonstrates Chart integration into Grid context menu:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/chart-intergration-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="app.component.html" %}
{% include code-snippet/grid/chart-intergration-cs2/src/app.component.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/chart-intergration-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/chart-intergration-cs1" %}

### Enable Export Functionality in GridChart

Export functionality allows Charts to be saved in various formats for external sharing, reports, and presentations. This feature is particularly useful for preserving visualized data analysis.

Enable export by setting the `allowExport` property to true when creating the **GridChart** instance:

```typescript
gridChart = new GridChart({
  allowExport: true
});
```

Once enabled, an export option appears in the Chart popup toolbar, supporting formats such as PDF, CSV, Print, JPEG, XLSX, SVG, and PNG.

### Enable Property Panel in GridChart

The property panel provides a built-in interface for dynamic Chart modification at runtime. By default, this panel is disabled.

Enable the property panel by setting `enablePropertyPanel` to true:

```typescript
gridChart = new GridChart({
  enablePropertyPanel: true
});
```

When enabled, the property panel appears alongside Chart popups and offers three main configuration sections:

**Chart Types:** Choose from various Chart types including Column, Line, Pie, and others.

**Chart Data:** Configure category axis and series fields for data visualization.

**Formatting Options:** Adjust styling properties including:

* **Chart Style:**
  * **Margin:** Adjust [margins](https://ej2.syncfusion.com/angular/documentation/api/chart/margin/) around Charts (top, bottom, left, right) for better layout spacing
  * **Color:** Set distinct colors for different Chart elements to improve visual clarity

* **Title Style:**
  * **Legend:** Toggle legend visibility and customize font, size, color, and position
  * **Series:** Enable/disable tooltips and customize [Series](https://ej2.syncfusion.com/angular/documentation/api/chart/series/) colors and data labels based on categories

* **Axes:** Select axes as category or value type, and customize:
  * Reverse Order to change data sequence
  * **Title:** Adjust text, font, size, color, and rotation
  * **Label:** Modify text, font, size, color, and rotation for better presentation

### Customize Chart Models

Customize [Chart](https://ej2.syncfusion.com/angular/documentation/chart/getting-started) appearance by defining a [chartModel](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel/) object in the `chart` property within the [contextMenuClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#contextmenuclick) event. Configure various Chart properties such as axes, margins, tooltips, titles, and more. Additionally, use Chart [events](https://ej2.syncfusion.com/angular/documentation/api/chart/#events/) within `chartModel` configuration for further customization.

For [Accumulation Charts](https://ej2.syncfusion.com/angular/documentation/accumulation-chart/getting-started) (such as Pie charts), use the `accumulationChart` property to configure titles, legends, data labels, and visual styles. Apply additional customizations using Accumulation Chart [events](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/#events/).

The following code demonstrates Chart customization:

```typescript
contextMenuClick(args: ContextMenuClickEventArgs) {
  if (args.chartType) {
    const chartArgs: ChartPopupArgs = {
      gridInstance: (args.gridInstance as GridComponent),
      chartType: args.chartType,
      records: (args.records as SalesRecord[]),
    };
    const chartModel: ChartModel = {
      primaryXAxis: {
        valueType: 'Category',
        labelRotation: 315,
      },
      margin: {
        top: 20,
        bottom: 20,
        right: 20,
        left: 20
      },
      tooltip: {
        enable: true,
        textStyle: {
          size: '16px',
          fontFamily: 'Arial, Helvetica, sans-serif'
        }
      },
      title: 'Sales Data',
      titleStyle: {
        size: '24px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: 'Bold'
      },
      subTitle: 'Sales data for various products over the months',
      load: (args: ILoadedEventArgs) => {
        if (args.chart.titleStyle) {
            args.chart.titleStyle.color = '#1976d2';
        }
      }
    };
    const accumulationChartModel: AccumulationChartModel = {
      title: 'Sales Distribution'
    }

    // Combine Chart models
    const model: ChartChanges = {
      chart: chartModel,
      accumulationChart: accumulationChartModel
    };
  }
}
```

Programmatically update Chart appearance using the `updateChartSettings` event provided by **GridChart** integration. This event triggers when modifying Chart properties through the Chart popup's property panel, useful for applying custom themes, adjusting axis settings, or modifying series styles.

The following code demonstrates dynamic Chart customization with margin restrictions:

```typescript
created(): void {
  this.gridChart = new GridChart({
    enablePropertyPanel: true,
    allowExport: true,
    enableRtl: (this.grid as GridComponent).enableRtl,
    locale: (this.grid as GridComponent).locale,
    updateChartSettings: this.updateChartSettings.bind(this),
  });
}

updateChartSettings(args: UpdateChartArgs){
  const chart = args.changes?.chart;
  if (!chart) return;

  // Restrict margin values to minimum 20
  const chartMargin = chart.margin;
  if (chartMargin && !isNullOrUndefined(chartMargin)) {
    if ((chartMargin.top ?? 0) < 20) chartMargin.top = 20;
    if ((chartMargin.bottom ?? 0) < 20) chartMargin.bottom = 20;
    if ((chartMargin.left ?? 0) < 20) chartMargin.left = 20;
    if ((chartMargin.right ?? 0) < 20) chartMargin.right = 20;
  }
}
```

The following complete example demonstrates property panel enablement, Chart customization using `chartModel`, and dynamic behavior control through `updateChartSettings`:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/chart-intergration-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="app.component.html" %}
{% include code-snippet/grid/chart-intergration-cs2/src/app.component.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/chart-intergration-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/chart-intergration-cs2" %}