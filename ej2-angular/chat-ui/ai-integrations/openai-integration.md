---
layout: post
title: Azure Open AI With Angular Chat UI component | Syncfusion
description:  Checkout and learn about Integration of Azure Open AI With Angular Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Integration of Azure Open AI With Angular Chat UI component 

The Syncfusion Chat UI supports integration with [Azure Open AI](https://microsoft.github.io/PartnerResources/skilling/ai-ml-academy/resources/openai), enabling advanced conversational AI features in your Angular applications.

## Prerequisites

* Requires `Node.js` (v16 or higher) and `npm`.
* An Azure account with access to `Azure Open AI` services and a generated API key.
* Syncfusion Chat UI for Angular `@syncfusion/ej2-angular-interactive-chat` installed in your project.

## Getting Started with the Angular Chat UI component

Before integrating Azure Open AI, ensure that the Syncfusion Chat UI control is correctly rendered in your Angular app:

[Angular Getting Started Guide](../getting-started)

## Install Dependencies

Install the Syncfusion Chat UI in your project

```bash 

npm install @syncfusion/ej2-angular-interactive-chat --save

```

Install the Open AI dependencies

```bash

npm install openai

```

## Configure Azure Open AI

1. Log in to the [Azure Portal](https://portal.azure.com/#home) and navigate to your Azure Open AI resource.

2. Under Resource Management, select Keys and Endpoint to retrieve your API key and endpoint URL. 

3. Copy the API key, endpoint, and deployment name (e.g., gpt-4o-mini). Ensure the API version (e.g., 2024-07-01-preview) matches your resource configuration.

4. Store these values securely, as they will be used in your application.

> `Security Note`: Never expose your API key in client-side code for production applications. Use a server-side proxy or environment variables to manage sensitive information securely.

##  Integration Azure Open AI with Chat UI

Create a standalone `app.component.ts` to integrate the Open AI with Syncfusion Chat UI component

* Update the following configuration values with your Azure Open AI details:

```bash

const azureOpenAIApiKey = 'Your_Azure_OpenAI_API_Key';
const azureOpenAIEndpoint = 'Your_Azure_OpenAI_Endpoint';
const azureOpenAIApiVersion = 'Your_Azure_OpenAI_API_Version';
const azureDeploymentName = 'Your_Deployment_Name';

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/ai-integrations/open-ai/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/ai-integrations/open-ai/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/ai-integrations/open-ai" %}

## Run and Test 

Run the application in the browser using the following command.

```bash

npm serve

```

Open `http://localhost:4200` to interact with your Azure Open AI for dynamic response.
