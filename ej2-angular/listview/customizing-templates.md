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

The ListView component is designed to customize list items, group title and header title.

## Header template

ListView header can be customized with the help of the [`headerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#headertemplate) property.

To customize header template in your application, set your customized template element inside ng tag directive along with [`showHeader`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#showheader) property as `true` to display the ListView header.

In the following example, we have rendered ListView with customized header which contains search, add and sort buttons.

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

ListView items can be customized with the help of the [`template`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#template) property.

To customize list items in your application, set your customized template element inside ng tag directive.

We provided the following built-in CSS classes to customize the list-items. Refer to the following table.

| CSS class        | Description           |
| ------------- |-------------|
| e-list-template, e-list-wrapper | These classes are used to differentiate normal and template rendering, which are mandatory for template rendering. The `e-list-template` class should be added to the root of the ListView element and `e-list-wrapper` class should be added to the template element wrapper.
| e-list-content | This class is used to align list content and it should be added to the content element <br/><br/> `<div class="e-list-wrapper">`<br/><b>`<span class="e-list-content">ListItem</span>`</b> <br/>`</div>`|
| e-list-avatar | This class is used for avatar customization. It should be added to the template element wrapper. After adding it, we can customize our element with [Avatar](https://ej2.syncfusion.com/angular/documentation/avatar/getting-started) classes <br/><br/> `<div class="e-list-wrapper e-list-avatar">` <br/> <b>`<span class="e-avatar e-avatar-circle">MR</span>`</b><br/>`<span class="e-list-content">ListItem</span>`<br/>`</div>`|
| e-list-avatar-right | This class is used to align avatar to right side of the list item. It should be added to the template element wrapper. After adding it, we can customize our element with [Avatar](https://ej2.syncfusion.com/angular/documentation/avatar/getting-started) classes <br/><br/> `<div class="e-list-wrapper e-list-avatar-right">` <br/> `<span class="e-list-content">ListItem</span>`<br/><b>`<span class="e-avatar e-avatar-circle">MR</span>`</b><br/> `</div>`|
| e-list-badge | This class is used for badge customization .It should be added to the template element wrapper. After adding it, we can customize our element with [Badge](https://ej2.syncfusion.com/angular/documentation/badge/getting-started) classes <br/><br/> `<div class="e-list-wrapper e-list-badge">` <br/> `<span class="e-list-content">ListItem</span>`<br/><b>`<span class="e-badge e-badge-primary">MR</span>`</b><br/> `</div>`|
| e-list-multi-line | This class is used for multi-line customization. It should be added to the template element wrapper. After adding it, we can customize List item's header and description <br/><br/>`<div class="e-list-wrapper e-list-multi-line">` <br/> `<span class="e-list-content">ListItem</span>`<br/>`</div>`|
| e-list-item-header |This class is used to align a list header and it should be added to the header element along with the multi-line class <br/><br/> `<div class="e-list-wrapper e-list-multi-line">`<br/> <b>`<span class="e-list-item-header">ListItem Header</span>`</b><br/> `<span class="e-list-content">ListItem</span>`<br/>`</div>`|

In the following example, we have customized list items with built-in CSS classes.

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

ListView group header can be customized with the help of the [`groupTemplate`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#grouptemplate) property.

To customize the group template in your application, set your customized template element inside ng tag directive.

In the following example, we have grouped ListView based on the category. The category of each list item should be mapped with [`groupBy`](https://ej2.syncfusion.com/angular/documentation/api/list-view/fieldSettingsModel/#groupby) field of the data. We have also displayed grouped list items count in the group list header.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/item-count-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/item-count-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/item-count-cs1" %}
