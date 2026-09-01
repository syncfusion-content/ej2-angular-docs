---
layout: post
title: Grouping in Angular AutoComplete | Syncfusion®
description: Group Angular AutoComplete items by category using the groupBy field, with both inline and fixed headers that update dynamically while scrolling.
platform: ej2-angular
control: Grouping 
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in Angular AutoComplete

The AutoComplete supports organizing list items into groups based on different categories. The category of each list item can be mapped through the [`groupBy`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/fieldSettingsModel#groupby) field. The group header is displayed as both an inline header and a fixed header. The fixed group header content is updated dynamically while scrolling the suggestion list to show the category value of the visible group.

In the following sample, vegetables are grouped according to their category using the [`groupBy`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/fieldSettingsModel#groupby) field.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/getting-started-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs14" %}

## Customization

The grouping header also provides customization options that allow custom styling and content design. Use the [`groupTemplate`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/index-default#grouptemplate) property to create custom templates for both the inline and fixed group headers.

## See Also

[Group Template support to AutoComplete](./templates#group-template).
