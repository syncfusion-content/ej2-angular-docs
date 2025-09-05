---
layout: post
title: Ribbon Items in Angular Ribbon component | Syncfusion
description:  Learn here all about Items in Syncfusion Angular Ribbon component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ribbon
documentation: ug
domainurl: ##DomainURL##
---

# Items in the Angular Ribbon Component

The Ribbon component renders various built-in items based on the [type](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItemType/) property of a ribbon-item. By default, this property is set to `Button`, which renders a standard Button item.

## Built-in Items

Render the built-in Ribbon items using the `<e-ribbon-item>` tag. Specify the desired item by setting its [type](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#type) property.

The following table describes the available built-in items and their functions:

| Built-in Ribbon Item | Action |
|----------------------|---------|
| Button | Renders a clickable button. |
| CheckBox | Renders a checkbox for binary selection. |
| DropDown | Renders a dropdown button with a popup list. |
| SplitButton | Renders a button with a primary action and a secondary dropdown list. |
| ComboBox | Renders a combo box for selection from a list of options. |
| ColorPicker | Renders a color picker for color selection. |
| GroupButton | Renders a group of related buttons. |

### Button items

To render a `Button` item, set the [type](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#type) property to `Button`. You can customize its appearance and behavior using the [RibbonButtonSettingsModel](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonButtonSettingsModel/), which includes options like `iconCss`, `content`, and `isToggle`.

#### Toggle button

The [isToggle](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonButtonSettingsModel/#istoggle) property can be used to define whether the button act as a toggle button or not. By default, the value is `false`.

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

### CheckBox Items

To render a `CheckBox`, set the [type](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#type) property to `CheckBox`. Customize it using the [RibbonCheckBoxSettingsModel](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonCheckBoxSettingsModel/), which provides options for `label`, `labelPosition`, and `checked` state.

#### Checkbox state

You can use the [checked](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonCheckBoxSettingsModel/#checked) property to handle the checked or unchecked state. By default, the value is `false`.

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

#### Defining label

You can use the [label](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonCheckBoxSettingsModel/#label) property to add a caption for the CheckBox. The label position can be set `Before` or `After`, by using the [labelPosition](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonCheckBoxSettingsModel/#labelposition) property. By default, the labelPosition is `After`.

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

### DropDown Button Items

To render a `DropDownButton`, set the [type](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#type) property to `DropDown`. Customize it using the [RibbonDropDownSettingsModel](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonDropDownSettingsModel/), which includes `items`, `iconCss`, `content`, and a `target` for the popup content.

#### Target

The [target](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonDropDownSettingsModel/#target) property specifies the element selector for the content to be displayed in the DropDownButton popup.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/DropdownTarget/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/DropdownTarget/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/DropdownTarget/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/DropdownTarget" %}

#### Customize Dropdown Button Item

Apply a custom CSS class to style dropdown items using the [beforeItemRender](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonDropDownSettings/#beforeitemrender) event.

The following sample showcases how to customize a specific dropdown item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/DropDownCustomItem/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/DropDownCustomItem/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/DropDownCustomItem/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/ribbon/DropDownCustomItem/src/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/DropDownCustomItem" %}

#### Create Dropdown Popup On-Demand

Set the [createPopupOnClick](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonDropDownSettings/#createpopuponclick) property to `true` to create the popup only when the dropdown is opened, optimizing performance.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/DropDownPopup/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/DropDownPopup/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/DropDownPopup/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/DropDownPopup" %}

### Split Button Items

To render a `SplitButton`, set the [type](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#type) property to `SplitButton`. Customize it with the [RibbonSplitButtonSettingsModel](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonSplitButtonSettingsModel/), which provides options like `iconCss`, `items`, and `target`.

#### Target

The [target](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonSplitButtonSettingsModel/#target) property specifies the element selector to be displayed in the SplitButton popup.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/SplitButtonTarget/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/SplitButtonTarget/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/SplitButtonTarget/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/SplitButtonTarget" %}

### ComboBox Items

To render a `ComboBox` item, set the [type](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#type) property to `ComboBox`. You can configure it using the [RibbonComboBoxSettingsModel](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonComboBoxSettingsModel/), which provides options such as `allowFiltering`, `autoFill`, `index`, `sortOrder` and more.

#### Filtering

You can use the [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonComboBoxSettingsModel/#allowfiltering) property to filter the data items. The filtering operation is initiated automatically, as soon as you start typing characters. If no match is found the value of the `noRecordsTemplate` property will be displayed. By default, the value is `false`.

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

You can use the [index](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonComboBoxSettingsModel/#index) property to get or set the selected item in the combobox.

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

You can use the [sortOrder](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonComboBoxSettingsModel/#sortorder) property to specify the order in which the DataSource should be sorted.

<table>
  <tr>
    <td>`None`</td>
    <td>The data source is not sorted.</td>
  </tr>
  <tr>
    <td>`Ascending`</td>
    <td>The data source is sorted in ascending order.</td>
  </tr>
  <tr>
    <td>`Descending`</td>
    <td>The data source is sorted in descending order.</td>
  </tr>
</table>

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/ComboboxItem/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/ComboboxItem/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/ComboboxItem/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/ComboboxItem" %}

### Colorpicker items

To render a `ColorPicker`, set the [type](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#type) property to `ColorPicker`. Customize it using the [RibbonColorPickerSettingsModel](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonColorPickerSettingsModel/), which includes properties like `value`, `columns`, and `showButtons`.

#### Value

You can use the [value](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonColorPickerSettingsModel/#value) property to specify the color value. The value should be specified as Hex code.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/ColorPickerItem/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/ColorPickerItem/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/ColorPickerItem/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/ColorPickerItem" %}

### GroupButton Items

To render a `GroupButton`, set the [type](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#type) property to `GroupButton`. Configure its items and selection behavior using the [RibbonGroupButtonSettingsModel](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGroupButtonSettingsModel/).

#### Items

You can render the groupbutton items by using the `<e-ribbon-item>` tag directive. You can also customize the groupbutton items through [RibbonGroupButtonItemModel](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGroupButtonItemModel/), which provides options such as `content`, `iconCss`, `selected` and more.

#### Item content

You can use the [content](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGroupButtonItemModel/#content) property to define the text content for the groupbutton.

```javascript
import { Component } from "@angular/core";
import {RibbonItemSize, RibbonGroupButtonSettingsModel } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: "app-root",
  templateUrl: `<!-- To Render Ribbon. -->
    <ejs-ribbon id="ribbon">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Paragraph" >
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="GroupButton" [allowedSizes]="mediumSize" [groupButtonSettings]="groupButtonContent">
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
  public groupButtonContent: RibbonGroupButtonSettingsModel = {
    items: [
      {iconCss: 'e-icons e-align-left', content: 'Align Left'},
      {iconCss: 'e-icons e-align-center', content: 'Align Center'}, 
      {iconCss: 'e-icons e-align-right', content: 'Align Right'}, 
      {iconCss: 'e-icons e-justify', content: 'Justify'}
    ]
  }

  public mediumSize: RibbonItemSize = RibbonItemSize.Medium;
}

```

#### Icon only

You can use the [iconCss](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGroupButtonItemModel/#iconcss) property to customize the groupbutton icon. If the `iconCss` property is not defined, the groupbutton will not be rendered.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/GroupButtonIcon/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/GroupButtonIcon/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/GroupButtonIcon/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/GroupButtonIcon" %}



#### Selection

You can use the [selected](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGroupButtonItemModel/#selected) property to select the groupbutton item initally. When set to `true`, the button will be selected. By default the `selected` property is false.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/GroupButtonSelected/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/GroupButtonSelected/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/GroupButtonSelected/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/GroupButtonSelected" %}

#### Single selection

You can set the [selection](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGroupButtonSettingsModel/#selection) property value as `RibbonGroupButtonSelection.Single` to make one selection at a time. It automatically deselects the previous choice when a different item is clicked.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/SingleSelection/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/SingleSelection/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/SingleSelection/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/SingleSelection" %}

#### Multiple selection

You can set the [selection](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGroupButtonSettingsModel/#selection) property value as `RibbonGroupButtonSelection.Multiple` to select more than one button at a time. Users can select a button one by one to select multiple buttons.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/MultipleSelection/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/MultipleSelection/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/MultipleSelection/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/MultipleSelection" %}

#### Groupbutton in simplified mode layout

In simplified mode, the groupbutton will be rendered as a dropdownbutton. The dropdownbutton icon will be updated based on the button item selected. The initial button icon will be the set, if none of the buttons are selected.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/SimplifiedModeGroupButton/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/SimplifiedModeGroupButton/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/SimplifiedModeGroupButton/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/SimplifiedModeGroupButton" %}

## Custom Items

To create custom Ribbon items, set the [type](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#type) property to `Template`. This allows you to render any HTML content or non-built-in components, offering maximum flexibility.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Custom-Item/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Custom-Item/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Custom-Item/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/ribbon/Custom-Item/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Custom-Item" %}

## Item Display Options

Use the [displayOptions](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#displayoptions) property to control in which Ribbon layouts an item appears.

| Option | Description |
|------------|----------------------------------------------------------------------|
| `Auto` | (Default) The item is displayed in all layouts. |
| `Classic` | The item is displayed only in the classic layout. |
| `Simplified` | The item is displayed only in the simplified layout. |
| `Overflow` | The item is displayed only in the overflow popup. |

### Display items in Classic only

To display the items only in the classic layout group, set the mode as `DisplayMode.Classic` in the [displayOptions](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#displayoptions) property.

```javascript

import { Component } from "@angular/core";
import { RibbonButtonSettingsModel, DisplayMode } from '@syncfusion/ej2-angular-ribbon';

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
                                    <e-ribbon-item [displayOptions]='buttonDisplayMode' type="Button" [buttonSettings]="cutButton">
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
  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" };
  public buttonDisplayMode: DisplayMode = DisplayMode.Classic;
}

```

### Display items in Simplified only

To display the items only in the simplified layout group, set the mode as `DisplayMode.Simplified` in the [displayOptions](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#displayoptions) property.

```javascript

import { Component } from "@angular/core";
import { RibbonButtonSettingsModel, DisplayMode } from '@syncfusion/ej2-angular-ribbon';

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
                                    <e-ribbon-item [displayOptions]='buttonDisplayMode' type="Button" [buttonSettings]="cutButton">
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
  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" };
  public buttonDisplayMode: DisplayMode = DisplayMode.Simplified;
}

```

### Display items in Overflow popup only

To display the items only in the overflow, set the mode as `DisplayMode.Overflow` in the [displayOptions](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#displayoptions) property.

```javascript

import { Component } from "@angular/core";
import { RibbonButtonSettingsModel, DisplayMode } from '@syncfusion/ej2-angular-ribbon';

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
                                    <e-ribbon-item [displayOptions]='buttonDisplayMode' type="Button" [buttonSettings]="cutButton">
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
  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" };
  public buttonDisplayMode: DisplayMode = DisplayMode.Overflow;
}

```

## Enable or Disable Items

Use the [disabled](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#disabled) property to enable or disable a Ribbon item. When set to `true`, the item becomes non-interactive.

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
                                    <e-ribbon-item type=CheckBox [checkBoxSettings]="ruler">
                                    </e-ribbon-item> 
                                    <e-ribbon-item type="DropDown" [dropDownSettings]="tableSettings">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="SplitButton" [splitButtonSettings]="tableSettings">
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
    public ruler: RibbonCheckBoxSettingsModel = { label: "Ruler", checked: true };
    public tableSettings: RibbonDropDownSettingsModel = { iconCss: "e-icons e-table", content: "Table"};
}

```