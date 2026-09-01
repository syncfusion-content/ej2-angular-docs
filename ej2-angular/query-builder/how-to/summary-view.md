---
layout: post
title: How to show the summary view in Angular Query Builder UI | Syncfusion
description: Show a human-readable summary of the constructed query in the Syncfusion Angular Query Builder UI by setting the summaryView property to true.
platform: ej2-angular
control: Summary view 
documentation: ug
domainurl: ##DomainURL##
---

# How to show the summary view in Angular Query Builder UI

The summary view displays a human-readable representation of the constructed query. By default, the [`summaryView`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#summaryview) property is `false`, so the summary view is hidden. Enable it by setting the property to `true`.

The `summaryView` property accepts a boolean. You can set it either as a string attribute (`summaryView="true"`) or via property binding (`[summaryView]="true"`) depending on whether the value is a literal or a component expression.

## Behavior

When `summaryView` is enabled, the Query Builder renders the rule view alongside the summary content: a read-only text area showing the constructed query, and an **Edit** button that collapses the summary back to the rule view. The collapse indicator uses the `SummaryViewTitle` locale key (documented in [Localization](../global-local)) as its tooltip, so the summary view's collapse text can be localized along with the rest of the component's UI strings.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/default-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/default-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/default-cs11" %}
