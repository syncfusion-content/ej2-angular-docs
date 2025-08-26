---
layout: post
title: Customize the edit dialog in Angular TreeGrid component | Syncfusion
description: Learn how to customize the edit dialog in the Syncfusion Angular TreeGrid component, including appearance changes and advanced configuration.
platform: ej2-angular
control: Customize the edit dialog 
documentation: ug
domainurl: ##DomainURL##
---

# Customize the edit dialog in Angular TreeGrid component

The appearance of the edit dialog in the TreeGrid component can be customized using the [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actioncomplete) event. The customization is typically performed based on the **requestType** property, which is set to **beginEdit** or **add** depending on whether an existing record is being edited or a new record is being added.

In the example below, the dialog's header text is customized for both editing and adding records.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/refresh-cs6" %}

> For an overview of the Angular TreeGrid component and its features, see the [`Angular TreeGrid feature tour page`](https://www.syncfusion.com/angular-components/angular-tree-grid). More examples of data presentation and manipulation are available in the [`Angular TreeGrid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview).