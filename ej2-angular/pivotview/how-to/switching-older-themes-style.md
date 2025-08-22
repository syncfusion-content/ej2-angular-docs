---
layout: post
title: Switching themes style in Angular Pivotview component | Syncfusion
description: Learn here all about Switching older themes style in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Switching older themes style 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->

# Switching older themes style in Angular Pivotview component

Since Volume 1, 2020, Syncfusion<sup style="font-size:70%">&reg;</sup> has revised the theming and layout of the Pivot Table. If you prefer the appearance of the earlier theme, you can revert to it by making specific changes. This guide explains how to restore the older theme's style by modifying the CSS to adjust cell background colors and set the row height to match the previous layout.

## CSS Selectors

In the current theme, cells are differentiated by their background colors. To avoid this, you need to override these background colors via simple CSS adjustments within your application. The following CSS selectors allow achieving the same for Material, Fabric, Bootstrap, and Bootstrap v4 themes:

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>       
       <!-- Codes here... -->
            <style>
                .e-pivotview .e-rowsheader, 
                .e-pivotview .e-columnsheader,
                .e-pivotview .e-gtot,
                .e-pivotview .e-content,
                .e-pivotview .e-gridheader,
                .e-pivotview .e-headercell {
                    background-color:#fff !important;
                }
            </style>
       </head>
       <body>
       </body>
  </html>

```

For the High Contrast theme, the following CSS is required:

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>       
       <!-- Codes here... -->
            <style>
                .e-pivotview .e-rowsheader, 
                .e-pivotview .e-columnsheader,
                .e-pivotview .e-gtot,
                .e-pivotview .e-content,
                .e-pivotview .e-gridheader,
                .e-pivotview .e-headercell {
                    background-color:#000 !important;
                }
            </style>
       </head>
       <body>
       </body>
  </html>

```

## Adjusting Row Height

In the current theme, the height of each Pivot Table row has been reduced to make the component more compact. Users can reset the height of the Pivot Table rows using the [`rowHeight`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#rowheight) property within [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/). In the older theme, this property was typically set to 36 pixels for desktop layouts and 48 pixels for mobile layouts. To replicate the older theme style, reset the [`rowHeight`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#rowheight) accordingly.

The following code sample demonstrates how to replicate the older theme style:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/switch-theme-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/switch-theme-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/switch-theme-cs1" %}
