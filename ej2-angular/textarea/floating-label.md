---
layout: post
title: Floating Label in Angular TextArea | Syncfusion
description: Display a floating label above the Angular TextArea using floatLabelType modes (Auto, Always, Never), and localize the placeholder with the L10n library.
control: Floating Label 
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Floating Label in Angular TextArea

The floating label feature in the TextArea component displays the placeholder text above the textarea when the user interacts with it, providing an intuitive user experience. Configure this behavior using the [floatLabelType](https://ej2.syncfusion.com/angular/documentation/api/textarea/#floatLabelType) property, which offers the following options:

| Type  | Description |
| -- | -- |
| Auto  | The label floats above the TextArea when it receives focus or input, returning to its initial position when the TextArea loses focus and contains no value. |
| Always | The label always remains floating above the TextArea, regardless of user interaction. |
| Never | The label never floats; it remains in its default position within the TextArea. |

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/textarea/float-label-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/float-label-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textarea/float-label-cs1" %}

## Placeholder with Localization

You can localize the TextArea placeholder text to different cultures using the `locale` property with the localization library.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/textarea/localization-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/localization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textarea/localization-cs1" %}

To load translation object in an application use `load` function of `L10n` class.
In the below sample, `German` culture is loaded to the TextArea placeholder text.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/textarea/localization-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/localization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textarea/localization-cs1" %}
