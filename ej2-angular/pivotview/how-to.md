---
layout: post
title: How to in Angular Pivotview component | Syncfusion
description: Learn here all about How to in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: How to 
documentation: ug
domainurl: ##DomainURL##
---

# How to in Angular Pivotview component

## Member Editor

### Load limited data in Member Editor

In the filter dialog, user can set the limit to display field values while loading the large data. Based on this limit, the initial loading will complete quickly without any performance constraint. And user can use search option to refining the field values from exceeded limit. You can refine the data further by using search option and a message with the remaining data count will be displayed in member editor. The data limit can be set in the property `maxNodeLimitInEditor`.

By default, the property holds the value `1000`.

> The property is available in both Pivot Grid and Field List components.

In the below example, the data in the member editor limits to 100. So, the member editor of the field `ProductID` shows only its first 100 members from its 1000 members.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs154/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs154/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs154/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs154" %}
