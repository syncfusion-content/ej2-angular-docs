---
layout: post
title: Underline character in item text in Angular Context Menu | Syncfusion
description: Underline a character in Angular Context Menu item text by injecting u tags via the beforeItemRender event for visible shortcut keys.
platform: ej2-angular
control: Context Menu
documentation: ug
domainurl: ##DomainURL##
---

# Underline a character in the item text in Angular Context Menu

To underline a specific character in a menu item's text, you can utilize the [`beforeItemRender`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#beforeitemrender) event. This technique is commonly used to create shortcut keys by visually highlighting specific characters within menu items.

The underlining can be achieved by adding `<u>` tags around the target character and setting the modified text as `innerHTML` to the list item element during rendering, the same as you would for any accessibility shortcut annotation.

> **Note:** Because `innerHTML` is used, ensure the menu item `text` is fully controlled by your own data source. If user input can flow into `text`, sanitize it before allowing it to be rendered as HTML to avoid XSS.

When implementing this feature, the `beforeItemRender` event provides access to the menu item element and its associated data, enabling you to modify the display text before the item is rendered in the DOM. The event occurs for each menu item during the rendering process, giving you the opportunity to customize the appearance based on your specific requirements.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/context-menu/separators-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/separators-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/separators-cs2" %}