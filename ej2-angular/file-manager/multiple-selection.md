---
layout: post
title: Multiple selection in Angular File Manager component | Syncfusion
description: Learn here all about Multiple selection in Angular File Manager component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: File Manager
documentation: ug
domainurl: ##DomainURL##
---

# Multiple selection in Angular File Manager component

The File Manager allows you to select multiple files and folders simultaneously for batch operations. This feature enables efficient file management by letting users perform actions on several items at once.

## Enabling multiple selection

By default, the multiple selection feature is enabled in File Manager. You can control this behavior using the [allowMultiSelection](https://ej2.syncfusion.com/angular/documentation/api/file-manager#allowmultiselection) property. When enabled, users can select multiple items using any of these methods:

* Hold `Ctrl` key while clicking individual items to select/deselect them
* Hold `Shift` key while clicking to select a range of items
* Use checkboxes next to each item (when visible)
* Press `Ctrl + A` to select all files and folders in the current directory

Selected items are visually highlighted with a different background color, and their checkboxes (if enabled) will be checked.

The [fileSelect](https://ej2.syncfusion.com/angular/documentation/api/file-manager#fileselect) event triggers whenever items are selected or deselected, providing information about the current selection state.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/multiselect-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager/multiselect-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/multiselect-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/multiselect-cs1" %}

>Note: You can programmatically select specific files and folders either initially or dynamically by providing their names in the [selectedItems](https://ej2.syncfusion.com/angular/documentation/api/file-manager#selecteditems) property.

## Range Selection

The File Manager supports selecting files and folders in specific ranges through mouse drag operations, similar to desktop file explorers. This feature is particularly useful when users need to select a large group of adjacent items quickly.

### Enabling Range Selection

To enable range selection, set the [enableRangeSelection](https://ej2.syncfusion.com/angular/documentation/api/file-manager#enablerangeselection) property to `true` and ensure that multi-selection is allowed using the [allowMultiSelection](https://ej2.syncfusion.com/angular/documentation/api/file-manager#allowmultiselection) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/rangeselection-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager/rangeselection-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/rangeselection-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/rangeselection-cs1" %}

## Disable Multi selection

There are two ways to control multiple selection capabilities in the File Manager:

1. **Partial restriction**: Setting the [allowMultiSelection](https://ej2.syncfusion.com/angular/documentation/api/file-manager#allowmultiselection) property to `false` will disable keyboard-based multiple selection methods (Ctrl+click, Shift+click, Ctrl+A). However, users can still select multiple items using checkboxes if they are visible.

2. **Complete restriction**: To fully disable all multiple selection capabilities, set both [allowMultiSelection](https://ej2.syncfusion.com/angular/documentation/api/file-manager#allowmultiselection) and [showItemCheckBoxes](https://ej2.syncfusion.com/angular/documentation/api/file-manager#showitemcheckboxes) properties to `false`. This ensures users can select only one item at a time.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/disablemultiselection/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager/disablemultiselection/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/disablemultiselection/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/disablemultiselection" %}