---
layout: post
title: Shapes in Angular Document editor component | Syncfusion
description: Learn here all about Shapes in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Shapes 
documentation: ug
domainurl: ##DomainURL##
---

# Shapes in Angular Document editor component

Shapes are drawing objects that include a text box, rectangles, lines, curves, circles, etc. It can be preset or custom geometry.

>Note: At present, Document Editor does not have support to insert shapes. however, if the document contains a shape while importing, it will be preserved properly.

## Supported shapes

The DocumentEditor has preservation support for Lines, Rectangle, Basic Shapes, Block Arrows, Equation Shapes,Flowchart and Stars and Banners.

![List of supported shapes in DocumentEditor](images/Shapes_images/supported_shapes.png)

>Note: When using ASP.NET MVC service, the unsupported shapes will be converted as image and preserved as image.

## Text box Shape

A text box is a rectangular area on the document where you can enter text. When you click in a text box, a flashing cursor will display indicating that you can begin typing. It allows you to enter multiple lines of text with all text formatting.

![Text box shape view in DocumentEditor](images/Shapes_images/textbox_shape.png)

## Shape Resizer

The Document Editor also supports a built-in shape resizer to resize the shapes present in the document. The shape resizer accepts both touch and mouse interactions.

![Shape resizer view in DocumentEditor](images/Shapes_images/shape_resizer.png)

## Text wrapping style

Text wrapping refers to how shapes fit with surrounding text in a document. Please [refer to this page](../document-editor/text-wrapping-style) for more information about text wrapping styles available in Word documents.

## Positioning the shape

DocumentEditor preserves the position properties of the shape and displays the shape based on position properties. It does not support modifying the position properties. Whereas the shape will be automatically moved along with text edited if it is positioned relative to the line or paragraph.
