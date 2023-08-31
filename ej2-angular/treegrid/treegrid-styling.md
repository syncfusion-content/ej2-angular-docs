---
layout: post
title: Treegrid styling in Angular Treegrid component | Syncfusion
description: Learn here all about Treegrid styling in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Treegrid styling 
documentation: ug
domainurl: ##DomainURL##
---

# Treegrid styling in Angular Treegrid component

To modify the TreeGrid appearance, you need to override the default CSS of treegrid. Please find the list of CSS classes and its corresponding section in treegrid. Also, you have an option to create your own custom theme for all the Angular controls using our [`Theme Studio`](https://ej2.syncfusion.com/themestudio/?theme=material).

Section|CSS class|Purpose of CSS class
-----|-----|-----
**Root**|e-treegrid|This classes are in this root element (div) of the treegrid control.
**Header**|e-gridheader|This class is added in the root element of header element. In this class, You can override thin line between header and content of the treegrid.
||e-table|This class is added at 'table' of the treegrid header. This CSS class makes table width as 100 %.
||e-columnheader|This class is added at 'tr' of the treegrid header.
||e-headercell|This class is added in 'th' element of treegrid header. You can override background color of header and border color.
||e-headercelldiv|This class is add in div which present 'th' element in the header. we recommend you to use the e-headercelldiv to override skeleton of header.
**Body**|e-gridcontent|This class is added at root of body content. This is to override background color of the body.
||e-table|This class is added to table of content. This CSS class makes table width as 100 %.
||e-altrow|This class is added to alternate rows of treegrid. This is to override alternate row color of the treegrid.
||e-rowcell|This class is added to all cells in the treegrid. This is to override cells appearance and styling.
||e-groupcaption|This class is added to the 'td' of group caption which is to change the background color of caption cell.
||e-selectionbackground|This class is added to rowcell's of the treegrid. This is override selection.
||e-hover|This class adds to row of treegrid, while hovering the treegrid rows.
**Pager**|e-pager|This class is added to root element of the pager. This to change appearance of the background color and color of font.
||e-pagercontainer|This class is added to numeric items of the pager.
||e-parentmsgbar|This class is added to pager info of the pager.
**Summary**|e-gridfooter|This class is added to root of the summary div.
||e-summaryrow|This class is added to rows of treegrid summary.
||e-summarycell|This class is added to cells of summary row. This to override background color of summary.

> The style customization works only when we elevate the CSS to global scope using the encapsulation: ViewEncapsulation.None
> If you need to apply style for ViewEncapsulation other than None, use ng-deep like shown in the below example code snippet,

```css
::ng-deep .e-treegrid .e-altrow  {
    background-color: #fafafa;
}
```

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.