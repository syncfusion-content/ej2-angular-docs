---
layout: post
title: Open Dialog on Context Menu click in Angular Context Menu | Syncfusion
description: Open a Dialog when an Angular Context Menu item is selected by handling the select event to launch modal workflows from the menu.
platform: ej2-angular
control: Context Menu
documentation: ug
domainurl: ##DomainURL##
---

# Open Dialog on Context Menu click in Angular Context Menu

This section explains how to open a dialog when a ContextMenu item is clicked. This integration is commonly used for modal workflows, form interactions, and confirmation dialogs. The functionality is achieved by handling the dialog opening logic in the `select` event of the ContextMenu component.

When a ContextMenu item is selected, the `select` event provides access to the clicked item's details, allowing you to conditionally open dialogs based on the selected menu option. This pattern is particularly useful for actions that require additional user input or confirmation before execution.

In the following sample, a Dialog will open when clicking the `Save As...` menu item. The `(select)` event is bound on the `<ejs-contextmenu>` element to the `onSelect` method:

```html
<ejs-contextmenu id="contextmenu" [items]="menuItems" (select)="onSelect($event)"></ejs-contextmenu>
```

The `select` event provides the following arguments through `MenuEventArgs`:
- `element`: The selected menu item element.
- `item`: The selected `MenuItemModel`.
- `event`: The originating DOM event.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/context-menu/dialog-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/dialog-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/dialog-cs1" %}