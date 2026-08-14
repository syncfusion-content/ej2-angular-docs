---
layout: post
title: Open a dialog on popup item click in Angular Dropdown Menu | Syncfusion
description: Open a Dialog when an Angular Dropdown Menu popup item is selected by handling the select event.
platform: ej2-angular
control: Open a dialog on popup item click 
documentation: ug
domainurl: ##DomainURL##
---

# How to open a dialog on popup item click in Angular Dropdown Menu

This section explains about how to open a dialog on DropdownButton popup item click.
This can be achieved by handling dialog open in [`select`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-button/#select) event of the DropdownButton.

In the following example, Dialog will open while selecting `Other Folder...` item.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/drop-down-button/dialog-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/drop-down-button/dialog-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/drop-down-button/dialog-cs1" %}