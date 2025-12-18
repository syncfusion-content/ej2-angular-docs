---
layout: post
title: Globalization in Angular Block Editor Component | Syncfusion
description: Checkout and learn about Globalization with Angular Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in Angular Block Editor component

Globalization is the process of designing and developing applications that can adapt to different cultures and languages. The Syncfusion Block Editor component provides support for globalization, enabling it to serve users from diverse linguistic and cultural backgrounds.

## Localization

The Block Editor can be localized for any culture by translating its static text labels. The default locale is `en` (English). The following table lists the default text values for the `en` culture that can be translated.

|KEY|Text|
|----|----|
|`paragraph`|Write something or '/' for commands.|
|`heading1`|Heading 1|
|`heading2`|Heading 2|
|`heading3`|Heading 3|
|`heading4`|Heading 4|
|`collapsibleParagraph`|Collapsible Paragraph|
|`collapsibleHeading1`|Collapsible Heading 1|
|`collapsibleHeading2`|Collapsible Heading 2|
|`collapsibleHeading3`|Collapsible Heading 3|
|`collapsibleHeading4`|Collapsible Heading 4|
|`bulletList`|Add item|
|`numberedList`|Add item|
|`checklist`|Todo|
|`callout`|Write a callout|
|`addIconTooltip`|Click to insert below|
|`dragIconTooltipActionMenu`|Click to open|
|`dragIconTooltip`|(Hold to drag)|
|`insertLink`|Insert Link|
|`linkText`|Text|
|`linkTextPlaceholder`|Link text|
|`linkUrl`|URL|
|`linkUrlPlaceholder`|https://example.com|
|`linkTitle`|Title|
|`linkTitlePlaceholder`|Link title|
|`linkOpenInNewWindow`|Open in new window|
|`linkInsert`|Insert|
|`linkRemove`|Remove|
|`linkCancel`|Cancel|
|`codeCopyTooltip`|Copy code|

The below example shows adding the German culture locale(`de-DE`)

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/globalization/localization/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/globalization/localization/src/main.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/block-editor/globalization/localization" %}

## RTL

The Block Editor supports Right-to-Left (RTL) mode, which reverses the layout of the component to accommodate languages read from right to left, such as Arabic, Hebrew, and Persian. This feature can be enabled by setting the [enableRtl](https://ej2.syncfusion.com/angular/documentation/api/blockeditor#enablertl) property to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/globalization/rtl/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/globalization/rtl/src/main.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/block-editor/globalization/rtl" %}