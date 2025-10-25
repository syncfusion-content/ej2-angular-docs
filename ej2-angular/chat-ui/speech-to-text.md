---
layout: post
title: Speech-to-Text With Angular Chat UI component | Syncfusion
description:  Checkout and learn about configuration of Speech-to-Text with Angular Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Speech-to-Text in Angular Chat UI

The Syncfusion Angular Chat UI component integrates `Speech-to-Text` functionality through the browser's [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API). This enables the conversion of spoken words into text using the device's microphone, allowing users to interact with the Chat UI through voice input.

## Configure Speech-to-Text

To enable Speech-to-Text functionality in the Angular Chat UI component, update the `app.component.ts` file to incorporate the Web Speech API.

The [SpeechToText](https://ej2.syncfusion.com/angular/documentation/speech-to-text/getting-started) component listens to audio input from the device’s microphone, transcribes spoken words into text, and updates the Chat UI’s editable footer using the [footerTemplate](https://ej2.syncfusion.com/angular/documentation/api/chat-ui/#footertemplate) with an `ng-template` directive to display the transcribed text. Once the transcription appears in the footer, users can send it as a message to others.

### Configuration Options

* **[`lang`](https://ej2.syncfusion.com/angular/documentation/api/speech-to-text/#lang)**: Specifies the language for speech recognition. For example:

    * `en-US` for American English
    * `fr-FR` for French

* **[`allowInterimResults`](https://ej2.syncfusion.com/angular/documentation/api/speech-to-text/#allowinterimresults)**: Set to `true` to receive real-time (interim) recognition results, or `false` to receive only final results.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/stt/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/stt/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/stt" %}

## Error Handling

The `SpeechToText` component provides events to handle errors that may occur during speech recognition. For more information, refer to the [Error Handling](https://ej2.syncfusion.com/angular/documentation/speech-to-text/speech-recognition#error-handling) section in the documentation.

## Browser Compatibility

The `SpeechToText` component relies on the [Speech Recognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition), which has limited browser support. Refer to the [Browser Compatibility](https://ej2.syncfusion.com/angular/documentation/speech-to-text/speech-recognition#browser-support) section for detailed information.

## See Also

* [Messages](./messages)
