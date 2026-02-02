---
layout: post
title: Messages in Angular Chat UI component | Syncfusion
description:  Checkout and learn about Messages with Angular Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Messages in the Angular Chat UI Component

The Chat UI allows to add messages using the `<e-message>` selector. The message collection stores all the messages being sent and received.

## Basic Message Configuration

You can use the [text](../api/chat-ui/messageModel#text) property to add message content for the user.  Each message can be configured with options such as [id](../api/chat-ui/messageModel#id), [text](../api/chat-ui/messageModel#text), [author](../api/chat-ui/messageModel#author), [timestamp](../api/chat-ui/messageModel#timestamp) and more.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/messages/text/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/messages/text/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/messages/text/src/app.component.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/chat-ui/messages/text/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/messages/text" %}

### Setting pinned

You can use the [isPinned](../api/chat-ui/message#ispinned) property to highlight the important message in the chat. Once a message is pinned, you can access the options menu to continue the chat or unpin it.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/messages/pinned/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/messages/pinned/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/messages/pinned/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/chat-ui/messages/pinned" %}

### Setting reply to

You can use the [replyTo](../api/chat-ui/message#replyto) property to respond to the original message preserving context and creating a threaded conversation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/messages/replyTo/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/messages/replyTo/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/messages/replyTo/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/chat-ui/messages/replyTo" %}

### Setting forward

You can use the [isForwarded](../api/chat-ui/message#isforwarded) property to specify the user when the message is forwarded.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/messages/forwarded/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/messages/forwarded/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/messages/forwarded/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/chat-ui/messages/forwarded" %}

### Setting compact mode

You can use the `enableCompactMode` property to align all messages to the left in the chat for creating a streamlined layout ideal for group conversations or space-constrained interfaces. By default, the value is `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/messages/compactmode/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/messages/compactmode/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/messages/compactmode/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/chat-ui/messages/compactmode" %}

### Defining current user

You can use the [author](../api/chat-ui/messageModel#author) property to identify the current user of the chat. Each user can be configured with options such as [id](../api/chat-ui/userModel#id), [user](../api/chat-ui/userModel#user), [avatarUrl](../api/chat-ui/userModel#avatarurl) and more.

> The [user](../api/chat-ui/userModel#user) property displays the user's name, while the [id](../api/chat-ui/userModel#id) property is necessary to differentiate between multiple users.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/messages/text/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/messages/text/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/chat-ui/messages/text/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/messages/text" %}

#### Setting avatar URL

The [avatarUrl](../api/chat-ui/userModel#avatarurl) property defines the image URL for the user's avatar. If no URL is provided, the fallback initials from the user’s name will be displayed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/messages/avatarUrl/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/messages/avatarUrl/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/messages/avatarUrl/src/app.component.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/chat-ui/messages/avatarUrl/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/messages/avatarUrl" %}

#### Setting avatar background color

The [avatarBgColor](../api/chat-ui/userModel#avatarbgcolor) property sets a specific background color for user avatars using hexadecimal values. If no color is set, a default background color is applied based on the current theme.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/messages/avatarBgColor/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/messages/avatarBgColor/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/messages/avatarBgColor/src/app.component.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/chat-ui/messages/avatarBgColor/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/messages/avatarBgColor" %}

### Custom CSS Class

The [cssClass](../api/chat-ui/userModel#cssclass) property allows for custom styling of a chat user's messages and avatar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/messages/cssClass/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/messages/cssClass/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/messages/cssClass/src/app.component.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/chat-ui/messages/cssClass/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/messages/cssClass" %}

### User Presence Status

Use the [statusIconCss](../api/chat-ui/message#statusiconcss) property to indicate a user's presence status, such as `online`, `offline`, `busy`, or `away`.

The following predefined classes can be assigned to the `statusIconCss` property:

| Status    | Icon Class     |
|-----------|----------------|
| `Available`| `e-user-online`|
| `Away`    | `e-user-away`  |
| `Busy`    | `e-user-busy`  |
| `Offline` | `e-user-offline`|

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/messages/statusicon/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/messages/statusicon/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/messages/statusicon/src/app.component.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/chat-ui/messages/statusicon/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/chat-ui/messages/statusicon" %}

## Define timestamp

You can use the [timeStamp](../api/chat-ui/messageModel#timestamp) property to indicate the date and time of each message being sent. By default it is set to the current date and time when the message is sent.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/messages/timeStamp/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/messages/timeStamp/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/messages/timeStamp/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/messages/timeStamp" %}

### Timestamp Format

The [timeStampFormat](../api/chat-ui/messageModel#timestampformat) property provides control over the timestamp's display format. The default format is `dd/MM/yyyy hh:mm a`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/messages/timeStampFormat/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/messages/timeStampFormat/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/messages/timeStampFormat/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/messages/timeStampFormat" %}

## Message Status

The [status](../api/chat-ui/messageModel#status) property tracks the delivery state of a message (e.g., sent, delivered, read) to manage delivery and read receipts.

### Setting icon CSS

The [iconCss](../api/chat-ui/messageStatusModel#iconcss) property customizes the styling of status icons, which helps in visually differentiating between various message statuses.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/messages/iconCss/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/messages/iconCss/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/messages/iconCss/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/messages/iconCss" %}

### Setting text

The [text](../api/chat-ui/messageStatusModel#text) property provides a descriptive text label for the message status, giving users clear context about the message's state.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/messages/statusText/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/messages/statusText/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/messages/statusText/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/messages/statusText" %}

### Setting Tooltip

The [tooltip](../api/chat-ui/messageStatusModel#tooltip) property provides additional details about a message's status when a user hovers over the status icon.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/messages/tooltip/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/messages/tooltip/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/messages/tooltip/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/messages/tooltip" %}

## Setting auto scroll

You can use the [autoScrollToBottom](../api/chat-ui#autoscrolltobottom) property to automatically scroll the chats when a new message is received in a conversation. By default, the value is false, requires manual scrolling or the FAB button to quick access to the bottom of the view.

- By default, it scrolls to bottom for each message being sent or when the scroll is maintained at the bottom in the chat, in order to prevent the automatic scroll for different user messages you can use the `autoScrollToBottom` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/messages/autoScrollToBottom/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/messages/autoScrollToBottom/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/messages/autoScrollToBottom/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/messages/autoScrollToBottom" %}

## Setting suggestions

You can use the [suggestions](../api/chat-ui#suggestions) property, to add the suggestions in both initial and on-demand which help users to quick-reply options above the input field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/messages/suggestions/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/messages/suggestions/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/messages/suggestions/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chat-ui/messages/suggestions" %}

## Configure message options

The `messageToolbarSettings` property allows customization of the message toolbar for richer chat experience in the Chat UI. It provides options to define the toolbar `width`, configure a set of toolbar `items`, and handle `itemClick` events for enhanced interactivity. By default, the message options available are `Copy`, `Reply`, `Pin`, and `Delete`.

### Copying a message

You can copy the message item to quickly duplicate the message, by using the toolbar copy icon in the message options.

### Deleting a message

You can delete a message item to remove it from the chat conversation, by using the toolbar trash icon in the message options.

### Setting width

You can use the `width` property to set width of the message toolbar in the chat. By default, the value is `100%`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/messages/width/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/messages/width/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/messages/width/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/chat-ui/messages/width" %}

### Toolbar Items

The `items` property allows for specifying a custom set of toolbar items in the message toolbar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/messages/items/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/messages/items/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/messages/items/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/chat-ui/messages/items" %}

### Toolbar Item Click Event

The `itemClicked` event is triggered when a user clicks an item in the message toolbar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/messages/itemClicked/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/messages/itemClicked/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/messages/itemClicked/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/chat-ui/messages/itemClicked" %}

## Markdown Message Content

The Chat UI component supports `Markdown` formatting for messages, enabling rich text capabilities such as bolding, italics, links, lists, and code blocks.

### Prerequisites

To enable Markdown rendering, a third-party library that converts Markdown syntax to HTML is required.

- Include the `marked` library:
  ```bash
  
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

  ```

- Include `DOMPurify` for sanitizing the Markdown output:

  ```bash

  <script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/2.4.0/purify.min.js"></script>

  ```

### Supported Markdown Formats

The Chat UI supports standard Markdown formats available in the `marked` library:

-   **Bold**: `**text**` or `__text__`
-   *Italic*: `*text*` or `_text_`
-   [Links](url): `[Link text](url)`
-   Lists: `- Item` or `1. Item`
-   Code: `` `code` ``

For a full list of supported syntax, refer to the [marked documentation](https://marked.js.org/).

### Configuring Markdown Rendering

By integrating a library like [marked](https://github.com/markedjs/marked), you can parse Markdown content before passing it to the [text](../api/chat-ui/messageModel#text) property of a message object. This allows for richly formatted text to be displayed in the chat.

> To prevent cross-site scripting (XSS) attacks, always sanitize Markdown output using a library like `DOMPurify` before rendering it as HTML.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chat-ui/messages/markdown/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chat-ui/messages/markdown/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/chat-ui/messages/markdown/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/chat-ui/messages/markdown" %}