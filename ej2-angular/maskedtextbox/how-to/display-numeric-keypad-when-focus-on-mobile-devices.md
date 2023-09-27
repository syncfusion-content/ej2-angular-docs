---
layout: post
title: Display numeric keypad when focus on mobile devices in Angular Maskedtextbox component | Syncfusion
description: Learn here all about Display numeric keypad when focus on mobile devices in Syncfusion Angular Maskedtextbox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Display numeric keypad when focus on mobile devices 
documentation: ug
domainurl: ##DomainURL##
---

# Display numeric keypad when focus on mobile devices in Angular Maskedtextbox component

By default, on focusing the MaskedTextBox, alphanumeric keypad will be displayed on mobile devices. Sometimes only numeric keypad for number values is needed, and this can be achieved by setting "type" property to `tel`.
Refer to the following example to enable numeric keypad in MaskedTextBox.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maskedtextbox/cursor-position-any-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maskedtextbox/cursor-position-any-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maskedtextbox/cursor-position-any-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maskedtextbox/cursor-position-any-cs1" %}