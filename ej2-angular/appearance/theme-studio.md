---
layout: post
title: Theme studio in Angular Appearance component | Syncfusion
description: Learn here all about Theme studio in Syncfusion Angular Appearance component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Theme studio 
documentation: ug
domainurl: ##DomainURL##
---

# Theme Studio in Angular Appearance Component

The Theme Studio for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components offers the ability to customize existing themes. However, it does not support Data Visualization components like Chart, Diagram, Gauge, Range Navigator, or Maps.

## Customizing Theme Color in Theme Studio

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components are created using SCSS, with each theme containing unique common variables. By altering these variable color codes, styles across all Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components can be modified. These styles are influenced by these [theme-based common variables](../appearance/overview#common-variables), which are managed within the Theme Studio application.

**Step 1:** Visit the Theme Studio at [https://ej2.syncfusion.com/themestudio/](https://ej2.syncfusion.com/themestudio/?theme=tailwind3).

**Step 2:** The Theme Studio is divided into two sections: the components preview on the left, and the theme customization on the right.

![two-sections](images/two-pane.png)

**Step 3:** Use the color pickers in the customization section to choose your desired colors.

![color-picker](images/colorpicker.png)

**Step 4:** Once colors are selected, the Essential<sup style="font-size:70%">&reg;</sup> JS 2 components in the preview section will reflect the changes.

![customized](images/customized.png)

### Filtering a Specific List of Components

With Theme Studio, you can customize selected components. This is beneficial when focusing on a specific suite of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components in your application. The Studio filters these components to customize and decrease final output file size.

**Step 1:** Click the Filter icon in the top right, then choose components for theme customization.

![filter-icon](images/filter-icon.png)

**Step 2:** In the Filter dialog, click Apply. Only the chosen components will now appear in the preview section.

![filter-dialog](images/filter-dialog.png)

**Step 3:** Customize colors for the chosen components in the theme customization section.

![filter-customized](images/filter-customized.png)

### Download the Customized Theme

After customizing, you can download your theme styles.

**Step 1:** Click the Download button in the upper right. This opens the Download dialog.

![download-icon](images/download-icon.png)

**Step 2:** Enter a theme name in File Name and click Download. If using both Essential<sup style="font-size:70%">&reg;</sup> JS 1 and Essential<sup style="font-size:70%">&reg;</sup> JS 2 components, check "Include compatibility CSS" to ensure compatibility with Essential<sup style="font-size:70%">&reg;</sup> JS 1 styles. More details are available [here](https://ej2.syncfusion.com/documentation/getting-started/compatible-with-essential-js1).

![download-dialog](images/download-dialog.png)

**Step 3:** The styles download as a zip containing SCSS and CSS files for selected Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components. Current settings are stored in `settings.json`.

![output-files](images/output-files.png)

### Using Customized Theme in a Web Application

Incorporate the customized CSS file directly into your web application.

**Step 1:** Copy the customized CSS file from your download folder to your application directory (e.g., `styles/{file-name}.css`).

**Step 2:** Link the customized CSS file in `index.html` or `shared/_layout.cshtml` in the head section.

```html
<head>
    <link href="styles/{file-name}.css" rel="stylesheet"/>
</head>
```

> For applications using both Essential<sup style="font-size:70%">&reg;</sup> JS 1 and Essential<sup style="font-size:70%">&reg;</sup> JS 2, copy the customized CSS file from the `compatibility` folder from the downloaded location.

## Import Previously Changed Settings into Theme Studio

If you need to adjust your application theme and UI design later, you don't have to start from scratch. Simply import your previous `settings.json` into Theme Studio.

**Step 1:** Click the Import icon in the top right corner.

![import-icon](images/import-icon.png)

**Step 2:** In the Import Theme dialog, click Browse to select your previously exported `settings.json`.

![import-dialog](images/import-dialog.png)

**Step 3:** Click Import.

![imported-settings](images/imported-settings.png)

**Step 4:** The stored settings will appear in the Theme Studio, allowing you to adjust theme colors per your latest design and export anew.

![filter-customized](images/filter-customized.png)

**Step 5:** The exported file will encompass your new changes. Replace the older style with this new version to update your application.

### Tailwind Theme

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components provide Tailwind theme support for EJ2 components, adhering to UI design principles and theme colors. The Tailwind theme is crafted according to Tailwind UI design guidelines.
