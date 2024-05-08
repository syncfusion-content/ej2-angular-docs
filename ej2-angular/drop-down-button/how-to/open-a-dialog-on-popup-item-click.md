---
layout: post
title: Open a dialog on popup item click in Angular Drop down button component | Syncfusion
description: Learn here all about Open a dialog on popup item click in Syncfusion Angular Drop down button component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Open a dialog on popup item click 
documentation: ug
domainurl: ##DomainURL##
---

# Open a dialog on popup item click in Angular Drop down button component

This section explains about how to open a dialog on DropdownButton popup item click.
This can be achieved by handling dialog open in [`select`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-button/#select) event of the DropdownButton.

In the following example, Dialog will open while selecting `Other Folder...` item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/drop-down-button/dialog-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/drop-down-button/dialog-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/drop-down-button/dialog-cs1" %}