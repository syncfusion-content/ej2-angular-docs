---
layout: post
title: Toolbar items in Angular AI AssistView component | Syncfusion
description: Checkout and learn about Toolbar items with Angular AI AssistView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar items in Angular AI AssistView component

You can render the AI AssistView toolbar items by using the `items` property in the [toolbarSettings](../api/ai-assistview#toolbarsettings), [responseToolbarSettings](../api/ai-assistview#responsetoolbarsettings), [promptToolbarSettings](../api/ai-assistview#prompttoolbarsettings) & [footerToolbarSettings](../api/ai-assistview#footertoolbarsettings) properties.

## Configure footer toolbar

By default, the footer toolbar renders the `send`, if attachment is enabled the `attachment` item will also be rendered which allows users to send the prompt text or attach files as needed.

In the following example, AI AssistView component rendered with footer toolbar items such as `send` and `attachment` icons.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/file-attachments/enable-attachment/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/file-attachments/enable-attachment/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/file-attachments/enable-attachment" %}

### Toolbar positioning

You can use the [toolbarPosition](../api/ai-assistview/footerToolbarSettingsModel#toolbarPosition) property to customize footer toolbar position. It has two modes such as `Inline`, and `Bottom`. By default, the toolbarPosition is `Inline`.

By settings toolbarPosition as `Bottom`, footer items will be rendered at the bottom with a dedicated footer area .

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/footer-position/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/footer-position/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/toolbar-items/footer-position" %}

### Adding custom items

You can use the [footerToolbarSettings](../api/ai-assistview#footertoolbarsettings) property to add custom items for the footer toolbar in the AI AssistView. The custom items will be added with the existing built-in items in the footer toolbar.

> To know more about the items, please refer to the [items](#items) section.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/footer-settings/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/footer-settings/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/toolbar-items/footer-settings" %}

### Item click

The [itemClick](../api/ai-assistview/footerToolbarSettingsModel#itemclick) event is triggered when the footer toolbar item is clicked.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/footer-itemclick/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/footer-itemclick/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/toolbar-items/footer-itemclick" %}

## Adding header toolbar items

### Items

The AI AssistView toolbar's can be rendered by defining an array of items. Items can be constructed with the following built-in command types or item template.

#### Adding iconCss

You can customize the toolbar icons by using the `iconCss` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/align/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/align/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/toolbar-items/align" %}

#### Setting item type

You can change the toolbar item type by using the `type` property. The `type` supports three types of items such as `Button`, `Separator` and `Input`. By default, the type is `Button`.

In the following example, toolbar item type is set as `Button`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/item-type/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/item-type/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/toolbar-items/item-type" %}

#### Setting text

You can use the `text` property to set the text for toolbar item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/toolbar-text/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/toolbar-text/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/toolbar-items/toolbar-text" %}

#### Show or hide toolbar item

You can use the `visible` property to specify whether to show or hide the toolbar item. By default, its value is `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/visible/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/visible/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/toolbar-items/visible" %}

#### Setting disabled

You can use the `disabled` property to disable the toolbar item. By default, its value is `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/disabled/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/disabled/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/toolbar-items/disabled" %}

#### Setting tooltip text

You can use the `tooltip` property to specify the tooltip text to be displayed on hovering the toolbar item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/tooltip/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/tooltip/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/toolbar-items/tooltip" %}

#### Setting cssClass

You can use the `cssClass` property to customize the toolbar item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/cssClass/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/cssClass/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/toolbar-items/cssClass" %}

#### Setting alignment

You can change the alignment of toolbar item by using the `align` property. It supports three types of alignments such as `Left`, `Center` and `Right`. By default, the value is `Left`.

In the following example, toolbar item type is set with `Right`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/align/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/align/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/toolbar-items/align" %}

#### Enabling tab key navigation in toolbar

You can use the `tabIndex` property of a Toolbar item to enable tab key navigation for the item. By default, the user can switch between items using the arrow keys, but the `tabIndex` property allows you to switch between items using the `Tab` and `Shift+Tab` keys as well.

To use the `tabIndex` property, set it for each Toolbar item which you want to enable tab key navigation. The `tabIndex` property should be set to a positive integer value. A value of `0` or a negative value will disable tab key navigation for the item.

For example, to enable tab key navigation for two Toolbar items you can use the following code:

```ts
import { Component, ViewChild } from '@angular/core';
import { AIAssistViewComponent, PromptRequestEventArgs, ToolbarSettingsModel } from '@syncfusion/ej2-angular-interactive-chat';

@Component({
    imports: [ FormsModule, ReactiveFormsModule, AIAssistViewModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the AI AssistView component
    template: `<div ejs-aiassistview #aiAssistViewComponent (promptRequest)="onPromptRequest($event)" [toolbarSettings]="toolbarSettings"></div>`
})

export class AppComponent {
    @ViewChild('aiAssistViewComponent')
    public aiAssistViewComponent!: AIAssistViewComponent;

    public toolbarSettings: ToolbarSettingsModel = {
        items: [
            { text: "Item 1", tabIndex: 1 },
            { text: "Item 2", tabIndex: 2 }
        ]
    };
    
    public onPromptRequest = (args: PromptRequestEventArgs) => {
        setTimeout(() => {
            let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            this.aiAssistViewComponent.addPromptResponse(defaultResponse);
        }, 1000);
    };
}

```

With the above code, the user can switch between the two Toolbar items using the Tab and Shift+Tab keys, in addition to using the arrow keys. The items will be navigated in the order specified by the `tabIndex` values.

If you set the `tabIndex` value to 0 for all Toolbar items, tab key navigation will be based on the element order rather than the `tabIndex` values. For example:

```ts
import { Component, ViewChild } from '@angular/core';
import { AIAssistViewComponent, PromptRequestEventArgs, ToolbarSettingsModel } from '@syncfusion/ej2-angular-interactive-chat';

@Component({
    imports: [ FormsModule, ReactiveFormsModule, AIAssistViewModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the AI AssistView component
    template: `<div ejs-aiassistview #aiAssistViewComponent (promptRequest)="onPromptRequest($event)" [toolbarSettings]="toolbarSettings"></div>`
})

export class AppComponent {
    @ViewChild('aiAssistViewComponent')
    public aiAssistViewComponent!: AIAssistViewComponent;

    public toolbarSettings: ToolbarSettingsModel = {
        items: [
            { text: "Item 1", tabIndex: 0 },
            { text: "Item 2", tabIndex: 0 }
        ]
    };
    
    public onPromptRequest = (args: PromptRequestEventArgs) => {
        setTimeout(() => {
            let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            this.aiAssistViewComponent.addPromptResponse(defaultResponse);
        }, 1000);
    };
}

```

In this case, the user can switch between the two Toolbar items using the Tab and Shift+Tab keys, and the items will be navigated in the order in which they appear in the DOM.

#### Setting template

You can use the `template` property to add custom toolbar item in the AI AssistView.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/template/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/template/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/toolbar-items/template" %}

### Item clicked

The `itemClicked` event is triggered when the header toolbar item is clicked.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/itemclick/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/itemclick/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/toolbar-items/itemclick" %}

## Built-in toolbar items

### Prompt

By default, the prompt toolbar renders the built-in items such as `edit` and `copy` items. These allow users to edit the prompt text or copy as needed.

In the following example, AI AssistView component rendered with built-in toolbar items such as `edit` and `copy` items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/assist-view/prompts/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/assist-view/prompts/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/assist-view/prompts" %}

#### Setting width

You can use the [width](../api/ai-assistview/promptToolbarSettingsModel#width) property to set the width of the prompt toolbar in the AI AssistView.

#### Item clicked

The [itemClicked](../api/ai-assistview/promptToolbarSettingsModel#itemclicked) event is triggered when the prompt toolbar item is clicked.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/prompt-itemclick/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/prompt-itemclick/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/toolbar-items/prompt-itemclick" %}

### Response

By default, the response toolbar renders the built-in items like `copy`, `like`, and `dislike` items to perform response copy and perform rating actions.

In the following example, AI AssistView renders with built-in toolbar items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/assist-view/prompts/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/assist-view/prompts/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/assist-view/prompts" %}

#### Setting width

You can use the [width](../api/ai-assistview/responseToolbarSettingsModel#width) property to set the width of the response toolbar in the AI AssistView.

#### Item clicked

The [itemClicked](../api/ai-assistview/responseToolbarSettingsModel#itemclicked) event is triggered when the response toolbar item is clicked.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/response-itemclick/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/response-itemclick/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/toolbar-items/response-itemclick" %}

## Adding custom toolbar items

You can also add custom toolbar items in the AI AssistView by using the [toolbarSettings](../api/ai-assistview#toolbarsettings), [responseToolbarSettings](../api/ai-assistview#responsetoolbarsettings) & [promptToolbarSettings](../api/ai-assistview#prompttoolbarsettings) properties.

### Prompt

You can use the [promptToolbarSettings](../api/ai-assistview#prompttoolbarsettings) property to add custom items for the prompt toolbar in the AI AssistView.

> To know more about the items, please refer to the `items` section.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/prompt-settings/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/prompt-settings/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/toolbar-items/prompt-settings" %}

### Response

You can use the [responseToolbarSettings](../api/ai-assistview#responsetoolbarsettings) property to add custom response toolbar in the AI AssistView.

> To know more about the items, please refer to the `items` section.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/response-settings/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/toolbar-items/response-settings/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/toolbar-items/response-settings" %}

#### Item clicked

The [itemClicked](../api/ai-assistview/promptToolbarSettingsModel#itemclicked) event is triggered when the custom toolbar item is clicked.
