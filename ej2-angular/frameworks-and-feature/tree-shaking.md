---
layout: post
title: Tree shaking in Angular Frameworks and feature component | Syncfusion
description: Learn here all about Tree shaking in Syncfusion Angular Frameworks and feature component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tree shaking 
documentation: ug
domainurl: ##DomainURL##
---

# Tree Shaking 

Tree shaking is a powerful optimization technique in modern JavaScript and TypeScript development that eliminates unused or "dead" code from your application's final bundle. This results in smaller, more efficient, and faster-loading web applications. The term "tree shaking" comes from the idea of shaking a tree to remove dead leaves, leaving only what’s essential.

Tree shaking relies on the static structure of ES2015 (ES6) module syntax—specifically `import` and `export` statements. Tools like **Webpack** and **Rollup** analyze these modules during the build process, identifying and removing code that isn’t imported or used in your application. For example, if you export a function in a module but never import it elsewhere, tree shaking ensures it won’t bloat your bundle. This optimization is especially valuable for large applications or when using feature-rich libraries like Syncfusion<sup style="font-size:70%">&reg;</sup>’s Angular components.

In this guide, we’ll explore how tree shaking works in Angular, how it integrates with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, and how you can implement it to boost your application’s performance.

## Tree Shaking in Angular  

Angular has supported tree shaking since **Angular CLI version 2**, thanks to its use of Webpack as the underlying bundler (and later, options for other tools like esbuild). Tree shaking in Angular leverages ES2015 module syntax to ensure that only the code you actually use makes it into your production bundle. This optimization reduces bundle sizes, leading to faster load times, lower bandwidth usage, and improved runtime performance, which are critical for modern web applications.

## Using Syncfusion<sup style="font-size:70%">&reg;</sup> components with Tree Shaking 

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, part of the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 (EJ2)** library, are designed with tree shaking in mind. They are structured as modular, tree-shakable packages by default, meaning you don’t need to make special adjustments at the application level to benefit from this optimization.

Each Syncfusion<sup style="font-size:70%">&reg;</sup> component is split into individual modules, allowing you to import only what you need. For instance, when using the Syncfusion<sup style="font-size:70%">&reg;</sup> DataGrid, you can import the `GridModule` for basic functionality or add specific feature modules like `PageService` or `FilterService` as required. This modularity ensures that unused features are excluded from your bundle during tree shaking, keeping your application lean.

To take full advantage of this, use precise imports in your code. For example:

```typescript
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService } from '@syncfusion/ej2-angular-grids';
```

Avoid importing the entire library (e.g., `GridAllModule`) unless you need all features, as this will include everything and negate the benefits of tree shaking.

---

## Implementing Tree Shaking in an Angular Application 

Here’s a step-by-step guide to implementing tree shaking in an Angular application with Syncfusion<sup style="font-size:70%">&reg;</sup> components:

1. **Create an Angular Application**  
   Start by setting up a new Angular project and adding the Syncfusion<sup style="font-size:70%">&reg;</sup> DataGrid component. Follow the [Getting Started guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone) for Angular Standalone projects to get up and running.

2. **Configure for Tree Shaking**  
   Modify your `angular.json` file to enable production optimizations, including tree shaking. Update the `"production"` configuration as follows:

   ```json
   "configurations": {
       "production": {
           "optimization": true,          // Enables minification and tree shaking
           "outputHashing": "all",        // Ensures unique file names for caching
           "sourceMap": false,            // Disables source maps for smaller builds
           "namedChunks": false,          // Reduces bundle size by avoiding named chunks
           "aot": true,                   // Enables AOT compilation
           "extractLicenses": true        // Separates licenses for compliance
       }
   }
   ```

   - **`optimization: true`**: Activates Webpack’s optimization features, including tree shaking and minification.  
   - **`aot: true`**: Ensures AOT compilation, which enhances tree shaking by pre-compiling your code.

3. **Build the Application**  
   Run the following command to build your app with tree shaking enabled:  
   ```
   ng build --configuration=production
   ```  
   Alternatively, use `ng serve --configuration=production` for local testing (though this is less common for production builds).

4. **Verify the Bundle Size**  
   After building, analyze your bundle with the [source-map-explorer](https://www.npmjs.com/package/source-map-explorer) tool:  
   ```
   npm install -g source-map-explorer
   source-map-explorer dist/your-app/*.js
   ```  
   This tool visualizes what’s in your bundle, helping you confirm that unused code has been removed.

For a working example, explore the [Angular Tree Shaking Example on GitHub](https://github.com/SyncfusionExamples/syncfusion-angular-tree-shaking).

By following these steps, you’ll optimize your Angular application’s performance and deliver a faster experience to users.

## Bundle size for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component

The table below shows the bundle sizes for an Angular application using the Syncfusion<sup style="font-size:70%">&reg;</sup> DataGrid component after tree shaking has been applied. These sizes reflect a production build with the configurations outlined above.

| **Module**          | **Raw Size** | **Transfer Size (Gzipped)** |
|---------------------|--------------|-----------------------------|
| Empty App           | 199.45 kB    | 56.22 kB                    |
| GridModule          | 1.13 MB      | 249.94 kB                   |
| + PageService       | 1.31 MB      | 274.79 kB                   |
| + SortService       | 1.32 MB      | 276.41 kB                   |
| + FilterService     | 1.68 MB      | 333.16 kB                   |
| + GroupService      | 1.73 MB      | 340.22 kB                   |

- **Raw Size**: The uncompressed size of the bundle.  
- **Transfer Size**: The compressed (gzipped) size, which is what users download.  

These numbers demonstrate how tree shaking keeps bundle sizes manageable by including only the features you import. For comparison, using `GridAllModule` instead of `GridModule` would significantly increase the size (e.g., over 2 MB raw), as it includes all DataGrid features regardless of usage. Stick to `GridModule` and add feature modules (like `PageService`) only as needed. Learn more about DataGrid feature modules in the [official documentation](https://ej2.syncfusion.com/angular/documentation/grid/module).
