---
layout: post
title: Localization in Angular ComboBox | Syncfusion®
description: Localize Angular ComboBox static text such as no-records and action-failure templates for any culture using the L10n class and locale property.
platform: ej2-angular
control: Localization 
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Angular ComboBox

The Localization library allows you to localize static text content of the
[noRecordsTemplate](https://ej2.syncfusion.com/angular/documentation/api/combo-box/index-default#norecordstemplate) and [actionFailureTemplate](https://ej2.syncfusion.com/angular/documentation/api/combo-box/index-default#actionfailuretemplate) &nbsp;properties according to the culture currently assigned to the ComboBox.

| Locale key | en-US (default)  |
|------|------|
| noRecordsTemplate |  No records found |
| actionFailureTemplate | The request failed |

## Loading translations

To load translation object to your application, use load function of the **L10n** class.

In the following sample, French culture is set to the ComboBox and no data is loaded. Hence, the [`noRecordsTemplate`](https://ej2.syncfusion.com/angular/documentation/api/combo-box/index-default#norecordstemplate) property displays its text in French culture initially, and if the sample is run offline, the [`actionFailureTemplate`](https://ej2.syncfusion.com/angular/documentation/api/combo-box/index-default#actionfailuretemplate) property displays its text appropriately.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/combobox/getting-started-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/combobox/getting-started-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/combobox/getting-started-cs17" %}

## See Also

* [Accessibility](./accessibility.md)
* [How to bind the data to the combobox](./data-binding.md)