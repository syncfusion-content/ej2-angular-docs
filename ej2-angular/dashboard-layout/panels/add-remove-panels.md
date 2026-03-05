---
layout: post
title: Add remove panels in Angular Dashboard layout component | Syncfusion
description: Learn here all about Add remove panels in Syncfusion Angular Dashboard layout component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dashboard Layout
documentation: ug
domainurl: ##DomainURL##
---
# Adding and Removing Panels in Angular Dashboard Layout Component

In real-time scenarios, the data presented within the dashboard often needs to be updated frequently, which includes dynamically adding or removing data within the dashboard. This can be easily achieved by using the [`addPanel`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#addpanel) and [`removePanel`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#removepanel) public methods of the component.

## Adding and Removing Panels Dynamically

### Adding Panels
Panels can be added dynamically using the [`addPanel`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#addpanel) public method by passing the [`panels`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#panels) property as parameter. 

### Removing Panels

Panels can be removed dynamically using the[`removePanel`](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#removepanel) public method by passing the `panel id` value as a parameter.

### Removing All Panels

It is also possible to remove all the panels in a Dashboard Layout by calling the [removeAll](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#removeall) method.

```js
dashboard.removeAll();

```

The following sample demonstrates how to add and remove panels dynamically in the Dashboard Layout component. Panels can be added at any desired position with specified dimensions by configuring values in the numeric inputs and clicking the add button. Panels can be removed individually by selecting their ID.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dashboard-layout/add-remove-panels-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dashboard-layout/add-remove-panels-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/add-remove-panels-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dashboard-layout/add-remove-panels-cs1" %}

> Refer to the [Angular Dashboard Layout](https://www.syncfusion.com/angular-ui-components/angular-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore the [Angular Dashboard Layout example](https://ej2.syncfusion.com/angular/demos/#/material3/dashboard-layout/default) to learn how to present and manipulate data.
