---
layout: post
title: Theme studio in Angular Appearance component | Syncfusion
description: Learn here all about Theme studio in Syncfusion Angular Appearance component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Theme studio 
documentation: ug
domainurl: ##DomainURL##
---

# Theme studio in Angular Appearance component

Theme Studio for Syncfusion Angular UI Components can be used to customize a new theme from an existing theme. It doesn't support with Data visualization components like Chart, Diagram, Gauge, Range Navigator, Maps.

## Customizing Theme Color from Theme Studio

The Syncfusion Angular UI Components themes are developed under the SCSS environment. Each theme has a unique common variable list. When you change the common variable color code value, it will reflect in all the Syncfusion Angular UI Components. All the Syncfusion Angular UI Component styles are derived from these [theme-based common variables](../appearance/overview#common-variables). This common variable list is handled inside the theme studio application for customizing theme-based colors.

**Step 1:** Navigate to the theme studio application at [https://ej2.syncfusion.com/themestudio/?theme=fluent2](https://ej2.syncfusion.com/themestudio/?theme=fluent2).

**Step 2:** The theme studio application page can be divided into two sections: the components preview section on the left, and the theme customization section on the right.

![two-sections](images/two-pane.png)

**Step 3:** Click the color pickers in the theme customization section to select your desired colors.

![colpr-picker](images/colorpicker.png)

**Step 4:** After selecting colors with the color pickers, the Essential JS 2 components will have the newly selected colors applied to them in the components preview section.

![customized](images/customized.png)

### Filtering a Specific List of Components

Using the theme studio, you can apply custom themes to a list of specific components. This option is useful when you have integrated a selective list of Syncfusion Angular UI Components in your application. The theme studio will filter the selected components and customize the final output for those components’ styles alone, reducing the final output file size.

**Step 1:** Click the Filter icon in the top right corner and select the components whose theme you want to customize.

![filter-icon](images/filter-icon.png)

**Step 2:** Click the Apply button in the Filter dialog. Now, only the selected components will be rendered in the components preview section.

![filter-dialog](images/filter-dialog.png)

**Step 3:** Now you can customize the colors in the theme customization section for the components you selected.

![filter-customized](images/filter-customized.png)

### Download the Customized Theme

You can download the custom styles after customizing the theme colors.

**Step 1:** Click the Download button in the top right corner. The Download dialog will open.

![download-icon](images/download-icon.png)

**Step 2:** Assign a theme name in the File Name field and click the Download button. If your application uses both Essential JS 1 and Essential JS 2 components, then select the Include compatibility CSS checkbox before downloading the theme. This option will generate the custom theme for Essential JS 2 compatibility styles, which are compatible as Essential JS 1 styles. Refer this [link](https://ej2.syncfusion.com/documentation/getting-started/compatible-with-essential-js1/) for more details about Essential JS 1 and Essential JS 2 compatibility.

![download-dialog](images/download-dialog.png)

**Step 3:** The download styles will come as a zip file that contains SCSS and CSS files for the selected Syncfusion Angular UI Components. The current settings are stored in the `settings.json` file.

![output-files](images/output-files.png)

### Using Customized Theme in a Web Application

You can directly use the customized CSS file in the web application.

**Step 1:** Copy/paste the customized CSS file from the download folder into your application at any folder. Example: `styles/{file-name}.css`.

**Step 2:** Refer the customized CSS file reference in the `index.html` or `shared/_layout.cshtml` main page head section.

```
    <head>
        <link href="styles/{file-name}.css" rel="stylesheet"/>
    </head>
```

> If you are using Essential JS 1 and Essential JS 2 components in a same web application, then you have to copy/paste the customized CSS file from the `compatibility` folder in the download location.

## Import Previously Changed Settings into the Theme Studio

When you want to change your application theme and UI design in the future, you won’t need to customize the Syncfusion Angular UI Components from scratch in the theme studio. Just import the old `settings.json` file to review and update your stored settings in the theme studio application.

**Step 1:** Click the Import icon in the top right corner.

![import-icon](images/import-icon.png)

**Step 2:** The Import Theme dialog will open. Click the Browse button and select a `settings.json` file you exported previously.

![import-dialog](images/import-dialog.png)

**Step 3:** Click the Import button.

![imported-settings](images/imported-settings.png)

**Step 4:** The stored data will be reflected in the theme studio application. Now you can change the theme colors based on your latest design and export the theme again.

![filter-customized](images/filter-customized.png)

**Step 5:** The exported file will contain your latest changes. You can just replace the older custom style with the newer one to refresh your application.

### Tailwind Theme

The Syncfusion Angular UI Components provides tailwind theme support for EJ2 components by considering the UI design principles and theme colors.Syncfusion developed tailwind theme by using the design principles of tailwind ui.
