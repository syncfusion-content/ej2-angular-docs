---
layout: post
title: Accessibility in Angular Range slider component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Range slider component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Range slider component

The Slider is characterized with complete ARIA Accessibility support that helps to access by on-screen readers and other assistive technology devices. This component is designed with the reference of guidelines document given in the [WAI ARAI Accessibility Practices](https://www.w3.org/TR/wai-aria-practices/#slider).

The Slider component uses the `Slider` role and the following ARIA properties for its element based on the state.

| **Property** | **Functionalities** |
| --- | --- |
| aria-valuenow | It Indicates the current value of the slider. |
| aria-valuetext | Returns the current text of the slider. |
| aria-valuemin | It Indicates the Minimum value of the slider. |
| aria-valuemax | It Indicates the Maximum value of the slider. |
| aria-orientation | It Indicates the Slider Orientation. |
| aria-label | Slider left and right button label text (increment and decrement). |
| aria-labelledby | It indicates the name of the Slider. |

## Keyboard interaction

The Keyboard interaction of the Slider component is designed based on the [WAI-ARIA Practices](https://www.w3.org/TR/wai-aria-practices/#slider ) described for Slider.
Users can use the following shortcut keys to interact with the Slider.

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>Keyboard shortcuts</b></td><td>
<b>Actions</b></td></tr>
<tr>
<td>
<kbd>Right Arrow</kbd>&nbsp;&nbsp; &#124;&nbsp;&nbsp; <kbd>Up Arrow</kbd></td><td>
Increase the Slider value.
</td></tr>
<tr>
<td>
<kbd>Left Arrow</kbd>&nbsp;&nbsp; &#124;&nbsp;&nbsp; <kbd>Down Arrow</kbd></td><td>
Decrease the Slider value.</td></tr>
<tr>
<td>
<kbd>Home</kbd></td><td>
Moves to the start value (for Range Slider when the second thumb is focused and the Home key is pressed, it moves to the first thumb value).</td></tr>
<tr>
<td>
<kbd>End</kbd></td><td>
Moves to the end value (for Range Slider when the first thumb is focused and the End key is pressed, it moves to the second thumb value).</td></tr>
<tr>
<td>
<kbd>Page Up</kbd></td><td>
Increases the Slider by `largeStep` value.</td></tr>
<tr>
<td>
<kbd>Page Down</kbd></td><td>
Decreases the Slider by `largeStep` value.</td></tr>
</table>

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/accessibility-01-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/slider/accessibility-01-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/accessibility-01-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/accessibility-01-cs1" %}