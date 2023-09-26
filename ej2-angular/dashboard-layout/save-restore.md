---
layout: post
title: Save restore in Angular Dashboard layout component | Syncfusion
description: Learn here all about Save restore in Syncfusion Angular Dashboard layout component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Save restore 
documentation: ug
domainurl: ##DomainURL##
---

# Save restore in Angular Dashboard layout component

The current layout structure of the Dashboard Layout component can be obtained and saved to construct another dashboard with same panel structure using the serialize public method of the component. This method returns the component's current panel setting which can be used to construct a dashboard with the same layout settings.

The following sample demonstrates how to save and restore the state of the panels using the serialize method. Click Save to store the panel's settings and click Restore to restore the previously saved panel settings.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dashboard-layout/save-restore-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/dashboard-layout/save-restore-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/save-restore-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dashboard-layout/save-restore-cs1" %}

> You can refer to our [Angular Dashboard Layout](https://www.syncfusion.com/angular-ui-components/angular-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Dashboard Layout example](https://ej2.syncfusion.com/angular/demos/#/material/dashboard-layout/default) to knows how to present and manipulate data.