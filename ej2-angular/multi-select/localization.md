---
layout: post
title: Localization in Angular MultiSelect DropDown component | Syncfusion
description: Learn here all about Localization in Syncfusion Angular MultiSelect DropDown component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Localization 
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Angular MultiSelect DropDown component

The Localization library allows you to localize static text content of the MultiSelect DropDown component templates according to the culture currently assigned to the component. This enables the component to display appropriate text messages in different languages based on the user's locale preferences.

The following templates can be localized using the specified locale keys with the [noRecordsTemplate](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#norecordstemplate) and [actionFailureTemplate](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#actionfailuretemplate) properties:

| Locale key | en-US (default)  |
|------|------|
| noRecordsTemplate |  No records found |
| actionFailureTemplate | The request failed |
| overflowCountTemplate | +${count} more.. |
| totalCountTemplate | ${count} selected |

## Loading translations

To load translation object to your application, use the load function of the **L10n** class. This method registers the localized text for the specified culture and makes it available for the MultiSelect DropDown component.

In the following sample, French culture is set to the MultiSelect DropDown component and no data is loaded. Hence, the `noRecordsTemplate` property displays its text in French culture initially, and if the sample is run offline, the `actionFailureTemplate` property displays its text appropriately. The `overflowCountTemplate` displays the overflow count when the maximum selection limit is exceeded, and the `totalCountTemplate` displays the total count of selected items.

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