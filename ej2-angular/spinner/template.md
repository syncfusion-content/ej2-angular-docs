---
layout: post
title: Template in Angular Spinner component | Syncfusion
description: Learn here all about Template in Syncfusion Angular Spinner component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Template 
documentation: ug
domainurl: ##DomainURL##
---

# Template in Angular Spinner component

Use custom templates for the Spinner instead of the default spinner by specifying the template in the `setSpinner` method.

The following steps describe how to define a custom template for the Spinner:

**Step 1:** Import the `setSpinner` method from the `ej2-angular-popups` library into your `app.component.ts`.

```typescript
import { setSpinner } from '@syncfusion/ej2-angular-popups';
```

**Step 2:** Pass your custom template to the `setSpinner` method.

```typescript
// Specify the template content to display in the Spinner
setSpinner({ template: '<div style="width:100%;height:100%" class="custom-rolling"><div></div></div>'});
```

> Set the spinner template before creating the respective Essential JS 2 component. Until you replace the `setSpinner` template, all subsequent Essential JS 2 component rendering uses the specified template.

**Step 3:** Render the Essential JS 2 component. The Spinner displays with the template specified in the `setSpinner` method.

> The following sample renders a Grid component with a custom spinner using the `setSpinner` method. Define the styles for the template in `index.css`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spinner/set-spinner-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spinner/set-spinner-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/spinner/set-spinner-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spinner/set-spinner-cs1" %}