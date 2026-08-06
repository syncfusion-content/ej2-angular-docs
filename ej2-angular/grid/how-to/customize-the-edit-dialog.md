---
layout: post
title: Angular Grid Edit Dialog Customization | Syncfusion
description: Learn how to customize the edit dialog in Angular Data Grid using actionComplete, dialog properties, and localization settings for editing workflows.
platform: ej2-angular
control: Customize the edit dialog 
documentation: ug
domainurl: ##DomainURL##
---

# Customize Edit Dialog in Angular Data Grid

The edit dialog in the Syncfusion Angular Grid can be customized for appearance and behavior using the [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event. Use the **requestType** property within this event to determine if the dialog is opening for **beginEdit** or **add** operations.

In the example below, dialog properties such as header text, `showCloseIcon`, and height are customized for both editing and adding records.

Additionally, localization for the **Save** and **Cancel** buttons is achieved by overriding default locale strings. For a full list of adjustable Grid text, see the Grid [`Default text`](../global-local/) documentation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs48/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs48/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs48" %}
