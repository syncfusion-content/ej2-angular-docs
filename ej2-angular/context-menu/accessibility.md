---
layout: post
title: Accessibility in Angular Context menu component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Context menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Context menu component

The web accessibility makes web content and web applications more accessible for people with disabilities. It especially helps in dynamic content change and development of advanced user interface controls with AJAX, HTML, JavaScript, and related technologies. ContextMenu provides built-in compliance with `WAI-ARIA` specifications. `WAI-ARIA` support is achieved through attributes the like `aria-expanded` and `aria-haspopup` applied for menu item in ContextMenu. It helps the people with disabilities by providing information about the widget for assistive technology in the screen readers. ContextMenu component contains the `menu` role and `menuItem` role.

| Properties | Functionality |
| ------------ | ----------------------- |
| menu | This role will be specified for an item that do not have sub menus. |
| menuItem | This role will be specified for an item which don’t have sub menus. |
| aria-haspopup | Indicates the availability and type of interactive popup element. |
| aria-expanded | Indicates whether the subtree can be expanded or collapsed, as well as indicates whether its current state expanded or collapsed. |

## Keyboard interaction

| Keyboard shortcuts | Actions |
| ------------ | ----------------------- |
| Esc | Closes the opened ContextMenu. |
| Enter | Selects the focused menu item. |
| Up | Navigates up or to the previous menu item. |
| Down | Navigates down or to the next menu item. |
| Left | Close the current sub menu and navigates to the parent menu. |
| Right | Navigates and opens the next sub menu. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/context-menu/aria-and-keyboard-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/context-menu/aria-and-keyboard-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/aria-and-keyboard-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/aria-and-keyboard-cs1" %}