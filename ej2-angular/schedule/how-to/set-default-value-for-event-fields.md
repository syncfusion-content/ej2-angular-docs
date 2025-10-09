---
layout: post
title: Set default values for event fields in Angular Schedule | Syncfusion
description: Learn here all about Set default value for event fields in Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Scheduler
documentation: ug
domainurl: ##DomainURL##
---

# Set default values for event fields in Angular Schedule component

Event window default fields name like Title, Location, etc.. can be customized and default value can be set to Subject field using `default` property which will be added if an appointment is created with empty subject.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs51/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs51/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs51" %}
