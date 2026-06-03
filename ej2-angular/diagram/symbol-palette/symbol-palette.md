---
layout: post
title: Symbol palette in Angular Diagram component | Syncfusion®
description: Learn here all about Symbol palette in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Symbol palette 
documentation: ug
domainurl: ##DomainURL##
---

# Symbol Palette in Angular Diagram Component

The [`symbolPalette`](https://ej2.syncfusion.com/angular/documentation/api/symbol-palette#symbolpalettecomponent) is a gallery of reusable symbols and diagram elements that can be dragged and dropped onto the diagram surface multiple times. It provides an efficient way to organize and access frequently used nodes, connectors, and groups, streamlining the diagram creation process.

## Create symbol palette

The [`width`](https://ej2.syncfusion.com/angular/documentation/api/symbol-palette#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/symbol-palette#height) properties of the symbol palette allow you to define the size of the symbol palette.

```typescript
@Component({
    selector: "app-container",
    template: `<ejs-symbolpalette id="symbolpalette" width="100%" height="700px">
    </ejs-symbolpalette>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {}
```

## Add nodes and palettes to SymbolPalette

The collection of predefined symbols can be added to palettes using the [`symbols`](https://ej2.syncfusion.com/angular/documentation/api/diagram/paletteModel#symbols) property.

A palette displays a group of related symbols and textually annotates the group with its header. [`Palettes`](https://ej2.syncfusion.com/angular/documentation/api/diagram/palette) can be added as a collection of symbol groups.

To initialize a palette, define a JSON object with the unique property [`ID`](https://ej2.syncfusion.com/angular/documentation/api/diagram/paletteModel#id). Additionally, include the symbols property, which contains an array of different symbols.

The following code example illustrates how to define symbols in a palette and how to add them to the symbol palette:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/palettes/palettes-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/palettes/palettes-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/palettes/palettes-cs1" %}

## Add connectors in symbol palette

Connectors can be added to the symbol palette by defining them in the symbols array of the palette. 
The following example shows how to render connectors in the symbol palette:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/palettes/palette-con/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/palettes/palette-con/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/palettes/palette-con" %}

## Add group nodes in symbol palette

The symbol palette supports adding group nodes. To add group nodes to the palette, define the child nodes first, followed by the parent node. Refer to the following code to see how to render group nodes in the symbol palette:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/palettes/palette-grp/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/palettes/palette-grp/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/palettes/palette-grp" %}

## Template-based symbols

### HTML and SVG node with content template

The Symbol Palette supports the creation of complex nodes using HTML or SVG templates. This allows developers to incorporate rich, interactive, and visually engaging content within diagram elements.

* For HTML content, set the node's `shape.type` property to **HTML**.
* For SVG content, set the `shape.type` property to **Native**.

Templates can be defined either as strings or functions and assigned to the node's `content` property. Function-based templates offer the flexibility to generate dynamic content based on node-specific properties or external data sources.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/palettes/content-template/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/palettes/content-template/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/palettes/content-template" %}

## Drag and drop symbols from palette to diagram

To drag and drop symbols from the palette to the diagram canvas, perform a mousedown action on the desired symbol in the palette, drag it to the desired location on the diagram canvas, and release the mouse button to drop it.

![Drag and drop symbols](../images/symbol-palette-drag-drop.gif)

## Symbol defaults

While adding more symbols such as nodes and connectors to the palette, you can define the default settings for those objects using the [`getNodeDefaults`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPaletteModel#getnodedefaults) and the [`getConnectorDefaults`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPaletteModel#getconnectordefaults) properties of the symbol palette.

These properties allow you to specify default configurations for nodes and connectors, ensuring consistency and saving time when adding multiple symbols. By setting these properties, you can predefine attributes such as size, color, and shape for nodes, and line style and thickness for connectors.

In the following example, the fill color of the node and target decorator shape of the connector are defined in getNodeDefaults and getConnectorDefaults respectively.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/palettes/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/palettes/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/palettes/default-cs1" %}

## Runtime palette operations

### Add symbols to palette at runtime

Symbols can be added to the palette at runtime using the public method [`addPaletteItem`](https://ej2.syncfusion.com/angular/documentation/api/symbol-palette#addpaletteitem). The following example shows how to add shapes to the palette at runtime:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/palettes/symbol-add/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/palettes/symbol-add/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/palettes/symbol-add" %}

### Remove symbols from palette at runtime

Symbols can be removed from the palette at runtime using the public method [`removePaletteItem`](https://ej2.syncfusion.com/angular/documentation/api/symbol-palette#removepaletteitem). The following example shows how to remove shapes from the palette at runtime:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/palettes/symbol-rmv/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/palettes/symbol-rmv/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/palettes/symbol-rmv" %}

## Symbol defaults

While adding more symbols such as nodes and connectors to the palette, you can define the default settings for those objects using the [`getNodeDefaults`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPaletteModel#getnodedefaults) and the [`getConnectorDefaults`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPaletteModel#getconnectordefaults) properties of symbol palette.
These properties allow you to specify default configurations for nodes and connectors, ensuring consistency and saving time when adding multiple symbols. By setting these properties, you can predefine attributes such as size, color, shape for nodes and line style, thickness, for connectors. 

In the following example, the fill color of node and target decorator shape of connector is defined in getNodeDefaults and getConnectorDefaults respectively.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/palettes/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/palettes/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/palettes/default-cs1" %}

### Add palettes at runtime

You can dynamically add palettes to the symbol palette at runtime to enhance flexibility and customization. This allows you to introduce new groups of symbols as needed without having to reload or reinitialize the diagram. The [`addPalettes`](https://ej2.syncfusion.com/angular/documentation/api/symbol-palette#addpalettes) method of the symbol palette enables you to create and configure new palettes programmatically. This method takes parameters that define the palette's properties, such as the palette `ID`, `title`, and the `symbols` it contains.

Follow the example below to see how to add a palette at runtime:
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/palettes/palette-add/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/palettes/palette-add/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/palettes/palette-add" %}

## Remove palettes at runtime

You can remove palettes from the symbol palette at runtime. There are two ways to do this:

* Use the `removePalette` method to remove a single palette by its ID.
* Use the [`removePalettes`](https://ej2.syncfusion.com/angular/documentation/api/symbol-palette#removepalettes) method to remove multiple palettes by passing an array of palette IDs as a parameter.

Follow the example below to see how to remove palettes at runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/palettes/palette-rmv/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/palettes/palette-rmv/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/palettes/palette-rmv" %}

## Stretch the symbols into the palette

The [`fit`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolInfo#fit) property defines whether the symbol has to be fit inside the size that is defined by the symbol palette. For example, when you resize the rectangle in the symbol, the ratio of the rectangle size has to be maintained rather than changing into a square shape. The following code example illustrates how to customize the symbol size:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/symbolpalette/palettes/fit-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/symbolpalette/palettes/fit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/symbolpalette/palettes/fit-cs1" %}

## Refresh symbol palette

The `refresh` method allows you to refresh the symbols dynamically in the SymbolPalette.

```ts
//To refresh the symbols in symbol palette
symbolPalette.refresh();
```