---
layout: post
title: Events in Angular AI AssistView component | Syncfusion
description: Checkout and learn about events with Angular AI AssistView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Events in Angular AI AssistView component

The Angular AI AssistView component provides a comprehensive set of events that enable developers to customize behavior and handle user interactions effectively. The following events are available in the AI AssistView component.

## created

The [created](../api/ai-assistview/#created/) event is triggered when the AI AssistView component rendering is completed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/events/created/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/events/created/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## promptRequest

The [promptRequest](../api/ai-assistview/#promptrequest/) event is triggered when a user sends a prompt request in the AI AssistView component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/events/promptRequest/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/events/promptRequest/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## promptChanged

The [promptChanged](../api/ai-assistview/#promptchanged/) event is triggered whenever the prompt text is modified in the AI AssistView component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/events/promptChanged/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/events/promptChanged/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## beforeAttachmentUpload

The [beforeAttachmentUpload](../api/ai-assistview/#beforeattachmentupload/) event is triggered before attached files begin uploading in the AI AssistView.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/events/before-attachment/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/events/before-attachment/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## attachmentUploadSuccess

The [attachmentUploadSuccess](../api/ai-assistview/#attachmentuploadsuccess/) event is triggered when an attached file is successfully uploaded in the AI AssistView.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/events/attachment-success/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/events/attachment-success/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## attachmentUploadFailure

The [attachmentUploadFailure](../api/ai-assistview/#attachmentuploadfailure/) event is triggered when an attached file upload fails in the AI AssistView.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/events/attachment-failure/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/events/attachment-failure/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## attachmentRemoved

The [attachmentRemoved](../api/ai-assistview/#attachmentremoved) event is triggered when an attached file is removed from the AI AssistView.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/events/attachment-removed/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/events/attachment-removed/src/main.ts %}
{% endhighlight %}
{% endtabs %}