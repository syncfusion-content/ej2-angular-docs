---
layout: post
title: Template in Angular Query builder component | Syncfusion
description: Learn here all about Template in Syncfusion Angular Query builder component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Template 
documentation: ug
domainurl: ##DomainURL##
---

# Template in Angular Query builder component

Templates allows users to define customized header and own user interface for columns.

## Header Template

Header Template allows to define your own user interface for Header, which includes creating or deleting rules and groups and to customize the AND/OR condition and NOT condition options. To implement header template you can create the user interface using `ngTemplate` and  assign the values when requestType is header-template-create in `actionBegin` event.

The `#headerTemplate` template variable identifies the NgTemplate content as the header.

In the following sample dropdown, splitbutton and button are used as the custom components in the header.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/header-template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/query-builder/header-template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/header-template-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template-driven.html" %}
{% include code-snippet/query-builder/header-template-cs1/src/template-driven.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/header-template-cs1" %}

## Column Template

Template allows you to define your own input widgets for columns. To implement [`template`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/columnsModel/#template), you can define the following functions

* `create`: Creates the custom component.
* `write`: Wire events for the custom component.
* `Destroy`:  Destroy the custom component.

In the following sample, dropdown is used as the custom component in the PaymentMode column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/filtering-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/query-builder/filtering-cs11/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/filtering-cs11" %}

### Using Template

The value template for a particular column can be specified using the content of the NgTemplate. The `#template` template variable identifies the NgTemplate content as the corresponding column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/query-builder/template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/template-cs1" %}

## Rule Template

Rule Template allows to define your own user interface for columns. To implement [`ruleTemplate`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/columnsModel/#ruleTemplate) you can create the user interface using `ngTemplate` and assign the values through `actionBegin` event.

The `#ruleTemplate` template variable identifies the NgTemplate content as the corresponding column.

In the following sample, dropdown and slider are used as the custom component and applied `greaterthanorequal` operator to `Age` column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/rule-template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/query-builder/rule-template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/rule-template-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="template-driven.html" %}
{% include code-snippet/query-builder/rule-template-cs1/src/template-driven.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/rule-template-cs1" %}
