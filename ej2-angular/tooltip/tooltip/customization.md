---
layout: post
title: Customization in Angular Tooltip component | Syncfusion
description: Learn here all about Customization in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customization 
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Angular Tooltip component

Customize the tooltip using the `cssClass` property, which accepts custom CSS class names to apply user-defined styles and themes to the tooltip element.

## Tip pointer customization

Style the tip pointer's size, background, and border colors using the `cssClass` property as shown below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/getting-started-cs26/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/getting-started-cs26/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/getting-started-cs26" %}

## Tooltip customization

Customize the tooltip's complete appearance by changing its background color, opacity, content font, and more. The following code example shows how to achieve this.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/custom-css-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/custom-css-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/custom-css-cs2" %}
