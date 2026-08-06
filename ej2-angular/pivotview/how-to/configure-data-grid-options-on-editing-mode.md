---
layout: post
title: How to Configure Data Grid Options in Editing Mode in Angular Pivot Table | Syncfusion
description: Step-by-step example showing how to configure data grid options in editing mode in the Angular Pivot Table, with code snippets and property references.
platform: ej2-angular
control: Configure data grid options on editing mode 
documentation: ug
domainurl: ##DomainURL##
---

# How to Configure Data Grid Options in Editing Mode in Angular Pivot Table

The Angular Pivot Table component provides the ability to configure various data grid options when working with drill-through functionality in editing mode. When users double-click on value cells (cells containing aggregated data), the component displays the underlying raw data in a drill-through grid popup. The `beginDrillThrough` event allows users to access and configure grid features such as sorting, grouping, and filtering before displaying the drill-through grid popup.

## Implementation

The `beginDrillThrough` event occurs when users double-click on any value cell in the pivot table. This event provides access to the grid instance and its configuration options before displaying the drill-through popup, enabling users to customize the grid behavior according to their requirements.

> Grid features are segregated into individual feature-wise modules. For example, to use the sorting feature, the `Sort` module must be injected using the `Grid.Inject(Sort)` method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs160/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs160/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs160" %}
