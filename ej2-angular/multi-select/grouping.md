---
layout: post
title: Grouping in Angular Multi select component | Syncfusion
description: Learn here all about Grouping in Syncfusion Angular Multi select component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Grouping 
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in Angular Multi select component

The MultiSelect component supports organizing list items into groups based on different categories. Each list item's category can be mapped through the [groupBy](https://ej2.syncfusion.com/angular/documentation/api/multi-select/fieldSettingsModel/#groupby) field within the fields property configuration. The component displays group headers in two ways: inline headers that appear within the list flow, and fixed headers that remain visible at the top of the popup while scrolling through grouped content. The fixed group header dynamically updates to show the currently visible group's category value.

In the following sample, vegetables are grouped according to their category using the [groupBy](https://ej2.syncfusion.com/angular/documentation/api/multi-select/fieldSettingsModel/#groupby) field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/getting-started-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/getting-started-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/getting-started-cs14" %}

## Customization

The grouping header provides customization options that allow custom styling and content design. Use the [`groupTemplate`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#grouptemplate) property to create custom templates for both inline and fixed group headers. This enables complete control over the appearance and layout of group header content to match application-specific design requirements.

## Grouping with CheckBox

The MultiSelect component supports rendering checkboxes in group headers to enable selection of all items within a group through a single click. Enable this feature by setting the [`enableGroupCheckBox`](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#enablegroupcheckbox) property to **true** and the [**mode**](https://ej2.syncfusion.com/angular/documentation/api/multi-select/#mode) property to **CheckBox**.

>Note: The `CheckBoxSelection` module must be injected into the MultiSelect component to use checkbox functionality.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/getting-started-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/getting-started-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/getting-started-cs15" %}

>Note: When using the MultiSelect component with CheckBox mode and grouping enabled, the enableSelectionOrder property (default to true) causes selected items to move out of their original group headers in the popup. To keep selected items under their respective group headers, set enableSelectionOrder to false.

## See Also

* [Group Template support to MultiSelect](./templates#group-template).