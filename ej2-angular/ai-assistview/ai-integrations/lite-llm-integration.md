---
layout: post
title: LiteLLM With Angular AI AssistView component | Syncfusion
description:  Checkout and learn about Integration of LiteLLM With Angular AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Integrate LiteLLM with Angular AI AssistView Component

The AI AssistView component can be integrated with [LiteLLM](https://docs.litellm.ai/docs), an open-source proxy that provides a unified OpenAI-compatible API for multiple LLM providers such as [OpenAI](https://openai.com) and [Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-foundry/models/openai). The AI AssistView component serves as a user interface where prompts are sent to the LiteLLM proxy, which forwards them to the configured LLM provider. This enables natural language understanding and context-aware responses.

## Prerequisites

Before starting, ensure you have the following:

* **Node.js**: Version 16 or higher with npm.

* **OpenAI Account**: With access to OpenAI services and a generated API key.

* **Python**: To run LiteLLM proxy.

* **Syncfusion AI AssistView**: Package [@syncfusion/ej2-angular-interactive-chat](https://www.npmjs.com/package/@syncfusion/ej2-angular-interactive-chat) installed.

* **Marked Library**: For parsing Markdown responses (`npm install marked --save`).

## Set Up the Angular Environment

Follow the [Getting Started](../getting-started) guide to configure and render the AI AssistView component in your Angular application using Angular CLI.

## Configure the LiteLLM Proxy

Create a file named `config.yaml` in your `src` folder for LiteLLM. This proxy:

* Exposes an OpenAI-compatible REST API endpoint `/v1/chat/completions` for your Angular app.
* Routes requests to the configured LLM provider like `OpenAI` or `Azure OpenAI` using the API key provided.
* Supports optional authentication using a `master_key` for secure access.

{% tabs %}
{% highlight js tabtitle="config.yaml" %}
{% include code-snippet/ai-assistview/ai-integrations/lite-llm/src/config.yaml %}
{% endhighlight %}
{% endtabs %}

## Configure AI AssistView with LiteLLM 

To integrate LiteLLM with the Syncfusion AI AssistView component, update the `app.component.ts` file in your Angular application. The component will send user prompts to the LiteLLM proxy, which forwards them to the configured LLM provider (e.g., OpenAI or Azure OpenAI) and returns natural language responses.

In the following sample, the [promptRequest](https://ej2.syncfusion.com/angular/documentation/api/ai-assistview/aiassistviewmodel#promptrequest) event sends the user prompt to the LiteLLM proxy at `/v1/chat/completions`. The proxy uses the model alias defined in `config.yaml` (e.g., openai/gpt-4o-mini) and routes the request to the actual LLM provider. The response is parsed as Markdown using the `marked` library and displayed in the AI AssistView component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/ai-integrations/lite-llm/src/app.component.ts %}
{% endhighlight %}

{% highlight js tabtitle="config.yaml" %}
{% include code-snippet/ai-assistview/ai-integrations/lite-llm/src/config.yaml %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/ai-integrations/lite-llm/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/ai-integrations/lite-llm" %}

## Run and Test

### Start the proxy:

Navigate to your `src` folder and run the following command to start the proxy:

```bash

pip install "litellm[proxy]"
litellm --config ".\src\config.yaml" --port 4000 --host 0.0.0.0

```

### Start the frontend:

In a separate terminal window, navigate to your project folder and start the development server:

```bash

ng serve

```

Open your app to interact with the AI AssistView component integrated with LiteLMM.

## Troubleshooting

* `401 Unauthorized`: Verify your `API_KEY` and model deployment name.
* `Model not found`: Ensure model matches `model_name` in `config.yaml`.
* `CORS issues`: Configure `router_settings.cors_allow_origins` properly.
