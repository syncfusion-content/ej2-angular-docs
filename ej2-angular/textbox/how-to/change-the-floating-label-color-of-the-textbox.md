---
layout: post
title: Change the floating label color of the textbox in Angular Textbox component | Syncfusion
description: Learn here all about Change the floating label color of the textbox in Syncfusion Angular Textbox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Change the floating label color of the textbox 
documentation: ug
domainurl: ##DomainURL##
---

# Change the floating label color of the textbox in Angular Textbox component

You can change the floating label color of the TextBox for both `success` and `warning` validation states by applying the following CSS styles.

```CSS

    /* For Success state */
    .e-float-input.e-success label.e-float-text,
    .e-float-input.e-success input:focus ~ label.e-float-text,
    .e-float-input.e-success input:valid ~ label.e-float-text {
      color: #22b24b;
    }

    /* For Warning state */
    .e-float-input.e-warning label.e-float-text,
    .e-float-input.e-warning input:focus ~ label.e-float-text,
   .e-float-input.e-warning input:valid ~ label.e-float-text {
      color: #ffca1c;
    }

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/getting-started-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/getting-started-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/getting-started-cs7" %}
