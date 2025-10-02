---
layout: post
title: Gemini AI With Angular AI AssistView component | Syncfusion
description:  Checkout and learn about Integration of Gemini AI With Angular AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---


# Integration of Gemini AI With Angular AI AssistView component 

The Syncfusion AI AssistView supports integration with [Gemini](https://ai.google.dev/gemini-api/docs), enabling advanced conversational AI features in your Angular applications.

## Getting Started with the Angular AI AssistView component

Before integrating Gemini AI, ensure that the Syncfusion AI AssistView component is correctly rendered in your Angular app:

[Angular Getting Started Guide](../getting-started)

## Prerequisites

* Requires `Node.js` (v16 or higher) and `npm`.
* Google account to generate API key on accessing [Gemini](https://ai.google.dev/gemini-api/docs).
* Syncfusion AI AssistView for Angular `@syncfusion/ej2-angular-interactive-chat` installed in your project.

## Install Dependencies

Install the Syncfusion AI AssistView in your project

```bash 

npm install @syncfusion/ej2-angular-interactive-chat --save

```

Install the Gemini AI dependencies

```bash

npm install @google/generative-ai

```

## Generate API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey) and sign in with your google account. If you don’t have one, create a new account. 

2. Once logged in, click on `Get API Key` from the left-hand menu or the top-right corner of the dashboard. 

3. Click the `Create API Key` button. You’ll be prompted to either select an existing Google Cloud project or create a new one. Choose the appropriate option and proceed. 

4. After selecting or creating a project, your API key will be generated and displayed. Copy the key and store it securely, as it will only be shown once.

> `Security Note`: Never commit the API key to version control. Use environment variables or a secret manager for production.

##  Integration Gemini AI with AI AssistView

Create a standalone `app.component.ts` to integrate the Gemini AI with AI AssistView component

* Add your generated `API Key` at the line 

```bash

const geminiApiKey = 'Place your API key here'; 

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/ai-integrations/gemini-ai/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/ai-integrations/gemini-ai/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/ai-integrations/gemini-ai" %}

## Run and Test 

Run the application in the browser using the following command.

```bash

ng serve

```

Open the hosted link to interact with the Gemini AI for dynamic response