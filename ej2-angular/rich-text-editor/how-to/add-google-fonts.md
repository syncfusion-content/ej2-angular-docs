---
layout: post
title: Add google fonts in Angular Rich text editor component | Syncfusion
description: Learn here all about Add google fonts in Syncfusion Angular Rich text editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Add google fonts 
documentation: ug
domainurl: ##DomainURL##
---

# Add google fonts in Angular Rich text editor component

To use web fonts in RTE, it is not needed for the web fonts to be present in local machine. To add the web fonts to RTE, you need to refer the web font links and add the font names in the [`fontFamily`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#fontfamily) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/how-to/cursor-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/how-to/cursor-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/how-to/cursor-cs1" %}

The below font style links are referred in the page.

```typescript

<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto">
<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Great+Vibes">

```

> In the above sample, you can see that you have added two Google web fonts (`Roboto` and `Great vibes`) to `RTE`.