---
layout: post
title: Accessibility in Angular Uploader component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Uploader component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Uploader component

The Uploader component adheres to accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are used to evaluate accessibility.

The following table outlines the accessibility compliance status of the Uploader component:

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Color Contrast](../common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Mobile Device Support](../common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Axe-core Accessibility Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

## Keyboard interaction

The following table lists the standard keyboard shortcuts supported by the Uploader component:

| **Keyboard shortcut** | **Action** |
| --- | --- |
| <kbd>Tab</kbd> | Move focus to the next element. |
| <kbd>Shift + Tab</kbd> | Move focus to the previous element. |
| <kbd>Enter</kbd> | Trigger the action associated with the focused button element. |
| <kbd>Esc</kbd> | Close the file browser dialog and cancel the upload operation. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/uploader-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/uploader-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/uploader/uploader-cs16" %}

>You can also explore [Angular File Upload](https://www.syncfusion.com/Angular-ui-components/Angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material3/uploader/default) to understand how to browse the files which you want to upload to the server.

## Ensuring accessibility

The Uploader component's accessibility compliance is validated using [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) tools during automated testing.

The following sample demonstrates the accessibility compliance of the Uploader component. Open the [sample](https://ej2.syncfusion.com/accessibility/uploader.html) in a new window to evaluate the component's accessibility using industry-standard tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/uploader.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)