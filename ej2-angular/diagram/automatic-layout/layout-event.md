---
layout: post
title: Layout Events in Angular Diagram | Syncfusion®
description: Subscribe to layout events in the Syncfusion® Angular Diagram, including dataLoaded and expandStateChange, to react to data load and node expand or collapse.
platform: ej2-angular
control: Layout events
documentation: ug
domainurl: ##DomainURL##
---

# Layout Events in Angular Diagram

Layout events in the Angular Diagram component provide developers with hooks to respond to various stages of automatic layout processing. These events are particularly useful when working with hierarchical data structures and need to customize behavior during layout rendering, data loading, or node expansion/collapse operations.

The Angular Diagram component supports several layout-specific events that fire during different phases of the layout life cycle, enabling fine-grained control over layout behavior and user interactions.

## DataLoaded Event

The [`dataLoaded`](https://ej2.syncfusion.com/angular/documentation/api/diagram/idataloadedeventargs) event triggers after the diagram successfully populates from an external data source. This event provides access to the loaded data and diagram instance, making it ideal for performing post-load customizations such as applying custom styling, setting initial node states, or configuring layout-specific properties.

The event fires once the data binding process completes but before the initial layout calculation begins, providing an opportunity to modify nodes or connectors before they are positioned.

```typescript
import { Component, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, IDataLoadedEventArgs, DataSourceModel, Layout } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: 'app-root',
    imports: [DiagramModule],
    template: `
      <ejs-diagram #diagram id="diagram" width="100%" height="600px"
        [layout]="layout" [dataSourceSettings]="dataSourceSettings" (dataLoaded)="dataLoaded($event)" ></ejs-diagram>
    `
})
export class AppComponent {
  @ViewChild("diagram")
  public diagram!: DiagramComponent;

  // Defines the hierarchical layout used to arrange the data-bound nodes
  public layout: Layout = { type: 'HierarchicalTree' };

  // Binds an external data source so the dataLoaded event can fire
  public dataSourceSettings: DataSourceModel = {
    id: 'id',
    parentId: 'manager',
    dataSource: [
      { id: '1', role: 'Manager' },
      { id: '2', manager: '1', role: 'Lead' }
    ]
  };

  public dataLoaded(args: IDataLoadedEventArgs): void {
      // Access the diagram instance and perform post-load customizations
      console.log('Data loaded successfully:', args);
      
      // Example: Apply custom styling to root nodes
      // Custom logic here
  }
}
```

## ExpandStateChange Event

The [`expandStateChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExpandStateChangeEventArgs) event fires when a user clicks the expand or collapse icon of a node in a hierarchical layout. This event occurs before the layout update begins, allowing developers to prevent the state change, modify the expansion behavior, or trigger custom actions based on the node's new state.

The event provides information about the affected node, its current state, and whether the operation can be canceled. This makes it valuable for implementing conditional expansion, loading child data on-demand, or applying custom animations. After the expansion state is updated, the [`animationComplete`](https://ej2.syncfusion.com/angular/documentation/api/diagram#animationcomplete) event fires once the resulting layout animation finishes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/layoutEvent-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/layoutEvent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/layoutEvent-cs1" %}

## Animation Complete Event

The [`animationComplete`](https://ej2.syncfusion.com/angular/documentation/api/diagram#animationcomplete) event triggers after animation is completed for the diagram elements, particularly during expand and collapse operations. This event is essential for detecting when visual transitions have completed, enabling developers to perform follow-up actions such as scrolling to specific nodes, updating UI indicators, or triggering additional layout adjustments.

The event fires at the end of the animation cycle, ensuring that all visual updates are complete before any subsequent operations begin.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/layoutEvent-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/layoutEvent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/layoutEvent-cs2" %}

## Layout Updated Event

The [`layoutUpdated`](https://ej2.syncfusion.com/angular/documentation/api/diagram#layoutupdated) event fires at both the beginning and completion of the layout rendering process.

The `state` parameter is a [`LayoutState`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layoutstate) enumeration with the values `Started` (layout rendering process has started) and `Completed` (layout rendering process has finished). These values can be used to implement loading indicators, track layout calculation progress, measure layout performance, or coordinate follow-up actions with other application components that depend on layout completion.

```typescript
import { Component, ViewChild } from '@angular/core';
import { DiagramComponent, DiagramModule, ILayoutUpdatedEventArgs } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: 'app-root',
    imports: [DiagramModule],
    template: `
      <ejs-diagram #diagram id="diagram" width="100%" height="550px" [nodes]="nodes" [connectors]="connectors"
        [layout]="layout" (layoutUpdated)="layoutUpdated($event)" ></ejs-diagram>
    `
})
export class AppComponent {
  @ViewChild("diagram")
  public diagram!: DiagramComponent;
  
  // Handle layout updated event for progress tracking
  public layoutUpdated(args: ILayoutUpdatedEventArgs): void {
      if (args.state === 'Started') {
          console.log('Layout calculation started');
          // Show loading indicator
      } else if (args.state === 'Completed') {
          console.log('Layout rendering completed');
          // Hide loading indicator, perform post-layout actions
      }
  }
}
```

These layout events work together to provide comprehensive control over the automatic layout life cycle, from initial data loading through final rendering completion. They enable developers to create responsive, interactive diagram experiences with proper feedback and customization capabilities.