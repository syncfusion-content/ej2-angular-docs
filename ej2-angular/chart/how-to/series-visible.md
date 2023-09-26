---
layout: post
title: Series visible in Angular Chart component | Syncfusion
description: Learn here all about Series visible in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Series visible 
documentation: ug
domainurl: ##DomainURL##
---

# Series visible in Angular Chart component

By using the `chartMouseClick` event, you can show the series based on respective legend click. In this event, you can get the legend target id, using which you can get the current series index. Based on the index, you can set value of `visible` to `true` or `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs18/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/how-to-cs18/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs18" %}