---
layout: post
title: Custom Toolbar in Angular Rich Text Editor component | Syncfusion
description: Learn here all about Custom Toolbar in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Custom Toolbar
documentation: ug
domainurl: ##DomainURL##
---

# Custom Toolbar Items in Angular Rich Text Editor Component

The Rich Text Editor allows you to configure your own commands to its toolbar using the  [`toolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#toolbarSettings) property. The command can be plain text, icon, or HTML template. The order and the group can also be defined where the command should be included. Bind action to the command by getting its instance.

This sample shows how to add your own commands to the toolbar of the Rich Text Editor. The “Ω” command is added to insert special characters in the editor. By clicking the “Ω” command, it will show the special characters list, and then choose the character to be inserted in the editor.

The following code snippet illustrates custom tool with tooltip text which will be included in [`items`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#items) field of the toolbarSettings property.

To get start quickly with Custom tool configuration in Angular Rich Text Editor component, refer to the video below.

{% youtube "https://www.youtube.com/watch?v=zQtXvvPxAJQ" %}

The Rich Text Editor provides options to customize tool functionalities. Use the [`undo`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarStatusEventArgs/) property to enable or disable the undo function for specific tools. Additionally, the [`click`](https://helpej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarClickEventArgs/) property lets you configure and bind the onclick event of a tool to a specific method.

This sample demonstrates how to add a custom "Ω" icon to the toolbar. Clicking on this icon opens a dialog where you can insert special characters into the editor. It also shows how to enable undo and redo functionalities.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs30/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs30/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs30" %}

> When rendering any component for the custom toolbar, like a dropdown, the focus may be lost, causing it to render outside the Rich Text Editor and triggering a blur event. This can interfere with proper functionalities like cursor focus. To prevent this issue, it is recommended to assign the e-rte-elements class to the component rendered in the custom toolbar.

## Enabling and disabling toolbar items

You can use the [`enableToolbarItem`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#enabletoolbaritem) and [`disableToolbarItem`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#disabletoolbaritem) methods to control the state of toolbar items. This methods takes a single item or an array of [items](#available-toolbar-items) as parameter.

> You can add the command name `Custom` to disable the custom toolbar items on source code view and other quicktoolbar operations.