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

The Block Editor component provides various appearance customization options to match your application's design requirements. These properties allow you to control the visual styling, layout, and overall look and feel of the editor.

## Setting width and height

You can specify the width and height for the Block Editor component using the [width](../api/blockeditor/#width) and [height](../api/blockeditor/#height) properties.

```typescript
<div ejs-blockeditor [width]="'100%'" [height]="'80vh'"></div>

// Or with specific pixel values
<div ejs-blockeditor [width]="'800px'" [height]="'500px'"></div>
```

## Setting readonly mode

You can utilize the [readonly](../api/blockeditor/#readonly) property to control whether the editor is in read-only mode. When set to `true`, users cannot edit the content but can still view it.

```typescript
<div ejs-blockeditor [readonly]="true"></div>
```

## Customization using CSS Class

You can use the [cssClass](../api/blockeditor/#cssclass) property to customize the appearance of the Block Editor control.

```typescript
<div ejs-blockeditor [width]="'600px'" [height]="'400px'" [cssClass]="'custom-editor-theme'"></div>
```
Below example demonstrates the usage of readonly and cssClass properties.

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
        
{% previewsample "page.domainurl/code-snippet/block-editor/appearance" %}
        