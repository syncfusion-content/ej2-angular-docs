---
layout: post
title: Icons and templates in Angular List box component | Syncfusion
description: Learn here all about Icons and templates in Syncfusion Angular List box component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Icons and templates 
documentation: ug
domainurl: ##DomainURL##
---

# Icons and templates in Angular List box component

## Icons

To place the icon on a list box, set the [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/list-box/fieldSettingsModel/#iconcss) property to `e-icons` with the required icon CSS. By default, the icon is positioned to the left side of the list.

In the following sample, icon classes are mapped with `iconCss` field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listbox/icons-and-template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/listbox/icons-and-template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listbox/icons-and-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listbox/icons-and-template-cs1" %}

## Templates

ListBox items can be customized according to the requirement using [`itemTemplate`](https://ej2.syncfusion.com/angular/documentation/api/list-box/#itemtemplate) property.

In the following sample, the items in the cart are displayed using list box template,

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listbox/template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/listbox/template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listbox/template-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/listbox/template-cs1/src/template.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listbox/template-cs1" %}