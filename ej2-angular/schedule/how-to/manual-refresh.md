---
layout: post
title: Manual refresh in Angular Schedule component | Syncfusion
description: Learn here all about Manual refresh in Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Scheduler
documentation: ug
domainurl: ##DomainURL##
---

# Manual refresh in Angular Schedule component

## Refresh Template

In the Scheduler component, you can refresh specific template element without re-rendering the entire component by using the [`refreshTemplates`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#refreshtemplates) public method. We can provide an additional option to refresh specific templates alone or all templates together by using this method. The following template names are accepted as an argument to refresh it specifically.

* `eventTemplate`
* `dateHeaderTemplate`
* `resourceHeaderTemplate`
* `quickInfoTemplates`
* `editorTemplate`
* `tooltipTemplate`
* `headerTooltipTemplate`

In the following code example, you can see how to use the refreshTemplates method to refresh multiple templates. Here, we have added the following scheduler templates such as [`cellTemplate`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#celltemplate), [`dateHeaderTemplate`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#dateheadertemplate), [`eventTemplate`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#eventtemplate) and [`resourceHeaderTemplate`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#resourceheadertemplate)

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/schedule/refresh-templates-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/refresh-templates-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/refresh-templates-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/refresh-templates-cs1" %}

## Refresh Layout

In Scheduler, we can able to refresh the layout manually without re-render the DOM element by using the [`refreshLayout`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#refreshlayout) public method. The following example code explains to know how to use the refreshLayout method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs47/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs47/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs47" %}
