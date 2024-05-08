---
layout: post
title: Title subtitle in Angular Smithchart component | Syncfusion
description: Learn here all about Title subtitle in Syncfusion Angular Smithchart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Title subtitle 
documentation: ug
domainurl: ##DomainURL##
---

# Title subtitle in Angular Smithchart component

## Enable title

Title and subtitle is used to depicts the information about the data plotted in the smithchart. You can set the title and subtitle of the smithchart using the [`text`] property in title and subtitle. By default visibility of the title as well as subtitle is enabled. You need to set simply text for title and subtitle in your sample as like below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs30/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs30/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs30" %}

## Title trim

Both title and subtitle of the smithchart can be trimmed if it exceeds the certain length. Trimming is enabled using [`enableTrim`] for title as well as subtitle. This length can be changed using the property [`maximumWidth`]. Also [`font`], [`textAlignment`] and [`visibility`] can be customized for title as well as subtitle.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs31/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs31/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs31" %}
