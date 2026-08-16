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

The [ShowSuggestionOnPopup](https://ej2.syncfusion.com/angular/documentation/api/smart-textarea/#aisuggestionhandler) property in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Smart TextArea allows you to control how text suggestions are displayed to the users.

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

* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Smart TextArea](./getting-started)