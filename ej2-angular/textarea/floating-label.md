---
layout: post
title: Floating Label in Angular TextArea component | Syncfusion
description: Checkout and learn about Floating Label in Angular TextArea component of Syncfusion Essential JS 2 and more.
control: Floating Label 
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Floating Label in Angular TextArea control

The floating label functionality in the TextArea control allows the placeholder text to float above the TextArea while the user interacts with it, providing a more intuitive user experience. This feature can be achieved using the [floatLabelType](https://ej2.syncfusion.com/angular/documentation/api/textarea/#floatLabelType) API, which offers various options for defining the floating behavior:

| Type  | Description |
| -- | -- |
| Auto  | The label floats above the TextArea when it receives focus or input, returning to its initial position when the TextArea loses focus and contains no value. |
| Always | The label always remains floating above the TextArea, regardless of user interaction. |
| Never | The label never floats; it remains in its default position within the TextArea. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textarea/float-label-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/textarea/float-label-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/float-label-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textarea/float-label-cs1" %}

## Placeholder with localization

Localization library allows to localize the placeholder text of the TextArea to different cultures using the `locale` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textarea/localization-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/textarea/localization-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/localization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textarea/localization-cs1" %}

To load translation object in an application use `load` function of `L10n` class.
In the below sample, `German` culture is loaded to the TextArea placeholder text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textarea/localization-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/textarea/localization-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textarea/localization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textarea/localization-cs1" %}
