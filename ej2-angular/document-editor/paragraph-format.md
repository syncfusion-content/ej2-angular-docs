---
layout: post
title: Paragraph format in Angular Document editor component | Syncfusion
description: Learn here all about Paragraph format in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Paragraph format 
documentation: ug
domainurl: ##DomainURL##
---

# Paragraph format in Angular Document editor component

Document Editor supports various paragraph formatting options such as text alignment, indentation, paragraph spacing, and more.

## Indentation

You can modify the left or right indentation of selected paragraphs using the following sample code.

```typescript
this.documentEditor.selection.paragraphFormat.leftIndent= 24;
this.documentEditor.selection.paragraphFormat.rightIndent= 24;
```

## Special indentation

You can define special indent for first line of the paragraph using the following sample code.

```typescript
this.documentEditor.selection.paragraphFormat.firstLineIndent= 24;
```

## Increase indent

You can increase the left indent of selected paragraphs by a factor of 36 points using the following sample code.

```typescript
this.documentEditor.editor.increaseIndent();
```

## Decrease indent

You can decrease the left indent of selected paragraphs by a factor of 36 points using the following sample code.

```typescript
this.documentEditor.editor.decreaseIndent();
```

## Text alignment

You can get or set the text alignment of selected paragraphs using the following sample code.

```typescript
this.documentEditor.selection.paragraphFormat.textAlignment= 'Center' | 'Left' | 'Right' | 'Justify';
```

You can toggle the text alignment of selected paragraphs by specifying a value using the following sample code.

```typescript
this.documentEditor.editor.toggleTextAlignment('Center' | 'Left' | 'Right' | 'Justify');
```

## Line spacing and its type

You can define the line spacing and its type for selected paragraphs using the following sample code.

```typescript
this.documentEditor.selection.paragraphFormat.lineSpacingType='AtLeast';
this.documentEditor.selection.paragraphFormat.lineSpacing= 6;
```

## Paragraph spacing

You can define the spacing before or after the paragraph by using the following sample code.

```typescript
this.documentEditor.selection.paragraphFormat.beforeSpacing= 24;
this.documentEditor.selection.paragraphFormat.afterSpacing= 24;
```

You can also set automatic spacing before and after the paragraph by using the following sample code.

```typescript
this.documentEditor.selection.paragraphFormat.spaceBeforeAuto = true;
this.documentEditor.selection.paragraphFormat.spaceAfterAuto = true;
```

>Note: If auto spacing property is enabled, then value defined in the `beforeSpacing` and `afterSpacing` property will not be considered.

## Pagination properties

You can enable or disable the following pagination properties for the paragraphs in a Word document.

* Widow/Orphan control - whether the first and last lines of the paragraph are to remain on the same page as the rest of the paragraph when paginating the document.
* Keep with next - whether the specified paragraph remains on the same page as the paragraph that follows it while paginating the document.
* Keep lines together - whether all lines in the specified paragraphs remain on the same page while paginating the document.

The following example code illustrates how to enable or disable these pagination properties for the selected paragraphs.

```typescript
this.documenteditor.selection.paragraphFormat.widowControl = false;
this.documenteditor.selection.paragraphFormat.keepWithNext = true;
this.documenteditor.selection.paragraphFormat.keepLinesTogether = true;
```

## Paragraph Border

You can apply borders to the paragraphs in a Word document. Using borders, decorate the paragraphs to set them apart from other paragraphs in the document.

The following example code illustrates how to apply box border for the selected paragraphs.

```typescript
// left
this.documenteditor.selection.paragraphFormat.borders.left.lineStyle = 'Single';
this.documenteditor.selection.paragraphFormat.borders.left.lineWidth = 3;
this.documenteditor.selection.paragraphFormat.borders.left.color = "#000000";

//right
this.documenteditor.selection.paragraphFormat.borders.right.lineStyle = 'Single';
this.documenteditor.selection.paragraphFormat.borders.right.lineWidth = 3;
this.documenteditor.selection.paragraphFormat.borders.right.color = "#000000";

//top
this.documenteditor.selection.paragraphFormat.borders.top.lineStyle = 'Single';
this.documenteditor.selection.paragraphFormat.borders.top.lineWidth = 3;
this.documenteditor.selection.paragraphFormat.borders.top.color = "#000000";

//bottom
this.documenteditor.selection.paragraphFormat.borders.bottom.lineStyle = 'Single';
this.documenteditor.selection.paragraphFormat.borders.bottom.lineWidth = 3;
this.documenteditor.selection.paragraphFormat.borders.bottom.color = "#000000";

```

Note: At present, the Document editor component displays all the border styles as single line. But you can apply any border style and get the proper display in Microsoft Word app when opening the exported Word document.

## Show or Hide Paragraph marks

You can show or hide the hidden formatting symbols like spaces, tab, paragraph marks, and breaks in Document editor component. These marks help identify the start and end of a paragraph and all the hidden formatting symbols in a Word document.

The following example code illustrates how to show or hide paragraph marks.

```typescript
this.documenteditor.documentEditorSettings.showHiddenMarks = true;
```

## Toolbar with paragraph formatting options

The following sample demonstrates the paragraph formatting options using a toolbar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/paragraph-formatting-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/paragraph-formatting-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/document-editor/paragraph-formatting-cs1" %}

## See Also

* [Feature modules](../document-editor/feature-module/)
* [Paragraph dialog](../document-editor/dialog#paragraph-dialog)
* [Keyboard shortcuts](../document-editor/keyboard-shortcut#paragraph-formatting)