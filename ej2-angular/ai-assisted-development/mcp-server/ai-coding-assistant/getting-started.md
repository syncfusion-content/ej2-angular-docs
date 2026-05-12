---
layout: post
title: Getting Started with the AI Coding Assistant | Syncfusion
description: Learn how to configure and use AI Coding Assistant for intelligent code generation, documentation, and troubleshooting in Angular apps.
control: Getting Started with the AI Coding Assistant
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the AI Coding Assistant

The **Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant** is designed to streamline the development workflow for Angular applications that use Syncfusion<sup style="font-size:70%">&reg;</sup> components. It leverages contextual knowledge of the Syncfusion component library to generate code snippets, configuration examples, and guided explanations—reducing documentation lookups and increasing productivity.

## Prerequisites

Before you begin, ensure you have:

* Required [Node.js](https://nodejs.org/en/) version >= 18
* A **compatible MCP client** (VS Code, Syncfusion<sup style="font-size:70%">&reg;</sup> Code Studio, Cursor, etc.)
* Active [Syncfusion<sup style="font-size:70%">&reg;</sup> API key](https://syncfusion.com/account/api-key)
* Angular application (existing or new); see [Quick Start](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-cli)
* Active Syncfusion<sup style="font-size:70%">&reg;</sup> license(any of the following):  
  - [Commercial License](https://www.syncfusion.com/sales/unlimitedlicense)  
  - [Free Community License](https://www.syncfusion.com/products/communitylicense)  
  - [Free Trial](https://www.syncfusion.com/account/manage-trials/start-trials)

## Installation

This section guides you through installing and configuring the Syncfusion MCP Server in your development environment.

### Getting your API Key

Before proceeding with the MCP installation, generate your Syncfusion API key from the [API Key page](https://www.syncfusion.com/account/api-key) and store it in a `.txt` or `.key` file:

```json
"env": {
  "Syncfusion_API_Key_Path": "D:\\syncfusion-key.txt"
}
```

> Users can also set the API key directly using `"Syncfusion_API_Key": "YOUR_API_KEY"` in the env configuration.

### Setting up in MCP Clients

Create a configuration file in your project folder to install the server for your workspace as shown below:

**Important:** Replace `YOUR_API_KEY_FILE_PATH` with the path to your API key file.

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
{% highlight bash tabtitle="Code Studio" %}

// Create a `.codestudio/mcp.json` file in your workspace with the MCP server configuration:

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

// After creating the file, click Start in the inline action to install the server.

{% endhighlight %}
{% highlight bash tabtitle="JetBrains" %}

// Open AI Assistant chat, type /, and select Add Command
// Click ➕ Add on the MCP settings page
// Choose STDIO and select JSON configuration

{
  "mcpServers": {
    "sf-angular-mcp": {
      "command": "npx.cmd",
      "args": [
        "-y",
        "@syncfusion/angular-assistant@latest"
      ],
      "env": {
        "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH"
        // or
        // "Syncfusion_API_Key": "YOUR_API_KEY"
      }
    }
  }
}

// Click OK, then click Apply. The server starts and shows Connected status.

{% endhighlight %}
{% endtabs %}

**Verify Installation:** Check your editor's MCP Server list for `sf-angular-mcp` with "Connected" status to confirm successful installation.

## Usage

Activate the AI Coding Assistant in your IDE by using the `#sf_angular_assistant` command followed by your query:

```
#sf_angular_assistant How do I enable paging and sorting in the Syncfusion Angular Grid?
```

### Common Use Cases

| Use Case | Description | Example Query |
|----------|-------------|---------------|
| **Component Generation** | Generate complete component implementations with configurations | `#sf_angular_assistant Create a data grid with inline editing, paging, and toolbar options for CRUD operations` |
| **Feature Implementation** | Get specific feature implementations for existing components | `#sf_angular_assistant Add export to Excel functionality in my existing Grid component` |
| **Troubleshooting** | Resolve issues by describing the problem | `#sf_angular_assistant Scheduler is not displaying events properly. What could be wrong with the data binding?` |
| **API Reference** | Quickly access API information | `#sf_angular_assistant What are the available event arguments for the Grid's actionComplete event?` |

### Best Practices

1. **Be Specific**: Include platform and component (e.g., "Create a Syncfusion Angular Grid with paging and filtering").
2. **Provide Context**: Share versions, desired behavior, and constraints.
3. **Use Descriptive Queries**: Avoid vague questions.
4. **Troubleshooting**: Use AI suggestions for common issues; consult official [documentation](https://ej2.syncfusion.com/angular/documentation) or [support](https://support.syncfusion.com/support/tickets/create) for complex problems.
5. **Start Fresh**: Begin a new chat for new topics to maintain clean context.

> Always review AI-generated code before using it in production.

## Troubleshooting

If you encounter issues during installation or while using the MCP server, refer to the solutions below:

| Issue | Solution |
|-------|----------|
| **Clear npm cache** | Run `npx clear-npx-cache` and restart your IDE to resolve package caching issues |
| **Server failed to start** | Update to Node.js 18+, verify JSON syntax in config file, and restart your IDE |
| **Invalid API key** | Verify your key is active at [Syncfusion Account Page](https://syncfusion.com/account/api-key) |
| **Incorrect API key config** | For the file path: Verify file location and content. For inline key: Check key is properly updated |
| **Wrong config file location** | VS Code: `.vscode/mcp.json` <br/> CodeStudio: `.codestudio/mcp.json` <br/> Cursor: `.cursor/mcp.json` in the workspace root |
| **Check IDE logs** | VS Code/CodeStudio: Output panel → "MCP" • Cursor: Developer Console for MCP errors |

## What's Next

Now that you've set up the AI Coding Assistant, explore these resources:

- **[Prompt Library](./prompt-library)** - Ready-to-use prompts for common scenarios
- **[Component Examples](https://ej2.syncfusion.com/angular/demos/#/grid/overview)** - Interactive demos of Syncfusion Angular components
- **[API Documentation](https://ej2.syncfusion.com/angular/documentation/api)** - Complete API reference
