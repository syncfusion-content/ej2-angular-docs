---
layout: post
title: Accessibility in Angular Carousel component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Carousel component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Carousel
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Carousel component

The Carousel component has been designed with [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/) specifications in mind, implementing WAI-ARIA roles, states, and properties along with comprehensive keyboard support for users of assistive technologies. WAI-ARIA accessibility support is achieved through attributes such as `aria-roledescription`, `aria-label`, `aria-current`, `aria-live`, `role`, and `aria-hidden`. These attributes provide essential information about elements in a document for assistive technology. The component implements keyboard navigation support by following the [WAI-ARIA practices](https://www.w3.org/TR/wai-aria-practices/) and has been thoroughly tested in major screen readers.

The accessibility compliance for the Carousel component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508](https://www.section508.gov/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Right-To-Left Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Color Contrast | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Mobile Device Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Keyboard Navigation Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker](https://www.npmjs.com/package/accessibility-checker) Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Axe-core](https://www.npmjs.com/package/axe-core) Accessibility Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

## ARIA attributes

The Carousel component is designed following [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/) standards. The Carousel is supported with ARIA accessibility, making it accessible to screen readers and other assistive technology devices. The following list of attributes is applied to the Carousel component.

| **Roles and Attributes** | **Functionalities**                                                                                                                             |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| aria-roledescription   | The role description attribute has been added for the root element (Carousel) and each Carousel slide item (slide).                            |
| aria-label             | Previous, next and play/pause buttons and all indicator elements.                                                                               |
| aria-current           | For the active item indicator element, `aria-current` is set to `true`.                                                                         |
| aria-hidden            | For all Carousel elements except the currently visible item, `aria-hidden` is set to `true`.                                                    |
| aria-live              | For Carousel items element, when `autoPlay` is `true`, `aria-live` is set to `off`; when `autoPlay` is `false`, `aria-live` is set to `polite`. |
| aria-role              | For Carousel slide item, `aria-role` has been grouped.                                                                                           |

## Keyboard interaction

All Carousel actions can be controlled via keyboard through the [`allowKeyboardInteraction`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#allowkeyboardinteraction) property, which is enabled by default. To disable the default keyboard interactions, set this property to `false`. This is particularly useful when the carousel contains input elements, as pressing arrow keys might cause unexpected carousel movement. By disabling keyboard interaction, the carousel remains static, allowing users to focus on input fields without interruptions.

This component implements keyboard navigation support by following WAI-ARIA practices. Once focused on the active Carousel element, the following key combinations can be used to interact with the Carousel.

| Key                | Description                                                     |
| ------------------ | --------------------------------------------------------------- |
| <kbd>Alt + J</kbd> | Keys to focus the Carousel component (done at application end). |
| <kbd>Arrows</kbd>  | Keys to navigate between slides.                                |
| <kbd>Home</kbd>    | To navigate to the first slide.                                 |
| <kbd>End</kbd>     | To navigate to the last slide.                                  |
| <kbd>Space</kbd>   | To play/pause the slide transitions.                            |
| <kbd>Enter</kbd>   | To perform the respective action on its focus.                  |
| <kbd>Tab</kbd>     | To Move focus through the interactive elements.                 |
| <kbd>Shift + Tab</kbd> | To Move focus through the interactive elements.             |

## Ensuring accessibility

The Carousel component's accessibility levels are ensured through [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Carousel component is demonstrated in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/carousel.html) in a new window to evaluate the accessibility of the Carousel component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/carousel.html" %}

## See also

- [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](../common/accessibility)