---
layout: post
title: Save restore in Angular Dashboard layout component | Syncfusion
description: Learn here all about Save restore in Syncfusion Angular Dashboard layout component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dashboard Layout 
documentation: ug
domainurl: ##DomainURL##
---

# Save and Restore Layout State in Angular Dashboard Layout Component

The Dashboard Layout component provides the ability to save the current layout configuration and restore it later, enabling users to persist their preferred panel arrangements across sessions or create reusable dashboard templates.

## Save Layout State
The current layout structure of the Dashboard Layout component can be obtained using the [`serialize`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#serialize) public method of the component. This can be used to construct another dashboard with the same panel structure. This method returns the component's current panel settings which can be used to construct a dashboard with the same layout settings.

## Implementation Example

The following sample demonstrates how to save and restore panel states using the serialize method. The Save button stores the current panel settings, while the Restore button applies the previously saved configuration.

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

> Refer to the [Angular Dashboard Layout](https://www.syncfusion.com/angular-ui-components/angular-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore our [Angular Dashboard Layout example](https://ej2.syncfusion.com/angular/demos/#/material3/dashboard-layout/default) to learn how to present and manipulate data.