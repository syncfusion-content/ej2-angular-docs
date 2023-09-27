---
layout: post
title: Create mnemonic ui in menuitem in Angular Menu component | Syncfusion
description: Learn here all about Create mnemonic ui in menuitem in Syncfusion Angular Menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Create mnemonic ui in menuitem 
documentation: ug
domainurl: ##DomainURL##
---

# Create mnemonic ui in menuitem in Angular Menu component

A particular character in a text can be underlined in the [`beforeItemRender`](https://ej2.syncfusion.com/angular/documentation/api/menu#beforeitemrender) event by adding `<u>` tag in between the text and assign the innerHTML to the `li` element.

In the following example, the first character in `File`, `Open`, and `Save` menu items are underlined.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/getting-started-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/menu/getting-started-cs7/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/getting-started-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/menu/getting-started-cs7" %}
