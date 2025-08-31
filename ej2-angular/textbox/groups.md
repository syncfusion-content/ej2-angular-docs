---
layout: post
title: Configure TextBox options in Angular TextBox | Syncfusion
description: Learn how to configure and use TextBox options in the Syncfusion Angular TextBox component to enhance user input and UI customization.
platform: ej2-angular
control: TextBox
documentation: ug
---

# Configure TextBox options in Angular TextBox

The Syncfusion Angular TextBox component provides essential features to enhance user experience, including a built-in clear button for quick input reset and the ability to configure custom HTML attributes. This guide covers these primary features along with additional state management capabilities.

## Add a clear button to the TextBox

The TextBox component includes a clear button feature that allows users to quickly reset the input value with a single click. The clear button automatically appears when the field contains text and disappears when the field is empty, providing a clean and intuitive user interface.

To enable the clear button functionality, set the [showClearButton](https://ej2.syncfusion.com/angular/documentation/api/textbox/#showclearbutton) property to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/textbox-component-clearicons-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/textbox-component-clearicons-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/textbox-component-clearicons-cs1" %}

## Set HTML attributes

The TextBox component supports standard HTML attributes through the [htmlAttributes](https://ej2.syncfusion.com/angular/documentation/api/textbox/#htmlattributes) property. This property accepts an object where keys represent attribute names and values represent the corresponding attribute values, allowing developers to add attributes such as `name`, `type`, `maxlength`, `placeholder`, `title`, and others directly to the input element.

When an attribute is configured through both a dedicated component property and the [htmlAttributes](https://ej2.syncfusion.com/angular/documentation/api/textbox/#htmlattributes) object, the component prioritizes the value set in the dedicated property.

The following example demonstrates how to configure common HTML attributes for a TextBox:

```typescript
import { Component } from '@angular/core';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
    imports: [TextBoxModule],
    standalone: true,
    selector: 'app-root',
    template: `
    <div style="margin-left: 25%; width: 240px; margin-top: 40px;">
        <h4>TextBox with HTML attributes</h4>
        <ejs-textbox [htmlAttributes]="htmlAttributes" placeholder="Enter password"></ejs-textbox>
    </div>
    `
})
export class AppComponent {
    public htmlAttributes: { [key: string]: string } = {
        name: 'userpassword',
        type: 'password',
        maxlength: '12',
        title: 'Enter your password'
    };
}
```

## Configure TextBox states

### Set the disabled state

To disable the TextBox and prevent user interaction, set the [enabled](https://ej2.syncfusion.com/angular/documentation/api/textbox/#enabled) property to `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/getting-started-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/getting-started-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/getting-started-cs8" %}

### Set the read-only state

To make the TextBox read-only while maintaining its visual appearance and allowing text selection, set the [readonly](https://ej2.syncfusion.com/angular/documentation/api/textbox/#readonly) property to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/getting-started-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/getting-started-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/getting-started-cs9" %}

## TextBox methods

### Focus management

Control the focus state of the TextBox programmatically using the focus methods:

- Use [`focusIn`](https://ej2.syncfusion.com/angular/documentation/api/textbox/#focusin) to set focus to the TextBox
- Use [`focusOut`](https://ej2.syncfusion.com/angular/documentation/api/textbox/#focusout) to remove focus from the TextBox

```typescript
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextBoxComponent, TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    imports: [TextBoxModule, FormsModule, ButtonModule],
    standalone: true,
    selector: 'app-root',
    template: `
        <div class="wrap">
            <ejs-textbox #textbox placeholder="Enter Name" floatLabelType="Auto"></ejs-textbox>
            <button ejs-button (click)='focusHandler()'>Focus In</button>
            <button ejs-button (click)='blurHandler()'>Focus Out</button>
        </div>
    `
})
export class AppComponent {
    @ViewChild('textbox')
    public textboxObj?: TextBoxComponent;

    public focusHandler(): void {
        this.textboxObj?.focusIn();
    }

    public blurHandler(): void {
        this.textboxObj?.focusOut();
    }
}
```

### Component life cycle methods

#### Destroy the component

The [`destroy`](https://ej2.syncfusion.com/angular/documentation/api/textbox/#destroy) method removes the component from the DOM and detaches all event handlers while maintaining the original input element. This method is useful when dynamically removing TextBox components.

```typescript
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextBoxComponent, TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    imports: [TextBoxModule, FormsModule, ButtonModule],
    standalone: true,
    selector: 'app-root',
    template: `
        <div class="wrap">
            <ejs-textbox #textbox placeholder="Enter Name" floatLabelType="Auto"></ejs-textbox>
            <button ejs-button (click)='destroyHandler()'>Destroy</button>
        </div>
    `
})
export class AppComponent {
    @ViewChild('textbox')
    public textboxObj?: TextBoxComponent;

    public destroyHandler(): void {
        this.textboxObj?.destroy();
    }
}
```

#### Get persist data

The [`getPersistData`](https://ej2.syncfusion.com/angular/documentation/api/textbox/#getpersistdata) method returns the properties that should be maintained in the persisted state. This is useful when implementing custom persistence logic.

```typescript
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextBoxComponent, TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    imports: [TextBoxModule, FormsModule, ButtonModule],
    standalone: true,
    selector: 'app-root',
    template: `
        <div class="wrap">
            <ejs-textbox #textbox placeholder="Enter Name" floatLabelType="Auto"></ejs-textbox>
            <button ejs-button (click)='getPersistDataHandler()'>Get Persist Data</button>
            <div>{{persistData}}</div>
        </div>
    `
})
export class AppComponent {
    @ViewChild('textbox')
    public textboxObj?: TextBoxComponent;
    public persistData: string|undefined;

    public getPersistDataHandler(): void {
        this.persistData = this.textboxObj?.getPersistData();
    }
}
```

## Add textbox programmatically in Angular Textbox component

The Angular Textbox component can be created programmatically using the `createInput` method from the `ej2-inputs` library. This approach is useful when building dynamic forms or when textbox elements need to be generated based on runtime conditions.

### Steps to create textbox programmatically

Follow these steps to create a textbox component programmatically:

### Step 1: Import the Input module

Import the `Input` modules from the `ej2-inputs` library as shown below.

```typescript
import {Input} from '@syncfusion/ej2-inputs';
```

### Step 2: Create the textbox using createInput method

Pass the HTML Input element as a parameter to the `createInput` method. This method transforms a standard HTML input element into a Syncfusion Textbox component with enhanced styling and functionality.

### Step 3: Add icons (optional)

Icons can be added to the input by passing the `buttons` property value with the class name `e-input-group-icon` as a parameter to the `createInput` method. This creates input groups with integrated icon buttons for enhanced user interaction.

### Implementation example

The following example demonstrates how to create textbox components programmatically with and without icons:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/getting-started-cs5" %}

### Use cases

Programmatic textbox creation is particularly beneficial in the following scenarios:

- Building dynamic forms where the number of input fields varies based on user selections
- Creating input components in response to API data or configuration changes
- Implementing custom form builders or survey applications
- Adding textbox elements to dynamically generated content areas