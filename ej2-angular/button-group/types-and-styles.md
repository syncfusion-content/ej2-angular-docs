---
layout: post
title: Types and styles in Angular Button group component | Syncfusion
description: Learn here all about Types and styles in Syncfusion Angular Button group component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Types and styles 
documentation: ug
domainurl: ##DomainURL##
---

# Types and styles in Angular Button group component

This section explains about different types and styles of ButtonGroup.

## ButtonGroup types

### Outline ButtonGroup

An Outline ButtonGroup has a border with transparent background. To create Outline ButtonGroup, `e-outline` class should be added to the target element and to each button elements using `cssClass` property.

The following sample illustrates how to achieve an Outline ButtonGroup,

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/button-group/default-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/button-group/default-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/button-group/default-cs11" %}

> ButtonGroup does not have support for `flat` and `round` types.

## ButtonGroup styles

The Essential JS 2 ButtonGroup has the following predefined styles. This can be achieved by adding corresponding class name in each button elements using `cssClass` property.

| Class | Description |
| -------- | -------- |
| e-primary | Used to represent a primary action. |
| e-success | Used to represent a positive action. |
| e-info | Used to represent an informative action. |
| e-warning | Used to represent an action with caution. |
| e-danger | Used to represent a negative action. |

The following example illustrates how to achieve predefined styles in ButtonGroup.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/button-group/default-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/button-group/default-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/button-group/default-cs12" %}

> Predefined ButtonGroup styles provide only the visual indication. So,
ButtonGroup content should define the ButtonGroup style for the users of assistive technologies such as screen readers.

## See Also

* [ButtonGroup with icons](./how-to/create-buttongroup-with-icons)
* [Create ButtonGroup with rounded corner](./how-to/create-buttongroup-with-rounded-corner)