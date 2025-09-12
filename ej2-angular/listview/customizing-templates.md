---
layout: post
title: Customizing templates in Angular ListView component | Syncfusion
description: Learn here all about Customizing templates in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView 
documentation: ug
domainurl: ##DomainURL##
---

# Customizing templates in Angular ListView component

The ListView component provides comprehensive template customization options that allow you to control the appearance and layout of list items, group headers, and the main header. Templates enable you to create rich, interactive interfaces by defining custom HTML structures with data binding for different sections of the ListView.

## Header template

The ListView header can be customized using the [`headerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#headertemplate) property, which allows you to add interactive elements like search bars, action buttons, or branding elements above your list content.

To implement a custom header template, define your template content within an ng-template directive and set the [`showHeader`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#showheader) property to `true` to display the ListView header.

In the following example, the ListView renders with a customized header containing search, add, and sort buttons for enhanced user interaction.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/headerTemplate-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/headerTemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/headerTemplate-cs1" %}

## Template

Individual ListView items can be fully customized using the [`template`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#template) property, allowing you to define complex layouts with data binding, conditional rendering, and custom styling for each list item.

To customize list items, define your template content within an ng-template directive. The template has access to the data context of each list item, enabling dynamic content generation based on your data source.

The following built-in CSS classes are provided to streamline common template layouts and ensure consistent styling across different template scenarios:

| CSS class        | Description           |
| ------------- |-------------|
| e-list-template, e-list-wrapper | These classes are used to differentiate normal and template rendering, which are mandatory for template rendering. The `e-list-template` class should be added to the root of the ListView element and `e-list-wrapper` class should be added to the template element wrapper.
| e-list-content | This class is used to align list content and it should be added to the content element <br/><br/> `<div class="e-list-wrapper">`<br/><b>`<span class="e-list-content">ListItem</span>`</b> <br/>`</div>`|
| e-list-avatar | This class is used for avatar customization. It should be added to the template element wrapper. After adding it, we can customize our element with [Avatar](https://ej2.syncfusion.com/angular/documentation/avatar/getting-started) classes <br/><br/> `<div class="e-list-wrapper`<b>`e-list-avatar`</b>`">` <br/> <b>`<span class="e-avatar e-avatar-circle">MR</span>`</b><br/>`<span class="e-list-content">ListItem</span>`<br/>`</div>`|
| e-list-avatar-right | This class is used to align avatar to right side of the list item. It should be added to the template element wrapper. After adding it, we can customize our element with [Avatar](https://ej2.syncfusion.com/angular/documentation/avatar/getting-started) classes <br/><br/> `<div class="e-list-wrapper`<b>`e-list-avatar-right`</b>`">` <br/> `<span class="e-list-content">ListItem</span>`<br/><b>`<span class="e-avatar e-avatar-circle">MR</span>`</b><br/> `</div>`|
| e-list-badge | This class is used for badge customization .It should be added to the template element wrapper. After adding it, we can customize our element with [Badge](https://ej2.syncfusion.com/angular/documentation/badge/getting-started) classes <br/><br/> `<div class="e-list-wrapper`<b>`e-list-badge`</b>`">` <br/> `<span class="e-list-content">ListItem</span>`<br/><b>`<span class="e-badge e-badge-primary">MR</span>`</b><br/> `</div>`|
| e-list-multi-line | This class is used for multi-line customization. It should be added to the template element wrapper. After adding it, we can customize List item's header and description <br/><br/>`<div class="e-list-wrapper`<b>`e-list-multi-line`</b>`">` <br/> `<span class="e-list-content">ListItem</span>`<br/>`</div>`|
| e-list-item-header |This class is used to align a list header and it should be added to the header element along with the multi-line class <br/><br/> `<div class="e-list-wrapper`<b>`e-list-multi-line`</b>`">`<br/> <b>`<span class="e-list-item-header">ListItem Header</span>`</b><br/> `<span class="e-list-content">ListItem</span>`<br/>`</div>`|

In the following example, list items are customized using built-in CSS classes to create rich, structured layouts with avatars and multi-line content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/avatar-template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/avatar-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/avatar-template-cs1" %}

## Group template

ListView group headers can be customized using the [`groupTemplate`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#grouptemplate) property, enabling you to create informative section headers that can display aggregate information, custom styling, or interactive elements for grouped data.

To implement group templates, define your template content within an ng-template directive. The template receives the group data context, including the group key and associated items, allowing you to display dynamic information about each group.

In the following example, ListView items are grouped by category using the [`groupBy`](https://ej2.syncfusion.com/angular/documentation/api/list-view/fieldSettingsModel/#groupby) field mapping. The group header template displays both the category name and the count of items within each group, providing users with helpful context about the data organization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/item-count-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/item-count-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/item-count-cs1" %}