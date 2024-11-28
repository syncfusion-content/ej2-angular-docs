---
layout: post
title: Add remove panels in Angular Dashboard layout component | Syncfusion
description: Learn here all about Add remove panels in Syncfusion Angular Dashboard layout component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Add remove panels 
documentation: ug
domainurl: ##DomainURL##
---
# Add remove panels in Angular Dashboard layout component

In real-time cases, the data being presented within the dashboard should be updated frequently which includes adding or removing the data dynamically within the dashboard. This can be easily achieved by using the `addPanel` and `removePanel` public methods of the component.

## Add or remove panels dynamically

Panels can be added dynamically by using the `addPanel` public method by passing the `panel` property as parameter. Also, they can be removed dynamically by using the `removePanel` public method by passing the `panel id` value as a parameter.

It is also possible to remove all the panels in a Dashboard Layout by calling [removeAll](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout/#removeall) method.

```js
dashboard.removeAll();

```

The following sample demonstrates how to add and remove the panels dynamically in the dashboard layout component. Here, panels can be added in any desired position of required size by selecting them in the numeric boxes and clicking add button and remove them by selecting the ID of the panel.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dashboard-layout/add-remove-panels-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="default-style.css" %}
{% include code-snippet/dashboard-layout/add-remove-panels-cs1/src/default-style.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/add-remove-panels-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dashboard-layout/add-remove-panels-cs1" %}

> You can refer to our [Angular Dashboard Layout](https://www.syncfusion.com/angular-ui-components/angular-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Dashboard Layout example](https://ej2.syncfusion.com/angular/demos/#/material/dashboard-layout/default) to knows how to present and manipulate data.
