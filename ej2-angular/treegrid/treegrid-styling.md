---
layout: post
title: TreeGrid styling in Angular TreeGrid component | Syncfusion
description: Learn how to customize the appearance and styling of the Syncfusion Angular TreeGrid component using available CSS classes, theme studio, and advanced Angular techniques.
platform: ej2-angular
control: TreeGrid styling
documentation: ug
domainurl: ##DomainURL##
---

# TreeGrid styling in Angular TreeGrid component

To customize the appearance of the TreeGrid, override its default CSS classes. The following table lists common CSS classes and the corresponding TreeGrid sections they affect. For comprehensive theming needs, you can also create a custom theme for all Angular controls using the [Theme Studio](https://ej2.syncfusion.com/themestudio/?theme=material).

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

> Style customizations apply globally when using encapsulation: `ViewEncapsulation.None`.
> To style components where encapsulation mode is not `None`, use `::ng-deep` as in the example below:

```css
::ng-deep .e-treegrid .e-altrow  {
    background-color: #fafafa;
}
```

> For more on TreeGrid features, see the [Angular TreeGrid feature tour](https://www.syncfusion.com/angular-components/angular-tree-grid) or the [TreeGrid live example](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to explore data presentation and styling options.
