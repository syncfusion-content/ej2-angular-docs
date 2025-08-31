---
layout: post
title: Tabs and Groups in Angular Ribbon component | Syncfusion
description:  Learn here all about Tabs and Groups in Syncfusion Angular Ribbon component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ribbon
documentation: ug
domainurl: ##DomainURL##
---

# Tabs, Groups, and Items

The Ribbon component's structure is a hierarchy of tabs, groups, and items that provides organized access to commands. Each tab contains one or more groups, and each group holds collections of related items.

## Adding Tabs

You can use the [tabs](https://ej2.syncfusion.com/angular/documentation/api/ribbon/#tabs) property to add tabs to the Ribbon component and define the content of the tab header by using the [header](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonTabModel/#header) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Tabs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Tabs/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Tabs/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Tabs" %}

## Adding Groups

You can use the [groups](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonTabModel/#groups) property to add groups for each tab in the Ribbon and define the name of the group header by using the [header](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGroupModel/#header) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Groups/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Groups/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Groups/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Groups" %}

## Adding Items

You can add collections of items to each group by using the [collections](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGroupModel/#collections) and [items](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonCollectionModel/#items) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Items/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Items/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Items/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Items" %}

> For more information on configuring built-in items and creating custom items, refer to the [Ribbon Items](./items) documentation.