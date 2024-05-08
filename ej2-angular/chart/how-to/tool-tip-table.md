---
layout: post
title: Tool tip table in Angular Chart component | Syncfusion
description: Learn here all about Tool tip table in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tool tip table 
documentation: ug
domainurl: ##DomainURL##
---

# Tool tip table in Angular Chart component

You can show the tooltip as table by using template property in tooltip.

Follow the given steps to show the table tooltip,

**Step 1**:

Initialize the tooltip template div as shown in the following html page,

```
   <script id="Female-Material" type="text/x-template">
    <div id='templateWrap'>
        <table style="width:100%;  border: 1px solid black;">
        <tr><th colspan="2" bgcolor="#00FFFF">Female</th></tr>
        <tr><td bgcolor="#00FFFF">${x}:</td><td bgcolor="#00FFFF">${y}</td></tr>
        </table>
    </div>
   </script>

```

**Step 2**:

To show that tooltip template, set the element id to the `template` property in tooltip.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/table-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/table-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/table-cs1" %}
