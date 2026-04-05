---
layout: post
title: Commands configuration in Angular Inline AI Assist | Syncfusion
description:  Checkout and learn about command items with Angular Inline AI Assist component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Commands configuration in Angular Inline AI Assist component

You can render and use the command action popup by using the `commands` property in the [commandSettings](../api/inline-ai-assist#commandsettings) property. This property helps to supply commands, component popup dimensions, and customize behavior.

## Configure command items

You can use the [commandSettings](../api/inline-ai-assist#commandsettings) property to add commands that populate the command popup. Each command item can perform a quick request based on the configured `prompt`.

Each command item object can include the following properties:

| Property    | Type    | Default | Description                                                  |
|-------------|---------|---------|--------------------------------------------------------------|
| label       | string  | ''      | Specifies the display label of the command item.             |
| prompt      | string  | ''      | Specifies the prompt text executed when the item is selected.|
| iconCss     | string  | ''      | Specifies the CSS class for the item's icon.                 |
| disabled    | boolean | false   | Specifies whether the command is disabled and unselectable.  |
| groupBy     | string  | ''      | Specifies the group category for organizing related commands.|
| id          | string  | ''      | Specifies a unique identifier for the command item.          |
| tooltip     | string  | ''      | Specifies the tooltip text displayed on hover.               |

## Customization of AI commands popup 

### Setting popup width

component the popup width with `popupWidth` property in the commandSettings. Accepts CSS values or number (px).

### Setting popup height

component the popup height with `popupHeight` property in the commandSettings. Use this to enable scrollable lists when many commands exist.

## Command interactions

The [itemSelect](../api/inline-ai-assist/commandSettingsModel#itemselect) event is triggered when a command item is selected from the command popup in the Inline AI Assist component.

Below sample demonstrates the usage of `commandSettings` property in Inline Assist component.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/inline-ai-assist/command-settings/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/inline-ai-assist/command-settings/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/inline-ai-assist/command-settings/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/inline-ai-assist/command-settings/src/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/inline-ai-assist/command-settings" %}

## See Also

- [Response Settings](./response-settings.md)
- [Inline Toolbar](./inline-toolbar.md)
- [Events Documentation](./events.md)