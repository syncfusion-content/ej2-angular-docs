---
layout: post
title: Tree shaking in Angular Frameworks and feature component | Syncfusion
description: Learn how to optimize Syncfusion Angular applications using tree shaking to remove unused code and reduce bundle size.
platform: ej2-angular
control: Tree shaking 
documentation: ug
domainurl: ##DomainURL##
---

# Tree Shaking

Tree shaking is an optimization technique that removes unused or "dead" code from an application's final bundle, resulting in smaller, faster-loading web applications. It relies on the static structure of ES2015 (ES6) modules to identify and exclude code that is never imported or used.

Tree shaking uses the static structure of ES2015 (ES6) modules, particularly `import` and `export` statements. Tools such as **Webpack** and **Rollup** analyze these modules at build time to identify and exclude code that is not imported or referenced. For example, if a function is exported in a module but never imported elsewhere, tree shaking ensures it does not increase the bundle size. This optimization is especially beneficial for applications using feature-rich libraries such as Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components.

This guide describes how tree shaking works in Angular, its integration with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, and how to implement it for improved application performance.

## Tree Shaking in Angular

Angular has supported tree shaking since **Angular CLI version 2** by leveraging Webpack as the underlying bundler (and later, with other tools like esbuild). In Angular, tree shaking with ES2015 module syntax ensures only necessary code is included in the production bundle. This reduces bundle size, decreases load times, minimizes bandwidth usage, and improves runtime performance—all essential for modern web applications.

## Using Syncfusion<sup style="font-size:70%">&reg;</sup> Components with Tree Shaking

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, part of the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 (EJ2)** library, are designed for modularity and optimal compatibility with tree shaking. Component packages are structured as individual modules, so only explicitly imported features are included during the build process.

For instance, when using the Syncfusion<sup style="font-size:70%">&reg;</sup> DataGrid, importing only `GridModule` provides core grid features, while additional feature modules such as `PageService` or `FilterService` can be imported as needed. This modular approach ensures unused features are not bundled, maintaining a minimal application footprint.

Use precise imports to maximize tree shaking benefits. For example:

```typescript
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService } from '@syncfusion/ej2-angular-grids';
```

Importing a comprehensive module such as `GridAllModule` will include all features and can significantly increase the bundle size. Only import broad modules when all features are required.

---

## Implementing Tree Shaking in an Angular Application

Follow this step-by-step guide to enable tree shaking in an Angular application with Syncfusion<sup style="font-size:70%">&reg;</sup> components:

1. **Create an Angular Application**  
   Set up a project and install Syncfusion component packages (e.g., DataGrid). See the [Getting Started guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone).

2. **Configure for Tree Shaking**  
   In your `angular.json` file, ensure that production optimizations are enabled. Update the `"production"` configuration as follows:

   ```json
   "configurations": {
       "production": {
           "optimization": true,          // Enables minification and tree shaking
           "outputHashing": "all",        // Ensures unique filenames for caching
           "sourceMap": false,            // Disables source maps for smaller builds
           "namedChunks": false,          // Reduces bundle size by avoiding named chunks
           "aot": true,                   // Enables AOT compilation
           "extractLicenses": true        // Separates licenses for compliance
       }
   }
   ```

   - `optimization: true`: Enables tree shaking and minification.
   - `aot: true`: Performs Ahead-of-Time compilation, aiding tree shaking.

3. **Build the Application**  
   Run the following command to build the application with tree shaking:

   ```bash
   ng build --configuration=production
   ```

   For local testing, use:

   ```bash
   ng serve --configuration=production
   ```

4. **Verify the Bundle Size**  
   Use tools like [source-map-explorer](https://www.npmjs.com/package/source-map-explorer) to inspect the bundle and verify unused code exclusion.

   ```bash
   npm install -g source-map-explorer
   source-map-explorer dist/your-app/*.js
   ```

For a working example, explore the [Angular Tree Shaking Example on GitHub](https://github.com/SyncfusionExamples/syncfusion-angular-tree-shaking).

By following these steps, Angular applications will remain optimized, performant, and deliver faster load times to users.

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

- **Raw Size**: Uncompressed output bundle size.
- **Transfer Size**: The compressed (gzipped) size, which is what users download.

These numbers demonstrate how tree shaking keeps bundle sizes manageable by including only the features you import. For comparison, using `GridAllModule` instead of `GridModule` would significantly increase the size (e.g., over 2 MB raw), as it includes all DataGrid features regardless of usage. Stick to `GridModule` and add feature modules (like `PageService`) only as needed. Learn more about DataGrid feature modules in the [official documentation](https://ej2.syncfusion.com/angular/documentation/grid/module).
