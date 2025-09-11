---
layout: post
title: Create mnemonic ui in menuitem in Angular Menu component | Syncfusion
description: Learn here all about Create mnemonic ui in menuitem in Syncfusion Angular Menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Menu
documentation: ug
domainurl: ##DomainURL##
---

# Create mnemonic ui in menuitem in Angular Menu component

A mnemonic UI allows users to activate menu items using keyboard shortcuts by highlighting a specific character in the label. This is commonly achieved by underlining the character to indicate its mnemonic role.

This can be implemented using the [`beforeItemRender`](https://ej2.syncfusion.com/angular/documentation/api/menu/#beforeitemrender) event by inserting a `<u>` tag around the target character and assigning the result to the `innerHTML` of the `li` element.

In the following example, the first character in the `File`, `Open`, and `Save` menu items is underlined.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/getting-started-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/getting-started-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/menu/getting-started-cs7" %}
