---
layout: post
title: Header in Angular Chat UI component | Syncfusion
description: Checkout and learn about Header with Angular Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Header in Angular Chat UI component

## Show or hide header

You can use [showHeader](../api/chat-ui#showheader) property to enable or disable the chat header. It contains the following options [headerText](../api/chat-ui#headertext) and [headerIconCss](../api/chat-ui#headericoncss).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/header/showHeader/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/header/showHeader/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/header/showHeader" %}

### Setting header text

You can use the [headerText](../api/chat-ui#headertext) property to display the text that appears in the header, which indicates the current username or the group name providing the context for the conversation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/header/headerText/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/header/headerText/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/header/headerText" %}

### Setting header icon CSS

You can use the [headerIconCss](../api/chat-ui#headericoncss) property to customize the styling of the header icon.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/header/headerIcon/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/header/headerIcon/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/header/headerIcon" %}

## Toolbar

You can render the Chat UI toolbar items by using the `items` property in the [headerToolbar](../api/chat-ui#headertoolbar).

### Setting Items

Items can be constructed with the following built-in command types or item template.

#### Adding icon CSS

You can customize the header toolbar icons by using the `iconCss` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/header/iconCss/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/header/iconCss/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/header/iconCss" %}

#### Setting item type

You can change the header toolbar item type by using the `type` property. The `type` supports three types of items such as `Button`, `Separator` and `Input`. By default, the type is `Button`.

In the following example, header toolbar item type is set as `Button`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/header/type/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/header/type/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/header/type" %}

#### Setting text

You can use the `text` property to set the text for the header toolbar item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/header/text/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/header/text/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/header/text" %}

#### Show or hide toolbar item

You can use the `visible` property to specify whether to show or hide the header toolbar item. By default, its value is `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/header/visible/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/header/visible/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/header/visible" %}

#### Setting disabled

You can use the `disabled` property to disable the header toolbar item. By default, its value is `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/header/disabled/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/header/disabled/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/header/disabled" %}

#### Setting tooltip text

You can use the `tooltip` property to specify the tooltip text to be displayed on hovering the header toolbar item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/header/tooltip/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/header/tooltip/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/header/tooltip" %}

#### Setting Css Class

You can use the `cssClass` property to customize the header toolbar item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/header/cssClass/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/header/cssClass/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/chat-ui/header/cssClass/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/header/cssClass" %}

#### Setting alignment

You can change the alignment of toolbar item by using the `align` property. It supports three types of alignments such as `Left`, `Center` and `Right`. By default, the value is `Left`.

In the following example, toolbar item type is set with `Right`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/header/align/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/header/align/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/header/align" %}

#### Enabling tab key navigation in toolbar

You can use the `tabIndex` property of a Toolbar item to enable tab key navigation for the item. By default, the user can switch between items using the arrow keys, but the `tabIndex` property allows you to switch between items using the `Tab` and `Shift+Tab` keys as well.

To use the `tabIndex` property, set it for each Toolbar item which you want to enable tab key navigation. The `tabIndex` property should be set to a positive integer value. A value of `0` or a negative value will disable tab key navigation for the item.

For example, to enable tab key navigation for two Toolbar items you can use the following code:

```ts
import { Component, ViewChild } from '@angular/core';
import { ChatUIComponent, ToolbarSettingsModel } from '@syncfusion/ej2-angular-interactive-chat';

@Component({
    imports: [ FormsModule, ReactiveFormsModule, ChatUIModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Chat UI component
    template: `<div ejs-chatui #chatUI [headerToolbar]="headerToolbar"></div>`
})

export class AppComponent {
    @ViewChild('chatUIComponent')
    public chatUIComponent!: ChatUIComponent;

    public headerToolbar: ToolbarSettingsModel = {
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
import { ChatUIComponent, ToolbarSettingsModel } from '@syncfusion/ej2-angular-interactive-chat';

@Component({
    imports: [ FormsModule, ReactiveFormsModule, ChatUIModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Chat UI component
    template: `<div ejs-chatui #chatUI [headerToolbar]="headerToolbar"></div>`
})

export class AppComponent {
    @ViewChild('chatUIComponent')
    public chatUIComponent!: ChatUIComponent;

    public headerToolbar: ToolbarSettingsModel = {
        items: [
            { text: "Item 1", tabIndex: 0 },
            { text: "Item 2", tabIndex: 0 }
        ]
    };

}

```

In this case, the user can switch between the two Toolbar items using the Tab and Shift+Tab keys, and the items will be navigated in the order in which they appear in the DOM.

#### Setting template

You can use the `template` property to add custom toolbar item in the Chat UI component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/header/template/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/header/template/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/chat-ui/header/template/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/header/template" %}

### Item clicked

You can define `itemClicked` event in the `headerToolbar` property which will be triggered when the header toolbar item is clicked.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/header/itemClicked/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/header/itemClicked/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/header/itemClicked" %}