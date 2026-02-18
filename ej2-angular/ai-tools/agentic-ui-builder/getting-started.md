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

Build professional Angular applications faster with AI-powered assistance. The Syncfusion Angular UI Builder uses natural language to help you create complete user interfaces with Syncfusion components—no need to memorize complex APIs or search through documentation.

This guide will help you install and start using the UI Builder in your development workflow.

## Installation

Follow the [Installation Guide](../installation) to set up the AI Tools in your development environment.

## Usage

Once installed, open your AI assistant in the IDE and describe what you want to build with the `#sf_angular_ui_builder` command:

```
#sf_angular_ui_builder Create a dashboard with a sales data grid and monthly trend chart.
```

The UI Builder generates complete implementations including layout, components, and styling.

**Note:** Using the `#sf_angular_ui_builder` handle ensures the Agentic UI Builder is invoked directly. Alternatively, you can use natural language without the handle—just make sure to include the "Syncfusion" keyword in your prompt so the AI model can automatically recognize and call the appropriate generator.

## Individual Tools

For targeted assistance, you can call individual tools directly using their specific tool names. This is useful when you need specialized help from a particular tool.

| Tool Handle | Purpose | Example Query |
|--------------|---------|---------------|
| `#sf_angular_layout` | Provides UI block patterns and layout structures from the catalog. Generates up to 3 relevant code snippets based on your layout requirements. Use this tool when you need page structures, responsive layouts, or pre-built UI patterns. | #sf_angular_layout Create a responsive card layout for product listings. |
| `#sf_angular_component` | Answers questions and provides metadata about Syncfusion Angular components. Delivers component APIs, inputs, methods, and configuration options. Use this tool when you need to implement or configure specific components like DataGrid, Scheduler, Charts, etc. | #sf_angular_component How do I implement data binding with Syncfusion Angular Scheduler? |
| `#sf_angular_style` | Generates theme configurations, icons and styling guidance for your application. Provides Syncfusion theme customization using third-party CSS frameworks: Tailwind CSS utilities (Tailwind 3, Fluent 2, Material 3 themes) or Bootstrap CSS utilities (Bootstrap 5.3 theme). Use this tool when you need to apply themes, customize colors, or modify the visual design of components, or integrate icons into your UI. | #sf_angular_style How do I apply the Syncfusion Tailwind 3 dark theme and add a communication icon inside a button? |

**Note:** When building custom design projects where you need full control over the structure, you can bypass the Layout Tool by including "skip the layout" in your query. This generates only component implementations without pre-built layout patterns.

## Best Practices

To maximize the effectiveness of the Agentic UI Builder and achieve optimal results:

- **Minimize Active Tools:** Limit the number of active MCP tools in your IDE to prevent tool-selection ambiguity and improve response accuracy.
- **Start Simple:** Begin with straightforward prompts and progressively add complexity as needed.
- **Be Specific:** Provide clear, specific descriptions of your layout requirements, component behavior, and design preferences.
- **Reference Patterns:** Mention existing design systems, component libraries, or specific patterns you want to replicate.
- **Stay Consistent:** Maintain consistent file organization, naming conventions, and coding standards throughout your Angular project.
- **Generate One Block at a Time:** For better control and precision—break down complex layouts into individual sections rather than requesting multiple blocks simultaneously.
- **Use Advanced AI Models:** For best results, use high-capability models where available. Higher-capability models produce better code quality and more accurate component implementations.

> Always review AI-generated code before using it in production.

## What's Next

Now that you've set up the Agentic UI Builder, explore these resources:

* **[Prompt Library](./prompt-library)** - Ready-to-use prompts for common scenarios
* **[Showcase Sample Projects](https://www.syncfusion.com/showcase-apps)** - Full application examples
* **[Component Examples](https://ej2.syncfusion.com/angular/demos/#/grid/overview)** - Interactive demos of Syncfusion Angular components

## See Also

* [Prompt Library](./prompt-library)
* [Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Documentation](https://ej2.syncfusion.com/angular/documentation)
