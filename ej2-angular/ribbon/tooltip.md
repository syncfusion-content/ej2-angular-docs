---
layout: post
title: Tooltip in Angular Ribbon component | Syncfusion
description:  Learn here all about Tooltip in Syncfusion Angular Ribbon component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ribbon
documentation: ug
domainurl: ##DomainURL##
--- 

# Tooltip

The Ribbon supports tooltips, which give users more information when they hover over items and improving the user experience.

## Adding title

The [title](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonTooltip/#title) property is used to set the tooltip title for each Ribbon item.

```javascript

import { Component } from "@angular/core";
import { RibbonTooltipSettingsModel, RibbonButtonSettingsModel, RibbonSplitButtonSettingsModel, ItemModel } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: 'app-root',
  templateUrl: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Clipboard">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="SplitButton" [splitButtonSettings]="pasteButton" [ribbonTooltipSettings]="pasteOptions">
                                    </e-ribbon-item>
                                </e-ribbon-items>
                            </e-ribbon-collection>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="Button" [buttonSettings]="cutButton" [ribbonTooltipSettings]="cutOptions">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="Button" [buttonSettings]="copyButton" [ribbonTooltipSettings]="copyOptions">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="Button" [buttonSettings]="formatButton" [ribbonTooltipSettings]="formatOptions">
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
  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" };
  public copyButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-copy", content: "Copy" };
  public formatButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-format-painter", content: "Format Painter" };
  public pasteSettings: ItemModel[] = [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }];
  public pasteButton: RibbonSplitButtonSettingsModel = { iconCss: 'e-icons e-paste', items: this.pasteSettings, content: 'Paste' }

  public cutOptions: RibbonTooltipSettingsModel = { title: "Cut" };
  public copyOptions: RibbonTooltipSettingsModel = { title: "Copy" };
  public formatOptions: RibbonTooltipSettingsModel = { title: "Format Painter" };
  public pasteOptions: RibbonTooltipSettingsModel = { title: "Paste" };
}

```

## Adding content

The [content](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonTooltip/#content) property can be used to set the tooltip content for each Ribbon item.

```javascript

import { Component } from "@angular/core";
import { RibbonTooltipSettingsModel, RibbonButtonSettingsModel, RibbonSplitButtonSettingsModel, ItemModel } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: 'app-root',
  templateUrl: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Clipboard">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="SplitButton" [splitButtonSettings]="pasteButton" [ribbonTooltipSettings]="pasteOptions">
                                    </e-ribbon-item>
                                </e-ribbon-items>
                            </e-ribbon-collection>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="Button" [buttonSettings]="cutButton" [ribbonTooltipSettings]="cutOptions">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="Button" [buttonSettings]="copyButton" [ribbonTooltipSettings]="copyOptions">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="Button" [buttonSettings]="formatButton" [ribbonTooltipSettings]="formatOptions">
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
  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" };
  public copyButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-copy", content: "Copy" };
  public formatButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-format-painter", content: "Format Painter" };
  public pasteSettings: ItemModel[] = [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }];
  public pasteButton: RibbonSplitButtonSettingsModel = { iconCss: 'e-icons e-paste', items: this.pasteSettings, content: 'Paste' }

  public cutOptions: RibbonTooltipSettingsModel = { title: "Cut", content: "Places the selected text or object on the clipboard so that you can paste it somewhere else." };
  public copyOptions: RibbonTooltipSettingsModel = { title: "Copy", content: "Copies the chosen text or object to the clipboard so that you can reuse it elsewhere." };
  public formatOptions: RibbonTooltipSettingsModel = { title: "Format Painter", content: "Copies the formatting style of a selected text or object and applies it to other content within the document." };
  public pasteOptions: RibbonTooltipSettingsModel = { title: "Paste", content: "Insert the clipboard content where the cursor is currently placed." };
}

```

## Adding icon

In addition to the text and content, by using [iconCss](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonTooltip/#iconcss) property you can define the custom style for the icons.

```javascript

import { Component } from "@angular/core";
import { RibbonTooltipSettingsModel, RibbonButtonSettingsModel, RibbonSplitButtonSettingsModel, ItemModel } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: 'app-root',
  templateUrl: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Clipboard">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="SplitButton" [splitButtonSettings]="pasteButton" [ribbonTooltipSettings]="pasteOptions">
                                    </e-ribbon-item>
                                </e-ribbon-items>
                            </e-ribbon-collection>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="Button" [buttonSettings]="cutButton" [ribbonTooltipSettings]="cutOptions">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="Button" [buttonSettings]="copyButton" [ribbonTooltipSettings]="copyOptions">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="Button" [buttonSettings]="formatButton" [ribbonTooltipSettings]="formatOptions">
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
  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" };
  public copyButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-copy", content: "Copy" };
  public formatButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-format-painter", content: "Format Painter" };
  public pasteSettings: ItemModel[] = [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }];
  public pasteButton: RibbonSplitButtonSettingsModel = { iconCss: 'e-icons e-paste', items: this.pasteSettings, content: 'Paste' }

  public cutOptions: RibbonTooltipSettingsModel = { title: "Cut", content: "Places the selected text or object on the clipboard so that you can paste it somewhere else.", iconCss: "e-icons e-cut" };
  public copyOptions: RibbonTooltipSettingsModel = { title: "Copy", content: "Copies the chosen text or object to the clipboard so that you can reuse it elsewhere.", iconCss: "e-icons e-copy" };
  public formatOptions: RibbonTooltipSettingsModel = { title: "Format Painter", content: "Copies the formatting style of a selected text or object and applies it to other content within the document.", iconCss: "e-icons e-format-painter" };
  public pasteOptions: RibbonTooltipSettingsModel = { title: "Paste", content: "Insert the clipboard content where the cursor is currently placed.", iconCss: "e-icons e-paste" };
}

```

{% previewsample "page.domainurl/code-snippet/ribbon/Tooltip" %}

## Tooltip Customization

The [CssClass](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonTooltip/#cssclass) property can be used to customize the appearance of the tooltip with your own custom styles.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/TooltipCustomization/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/TooltipCustomization/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/TooltipCustomization/app/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/TooltipCustomization/app/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.css" %}
{% include code-snippet/ribbon/TooltipCustomization/app/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ribbon/TooltipCustomization" %}