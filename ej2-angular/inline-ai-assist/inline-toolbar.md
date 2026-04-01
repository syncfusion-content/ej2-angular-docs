---
layout: post
title: Inline toolbar configurations in Angular Inline AI Assist | Syncfusion
description:  Checkout and learn about inline toolbar with Angular Inline AI Assist component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar configuration in React Inline AI Assist component

The inline toolbar provides a customizable interface for users to interact with the Inline AI Assist component. You can render the inline toolbar items by using the `items` property in the [inlineToolbarSettings](../api/inline-ai-assist#inlinetoolbarsettings) property.

## Configure the toolbar and positioning

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
{% include code-snippet/inline-ai-assist/inline-toolbar/toolbar-position/src/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/inline-ai-assist/inline-toolbar/toolbar-position" %}

## Built-in toolbar items

By default, the inline toolbar renders the `send` item which allows users to send the prompt text.

## Adding custom items

You can use the [inlineToolbarSettings](../api/inline-ai-assist#inlinetoolbarsettings) property to add custom items for the inline toolbar in the Inline AI Assist. The custom items will be added with the existing built-in items in the inline toolbar.

Each toolbar item object can include the following properties:

| Property    | Type    | Default  | Description                                                        |
|-------------|---------|----------|--------------------------------------------------------------------|
| `iconCss`   | string  | ''       | Specifies the CSS class for the item's icon.                       |
| `type`      | string  | 'Button' | Supports three types of items: `Button`, `Separator`, and `Input`. |
| `text`      | string  | ''       | Specifies the text label for the toolbar item.                     |
| `template`  | string  | ''       | Specifies a custom template for the toolbar item.                  |
| `visible`   | boolean | true     | Specifies whether to show or hide the toolbar item.                |
| `id`        | string  | ''       | Specifies a unique identifier for the toolbar item.                |
| `disabled`  | boolean | false    | Specifies whether the toolbar item is disabled and unselectable.   |
| `tooltip`   | string  | ''       | Specifies the tooltip text displayed on hover.                     |
| `cssClass`  | string  | ''       | Specifies custom CSS classes for styling the toolbar item.         |
| `align`     | string  | 'Left'   | Specifies the alignment of the toolbar item (Left, Center, Right). |
| `tabIndex`  | number  | -1       | Specifies the tab order for keyboard navigation.                   | 

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
{% include code-snippet/inline-ai-assist/inline-toolbar/props/src/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/inline-ai-assist/inline-toolbar/props" %}

## Toolbar itemClick event

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
