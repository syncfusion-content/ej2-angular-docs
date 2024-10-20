---
layout: post
title: Symbol Palette customization in EJ2 Angular Diagram component | Syncfusion
description: Learn here all about Symbol palette customization in Syncfusion Angular Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Symbol palette 
documentation: ug
domainurl: ##DomainURL##
---

# Symbol Palette customization in Angular Diagram component

## Customize the palette header

Palettes can be annotated with its header texts.

The [`title`](https://ej2.syncfusion.com/angular/documentation/api/diagram/paletteModel/#title) property displayed as the header text of palette.

The [`expanded`](https://ej2.syncfusion.com/angular/documentation/api/diagram/paletteModel/#expanded) property of palette allows to expand/collapse its palette items.

The [`height`](https://ej2.syncfusion.com/angular/documentation/api/diagram/paletteModel/#height) property of palette sets the height of the palette / symbol group.

The [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/diagram/paletteModel/#iconcss) property sets the icon to be rendered with the title.

The following code example illustrates how to customize palette headers.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/paletteheader-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/paletteheader-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/custompalette/paletteheader-cs1" %}

## Animation

The expand and collapse operation of symbol palette can be animated by utilizing the [`enableAnimation`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPaletteModel/#enableanimation) property of symbol palette. The following example demonstrates, how to enable and disable animation for symbol palette.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/palette-animate/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/palette-animate/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/custompalette/palette-animate" %}

## Description for symbols

The [`description`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symboldescription/#description) property defines the descriptive text that appears beneath each symbol in the palette. This text provides additional information about the symbol's purpose or usage within the diagramming context. The description can be dynamically retrieved and defined using the [`getSymbolInfo`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPaletteModel/#getsymbolinfo) property, allowing information to assist users in understanding the function or meaning of each symbol.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/symboldesc-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/symboldesc-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/custompalette/symboldesc-cs1" %}

### Text wrapping and text overflow

The descriptive text that appears beneath each symbol can vary in length. In cases where the text might overlap neighboring symbols in the palette, text wrapping is employed. Text wrapping is controlled using the wrap property of symbolInfo, which supports three modes: `Wrap`, `NoWrap`, `WrapWithOverflow`. By default, text wrapping is set to '`Wrap`'.

Additionally, to handle overflowing text, the overflow property can be used. By default, textOverflow is set to '`Ellipsis`', which truncates overflowing text with an ellipsis (...).

The following example demonstrates how text wrapping and text overflow are applied based on the symbol ID:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/symbol-textWrp/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/symbol-textWrp/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/custompalette/symbol-textWrp" %}

### Appearance of symbol description

The appearance of a symbol description in the palette can be customized by changing its [`color`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolDescription/#color) , [`fill`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolDescription/#fill), [`fontSize`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolDescription/#fontsize) , [`fontFamily`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolDescription/#fontfamily), [`bold`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolDescription/#bold) [`italic`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolDescription/#italic), [`textDecoration`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolDescription/#textdecoration)  and [`margin`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolDescription/#margin)

The following code example shows how to customize the symbol description.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/symbol-text/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/symbol-text/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/custompalette/symbol-text" %}

## Symbol size and symbol margin

The size of the individual symbol can be customized. The [`symbolWidth`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPaletteModel/#symbolwidth) and  [`symbolHeight`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPaletteModel/#symbolheight) properties of node enables you to define the size of the symbols. The following code example illustrates how to change the size of a symbol.

The [`symbolMargin`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPaletteModel/#symbolmargin) property is used to create the space around elements, outside of any defined borders. By setting the symbol margin with specific values for left, right, top, and bottom, you can create consistent spacing on all sides around the shape.

The following code example illustrates how to set symbol size and symbol margin for the symbol palette.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/size-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/size-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/custompalette/size-cs1" %}

## Symbol preview

The symbol preview size of the palette items can be customized using [`symbolPreview`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPreview) property of symbol palette. 
The [`width`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPreview#width-number) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPreview#height-number) properties of SymbolPalette allow you to define the preview size for all the symbol palette items. The [`offset`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPreview#offset-PointModel) property specifies the position of the dragging helper relative to the mouse cursor.

The following code example illustrates how to change the preview size of a palette item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/symbol-preview/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/symbol-preview/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/custompalette/symbol-preview" %}

## Symbol drag size

The [`symbolDragSize`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPaletteModel/#symboldragsize) property sets the dimensions (height and width) of a shape while it is being dragged from the palette to the diagram canvas. The following code illustrates how to set `symbolDragSize` for the symbol palette.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/symbol-dragSize/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/symbol-dragSize/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/custompalette/symbol-dragSize" %}

N> If the size of the symbol is not defined, the default size will be determined based on its shape.

## Expand Mode

You can customize whether to expand all the palettes of symbol palette at a time or to expand only one palette at a time. This customization can be done using the [`expandMode`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPaletteModel/#expandmode) property of symbol palette.

You can customize whether to expand all the palettes of the symbol palette at a time or to expand only one palette at a time. This customization can be done using the [`expandMode`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPaletteModel/#expandmode) property of the symbol palette. 

The following example demonstrates how to set the `expandMode` property to control the expansion behavior of the palettes:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/expandMode/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/expandMode/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/custompalette/expandMode" %}

### Restrict expand/collapse of the palette

The symbol palette panel can be restricted from expanding. When we click on the expand icon of the palette, the [paletteExpanding](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPaletteModel/#paletteexpanding) event is triggered. In this event, we can determine whether the palette's panel should be expanded or collapsed by utilizing the `cancel` argument of the event. By default, the panel is expanded. This restriction can be applied to each palette in the symbol palette as desired.

In the following code example, the basic shapes palette is restricted from expanding, and the flow shapes palette is restricted from collapsing, whereas the swimlane shapes palette can be expanded or collapsed:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/restrictexpand-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/restrictexpand-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/custompalette/restrictexpand-cs1" %}

## Tooltip for symbols in symbol palette

The Symbol palette supports displaying tooltips when mouse hovers over the symbols. You can customize the tooltip for each symbol in the symbol palette.

### Default tooltip for symbols

When hovering over symbols in the symbol palette, the default tooltip displays the symbol's ID.
Refer to the image below for an illustration of the tooltip behavior in the symbol palette.

![SymmbolPaletteTooltip](./images/SymbolPalatteTooltip.gif)

### Custom tooltip for symbols

To customize the tooltips for symbols in the symbol palette, assign a custom tooltip to the [`content`](https://ej2.syncfusion.com/angular/documentation/api/diagram/diagramTooltipModel/#content) property of ['tooltip'](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel/#tooltip) for each symbol. Once you define the custom tooltip, enable the [`Tooltip`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeConstraints/) constraints for each symbol, ensuring that the tooltips are displayed when users hover over them.

The code provided below demonstrates how to define tooltip content to symbols within a symbol palette.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/symboldesc-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/symboldesc-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/custompalette/symboldesc-cs1" %}


### How to provide different tooltip for Symbol palette and diagram elements.

When a custom tooltip is defined for a symbol, it will be displayed for both the symbol and the dropped node in the diagram canvas. 

However, to provide distinct tooltips for symbols in the palette and dropped nodes, capture the dragEnter event and assign specific tooltips dynamically.  

When a symbol is dragged from the symbol palette and enters the diagram canvas, the [`DragEnter`] [`IDragEnterEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iDragEnterEventArgs) event is triggered. Within this event, you can define a new tooltip for the dropped node. By assigning custom tooltip content to the Tooltip property of the node, you can provide a distinct tooltip that is specific to the dropped node.

The following image illustrates the differentiation of tooltips displayed in the Symbol Palette and the Diagram.

![SymmbolPaletteCustomTooltip](./images/different-tooltip.gif)

The following code snippet will demonstrate how to define two different tooltip for symbol in the symbol palette and dropped node in the diagram canvas.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/symbol-tooltip/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/symbol-tooltip/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/custompalette/symbol-tooltip" %}

## Localization

To localize the symbol palette search box, we need to define the [`locale`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPaletteModel/#locale) property of the symbol palette with our preferred culture. In the example below, we use **'de-DE**', which is the locale code for German as used in Germany.

The following code shows how to localize symbol palette.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/locale-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/locale-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/custompalette/locale-cs1" %}

## Restrict symbol dragging from palette

You can restrict the symbols getting dragged from the symbol palette by setting the [`allowDrag`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPaletteModel/#allowdrag) property of symbol palette as false. By default, the allowDrag is set as **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/restrict-drag/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/restrict-drag/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/custompalette/restrict-drag" %}

## Search symbol

The diagram provides support for enabling the search option in the palette. The [`enableSearch`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPaletteModel/#enablesearch) property of the palette is used to show or hide the search textbox in the palette. You can search for symbols in the palette by entering the symbol ID (e.g., “rectangle”) and search keywords into the search text box. The symbols are retrieved by matching the value of the ID property with the string entered in the search textbox.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/symbol-search/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/symbol-search/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/custompalette/symbol-search" %}

## Ignore symbols on search

The [`ignoreSymbolsOnSearch`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPaletteModel/#ignoresymbolsonsearch) property allows you to specify which symbols should be excluded from search results within the symbol palette. By setting this property, you can control the visibility of specific symbols during a search operation. This feature is useful for hiding certain symbols that you don't want to be shown via search.

In the following example, we ignored the symbol with the ID of 'plus', so it will not appear in the search results.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/symbol-search-ig/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/symbol-search-ig/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/custompalette/symbol-search-ig" %}

## Filter search

You can filter the search results based on your specific requirements. To achieve this, customize the [`filterSymbols`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPaletteModel/#filtersymbols) method of the symbol palette according to your needs. In the following example, we filter the results to display only flow shapes in the search palette.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/symbol-filter/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/custompalette/symbol-filter/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/custompalette/symbol-filter" %}


N> The diagram provides support to cancel the drag and drop operation from the symbol palette to the diagram when the ESC key is pressed

## See Also

* [How to add the symbol to the diagram](./nodes)