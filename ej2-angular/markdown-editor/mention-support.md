---
layout: post
title: Mention Support in Angular Markdown Editor component | Syncfusion
description: Learn how to enable mention support in the Syncfusion Angular Markdown Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Mention Support in Markdown Editor
documentation: ug
domainurl: ##DomainURL##
---

# Mention Support in Angular Markdown Editor Component

By integrating the [Mention](https://ej2.syncfusion.com/angular/documentation/mention/getting-started/) component with the Markdown Editor, users can effortlessly mention or tag other users or objects from a suggested list. This eliminates the need to manually type out names or identifying information, improving both efficiency and accuracy.

## Enabling mention in Markdown Editor

To enable the Mention functionality within the Markdown Editor, set the [target](https://ej2.syncfusion.com/angular/documentation/api/mention/#target)  property of the Mention component to the ID of the textarea element inside the editor. When specifying the target, ensure that you append the suffix `_editable-content` to the ID. This configuration allows users to mention or tag others from the suggested list while editing text.

When a user types the `@` symbol followed by a character, the Markdown Editor displays a list of suggestions. Users can select an item from the list by either clicking on it or typing the desired name.

## Configuring mention properties

The Syncfusion Mention component provides several customizable properties to enhance the tagging experience:

* [allowSpaces](https://ej2.syncfusion.com/angular/documentation/api/mention/#allowspaces) - Allow to continue search action if user enter space after mention character while searching.
* [suggestionCount](https://ej2.syncfusion.com/angular/documentation/api/mention/#suggestioncount) - Defines the maximum number of items displayed in the suggestion list.
* [itemTemplate](https://ej2.syncfusion.com/angular/documentation/api/mention/#itemtemplate) - Customizes the appearance of items in the suggestion list.

## Example: Implementing mention in markdown editor

The following example demonstrates how to enable Mention support in the Angular Markdown Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/markdown-editor/mention-support/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/markdown-editor/mention-support/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/markdown-editor/mention-support" %}