---
layout: post
title: Localization in Angular Multi select component | Syncfusion
description: Learn here all about Localization in Syncfusion Angular Multi select component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Localization 
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Angular Multi select component

The Localization library allows you to localize static text content of the
[noRecordsTemplate](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#norecordstemplate) and [actionFailureTemplate](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#actionfailuretemplate) &nbsp;properties according to the culture currently assigned to the MultiSelect.

| Locale key | en-US (default)  |
|------|------|
| noRecordsTemplate |  No records found |
| actionFailureTemplate | The request failed |
| overflowCountTemplate | +${count} more.. |
| actionFailureTemplate | ${count} selected |

## Loading translations

To load translation object to your application, use load function of the **L10n** class.

In the following sample, French culture is set to the MultiSelect and no data is loaded.
Hence, the `noRecordsTemplate` property displays its text in French culture initially,
and if the sample is run offline, the `actionFailureTemplate` property displays its text
appropriately. The `overflowCountTemplate` displays its overflow of the value from MultiSelect and the `totalCountTemplate` displays its total count of the selected value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/getting-started-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/getting-started-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/getting-started-cs16" %}

## See Also

* [Accessibility](./accessibility/)
* [How to bind the data to the combobox](./data-binding/)