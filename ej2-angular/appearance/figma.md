---
layout: post
title: Introduction to the Figma UI Kit | Syncfusion
description: Check out and learn about the introduction to the Figma UI Kit of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Figma 
documentation: ug
domainurl: ##DomainURL##
---

# Figma UI Kits for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Components

Syncfusion<sup style="font-size:70%">&reg;</sup> provides [Figma UI kits](https://www.figma.com/@syncfusion) to enhance collaboration between designers and developers. These kits are available in four themes that match Syncfusion Angular component styling:

* [Material 3](https://www.figma.com/community/file/1454123774600129202)
* [Fluent](https://www.figma.com/community/file/1385969120047188707)
* [Tailwind](https://www.figma.com/community/file/1385969065626384098)
* [Bootstrap 5](https://www.figma.com/community/file/1385968977953858272)

Each UI kit contains reusable design components that accurately represent Syncfusion Angular components with their various states and variants. The kits include detailed specifications, measurements, and icons to ensure design-to-development consistency.

![Material 3 Figma UI Kit](./images/material3.png)

## Advantages of UI Kits

The Syncfusion<sup style="font-size:70%">&reg;</sup> Figma UI kits offer several key benefits:

- The kit offers extensive information about Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, detailing available controls, their states, and variants, for quick insights.
- Using the [atomic design methodology](https://atomicdesign.bradfrost.com/chapter-2/), design components are crafted for straightforward and efficient customization.
- Developers can align Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with design specifications, ensuring accuracy and consistency.
- Standardized components and themes promote design uniformity, maintaining a cohesive appearance throughout projects.
- Accelerate the design process by using pre-built components instead of creating designs from scratch.

## Downloading the UI Kits

Syncfusion<sup style="font-size:70%">&reg;</sup> Figma UI kits are available via the [Figma community](https://www.figma.com/@syncfusion). Each theme-specific UI kit is available at these links:

- [Material 3](https://www.figma.com/community/file/1454123774600129202)
- [Fluent](https://www.figma.com/community/file/1385969120047188707)
- [Tailwind](https://www.figma.com/community/file/1385969065626384098)
- [Bootstrap 5](https://www.figma.com/community/file/1385968977953858272)

## Structure of the UI Kits

Each Syncfusion<sup style="font-size:70%">&reg;</sup> Figma UI kit is organized into a clear, navigable structure with these main pages:

- **Thumbnail**: The cover page of the UI kit showing the theme identity.
- **Index**: A comprehensive list of all controls included in the kit, providing easy navigation.
- **Icons**: Includes all icons used in design components.
- **UI Components**: This essential section features a broad array of UI components. Each control is well-designed with precise figures, measurements, and icons, illustrating multiple states and variants.

![Figma UI Kit Layout](./images/layout.png)

The UI components are organized by category (inputs, navigation, data visualization, etc.) to help you quickly find the elements you need for your designs.

## Customizing the UI Kits

Syncfusion<sup style="font-size:70%">&reg;</sup> Figma UI kits can be tailored to suit specific needs, allowing for unique design creation and color adaptation to match brand guidelines. The [atomic design methodology](https://atomicdesign.bradfrost.com/chapter-2/) ensures your customizations seamlessly affect multiple components and their variants.

Here's how to adjust the primary button color in the Material 3 theme:

1. Visit our [UI kits](#downloading-the-ui-kits) section and select a preferred theme, such as Material 3.
2. Open the chosen theme in Figma by clicking the **Open in Figma** button.
3. For the desktop app, click **Import**, select the downloaded Syncfusion<sup style="font-size:70%">&reg;</sup> fig file, and then click **Open**.
4. Locate the button needing customization within your layout.
5. On the Figma interface's right, review the color variable options. For buttons, this might be `$primary-bg-color`, originating from the primary color variable.
6. Click outside the button to access the **Local variables** feature, containing design tokens for color variables, then click the **Local variables** option.
7. A popup with the design token list will appear, allowing primary variable color changes via a palette.
8. Upon choosing a new color (e.g., pink), the button's color will update instantly in the design.

![Customization](./images/customize.png)

Beyond button color changes, other UI component aspects such as font, spacing, and shadows can also be customized:

Experiment with these options to create a design perfectly aligned with your vision.

## Downloading the customized styles

After customizing your UI kit, you can export the design tokens for direct use in your Angular application using the `Syncfusion<sup style="font-size:70%">&reg;</sup> Design Tokens` plugin. This creates a seamless bridge between your Figma designs and code implementation.

### Exporting design tokens

Follow these steps to download the customized styles from the Figma UI Kit:

- First, open a [Syncfusion<sup style="font-size:70%">&reg;</sup> Figma UI Kit](https://www.figma.com/@syncfusion).
- Navigate to the `Plugins & widgets` section in Figma and search for the `Syncfusion<sup style="font-size:70%">&reg;</sup> Design Tokens`.
- Once found, run the plugin. A popup will appear with an `Export` button.
- Click the `Export` button. This action will generate a zip file containing your design tokens.
- Select a directory to save the exported files.
- Extract the downloaded zip file to access its contents.

![export-design-tokens](./images/syncfusion-design-tokens.png)

### Utilizing design tokens

The exported zip file includes the following files:
  - `css-variables.css`: The css-variables.css file contains CSS variables for both light and dark themes, directly derived from your Figma designs. You can easily import this file into your application alongside the component styles to reflect your custom designs. For more detailed usage instructions, consult the [CSS variables](./css-variables) documentation.
  - `<theme-name>-tokens.json`: This file (e.g., material3-tokens.json) contains style variables and values in a JSON format compatible with [Theme Studio](./theme-studio). This file, prefixed with the corresponding theme name, can be [imported](./theme-studio#import-previously-changed-settings-into-the-theme-studio) into [Theme Studio](./theme-studio) for further customization. After processing in [Theme Studio](./theme-studio), you can [download](./theme-studio#download-the-customized-theme) the updated styles file and integrate it into your application, bringing your custom themes to life.

This workflow ensures your application precisely matches your Figma designs, maintaining visual consistency from design to implementation.

## Upgrading the UI Kits

To upgrade your UI kits, download the latest version from the provided links. Follow these tips for a seamless transition:

- Stay informed about Syncfusion<sup style="font-size:70%">&reg;</sup>'s UI kit updates or new releases.
- Backup ongoing projects before upgrading to avoid data loss or compatibility issues.
- Share feedback with Syncfusion<sup style="font-size:70%">&reg;</sup> about the updated UI kits, including encountered issues or improvement suggestions.

## See also

* [Available themes](https://ej2.syncfusion.com/documentation/appearance/theme)
* [Customizing themes](https://ej2.syncfusion.com/documentation/appearance/theme-studio#customizing-theme-color-from-theme-studio)
