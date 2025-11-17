---
layout: post
title: ChatGPT Integration With Angular AI AssistView component | Syncfusion
description:  Checkout and learn about Integration of ChatGPT with Azure OpenAI in Angular AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Integration of ChatGPT with Angular AI AssistView component

The AI AssistView component integrates with [Azure OpenAI](https://microsoft.github.io/PartnerResources/skilling/ai-ml-academy/resources/openai) to provide conversational AI features. By configuring the control to communicate with the Azure OpenAI API, the application can handle user prompts, stream or fetch responses, and display generated content that enables a seamless chat experience.

## Prerequisites

Before integrating `ChatGPT UI`, ensure the following:

1. The AI AssistView control is properly set up in your application.
    - [Getting Started Guide](../getting-started)

2. In addition, the following syncfusion components are also used to showcase the chatGPT like UI.
    - [Button](https://ej2.syncfusion.com/angular/documentation/button/getting-started) 
    - [Sidebar](https://ej2.syncfusion.com/angular/documentation/sidebar/getting-started)
    - [ListView](https://ej2.syncfusion.com/angular/documentation/listview/getting-started)

3. Connecting the AI AssistView with the Azure OpenAI service.
    - [Integration of Azure OpenAI With AI AssistView control](../ai-integrations/openai-integration)

## Conversation history and session management

The **AI AssistView** component demonstrates the seamless integration of AI capabilities with conversation history management which includes the following.

*   **Sidebar** for neatly organized conversation history.
*   **New Chat** functionality to initiate fresh conversations, along with a customizable banner using [bannerTemplate](../api/ai-assistview/#bannertemplate) for displaying helpful guidance messages.
*   **Smart follow-up suggestions** after each response, powered by [promptSuggestions](../api/ai-assistview/#promptsuggestions).
*   **Attachment support** with configurable upload endpoints.
*   **LocalStorage**-based persistence to retain prompts and suggestions across sessions.

> Conversations are stored locally in the browser under the `aiassist-view` key. This data can be cleared by removing the key from local storage.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/how-to/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/how-to/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/how-to" %}