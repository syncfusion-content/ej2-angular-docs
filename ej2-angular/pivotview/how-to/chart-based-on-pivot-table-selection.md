---
layout: post
title: Chart based on pivot table selection in Angular Pivotview component | Syncfusion
description: Learn here all about Chart based on pivot table selection in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Chart based on pivot table selection 
documentation: ug
domainurl: ##DomainURL##
---

# Chart based on pivot table selection in Angular Pivotview component

The cell selection support is enabled using the [`allowSelection`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#allowselection) property and its type and mode are configured using the [`selectionSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSelectionSettings/) property. The [`cellSelected`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#cellselected) event gets fired on every selection operation performed in the pivot table. This event returns the selected cell informations, like row header name, column header name, measure name, and value. Based on this information, the [`chart`](https://ej2.syncfusion.com/angular/documentation/chart/getting-started/) control will be plotted.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs159/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs159/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs159/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs159" %}
