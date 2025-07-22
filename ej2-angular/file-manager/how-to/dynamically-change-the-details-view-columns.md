---
layout: post
title: Customize Columns Dynamically in Syncfusion Angular File Manager
description: Learn here how to dynamically change the details view columns in Syncfusion Angular File Manager component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: File Manager
documentation: ug
domainurl: ##DomainURL##
---

# How to dynamically change the details view columns in Angular File Manager component

The Angular File Manager component allows for dynamic customization of the details view columns through the modification of the [detailsViewSettings](https://ej2.syncfusion.com/angular/documentation/api/file-manager/detailsViewSettings/) property. This capability is particularly useful when alterations to the [columns](https://ej2.syncfusion.com/angular/documentation/api/file-manager/detailsViewSettingsModel/#columns) are needed based on custom logic within the application. The `detailsViewSettings` property includes a columns field, which permits the definition or updating of the columns displayed in the details view.

In the following example, a button click dynamically updates the details view to add custom columns:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/dynamically-change-details-view-column-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager/dynamically-change-details-view-column-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/dynamically-change-details-view-column-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/dynamically-change-details-view-column-cs1" %}
