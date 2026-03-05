---
layout: post
title: Moving panels in Angular Dashboard layout component | Syncfusion
description: Learn here all about Moving panels in Syncfusion Angular Dashboard Layout component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dashboard Layout 
documentation: ug
domainurl: ##DomainURL##
---

# Moving panels in Angular Dashboard layout component

In addition to drag-and-drop interactions, panels can be moved and repositioned programmatically within the Dashboard Layout. This is achieved using the [movePanel](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#movepanel) method. The method is invoked as follows,

```js
movePanel(id, row, col)

```

Where,
* `id` - ID of the panel to be moved.
* `row` - New row position for the panel.
* `col` - New column position for the panel.

Each time a panel's position is changed (either programmatically or through UI interaction), the Dashboard Layout's [change](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#change) event is triggered.

The following sample demonstrates how to move a panel programmatically to a new position in the Dashboard Layout's [created](https://ej2.syncfusion.com/angular/documentation/api/dashboard-layout#created) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dashboard-layout/moving-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dashboard-layout/moving-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dashboard-layout/moving-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dashboard-layout/moving-cs1" %}

> Refer to our [Angular Dashboard Layout](https://www.syncfusion.com/angular-ui-components/angular-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore our [Angular Dashboard Layout example](https://ej2.syncfusion.com/angular/demos/#/material3/dashboard-layout/default) to learn how to present and manipulate data.