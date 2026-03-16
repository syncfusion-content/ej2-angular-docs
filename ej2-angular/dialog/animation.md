---
layout: post
title: Animation in Angular Dialog component | Syncfusion
description: Learn here all about Animation in Syncfusion Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Animation 
documentation: ug
domainurl: ##DomainURL##
---

# Animation in Angular Dialog component

The Dialog can be animated during open and close actions. Customize animation using the [`delay`](https://ej2.syncfusion.com/angular/documentation/api/dialog/animationSettings/#delay), [`duration`](https://ej2.syncfusion.com/angular/documentation/api/dialog/animationSettings/#duration), and [`effect`](https://ej2.syncfusion.com/angular/documentation/api/dialog/animationSettings/#effect) properties.

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
delay</td><td>
The Dialog animation will start with the mentioned delay</td></tr>
<tr>
<td>
duration</td><td>
Specifies the animation duration to complete with one animation cycle</td></tr>
<tr>
<td>
effect</td><td>
Specifies the animation effects of Dialog open and close actions effect.
<br /><br />
List of supported animation effects:
<br />
'Fade' | 'FadeZoom' | 'FlipLeftDown' | 'FlipLeftUp' | 'FlipRightDown' | 'FlipRightUp' | 'FlipXDown' |
'FlipXUp' | 'FlipYLeft' | 'FlipYRight' | 'SlideBottom' | 'SlideLeft' | 'SlideRight' | 'SlideTop' |
'Zoom'| 'None'
<br /><br />
If the user sets ‘Fade’ effect, then the Dialog will open with ‘FadeIn’ effect and close with ‘FadeOut’ effect
</td></tr>
</table>

The following sample demonstrates the `Zoom` effect. The dialog opens with `ZoomIn` and closes with `ZoomOut`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/getting-started-cs1" %}
