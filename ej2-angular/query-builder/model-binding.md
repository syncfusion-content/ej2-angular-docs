---
layout: post
title: Model Binding in Angular Query Builder UI | Syncfusion
description: Enable two-way model binding between the Syncfusion Angular Query Builder UI field, operator, and value columns and custom components.
platform: ej2-angular
control: Model binding 
documentation: ug
domainurl: ##DomainURL##
---

# Model Binding in Angular Query Builder UI

Model binding enables two-way data binding between the Query Builder and custom components used in the field, operator, and value columns. Implement model binding by configuring the `fieldModel`, `operatorModel`, and `valueModel` properties.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/model-binding-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="template-driven.html" %}
{% include code-snippet/query-builder/model-binding-cs1/src/template-driven.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/model-binding-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/model-binding-cs1" %}