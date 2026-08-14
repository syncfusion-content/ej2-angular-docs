---
layout: post
title: How to customize the appearance of a switch in Angular Toggle Switch Button | Syncfusion
description: Customize Angular Toggle Switch Button appearance by applying custom CSS classes through the cssClass property.
platform: ej2-angular
control: Customize the appearance of a switch 
documentation: ug
domainurl: ##DomainURL##
---

# How to customize the appearance of a switch in Angular Toggle Switch Button

You can customize the appearance of the Switch component using the CSS rules. Define your own CSS rules according to your requirement and assign the class name to the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/switch#cssClass) property.

## Customize Switch bar and handle

Switch bar and handle can be customized as per requirement using CSS rules. Switch bar and handle customized using `cssClass` property. In the following sample, the `border-radius` CSS property for the Switch bar (`e-switch-inner`) and handle (`e-switch-handle`) elements was changed border radius circle to square shape.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/switch/how-to-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/switch/how-to-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/switch/how-to-cs1/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/switch/how-to-cs1" %}

## Color the Switch

Switch colors can be customized as per the requirement using CSS rules. Switch bar and handle colors customized using `cssClass` property. In the following sample, the Switch bar (`e-switch-inner`) element background and border colors were changed from default colors.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/switch/on-off-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/switch/on-off-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/switch/on-off-cs1/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/switch/on-off-cs1" %}