---
layout: post
title: Tooltip template in Angular Heatmap chart component | Syncfusion
description: Learn here all about Tooltip template in Syncfusion Angular Heatmap chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tooltip template 
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip template in Angular Heatmap chart component

You can show a tooltip as a table using the `template` property in `tooltipSettings`.

The following steps describe how to show the table tooltip.

**Step 1**: Initialize the tooltip template div as shown in the following html page.

```html
<script id="tooltipTemplate" type="text/x-template">
    <div id='templateWrap'>
        <table style="width:100%;  border: 1px solid black;">
        <tr><td bgcolor="#00FFFF">${xValue}:</td><td bgcolor="#00FFFF">${yValue}</td><td bgcolor="#00FFFF">${value}</td></tr>
        </table>
    </div>
</script>

```

**Step 2**: Set the element id to the `template` property in `tooltipSettings` to show the tooltip template.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/how-to/tooltip-template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/how-to/tooltip-template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/how-to/tooltip-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/how-to/tooltip-template-cs1" %}
