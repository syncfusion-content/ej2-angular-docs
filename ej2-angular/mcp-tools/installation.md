---
layout: post
title: Installation Guide | Syncfusion MCP Tools
description: Step-by-step guide to install and set up the Syncfusion MCP Tools MCP server in VS Code, Cursor, and Code Studio for AI-powered Angular development.
control: Installation
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Installing Syncfusion MCP Tools

Syncfusion MCP Tools provide AI-powered assistance for building Angular applications with Syncfusion components. This guide will help you install and configure the MCP server in your development environment.

## Available Modes

The Syncfusion MCP Tools offer two modes:

* **Agentic UI Builder** – Complete toolkit for building user interfaces with Layout, Component, and Styling tools. Coordinates multi-step workflows automatically.
* **AI Coding Assistant** – Provides contextual component documentation, code snippets, and configuration examples to accelerate development and reduce documentation lookups.

This guide will help you install and set up the tools so you can start building Angular applications with AI assistance right away.

## Prerequisites

Before you begin, ensure you have:

- Required [Node.js](https://nodejs.org/en/) version >= 18
- A **compatible MCP client** (VS Code, Syncfusion<sup style="font-size:70%">&reg;</sup> Code Studio, Cursor, etc.)
- Active [Syncfusion<sup style="font-size:70%">&reg;</sup> API key](https://syncfusion.com/account/api-key)
- Angular application (existing or new); see [Quick Start](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-cli)
- Active Syncfusion<sup style="font-size:70%">&reg;</sup> license (any of the following):  
  - [Commercial License](https://www.syncfusion.com/sales/unlimitedlicense)  
  - [Free Community License](https://www.syncfusion.com/products/communitylicense)  
  - [Free Trial](https://www.syncfusion.com/account/manage-trials/start-trials)

### Getting your API Key

Obtain your Syncfusion API key before proceeding:

1. Log in to your [Syncfusion account](https://www.syncfusion.com/account/)
2. Navigate to the [API Key page](https://www.syncfusion.com/account/api-key)
3. Generate your API key
4. Keep this key ready for configuration

There are two options:

- **Option 1: API Key File (Recommended)**

  Store your API key in a separate file and reference its path in the `Syncfusion_API_Key_Path` environment parameter. This approach enhances security by keeping the key separate from configuration files.

  **Supported formats:** `.txt` or `.key`

```json
"env": {
  "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH" // "D:\\syncfusion-key.txt" or "D:\\syncfusion-key.key"
}
```

- **Option 2: Direct API Key**

  Set the key directly in the MCP configuration:

```json
"env": {
  "Syncfusion_API_Key": "YOUR_API_KEY"
}
```

> If both the key file and the environment variable are provided, the file path specified in `Syncfusion_API_Key_Path` takes priority.

## Generic MCP Server Settings

All MCP clients require these standard settings for the Syncfusion MCP server:

- **npm package name**: `@syncfusion/angular-assistant`  
- **Type**: `stdio` (standard input/output transport)  
- **Command**: `npx`  
- **Arguments**: `-y`  
- **Server name**: `sf-angular-mcp`

## Setting up in MCP Clients

Syncfusion MCP Tools can be configured at two levels:

- **Global-level**—Server is available across all projects in your IDE
- **Workspace-level**—Server is available only for a specific project or workspace

The following sections provide detailed setup instructions for popular development environments.

### Global Configuration

Configure the Syncfusion MCP server globally to make it available across all workspaces in your IDE.

{% tabs %}
{% highlight bash tabtitle="VS Code" %}

1. Click <a target="_blank" href="https://cursor.com/en/install-mcp?name=sf-angular-mcp&config=eyJ0eXBlIjoic3RkaW8iLCJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBzeW5jZnVzaW9uL2FuZ3VsYXItYXNzaXN0YW50QGxhdGVzdCJdLCJlbnYiOnsic3luY2Z1c2lvbl9BcGlfS2V5IjoiWU9VUl9BUElfS0VZIn19">here</a> to open the installation link.
2. Replace `YOUR_API_KEY` with your actual Syncfusion API key.
3. Follow the prompts to complete the installation.

For more information, see the [VS Code MCP documentation](https://code.visualstudio.com/docs/copilot/customization/mcp-servers).

{% endhighlight %}
{% highlight bash tabtitle="Cursor" %}

1. Click <a target="_blank" href="https://cursor.com/en/install-mcp?name=sf-angular-mcp&config=eyJ0eXBlIjoic3RkaW8iLCJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBzeW5jZnVzaW9uL3JlYWN0LWFzc2lzdGFudEBsYXRlc3QiXSwiZW52Ijp7IlN5bmNmdXNpb25fQVBJX0tleV9QYXRoIjoiWU9VUl9BUElfS0VZX0ZJTEVfUEFUSCJ9fQ==">here</a> to open the installation link.
2. Update the `YOUR_API_KEY_FILE_PATH` with the path to your API key file.
3. Follow the prompts to complete the installation.

For more information, see the [Cursor MCP documentation](https://cursor.com/docs/context/mcp).

{% endhighlight %}
{% highlight bash tabtitle="Code Studio" %}

1. Open the [MCP Marketplace](https://www.syncfusion.com/code-studio/) in Code Studio.
2. Search for `Syncfusion Angular Assistant` and click **Install**.
3. Enter your [Syncfusion API key](https://syncfusion.com/account/api-key) when prompted.
4. The server installs and appears in the Installed list.

For more information, see the [Code Studio MCP documentation](https://help.syncfusion.com/code-studio/reference/configure-properties/mcp/marketplace).

{% endhighlight %}
{% endtabs %}

### Workspace Configuration

Install the server for a specific project by creating a configuration file in your project folder.

**Important:** Replace `YOUR_API_KEY_FILE_PATH` or `YOUR_API_KEY` with your actual API key.

{% tabs %}
{% highlight bash tabtitle="VS Code" %}

// Create a `.vscode/mcp.json` file in your workspace with the MCP server configuration:

{
  "servers": {
    "sf-angular-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@syncfusion/angular-assistant@latest"],
      "env": {
        "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH"
        // or
        // "Syncfusion_API_Key": "YOUR_API_KEY"
      }
    }
  }
}

{% endhighlight %}
{% highlight bash tabtitle="Cursor" %}

// Create a `.cursor/mcp.json` file in your workspace with the MCP server configuration:

{
  "mcpServers": {
    "sf-angular-mcp": {
      "command": "npx",
      "args": ["-y", "@syncfusion/angular-assistant@latest"],
      "env": {
        "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH"
        // or
        // "Syncfusion_API_Key": "YOUR_API_KEY"
      }
    }
  }
}

{% endhighlight %}
{% endtabs %}

**Verify Installation:** Check your editor's MCP server list for `sf-angular-mcp` with "Connected" status to confirm successful installation.

## What's Next

With the MCP server installed, explore the getting started guide for your chosen configuration:

- [Agentic UI Builder - Getting Started](./agentic-ui-builder/getting-started)
- [AI Coding Assistant - Getting Started](./ai-coding-assistant/getting-started)

## Troubleshooting

If you encounter issues during installation or while using the MCP server, refer to the solutions below:

| Issue | Solution |
|-------|----------|
| **Clear npm cache** | Run `npx clear-npx-cache` and restart your IDE to resolve package caching issues |
| **Server failed to start** | Update to Node.js 18+, verify JSON syntax in config file, and restart your IDE |
| **Invalid API key** | Verify your key is active at [Syncfusion Account Page](https://syncfusion.com/account/api-key) |
| **Incorrect API key config** | For the file path: Verify file location and content. For inline key: Check key is properly updated |
| **Wrong config file location** | VS Code: `.vscode/mcp.json` <br/> CodeStudio: `.codestudio/mcp.json` <br/>Cursor: `.cursor/mcp.json` in the workspace root |
| **Check IDE logs** | VS Code/CodeStudio: Output panel → "MCP" • Cursor: Developer Console for MCP errors |

## Support

Product support is available through the following media.

- [Support ticket](https://support.syncfusion.com/support/tickets/create) - Guaranteed response in 24 hours | Unlimited tickets | Holiday support
- [Community forum](https://www.syncfusion.com/forums/essential-js2)
- [Request feature or report bug](https://www.syncfusion.com/feedback/javascript)
- [Live chat](https://www.syncfusion.com/support)

## See also

- [MCP Tools Overview](./overview)
- [Agentic UI Builder - Getting Started](./agentic-ui-builder/getting-started)
- [AI Coding Assistant - Getting Started](./ai-coding-assistant/getting-started)
