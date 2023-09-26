---
layout: post
title: Accessibility in Angular Rich text editor component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Rich text editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Rich text editor component

The Rich Text Editor component has been designed, keeping in mind the WAI-ARIA specifications and applies the WAI-ARIA roles, states and properties. This component is characterized by complete ARIA accessibility support that makes it easy for people who use assistive technologies (AT) or those who completely rely on keyboard navigation.

## ARIA attributes

* The toolbar of Rich Text Editor, assigned the role of ‘Toolbar’ and has the following list of aria attribute.

| **Property** | **Functionalities** |
| --- | --- |
| role="toolbar" | This attribute added to the ToolBar element describes the actual role of the element. |
| aria-orientation     | Indicates the ToolBar orientation. Default value is `horizontal`. |
| aria-haspopup       | Indicates the popup mode of the Toolbar. Default value is false. When popup mode is enabled,  attribute value has to be changed to `true`. | |
| aria-disabled       | Indicates the disabled state of the ToolBar. |

For further details of Toolbar ARIA attributes, please look in to [`Accessibility of Toolbar`](../../toolbar/accessibility.html) documentation.

* The Rich Text Editor element is assigned the role of `application`.

| **Property** | **Functionalities** |
| --- | --- |
| role="application" | This attribute added to the Rich Text Editor element describes the actual role of the element. |
| aria-disabled       | Indicates the disabled state of the ToolBar. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs1" %}