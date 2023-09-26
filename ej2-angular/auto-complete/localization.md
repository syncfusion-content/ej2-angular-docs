---
layout: post
title: Localization in Angular Auto complete component | Syncfusion
description: Learn here all about Localization in Syncfusion Angular Auto complete component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Localization 
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Angular Auto complete component

The Localization library allows you to localize static text content of the
[noRecordsTemplate](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#norecordstemplate) and [actionFailureTemplate](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#actionfailuretemplate) &nbsp; property according to the culture currently assigned to the AutoComplete.

| Locale key | en-US (default)  |
|------|------|
| noRecordsTemplate |  No Records Found |
| actionFailureTemplate | The Request Failed |

## Loading translations

To load translation object to your application, use load function of the **L10n** class.

In the following sample, French culture is set to the AutoComplete and no data is loaded. Hence, the [`noRecordsTemplate`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#norecordstemplate) property displays its text in French culture initially and if the sample is run offline, the [`actionFailureTemplate`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#actionfailuretemplate) property displays its text appropriately.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/getting-started-cs17/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/autocomplete/getting-started-cs17/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/getting-started-cs17" %}

## See Also

* [Accessibility](./accessibility/)
* [How to bind the data to the autocomplete](./data-binding/)