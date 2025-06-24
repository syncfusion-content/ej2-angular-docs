---
layout: post
title: Messages in Angular Chat UI component | Syncfusion
description:  Checkout and learn about Messages with Angular Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Messages in Angular Chat UI component

The Chat UI allows to add messages using the `<e-message>` selector. The message collection stores all the messages being sent and received.

## Configure messages

You can use the [text](../api/chat-ui/messageModel/#text) property to add message content for the user.  Each message can be configured with options such as [id](../api/chat-ui/messageModel/#id), [text](../api/chat-ui/messageModel/#text), [author](../api/chat-ui/messageModel/#author), [timestamp](../api/chat-ui/messageModel/#timestamp) and more.
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

### Defining current user

You can use the [author](../api/chat-ui/messageModel/#author) property to identify the current user of the chat. Each user can be configured with options such as [id](../api/chat-ui/userModel/#id), [user](../api/chat-ui/userModel/#user), [avatarUrl](../api/chat-ui/userModel/#avatarurl) and more.

> You can use the [user](../api/chat-ui/userModel/#user) property to display the user name and [id](../api/chat-ui/userModel/#id) property is necessary to differentiate between the multiple users.

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

You can use the [avatarUrl](../api/chat-ui/userModel/#avatarurl) property to define the image URL’s for the user avatar. If no URL is provided, fallback initials of the first and last name from the user’s name will be used.

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

You can use the [avatarBgColor](../api/chat-ui/userModel/#avatarbgcolor) property to set a specific background color for user avatars using hexadecimal values. If no color is set, a custom background color is set based on specified theme.

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

#### Setting CSS class

You can use the [cssClass](../api/chat-ui/userModel/#cssclass) property to customize the appearance of the chat user.

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

#### Setting status icon css

You can use the [statusIconCss](../api/chat-ui/message/#statusiconcss) property to identify the user's presence, including `online`, `offline`, `busy`, and `away` status in the Chat UI.

The following are the predefined status styles that can be defined using the `statusIconCss` property.

| Status | Icon class |
| ------------ | -------------- |
| `Available` | `e-user-online` |
| `Away` | `e-user-away` |
| `Busy` | `e-user-busy` |
| `Offline` | `e-user-offline` |

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
        
{% previewsample "page.domainurl/code-snippet/chat-ui/messages/statusicon" %}

## Define timestamp

You can use the [timeStamp](../api/chat-ui/messageModel/#timestamp) property to indicate the date and time of each message being sent. By default it is set to the current date and time when the message is sent.

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

### Setting timestamp format

You can use the [timeStampFormat](../api/chat-ui/messageModel/#timestampformat) to display specific time format for the timestamp. The default format is `dd/MM/yyyy hh:mm a`, but this can be customized to meet different localization and display needs.

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

## Define message status

You can use the [status](../api/chat-ui/messageModel/#status) property to update the status for the message(e.g., sent, received, read). It helps in managing message delivery and read receipts within the chat interface.

### Setting icon CSS

You can use the [iconCss](../api/chat-ui/messageStatusModel/#iconcss) property to update the styling of status icons associated with messages, aiding visual differentiation between statuses.

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

You can use the [text](../api/chat-ui/messageStatusModel/#text) property to provide information about the messages through descriptive text, providing users with the context of the message.

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

### Setting tooltip

You can use the [tooltip](../api/chat-ui/messageStatusModel/#tooltip) property to provide information about the messages by tooltips while hovering the status icon, providing users with additional data upon hovering.

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

You can use the [autoScrollToBottom](../api/chat-ui/#autoscrolltobottom) property to automatically scroll the chats when a new message is received in a conversation. By default, the value is false, requires manual scrolling or the FAB button to quick access to the bottom of the view.

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

You can use the [suggestions](../api/chat-ui/#suggestions) property, to add the suggestions in both initial and on-demand which help users to quick-reply options above the input field.

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

### Setting pinned

You can use the [isPinned](../api/chat-ui/message/#ispinned) property to highlight the important message in the chat. Once a message is pinned, you can access the options menu to continue the chat or unpin it.

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
        
{% previewsample "page.domainurl/code-snippet/chat-ui/messages/pinned" %}

### Setting reply to

You can use the [replyTo](../api/chat-ui/message/#replyto) property to respond to the original message preserving context and creating a threaded conversation.

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
        
{% previewsample "page.domainurl/code-snippet/chat-ui/messages/replyTo" %}

### Setting forward

You can use the [isForwarded](../api/chat-ui/message/#isforwarded) property to specify the user when the message is forwarded.

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
        
{% previewsample "page.domainurl/code-snippet/chat-ui/messages/forwarded" %}

## Setting compact mode

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
        
{% previewsample "page.domainurl/code-snippet/chat-ui/messages/compactmode" %}

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
        
{% previewsample "page.domainurl/code-snippet/chat-ui/messages/width" %}

### Setting items

You can use the `items` property to specify the toolbar item in the message toolbar of the chat.

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
        
{% previewsample "page.domainurl/code-snippet/chat-ui/messages/items" %}

### Setting itemClick

You can use the `itemClicked` event when the toolbar item is clicked in the message toolbar of the chat.

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
        
{% previewsample "page.domainurl/code-snippet/chat-ui/messages/itemClicked" %}
