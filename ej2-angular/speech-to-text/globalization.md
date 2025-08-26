---
layout: post
title: Globalization in Angular SpeechToText Component | Syncfusion
description: Checkout and learn about globalization in Syncfusion Essential Angular SpeechToText component, its elements, and more details.
platform: ej2-angular
control: SpeechToText
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in ##Platform_Name## SpeechToText component

## Localization

The SpeechToText component can be localized for any culture. By default, its locale is `en-US`. To adapt the component to other languages, use the `L10n.load` method to load translation data for a specific locale.

The following table outlines the default text identifiers and their `en-US` values.

|KEY|Text|
|----|----|
|abortedError|Speech recognition was aborted.|
|audioCaptureError|No microphone detected. Ensure your microphone is connected.|
|defaultError|An unknown error occurred.|
|networkError|Network error occurred. Check your internet connection.|
|noSpeechError|No speech detected. Please speak into the microphone.|
|notAllowedError|Microphone access denied. Allow microphone permissions.|
|serviceNotAllowedError|Speech recognition service is not allowed in this context.|
|unsupportedBrowserError|The browser does not support the SpeechRecognition API.|
|startAriaLabel|Press to start speaking and transcribe your words|
|stopAriaLabel|Press to stop speaking and end transcription|
|startTooltipText|Start listening|
|stopTooltipText|Stop listening|

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/speech-to-text/globalization/localization/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/speech-to-text/globalization/localization/src/styles.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speech-to-text/globalization/localization/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/speech-to-text/globalization/localization/index" %}

## RTL

The Right-to-Left (RTL) feature provides support for languages that are read from right to left, such as Arabic, Hebrew, or Persian. Set the [enableRtl](../api/speech-to-text/#enableRtl) property to `true` to reverse the component's layout and text direction, ensuring proper alignment and readability for RTL cultures.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/speech-to-text/globalization/rtl/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/speech-to-text/globalization/rtl/src/styles.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speech-to-text/globalization/rtl/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/speech-to-text/globalization/rtl/index" %}