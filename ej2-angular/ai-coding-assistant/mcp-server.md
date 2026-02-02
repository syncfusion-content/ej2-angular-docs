---
layout: post
title: Syncfusion Angular AI Coding Assistant – MCP Server | Syncfusion
description: Learn how to configure and use SyncfusionAngularAssistant MCP server for intelligent code generation, documentation, and troubleshooting in Angular apps.
control: AI Coding Assistant
platform: ej2-angular
documentation: ug
---

# Syncfusion Angular AI Coding Assistant – MCP Server

## Overview

The [SyncfusionAngularAssistant](https://www.npmjs.com/package/@syncfusion/angular-assistant) is a specialized [Model Context Protocol (MCP)](https://modelcontextprotocol.io/docs/getting-started/intro) server designed to provide intelligent, context-aware assistance for developers building Angular applications with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component libraries.

This server integrates with compatible [MCP clients](https://modelcontextprotocol.io/clients) and delivers:

- Intelligent code generation for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components
- Detailed component documentation and practical usage examples
- Troubleshooting support for common integration and configuration issues
- Unlimited usage with no request limits, component restrictions, or time caps

## Prerequisites

Ensure the following requirements are met before using SyncfusionAngularAssistant:

- Node.js version >= 18 [](https://nodejs.org/en/)
- A compatible MCP client (examples: VS Code with GitHub Copilot, [Syncfusion<sup style="font-size:70%">&reg;</sup> Code Studio](https://www.syncfusion.com/code-studio/), Cursor, JetBrains IDEs)
- An active Syncfusion<sup style="font-size:70%">&reg;</sup> license:
  - [Commercial License](https://www.syncfusion.com/sales/unlimitedlicense)
  - [Community License](https://www.syncfusion.com/products/communitylicense) (free for individuals and small companies)
  - [Free Trial](https://www.syncfusion.com/account/manage-trials/start-trials)
- A valid Syncfusion<sup style="font-size:70%">&reg;</sup> [API key](https://www.syncfusion.com/account/api-key)

## Unlimited Access
Syncfusion<sup style="font-size:70%">&reg;</sup> offers unlimited access to this MCP server. There are no restrictions on:
* Number of requests		
* Components usage		
* Query caps		
* Usage duration		
This ensures users can fully leverage Syncfusion<sup style="font-size:70%">&reg;</sup> components to enhance their development experience without limitations.

## Installation and Setup

Configure your MCP client to use the SyncfusionAngularAssistant server with these standard settings:

### Generic MCP Server Settings

- **npm package name**: `@syncfusion/angular-assistant`
- **Type**: stdio (standard input/output transport)
- **Command**: `npx`
- **Arguments**: `-y`
- **Server name**: `SyncfusionAngularAssistant` (or client-specific alias, e.g., `angular-mcp`)

### API Key Configuration

Generate your API key from the [Syncfusion API Key page](https://www.syncfusion.com/account/api-key).

Choose one of the following secure methods:

**API Key File**

Store the key in a plain-text file (`.txt` or `.key` extension) and reference its absolute path.

```json
"env": {
  "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH" // Example: "D:\\syncfusion-key.txt"
}
```

**Direct API Key**

Paste the key directly (less secure; avoid committing to version control).

```json
"env": {
  "Syncfusion_API_Key": "YOUR_API_KEY"
}
```

### Client-Specific Configuration

#### Syncfusion<sup style="font-size:70%">&reg;</sup> Code Studio

1. Open **MCP Marketplace** → **Custom Servers** tab.
2. Set:
   - Server Name: `angular-mcp`
   - Server Type: npm package
   - NPM Package: `@syncfusion/angular-assistant`
3. Add environment variable: `Syncfusion_API_Key` = your API key
4. Click **Install Server**
5. Verify the server appears in **User Installed Servers** and is added to `config.yaml`.

For details, see [Code Studio MCP Custom Servers documentation](https://help.syncfusion.com/code-studio/reference/configure-properties/mcp/customservers#npm-server).

#### Visual Studio Code (GitHub Copilot)

Create or edit `.vscode/mcp.json` in your workspace:

```json
{
  "servers": {
    "syncfusion-angular-assistant": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@syncfusion/angular-assistant@latest"
      ],
      "env": {
        "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH"
        // or "Syncfusion_API_Key": "YOUR_API_KEY"
      }
    }
  }
}
```

After saving, select **Start** in the configuration interface. Confirm activation with the message `SyncfusionAngularAssistant is running...` in the output panel.

See also: [VS Code MCP Servers documentation](https://code.visualstudio.com/docs/copilot/customization/mcp-servers#_add-an-mcp-server).

### Cursor

Create or edit `.cursor/mcp.json` in your workspace:

```json
{
  "mcpServers": {
    "syncfusion-angular-assistant": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@syncfusion/angular-assistant@latest"
      ],
      "env": {
        "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH"
        // or "Syncfusion_API_Key": "YOUR_API_KEY"
      }
    }
  }
}
```

See: [Cursor MCP documentation](https://cursor.com/docs/context/mcp#using-mcp-json).

### JetBrains IDEs

1. Go to **Settings** → **Tools** → **AI Assistant** → **Model Context Protocol (MCP)**
2. Click **+** → switch to **As JSON**
3. Add the following configuration:

```json
{
  "mcpServers": {
    "syncfusion-angular-assistant": {
      "command": "npx",           // Use "npx.cmd" on Windows if npx is not recognized
      "args": [
        "-y",
        "@syncfusion/angular-assistant@latest"
      ],
      "env": {
        "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH"
        // or "Syncfusion_API_Key": "YOUR_API_KEY"
      }
    }
  }
}
```

4. Click **OK** → **Apply**

See: [JetBrains MCP documentation](https://www.jetbrains.com/help/ai-assistant/mcp.html#connect-to-an-mcp-server).

## Usage

Activate the assistant by starting your prompt with one of these invocation patterns (client-dependent):

- `SyncfusionAngularAssistant`
- `/syncfusion-angular-assistant`
- `/syncfusion-angular`
- `@syncfusion-angular`
- `@ask_syncfusion_angular`
- `ej2-angular`

In VS Code, `#SyncfusionAngularAssistant` also works for direct invocation.

1. Grant permission to run the server (per session, workspace, or always).
2. For optimal results, start a new chat when switching topics or components to preserve clean context.

### Supported Modes

Full support for Ask/Chat, Edit, and Agent modes in compatible MCP clients.

### Best Practices

- Be specific: Include the component and desired features (e.g., "Create a Syncfusion<sup style="font-size:70%">&reg;</sup> Angular DataGrid with paging, sorting, filtering, and Excel export").
- Provide context: Mention your data source, styling needs, or errors encountered.
- Use clear, descriptive queries to receive precise, production-ready suggestions.

### Example Queries

- "Create a Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component with paging, sorting, and filtering."
- "Implement remote data binding with OData in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Scheduler."
- "Build a responsive dashboard layout using Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Card, Chart, and Grid components."

## Troubleshooting

- Confirm the API key is valid and correctly referenced.
- Verify the MCP server is selected/enabled in the client’s AI tools or assistants panel.
- Ensure the client supports the latest MCP protocol version.
- Restart the IDE or workspace if the server fails to start.
- Test with a simple query: "List all available Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components."

## Support

- [Create a support ticket](https://support.syncfusion.com/support/tickets/create) – 24-hour guaranteed response, unlimited tickets, holiday support
- [Community forums](https://www.syncfusion.com/forums/essential-js2)
- [Feature requests & bug reports](https://www.syncfusion.com/feedback/javascript)
- Live chat (available on syncfusion.com)

## See Also

- [Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Documentation](https://ej2.syncfusion.com/angular/documentation)
- [Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant – MCP Server](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/mcp-server)
- [Model Context Protocol Introduction](https://modelcontextprotocol.io/docs/getting-started/intro)
- [Syncfusion<sup style="font-size:70%">&reg;</sup> API Key Management](https://www.syncfusion.com/account/api-key)