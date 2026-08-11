---
layout: post
title: Methods in Angular Speech To Text | Syncfusion®
description: Programmatically start and stop speech recognition in Angular Speech To Text with the startListening() and stopListening() public methods.
platform: ej2-angular
control: SpeechToText
documentation: ug
domainurl: ##DomainURL##
---

# Methods in ##Platform_Name## Speech To Text

## Start Listening

The [startListening()](../api/speech-to-text#startlistening) method initiates speech recognition and begins converting speech to text. This is used to programmatically start the recognition process without user interaction on the microphone button.

## Stop Listening

The [stopListening()](../api/speech-to-text#stoplistening) method terminates the speech recognition process. This can be used to programmatically stop the recognition when an action is completed.

The following example demonstrates how to use the `startListening` and `stopListening` methods in the SpeechToText component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/speech-to-text/methods/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/speech-to-text/methods/src/styles.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speech-to-text/methods/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/speech-to-text/methods/index" %}
