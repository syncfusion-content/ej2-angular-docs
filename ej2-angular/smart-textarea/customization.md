---
layout: post
title: Suggestion Customization with ##Platform_Name## Smart Textarea component | Syncfusion
description:  Checkout and learn here all about Suggestion Customization with ##Platform_Name## Smart Textarea component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Customization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customizing Appearance of Suggestions

The [ShowSuggestionOnPopup](https://ej2.syncfusion.com/angular/documentation/api/smart-textarea/#aisuggestionhandler) property in Syncfusion Angular Smart TextArea allows you to control how text suggestions are displayed to the users.

* If `ShowSuggestionOnPopup` is `Enable`, suggestions displayed in the pop-up window

{% tabs %}
{% highlight html tabtitle="app.component.html" %}

<ejs-smarttextarea  id="smart-textarea" #textareaObj  placeholder="Enter your queries here" floatLabelType="Auto" rows="5" userRole="Employee communicating with internal team" [UserPhrases]="defaultPreset"
[aiSuggestionHandler]="serverAIRequest" showSuggestionOnPopup="Enable"></ejs-smarttextarea>

{% endhighlight %}
{% endtabs %}

![SUggestion on popup](./images/smart-textarea-popup.gif)

* If `ShowSuggestionOnPopup` is `false`, suggestions displayed inline.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}

<ejs-smarttextarea  id="smart-textarea" #textareaObj  placeholder="Enter your queries here" floatLabelType="Auto" rows="5" userRole="Employee communicating with internal team" [UserPhrases]="defaultPreset"
[aiSuggestionHandler]="serverAIRequest" showSuggestionOnPopup="Disable"></ejs-smarttextarea>

{% endhighlight %}
{% endtabs %}

![SUggestion inline](./images/smart-textarea-inline.gif)

By default `showSuggestionOnPopup` is `None`.

## See also

* [Getting Started with Syncfusion Angular Smart TextArea](./getting-started)