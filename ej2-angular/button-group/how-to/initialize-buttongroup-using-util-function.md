---
layout: post
title: Initialize buttongroup using util function in Angular Button group component|Syncfusion
description: Learn here all about Initialize buttongroup using util function in Syncfusion Angular Button group component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Initialize buttongroup using util function 
documentation: ug
domainurl: ##DomainURL##
---

# Initialize buttongroup using util function in Button group component

Though, it is a CSS component for easy initialization of ButtonGroup `createButtonGroup` util function can be used.

To use `createButtonGroup` util function, [`SplitButton dependencies`](./../../split-button/getting-started#dependencies) should be configured and it should be added in `system.config.js`.

Using `createButtonGroup` method, the Button options, selector, and cssClass is passed and the corresponding classes is added to the elements.

## Create basic ButtonGroup

To create a basic ButtonGroup, the target element along with the button elements should be created and `createButtonGroup` should be imported from `ej2-splitbuttons`.

## Create radio type ButtonGroup

To create a radio type ButtonGroup, the target element along with the input elements should be created with type `radio`.

## Create checkbox type ButtonGroup

Checkbox type ButtonGroup creation is similar to radio type ButtonGroup, instead the type of the input elements should be `checkbox`.

The following example illustrates how to create ButtonGroup using `createButtonGroup` function for basic, checkbox, and radio
type behaviors.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/button-group/util-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/button-group/util-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/button-group/util-cs2" %}

> If null value is passed in button options, then that particular button will be skipped from processing in `createButtonGroup` util function.