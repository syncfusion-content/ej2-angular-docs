---
layout: post
title: Events in Angular SpeechToText component | Syncfusion
description: Checkout and learn about Events in Angular SpeechToText component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: SpeechToText
documentation: ug
domainurl: ##DomainURL##
---

# Events in ##Platform_Name## SpeechToText component

This section describes the SpeechToText events that will be triggered when appropriate actions are performed. The following events are available in the SpeechToText component.
 
|Name|Args|Description|
|---|---|---|
|created|-|Triggers when the SpeechToText component's rendering is fully completed|
|onStart|StartListeningEventArgs|Triggers when the speech recognition begins.|
|onStop|StopListeningEventArgs|Triggers when the speech recognition stops.|
|onError|ErrorEventArgs|Triggers when an error occurs during speech recognition or while listening. For list of possible errors, refer to the [Error handling](./speech-recognition#error-handling) section.|
|transcriptChanged|TranscriptChangedEventArgs|Triggers when an transcription change occurs during the speech recognition.|

The following example demonstrates how to configure the SpeechToText events.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/speech-to-text/events/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/speech-to-text/events/src/styles.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speech-to-text/events/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/speech-to-text/events/index" %}
