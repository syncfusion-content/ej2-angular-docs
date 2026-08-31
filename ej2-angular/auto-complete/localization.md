---
layout: post
title: Localization in Angular AutoComplete | Syncfusion®
description: Localize Angular AutoComplete static text such as no-records and action-failure templates for any culture using the L10n class and locale property.
platform: ej2-angular
control: Localization 
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Angular AutoComplete

The `L10n` library allows you to localize the static text content of the [`noRecordsTemplate`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/index-default#norecordstemplate) and [`actionFailureTemplate`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/index-default#actionfailuretemplate) properties according to the culture currently assigned to the AutoComplete.

| Locale key | en-US (default)  |
|------|------|
| noRecordsTemplate |  No Records Found |
| actionFailureTemplate | The Request Failed |

## Loading translations

To load translation object into your application, use the `load` function of the `L10n` class.

In the following sample, French culture is set on the AutoComplete and no data is loaded. Hence, the [`noRecordsTemplate`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/index-default#norecordstemplate) property displays its text in French initially, and if the sample is run offline, the [`actionFailureTemplate`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/index-default#actionfailuretemplate) property displays its text in French.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/getting-started-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs17" %}

## See Also

* [Accessibility](./accessibility.md)
* [How to bind the data to the autocomplete](./data-binding.md)