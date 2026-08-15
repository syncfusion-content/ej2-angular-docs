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

The AutoComplete supports to displaying suggestion list upon focusing an empty auto complete component, using the focus event in the control. We have used the filtering and change events to get the typed and selected words and stored them in the browser’s local storage. Then using the focus event, we have displayed the stored list as suggestions.

In the below sample, showcase that how to show `suggestion list` with AutoComplete.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/getting-started-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs16" %}