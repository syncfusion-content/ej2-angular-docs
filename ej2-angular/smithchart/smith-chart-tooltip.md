---
layout: post
title: Smith chart tooltip in Angular Smithchart component | Syncfusion
description: Learn here all about Smith chart tooltip in Syncfusion Angular Smithchart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Smith chart tooltip 
documentation: ug
domainurl: ##DomainURL##
---

# Smith chart tooltip in Angular Smithchart component

Smithchart will display details about the points through tooltip, when the mouse is moved over the point. By default, tooltip is disabled. To enable the tooltip for smithchart, you need to import and inject TooltipRender module from chart. And also set the property visible as true, in tooltip settings. You can customize the tooltip's visibility and appearance differently each series in the smithchart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs29/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs29/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs29/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs29" %}
