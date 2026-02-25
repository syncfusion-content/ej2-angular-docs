---
layout: post
title: Create nested dialog in Angular Dialog component | Syncfusion
description: Learn here all about Create nested dialog in Syncfusion Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Create nested dialog 
documentation: ug
domainurl: ##DomainURL##
---

# Create nested dialog in Angular Dialog component

A Dialog can be nested within another Dialog. The following sample contains a parent and child dialog (inner dialog).

**Step 1**: Create two div elements with id `#dialog` and `#innerDialog`.

**Step 2**: Initialize the dialogs as shown in the sample below.

**Step 3**: Set the inner dialog target as `#dialog`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/getting-started-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/getting-started-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/getting-started-cs7" %}
