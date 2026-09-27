---
layout: post
title: WebMCP tool integration for Angular components | Syncfusion
description: Learn how to integrate WebMCP with Syncfusion Angular components to enable AI interaction, configure tools, manage access, and monitor execution.
control: WebMCP
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---
 
# WebMCP Tools Integration for Syncfusion® Angular Components
 
WebMCP enables AI agents to discover and interact with Syncfusion® Angular components through a standardized tool interface. By enabling WebMCP, AI-powered applications can securely discover component capabilities, read data, perform actions, and automate workflows through a standardized interface.

This section demonstrates how to integrate WebMCP with the Syncfusion® Angular Spreadsheet component. The same approach can be used with other supported components such as Grid, Scheduler, Chart, and more.
 
## WebMCP Overview
 
WebMCP allows AI assistants running in the browser to interact directly with Syncfusion® components through natural language prompts.
 
Instead of relying on DOM inspection or simulating user interactions, AI assistants can interact directly with component APIs through WebMCP tools. This approach provides more reliable and accurate results.
 
Once connected, an AI assistant can perform tasks such as:
 
- Sort or filter Grid data.
- Update Spreadsheet cells.
- Create Scheduler events.
- Perform component-specific actions through natural language prompts.
 
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
 
2. Search for **"WebMCP - Model Context Tool Inspector"** in [Chrome Web Store](WebMCP - Model Context Tool Inspector - Chrome Web Store). Click **"Add to Chrome"**.
 
3. Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to create or copy an API key. Open the WebMCP extension → paste your API key.
 
The WebMCP extension is now configured and ready to interact with WebMCP-enabled Syncfusion® components.

## Integrating WebMCP tools

Follow these steps to integrate WebMCP support into Syncfusion® Angular components. The following example uses the Spreadsheet component.

### Step 1: Enable WebMCP support

Import the WebMCP module and inject it into the component to make WebMCP functionality available.

```ts
import { Component } from '@angular/core';
import {
  Spreadsheet,
  SpreadsheetAllModule,
  WebMcpSpreadsheet
} from '@syncfusion/ej2-angular-spreadsheet';

Spreadsheet.Inject(WebMcpSpreadsheet);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SpreadsheetAllModule],
  template: `
    <ejs-spreadsheet
      openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
      saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save">
    </ejs-spreadsheet>
  `
})
export class AppComponent {}
```

### Step 2: Register component tools

Set the `enableWebMcp` property to `true` to register the component's available tools with the WebMCP runtime.

When `enableWebMcp` is enabled, supported component tools are automatically registered with the WebMCP runtime and become discoverable by authorized WebMCP clients.

For example, a Spreadsheet component may expose tools such as:

- getCellData
- editCell
- addSheet

An AI assistant can discover these tools and invoke them based on user prompts.

```ts
import { Component } from '@angular/core';
import {
  Spreadsheet,
  SpreadsheetAllModule,
  WebMcpSpreadsheet
} from '@syncfusion/ej2-angular-spreadsheet';

Spreadsheet.Inject(WebMcpSpreadsheet);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SpreadsheetAllModule],
  template: `
    <ejs-spreadsheet
      [enableWebMcp]="true"
      openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
      saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save">
    </ejs-spreadsheet>
  `
})
export class AppComponent {}
```

### Step 3: Customize tool registration

Use the `webMcpSettings` property to customize how WebMCP tools are exposed to AI agents. The available settings are listed below.

| Property | Description |
|-----------|-------------|
| `name` | Prefix applied to registered tool names. If name: `sales` is specified, a tool such as `getCellData` may be registered as `sales_getCellData`, allowing multiple component instances to coexist without tool name conflicts. |
| `tools` | List of tool names to expose. Any supported tools not included in this list will not be registered. |
| `exposeTo` | List of trusted domains that are allowed to interact with the component through WebMCP. |

```ts
import { Component } from '@angular/core';
import {
  Spreadsheet,
  SpreadsheetAllModule,
  WebMcpSpreadsheet
} from '@syncfusion/ej2-angular-spreadsheet';

Spreadsheet.Inject(WebMcpSpreadsheet);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SpreadsheetAllModule],
  template: `
    <ejs-spreadsheet
      [enableWebMcp]="true"
      [webMcpSettings]="webMcpSettings"
      (beforeWebMcpToolExecute)="beforeWebMcpToolExecute($event)"
      openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
      saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save">
    </ejs-spreadsheet>
  `
})
export class AppComponent {
  public webMcpSettings = {
    name: 'sales',
    tools: ['getCellData', 'editCell', 'addSheet'],
    exposeTo: ['https://www.syncfusion.com/']
  };

  public beforeWebMcpToolExecute(args: any): void {
    if (args.toolName.includes('editCell')) {
      const hour = new Date().getHours();

      if (hour < 9 || hour > 17) {
        args.cancel = true;
        console.log('Cell editing is allowed only between 9:00 AM and 5:00 PM.');
      }
    }
  }
}
```

> Use the `exposeTo` property to restrict WebMCP access to trusted domains. This helps prevent unauthorized WebMCP clients from interacting with your component tools.

### Step 4: Monitor and control tool execution

The `beforeWebMcpToolExecute` event is triggered before a tool is executed. This event allows you to:

- Audit tool usage.
- Validate incoming requests.
- Cancel tool execution when necessary.
- Apply custom business rules and security policies.

> AI-generated requests should always be validated before executing write operations. Restrict access using `exposeTo` and perform additional authorization checks within `beforeWebMcpToolExecute` when modifying application data.

```ts
import { Component } from '@angular/core';
import {
  Spreadsheet,
  SpreadsheetAllModule,
  WebMcpSpreadsheet
} from '@syncfusion/ej2-angular-spreadsheet';

Spreadsheet.Inject(WebMcpSpreadsheet);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SpreadsheetAllModule],
  template: `
    <ejs-spreadsheet
      [enableWebMcp]="true"
      [webMcpSettings]="webMcpSettings"
      (beforeWebMcpToolExecute)="beforeWebMcpToolExecute($event)"
      openUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"
      saveUrl="https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save">
    </ejs-spreadsheet>
  `
})
export class AppComponent {
  public webMcpSettings = {
    name: 'sales',
    tools: ['getCellData', 'editCell', 'addSheet'],
    exposeTo: ['https://www.syncfusion.com/']
  };

  public beforeWebMcpToolExecute(args: any): void {
    if (args.toolName.includes('editCell')) {
      const hour = new Date().getHours();

      if (hour < 9 || hour > 17) {
        args.cancel = true;
        console.log('Cell editing is allowed only between 9:00 AM and 5:00 PM.');
      }
    }
  }
}
```

## Best practices

- Expose only the tools required by your application.
- Use the `name` property when multiple component instances exist on the same page.
- Configure `exposeTo` to limit access to trusted domains.
- Monitor tool activity through the `beforeWebMcpToolExecute` event.
- Apply application-specific validation before executing tool operations.

## Next steps

After successfully enabling WebMCP, you can:

- Integrate WebMCP with other Syncfusion® Angular components such as Grid, Scheduler, Chart, and Rich Text Editor.
- Build AI-powered workflows that interact directly with application data and UI elements.
- Create secure and controlled tool execution pipelines using custom validation logic.

## See also

- [WebMCP Supported Syncfusion Angular Components](./components)