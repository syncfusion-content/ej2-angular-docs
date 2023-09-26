---
layout: post
title: Modules in Angular Ribbon component | Syncfusion
description:  Learn here all about Modules in Syncfusion Angular Ribbon component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ribbon
documentation: ug
domainurl: ##DomainURL##
---

# Modules in Ribbon component

The following modules are available in Ribbon. If the module injection type is **selective**, manual injection is required to extend the Ribbon's functionality.

| Module | Description | Module Injection Type |
|------|-------------|------|
| `RibbonButtonService` | To use the built-in button as a ribbon item. | default |
| `RibbonCheckBoxService` | To use the built-in checkbox as a ribbon item.| default |
| `RibbonDropDownService` | To use the built-in dropdown button as a ribbon item.| default |
| `RibbonSplitButtonService` | To use the built-in split button as a ribbon item.| default |
| `RibbonComboBoxService` | To use the built-in combobox as a ribbon item. | default |
| `RibbonColorPickerService` | Inject this module to use the built-in colorpicker as a ribbon item.| selective |
| `RibbonFileMenuService` | Inject this module to use the file menu feature.| selective |

These modules should be injected into the `providers` section of root `NgModule` or component class.

{% tabs %}
{% highlight ts tabtitle="app.module.ts" %}

import { RibbonColorPickerService, RibbonFileMenuService } from '@syncfusion/ej2-angular-ribbon';
@NgModule({
    providers: [ RibbonColorPickerService, RibbonFileMenuService ]
})

{% endhighlight %}
{% endtabs %}