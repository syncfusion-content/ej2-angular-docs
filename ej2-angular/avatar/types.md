---
layout: post
title: Types in Angular Avatar component | Syncfusion
description: Learn here all about Types in Syncfusion Angular Avatar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Avatar 
documentation: ug
domainurl: ##DomainURL##
---

# Types in Angular Avatar component

The Angular Avatar component provides different sizes and visual styles to suit various design requirements. This section covers the available avatar sizes and shape types that can be customized using CSS classes.

## Avatar size

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Avatar provides predefined sizes that can be applied using CSS classes with the base `.e-avatar` class to control the avatar's dimensions.

| Class Name         | Description
| :-------------     |:-------------
| e-avatar-xlarge    | Displays extra large size avatar.
| e-avatar-large     | Displays large size avatar.
| e-avatar           | Displays default size avatar.
| e-avatar-small     | Displays small size avatar.
| e-avatar-xsmall    | Displays extra small size avatar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/avatar/size-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/avatar/size-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/avatar/size-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/avatar/size-cs1" %}

## Avatar types

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Avatar supports two distinct shape styles to accommodate different design preferences:

* Default (Rectangular with rounded corners)
* Circle

### Default

The default avatar style features a rectangular shape with rounded corners, providing a modern appearance suitable for most applications. This style is applied by adding the base class `.e-avatar` to the target element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/avatar/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/avatar/default-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/avatar/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/avatar/default-cs1" %}

### Circle

The circular avatar style creates a perfectly round appearance, ideal for profile pictures and user representations. Apply this style by adding the modifier class `.e-avatar-circle` along with the base `.e-avatar` class to the target element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/avatar/circle-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/avatar/circle-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/avatar/circle-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/avatar/circle-cs1" %}