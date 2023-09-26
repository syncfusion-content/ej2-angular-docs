---
layout: post
title: Dynamically change columns in Angular Kanban component | Syncfusion
description: Learn here all about Dynamically change columns in Syncfusion Angular Kanban component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dynamically change columns 
documentation: ug
domainurl: ##DomainURL##
---

# Dynamically change columns in Angular Kanban component

You can dynamically change the Kanban columns by using the [`columns`](https://ej2.syncfusion.com/angular/documentation/api/kanban/#columns) property.

In the below sample, you can dynamically change the [`allowToggle`](https://ej2.syncfusion.com/angular/documentation/api/kanban/columnsModel/#allowtoggle) property at the particular column when you click on the button. You can also change the initially created columns to the new Kanban columns by using the [`columns`](https://ej2.syncfusion.com/angular/documentation/api/kanban/#columns) property when you click on the button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/dynamic-columns-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/kanban/dynamic-columns-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/dynamic-columns-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/kanban/dynamic-columns-cs1" %}