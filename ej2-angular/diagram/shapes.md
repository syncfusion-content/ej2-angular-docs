---
layout: post
title: Different Types of Shapes in Angular Diagram component | Syncfusion®
description: Learn to create and customize text, image, HTML, native, basic, path, and flow shapes in the Syncfusion Angular Diagram component with examples.
platform: ej2-angular
control: Shapes 
documentation: ug
domainurl: ##DomainURL##
---

# Different Types of Shapes in Angular Diagram Component

The Angular Diagram component provides comprehensive support for adding various types of nodes to create rich, interactive diagrams. Shapes serve as the fundamental building blocks for representing data, processes, and visual elements in your diagrams.

This guide covers the following shape types and their implementation:

* **Text nodes** - Display formatted text content
* **Image nodes** - Embed images from various sources
* **HTML nodes** - Include custom HTML elements
* **Native nodes** - Integrate SVG elements
* **Basic shapes** - Use predefined geometric shapes
* **Path shapes** - Create custom geometric paths
* **Flow shapes** - Represent process workflows

<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD010 -->

## Text Nodes

Text nodes enable you to add formatted text content directly to your diagram. They are ideal for labels, annotations, and textual information that enhances diagram readability.

To create a text node, set the shape property to [`text`](https://ej2.syncfusion.com/angular/documentation/api/diagram/node/#shape) and define the content object with your desired text and styling options.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/shapes/text-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/shapes/text-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/shapes/text-cs1" %}

## Image Nodes

Image nodes allow you to incorporate visual elements from various sources including URLs, local files, and Base64-encoded data. These nodes are perfect for adding logos, icons, or illustrative content to your diagrams.

To create an image node, set the shape property to [`image`](https://ej2.syncfusion.com/angular/documentation/api/diagram/node/#shape) and specify the image source through the source property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/shapes/image-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/shapes/image-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/shapes/image-cs1" %}

### Base64 Encoded Images

For scenarios where you need to embed images directly without external dependencies, use Base64-encoded image data. This approach ensures your diagrams remain self-contained and portable.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/shapes/image-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/shapes/image-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/shapes/image-cs2" %}

N> When deploying applications with image nodes, ensure your HTML files are served from a web server. Local file access restrictions in Chrome and Firefox may prevent image export functionality due to security policies. For more information, refer to browser-specific documentation on local image handling.

### Image Alignment and Scaling

Control how images appear within node boundaries using alignment and scaling properties. These features ensure your images display correctly regardless of node dimensions.

The [`scale`](https://ej2.syncfusion.com/angular/documentation/api/diagram/image/#scale) property determines how images fit within node boundaries, while the [`align`](https://ej2.syncfusion.com/angular/documentation/api/diagram/imageAlignment/) property controls positioning.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/shapes/alignment-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/shapes/alignment-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/shapes/alignment-cs1" %}

**Available scaling options:**

| Scale Value | Description | Visual Result |
|-------------|-------------|---------------|
| None | Original image size, may be clipped | ![None Alignment](images/Image1.png) |
| Meet | Scales to fit entirely within node bounds | ![Meet Alignment](images/Image2.png) |
| Slice | Scales to fill node, may crop image | ![Slice Alignment](images/Image3.png) |
| Stretch | Stretches to fill node exactly | ![Stretch Alignment](images/Image4.png) |

N> Combine the align property with scale settings to achieve precise image positioning within your nodes.

## HTML Nodes

HTML nodes provide the flexibility to embed rich HTML content directly into your diagrams. This powerful feature enables you to create highly customized visual elements with advanced formatting, styling, and interactivity.

Set the shape property to [`HTML`](https://ej2.syncfusion.com/angular/documentation/api/diagram/node/#shape) to create HTML nodes. You can define content using either inline templates or external node templates.

N> HTML nodes cannot be exported to image formats (JPEG, PNG, BMP) due to canvas rendering limitations. This is by design, as converting arbitrary HTML content to canvas equivalents is not feasible for all HTML elements.

### HTML Node with Content Template

Define HTML content directly within the [`content`](https://ej2.syncfusion.com/angular/documentation/api/diagram/htmlModel/#content) property for simple, self-contained HTML elements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/shapes/html-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/shapes/html-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/shapes/html-cs1" %}

### HTML Node with Node Template

For complex HTML structures, use the [`nodeTemplate`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#nodetemplate) approach. Define your template in the HTML file and reference it through the diagram's nodeTemplate property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/shapes/html-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/shapes/html-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/shapes/html-cs2" %}

## Native Nodes

Native nodes allow you to embed SVG elements directly into your diagrams, providing scalable vector graphics with precise control over visual appearance. This approach is ideal for custom icons, complex shapes, and high-quality graphics that scale well at any size.

To create a [`native`](https://ej2.syncfusion.com/angular/documentation/api/diagram/node/#shape) node, set the shape property to **native** and provide SVG content through the content property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/shapes/native-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/shapes/native-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/shapes/native-cs1" %}

N> Similar to HTML nodes, native nodes cannot be exported to image formats due to canvas rendering limitations. Fill colors of native nodes can be overridden by inline SVG styles or fill attributes specified in the SVG template.

### SVG Content Alignment and Scaling

Control how SVG content appears within node boundaries using the same scaling principles as image nodes. The [`scale`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nativeModel/#scale) property determines how SVG content fits within the node bounds.

**SVG scaling options:**

| Scale Value | Description | Visual Result |
|-------------|-------------|---------------|
| None | Original SVG size, may be clipped | ![None SVG Content Alignment](images/Native1.png) |
| Meet | Scales SVG to fit entirely within bounds | ![Meet SVG Content Alignment](images/Native2.png) |
| Slice | Scales SVG to fill node, may crop content | ![Slice SVG Content Alignment](images/Native3.png) |
| Stretch | Stretches SVG to fill node exactly | ![Stretch SVG Content Alignment](images/Native4.png) |

## Basic Shapes

Basic shapes provide a comprehensive set of predefined geometric forms commonly used in diagrams, flowcharts, and technical drawings. These shapes offer consistency and quick deployment for standard diagram elements.

To create [`basic`](https://ej2.syncfusion.com/angular/documentation/api/diagram/node/#shape) shapes, set the type property to **basic** and choose from the available built-in shapes. For rounded rectangles, use the [`cornerRadius`](https://ej2.syncfusion.com/angular/documentation/api/diagram/basicShapeModel/#cornerradius) property to specify the radius.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/shapes/basic-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/shapes/basic-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/shapes/basic-cs1" %}

N> The shape property defaults to **basic** when not specified. If no specific shape is defined for a basic shape node, it defaults to **rectangle**.

**Available basic shapes:**

![BasicShapes](images/Basic.png)

The basic shapes library includes rectangles, ellipses, triangles, polygons, stars, and many other geometric forms suitable for various diagramming needs.

## Path Shapes

Path shapes provide ultimate flexibility for creating custom geometric forms using SVG path data. This approach allows you to define any shape imaginable through precise path coordinates and commands.

To create a [`path`](https://ej2.syncfusion.com/angular/documentation/api/diagram/node/#shape) node, set the shape property to **path** and define the geometry through the [`data`](https://ej2.syncfusion.com/angular/documentation/api/diagram/pathModel/#data) property using standard SVG path syntax.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/shapes/path-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/shapes/path-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/shapes/path-cs1" %}

## Flow Shapes

Flow shapes are specialized elements designed for process modeling, workflow diagrams, and business process documentation. These standardized shapes follow common flowchart conventions and enhance diagram readability.

To create [`flow`](https://ej2.syncfusion.com/angular/documentation/api/diagram/node/#shape) shapes, set the shape type to **flow** and specify the desired flow shape variant. The default flow shape is **process**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/shapes/path-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/shapes/path-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/shapes/path-cs2" %}

The list of flow shapes are as follows.

![FlowShapes](images/FlowShapes.png)