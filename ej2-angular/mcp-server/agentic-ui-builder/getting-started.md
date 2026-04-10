---
layout: post
title: Getting Started with Agentic UI Builder | Syncfusion
description: Learn how to set up and use the Syncfusion Angular UI Builder MCP Server for AI-powered assistance in building Angular applications with Syncfusion components.
control: Getting started with Syncfusion Angular UI Builder MCP Server
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Agentic UI Builder

The **Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Builder** uses AI to help you build Angular applications with natural language commands. Simply describe what you want to create, and it generates complete UI implementations with Syncfusion components.

This guide will help you install and start using the UI Builder in your development workflow.

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

Once installed, open your AI assistant in the IDE and describe what you want to build with the `#sf_angular_ui_builder` command:

```
#sf_angular_ui_builder Create a dashboard with a sales data grid and monthly trend chart.
```

The UI Builder generates complete implementations including layout, components, and styling.

> Note: Using the `#sf_angular_ui_builder` tool ensures the Agentic UI Builder is invoked directly. Alternatively, you can use natural language without the tool—just make sure to include the "Syncfusion" keyword in your prompt so the AI model can automatically recognize and call the appropriate generator.

## Individual Tools

For targeted assistance, you can call individual tools directly using their specific tool names. This is useful when you need specialized help from a particular tool.

### Layout Tool (`#sf_angular_layout`)

Provides a catalog of pre-built, responsive UI layout templates and blocks for common page sections and design patterns.

**When to use:** Page structures, responsive layouts, or pre-built UI patterns.

**Example:**
```
#sf_angular_layout Create a responsive card layout for product listings.
```

### Component Tool (`#sf_angular_component`)

Provides quick reference guidelines for Syncfusion Angular components, including properties, event handlers, methods, and usage examples.

**When to use:** To get basic component API information and structure details for implementing specific components correctly.

**Example:**
```
#sf_angular_component How do I integrate a data table?
```

### Style Tool (`#sf_angular_style`)

Provides theme configuration, styling setup, and icon integration for Syncfusion Angular components. Supports multiple themes (Tailwind3 CSS, Bootstrap 5.3, Material 3, Fluent 2), light/dark mode implementation, and icon patterns for consistent UI styling.

**When to use:** To apply themes, customize colors, modify the visual design of components, or integrate icons into your UI.

**Example:**
```
#sf_angular_style How do I apply the Syncfusion Tailwind 3 dark theme and add a communication icon inside a button?
```

## Best Practices

To maximize the effectiveness of the Agentic UI Builder and achieve optimal results:

- **Minimize active tools:** Limit the number of active MCP Server in your IDE to prevent tool-selection ambiguity and improve response accuracy.
- **Start simple:** Begin with straightforward prompts and progressively add complexity as needed.
- **Be specific:** Provide clear, specific descriptions of your layout requirements, component behavior, and design preferences.
- **Reference patterns:** Mention existing design systems, component libraries, or specific patterns you want to replicate.
- **Stay consistent:** Maintain consistent file organization, naming conventions, and coding standards throughout your Angular project.
- **Work incrementally:** For better control and precision—break down complex layouts into individual sections rather than requesting multiple blocks simultaneously.
- **Use advanced AI models:** For best results, use high-capability models where available. Higher-capability models produce better code quality and more accurate component implementations.

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

Now that you've set up the Agentic UI Builder, explore these resources:

* **[Prompt Library](./prompt-library)** - Ready-to-use prompts for common scenarios
* **[Showcase Sample Projects](https://www.syncfusion.com/showcase-apps)** - Full application examples
* **[Component Examples](https://ej2.syncfusion.com/angular/demos/#/grid/overview)** - Interactive demos of Syncfusion Angular components
* [Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Documentation](https://ej2.syncfusion.com/angular/documentation)
