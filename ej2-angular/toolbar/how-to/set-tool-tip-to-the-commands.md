---
layout: post
title: Set tool tip to the commands in Angular Toolbar component | Syncfusion
description: Learn here all about Set tool tip to the commands in Syncfusion Angular Toolbar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Set tool tip to the commands 
documentation: ug
domainurl: ##DomainURL##
---

# Set tool tip to the commands in Angular Toolbar component

The [`tooltipText`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item#tooltiptext) property of the Toolbar item is used to set the HTML Tooltip to the commands that can be viewed as hint texts on mouse hover.

To change the [`tooltipText`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item#tooltiptext) to ej2-tooltip component:

* Import the `Tooltip` module from `ej2-popups`,and initialize the Tooltip with the Toolbar target. Refer to the following code example:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/toolbar-items-cs4" %}