---
layout: post
title: Emoji Picker in Angular Rich Text Editor | Syncfusion
description: Learn how to use and customize the Emoji Picker in the Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Emoji Picker
documentation: ug
domainurl: ##DomainURL##
---

# Emoji Picker in Angular Rich Text Editor component

The Emoji Picker is a tool that simplifies adding emojis or emoticons to text content within the Syncfusion Angular Rich Text Editor. It appears as a popup panel displaying a variety of emojis organized into categories such as Smilies & People, Animals & Nature, and more. Users can select an emoji by clicking it or searching for it by name using the built-in search box.

## Configuring emoji picker tool in the toolbar

Add the `EmojiPicker` tool to the Rich Text Editor toolbar using the [toolbarSettings.items](https://helpej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettingsModel/#items) property.

By default, a predefined set of emojis is configured. However, these icons can be customized according to specific needs by using the  [emojiPickerSettings](https://helpej2.syncfusion.com/angular/documentation/api/rich-text-editor/#emojipickersettings) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/emoji-picker-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/emoji-picker-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/emoji-picker-cs2" %}

Additionally, you have the option to customize the icons of toolbar items using the [iconCss](https://helpej2.syncfusion.com/angular/documentation/api/rich-text-editor/emojiIconsSet/#iconcss) and [code](https://helpej2.syncfusion.com/angular/documentation/api/rich-text-editor/emojiIconsSet/#code) properties. The `iconCss` property applies a custom CSS class to style the category icon, while the `code` property enables you to specify the Unicode character code for the icon.

When both `iconCSS` and `code` properties are provided, the `iconCSS` property takes precedence in determining the appearance of the toolbar item icon.

Additionally, you have the option to enhance the user experience by implementing a filtering feature for efficiently managing a large dataset of emojis. By setting the [showSearchBox](https://helpej2.syncfusion.com/angular/documentation/api/rich-text-editor/emojiSettingsModel/#showsearchbox) property to `true` (which is the default value), users will be able to utilize a search box to filter the displayed emojis according to their preferences.

The following example demonstrates how to add the Emoji Picker tool to the Rich Text Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/emoji-picker-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/emoji-picker-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/emoji-picker-cs1" %}

## Keyboard interaction

The Emoji Picker supports efficient keyboard navigation and selection, enhancing accessibility and user experience. Users can open the picker, navigate emojis, and select them using keyboard shortcuts.

### Opening the emoji picker with shortcut keys

Quickly access the emoji picker by pressing the colon (`:`) key while typing a word prefix in an editor, allowing instant emoji selection and display. Moreover, continue typing in the editor after the colon (:) to filter and refine your search for the desired emojis.

![Angular Rich Text Editor Emoji Picker](../images/angular-richtexteditor-emoji-picker-web.png)

## Navigating and selecting emojis using the keyboard

The emoji picker popup offers keyboard navigation options, allowing you to move the emoji focus from one emoji to another. The following keys are used for navigation:

`Arrow keys`: Use the arrow keys (up, down, left, right) to move the emoji focus in the corresponding direction.

`Enter`: Press Enter key to select the currently focused emoji.

`Escape`: Press Escape to close the emoji picker popup without selecting an emoji.