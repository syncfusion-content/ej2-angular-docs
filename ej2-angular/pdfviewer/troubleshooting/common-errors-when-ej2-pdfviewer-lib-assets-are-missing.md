---
layout: post
title: Common error when assets are missing in Angular PDF Viewer | Syncfusion
description: Learn here about common error when ej2-pdfviewer-lib assets are missing in your app in Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: PDF Viewer 
documentation: ug
domainurl: ##DomainURL##
---

# Uncaught DOMException: Failed to execute 'importScripts' on 'WorkerGlobalScope'

Another error that can occur when setting up the `ej2-pdfviewer-library` without the necessary assets is the **Uncaught DOMException: Failed to execute 'importScripts' on 'WorkerGlobalScope'**. This error typically arises when a web worker attempts to load a script (e.g., `pdfium.js` or `pdfium.wasm`) and fails to do so.

To troubleshoot and resolve this error, consider the following steps:

1. **Check Asset Availability:** Ensure that the required assets, specifically `pdfium.js` and `pdfium.wasm`, are present in the correct locations within your project. Confirm that they are accessible and have been copied correctly.

2. **Network and CORS:** Verify that there are no network-related issues preventing the web worker from fetching the assets. Also, address any CORS-related problems, especially if the assets are hosted on a different origin.

N>  If ej2-pdfviewer-lib folder is not available in the 'src/assets', copy the contents of the ej2-pdfviewer-lib folder from ./node_modules/@syncfusion/ej2-pdfviewer/dist to the src/assets directory using the command:
```bash
cp -R ./node_modules/@syncfusion/ej2-pdfviewer/dist/ej2-pdfviewer-lib  src/assets/ej2-pdfviewer-lib
```