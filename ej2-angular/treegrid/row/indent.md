---
layout: post
title: Indent in Angular Treegrid component | Syncfusion
description: Learn here all about Indent in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Indent 
documentation: ug
domainurl: ##DomainURL##
---

# Indent in Angular Treegrid component

The Indent and Outdent feature will help to change the hierarchy level of rows in tree grid. The indent action moves the selected row as the last child of its previous row, whereas the outdent action moves the selected row as a sibling to its parent row.

To use the indent and outdent feature, inject the `RowDD` module in the Tree Grid. The tree grid toolbar has the built-in items to execute indent and outdent actions. Define this by using the toolbar property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/indent-outdent-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/indent-outdent-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/indent-outdent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/indent-outdent-cs1" %}

## Indent/Outdent a row programmatically

You can change the hierarchy level of record programmatically using [`indent`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#indent) and [`outdent`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#outdent) methods by passing the record that needs to be indent or outdent.
To get the records you can use [`getCurrentViewRecords`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcurrentviewrecords) method of the tree grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/programmatic-indent-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/programmatic-indent-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/programmatic-indent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/programmatic-indent-cs1" %}