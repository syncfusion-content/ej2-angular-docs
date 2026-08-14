---
layout: post
title: Draggable in Angular Predefined Dialogs | Syncfusion
description: Enable dragging on Syncfusion Angular Predefined Dialogs (alert, confirm, prompt) by setting the isDraggable property to reposition the popup.
platform: ej2-angular
control: Draggable 
documentation: ug
domainurl: ##DomainURL##
---

# Draggable in Angular Predefined Dialogs

Predefined dialogs support dragging within the target container by grabbing the dialog header. Use the `isDraggable` property to allow users to reposition the dialog dynamically.

## Alert dragging

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/predefined-dialogs/alert-drag-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/alert-drag-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/alert-drag-cs1" %}

## Confirm drag

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/predefined-dialogs/confirm-drag-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/confirm-drag-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/confirm-drag-cs1" %}

## Prompt drag

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/predefined-dialogs/prompt-drag-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/predefined-dialogs/prompt-drag-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/predefined-dialogs/prompt-drag-cs1" %}
