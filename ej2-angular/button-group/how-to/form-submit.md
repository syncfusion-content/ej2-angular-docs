---
layout: post
title: Form submit in Angular Button group component | Syncfusion
description: Learn here all about Form submit in Syncfusion Angular Button group component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Form submit 
documentation: ug
domainurl: ##DomainURL##
---

# Form submit in Angular Button group component

The name attribute of the input element  is used to group radio/checkbox type ButtonGroup. When the radio/checkbox type are grouped in form, the checked items value attribute will be posted to server on form submit that can be retrieved through the name. The disabled radio/checkbox type value will not be sent to the server on form submit.

In the following code snippet, the radio type ButtonGroup is explained with male value as checked.
Now, the value that is in checked state will be sent on form submit.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/button-group/default-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/button-group/default-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/button-group/default-cs7" %}