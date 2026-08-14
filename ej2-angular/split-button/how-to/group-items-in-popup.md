---
layout: post
title: How to group items in popup in Angular Split Button | Syncfusion
description: Group Angular Split Button popup items by using a ListView element as the popup target.
platform: ej2-angular
control: Group items in popup 
documentation: ug
domainurl: ##DomainURL##
---

# How to group items in popup in Angular Split Button

Grouped items are possible in SplitButton by templating entire popup with ListView. Check ListView [`grouping`](../../listview/grouping#grouping) and create such items. Create ListView with id `listview` and provide element of the ListView as target of SplitButton to render it in popup area.

In this following example, ListView is created and its element is set as [`target`](https://ej2.syncfusion.com/angular/documentation/api/split-button#target) for SplitButton.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/split-button/listview-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/split-button/listview-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/split-button/listview-cs1" %}