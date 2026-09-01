---
layout: post
title: How to show suggestion list in Angular AutoComplete | Syncfusion®
description: Show a stored suggestion list in Angular AutoComplete on focus by caching typed and selected items in local storage via the focus event.
platform: ej2-angular
control: Suggestion 
documentation: ug
domainurl: ##DomainURL##
---

# How to show suggestion list in Angular AutoComplete

The AutoComplete component supports displaying a suggestion list when focus is placed on an empty AutoComplete. The filtering and change events capture the typed and selected words, which are stored in the browser's local storage. When focus moves to the component, the focus event is used to display the stored list as suggestions.

In the following sample, the suggestion list feature is enabled for the AutoComplete.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/getting-started-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs16" %}