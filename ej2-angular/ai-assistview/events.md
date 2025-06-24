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

This section describes the AI AssistView events that will be triggered when appropriate actions are performed. The following events are available in the AI AssistView component.

## created

The AI AssistView component triggers the [created](../api/ai-assistview/#created/) event when the component rendering is completed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/events/created/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/events/created/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## promptRequest

The [promptRequest](../api/ai-assistview/#promptrequest/) event is triggered when the prompt request is made in the AI AssistView component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/events/promptRequest/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/events/promptRequest/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## promptChanged

The [promptChanged](../api/ai-assistview/#promptchanged/) event is triggered when the prompt text is changed in the AI AssistView component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/events/promptChanged/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/events/promptChanged/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## beforeAttachmentUpload

The [beforeAttachmentUpload](../api/ai-assistview/#beforeattachmentupload/) event is triggered before the attached files upload begins in the AI AssistView

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/events/before-attachment/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/events/before-attachment/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## attachmentUploadSuccess

The [attachmentUploadSuccess](../api/ai-assistview/#attachmentuploadsuccess/) event is triggered when the attached file is successfully uploaded in the AI AssistView.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/events/attachment-success/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/events/attachment-success/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## attachmentUploadFailure

The [attachmentUploadFailure](../api/ai-assistview/#attachmentuploadfailure/) event is triggered when the attached file upload fails in the AI AssistView.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/events/attachment-failure/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/events/attachment-failure/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## attachmentRemoved

The [attachmentRemoved](../api/ai-assistview/#attachmentremoved) event is triggered when an attached file is removed in the AI AssistView.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/events/attachment-removed/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/events/attachment-removed/src/main.ts %}
{% endhighlight %}
{% endtabs %}