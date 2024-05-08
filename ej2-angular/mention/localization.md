---
layout: post
title: Localization in Angular Mention component | Syncfusion
description: Learn here all about Localization in Syncfusion Angular Mention component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Localization 
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Angular Mention component

The Localization library allows you to localize static text content of the [noRecordsTemplate](https://ej2.syncfusion.com/angular/documentation/api/mention/#norecordstemplate) &nbsp;properties according to the culture currently assigned to the Mention.

| Locale key | en-US (default)  |
|------|------|
| noRecordsTemplate |  No records found |

## Loading translations

To load the translation object to your application, use the load function of the **L10n** class.

In the following sample, French culture is set to the mention component and no data is loaded. Hence, the [noRecordsTemplate](https://ej2.syncfusion.com/angular/documentation/api/mention/#norecordstemplate) property displays its text in French culture initially.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/mention/getting-started-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/mention/getting-started-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/mention/getting-started-cs8" %}

## See Also

* [Accessibility](./accessibility)
* [How to bind the data to the mention](./data-binding)