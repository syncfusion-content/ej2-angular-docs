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

The current layout structure of the Dashboard Layout component can be obtained and saved using the [`serialize`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/#serialize) public method of the component. This can be used to construct another dashboard with the same panel structure. This method returns the component's current panel settings which can be used to construct a dashboard with the same layout settings.

The following sample demonstrates how to save and restore the state of the panels using the serialize method. Click Save to store the panel settings and click Restore to restore the previously saved panel settings.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dashboard-layout/save-restore-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dashboard-layout/save-restore-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/save-restore-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dashboard-layout/save-restore-cs1" %}

## State Persistence in Angular Dashboard Layout Component

State persistence allows the Dashboard Layout component to retain the panel positions ([`row`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/panelModel/#row), [`col`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/panelModel/#col)), width ([`sizeX`]((https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/panelModel/#sizex))), and height ([`sizeY`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/panelModel/#sizey)) values in the browser's [localStorage](https://www.w3schools.com/html/html5_webstorage.asp) for state maintenance, even if the browser is refreshed or if you navigate to another page within the browser. This feature is controlled through the [`enablePersistence`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/#enablepersistence) property, which is set to `false` by default. When set to `true`, the panel positions and sizes of the Dashboard Layout component will be retained even after refreshing the page.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dashboard-layout/persistence-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dashboard-layout/persistence-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/persistence-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dashboard-layout/persistence-cs1" %}

> You can refer to our [Angular Dashboard Layout](https://www.syncfusion.com/angular-ui-components/angular-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Dashboard Layout example](https://ej2.syncfusion.com/angular/demos/#/material/dashboard-layout/default) to knows how to present and manipulate data.
