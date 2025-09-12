---
layout: post
title: Hide checkbox in Angular ListView | Syncfusion
description: Learn here all about Hide checkbox in ListView in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView 
documentation: ug
domainurl: ##DomainURL##
---

# Hide checkbox in ListView in Angular ListView component

The checkbox of specific list items can be hidden by configuring the [`htmlAttributes`](https://ej2.syncfusion.com/angular/documentation/api/list-view/fieldSettingsModel/#htmlattributes) property within the [`fields`](https://ej2.syncfusion.com/angular/documentation/api/list-view/fieldSettingsModel/) object. Using `htmlAttributes`, a custom CSS class can be added to individual list items to control checkbox visibility.

In this example, checkboxes are hidden for leaf nodes in a nested list structure. The `e-checkbox-hidden` CSS class is applied through the data source to items where checkboxes should be hidden. Here's a sample data structure:

```typescript
{
    'text': 'New York',
    'id': '3002',
    'category': 'USA',
    'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' }
}
```

When hiding checkboxes, the list item's selection behavior remains active and affects the [`getSelectedItems`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#getselecteditems) method results. To handle this, implement custom logic in the [`select`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#select) event. This logic removes the `e-active` class from previously selected hidden-checkbox items while maintaining it only on the currently selected item.

> Note: This implementation specifically targets list items with hidden checkboxes while preserving normal behavior for items with visible checkboxes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/hide-checkbox-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/hide-checkbox-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/hide-checkbox-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/hide-checkbox-cs2" %}
