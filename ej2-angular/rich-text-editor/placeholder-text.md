---
layout: post
title: Placeholder Text in Angular Rich Text Editor component | Syncfusion
description: Learn here all about Editor Placeholder in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Placeholder Text
documentation: ug
domainurl: ##DomainURL##
---

# Placeholder Text in Angular Rich Text Editor Component

Specifies the placeholder for the Rich Text Editor’s content used when the editor's content area is empty through the [`placeholder`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#placeholder) property.

You can customize the appearance of the placeholder text by targeting the `e-rte-placeholder` class in your CSS. This allows you to modify properties such as font family, color, and other styles.

```typescript

.e-richtexteditor .e-rte-placeholder {
    font-family: monospace;
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs18/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs18" %}

## See Also

* [Customizing the placeholder in Styles](./style/#customizing-placeholder-text)