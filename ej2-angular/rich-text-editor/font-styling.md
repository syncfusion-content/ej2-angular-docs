---
layout: post
title: Font Family, Size and Color | Syncfusion
description: Learn all about Styling in Syncfusion Angular Rich text editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Font Family, Size and Color 
documentation: ug
domainurl: ##DomainURL##
---

# Font Family, Size and Color in Angular Rich text editor component

## Font Family
  
  The Rich Text Editor initializes with a default font family, which inherits the font family of the parent element. You can change the font for selected text using the font family dropdown in the toolbar. When the default font family is selected, the toolbar will display "Font Name". However, for other font families, the toolbar will show the name of the selected font.

  To apply a different font style to a specific section of the content, follow these steps:

 1. Select the text you want to change.
 2. Choose the desired font style from the drop-down menu in the toolbar.

  These steps will apply the selected font style to the chosen text, allowing you to customize the appearance of your content easily.

### Configuring the Font Family Tool in the Toolbar

You can add the `FontName` tool in the Rich Text Editor toolbar using the `toolbarSettings` [items](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#items) property.

```typescript

import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    selector: 'app-root',
    template: `<ejs-richtexteditor [toolbarSettings]='tools'></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AppComponent {
    public tools: object = {
        items: ['FontName']
    }
}

```
The Rich Text Editor comes with a pre-configured set of [`fontFamily`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#fontfamily) property.

### Adding Custom Font Families

  The Rich Text Editor supports providing custom fonts along with the existing list. To add additional font names to the font dropdown, you can configure the items field of the [`fontFamily`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#fontfamily) property. This allows you to extend the available font options beyond the default selection.

  {% tabs %}
  {% highlight ts tabtitle="app.component.ts" %}
  {% include code-snippet/rich-text-editor/getting-started-cs25/src/app.component.ts %}
  {% endhighlight %}

  {% highlight ts tabtitle="main.ts" %}
  {% include code-snippet/rich-text-editor/getting-started-cs25/src/main.ts %}
  {% endhighlight %}
  {% endtabs %}
    
  {% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs25" %}

### Supporting Google Fonts

To use web fonts in Rich Text Editor, it is not needed for the web fonts to be present in local machine. To add the web fonts to Rich Text Editor, you need to refer the web font links and add the font names in the [`fontFamily`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#fontfamily) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/how-to/cursor-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/how-to/cursor-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/how-to/cursor-cs1" %}

The below font style links are referred in the page.

```typescript

<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto">
<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Great+Vibes">

```

> In the above sample, you can see that you have added two Google web fonts (`Roboto` and `Great vibes`) to `Rich Text Editor`.

## Font Size

The Rich Text Editor initializes with a default font size, which inherits the font size of the parent element. You can change the font for selected text using the font size dropdown in the toolbar. When the default font size is selected, the toolbar will display "Font Size". However, for other font sizes, the toolbar will show the name of the selected font.

### Configuring the Font Size Tool in the Toolbar

You can add the `FontSize` tool in the Rich Text Editor toolbar using the `toolbarSettings` [items](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#items) property.

```typescript

import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    selector: 'app-root',
    template: `<ejs-richtexteditor [toolbarSettings]='tools'></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AppComponent {
    public tools: object = {
        items: ['FontSize']
    }
}

```
The Rich Text Editor includes a default set of [`fontSize`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#fontsize) property.

### Defining Custom Font Sizes

  The Rich Text Editor supports providing custom fonts along with the existing list. To add additional font names to the font dropdown, you can configure the items field of the [`fontSize`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#fontsize) property. This allows you to extend the available font options beyond the default selection.

  {% tabs %}
  {% highlight ts tabtitle="app.component.ts" %}
  {% include code-snippet/rich-text-editor/getting-started-cs33/src/app.component.ts %}
  {% endhighlight %}

  {% highlight ts tabtitle="main.ts" %}
  {% include code-snippet/rich-text-editor/getting-started-cs33/src/main.ts %}
  {% endhighlight %}
  {% endtabs %}

  {% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs33" %}

## Font and Background Color

### Configuring the Font and Background Color Tool in the Toolbar

You can add the `FontName` tool in the Rich Text Editor toolbar using the `toolbarSettings` [items](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#items) property.

```typescript

import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    selector: 'app-root',
    template: `<ejs-richtexteditor [toolbarSettings]='tools'></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AppComponent {
    public tools: object = {
        items: ['FontColor', 'BackgroundColor']
    }
}

```

### Setting Custom Font and Background Colors

To apply `font color` or `background color` to selected content in the Rich Text Editor, use the font color and background color tools.

The Rich Text Editor offers custom font and background colors along with the existing list through the [`colorCode`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/backgroundColor/#colorcode) field of the [`fontColor`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#fontcolor) and [`backgroundColor`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#backgroundcolor) properties.

Both the `FontColor` and `BackgroundColor` properties offer two modes: `Picker` and `Palette`. The Palette mode provides a predefined set of colors, while the Picker mode includes a color scheme to choose custom colors. You can switch between these options using the [`modeSwitcher`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/fontColorModel/#modeswitcher) feature.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs26/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs26/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs26" %}

## See Also

* [Applying Basic Text Formatting in Rich Text Editor](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/basic-text-styling)
* [Implementing Headings and Text Hierarchy in Rich Text Editor](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/headings)
