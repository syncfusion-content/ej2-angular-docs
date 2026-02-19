---
layout: post
title: Installation Guide | Syncfusion AI Tools
description: Step-by-step guide to install and set up the Syncfusion AI Tools MCP server in VS Code, Cursor, and Code Studio for AI-powered Angular development.
control: Installation
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Installing Syncfusion AI Tools

Syncfusion AI Tools provide intelligent development assistance for building Angular applications with Syncfusion components. The tools are delivered through an MCP (Model Context Protocol) server that integrates seamlessly with your AI-powered development environment.

## Tool Packages

Syncfusion AI Tools come in two powerful configurations:

- **Agentic UI Builder** – A complete toolkit for building user interfaces with Layout, Component, and Styling tools. Features an intelligent orchestrator that coordinates multi-step workflows automatically.
- **AI Coding Assistant** – Focused development support with Component tool, plus a streamlined orchestrator for component integration tasks.

This guide will help you install and set up the tools so you can start building Angular applications with AI assistance right away.

## Prerequisites

Before you begin, make sure you have:

- Required [Node.js](https://nodejs.org/en/) version >= 18
- A **compatible MCP client** (VS Code, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio, etc.)
- An active [Syncfusion<sup style="font-size:70%">&reg;</sup> API key](https://syncfusion.com/account/api-key)
- An Angular application (existing or new); see [Quick Start](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-cli)
- An active Syncfusion<sup style="font-size:70%">&reg;</sup> license (any of the following):  
  - [Commercial License](https://www.syncfusion.com/sales/unlimitedlicense)  
  - [Free Community License](https://www.syncfusion.com/products/communitylicense)  
  - [Free Trial](https://www.syncfusion.com/account/manage-trials/start-trials)

### Getting Your API Key

Before proceeding with installation, obtain your Syncfusion API key:

1. Log in to your [Syncfusion account](https://www.syncfusion.com/account/)
2. Navigate to the [API Key page](https://www.syncfusion.com/account/api-key)
3. Generate your API key
4. Keep this key ready for the configuration steps below

There are two options:

- **Using an API Key File (Recommended)**

  Store your API key in a separate file and reference its path in the `Syncfusion_API_Key_Path` environment parameter. This approach is more secure as you don't expose the key directly in configuration files.

  **Supported file formats:** `.txt` or `.key`

```json
"env": {
  "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH" // "D:\\syncfusion-key.txt" or "D:\\syncfusion-key.key"
}
```

- **Using a Direct API Key**

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

## Setting Up in MCP Clients

Syncfusion AI Tools can be configured at two levels:

- **Global-level**—Server is available across all projects in your IDE
- **Workspace-level**—Server is available only for a specific project or workspace

The following sections provide detailed setup instructions for popular development environments.

### Global Configuration

To make the Syncfusion MCP server available across all workspaces:
- For VS Code, click <a target="_blank" href="https://insiders.vscode.dev/redirect/mcp/install?name=sf-angular-mcp&config=%7B%22type%22%3A%22stdio%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40syncfusion%2Fangular-assistant%40latest%22%5D%2C%22env%22%3A%7B%22Syncfusion_API_Key%22%3A%22YOUR_API_KEY%22%7D%7D">here</a>.
- For Cursor, click <a target="_blank" href="https://cursor.com/en/install-mcp?name=sf-angular-mcp&config=eyJ0eXBlIjoic3RkaW8iLCJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBzeW5jZnVzaW9uL2FuZ3VsYXItYXNzaXN0YW50QGxhdGVzdCJdLCJlbnYiOnsic3luY2Z1c2lvbl9BcGlfS2V5IjoiWU9VUl9BUElfS0VZIn19">here</a>.
- In [Code Studio](https://www.syncfusion.com/code-studio/), open the MCP Marketplace, find `Syncfusion Angular Assistant`, and click Install.  
- When prompted, provide your [Syncfusion API key](https://syncfusion.com/account/api-key) to register the MCP.  
- The server installs locally and is available in the Installed list—it is then ready to use. See [Code Studio documentation](https://help.syncfusion.com/code-studio/reference/configure-properties/mcp/marketplace) for details.

### Workspace Configuration

To install the server for a specific project, create a configuration file in your project folder.

**Important:** Replace `YOUR_API_KEY_FILE_PATH` or `YOUR_API_KEY` with your actual API key in the config below.

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
{% highlight bash tabtitle="JetBrains IDEs" %}

// Go to Settings → Tools → AI Assistant → Model Context Protocol (MCP)
// Add a new MCP server and paste the JSON configuration (use `npx` command on Windows with `npx.cmd` if required)

{
  "mcpServers": {
    "syncfusion-angular-assistant": {
      "command": "npx.cmd",
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

**Verify Installation:** Check your editor's MCP server list. If `sf-angular-mcp` appears with a "Connected" status, you're all set!

## What's Next

Now that you've installed the MCP server, you're ready to start building!

Based on your toolset, explore the appropriate getting started guide:

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
- Live chat

## See also

- [AI Tools Overview](./overview)
- [Agentic UI Builder - Getting Started](./agentic-ui-builder/getting-started)
- [AI Coding Assistant - Getting Started](./ai-coding-assistant/getting-started)
