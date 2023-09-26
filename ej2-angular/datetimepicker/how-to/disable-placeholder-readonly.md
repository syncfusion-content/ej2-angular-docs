---
layout: post
title: Disable placeholder readonly in Angular Datetimepicker component | Syncfusion
description: Learn here all about Disable placeholder readonly in Syncfusion Angular Datetimepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Disable placeholder readonly 
documentation: ug
domainurl: ##DomainURL##
---

# Disable placeholder readonly in Angular Datetimepicker component

Property | Purpose
-----|-----
[`enabled`](https://ej2.syncfusion.com/angular/documentation/api/datetimepicker#enabled) | The component can be restricted on a page, by setting `enabled` value as **false** which will disable the component completely from all user interactions including in form post action.
[`placeholder`](https://ej2.syncfusion.com/angular/documentation/api/datetimepicker#placeholder) | Using `placeholder` you can display a short hint about the expected value in the input element.
[`readonly`](https://ej2.syncfusion.com/angular/documentation/api/datetimepicker#readonly)       | Editing the value in the component can be prevented by setting `readonly` as **true**, but value can be included in the form post action.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datetimepicker/accessibility-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/datetimepicker/accessibility-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datetimepicker/accessibility-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datetimepicker/accessibility-cs6" %}
