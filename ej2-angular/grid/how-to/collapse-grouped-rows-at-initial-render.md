---
layout: post
title: Collapse grouped rows at initial render in Angular Grid component | Syncfusion
description: Learn here all about Collapse grouped rows at initial render in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Collapse grouped rows at initial render 
documentation: ug
domainurl: ##DomainURL##
---

# Collapse grouped rows at initial render in Angular Grid component

You can collapse all the grouped rows at initial rendering by using [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event with  [`collapseAll`](https://ej2.syncfusion.com/angular/documentation/api/grid/group/#collapseall) method of the grid.

In the below demo, all the grouped rows are collapsed at initial rendering.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/collapse-all-initial-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/collapse-all-initial-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/collapse-all-initial-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/collapse-all-initial-cs1" %}