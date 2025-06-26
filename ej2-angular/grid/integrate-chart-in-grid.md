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

The Grid and Chart Integration feature in Syncfusion allows users to visualize tabular data in a graphical format by linking the Grid with the Chart.This feature allows seamless integration with Charts to visualize selected data interactively. You can generate various Chart types such as bar, line, or pie directly from Grid data using the [ContextMenu](https://ej2.syncfusion.com/angular/documentation/grid/context-menu) feature. This feature is particularly useful in scenarios where tabular data can be better understood through graphical representation.

This feature is particularly useful in dashboards, reporting tools, and data-driven applications where both tabular and visual representations of data are required.

## Steps for Chart integration

To integrate Charts into your Grid, follow these steps:

### Dependencies

Below is the list of minimum dependencies required to integrate Chart functionality into the Grid:

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

### Setup angular environment

You can use [Angular CLI](https://github.com/angular/angular-cli) to setup your Angular applications. To install Angular CLI use the following command.

```bash
npm install -g @angular/cli
```

### Create an Angular application

Start a new Angular application using below Angular CLI command.

```bash
ng new my-app
```

This command will prompt you for a few settings for the new project, such as whether to add Angular routing and which stylesheet format to use.

![Initial_setup](images/Initial-setup.png)

By default, it will create a CSS-based application.

Next, navigate to the created project folder:

```
cd my-app
```

### Add Syncfusion Angular packages

All the available Essential JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry.

To install the `Grid-Chart` package, use the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-grid-chart --save

{% endhighlight %}
{% endtabs %}

### Import the Syncfusion CSS styles

Syncfusion Angular controls come with [built-in themes](https://ej2.syncfusion.com/angular/documentation/appearance/overview), which are available in the installed packages. It’s easy to adapt the Syncfusion Angular controls to match the style of your application by referring to one of the built-in themes.

To apply a theme, you can import the required CSS files from the node_modules directory. For example, to use the **Material** theme, add the following imports to the **src/styles.css** file:

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

### Chart integration via Context Menu in Grid

This section explains how to dynamically render Charts based on user interactions within the Syncfusion Angular Grid using the context menu. Users can **right-click** on selected rows and choose from various Chart types such as bar, pie, line Charts etc to visualize the data instantly. This feature enhances interactivity and provides a seamless analytical experience.

For example, in a sales dashboard, you can select sales records for specific products and instantly view a comparative bar or pie Chart illustrating online sales versus retail sales or revenue trends over several month. This functionality helps improve decision-making by providing immediate visual feedback.

Steps to be followed to integrate Chart into Grid via contextmenu:

**Step 1. Inject required modules:**

Import the necessary modules from the `Grid`,`Chart` and `GridChart` packages, and inject the `ContextMenuService` into the Grid to enable context menu functionality.

```ts

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

**Step 2: Define Chart options to Grid Context Menu:**

Add Chart visualization options as context menu items within the Grid configuration using [contextMenuItems](https://ej2.syncfusion.com/angular/documentation/api/grid/#contextmenuitems) property. These items allow  you to right-click on selected rows and choose a Chart type to visualize the data.

```ts

export class AppComponent implements OnInit {
  public contextMenuItems?: ContextMenuItem[];

  ngOnInit(): void {
    this.contextMenuItems= [ 'Bar', 'StackingBar', 'StackingBar100', 'Pie', 'Column', 'StackingColumn', 'StackingColumn100', 'Line', 'StackingLine', 'StackingLine100', 'Area', 'StackingArea', 'StackingArea100', 'Scatter'];
  }
}

```

**Step 3: Initialize GridChart instance on Grid creation:**

Inside the Grid’s [created](https://ej2.syncfusion.com/angular/documentation/api/grid/#created) event, instantiate a **GridChart** object. This instance will be used to render Charts dynamically based on the selected Grid data.

```ts
created(): void {
  this.gridChart = new GridChart({
    enableRtl: (this.grid as GridComponent).enableRtl,
    locale: (this.grid as GridComponent).locale,
  });
}

```

This ensures that the Chart instance is ready as soon as the Grid is initialized, allowing seamless interaction through the context menu.

**Step 4: Handle context menu click to render Chart:**

Use the [contextMenuClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#contextmenuclick) event to detect which Chart type was selected and render the Chart accordingly using the `gridChart.render()` method.

`ContextMenuClick` event passes the below arguments:

  * `args.chartType:` The selected Chart type.

  * `args.gridInstance:` The current Grid instance.

  * `args.records:` The selected data records to be visualized in the Chart.

* Use the `gridChart.render` to render the Chart. It accepts three arguments discussed below:

  * `chartArgs`: Contains Grid instance, [Chart type](.https://ej2.syncfusion.com/angular/documentation/chart/chart-types), and selected records.

  * `chartModel:` This specifies various Chart configurations related to the appearance and behavior of the Chart. The model allows you to configure axes, labels, legends, tooltips, and other Chart attributes. Refer to Syncfusion's [Chart Model](https://ej2.syncfusion.com/angular/documentation/api/chart/chartmodel/) for detailed configurations, options, and customization possibilities.

  * `categorySeries:` This specifies the fields in your data used for [categories](https://ej2.syncfusion.com/angular/documentation/chart/category-axis) and [series](https://ej2.syncfusion.com/angular/documentation/chart/chart-series) in the Chart.

    * Category fields: Define the grouping axis.
    * Series fields: Define the actual values plotted on the Chart.

```ts

contextMenuClick(args: ContextMenuClickEventArgs) {
  if (args.chartType) 
  {
    // Prepare the Chart arguments including the Grid instance, Chart type, and records to plot.
    const chartArgs: ChartPopupArgs = {
      gridInstance: (args.gridInstance as GridComponent),
      chartType: args.chartType,
      records: args.records as SalesRecord[],
    };

    // Set up the Chart model configurations.
    const chartModel: ChartModel = {
      primaryXAxis: {
        valueType: 'Category',
        labelRotation: 315
      }
    };

    // Combine both Chart models into a single model for rendering.
    const model: ChartChanges = { chart: chartModel, accumulationChart: {} };

    // Determine fields for category and series data in the Chart.
    const categorySeries: CategorySeries = {
      category: ['Product', 'Month'],
      series: ['Online', 'Retail']
    };

    // Render the Chart using the configured arguments and models.
    // The render function uses the defined chartArgs, model, and categorySeries to display the Chart.
    (this.gridChart as GridChart).render(chartArgs, model, categorySeries);
  }
}

```

The following complete example demonstrates how to integrate charts into a Grid context menu using the `contextMenuClick` event with `gridChart.render` method:

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
        
### Enable export functionality in GridChart

The export functionality in GridChart allows Charts to be saved or shared externally in various formats. This is particularly useful for preserving visualized data or including Charts in reports and presentations.

To enable this feature, set the `allowExport` property to true when creating the **GridChart** instance. Once enabled, an export option appears in the Chart popup toolbar, allowing the Chart to be exported in various formats such as PDF, CSV, Print, JPEG, XLSX, SVG, and PNG.

The following code snippet demonstrates how to enable export functionality in **GridChart**:

```ts

gridChart = new GridChart({
  allowExport: true
});

```

### Enable property panel in GridChart

The property panel in GridChart provides a built-in interface to modify Chart settings dynamically at runtime. By default, the property panel is disabled. To enable it, set the `enablePropertyPanel` option to true during the instantiation of the **GridChart** object. Here’s how to do it:

```ts

gridChart = new GridChart({
  enablePropertyPanel: true
});

```

When enabled, the property panel appears alongside the Chart popup and offers three main configuration sections:

* **Chart Types:** Choose from a variety of Chart types, including Column, Line, Pie, and others.

* **Chart Data:** Configure the category axis and series fields for data visualization.

* **Formatting Options:** Adjust styling properties such as Chart style, title style, legend appearance, series settings, and axes formatting.

  * **Chart Style:** 

    * **Margin :** Adjust the [margins](https://ej2.syncfusion.com/angular/documentation/api/chart/margin/) around the chart (top, bottom, left, right) for better layout spacing.
    * **Color**: Set distinct colors for different chart elements to improve visual clarity.

  * **Title Style** 

    * **Legend** - Toggle the visibility of the legend and customize its font, size, color, and position.
    * **Series** - Enable/disable tooltips and customize [Series](https://ej2.syncfusion.com/angular/documentation/api/chart/series/) color and data labels based on categories such as online, retail, or revenue.

  * **Axes:** - Select axes as either category or value type, and customize:

    * Reverse Order to change the data sequence.
    * **Title:** Adjust text, font, size, color, and rotation.
    * **Label:** Modify text, font, size, color, and rotation for better label presentation.

**customize the Chart model:**   

You can customize the [Chart](https://ej2.syncfusion.com/angular/documentation/chart/getting-started) by defining a [chartModel](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel/) object in the `chart` property of the `model` object within the [contextMenuClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#contextmenuclick) event .This allows you to configure various Chart properties such as axes, margins, tooltips, titles, and more. Additionally, you can use the [events](https://ej2.syncfusion.com/angular/documentation/api/chart/#events/) of the Chart within the `chartModel` configuration to apply further customizations when the Chart is rendered. 

To customize [Accumulation Charts](https://ej2.syncfusion.com/angular/documentation/accumulation-chart/getting-started) (such as Pie), use the `accumulationChart` property of the `model` object. This property allows you to configure Chart options like titles, legends, data labels, and visual styles tailored for accumulation-type visualizations.  You can also use Accumulation Chart [events](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/#events/) to apply additional customizations when the Chart is rendered.

The following code snippets demonstrate how to achieve this:

```ts

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
      title :'Sales Distribution'
    }

    // Combine both chart models into a single object.
    const model: ChartChanges = {
      chart: chartModel,
      accumulationChart: accumulationChartModel
    };
  }
}

```

You can also programmatically update the Chart’s appearance using the `updateChartSettings` event provided by the **GridChart** integration. This event is triggered when you modify Chart properties through the Chart popup’s property panel. This is useful for applying custom themes, adjusting axis settings, or modifying series styles.

The following code snippet demonstrates how to dynamically customize chart margins and restrict their values to a minimum of 20 using the `updateChartSettings` event.


```ts

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

  // Restrict margin values to minimum 20.
  const chartMargin = chart.margin;
  if (chartMargin && !isNullOrUndefined(chartMargin)) {
    if ((chartMargin.top ?? 0) < 20) chartMargin.top = 20;
    if ((chartMargin.bottom ?? 0) < 20) chartMargin.bottom = 20;
    if ((chartMargin.left ?? 0) < 20) chartMargin.left = 20;
    if ((chartMargin.right ?? 0) < 20) chartMargin.right = 20;
  }
}

```

The following complete example demonstrates how to enable the property panel by setting `enablePropertyPanel` to **true**, customize the chart using the `chartModel` within `contextMenuClick` event, and dynamically control or customize the behavior of the `updateChartSettings` event.

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