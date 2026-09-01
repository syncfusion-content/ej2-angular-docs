---
layout: post
title: Customization in Angular Smart TextArea | Syncfusion
description: Control how AI suggestions appear in the Angular Smart TextArea by toggling the ShowSuggestionOnPopup property to display them in a popup or inline.
platform: ej2-angular
control: Customization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Angular Smart TextArea

The [ShowSuggestionOnPopup](https://ej2.syncfusion.com/angular/documentation/api/smart-textarea/index-default#aisuggestionhandler) property in the Syncfusion<sup style="font-size:70%">®</sup> Angular Smart TextArea allows you to control how AI-generated text suggestions are presented to users. Depending on your application requirements, suggestions can be displayed in a popup window or directly within the text area as inline suggestions.

Use this property to provide the most suitable suggestion experience for your users and workflows.

The following values are supported:

| Value | Description |
|---------|-------------|
| `Enable` | Displays AI suggestions in a popup window. |
| `Disable` | Displays AI suggestions inline within the text area. |
| `None` | Uses the default suggestion behavior. |

By default, the `showSuggestionOnPopup` property is set to `None`.

## Display suggestions in a popup

Set the `showSuggestionOnPopup` property to `Enable` when you want AI suggestions to appear in a popup window. This mode helps users review and accept suggestions without interrupting the content already entered in the text area.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}

<ejs-smarttextarea  id="smart-textarea" #textareaObj  placeholder="Enter your queries here" floatLabelType="Auto" rows="5" userRole="Employee communicating with internal team" [UserPhrases]="defaultPreset"
[aiSuggestionHandler]="serverAIRequest" showSuggestionOnPopup="Enable"></ejs-smarttextarea>

{% endhighlight %}
{% endtabs %}

![SUggestion on popup](./images/smart-textarea-popup.gif)

In popup mode, the generated suggestion is displayed in a separate popup interface, allowing users to review and apply the suggested content conveniently.

## Display suggestions inline

Set the `showSuggestionOnPopup` property to `Disable` when you want AI suggestions to be displayed directly within the text area. This approach provides a seamless writing experience by showing suggestions in context as users type.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}

<ejs-smarttextarea  id="smart-textarea" #textareaObj  placeholder="Enter your queries here" floatLabelType="Auto" rows="5" userRole="Employee communicating with internal team" [UserPhrases]="defaultPreset"
[aiSuggestionHandler]="serverAIRequest" showSuggestionOnPopup="Disable"></ejs-smarttextarea>

{% endhighlight %}
{% endtabs %}

![SUggestion inline](./images/smart-textarea-inline.gif)

In inline mode, suggestions appear directly within the text area, enabling users to continue writing naturally while reviewing AI-generated recommendations.

## See also

* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Smart TextArea](./getting-started)