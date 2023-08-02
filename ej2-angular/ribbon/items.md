---
layout: post
title: Items in Angular Ribbon component | Syncfusion
description:  Learn here all about Items in Syncfusion Angular Ribbon component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ribbon
documentation: ug
domainurl: ##DomainURL##
---

# Ribbon Items

## Built-in Ribbon items

By using the [Items](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonCollectionDirective/#items) property, the ribbon items type should be specified in the [type](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItemDirective/#type) property to define the built-in items.

The following items can be rendered as built in items

| Built-in Ribbon Items | Actions |
|------------------------|---------|
| Button | Renders button as ribbon item.|
| CheckBox | Renders checkbox as ribbon item.|
| DropDown | Renders dropdownbutton as ribbon item.|
| SplitButton | Renders splitbutton as ribbon item.|
| ComboBox | Renders combobox as ribbon item.|
| ColorPicker | Renders color picker as ribbon item.|

### Button

By setting the [type](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#type) property to `Button` you can render a Button item. You can also customize the button item using the [ribbonButtonSettingsModel](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonButtonSettingsModel/) which provides options such as `iconCss`, `content`, `isToggle` and more.

#### Toggle Button

The [isToggle](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonButtonSettingsModel/#istoggle) property can be used to define whether the button is a toggle button or not. By default the value is `false`.

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
                    <e-ribbon-group header="Clipboard" >
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
export class AppComponent  {
  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut", isToggle: true };
}

```

### CheckBox

By setting the [type](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#type) property to `CheckBox` you can render a CheckBox item. You can also customize the CheckBox item using the [ribbonCheckBoxSettingsModel](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonCheckBoxSettingsModel/) which provides options such as `labelPosition`, `label`, `checked` and more.

#### CheckBox State

The [checked](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonCheckBoxSettingsModel/#checked) property is used to handle the checked and unchecked state. The CheckBox will display a tick mark when it is checked. By default the value is `false`.

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
                    <e-ribbon-group header="Clipboard" >
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
    public ruler: RibbonCheckBoxSettingsModel = { label: "Ruler", checked: true };
}

```

#### Label and label Position

The [label](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonCheckBoxSettingsModel/#label) property can handle the caption for a CheckBox. This helps in reducing the need for manually adding a separate label element.
The [labelPosition](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonCheckBoxSettingsModel/#labelposition) property can be used to alter the position of the label relative to the CheckBox, whether it should appear before or after the CheckBox.

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
                    <e-ribbon-group header="Clipboard" >
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
    public ruler: RibbonCheckBoxSettingsModel = { label: "Ruler", checked: true, labelPosition: "Before" };
}

```

### DropDown

By setting the [type](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#type) property to `DropDown` you can render a DropDown item. You can also customize the DropDown item through [ribbonDropDownSettingsModel](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonDropDownSettingsModel/) which provides options such as `iconCss`, `content`, `target` and more.

#### Target

The [target](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonDropDownSettingsModel/#target) property specifies the element selector to be shown in the DropDownButton popup.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/DropdownTarget/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/DropdownTarget/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/DropdownTarget/app/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/DropdownTarget/app/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ribbon/DropdownTarget" %}

### SplitButton

By setting the [type](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#type) property to `SplitButton` you can render a SplitButton item. You can also customize the SplitButton item through [ribbonSplitButtonSettingsModel](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonSplitButtonSettingsModel/) which provides options such as `iconCss`, `items`, `target` and more.

#### Target

The [target](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonSplitButtonSettingsModel/#target) property specifies the element selector to be shown in the SplitButton popup.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/SplitButtonTarget/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/SplitButtonTarget/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/SplitButtonTarget/app/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/SplitButtonTarget/app/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ribbon/SplitButtonTarget" %}

### ComboBox

By setting the [type](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#type)property to `ComboBox` you can render a ComboBox item. You can also customize the ComboBox item through [ribbonComboBoxSettingsModel](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonComboBoxSettingsModel/) which provides options such as `allowFiltering`, `autoFill`, `index`, `sortOrder` and more.

#### Filtering

The [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonComboBoxSettingsModel/#allowfiltering) property provides built-in support for filtering data items. The filtering operation is initiated automatically, as soon as you start typing characters. If no match is found, the value of the `noRecordsTemplate` property will be displayed. By default the value is `false`.

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
                    <e-ribbon-group header="Clipboard" >
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
    public fontstyleSettings: RibbonComboBoxSettingsModel = { dataSource: this.fontStyle, index: 3, allowFiltering: true };
}

```

#### Index

The [index](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonComboBoxSettingsModel/#index) property can be used to specify the index of the selected item in the combobox.

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
                    <e-ribbon-group header="Clipboard" >
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
    public fontstyleSettings: RibbonComboBoxSettingsModel = { dataSource: this.fontStyle, index: 3 };
}

```

#### SortOrder

The [sortOrder](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonComboBoxSettingsModel/#sortorder) property is used to select the order in which the DataSource should be sorted.

`None` - The data source is not sorted.
`Ascending` - The data source is sorted in ascending order.
`Descending` - The data source is sorted in descending order.

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
                    <e-ribbon-group header="Clipboard" >
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
    public fontstyleSettings: RibbonComboBoxSettingsModel = { dataSource: this.fontStyle, index: 3, sortOrder: "Descending" };
}

```

### ColorPicker

By setting the [type](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#type) property to `ColorPicker` you can render the ColorPicker item. You can also customize the ColorPicker item through [ribbonColorPickerSettingsModel](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonColorPickerSettingsModel/) which provides options such as `value`, `columns`, `showButtons` and more.

#### Value

By using the [value](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonColorPickerSettingsModel/#value) property you can specify the value color. The value should be a valid hex color code.

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
                    <e-ribbon-group header="Clipboard" >
                        <e-ribbon-collections>
                            <e-ribbon-collection id="paste-collection">
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
    public colorSettings: RibbonColorPickerSettingsModel = { value: '#123456' };
}

```

## Custom Ribbon items

The [type](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#type) property can be set to `Template` to customize ribbon items with non-built-in items. It can be used to define the custom template for the ribbon item, which has the flexibility to create unique and personalized content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Custom-Item/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/Custom-Item/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Custom-Item/app/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Custom-Item/app/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/ribbon/Custom-Item/app/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ribbon/Custom-Item" %}

## Display Mode

### Display Options 

By setting the [displayOptions](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#displayoptions) property you can determines how an item is displayed in different ribbon layouts.

`Auto` - The item is displayed in the classic layout group, simplified layout group, and overflow popup based on the ribbon's overflow state.
`Classic` - The item is displayed only in the classic layout group.
`Overflow` - The item is displayed only in the overflow popup.
`Simplified` - The item is displayed only in the simplified layout group.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/DisplayOptions/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/DisplayOptions/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/DisplayOptions/app/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/DisplayOptions/app/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ribbon/DisplayOptions" %}

## Enable or disable items

The [disabled](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#disabled) property can be used to disable an item. The item will be disabled and prevents the user interaction when set to `true`. By default the value is `false`.

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
                    <e-ribbon-group header="Clipboard" >
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item [disabled]="true" type="Button" [buttonSettings]="cutButton">
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
export class AppComponent  {
    public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut", isToggle: true };
}

```