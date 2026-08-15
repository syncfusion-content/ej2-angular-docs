---
layout: post
title: Group popup items with ListView component in Angular Dropdown Menu | Syncfusion
description: Group Angular Dropdown Menu popup items with headers by using a ListView control as the popup target.
platform: ej2-angular
control: Group popup items with listview component 
documentation: ug
domainurl: ##DomainURL##
---

# How to group popup items with ListView component in Angular Dropdown Menu

Header in popup items is possible in DropdownButton by templating entire popup with ListView. Create ListView with id `listview` and provide it as a [`target`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-button/#target) for DropDownButton.

In the following example, ListView element is given as `target` to DropDownButton and header can be achieved by [`groupBy`](https://ej2.syncfusion.com/angular/documentation/api/list-view/fieldSettingsModel/#groupby) property.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/drop-down-button/header-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/drop-down-button/header-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/drop-down-button/header-cs1" %}