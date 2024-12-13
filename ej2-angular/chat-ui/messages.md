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

You can use the `text` property to add message content for the user.  Each message can be configured with options such as id, text, author, timestamp, and more.

### Defining current user

You can use the `author` property to identify the current user of the chat. Each user can be configured with options such as id, user, avatarUrl, and more.

> You can use the `user` property to display the user name and `id` property is necessary to differentiate between the multiple users.

#### Setting avatar URL

You can use the `avatarUrl` property to define the image URL’s for the user avatar. If no URL is provided, fallback initials of the first and last name from the user’s name will be used.

#### Setting avatar background color

You can use the `avatarBgColor` property to set a specific background color for user avatars using hexadecimal values. If no color is set, a custom background color is set based on specified theme.

#### Setting CSS class

You can use the cssClass property to customize the appearance of the chat user.

## Define timestamp

You can use the `timeStamp` property to indicate the date and time of each message being sent. By default it is set to the current date and time when the message is sent.

### Setting timestamp format

You can use the `timeStampFormat` to display specific time format for the timestamp. The default format is `dd/MM/yyyy hh:mm a`, but this can be customized to meet different localization and display needs.

## Define message status

You can use the `status` property to update the status for the message(e.g., sent, received, read). It helps in managing message delivery and read receipts within the chat interface.

### Setting icon CSS

You can use the `iconCss` property to update the styling of status icons associated with messages, aiding visual differentiation between statuses.

### Setting text

You can use the `text` property to provide information about the messages through descriptive text, providing users with the context of the message.

### Setting tooltip

You can use the `tooltip` property to provide information about the messages by tooltips while hovering the status icon, providing users with additional data upon hovering.

## Setting auto scroll

You can use the `autoScrollToBottom` property to automatically scroll the chats when a new message is received in a conversation. By default, the value is false, requires manual scrolling or the FAB button to quick access to the bottom of the view.

- By default, it scrolls to bottom for each message being sent or when the scroll is maintained at the bottom in the chat, in order to prevent the automatic scroll for different user messages you can use the `autoScrollToBottom` property.

## Setting suggestions

You can use the `suggestions` property, to add the suggestions in both initial and on-demand which help users to quick-reply options above the input field.
