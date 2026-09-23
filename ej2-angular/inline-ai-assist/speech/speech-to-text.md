---
layout: post
title: Speech to Text in Angular Inline AI Assist | Syncfusion®
description: Enable Speech-to-Text in Angular Inline AI Assist via the browser Web Speech API to convert voice input into prompts.
platform: ej2-angular
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Speech to Text in Angular Inline AI Assist

The Syncfusion Angular Inline AI Assist component integrates `Speech-to-Text` functionality through the browser's [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API). This enables the conversion of spoken words into text using the device's microphone, allowing users to interact with the AI AssistView through voice input.

## Prerequisites

Before integrating `Speech-to-Text`, ensure the following:

1. The Syncfusion Inline AI Assist component is properly set up in your Angular application.
    - [Angular Getting Started Guide](../getting-started)

2. The Inline AI Assist component is integrated with [Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-foundry/models/openai/).
    - [Integration of Azure OpenAI With Angular Inline AI Assist component](../ai-integrations/openai-integration.md)

## Enable built-in speech-to-text

You can enable speech-to-text support using the [speechToTextSettings](../api/inline-ai-assist#speechtotextsettings) property. Set the `enable` property to `true` within the speechToTextSettings configuration to activate this feature.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/inline-ai-assist/speech/stt/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/inline-ai-assist/speech/stt/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/inline-ai-assist/speech/stt" %}

## Configure speech recognition language

The [lang](../api/inline-ai-assist#speechtotextsettings) property allows you to set the language code for speech recognition. By default, it uses the browser's language settings, but you can specify a custom language code (e.g., 'en-US', 'es-ES', 'fr-FR', etc.). This ensures that the speech recognition engine recognizes and transcribes speech in the specified language accurately.

## Configure speech button settings

The [buttonSettings](../api/inline-ai-assist#speechtotextsettings) property lets you customize the microphone button's appearance and text content by configuring the `content` (text displayed when idle), `stopContent` (text displayed when recording), `iconCss` (icon when idle), and `stopIconCss` (icon when recording). This allows you to tailor the UI to match your application's design and provide clear visual feedback to users.

## Enable interim results

The [allowInterimResults](../api/inline-ai-assist#speechtotextsettings) property enables real-time transcription results while the user is still speaking. When set to `true`, the speech recognition engine returns interim transcripts (partial results) as it processes the audio. This provides immediate feedback to users, allowing them to see their speech being recognized in real-time before the final transcript is generated.

This example demonstrates how to set up the Inline AI Assist with all these speech recognition features enabled:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/inline-ai-assist/speech/speech-configuration/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/inline-ai-assist/speech/speech-configuration/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/inline-ai-assist/speech/speech-configuration" %}

## Configure tooltip settings

You can customize the tooltips to the microphone button using the [tooltipSettings](../api/inline-ai-assist#speechtotextsettings) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/inline-ai-assist/speech/tooltip-settings/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/inline-ai-assist/speech/tooltip-settings/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/inline-ai-assist/speech/tooltip-settings" %}

## Speech to text events

The speech-to-text functionality provides events like `onStart` (when recognition starts), `onStop` (when it stops), `transcriptChanged` (when transcript updates), and `onError` (when errors occur).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/inline-ai-assist/speech/speech-events/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/inline-ai-assist/speech/speech-events/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/inline-ai-assist/speech/speech-events" %}

## Browser compatibility

The `SpeechToText` control relies on the [Speech Recognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition), which has limited browser support. Refer to the [Browser Compatibility](https://ej2.syncfusion.com/documentation/speech-to-text/speech-recognition#browser-support) section for detailed information.