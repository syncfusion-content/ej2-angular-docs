---
layout: post
title: How to hide control buttons in Angular Color Picker | Syncfusion
description: Hide the Apply and Cancel buttons in the Syncfusion Angular Color Picker by setting showButtons to false so colors apply immediately on selection.
platform: ej2-angular
control: Hide control buttons 
documentation: ug
domainurl: ##DomainURL##
---

# How to hide control buttons in Angular Color Picker

The ColorPicker can be configured to hide the control buttons (Apply and Cancel). When buttons are hidden, selecting a color immediately applies the selection and closes the popup. To hide control buttons, set the [`showButtons`](https://ej2.syncfusion.com/angular/documentation/api/color-picker/index-default#showbuttons) property to `false`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/colorpicker/how-to-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/how-to-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/how-to-cs3" %}
