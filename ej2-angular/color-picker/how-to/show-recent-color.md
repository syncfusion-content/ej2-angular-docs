---
layout: post
title: Show Recent colors in Angular Color picker component | Syncfusion
description: Learn here all about showing recent colors in Syncfusion Angular Color picker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Show Recent colors 
documentation: ug
domainurl: ##DomainURL##
---

# Show Recent colors in Angular Color picker component

The `showRecentColors` property enables the display of recently selected colors in the ColorPicker when in palette mode. This feature improves user workflow by providing quick access to previously used colors without searching through the entire palette.

>Note: The [`showRecentColors`](https://ej2.syncfusion.com/angular/documentation/api/color-picker/#showRecentColors) feature displays up to 10 recent colors as tiles and is available only in `palette` mode.

In the following sample, the [`showRecentColors`](https://ej2.syncfusion.com/angular/documentation/api/color-picker/#showRecentColors) property is enabled to display the user's recently selected colors in the palette area.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/colorpicker/recent-color-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/colorpicker/recent-color-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/colorpicker/recent-color-cs1" %}