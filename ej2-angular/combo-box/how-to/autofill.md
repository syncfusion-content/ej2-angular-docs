---
layout: post
title: How to enable autofill in Angular ComboBox | Syncfusion®
description: Enable autofill in Angular ComboBox so the input completes suggestions as the user types, matching the typed character to list items.
platform: ej2-angular
control: Autofill 
documentation: ug
domainurl: ##DomainURL##
---

# How to enable autofill in Angular ComboBox

The ComboBox supports the `autofill` behavior with the help of [autofill](https://ej2.syncfusion.com/angular/documentation/api/combo-box#autofill) property. Whenever you change the input value, the ComboBox will autocomplete your data by matching the typed character. Suppose, if no matches found then, comboBox doesn't suggest any item.

The following examples, showcase that how to work autofill with ComboBox.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/combobox/getting-started-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/combobox/getting-started-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/combobox/getting-started-cs16" %}
