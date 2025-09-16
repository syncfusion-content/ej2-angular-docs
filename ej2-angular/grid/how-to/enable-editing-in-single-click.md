---
layout: post
title: Enable editing in single click in Angular Grid component | Syncfusion
description: Learn how to enable single-click editing in the Syncfusion Angular Grid for a faster data entry experience, including normal editing and dropdown popup activation.
platform: ej2-angular
control: Enable editing in single click 
documentation: ug
domainurl: ##DomainURL##
---

# Enable editing in single click in Angular Grid component

## Normal Editing

You can enable editing of a row with a single mouse click in the Syncfusion Angular Grid using the **Normal** editing mode. Invoke the [`startEdit`](https://ej2.syncfusion.com/angular/documentation/api/grid/#startedit) and [`endEdit`](https://ej2.syncfusion.com/angular/documentation/api/grid/#endedit) methods within an event handler for the Grid's **mouseup** event. Depending on the clicked target, start or end the row editing mode immediately, facilitating quick data entry and updates.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/single-click-batch-editing-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/single-click-batch-editing-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/single-click-batch-editing-cs1" %}

### Open dropdown edit popup on single click

You can also open the dropdown edit popup with a single click for dropdown-type columns. To do this, focus the element and invoke the EJ2 DropDownList [`showPopup`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#showpopup) method within the Grid's [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event. In this workflow, a global flag variable in the **mouseup** event ensures activation for the correct dropdown target column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/open-dropdown-popup-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/open-dropdown-popup-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/open-dropdown-popup-cs1" %}
