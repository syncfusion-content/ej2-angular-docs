---
layout: post
title: State persistence in Angular Pivotview component | Syncfusion
description: Learn here all about State persistence in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: State persistence 
documentation: ug
domainurl: ##DomainURL##
---

# State persistence in Angular Pivotview component

State persistence allows user to maintain the current state of the component along with its report bounded in the browser local storage (cookie). Even if the browser is refreshed or if you move to the next page within the browser, components state will be persisted. State persistence stores the Pivot Table object in the local storage when [`enablePersistence`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#enablepersistence) property in pivot table is set to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs281/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs281/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs281/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs281" %}

# Save and Load Pivot Layout

You can save the current layout of the pivot table by using [`getPersistData`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#getpersistdata) in string format. The saved layout can be loaded to pivot table any time by passing the saved data as a parameter to [`loadPersistData`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#loadpersistdata) method in the pivot table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs282/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs282/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs282/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs282" %}