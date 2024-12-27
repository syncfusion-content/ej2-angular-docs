---
layout: post
title: Item configuration in Angular Toolbar component | Syncfusion
description: Learn here all about Item configuration in Syncfusion Angular Toolbar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Item configuration 
documentation: ug
domainurl: ##DomainURL##
---

# Item configuration in Angular Toolbar component

The Toolbar can be rendered by defining an array of [`items`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/#items). Items can be constructed with the following built-in command types or item template.

## Button

`Button` is the default command [`type`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item/#type), and it can be rendered by using the [`text`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item/#text) property.
Properties of the button command type:

  Property   | Description
------------ | -------------
  [`text`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item/#text) | The text to be displayed for button.
 [`id`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item/#id) | The ID of the button to be rendered. If the ID is not given, auto ID is generated.
  [`prefixIcon`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item/#prefixicon) | Defines the class used to specify an icon for the button. The icon is `positioned before` the text if text is available or the icon alone button is rendered.
[`suffixIcon`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item/#suffixicon) | Defines the class used to specify an icon for the button. The icon is `positioned after` the text if text is available. If both [`prefixIcon`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item/#prefixicon) and [`suffixIcon`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item/#suffixicon) are specified, only `prefixIcon` is considered.
  [`width`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item/#width) | Used to set the [`width`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item/#width) of the button.
  [`align`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item/#align) | Specifies the location for aligning Toolbar items.

## Separator

The `Separator` type adds a vertical separation between the Toolbar's single/multiple commands.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/toolbar-items-cs5" %}

> If `Separator` is added as first or last item, it is not visible.

## Input

The `Input` type is only applicable for adding `template` elements when the [`template`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item/#template) property is defined as an `object`.
Input type creates an `input element` internally that acts as the container for `Syncfusion` input based components.

>Note: Set toolbar item **type** property value as `Input` only for Input components.

### NumericTextBox

* The `NumericTextBox` component can be included by importing the `NumericTextBox` module from `ej2-inputs`.

* Initialize the `NumericTextBox` in template property, in which the Toolbar item type set as `Input`.

* Related `NumericTextBox` component properties are also can be configured like as below.

```javascript
new NumericTextBox( { format: 'c2' }))
```

### DropDownList

* The `DropDownList` component can be included by importing the `DropDownList` module from `ej2-dropdowns`.

* Initialize the `DropDownList` in template property, in which the Toolbar item type set as `Input`.

* Related `DropDownList` component properties are also can be configured like as below.

```javascript
new DropDownList({ width:100 })
```

### CheckBox

* The `CheckBox` component can be included by importing the `CheckBox` module from `ej2-buttons`.

* Initialize the `CheckBox` in template property, in which the Toolbar item type set as `Input`.

* Related `CheckBox` component properties are also can be configured like as below.

```javascript
new CheckBox({ label: 'Checkbox', checked: true })
```

### RadioButton

* The `RadioButton` component can be included by importing the `RadioButton` module from `ej2-buttons`.

* Initialize the `RadioButton` in template property, in which the Toolbar item type set as `Input`.

* Related `RadioButton` component properties are also can be configured like as below.

```javascript
new RadioButton({ label: 'Radio', name: 'default', checked: true })
```

Above steps applicable for all 'Syncfusion' input based components.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/toolbar-items-cs6" %}

### Enabling tab key navigation in Toolbar

The [`tabIndex`](../api/toolbar/item/#tabindex) property of a Toolbar item is used to enable tab key navigation for the item. By default, the user can switch between items using the arrow keys, but the [`tabIndex`](../api/toolbar/item/#tabindex) property allows you to switch between items using the Tab and Shift+Tab keys as well.

To use the [`tabIndex`](../api/toolbar/item/#tabindex) property, you need to set it for each Toolbar item that you want to enable tab key navigation. The [`tabIndex`](../api/toolbar/item/#tabindex) property should be set to a positive integer value. A value of 0 or a negative value will disable tab key navigation for the item.

For example, to enable tab key navigation for two Toolbar items, you can use the following code:

```javascript
import { Component, ViewChild } from '@angular/core';
import { ToolbarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-container',
    template: `
        <ejs-toolbar>
          <e-items>
             <e-item text='item1' tabIndex=1></e-item>
             <e-item text='item2' tabIndex=2></e-item>
          </e-items>
        </ejs-toolbar>
        `
})

export class AppComponent {

}
```

With the above code, the user can switch between the two Toolbar items using the Tab and Shift+Tab keys, in addition to using the arrow keys. The items will be navigated in the order specified by the [`tabIndex`](../api/toolbar/item/#tabindex) values.

If you set the [`tabIndex`](../api/toolbar/item/#tabindex) value to 0 for all Toolbar items, tab key navigation will be based on the element order rather than the [`tabIndex`](../api/toolbar/item/#tabindex) values. For example:

```javascript
import { Component, ViewChild } from '@angular/core';
import { ToolbarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-container',
    template: `
        <ejs-toolbar>
          <e-items>
             <e-item text='item1' tabIndex=0></e-item>
             <e-item text='item2' tabIndex=0></e-item>
          </e-items>
        </ejs-toolbar>
        `
})

export class AppComponent {

}
```

In this case, the user can switch between the two Toolbar items using the Tab and Shift+Tab keys, and the items will be navigated in the order in which they appear in the DOM.

Example:

Here is an example of how you can use the [`tabIndex`](../api/toolbar/item/#tabindex) property to enable tab key navigation for a Toolbar component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toolbar/tab-key-navigation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/tab-key-navigation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/tab-key-navigation-cs1" %}

With the above code, the user can switch between the Toolbar items using the Tab and Shift+Tab keys, and the items will be navigated based on the element order.

## See Also

* [How to set item wise custom template](./how-to/set-item-wise-custom-template)