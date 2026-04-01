---
layout: post
title: Gemini AI With Angular Inline AI Assist component | Syncfusion
description:  Checkout and learn about Integration of Gemini AI With Angular Inline AI Assist component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---


# Integrate Gemini AI with Angular Inline AI Assist component

The Inline AI Assist component integrates with Google’s [Gemini](https://ai.google.dev/gemini-api/docs) API to deliver intelligent conversational interfaces. It leverages advanced natural language understanding to interpret user input, maintain context throughout interactions, and provide accurate, relevant responses. By configuring secure authentication and data handling, developers can unlock powerful AI-driven communication features that elevate user engagement and streamline support experiences.

## Prerequisites

Before starting, ensure you have the following:

* **Node.js**: Version 16 or higher with npm.

* **Google Account**: For generating a Gemini API key.

* **Syncfusion Inline AI Assist**: Package [@syncfusion/ej2-angular-interactive-chat](https://www.npmjs.com/package/@syncfusion/ej2-angular-interactive-chat) installed.

* **Angular CLI**: For project setup and execution.

* **Marked Library**: For parsing Markdown responses (`npm install marked --save`).

## Set Up the Angular Environment

Follow the [Getting Started](../getting-started) guide to configure and render the Inline AI Assist component in your Angular application using Angular CLI.

## Install Dependencies

To install the marked library, run `npm install marked --save` in your project directory to add it as a dependency in your package.json file.

## Generate API Key

1. Access Google AI Studio: Instructs users to sign into [Google AI Studio](https://aistudio.google.com/app/apikey) with a Google account or create a new account if needed. 

2. Navigate to API Key Creation: Go to the `Get API Key` option in the left-hand menu or top-right corner of the dashboard. Click the `Create API Key` button. 

3. Project Selection: Choose an existing Google Cloud project or create a new one.

4. API Key Generation: After project selection, the API key is generated. Users are instructed to copy and store the key securely, as it is shown only once.

> `Security Note`: Advises against committing the API key to version control and recommends using environment variables or a secret manager in production.

## Configure Gemini AI with Inline AI Assist

To integrate Gemini AI with the Syncfusion Inline AI Assist component in your Angular application:

* Modify the a standalone `app.component.ts` file to host the integration logic.

* Add your Gemini API key securely in the configuration:

```bash

const geminiApiKey = 'Place your API key here'; 

```

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/inline-ai-assist/ai-integrations/gemini-ai/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/inline-ai-assist/ai-integrations/gemini-ai/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/inline-ai-assist/ai-integrations/gemini-ai/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/inline-ai-assist/ai-integrations/gemini-ai/src/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/inline-ai-assist/ai-integrations/gemini-ai" %}
