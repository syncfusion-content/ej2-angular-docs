---
layout: post
title: Accessibility in Angular Listview component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Listview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Listview component

## Keyboard interaction

We can use the following key shortcuts to access ListView component without any interrupt.

| Keyboard shortcuts | Actions |
|------------|-------------------|
| <kbd>Arrow Up</kbd> | Move to the previous list item |
| <kbd>Arrow Down</kbd> | Move to the next list item |
| <kbd>Select</kbd> | Select the targeted list from the whole list |
| <kbd>Back</kbd> | Get back to the previous lists if it is nested list |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/accessibility-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/listview/accessibility-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/accessibility-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/accessibility-cs1" %}

## ARIA attributes

The following ARIA attributes is applicable for ListView component based on its state.

| Properties | Functionality |
| ------------ | ----------------------- |
| aria-selected | It indicates the selected list from the whole list. |
| aria-level | It defines the hierarchical structure of a list item. |
