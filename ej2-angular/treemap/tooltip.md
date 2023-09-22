---
layout: post
title: Tooltip in Angular Treemap component | Syncfusion
description: Learn here all about Tooltip in Syncfusion Angular Treemap component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tooltip 
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in Angular Treemap component

Tooltip is used to display details about the items in the TreeMap. When space constraints prevent us from displaying the information using Data Labels, the tooltip comes in handy.

## Default tooltip

The tooltip is not visible by default, to make it visible, set the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/treemap/tooltipSettingsModel/#visible) property in the [`tooltipSettings`](https://ej2.syncfusion.com/angular/documentation/api/treemap/#tooltipsettings) to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs53/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs53/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs53/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs53" %}

## Format tooltip

The tooltip content is displayed by default based on the [`weightValuePath`](https://ej2.syncfusion.com/angular/documentation/api/treemap/#weightvaluepath). In addition, to show more information in the tooltip, use the [`format`](https://ej2.syncfusion.com/angular/documentation/api/treemap/tooltipSettingsModel/#format) property and define field from the data source as `${datafield}`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs54/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs54/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs54/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs54" %}

## Tooltip template

Tooltip can be rendered as a custom component using the [`template`](https://ej2.syncfusion.com/angular/documentation/api/treemap/tooltipSettingsModel/#template) property in the [`tooltipSettings`](https://ej2.syncfusion.com/angular/documentation/api/treemap/#tooltipsettings) which accepts one or more UI elements as an input, that can be rendered as a part of the tooltip rendering. You can use `${datafield}` as placeholder in HTML element to display the values from data source.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs55/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs55/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs55/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs55" %}