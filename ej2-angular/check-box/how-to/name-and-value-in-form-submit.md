---
layout: post
title: Name and value in form submit in Angular CheckBox Component | Syncfusion
description: Learn here all about name and value in form submit in Syncfusion Essential Angular CheckBox component its elements and more.
platform: ej2-angular
control: Name and value in form submit 
documentation: ug
domainurl: ##DomainURL##
---

# Name and value in form submit in Angular CheckBox Component

The [`name`](https://ej2.syncfusion.com/angular/documentation/api/check-box/#name) attribute of the CheckBox is used to group Checkboxes. When the Checkboxes are
grouped in form, the checked items [`value`](https://ej2.syncfusion.com/angular/documentation/api/check-box/#value) attribute will post to the server on form submit
which can be retrieved through the name. The [`disabled`](https://ej2.syncfusion.com/angular/documentation/api/check-box/#disabled) and unchecked CheckBox value will
not be sent to the server on form submit.

In the following code snippet, Cricket and Hockey are in the checked state, Tennis is in disabled state and Basketball is in unchecked state. Now, the value that is in checked state only be sent on form submit.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/check-box/form-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/check-box/form-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/check-box/form-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/check-box/form-cs1" %}