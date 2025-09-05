---
layout: post
title: Checkbox in Angular Dropdown Tree component | Syncfusion
description: Learn here all about Checkbox in Syncfusion Angular Dropdown Tree component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dropdown Tree
documentation: ug
domainurl: ##DomainURL##
---

# Checkbox in Angular Dropdown Tree component

The Dropdown Tree component allows you to check more than one item from the tree without affecting the UI's appearance by enabling the [`showCheckBox`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-tree/#showcheckbox) property. When this property is enabled, checkbox appears before each item text in the popup, enabling multi-selection functionality where users can select multiple tree nodes simultaneously.

In the following example, the `showCheckBox` property is enabled.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdowntree/checkboxes-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/checkboxes-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdowntree/checkboxes-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdowntree/checkboxes-cs1" %}

## Auto Check

By default, the checkbox state of the parent and child items in the Dropdown Tree will not be dependent on each other. If you need dependent checked state, then enable the [`autoCheck`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-tree/treeSettingsModel/#autocheck) property which is a member of [`treeSettings`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-tree/#treesettings) property. This feature creates a hierarchical checkbox behavior where parent and child selections are automatically synchronized.

The auto check functionality follows these rules:

* If one or more child items are not in the checked state, then the parent item will be in the intermediate state, displayed as a partially filled checkbox.

* If all the child items are checked, then the parent item will also be in the checked state.

* If a parent item is checked, then all the child items will also be changed to the checked state automatically.

In the following example, the `autoCheck` property is enabled to demonstrate hierarchical checkbox behavior.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdowntree/autocheck-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/autocheck-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdowntree/autocheck-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdowntree/autocheck-cs1" %}

## Select All

The Dropdown Tree component has built-in support to select all the tree items using Select All options in the header. This feature provides a convenient way to quickly select or deselect all available tree items without having to check each item individually.

When the [`showSelectAll`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-tree/#showselectall) property is set to true, a checkbox will be displayed in the popup header that allows you to select or deselect all the tree items in the popup. Note that the [`showCheckBox`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-tree/#showcheckbox) property must be enabled for the Select All feature to work properly.

By default, `Select All` and `Unselect All` text values will be displayed along with the checkbox in the popup header to indicate the action to be performed on checking or unchecking the checkbox. You can customize these text labels by using [`selectAllText`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-tree/#selectalltext) and [`unSelectAllText`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-tree/#unselectalltext) properties respectively.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdowntree/select-all-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/select-all-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdowntree/select-all-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdowntree/select-all-cs1" %}