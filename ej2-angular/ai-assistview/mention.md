---
layout: post
title: Mentions in Angular AI AssistView | Syncfusion®
description: Render mentions in the Syncfusion® Angular AI AssistView prompt editor by configuring the trigger character, data source, filtering, popup, and templates.
platform: ej2-angular
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Mentions in Angular AI AssistView

The Syncfusion AI AssistView supports mentions in the prompt editor, allowing users to select and reference items from a configured data source. When users type the configured mention character, a suggestion popup displays matching items. Users can then select an item to insert it as a mention in the prompt.

Use the [mentions](../api/ai-assistview#mentions) property to configure the mention trigger character, data source, field mappings, filtering behavior, popup dimensions, and templates.

## Configure the mention

The following example demonstrates a basic mention configuration using the `@` character as the trigger and a local data source.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/mentions/basic/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/mentions/basic/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/mentions/basic" %}

## Configure mention settings

The `mentions` property accepts an array of mention settings. Each mention setting supports the following properties.

| Property | Type | Default | Description |
|---|---|---|---|
| `mentionChar` | `string` | `''` | Specifies the trigger character that opens the mention suggestion popup. |
| `dataSource` | `string[] \| DataManager \| { [key: string]: Object; }[] \| number[] \| boolean[]` | `[]` | Specifies the data source used to populate the mention suggestion popup. You can provide a local collection or a `DataManager` instance for local or remote data. |
| `fields` | `FieldSettingsModel` | `{ text: 'text', value: 'id' }` | Specifies the field mappings used to display and identify mention items. |
| `query` | `Query` | `null` | Specifies the `Query` used to retrieve and process data from the configured data source. |
| `filterType` | `FilterType` | `'Contains'` | Specifies how the typed text is matched against mention items. |
| `highlight` | `boolean` | `false` | Specifies whether the matching text is highlighted in the mention suggestion popup. |
| `showMentionChar` | `boolean` | `true` | Specifies whether the mention trigger character is displayed with the selected mention in the prompt editor. |
| `popupWidth` | `string \| number` | `'auto'` | Specifies the width of the mention suggestion popup. |
| `popupHeight` | `string \| number` | `'300px'` | Specifies the height of the mention suggestion popup. |
| `displayTemplate` | `string \| Function` | `''` | Specifies the template used to customize the appearance of a selected mention in the prompt editor. |
| `itemTemplate` | `string` | `''` | Specifies the template used to customize the appearance of items in the mention suggestion popup. |
| `noRecordsTemplate` | `string` | `'No records found'` | Specifies the template displayed in the mention suggestion popup when no matching items are available. |

### Configure the mention trigger

Use the `mentionChar` property inside [`mentions`](../api/ai-assistview#mentions) to configure the characters such as `@` or `/`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/mentions/mention-char/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/mentions/mention-char/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/mentions/mention-char" %}

### Configure the mention data source

Use the `dataSource` property inside [`mentions`](../api/ai-assistview#mentions) to provide a local collection, such as a string array or an object array, or use a `DataManager` instance to retrieve data locally or from a remote data source.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/mentions/data-source/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/mentions/data-source/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/mentions/data-source" %}

### Configure mention fields

Use the `fields` property inside [mentions](../api/ai-assistview#mentions) to map object-based data sources, specify the property names that contain the display text and value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/mentions/fields/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/mentions/fields/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/mentions/fields" %}

### Configure the query

Use the `query` property to apply additional data operations to the configured mention data source. It accepts a Syncfusion `Query` object. The default value is `null`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/mentions/query/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/mentions/query/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/mentions/query" %}

### Configure the filter type

Use the `filterType` property to specify how the text typed after the mention trigger character is matched against the items in the data source. The default value is `Contains`.

The following filter types are supported:

| Filter type | Description |
|---|---|
| `Contains` | Matches items whose display text contains the typed text. |
| `StartsWith` | Matches items whose display text starts with the typed text. |
| `EndsWith` | Matches items whose display text ends with the typed text. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/mentions/filter-type/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/mentions/filter-type/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/mentions/filter-type" %}

### Configure highlighting

Use the `highlight` property to specify whether the matching text is highlighted in the mention suggestion popup. The default value is `false`. When set to `true`, the portion of the suggestion item that matches the typed text is highlighted.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/mentions/highlight/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/mentions/highlight/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/mentions/highlight" %}

### Configure the mention character in selected mentions

Use the `showMentionChar` property to specify whether the configured mention trigger character is displayed with the selected mention. The default value is `true`. When set to `false`, the trigger character is omitted from the displayed mention.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/mentions/show-mention-char/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/mentions/show-mention-char/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/mentions/show-mention-char" %}

### Configure the display template

Use the `displayTemplate` property to customize the appearance of a selected mention in the prompt editor. The template receives the selected item's data, allowing you to customize the rendered mention content.

For example, you can display an icon, avatar, or additional information along with the item's display text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/mentions/display-template/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/mentions/display-template/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/mentions/display-template" %}

### Configure the popup size

Use the `popupWidth` and `popupHeight` properties to customize the dimensions of the mention suggestion popup.

- `popupWidth` - Specifies the popup width. It accepts CSS width values such as `'400px'` or `'50%'`, or a numeric value representing pixels. The default value is `'auto'`.
- `popupHeight` - Specifies the popup height. It accepts CSS height values such as `'300px'` or `'50%'`, or a numeric value representing pixels. The default value is `'300px'`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/mentions/popup-size/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/mentions/popup-size/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/mentions/popup-size" %}

### Configure the item template

Use the `itemTemplate` property to customize the appearance of items in the mention suggestion popup. You can use it to display additional information or visual elements, such as an avatar, icon, or description, along with the mention item's display text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/mentions/item-template/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/mentions/item-template/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/mentions/item-template" %}

### Configure the no records template

Use the `noRecordsTemplate` property to customize the content displayed when no mention items match the text entered by the user. The default value is `'No records found'`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/mentions/no-records-template/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/mentions/no-records-template/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/mentions/no-records-template" %}

## Handle mention selection

The [mentionSelect](../api/ai-assistview#mentionselect) event is triggered when a user selects an item from the mention suggestion popup. Use this event to access the selected mention data and perform custom actions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/mentions/mention-select/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/mentions/mention-select/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/mentions/mention-select" %}