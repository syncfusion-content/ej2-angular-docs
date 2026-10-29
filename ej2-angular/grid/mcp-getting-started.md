---
layout: post
title: WebMCP tool integration for Angular components | Syncfusion
description: Learn how to integrate WebMCP with Syncfusion Angular components to enable AI interaction, configure tools, manage access, and monitor execution.
control: WebMCP
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---
 
# WebMCP Tools Integration for Syncfusion® DataGrid
 
WebMCP allows AI assistants running in the browser to interact directly with Syncfusion® components through natural language prompts.
 
Instead of relying on DOM inspection or simulating user interactions, AI assistants can interact directly with component APIs through WebMCP tools. This approach provides more reliable and accurate results.
 
Once connected, an AI assistant can perform tasks such as:
 
- Sort or filter Grid data.
- Clear sorted records
- Clear filtered records.
 
> WebMCP is currently an experimental browser capability and requires a Chromium-based browser with WebMCP support enabled. Availability and required browser flags may change as the specification evolves.
 
## Prerequisites
 
- Syncfusion® Angular components
- Chromium-based Browser (like Chrome, Edge, or Brave)
- [Node.js 24+](https://nodejs.org/en) (LTS recommended).
- WebMCP browser extension installed
- AI API key configured in the extension
 
## WebMCP setup
 
Before you can use WebMCP locally, enable the feature flag and install the browser extension:
 
1. Enable `WebMCP for testing` flag via `chrome://flags/`. Click **"Relaunch"** to restart Chrome.
 
2. Search for **"WebMCP - Model Context Tool Inspector"** in [Chrome Web Store](https://chromewebstore.google.com/detail/webmcp-model-context-tool/gbpdfapgefenggkahomfgkhfehlcenpd). Click **"Add to Chrome"**.
 
3. Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to create or copy an API key. Open the WebMCP extension → paste your API key.
 
The WebMCP extension is now configured and ready to interact with WebMCP-enabled Syncfusion® components.

## Integrating WebMCP tools

Follow these steps to integrate WebMCP support into Syncfusion® Angular components. The following example uses the DataGrid component.

### Step 1: Create an application

Create an Angular application and integrate the Syncfusion® Angular DataGrid component by following the [Getting Started with Angular DataGrid](https://help.syncfusion.com/grid-sdk/angular/data-grid/getting-started) guide. After completing the setup, follow the steps below to enable WebMCP integration.

### Step 2: Enable WebMCP support

Import the WebMCP module and inject it into the component to make WebMCP functionality available.

```ts
import { Component } from '@angular/core';
import { Grid, GridAllModule, WebMcpGrid } from '@syncfusion/ej2-angular-grids';

Grid.Inject(WebMcpGrid);

const data: object[] = [
    { OrderID: 10248, CustomerName: 'Ana Trujillo', OrderDate: new Date(2025, 0, 12), ShipCountry: 'France', Freight: 32.38 },
    { OrderID: 10249, CustomerName: 'Martin Sommer', OrderDate: new Date(2025, 0, 15), ShipCountry: 'Germany', Freight: 11.61 },
    { OrderID: 10250, CustomerName: 'Thomas Hardy', OrderDate: new Date(2025, 1, 5), ShipCountry: 'Brazil', Freight: 65.83 }
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GridAllModule],
  template: `
    <ejs-grid [dataSource]='data'>
        <!-- Define the columns to be displayed -->
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerName' headerText='Customer Name' width=100></e-column>
            <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=100></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=120></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
        </e-columns>
    </ejs-grid>
  `
})
export class AppComponent {}
```

### Step 3: Register component tools

Set the [enableWebMcp](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#enablewebmcp) property to `true` to register the component's available tools with the WebMCP runtime.

When `enableWebMcp` is enabled, supported component tools are automatically registered with the WebMCP runtime and become discoverable by authorized WebMCP clients.

For example, a DataGrid component may expose tools such as:

- getSelectedRecords
- sortByColumn
- clearFiltering

An AI assistant can discover these tools and invoke them based on user prompts.

```ts
import { Component } from '@angular/core';
import { Grid, GridAllModule, WebMcpGrid, FilterService, SortService } from '@syncfusion/ej2-angular-grids';

Grid.Inject(WebMcpGrid);

const data: object[] = [
    { OrderID: 10248, CustomerName: 'Ana Trujillo', OrderDate: new Date(2025, 0, 12), ShipCountry: 'France', Freight: 32.38 },
    { OrderID: 10249, CustomerName: 'Martin Sommer', OrderDate: new Date(2025, 0, 15), ShipCountry: 'Germany', Freight: 11.61 },
    { OrderID: 10250, CustomerName: 'Thomas Hardy', OrderDate: new Date(2025, 1, 5), ShipCountry: 'Brazil', Freight: 65.83 }
]

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [FilterService, SortService],
  imports: [GridAllModule],
  template: `
    <ejs-grid [dataSource]='data' [enableWebMcp]="true" [allowFiltering]='true' [allowSorting]='true'>
        <!-- Define the columns to be displayed -->
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerName' headerText='Customer Name' width=100></e-column>
            <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=100></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=120></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
        </e-columns>
    </ejs-grid>
  `
})
export class AppComponent {}
```

### Step 4: Customize tool registration

Use the [webMcpSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#webmcpsettings) property to customize how WebMCP tools are exposed to AI agents. The available settings are listed below.

| Property | Description |
|-----------|-------------|
| `name` | Prefix applied to registered tool names. If name: `orders` is specified, a tool such as `getSelectedRecords` may be registered as `getSelectedRecords`, allowing multiple component instances to coexist without tool name conflicts. |
| `tools` | List of tool names to expose. Any supported tools not included in this list will not be registered. |
| `exposedTo` | List of trusted domains that are allowed to interact with the component through WebMCP. |

```ts
import { Component } from '@angular/core';
import { Grid, GridAllModule, WebMcpGrid, FilterService, SortService } from '@syncfusion/ej2-angular-grids';

Grid.Inject(WebMcpGrid);

const data: object[] = [
    { OrderID: 10248, CustomerName: 'Ana Trujillo', OrderDate: new Date(2025, 0, 12), ShipCountry: 'France', Freight: 32.38 },
    { OrderID: 10249, CustomerName: 'Martin Sommer', OrderDate: new Date(2025, 0, 15), ShipCountry: 'Germany', Freight: 11.61 },
    { OrderID: 10250, CustomerName: 'Thomas Hardy', OrderDate: new Date(2025, 1, 5), ShipCountry: 'Brazil', Freight: 65.83 }
]

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [FilterService, SortService],
  imports: [GridAllModule],
  template: `
    <ejs-grid [dataSource]='data' [enableWebMcp]="true" [webMcpSettings]="webMcpSettings" [allowFiltering]='true' [allowSorting]='true'>
        <!-- Define the columns to be displayed -->
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerName' headerText='Customer Name' width=100></e-column>
            <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=100></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=120></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
        </e-columns>
    </ejs-grid>
  `
})
export class AppComponent {
  public webMcpSettings = {
    name: 'orders',
    tools: ['getSelectedRecords', 'sortByColumn', 'clearFiltering'],
    exposedTo: ['https://www.syncfusion.com/']
  };

}
```

> Use the `exposedTo` property to restrict WebMCP access to trusted domains. This helps prevent unauthorized WebMCP clients from interacting with your component tools.

### Step 5: Monitor and control tool execution

The [beforeWebMcpToolExecute](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#beforewebmcptoolexecute) event is triggered before a tool is executed. This event allows you to:

- Audit tool usage.
- Validate incoming requests.
- Cancel tool execution when necessary.
- Apply custom business rules and security policies.

> AI-generated requests should always be validated before executing write operations. Restrict access using `exposedTo` and perform additional authorization checks within `beforeWebMcpToolExecute` when modifying application data.

```ts
import { Component } from '@angular/core';
import { Grid, GridAllModule, WebMcpGrid, FilterService, SortService } from '@syncfusion/ej2-angular-grids';

Grid.Inject(WebMcpGrid);

const data: object[] = [
    { OrderID: 10248, CustomerName: 'Ana Trujillo', OrderDate: new Date(2025, 0, 12), ShipCountry: 'France', Freight: 32.38 },
    { OrderID: 10249, CustomerName: 'Martin Sommer', OrderDate: new Date(2025, 0, 15), ShipCountry: 'Germany', Freight: 11.61 },
    { OrderID: 10250, CustomerName: 'Thomas Hardy', OrderDate: new Date(2025, 1, 5), ShipCountry: 'Brazil', Freight: 65.83 }
]

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [FilterService, SortService],
  imports: [GridAllModule],
  template: `
    <ejs-grid [dataSource]='data' [enableWebMcp]="true" [allowFiltering]='true' [allowSorting]='true' [webMcpSettings]="webMcpSettings" (beforeWebMcpToolExecute)="beforeWebMcpToolExecute($event)">
        <!-- Define the columns to be displayed -->
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerName' headerText='Customer Name' width=100></e-column>
            <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=100></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=120></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
        </e-columns>
    </ejs-grid>
  `
})
export class AppComponent {
  public webMcpSettings = {
    name: 'orders',
    tools: ['getSelectedRecords', 'sortByColumn', 'clearFiltering'],
    exposedTo: ['https://www.syncfusion.com/']
  };

  public beforeWebMcpToolExecute(args: any): void {
    if (args.toolName.includes('clearFiltering')) {
      const hour = new Date().getHours();

      if (hour < 9 || hour > 17) {
        args.cancel = true;
        console.log('Clear filter action is allowed only between 9:00 AM and 5:00 PM.');
      }
    }
  }
}
```

## Best practices

- Expose only the tools required by your application.
- Use the `name` property when multiple component instances exist on the same page.
- Configure `exposedTo` to limit access to trusted domains.
- Monitor tool activity through the `beforeWebMcpToolExecute` event.
- Apply application-specific validation before executing tool operations.

## Explore the demo

Explore the Syncfusion® Angular DataGrid component with WebMCP integration through this [demo](https://demos.syncfusion.com/grid-sdk/data-grid/webmcp/index.html).