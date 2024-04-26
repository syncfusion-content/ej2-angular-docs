---
layout: post
title: Change load limited data in member editor in Angular Pivotview component | Syncfusion
description: Learn here all about Change load limited data in member editor in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Change load limited data in member editor 
documentation: ug
domainurl: ##DomainURL##
---

# Change load limited data in member editor in Angular Pivotview component

In the filter dialog, you can set the limit to display the field values while loading large data. Based on this limit, the initial loading will complete quickly without any performance constraint. You can use the search option to refine the field values from the exceeded limit and refine the data further. A message with the remaining data count will be displayed in the member editor. The data limit can be set in the `maxNodeLimitInMemberEditor` property.

By default, the property holds the value 1000.

> The property is available in both pivot table and field list components.

In the following example, the limit of data in the member editor is set to 100. So, the member editor of the `ProductID` field shows only its first 100 members from its 1000 members.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs157/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs157/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs157" %}
