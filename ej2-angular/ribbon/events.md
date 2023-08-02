---
layout: post
title: Events in Angular Ribbon component | Syncfusion
description:  Learn here all about Events in Syncfusion Angular Ribbon component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ribbon
documentation: ug
domainurl: ##DomainURL##
---

# Events in Ribbon component

This section describes the ribbon events that will be triggered when appropriate actions are performed. The following events are available in the ribbon component.

## tabSelected

The [tabSelected](https://ej2.syncfusion.com/angular/documentation/api/ribbon/#tabselected) event is triggered after selecting the tab item.

```javascript
import { Component } from "@angular/core";
import { RibbonButtonSettingsModel,TabSelectedEventArgs } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
  <ejs-ribbon id="ribbon" (tabSelected)='tabSelected($event)'>
    <e-ribbon-tabs>
        <e-ribbon-tab header="Home">
            <e-ribbon-groups>
                <e-ribbon-group header="Clipboard">
                    <e-ribbon-collections>
                        <e-ribbon-collection>
                            <e-ribbon-items>
                                <e-ribbon-item type="Button" [buttonSettings]="cutButton">
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
    public tabSelected(args: TabSelectedEventArgs) {
        // Your required actions here
    }
}
```

## tabSelecting

The [tabSelecting](https://ej2.syncfusion.com/angular/documentation/api/ribbon/#tabselecting) event is triggered before selecting the tab item.

```javascript
import { Component } from "@angular/core";
import { RibbonButtonSettingsModel,TabSelectingEventArgs } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
  <ejs-ribbon id="ribbon" (tabSelecting)='tabSelecting($event)'>
    <e-ribbon-tabs>
        <e-ribbon-tab header="Home">
            <e-ribbon-groups>
                <e-ribbon-group header="Clipboard">
                    <e-ribbon-collections>
                        <e-ribbon-collection>
                            <e-ribbon-items>
                                <e-ribbon-item type="Button" [buttonSettings]="cutButton">
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
    public tabSelecting(args: TabSelectingEventArgs) {
        // Your required actions here
    }
}
```

## ribbonCollapsing

The [ribbonCollapsing] (https://ej2.syncfusion.com/angular/documentation/api/ribbon/#ribboncollapsing) event is triggered before collapsing the ribbon.

```javascript
import { Component } from "@angular/core";
import { RibbonButtonSettingsModel,ExpandCollapseEventArgs } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
  <ejs-ribbon id="ribbon" (ribbonCollapsing)='ribbonCollapsing($event)'>
    <e-ribbon-tabs>
        <e-ribbon-tab header="Home">
            <e-ribbon-groups>
                <e-ribbon-group header="Clipboard">
                    <e-ribbon-collections>
                        <e-ribbon-collection>
                            <e-ribbon-items>
                                <e-ribbon-item type="Button" [buttonSettings]="cutButton">
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
    public ribbonCollapsing(args: ExpandCollapseEventArgs) {
        // Your required actions here
    }
}
```

## ribbonExpanding

The [ribbonExpanding](https://ej2.syncfusion.com/angular/documentation/api/ribbon/#ribbonexpanding) event is triggered before expanding the ribbon.

```javascript
import { Component } from "@angular/core";
import { RibbonButtonSettingsModel,ExpandCollapseEventArgs } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
  <ejs-ribbon id="ribbon" (ribbonExpanding)='ribbonExpanding($event)'>
    <e-ribbon-tabs>
        <e-ribbon-tab header="Home">
            <e-ribbon-groups>
                <e-ribbon-group header="Clipboard">
                    <e-ribbon-collections>
                        <e-ribbon-collection>
                            <e-ribbon-items>
                                <e-ribbon-item type="Button" [buttonSettings]="cutButton">
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
    public ribbonExpanding(args: ExpandCollapseEventArgs) {
        // Your required actions here
    }
}
```

## launcherIconClick

The [launcherIconClick](https://ej2.syncfusion.com/angular/documentation/api/ribbon/#launchericonclick) event is triggered when the launcher icon of the group is clicked.

```javascript
import { Component } from "@angular/core";
import { RibbonButtonSettingsModel,LauncherClickEventArgs } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon" (launcherIconClick)='launchClick($event)'>
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Clipboard" [showLauncherIcon]=true>
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="Button" [buttonSettings]="cutButton">
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
    public launchClick(args: LauncherClickEventArgs) {
        // Your required actions here
    }
}
```

## Button item events

### click

The [clicked](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonButtonSettings/#clicked) event is triggered when the button is clicked.

```javascript
import { Component } from "@angular/core";
import { RibbonButtonSettingsModel } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Clipboard">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="Button" [buttonSettings]="cutButton">
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
    public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut", 
    clicked: () => { 
        // Your required action here
    }  };
}
```

### created

The [created](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonButtonSettings/#created) event is triggered when the button is created.

```javascript
import { Component } from "@angular/core";
import { RibbonButtonSettingsModel } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Clipboard">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="Button" [buttonSettings]="cutButton">
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
    public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut", 
    created: () => { 
        // Your required action here
    }  };
}
```

## Checkbox item events

### change

The [change](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonCheckBoxSettings/#change) event is triggered when the the checkbox state is changed.

```javascript
import { Component } from "@angular/core";
import { RibbonCheckBoxSettingsModel } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Clipboard">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type=CheckBox [checkBoxSettings]="ruler">
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
    public ruler: RibbonCheckBoxSettingsModel = { label: "Ruler", checked: false, 
    change: () => { 
        // Your required action here
    } };
}
```

### created

The [created](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonCheckBoxSettings/#created) event is triggered once the checkbox is created.

```javascript
import { Component } from "@angular/core";
import { RibbonCheckBoxSettingsModel } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Clipboard">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type=CheckBox [checkBoxSettings]="ruler">
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
    public ruler: RibbonCheckBoxSettingsModel = { label: "Ruler", checked: false, 
    created: () => { 
        // Your required action here
    } };
}
```

## Colorpicker item events

### change

The [change](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonColorPickerSettings/#change) event is triggered while changing the colors.

```javascript
import { Component } from "@angular/core";
import { RibbonColorPickerSettingsModel } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Font">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="ColorPicker"  [colorPickerSettings]="colorSettings">
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
    public colorSettings: RibbonColorPickerSettingsModel = { value: '#123456', change: (args) => { 
        // Your required action here
    } };
}
```

### created

The [created](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonColorPickerSettings/#created) event is triggered once the color picker is created.

```javascript
import { Component } from "@angular/core";
import { RibbonColorPickerSettingsModel } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Font">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="ColorPicker"  [colorPickerSettings]="colorSettings">
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
    public colorSettings: RibbonColorPickerSettingsModel = { value: '#123456', 
    created: (args) => { 
        // Your required action here
    } };
}
```

### open

The [open](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonColorPickerSettings/#open) event is triggered while opening the ColorPicker popup.

```javascript
import { Component } from "@angular/core";
import { RibbonColorPickerSettingsModel } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Font">
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="ColorPicker"  [colorPickerSettings]="colorSettings">
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
    public colorSettings: RibbonColorPickerSettingsModel = { value: '#123456', 
    open: (args) => { 
        // Your required action here
    } };
}
```

### select

The [select](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonColorPickerSettings/#select) event is triggered while selecting the color in picker / palette, when showButtons property is enabled.

```javascript
import { Component } from "@angular/core";
import { RibbonColorPickerSettingsModel } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Font">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="ColorPicker"  [colorPickerSettings]="colorSettings">
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
    public colorSettings: RibbonColorPickerSettingsModel = { value: '#123456', select: (args) => { 
        // Your required action here
    } };
}
```

### beforeClose

The [beforeClose](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonColorPickerSettings/#beforeclose) event is triggered before closing the ColorPicker popup.

```javascript
import { Component } from "@angular/core";
import { RibbonColorPickerSettingsModel } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Font">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="ColorPicker"  [colorPickerSettings]="colorSettings">
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
    public colorSettings: RibbonColorPickerSettingsModel = { value: '#123456', beforeClose: (args) => { 
        // Your required action here
    } };
}
```

### beforeOpen

The [beforeOpen](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonColorPickerSettings/#beforeopen) event is triggered before opening the ColorPicker popup.

```javascript
import { Component } from "@angular/core";
import { RibbonColorPickerSettingsModel } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Font">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="ColorPicker"  [colorPickerSettings]="colorSettings">
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
    public colorSettings: RibbonColorPickerSettingsModel = { value: '#123456', beforeOpen: (args) => { 
        // Your required action here
    } };
}
```

### beforeTileRender

The [beforeTileRender](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonColorPickerSettings/#beforetilerender) event is triggered while rendering each palette tile.

```javascript
import { Component } from "@angular/core";
import { RibbonColorPickerSettingsModel } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Font">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="ColorPicker"  [colorPickerSettings]="colorSettings">
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
    public colorSettings: RibbonColorPickerSettingsModel = { value: '#123456', beforeTileRender: (args) => { // Your required action here
    } };
}
```

## Combobox item events

### change

The [change](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonComboBoxSettings/#change) event is triggered when an item in a popup is selected or when the model value is changed by user.

```javascript
import { Component } from "@angular/core";
import { RibbonComboBoxSettingsModel } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Font">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="ComboBox" [comboBoxSettings]="fontstyleSettings">
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
    public fontStyle: string[] = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia", "Impact", "Segoe Print", "Segoe Script", "Segoe UI", "Symbol", "Times New Roman", "Verdana", "Windings"];
    public fontstyleSettings: RibbonComboBoxSettingsModel = { dataSource: this.fontStyle, index: 3, width: '150px', allowFiltering: true,
    change: (args) => { 
        // Your required action here
    } };
}
```

### close

The [close](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonComboBoxSettings/#close) event is triggered when the popup is closed.

```javascript
import { Component } from "@angular/core";
import { RibbonComboBoxSettingsModel } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Font">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="ComboBox" [comboBoxSettings]="fontstyleSettings">
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
    public fontStyle: string[] = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia", "Impact", "Segoe Print", "Segoe Script", "Segoe UI", "Symbol", "Times New Roman", "Verdana", "Windings"];
    public fontstyleSettings: RibbonComboBoxSettingsModel = { dataSource: this.fontStyle, index: 3, width: '150px', allowFiltering: true, 
    close: (args) => { 
        // Your required action here
    } };
}
```

### open

The [open](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonComboBoxSettings/#close) event is triggered when the popup is opened.

```javascript
import { Component } from "@angular/core";
import { RibbonComboBoxSettingsModel } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Font">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="ComboBox" [comboBoxSettings]="fontstyleSettings">
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
    public fontStyle: string[] = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia", "Impact", "Segoe Print", "Segoe Script", "Segoe UI", "Symbol", "Times New Roman", "Verdana", "Windings"];
    public fontstyleSettings: RibbonComboBoxSettingsModel = { dataSource: this.fontStyle, index: 3, width: '150px', allowFiltering: true, 
    open: (args) => { 
        // Your required action here
    } };
}
```

### created

The [created](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonComboBoxSettings/#created) event is triggered when the popup is Created.

```javascript
import { Component } from "@angular/core";
import { RibbonComboBoxSettingsModel } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Font">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="ComboBox" [comboBoxSettings]="fontstyleSettings">
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
    public fontStyle: string[] = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia", "Impact", "Segoe Print", "Segoe Script", "Segoe UI", "Symbol", "Times New Roman", "Verdana", "Windings"];
    public fontstyleSettings: RibbonComboBoxSettingsModel = { dataSource: this.fontStyle, index: 3, width: '150px', allowFiltering: true, 
    created: (args) => { 
        // Your required action here
    } };
}
```

### filtering

The [filtering](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonComboBoxSettings/#filtering) event triggers on typing a character in the combobox.

```javascript
import { Component } from "@angular/core";
import { RibbonComboBoxSettingsModel } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Font">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="ComboBox" [comboBoxSettings]="fontstyleSettings">
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
    public fontStyle: string[] = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia", "Impact", "Segoe Print", "Segoe Script", "Segoe UI", "Symbol", "Times New Roman", "Verdana", "Windings"];
    public fontstyleSettings: RibbonComboBoxSettingsModel = { dataSource: this.fontStyle, index: 3, width: '150px', allowFiltering: true, 
    filtering: (args) => { 
        // Your required action here
    } };
}
```

### select

The [select](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonComboBoxSettings/#select) event is triggered when an item in the popup is selected.

```javascript
import { Component } from "@angular/core";
import { RibbonComboBoxSettingsModel } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Font">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="ComboBox" [comboBoxSettings]="fontstyleSettings">
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
    public fontStyle: string[] = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia", "Impact", "Segoe Print", "Segoe Script", "Segoe UI", "Symbol", "Times New Roman", "Verdana", "Windings"];
    public fontstyleSettings: RibbonComboBoxSettingsModel = { dataSource: this.fontStyle, index: 3, width: '150px', allowFiltering: true, 
    select: (args) => { 
        // Your required action here
    } };
}
```

### beforeOpen

The [beforeOpen](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonComboBoxSettings/#beforeopen) event triggers before opening the popup.

```javascript
import { Component } from "@angular/core";
import { RibbonComboBoxSettingsModel } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Font">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="ComboBox" [comboBoxSettings]="fontstyleSettings">
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
    public fontStyle: string[] = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia", "Impact", "Segoe Print", "Segoe Script", "Segoe UI", "Symbol", "Times New Roman", "Verdana", "Windings"];
    public fontstyleSettings: RibbonComboBoxSettingsModel = { dataSource: this.fontStyle, index: 3, width: '150px', allowFiltering: true, 
    beforeOpen: (args) => { 
        // Your required action here
    } };
}
```

## Dropdown item events

### beforeClose

The [beforeClose](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonDropDownSettings/#beforeclose) event is triggered before closing the DropDownButton popup.

```javascript
import { Component } from "@angular/core";
import { RibbonDropDownSettingsModel } from '@syncfusion/ej2-angular-ribbon';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';
@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Tables">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="DropDown" [dropDownSettings]="tableSettings">
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
    public tableOptions: ItemModel[] = [{ text: "Insert Table" }, { text: "This device" }, { text: "Convert Table" }, { text: "Excel SpreadSheet" }];
   public tableSettings: RibbonDropDownSettingsModel = { iconCss: "e-icons e-table", content: "Table", items: this.tableOptions, beforeClose: (args) => { 
        // Your required action here
    } };
}
```

### beforeOpen

The [beforeOpen](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonDropDownSettings/#beforeopen) event is triggered before opening the DropDownButton popup.

```javascript
import { Component } from "@angular/core";
import { RibbonDropDownSettingsModel } from '@syncfusion/ej2-angular-ribbon';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';
@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Tables">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="DropDown" [dropDownSettings]="tableSettings">
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
    public tableOptions: ItemModel[] = [{ text: "Insert Table" }, { text: "This device" }, { text: "Convert Table" }, { text: "Excel SpreadSheet" }];
    public tableSettings: RibbonDropDownSettingsModel = { iconCss: "e-icons e-table", content: "Table", items: this.tableOptions, beforeOpen: (args) => { 
        // Your required action here
    } };
}
```

### beforeItemRender

The [beforeItemRender](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonDropDownSettings/#beforeitemrender) event is triggered while rendering each Popup item of DropDownButton.

```javascript
import { Component } from "@angular/core";
import { RibbonDropDownSettingsModel } from '@syncfusion/ej2-angular-ribbon';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';
@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Tables">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="DropDown" [dropDownSettings]="tableSettings">
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
    public tableOptions: ItemModel[] = [{ text: "Insert Table" }, { text: "This device" }, { text: "Convert Table" }, { text: "Excel SpreadSheet" }];
    public tableSettings: RibbonDropDownSettingsModel = { iconCss: "e-icons e-table", content: "Table", items: this.tableOptions, beforeItemRender: (args) => { 
        // Your required action here
    } };
    }
```

### open

The [open](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonDropDownSettings/#open) event is triggered while opening the DropDownButton popup.

```javascript
import { Component } from "@angular/core";
import { RibbonDropDownSettingsModel } from '@syncfusion/ej2-angular-ribbon';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';
@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Tables">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="DropDown" [dropDownSettings]="tableSettings">
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
    public tableOptions: ItemModel[] = [{ text: "Insert Table" }, { text: "This device" }, { text: "Convert Table" }, { text: "Excel SpreadSheet" }];
    public tableSettings: RibbonDropDownSettingsModel = { iconCss: "e-icons e-table", content: "Table", items: this.tableOptions, open: (args) => { 
        // Your required action here
    } };
}
```

### close

The [close](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonDropDownSettings/#close) event is triggered while closing the DropDownButton popup.

```javascript
import { Component } from "@angular/core";
import { RibbonDropDownSettingsModel } from '@syncfusion/ej2-angular-ribbon';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';
@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Tables">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="DropDown" [dropDownSettings]="tableSettings">
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
    public tableOptions: ItemModel[] = [{ text: "Insert Table" }, { text: "This device" }, { text: "Convert Table" }, { text: "Excel SpreadSheet" }];
    public tableSettings: RibbonDropDownSettingsModel = { iconCss: "e-icons e-table", content: "Table", items: this.tableOptions, close: (args) => { 
        // Your required action here
    } };
}
```

### created

The [created](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonDropDownSettings/#created) event is triggered while DropDownButton popup is created.

```javascript
import { Component } from "@angular/core";
import { RibbonDropDownSettingsModel } from '@syncfusion/ej2-angular-ribbon';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';
@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Tables">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="DropDown" [dropDownSettings]="tableSettings">
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
    public tableOptions: ItemModel[] = [{ text: "Insert Table" }, { text: "This device" }, { text: "Convert Table" }, { text: "Excel SpreadSheet" }];
    public tableSettings: RibbonDropDownSettingsModel = { iconCss: "e-icons e-table", content: "Table", items: this.tableOptions, close: (args) => { 
        // Your required action here
    } };
}
```

### select

The [select](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonDropDownSettings/#select) event is triggered while selecting an action item in DropDownButton popup.

```javascript
import { Component } from "@angular/core";
import { RibbonDropDownSettingsModel } from '@syncfusion/ej2-angular-ribbon';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';
@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Tables">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="DropDown" [dropDownSettings]="tableSettings">
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
    public tableOptions: ItemModel[] = [{ text: "Insert Table" }, { text: "This device" }, { text: "Convert Table" }, { text: "Excel SpreadSheet" }];
    public tableSettings: RibbonDropDownSettingsModel = { iconCss: "e-icons e-table", content: "Table", items: this.tableOptions, select: (args) => { 
        // Your required action here
    } };
}
```

## Split button item events

### beforeClose

The [beforeClose](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonSplitButtonSettings/#beforeclose) event is triggered before closing the SplitButton popup.

```javascript
import { Component } from "@angular/core";
import { RibbonSplitButtonSettingsModel } from '@syncfusion/ej2-angular-ribbon';
@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Clipboard">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="SplitButton" [splitButtonSettings]="pasteSettings"></e-ribbon-item>
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
    public pasteSettings: RibbonSplitButtonSettingsModel = { iconCss: "e-icons e-paste", items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }], content: "Paste", 
    beforeClose: () => { 
        // Your required action here
    } };
}
```

### beforeOpen

The [beforeOpen](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonSplitButtonSettings/#beforeopen) event is triggered before opening the SplitButton popup.

```javascript
import { Component } from "@angular/core";
import { RibbonSplitButtonSettingsModel } from '@syncfusion/ej2-angular-ribbon';
@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Clipboard">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="SplitButton" [splitButtonSettings]="pasteSettings"></e-ribbon-item>
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
    public pasteSettings: RibbonSplitButtonSettingsModel = { iconCss: "e-icons e-paste", items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }], content: "Paste", 
    beforeOpen: () => { 
        // Your required action here
    } };
}
```

### beforeItemRender

The [beforeItemRender](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonSplitButtonSettings/#beforeitemrender) event is triggered while rendering each Popup item of SplitButton.

```javascript
import { Component } from "@angular/core";
import { RibbonSplitButtonSettingsModel } from '@syncfusion/ej2-angular-ribbon';
@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Clipboard">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="SplitButton" [splitButtonSettings]="pasteSettings"></e-ribbon-item>
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
    public pasteSettings: RibbonSplitButtonSettingsModel = { iconCss: "e-icons e-paste", items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }], content: "Paste", 
    beforeItemRender: () => { 
        // Your required action here
    } };
}
```

### open

The [open](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonSplitButtonSettings/#open) event is triggered while opening the SplitButton popup.

```javascript
import { Component } from "@angular/core";
import { RibbonSplitButtonSettingsModel } from '@syncfusion/ej2-angular-ribbon';
@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Clipboard">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="SplitButton" [splitButtonSettings]="pasteSettings"></e-ribbon-item>
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
    public pasteSettings: RibbonSplitButtonSettingsModel = { iconCss: "e-icons e-paste", items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }], content: "Paste", 
    open: () => { 
        // Your required action here
    } };
}
```

### close

The [close](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonSplitButtonSettings/#close) event is triggered while opening the SplitButton popup.

```javascript
import { Component } from "@angular/core";
import { RibbonSplitButtonSettingsModel } from '@syncfusion/ej2-angular-ribbon';
@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Clipboard">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="SplitButton" [splitButtonSettings]="pasteSettings"></e-ribbon-item>
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
    public pasteSettings: RibbonSplitButtonSettingsModel = { iconCss: "e-icons e-paste", items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }], content: "Paste", 
    close: () => { 
        // Your required action here
    } };
}
```

### created

The [created](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonSplitButtonSettings/#created) event is triggered while selecting an action item in SplitButton popup.

```javascript
import { Component } from "@angular/core";
import { RibbonSplitButtonSettingsModel } from '@syncfusion/ej2-angular-ribbon';
@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Clipboard">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="SplitButton" [splitButtonSettings]="pasteSettings"></e-ribbon-item>
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
    public pasteSettings: RibbonSplitButtonSettingsModel = { iconCss: "e-icons e-paste", items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }], content: "Paste", 
    created: () => { 
        // Your required action here
    } };
}
```

### select

The [select](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonSplitButtonSettings/#select) event is triggered while selecting an action item in SplitButton popup.

```javascript
import { Component } from "@angular/core";
import { RibbonSplitButtonSettingsModel } from '@syncfusion/ej2-angular-ribbon';
@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Clipboard">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="SplitButton" [splitButtonSettings]="pasteSettings"></e-ribbon-item>
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
    public pasteSettings: RibbonSplitButtonSettingsModel = { iconCss: "e-icons e-paste", items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }], content: "Paste", 
    select: (args) => { 
        // Your required action here
    } };
}
```

### click

The [click](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonSplitButtonSettings/#click) event is triggered while clicking the primary button in SplitButton.

```javascript
import { Component } from "@angular/core";
import { RibbonSplitButtonSettingsModel } from '@syncfusion/ej2-angular-ribbon';
@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Clipboard">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="SplitButton" [splitButtonSettings]="pasteSettings"></e-ribbon-item>
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
    public pasteSettings: RibbonSplitButtonSettingsModel = { iconCss: "e-icons e-paste", items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }], content: "Paste", 
    click: (args) => { 
        // Your required action here
    } };
}
```

## File menu events

### beforeClose

The [beforeClose](https://ej2.syncfusion.com/angular/documentation/api/ribbon/fileMenuSettings/#beforeclose) event is triggered before closing the file menu popup.

```javascript
import { Component } from "@angular/core";
import { RibbonButtonSettingsModel, FileMenuSettingsModel } from '@syncfusion/ej2-angular-ribbon';
import { MenuItemModel } from "@syncfusion/ej2-navigations";
@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon" [fileMenu]='fileSettings'>
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Clipboard">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="Button" [buttonSettings]="cutButton">
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
    public fileOptions: MenuItemModel[] = [{ text: "New", iconCss: "e-icons e-file-new", id: "new" },
    { text: "Open", iconCss: "e-icons e-folder-open", id: "Open" },
    { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
    { text: "Save as", iconCss: "e-icons e-save", id: "save" }]
    public fileSettings: FileMenuSettingsModel = {
        menuItems: this.fileOptions,
        visible: true,
        beforeClose: () => { 
            // Your required action here
        }
    };
}
```

### beforeOpen

The [beforeOpen](https://ej2.syncfusion.com/angular/documentation/api/ribbon/fileMenuSettings/#beforeopen) event is triggered before Opening the file menu popup.

```javascript
import { Component } from "@angular/core";
import { RibbonButtonSettingsModel, FileMenuSettingsModel } from '@syncfusion/ej2-angular-ribbon';
import { MenuItemModel } from "@syncfusion/ej2-navigations";
@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon" [fileMenu]='fileSettings'>
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Clipboard">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="Button" [buttonSettings]="cutButton">
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
    public fileOptions: MenuItemModel[] = [{ text: "New", iconCss: "e-icons e-file-new", id: "new" },
    { text: "Open", iconCss: "e-icons e-folder-open", id: "Open" },
    { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
    { text: "Save as", iconCss: "e-icons e-save", id: "save" }]
    public fileSettings: FileMenuSettingsModel = {
        menuItems: this.fileOptions,
        visible: true,
        beforeOpen: () => { 
            // Your required action here
        }
    };
}
```

### beforeItemRender

The [beforeItemRender](https://ej2.syncfusion.com/angular/documentation/api/ribbon/fileMenuSettings/#beforeitemrender) event is triggered while rendering each ribbon file menu item.

```javascript
import { Component } from "@angular/core";
import { RibbonButtonSettingsModel, FileMenuSettingsModel } from '@syncfusion/ej2-angular-ribbon';
import { MenuItemModel } from "@syncfusion/ej2-navigations";
@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon" [fileMenu]='fileSettings'>
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Clipboard">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="Button" [buttonSettings]="cutButton">
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
    public fileOptions: MenuItemModel[] = [{ text: "New", iconCss: "e-icons e-file-new", id: "new" },
    { text: "Open", iconCss: "e-icons e-folder-open", id: "Open" },
    { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
    { text: "Save as", iconCss: "e-icons e-save", id: "save" }]
    public fileSettings: FileMenuSettingsModel = {
        menuItems: this.fileOptions,
        visible: true,
        beforeItemRender: () => { 
            // Your required action here
        }
    };
}
```

### open

The [open](https://ej2.syncfusion.com/angular/documentation/api/ribbon/fileMenuSettings/#open) event is triggered when file menu popup is opened.

```javascript
import { Component } from "@angular/core";
import { RibbonButtonSettingsModel, FileMenuSettingsModel } from '@syncfusion/ej2-angular-ribbon';
import { MenuItemModel } from "@syncfusion/ej2-navigations";
@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon" [fileMenu]='fileSettings'>
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Clipboard">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="Button" [buttonSettings]="cutButton">
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
    public fileOptions: MenuItemModel[] = [{ text: "New", iconCss: "e-icons e-file-new", id: "new" },
    { text: "Open", iconCss: "e-icons e-folder-open", id: "Open" },
    { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
    { text: "Save as", iconCss: "e-icons e-save", id: "save" }]
    public fileSettings: FileMenuSettingsModel = {
        menuItems: this.fileOptions,
        visible: true,
        open: () => { 
            // Your required action here
        }
    };
}
```

### close

The [close](https://ej2.syncfusion.com/angular/documentation/api/ribbon/fileMenuSettings/#close) event is triggered when file menu popup is closed.

```javascript
import { Component } from "@angular/core";
import { RibbonButtonSettingsModel, FileMenuSettingsModel } from '@syncfusion/ej2-angular-ribbon';
import { MenuItemModel } from "@syncfusion/ej2-navigations";
@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon" [fileMenu]='fileSettings'>
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Clipboard">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="Button" [buttonSettings]="cutButton">
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
    public fileOptions: MenuItemModel[] = [{ text: "New", iconCss: "e-icons e-file-new", id: "new" },
    { text: "Open", iconCss: "e-icons e-folder-open", id: "Open" },
    { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
    { text: "Save as", iconCss: "e-icons e-save", id: "save" }]
    public fileSettings: FileMenuSettingsModel = {
        menuItems: this.fileOptions,
        visible: true,
        close: () => { 
            // Your required action here
        }
    };
}
```

### select

The [select](https://ej2.syncfusion.com/angular/documentation/api/ribbon/fileMenuSettings/#select) event is triggered while selecting an item in ribbon file menu.

```javascript
import { Component } from "@angular/core";
import { RibbonButtonSettingsModel, FileMenuSettingsModel } from '@syncfusion/ej2-angular-ribbon';
import { MenuItemModel } from "@syncfusion/ej2-navigations";
@Component({
  selector: "app-root",
  template: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon" [fileMenu]='fileSettings'>
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Clipboard">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="Button" [buttonSettings]="cutButton">
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
    public fileOptions: MenuItemModel[] = [{ text: "New", iconCss: "e-icons e-file-new", id: "new" },
    { text: "Open", iconCss: "e-icons e-folder-open", id: "Open" },
    { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
    { text: "Save as", iconCss: "e-icons e-save", id: "save" }]
    public fileSettings: FileMenuSettingsModel = {
        menuItems: this.fileOptions,
        visible: true,
        select: () => { 
            // Your required action here
        }
    };
}
```