## Loading themes without internet access

Syncfusion incorporates the Material theme as a default built-in theme for all its components. By default, material theme refers to Google fonts, which necessitates internet access. However, this may not be suitable for applications that operate without an internet connection. To address this limitation, Syncfusion provides `offline-theme` file to reference Material styles with local fonts, ensuring seamless usage even in environments without internet connectivity. 

## Material theme package

The [`ej2-materail-theme`](https://www.npmjs.com/package/@syncfusion/ej2-material-theme)package enables users to reference styles without the online font through offline-theme file as an NPM package. To utilize this package, follow the steps provided below.

## Adding the material theme package

Run the following command to install the `ej2-material-theme` package in the application

```bash
npm i @syncfusion/ej2-material-theme
```

If you want to utilize [`ej2-material-dark`](https://www.npmjs.com/package/@syncfusion/ej2-material-dark-theme?activeTab=readme) theme run the below command

```bash
npm i @syncfusion/ej2-material-dark-theme
```

## Importing styles

Once installing the package, import the styles in your application by adding a link path to your styles folder. Make sure the path does not include references to the Roboto font.

```bash
@import '../node_modules/@syncfusion/ej2-material-theme/styles/offline-theme/material.css';
```

## Loading offline theme for tailwind

Similar to our `material theme`, we have offline-Theme designed specifically for our `tailwind users`. This  feature allows you to experience the full range of Tailwind theme benefits without the need for online Google Font references.

## Tailwind theme package

Same as `materail-theme` package [`ej2-tailwind-theme`](https://www.npmjs.com/package/@syncfusion/ej2-tailwind-theme) enables users to reference styles without the online font through a offline-theme file as an NPM package. To utilize this package, follow the steps provided below.

## Adding the tailwind theme package

Run the following command to install the `ej2-tailwind-theme` package in the application.

```bash
npm install @syncfusion/ej2-tailwind-theme
```

If you want to utlize `ej2-tailwind-dark` theme run the below command

```bash
npm install @syncfusion/ej2-tailwind-dark-theme
```

## Importing styles

Once installing the package, import the styles in your application by adding a link path to your styles folder. Make sure the path does not include references to the Roboto font.

```bash
@import '../node_modules/@syncfusion/ej2-tailwind-theme/styles/offline-theme/tailwind.css';
```

Syncfusion recognizes the need for applications designed to function without internet connectivity.To bridge this gap, It provides a offline-theme file that reference theme with local fonts. This approach ensures a smooth user experience, making our components adaptable for applications in environments with limited or no internet connectivity. 



