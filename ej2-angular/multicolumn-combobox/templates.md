---
layout: post
title: Templates in Angular MultiColumn ComboBox component | Syncfusion
description: Learn here all about Templates in Syncfusion Angular MultiColumn ComboBox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: MultiColumn ComboBox 
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Angular MultiColumn ComboBox component

The MultiColumn ComboBox provides several template options to customize each items, groups, header and footer elements.

## Item template

You can use the [itemTemplate](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox#itemtemplate) property to customize each list item within the MultiColumn ComboBox.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multicolumn-combobox/item-template/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/item-template/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/item-template" %}

## Header template

You can add a custom element as a header element by using the [headerTemplate](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox/column/#headertemplate) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multicolumn-combobox/header-template/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/header-template/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template.html" %}
{% include code-snippet/multicolumn-combobox/header-template/src/template.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/header-template" %}

## Group template

You can use the [groupTemplate](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox#grouptemplate) property to customize the group header in the popup list.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multicolumn-combobox/group-template/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/group-template/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/group-template" %}

## Footer template

You can add a custom element as a footer element by using the [footerTemplate](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox#footertemplate) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multicolumn-combobox/footer-template/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/footer-template/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/footer-template" %}

## No records template

You can customize the popup list for when no data is found or no matches are found by using the [noRecordsTemplate](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox/multiColumnComboBoxModel/#norecordstemplate) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multicolumn-combobox/norecord-template/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/norecord-template/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/norecord-template" %}

## Action failure template

There is also an option to custom design the popup list content when the data fetch request fails at the remote server. This can be achieved using the [actionFailureTemplate](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox/multiColumnComboBoxModel/#actionfailuretemplate) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multicolumn-combobox/actionfailure-template/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/actionfailure-template/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/actionfailure-template" %}