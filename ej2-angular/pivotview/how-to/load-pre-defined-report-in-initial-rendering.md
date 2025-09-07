---
layout: post
title: Default report loading in Angular Pivotview component | Syncfusion
description: Learn here all about Load desired report from the report list as default in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Load desired report from the report list as default 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->
# Load desired report from list as default in Angular Pivot Table

By default, the pivot table displays with the report configuration defined in the component initialization. To load a specific report from a previously saved report collection during the initial rendering process, configure the desired report name within the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#databound) event. This approach allows the pivot table to automatically apply the selected report's configuration, including field arrangements, filters, and formatting settings, as soon as the component completes its data binding process.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs317/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs317/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs317" %}