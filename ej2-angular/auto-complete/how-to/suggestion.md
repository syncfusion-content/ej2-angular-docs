---
layout: post
title: Suggestion in Angular Auto complete component | Syncfusion
description: Learn here all about Suggestion in Syncfusion Angular Auto complete component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Suggestion 
documentation: ug
domainurl: ##DomainURL##
---

# Suggestion in Angular Auto complete component

The AutoComplete supports to displaying suggestion list upon focusing an empty auto complete component, using the focus event in the control. We have used the filtering and change events to get the typed and selected words and stored them in the browser’s local storage. Then using the focus event, we have displayed the stored list as suggestions.

In the below sample, showcase that how to show `suggestion list` with AutoComplete.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/getting-started-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs16" %}