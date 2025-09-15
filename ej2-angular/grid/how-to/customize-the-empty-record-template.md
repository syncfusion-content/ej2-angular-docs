---
layout: post
title: Customize the Empty Record Template in Angular Grid component | Syncfusion
description: Learn how to use the empty record template feature in the Syncfusion Angular Grid to display custom content when no records are present.
platform: ej2-angular
control: Customize the Empty Record Template 
documentation: ug
domainurl: ##DomainURL##
---

# Customize the empty record template in Angular Grid component

The empty record template feature in the Syncfusion Angular Grid lets you define custom content—such as images, descriptive text, or even other components—to be displayed when the grid contains no records. This replaces the default 'No records to display' message for a more engaging and branded user experience.

Enable this feature by setting the `emptyRecordTemplate` property of the Grid. The `emptyRecordTemplate` accepts either an HTML element or a function that returns an HTML element to render in the empty state.

The following example demonstrates rendering an image and text within the template to indicate that the grid has no data to display.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/empty-record-template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/empty-record-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/empty-record-template-cs1" %}
