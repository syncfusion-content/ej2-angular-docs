---
layout: post
title: Customize the edit dialog in Angular Grid component | Syncfusion
description: Learn here all about Customize the edit dialog in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize the edit dialog 
documentation: ug
domainurl: ##DomainURL##
---

# Customize the edit dialog in Angular Grid component

You can customize the appearance of the edit dialog in the [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event based on **requestType** as **beginEdit** or **add**.

In the following example, the dialog's properties like header text, showCloseIcon, height have been changed while editing and adding the records.

Also the locale text for the **Save** and **Cancel** buttons has been changed by overriding the default locale strings.

You can refer the Grid [`Default text`](../global-local/) list for more localization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs48/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs48/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs48/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs48" %}
