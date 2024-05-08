---
layout: post
title: Configure data grid options on editing mode in Angular Pivotview component | Syncfusion
description: Learn here all about Configure data grid options on editing mode in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Configure data grid options on editing mode 
documentation: ug
domainurl: ##DomainURL##
---

# Configure data grid options on editing mode in Angular Pivotview component

You can access the data grid options such as sort, group, filter on editing mode using the `beginDrillThrough` event in the pivot table. The event occurs in every value cell on double click and provides the data grid information before display the drill through grid pop-up.

> Grid features are segregated into individual feature-wise modules. For example, to use sorting feature, you should inject `Sort` using the `Grid.Inject(Sort)` section.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs160/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs160/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs160" %}
