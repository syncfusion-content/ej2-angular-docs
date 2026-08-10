---
layout: post
title: Title Subtitle in Angular Smith Chart | Syncfusion
description: Learn here all about Title subtitle in Syncfusion Angular Smithchart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Title subtitle 
documentation: ug
domainurl: ##DomainURL##
---

# Title Subtitle in Angular Smith Chart

## Add a title to the Smith Chart

The [`title`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartModel#title) API adds a title to the Smith Chart. Use the [`text`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/titleModel#text) API to set the title text, and the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/titleModel#visible) API to toggle the title's visibility. To add a subtitle and customize text styles, see the [Title and Subtitle](./title-subtitle) topic.

Update `app.component.ts` as shown in the following example to add a title.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs3" %}

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
