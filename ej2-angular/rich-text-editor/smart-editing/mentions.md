---
layout: post
title: Mentions in Angular Rich Text Editor component | Syncfusion
description: Learn how to integrate and customize the Mentions in the Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Mentions
documentation: ug
domainurl: ##DomainURL##
---

# Mentions in Angular Rich Text Editor Component

The Mention feature, integrated with the Syncfusion Angular Rich Text Editor via the [Mention](https://ej2.syncfusion.com/angular/documentation/mention/getting-started/) component, enables users to tag or mention users or objects from a suggestion list. This functionality streamlines tagging by eliminating manual entry of names or identifiers, enhancing efficiency and accuracy.

## Setup and configuration

Use the [target](https://ej2.syncfusion.com/angular/documentation/api/mention/#target) property of the Mention component to specify the `ID` of the content editable div element within the Rich Text Editor. When setting the target, make sure to append the suffix `_rte-edit-view` to the ID. This allows you to enable the Mention functionality within the Rich Text Editor, so that users can mention or tag other users or objects from the suggested list while editing the text.

## Using mentions

When users type the `@` symbol followed by a character the Rich Text Editor, a suggestion list appears, Users can then select an item from the list by:

* Clicking on it
* Typing the name of the item they want to tag

In the following sample, we configured the following properties with popup dimensions.

* [allowSpaces](https://ej2.syncfusion.com/angular/documentation/api/mention/#allowspaces) - Allow to continue search action if user enter space after mention character while searching.
* [suggestionCount](https://ej2.syncfusion.com/angular/documentation/api/mention/#suggestioncount) - The maximum number of items that will be displayed in the suggestion list.
* [itemTemplate](https://ej2.syncfusion.com/angular/documentation/api/mention/#itemtemplate) - Used to display the customized appearance in suggestion list.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/mention-integration-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/mention-integration-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/mention-integration-cs1" %}

> [View Sample](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/rich-text-editor/mention-integration)

## See also

* [Getting Started with Mention](https://ej2.syncfusion.com/angular/documentation/mention/getting-started/)
