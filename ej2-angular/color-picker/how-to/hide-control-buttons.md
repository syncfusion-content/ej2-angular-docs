---
layout: post
title: Hide control buttons in Angular Color picker component | Syncfusion
description: Learn here all about Hide control buttons in Syncfusion Angular Color picker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Hide control buttons 
documentation: ug
domainurl: ##DomainURL##
---

# Hide control buttons in Angular Color picker component

ColorPicker can be rendered without control buttons (Apply/Cancel). In this case, while selecting a color, the ColorPicker pop-up is closed and selected colors will be applied directly. To hide control buttons, set the [`showButtons`](https://ej2.syncfusion.com/angular/documentation/api/color-picker/#showbuttons) property to `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/how-to-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/how-to-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/how-to-cs3" %}
