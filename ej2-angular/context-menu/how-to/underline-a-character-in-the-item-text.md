---
layout: post
title: Underline Character in Angular Context Menu Item | Syncfusion
description: Learn here all about Underline a character in the item text in Syncfusion Angular Context menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Context Menu
documentation: ug
domainurl: ##DomainURL##
---

# Underline Character in Angular Context Menu Item Text

To underline a specific character in a menu item's text, you can utilize the [`beforeItemRender`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/#beforeitemrender) event. This technique is commonly used to create  Shortcut keys by visually highlighting specific characters within menu items.

The underlining can be achieved by adding `<u>` tags around the target character and setting the modified text as innerHTML to the list item element during rendering.

When implementing this feature, the `beforeItemRender` event provides access to the menu item element and its associated data, enabling you to modify the display text before the item is rendered in the DOM. The event occurs for each menu item during the rendering process, giving you the opportunity to customize the appearance based on your specific requirements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/context-menu/separators-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/separators-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/separators-cs2" %}