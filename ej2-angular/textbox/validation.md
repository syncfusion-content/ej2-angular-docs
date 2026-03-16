---
layout: post
title: Validation in Angular TextBox component | Syncfusion
description: Learn here all about Validation in Syncfusion Angular TextBox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Validation 
documentation: ug
domainurl: ##DomainURL##
---

# Validation in Angular TextBox Component

The Angular TextBox component provides visual feedback for form validation through three distinct validation states: `error`, `warning`, and `success`. These visual states help users understand the validation status of their input and improve the overall form experience.

## Validation States

The TextBox component supports visual validation states that can be applied by adding corresponding CSS classes to the [cssClass](https://ej2.syncfusion.com/angular/documentation/api/textbox/#cssclass) property:

- **Error state** (`.e-error`): Indicates invalid input that requires correction
- **Warning state** (`.e-warning`): Suggests potential issues or recommendations
- **Success state** (`.e-success`): Confirms valid input

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/getting-started-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/getting-started-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/getting-started-cs11" %}

## Adding Mandatory Asterisk to Labels

For required fields, add a visual asterisk indicator to placeholder text and floating labels using CSS. This provides clear visual cues about mandatory form fields.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/asterisk-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/asterisk-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/asterisk-cs1" %}

The asterisk styling uses the CSS selector `.e-float-input.e-control-wrapper .e-float-text::after` to append the mandatory indicator to float labels automatically.
