---
layout: post
title: Selection in Angular Button group component | Syncfusion
description: Learn here all about Selection in Syncfusion Angular Button group component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Selection 
documentation: ug
domainurl: ##DomainURL##
---

# Selection in Angular Button group component

## Selection

### Single selection

ButtonGroup supports radio type selection in which only one button can be selected. This can be achieved by adding input element along with `id` attribute with its corresponding label along with `for` attribute inside the target element. In this ButtonGroup, the type of the input element should be `radio` and `e-btn` is added to the `label` element.

The following example illustrates the single selection behavior in ButtonGroup.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/button-group/default-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/button-group/default-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/button-group/default-cs9" %}

### Multiple selection

ButtonGroup supports checkbox type selection in which multiple button can be selected. This can be achieved by adding input element along with `id` attribute with its corresponding label along with `for` attribute inside the target element. In this ButtonGroup, the type of the input element should be `checkbox` and `e-btn` is added to the `label` element.

The following example illustrates the multiple selection behavior in ButtonGroup.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/button-group/default-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/button-group/default-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/button-group/default-cs10" %}

## Nesting

Nesting with other components can be possible in ButtonGroup. The following components can be nested in ButtonGroup,
* DropDownButton
* SplitButton

For nesting support, [`SplitButton dependencies`](./../split-button/getting-started#dependencies) should be configured and added in
`system.config.js`.

### DropDownButton

To initialize DropDownButton component, refer [`DropDownButton Getting Started documentation`](./../drop-down-button/getting-started).

In the following example, the DropDownButton component is rendered in `app.component.ts` and `DropDownButtonModule` is imported in `app.module.ts` file.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/button-group/drop-down-button-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/button-group/drop-down-button-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/button-group/drop-down-button-cs1" %}

### SplitButton

To initialize SplitButton component refer [`SplitButton Getting Started documentation`](./../split-button/getting-started).

In the following example, the SplitButton component is rendered in `app.component.ts` and `SplitButtonModule` is imported in `app.module.ts` file.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/button-group/split-button-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/button-group/split-button-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/button-group/split-button-cs1" %}

## See Also

* [Show ButtonGroup selected state on initial render](./how-to/show-buttongroup-selected-state-on-initial-render)
