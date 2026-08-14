---
layout: post
title: How to disable in Angular Button Group | Syncfusion
description: Disable a particular button or the whole Angular Button Group by adding the disabled attribute to button elements.
platform: ej2-angular
control: Disable 
documentation: ug
domainurl: ##DomainURL##
---

# How to disable in Angular Button Group

## Particular button

To disable a particular button in a ButtonGroup, `disabled` attribute should be added to corresponding button element.

## Whole ButtonGroup

To disable whole ButtonGroup, `disabled` attribute should be added to all the button elements.

The following example illustrates how to disable the particular and the whole ButtonGroup.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/button-group/default-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/button-group/default-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/button-group/default-cs4" %}

> To disable radio/checkbox type ButtonGroup, the `disabled` attribute should be added to the particular input element.