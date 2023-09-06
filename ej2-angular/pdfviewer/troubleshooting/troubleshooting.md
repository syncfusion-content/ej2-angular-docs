---
layout: post
title: Manually Copy Files from node_modules in Angular PDF Viewer component | Syncfusion
description: Learn here all about why do i have to manually copy files from node_modules in Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: PDF Viewer 
documentation: ug
domainurl: ##DomainURL##
---

# Why Do I Have to Manually Copy Files from node_modules into My App?

PDF Viewer offers flexibility across different build systems, remaining both framework-agnostic and independent of bundlers. Even without a bundler, you can seamlessly integrate the PDF Viewer by directly linking its assets through standard HTML tags.

Moreover, our codebase is meticulously divided into distinct files, enabling selective loading of components when required. This strategic approach to lazy loading prevents unwieldy file sizes that a single bundle might impose, which is often impractical.

While 'pdfium.js,' the primary entry point, is commonly bundled automatically, the supplementary assets from 'ej2-pdfviewer-lib' need to be manually incorporated due to their on-demand loading. This necessity arises because the host application lacks inherent awareness of these assets' lazy loading behavior.