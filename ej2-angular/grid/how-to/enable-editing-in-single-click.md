---
layout: post
title: Enable editing in single click in Angular Grid component | Syncfusion
description: Learn here all about Enable editing in single click in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Enable editing in single click 
documentation: ug
domainurl: ##DomainURL##
---

# Enable editing in single click in Angular Grid component

## Normal Editing

You can make a row editable on a single click with **Normal** mode of editing in Grid, by using the [`startEdit`](https://ej2.syncfusion.com/angular/documentation/api/grid/#startedit) and [`endEdit`](https://ej2.syncfusion.com/angular/documentation/api/grid/#endedit) methods.

Bind the **mouseup** event for Grid and in the event handler call the [`startEdit`](https://ej2.syncfusion.com/angular/documentation/api/grid/#startedit) and [`endEdit`](https://ej2.syncfusion.com/angular/documentation/api/grid/#endedit), based on the clicked target element.

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

You can open the default dropdown edit popup with single click edit by focusing the dropdown element and calling the EJ2 dropdown list's [`showPopup`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#showpopup) method in the Grid's [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event. In this demo we have used a global flag variable in the **mouseup** event to ensure if the dropdown column is the clicked edit target.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/open-dropdown-popup-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/open-dropdown-popup-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/open-dropdown-popup-cs1" %}
