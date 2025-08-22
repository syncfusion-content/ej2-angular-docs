---
layout: post
title: Copying assets from node_modules into my app in React PDF Viewer component | Syncfusion
description: Learn here all about copying assets from node_modules into my app in Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: PDF Viewer 
documentation: ug
domainurl: ##DomainURL##
---

# Experience the Standalone PDF Viewer Component by copying assets from node_modules into my app

It is must to copy the assets from node_modules in to your app to experience the new Standalone PDF Viewer component. It offers flexibility across different build systems, remaining both framework-agnostic and independent of bundlers. Even without a bundler, you can seamlessly integrate the PDF Viewer by directly linking its assets into your app.

This strategic approach to lazy loading prevents unwieldy file sizes that a single bundle might impose, which is often impractical.

Assets from 'ej2-pdfviewer-lib' need to be manually incorporated due to their on-demand loading. This necessity arises because the host application lacks inherent awareness of these assets' lazy loading behavior.