---
layout: post
title: LiteLLM With Angular Inline AI Assist component | Syncfusion
description:  Checkout and learn about Integration of LiteLLM With Angular Inline AI Assist component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Integrate Inline AI Assist with LiteLLM

The **Inline AI Assist** component can also be integrated with [LiteLLM](https://docs.litellm.ai/docs), an open-source proxy that provides a unified, OpenAI-compatible API for multiple LLM providers such as [OpenAI](https://openai.com) and [Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-foundry/models/openai).

In this setup:
* **Inline AI Assist** serves as the user interface for entering prompts.
* Prompts are sent to the **LiteLLM proxy**, which forwards them to the configured LLM provider.
* The LLM provider processes the prompt and returns a response through LiteLLM.
* This enables **natural language understanding** and **context-aware responses** without changing the Inline AI Assist integration logic, as LiteLLM uses the same OpenAI-style API.

## Prerequisites

Before starting, ensure you have the following:

* **Node.js**: Version **16 or higher** with **npm** installed.

* **OpenAI Account**: Access to OpenAI services and a generated **API key**.

* **Python**: Required to run the **LiteLLM proxy**.

* **Syncfusion Inline AI Assist**: Install the package [@syncfusion/ej2-angular-interactive-chat](https://www.npmjs.com/package/@syncfusion/ej2-angular-interactive-chat).

* **Marked Library**: For parsing Markdown responses

```Shell

npm install marked --save
```

## Configure Inline AI Assist with LiteLLM

To integrate **LiteLLM** with the **Syncfusion Inline AI Assist** component, update the `app.component.ts` file in your Angular application. The component will send user prompts to the LiteLLM proxy, which forwards them to the configured LLM provider (e.g., **OpenAI** or **Azure OpenAI**) and returns natural language responses.

In the following example:

* The [promptRequest](https://ej2.syncfusion.com/angular/documentation/api/inline-ai-assist/inlineaiassistmodel#promptrequest) event sends the user prompt to the LiteLLM proxy at `/v1/chat/completions`. 
* The proxy uses the **model alias** defined in `config.yaml` (e.g., `openai/gpt-4o-mini`) and routes the request to the actual LLM provider. 
* The response is parsed as **Markdown** using the `marked` library and displayed in the Inline AI Assist component.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/inline-ai-assist/ai-integrations/lite-llm/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/inline-ai-assist/ai-integrations/lite-llm/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/inline-ai-assist/ai-integrations/lite-llm/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/inline-ai-assist/ai-integrations/lite-llm/src/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/inline-ai-assist/ai-integrations/lite-llm" %}

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
Open your app to interact with the Inline AI Assist component integrated with LiteLMM.

## Troubleshooting
* `401 Unauthorized`: Verify your `API_KEY` and model deployment name.
* `Model not found`: Ensure model matches `model_name` in `config.yaml`.
* `CORS issues`: Configure `router_settings.cors_allow_origins` properly.