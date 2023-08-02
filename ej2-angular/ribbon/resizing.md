---
layout: post
title: Resizing in Angular Ribbon component | Syncfusion
description:  Learn here all about Resizing in Syncfusion Angular Ribbon component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ribbon
documentation: ug
domainurl: ##DomainURL##
--- 

# Ribbon Resizing

When resizing the Ribbon, you have control over how the items behave in terms of their size preservation.The Ribbon effectively resizes the ribbon elements while being resized. It extends when the ribbon size is increased and collapses when the ribbon size is decreased. The resizing can be performed in both the classic and simplified modes.

By default, the ribbon elements are resized based on the group size with larger groups collapsing first, later the medium and small sized items.
## Defining items allowed size

The [allowedSizes](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#allowedsizes) property is used to maintain a constant size for an item when being resized. You can limit an items size by specifying its `allowedSizes` which keeps the size constant even when the Ribbon is being resized.

```javascript

import { Component } from "@angular/core";
import { RibbonButtonSettingsModel, RibbonItemSize, ItemModel } from '@syncfusion/ej2-angular-ribbon';
@Component({
  selector: 'app-root',
  templateUrl: `<ejs-ribbon id="ribbon">
    <e-ribbon-tabs>
        <e-ribbon-tab header="Home">
            <e-ribbon-groups>
                <e-ribbon-group>
                    <e-ribbon-collections>
                        <e-ribbon-collection>
                            <e-ribbon-items>
                                <e-ribbon-item type="SplitButton" [allowedSizes]="largeSize" [splitButtonSettings]="pasteButton">
                                </e-ribbon-item>
                            </e-ribbon-items>
                        </e-ribbon-collection>
                        <e-ribbon-collection>
                            <e-ribbon-items>
                                <e-ribbon-item type="Button" [allowedSizes]="mediumSize" [buttonSettings]="cutButton">
                                </e-ribbon-item>
                                <e-ribbon-item type="Button" [allowedSizes]="smallSize" [buttonSettings]="copyButton">
                                </e-ribbon-item>
                            </e-ribbon-items>
                        </e-ribbon-collection>
                    </e-ribbon-collections>
                </e-ribbon-group>
            </e-ribbon-groups>
        </e-ribbon-tab>
    </e-ribbon-tabs>
</ejs-ribbon>`,
})
export class AppComponent {
  public pasteOptions: ItemModel[] = [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }];
  public largeSize: RibbonItemSize = RibbonItemSize.Large;
  public smallSize: RibbonItemSize = RibbonItemSize.Small;
  public mediumSize: RibbonItemSize = RibbonItemSize.Medium;
  
  public pasteButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-paste", content: "Paste", items: this.pasteOptions };
  public copyButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-copy", content: "Copy" };
  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" };
}

```

## Defining items active size

The [activeSize](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#activesize) read-only property is used to set the size of the item which is displayed intially before it is being resized.

> On resizing, the items size will be changed based on the available width of the tab content from the order of Large-> Medium-> Small and viceversa.