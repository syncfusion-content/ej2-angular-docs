---
layout: post
title: Hide control buttons in Angular Color Picker Component | Syncfusion
description: Learn here all about hide control buttons in Syncfusion Essential Angular Color Picker component, it's elements and more.
platform: ej2-angular
control: Hide control buttons 
documentation: ug
domainurl: ##DomainURL##
---

# Hide control buttons in Angular Color Picker Component

ColorPicker can be rendered without control buttons (Apply/Cancel). In this case, while selecting a color, the ColorPicker pop-up is closed and selected colors will be applied directly. To hide control buttons, set the [`showButtons`](https://ej2.syncfusion.com/angular/documentation/api/color-picker/#showbuttons) property to `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/how-to-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/colorpicker/how-to-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/how-to-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/how-to-cs3" %}
