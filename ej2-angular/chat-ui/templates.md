---
layout: post
title: Templates in Angular Chat UI component | Syncfusion
description:  Checkout and learn about Templates with Angular Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Angular Chat UI component

The Chat UI component provides several templates for customizing the appearance of the empty conversation area, messages, typing indicator, and more. These templates provide flexibility for users to create a unique, personalized chat experience.

## Empty chat template

You can use the `emptyChatTemplate` property to customize the chat interface when no messages are displayed. Personalized content, such as welcome messages or images, can be added to create an engaging and inviting experience for users starting a conversation.

## Message template

You can use the `messageTemplate` property to customize the appearance and styling of each chat message. Modify text styling, layout, and other design elements to ensure a personalized chat experience. The template context includes `message` and `index` items.

## Time Break template

You can use the `timeBreakTemplate` property to customize the template, such as showing "Today," "Yesterday," or specific dates. This enhances conversation organization by clearly separating messages based on time, improving readability for the user. The template context includes `messageDate`.

## Typing users template

You can use the `typingUsersTemplate` property to customize the display of users currently typing in the chat. It allows for styling and positioning of the typing indicator, enhancing the user experience. The template context includes `Users`.

## Suggestion template

You can use the `suggestionTemplate` property to customize the quick reply suggestions that appear above the input field. Templates here can help create visually appealing and functional suggestion layouts. The template context includes `suggestion` and `index` items.

## Footer template

You can use the `footerTemplate` property to customize the default footer area and manage message send actions with a personalized design. This flexibility allows users to create unique footers that meet their specific needs.
