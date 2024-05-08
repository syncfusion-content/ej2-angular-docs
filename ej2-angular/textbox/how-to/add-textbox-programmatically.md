---
layout: post
title: Add textbox programmatically in Angular Textbox component | Syncfusion
description: Learn here all about Add textbox programmatically in Syncfusion Angular Textbox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Add textbox programmatically 
documentation: ug
domainurl: ##DomainURL##
---

# Add textbox programmatically in Angular Textbox component

* Import the `Input` modules from `ej2-inputs` library as shown below.

```typescript
import {Input} from '@syncfusion/ej2-inputs';
```

* Pass the `HTML Input` element as parameter to the `createInput` method.

* You can also add the `icons` on the input by passing `buttons` property value with the class name `e-input-group-icon` as parameter to the `createInput` method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/getting-started-cs5" %}
