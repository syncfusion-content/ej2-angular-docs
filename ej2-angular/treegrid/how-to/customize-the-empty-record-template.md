---
layout: post
title: Empty Record Template in Angular TreeGrid component | Syncfusion
description: Learn here all about Customize the Empty Record Template in Syncfusion Angular TreeGrid of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize the Empty Record Template 
documentation: ug
domainurl: ##DomainURL##
---

# Customize the empty record template in Angular TreeGrid

The empty record template feature in the TreeGrid allows you to use custom content such as images, text, or other components, when the TreeGrid doesn't contain any records to display. This feature replaces the default message of **No records to display** typically shown in the TreeGrid.

To activate this feature, set the `emptyRecordTemplate` property of the TreeGrid. The `emptyRecordTemplate` property expects the HTML element or a function that returns the HTML element.

In the following example, an image and text have been rendered as a template to indicate that the TreeGrid has no data to display.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/refresh-cs18/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/refresh-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/refresh-cs18" %}