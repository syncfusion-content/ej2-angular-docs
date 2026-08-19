---
layout: post
title: Accessibility in Angular Components | Syncfusion
description: Learn about accessibility standards, WCAG 2.2, Section 508, WAI-ARIA, and keyboard navigation support in Syncfusion Angular components.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Syncfusion® Angular Components

## Accessibility overview

Accessibility in software components refers to designing user interfaces that everyone can use effectively, including individuals with disabilities. This encompasses providing high-contrast text, alternative text for images, and ensuring that all controls are operable via keyboard or assistive technologies. Implementing proper accessibility features allows your applications to reach a wider audience and often satisfies legal requirements in many jurisdictions.

## Accessibility Standards

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components meet the following accessibility standards:

- **[ADA](https://www.ada.gov/)**: A law ensuring equal access and opportunities for people with disabilities compared to those without disabilities.

- **[WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/)**: The Web Content Accessibility Guidelines provide standards by the World Wide Web Consortium (W3C) that define how to make web content more accessible. WCAG 2.2 establishes a framework of accessibility principles and success criteria classified into three levels: A, AA, and AAA.

- **[Section 508](https://www.section508.gov/)**: Guidelines that ensure electronic and information technology are accessible to people with disabilities, primarily for federal agencies in the United States, based on WCAG.

* [WAI-ARIA](https://www.w3.org/WAI/ARIA/) - WAI-ARIA stands for "Web Accessibility Initiative - Accessible Rich Internet Applications." It is a set of technical specifications and guidelines developed by the World Wide Web Consortium (W3C) as part of the Web Accessibility Initiative (WAI). WAI-ARIA is designed to enhance the accessibility of dynamic web content, particularly web applications and rich internet applications (RIAs), for people with disabilities. WAI-ARIA provides a set of roles, states, and properties that can be added to HTML elements to provide additional context and information about the purpose and behavior of those elements. This can help assistive technologies better understand and interpret web content and interact with web applications.

* [Keyboard Navigation](https://www.w3.org/TR/WCAG22/#keyboard-accessible) - It refers to the ability to use a keyboard to interact with and navigate through a user interface. It is an important aspect of web accessibility, as it allows people who cannot use a mouse or other pointing device to access and use web content and applications.

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components adhere to these established standards.

## Accessibility compliance

The accessibility support provided by Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components is based on a collection of methodologies for adhering to and applying [recognized standards and technical specifications](#accessibility-standards) to ensure an intuitive experience for people with disabilities.

There are several methodologies of accessibility validation that can be performed on the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, such as:

* The [WAI-ARIA patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) are followed by the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components to enable appreciable accessibility.

* Each Angular component is subjected to manual testing with a screen reader and also automated test cases to ensure the component's required attributes. Tools such as aXe, Lighthouse, and Accessibility Scanner are employed to ensure comprehensive coverage and compliance.

* Attributes are allocated and updated correctly during interaction as well. Each component has been assigned a distinct `Role` attribute and its own set of ARIA attributes defined by the [WCAG 2.2](https://www.w3.org/TR/WCAG22/) specification.

In addition to the methodologies mentioned above, Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components are constructed to support the following accessibility aspects.

### Screen reader support

A screen reader allows people who are blind or visually impaired to use a computer by reading aloud the text that is displayed on the screen. Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/) standards to work properly in the screen readers such as [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) for Windows and [Embedded VoiceOver](https://support.apple.com/en-in/guide/voiceover/vo2706/mac) for MAC, along with JAWS and NVDA, among others.

### Right-To-Left support

Right-to-Left (RTL) support allows applications to cater to languages written from right to left, enhancing usability for Arabic, Hebrew, etc. Refer to the [Right-to-Left documentation](https://ej2.syncfusion.com/angular/documentation/common/right-to-left) for more details.

### Color contrast

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components come with [predefined themes](https://ej2.syncfusion.com/angular/documentation/appearance/overview) that ensure satisfactory color contrast. Developers can customize these themes for improved contrast.

### Mobile device support

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Components are designed to be responsive and touch-friendly, with appropriate touch target sizes and gesture support. This ensures a good user experience on mobile devices while maintaining accessibility for users with disabilities.

### Keyboard navigation support

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components support keyboard navigation, allowing users who rely on alternate methods to effortlessly navigate and interact with the component.

## Ensuring accessibility

Ensuring the accessibility of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components is crucial for making the product inclusive and user-friendly for individuals with disabilities. This process involves various types of accessibility testing, including:

* **Automated testing**: The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools. These tools provide in-depth analysis and reporting of accessibility compliance.

* **Manual testing**: This type of testing involves manually evaluating the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. During manual accessibility testing, testers will ensure accessibility using the screen readers such as [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) for Windows and [Embedded VoiceOver](https://support.apple.com/en-in/guide/voiceover/vo2706/mac) for MAC.

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components will keep improving when there is anything required. It also involves client feedback to make the component more accessible, incorporating suggestions and real-world observations.

## Voluntary Product Accessibility Template

The [Voluntary Product Accessibility Template (VPAT)](https://www.itic.org/policy/accessibility/vpat) provides a structured format to document how information and communication technology (ICT) products and services comply with accessibility standards. This template helps organizations clearly and effectively communicate their conformance with standards such as **Section 508**, **WCAG 2.2**, and **EN 301 549**.

[Download the Latest VPAT Document](https://www.itic.org/dotAsset/0d397438-611d-47da-861a-be9ee508da51.docx)

To review the accessibility conformance of Syncfusion<sup style="font-size:70%">&reg;</sup> products, you can download the latest version of the **Syncfusion<sup style="font-size:70%">&reg;</sup> VPAT document** here: [VPAT Document](https://ej2.syncfusion.com/accessibility/Syncfusion-VPAT2.5.docx)

This document provides detailed information on how Syncfusion<sup style="font-size:70%">&reg;</sup> products meet accessibility requirements, ensuring they are inclusive and usable for all individuals, including those with disabilities.

## Accessibility support for specific components

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components are designed to ensure compliance with key accessibility standards, including **Section 508**, **WAI-ARIA**, **WCAG 2.2**, and **keyboard navigation**. Below, you’ll find control-specific documentation that provides detailed guidance on how each control meets these standards.

<style>
#table
{
width: 100%;
line-height: 2 !important;
}

#table th {
    border-bottom:1px solid #dedede !important;
    font-weight: bold;
}

#table tr
{
border:1px solid #dedede !important;
}

#table td
{
border:0 !important;
vertical-align: top;
}
</style>

<table id="table">
    <thead>
        <tr>
            <th>Component</th>
            <th>Section 508</th>
            <th>WCAG 2.2</th>
            <th>Keyboard Navigation</th>
            <th>Accessibility Documentation</th>
        </tr>
    </thead>
<tbody>
    <tr>
        <td>DataGrid</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/grid/accessibility" aria-label="grid accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Pivot Table</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/pivotview/accessibility" aria-label="pivotview accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Tree Grid</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/treegrid/accessibility" aria-label="treegrid accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Spreadsheet</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/spreadsheet/accessibility" aria-label="spreadsheet accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>In-place Editor</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/inplace-editor/accessibility" aria-label="inplace editor accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>PDF Viewer</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/pdfviewer/accessibility" aria-label="pdfviewer accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>RichTextEditor</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/rich-text-editor/accessibility" aria-label="rich text editor accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Word Processor</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/document-editor/accessibility" aria-label="document editor accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Image Editor</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/image-editor/accessibility" aria-label="image editor accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Dialog</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/dialog/accessibility" aria-label="dialog accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>ListView</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/listview/accessibility" aria-label="listview accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Tooltip</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/tooltip/accessibility" aria-label="tooltip accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Splitter</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/splitter/accessibility" aria-label="splitter accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Dashboard Layout</td>
        <td>Yes</td>
        <td>AA</td>
        <td>NA</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/dashboard-layout/accessibility" aria-label="dashboard layout accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Accumulation Chart</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/accumulation-chart/accessibility" aria-label="accumulation chart accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Charts</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/chart/accessibility" aria-label="chart accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Stock Chart</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/stock-chart/accessibility" aria-label="stock chart accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Circular Gauge</td>
        <td>Yes</td>
        <td>AA</td>
        <td>NA</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/circular-gauge/accessibility" aria-label="circular gauge accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Diagram</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/diagram/accessibility" aria-label="diagram accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>HeatMap Chart</td>
        <td>Yes</td>
        <td>AA</td>
        <td>NA</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/heatmap-chart/accessibility" aria-label="heatmap chart accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Linear Gauge</td>
        <td>Yes</td>
        <td>AA</td>
        <td>NA</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/linear-gauge/accessibility" aria-label="linear gauge accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Maps</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/maps/accessibility" aria-label="maps accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Range Selector</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/range-navigator/accessibility" aria-label="range navigator accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Smith Chart</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/smithchart/accessibility" aria-label="smithchart accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Sparkline Charts</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/sparkline/accessibility" aria-label="sparkline accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>TreeMap</td>
        <td>Yes</td>
        <td>AA</td>
        <td>NA</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/treemap/accessibility" aria-label="treemap accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Bullet Chart</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/bullet-chart/accessibility" aria-label="bullet chart accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Kanban</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/kanban/accessibility" aria-label="kanban accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Button</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/button/accessibility" aria-label="button accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Button Group</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/button-group/accessibility" aria-label="button group accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Dropdown Menu</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/drop-down-button/accessibility" aria-label="drop down button accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Progress Button</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/progress-button/accessibility" aria-label="progress button accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Split Button</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/split-button/accessibility" aria-label="split button accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Chips</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/chips/accessibility" aria-label="chips accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>FAB</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/floating-action-button/accessibility" aria-label="floating action button accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Speed Dial</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/speed-dial/accessibility" aria-label="speed dial accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Calendar</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/calendar/accessibility" aria-label="calendar accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>DatePicker</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/datepicker/accessibility" aria-label="datepicker accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>DateRangePicker</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/daterangepicker/accessibility" aria-label="daterangepicker accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>DateTime Picker</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/datetimepicker/accessibility" aria-label="datetimepicker accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>TimePicker</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/timepicker/accessibility" aria-label="timepicker accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Gantt Chart</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/gantt/accessibility" aria-label="gantt accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>TextBox</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/textbox/accessibility" aria-label="textbox accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Input Mask</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/maskedtextbox/accessibility" aria-label="maskedtextbox accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Masked TextBox</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/maskedtextbox/accessibility" aria-label="maskedtextbox accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Numeric TextBox</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/numerictextbox/accessibility" aria-label="numerictextbox accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Radio Button</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/radio-button/accessibility" aria-label="radio button accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>CheckBox</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/check-box/accessibility" aria-label="check box accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Color Picker</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/color-picker/accessibility" aria-label="color picker accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>File Upload</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/uploader/accessibility" aria-label="uploader accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Range Slider</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/range-slider/accessibility" aria-label="range slider accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Toggle Switch Button</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/switch/accessibility" aria-label="switch accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Signature</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/signature/accessibility" aria-label="signature accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Rating</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/rating/accessibility" aria-label="rating accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Query Builder</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/query-builder/accessibility" aria-label="query builder accessibility documentation">Documentation</a></td>
    </tr> 
    <tr>
        <td>Accordion</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/accordion/accessibility" aria-label="accordion accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>AppBar</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/appbar/accessibility" aria-label="appbar accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Breadcrumb</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/breadcrumb/accessibility" aria-label="breadcrumb accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Carousel</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/carousel/accessibility" aria-label="carousel accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Context Menu</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/context-menu/accessibility" aria-label="context menu accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Menu Bar</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/menu/accessibility" aria-label="menu accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Sidebar</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/sidebar/accessibility" aria-label="sidebar accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Tabs</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/tab/accessibility" aria-label="tab accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Toolbar</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/toolbar/accessibility" aria-label="toolbar accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Ribbon</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/ribbon/accessibility" aria-label="ribbon accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>TreeView</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/treeview/accessibility" aria-label="treeview accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>File Manager</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/file-manager/accessibility" aria-label="file manager accessibility documentation">Documentation</a></td>
    </tr> 
    <tr>
        <td>Stepper</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/stepper/accessibility" aria-label="stepper accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Message</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/message/accessibility" aria-label="message accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Toast</td>
        <td>Yes</td>
        <td>AA</td>
        <td>NA</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/toast/accessibility" aria-label="toast accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Progress Bar</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/progress-bar/accessibility" aria-label="progress bar accessibility documentation">Documentation</a></td>
    </tr>
    <tr>
        <td>Skeleton</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/skeleton/accessibility" aria-label="skeleton accessibility documentation">Documentation</a></td>
    </tr>
        <tr>
        <td>DropDownList</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/drop-down-list/accessibility" aria-label="DropDownList accessibility documentation">Documentation</a></td>
    </tr>
</tbody>
</table>

## See Also

- [Keyboard Navigation Support](../common/keyboard-navigation)
- [Right-to-Left (RTL) Support](../common/right-to-left)
- [Themes & High Contrast](../appearance/theme)
- [Syncfusion Accessibility Statement](https://www.syncfusion.com/accessibility)