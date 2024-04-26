---
layout: post
title: Data label template in Angular Chart component | Syncfusion
description: Learn here all about Data label template in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data label template 
documentation: ug
domainurl: ##DomainURL##
---

# Data label template in Angular Chart component

You can bind text and interior information for a point from dataSource other than x and y value. To change color for the background in the datalabel template, you can use `${point.text}`.
To use point.text, you have to bind the property from dataSource to name in the datalabel options.

Follow the given steps to show the table tooltip,

**Step 1**:

Initialize the datalabel template div as shown in the following html page,

```
    <script id="index" type="text/x-template">
    <div id='templateWrap' style="background-color: ${point.text}; border-radius: 3px;"><span>${point.y}</span></div>
    </script>
```

**Step 2**:

To show that datalabel template, set the element id to the `template` property in datalabel.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/datalabel-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/datalabel-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/datalabel-cs1" %}
