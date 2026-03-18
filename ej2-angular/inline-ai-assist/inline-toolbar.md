---
layout: post
title: Inline toolbar configurations in Angular Inline AI Assist | Syncfusion
description:  Checkout and learn about inline toolbar with Angular Inline AI Assist component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Inline toolbar configuration in Angular Inline AI Assist component

You can render the inline toolbar items by using the `items` property in the [inlineToolbarSettings](../api/inline-ai-assist#inlinetoolbarsettings) property.

## Built-in toolbar items

By default, the inline toolbar renders the `send` item which allows users to send the prompt text.

## Adding custom items

You can use the [inlineToolbarSettings](../api/inline-ai-assist#inlinetoolbarsettings) property to add custom items for the inline toolbar in the Inline AI Assist. The custom items will be added with the existing built-in items in the inline toolbar.

## Items

The Inline AI Assist toolbar can be rendered by defining an array of items. Items can be constructed with the following built-in command types or item template.

### Adding iconCss

You can customize the toolbar icons by using the `iconCss` property.

### Setting item type

You can change the toolbar item type by using the `type` property. The `type` supports three types of items such as `Button`, `Separator` and `Input`. By default, the type is `Button`.

In the following example, toolbar item type is set as `Button`.

### Setting text

You can use the `text` property to set the text for toolbar item.

### Show or hide toolbar item

You can use the `visible` property to specify whether to show or hide the toolbar item. By default, its value is `true`.

### Setting disabled

You can use the `disabled` property to disable the toolbar item. By default, its value is `false`.

### Setting tooltip text

You can use the `tooltip` property to specify the tooltip text to be displayed on hovering the toolbar item.

### Setting cssClass

You can use the `cssClass` property to customize the toolbar item.

### Setting alignment

You can change the alignment of toolbar item by using the `align` property. It supports three types of alignments such as `Left`, `Center` and `Right`. By default, the value is `Left`.

Below sample demonstrates the addition of custom toolbar items with the usage of above mentioned properties in Inline Assist component.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/props/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/props/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/props/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/props/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/inline-ai-assist/inline-toolbar/props" %}

### Enabling tab key navigation in toolbar

You can use the `tabIndex` property of a Toolbar item to enable tab key navigation for the item. By default, the user can switch between items using the arrow keys, but the `tabIndex` property allows you to switch between items using the `Tab` and `Shift+Tab` keys as well.

To use the `tabIndex` property, set it for each Toolbar item which you want to enable tab key navigation. The `tabIndex` property should be set to a positive integer value. A value of `0` or a negative value will disable tab key navigation for the item.

For example, to enable tab key navigation for two Toolbar items you can use the following code:

```ts
import { Component, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineAIAssistComponent, InlineToolbarSettingsModel, InlineAIAssistModule } from '@syncfusion/ej2-angular-interactive-chat';

@Component({
    imports: [ FormsModule, ReactiveFormsModule, InlineAIAssistModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Inline AI Assist component
    template: `<ejs-inlineaiassist #inlineAssistComponent id="inlineAssistComponent" [inlineToolbarSettings]="inlineToolbarSettings"></ejs-inlineaiassist>`
})

export class AppComponent {
    @ViewChild('inlineAssistComponent')
    public inlineAssistComponent!: InlineAIAssistComponent;

    public inlineToolbarSettings: InlineToolbarSettingsModel = {
        items: [
            { text: "Item 1", tabIndex: 1 },
            { text: "Item 2", tabIndex: 2 }
        ]
    };

}

```

With the above code, the user can switch between the two Toolbar items using the Tab and Shift+Tab keys, in addition to using the arrow keys. The items will be navigated in the order specified by the `tabIndex` values.

If you set the `tabIndex` value to 0 for all Toolbar items, tab key navigation will be based on the element order rather than the `tabIndex` values. For example:

```ts
import { Component, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineAIAssistComponent, InlineToolbarSettingsModel, InlineAIAssistModule } from '@syncfusion/ej2-angular-interactive-chat';

@Component({
    imports: [ FormsModule, ReactiveFormsModule, InlineAIAssistModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Inline AI Assist component
    template: `<ejs-inlineaiassist #inlineAssistComponent id="inlineAssistComponent" [inlineToolbarSettings]="inlineToolbarSettings"></ejs-inlineaiassist>`
})

export class AppComponent {
    @ViewChild('inlineAssistComponent')
    public inlineAssistComponent!: InlineAIAssistComponent;

    public inlineToolbarSettings: InlineToolbarSettingsModel = {
        items: [
            { text: "Item 1", tabIndex: 0 },
            { text: "Item 2", tabIndex: 0 }
        ]
    };

}

```

In this case, the user can switch between the two Toolbar items using the Tab and Shift+Tab keys, and the items will be navigated in the order in which they appear in the DOM.

### Setting template

You can use the `template` property to add custom toolbar item in the Inline AI Assist.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/template/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/template/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/template/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/template/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/inline-ai-assist/inline-toolbar/template" %}

## Toolbar positioning

You can use the [toolbarPosition](../api/inline-ai-assist/inlineToolbarSettingsModel#toolbarPosition) property to customize footer toolbar position. It has two modes such as `Inline`, and `Bottom`. By default, the toolbarPosition is `Inline`.

By settings toolbarPosition as `Bottom`, footer items will be rendered at the bottom with a dedicated footer area.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/toolbar-position/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/toolbar-position/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/toolbar-position/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/toolbar-position/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/inline-ai-assist/inline-toolbar/toolbar-position" %}

## Item click

The [itemClick](../api/inline-ai-assist/inlineToolbarSettingsModel#itemclick) event is triggered when the inline toolbar item is clicked.

```ts
import { Component, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineAIAssistComponent, InlineToolbarSettingsModel, InlineAIAssistModule, ToolbarItemClickEventArgs } from '@syncfusion/ej2-angular-interactive-chat';

@Component({
    imports: [ FormsModule, ReactiveFormsModule, InlineAIAssistModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Inline AI Assist component
    template: `<ejs-inlineaiassist #inlineAssistComponent id="inlineAssistComponent" [inlineToolbarSettings]="inlineToolbarSettings"></ejs-inlineaiassist>`
})

export class AppComponent {
    @ViewChild('inlineAssistComponent')
    public inlineAssistComponent!: InlineAIAssistComponent;

    public inlineToolbarSettings: InlineToolbarSettingsModel = {
        itemClick: (args: ToolbarItemClickEventArgs) => {
            // Your actions here
        }
    };

}

```
