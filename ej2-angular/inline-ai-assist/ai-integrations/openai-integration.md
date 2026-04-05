---
layout: post
title: Azure OpenAI With Angular Inline AI Assist component | Syncfusion
description:  Checkout and learn about Integration of Azure OpenAI With Angular Inline AI Assist component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Integrate Azure OpenAI with Angular Inline AI Assist Component

The Inline AI Assist component integrates with [Azure OpenAI](https://microsoft.github.io/PartnerResources/skilling/ai-ml-academy/resources/openai) to enable advanced conversational AI features in your Angular applications. The component acts as a user interface, where user prompts are sent to the Azure OpenAI service via API calls, providing natural language understanding and context-aware responses.

## Prerequisites

Before starting, ensure you have the following:

* **Node.js**: Version 16 or higher with npm.

* **Azure Account**: With access to Azure OpenAI services and a generated API key.

* **Syncfusion Inline AI Assist**: Package [@syncfusion/ej2-angular-interactive-chat](https://www.npmjs.com/package/@syncfusion/ej2-angular-interactive-chat) installed.

* **Angular CLI**: For project setup and execution.

* **Marked Library**: For parsing Markdown responses (`npm install marked --save`).

## Set Up the Angular Environment

Follow the [Getting Started](../getting-started) guide to configure and render the Inline AI Assist component in your Angular application using Angular CLI.

## Install Dependencies

To install the marked library, run `npm install marked --save` in your project directory to add it as a dependency in your package.json file.

## Configure Azure OpenAI

1. Log in to the [Azure Portal](https://portal.azure.com/#home) and navigate to your Azure OpenAI resource. 

2. Under resource Management, select keys and endpoint to retrieve your API key and endpoint URL.

3. Note the following values:
   - API key
   - Endpoint
   - API version (must be supported by your resource)
   - Deployment name (for example, gpt-4o-mini)

4. Store these values securely, as they will be used in your application.

> `Security Note`: Never expose your API key in client-side code for production applications. Use a server-side proxy or environment variables to manage sensitive information securely.

## Configure Inline AI Assist with Azure OpenAI 

Modify the a standalone `app.component.ts` file to integrate Azure OpenAI with the Syncfusion Inline AI Assist component. 

* Update the following configuration values with Azure OpenAI details:

```bash

const azureOpenAIApiKey = 'Your_Azure_OpenAI_API_Key';
const azureOpenAIEndpoint = 'Your_Azure_OpenAI_Endpoint';
const azureOpenAIApiVersion = 'Your_Azure_OpenAI_API_Version';
const azureDeploymentName = 'Your_Deployment_Name';

```

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/inline-ai-assist/ai-integrations/open-ai/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/inline-ai-assist/ai-integrations/open-ai/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/inline-ai-assist/ai-integrations/open-ai/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/inline-ai-assist/ai-integrations/open-ai/src/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/inline-ai-assist/ai-integrations/open-ai" %}
