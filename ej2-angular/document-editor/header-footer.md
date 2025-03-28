---
layout: post
title: Header footer in Angular Document editor component | Syncfusion
description: Learn here all about Header footer in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Header footer 
documentation: ug
domainurl: ##DomainURL##
---

# Header footer in Angular Document editor component

Document Editor supports headers and footers in its document. Each section in the document can have the following types of headers and footers:

* First page: Used only on the first page of the section.
* Even pages: Used on all even numbered pages in the section.
* Default: Used on all pages of the section, where first or even pages are not applicable or not specified.

You can define this by setting format properties of the corresponding section using the following sample code.

```typescript
//Defines whether different header footer is required for first page of the section
this.documentEditor.selection.sectionFormat.differentFirstPage = true;
//Defines whether different header footer is required for odd and even pages in the section
this.documentEditor.selection.sectionFormat.differentOddAndEvenPages = true;
```

## Go to header footer region

Double click in header or footer region to move the selection into it. You can also do this by using the following code.

```typescript
this.documentEditor.selection.goToHeader();
```

```typescript
this.documentEditor.selection.goToFooter();
```

## Link to previous

Link to previous is enabled by default when document has more than one section. If you're using different headers and footers such as different first page or different odd and even pages, they can't be linked together because they're all separate.

Before setting or getting the link to previous value, use the ['goToHeader'](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection/#gotoheader) or ['goToFooter'](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection/#gotofooter) API to move the current selection to the header or footer region.

You can get or set the default header footer link to previous value of a section at cursor position by using the following sample code.

```typescript
this.container.documentEditor.selection.sectionFormat.oddPageHeader.linkToPrevious = false;
this.container.documentEditor.selection.sectionFormat.oddPageFooter.linkToPrevious = false;
```

In case the document has different header and footer types, such as different first page, odd, and even pages.

```typescript
// Different first page
this.container.documentEditor.selection.sectionFormat.firstPageHeader.linkToPrevious = false;
this.container.documentEditor.selection.sectionFormat.firstPageFooter.linkToPrevious = false;
//Even page
this.container.documentEditor.selection.sectionFormat.firstPageHeader.linkToPrevious = false;
this.container.documentEditor.selection.sectionFormat.firstPageFooter.linkToPrevious = false;
```

>Note: When there is more than one section in the document, the Link to Previous option becomes available. By default, this feature is disabled state in UI and set to return false for the first section.

## Header and footer distance

You can define the distance of header region content from the top of the page. Refer to the following sample code.

```typescript
this.documentEditor.selection.sectionFormat.headerDistance = 36;
```

Same way, you can define the distance of footer region content from the bottom of the page. Refer to the following sample code.

```typescript
this.documentEditor.selection.sectionFormat.footerDistace = 36;
```

## Close header footer region

Move the selection to the document body from header or footer region by double clicking or tapping the document area. You can also perform this by using the following sample code.

```typescript
this.documentEditor.selection.closeHeaderFooter();
```

## See Also

* [Working with Section Formatting](../document-editor/section-format/)