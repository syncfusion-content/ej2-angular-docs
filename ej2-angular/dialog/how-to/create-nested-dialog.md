---
layout: post
title: How to create a nested Dialog in Angular Dialog | Syncfusion
description: Learn how to open a child Dialog inside a parent Angular Dialog by setting the inner dialog target to the outer dialog element for stacked popups.
platform: ej2-angular
control: Create nested dialog 
documentation: ug
domainurl: ##DomainURL##
---

# How to create a nested Dialog in Angular Dialog

A Dialog can be nested within another Dialog. The following sample contains a parent and child dialog (inner dialog).

**Step 1**: Create two div elements with id `#dialog` and `#innerDialog`.

**Step 2**: Initialize the dialogs as shown in the sample below.

**Step 3**: Set the inner dialog target as `#dialog`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dialog/getting-started-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/getting-started-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/getting-started-cs7" %}
