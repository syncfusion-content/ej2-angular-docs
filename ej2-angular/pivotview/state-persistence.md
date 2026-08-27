---
layout: post
title: State Persistence in Angular Pivot Table | Syncfusion
description: Learn how the Angular Pivot Table persists the report state, filters, and sort in browser local storage with enablePersistence.
platform: ej2-angular
control: Pivot Table
documentation: ug
domainurl: ##DomainURL##
---

# State persistence in Angular Pivot Table

State persistence enables users to automatically retain the entire configuration of the Pivot Table component in the browser's local storage. This includes the current layout, field arrangements, sorting, applied filters, and the expanded or collapsed states of fields. By enabling the [`enablePersistence`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#enablepersistence) property in the Pivot Table component, all these interactive states and settings are saved automatically. As a result, users can refresh the browser or navigate to different pages and return at any time, knowing that all modified report settings will be retained—ensuring a seamless and uninterrupted data analysis experience.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs281/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs281/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs281" %}

## Save and Load Pivot Layout

In addition to automatic state persistence, the Pivot Table component allows you to save and restore the current layout programmatically. By using the [`getPersistData`](https://ej2.syncfusion.com/angular/documentation/api/pivotview#getpersistdata) method, you can retrieve the complete state of the Pivot Table component as a serialized string. This string can be stored and later re-applied to the component by passing it to the [`loadPersistData`](https://ej2.syncfusion.com/angular/documentation/api/pivotview#loadpersistdata) method. This approach offers flexibility for saving user-specific layouts, restoring previous configurations, or implementing custom workflows for managing and reloading the component’s state as needed.

> The sample below uses **Save** and **Load** buttons. Persist the string returned by `getPersistData()` across page refreshes by writing it to `localStorage`, a server endpoint, or any other application-controlled store before re-applying it through `loadPersistData()`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs282/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs282/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs282" %}

## See Also

* [Save and load report](./save-and-load)