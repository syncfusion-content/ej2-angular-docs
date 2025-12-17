---
layout: post
title: Appearance in Angular Block Editor Component | Syncfusion
description: Checkout and learn about appearance with Angular Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in Angular Block Editor component

The Block Editor component provides several properties to customize its visual appearance, allowing you to control its dimensions, styling, and behavior.

## Setting width and height

You can specify the width and height for the Block Editor component using the [width](../api/blockeditor#width) and [height](../api/blockeditor#height) properties.

```typescript
<ejs-blockeditor [width]="'100%'" [height]="'80vh'" />

// Or with specific pixel values
<ejs-blockeditor [width]="'800px'" [height]="'500px'" />
```

## Setting readonly mode

You can utilize the [readOnly](../api/blockeditor#readOnly) property to control whether the editor is in read-only mode. When set to `true`, users cannot edit the content but can still view it.

```typescript
<ejs-blockeditor [readOnly]="true" />
```

## Customization using CSS Class

You can use the [cssClass](../api/blockeditor#cssClass) property to customize the appearance of the Block Editor control.

```typescript
<ejs-blockeditor [width]="'600px'" [height]="'400px'" [cssClass]="'custom-editor-theme'" />
```
The following example demonstrates the usage of `readOnly` and `cssClass` properties of the Block Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/appearance/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/appearance/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/appearance/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/block-editor/appearance/src/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/block-editor/appearance" %}
        