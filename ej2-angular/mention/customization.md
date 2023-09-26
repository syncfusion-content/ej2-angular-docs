---
layout: post
title: Customization in Angular Mention component | Syncfusion
description: Learn here all about Customization in Syncfusion Angular Mention component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customization 
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Angular Mention component

## Show or hide mention character

You can show mention character as prefix of selected item in mention component using [showMentionChar](https://ej2.syncfusion.com/angular/documentation/api/mention/#showmentionchar) property. The default value of `ShowMentionChar` is `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/mention/customization-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/mention/customization-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/mention/customization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/mention/customization-cs1" %}

## Adding the suffix character after selection

You can add suffix character while selecting an item in Mention component using [suffixText](https://ej2.syncfusion.com/angular/documentation/api/mention/#suffixtext) property. You can add space or new line as suffix to the selected item. The default values is empty string.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/mention/suffixText-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/mention/suffixText-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/mention/suffixText-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/mention/suffixText-cs1" %}

## Configure the popup list

You can customize the suggestion list width and height using the [popupHeight](https://ej2.syncfusion.com/angular/documentation/api/mention/#popupheight) and [popupWidth](https://ej2.syncfusion.com/angular/documentation/api/mention/#popupwidth) properties.

By default, the popup list width value is set as `auto`. Depending on the mentioned suggestion data list, the width value is automatically adjusted. The popup list height value is set as `300px`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/mention/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/mention/getting-started-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/mention/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/mention/getting-started-cs1" %}

## Trigger character

You can customize the trigger character by using the [mentionChar](https://ej2.syncfusion.com/angular/documentation/api/mention/#mentionchar) property in the Mention component. The trigger character triggers the suggestion list to display in the target area.

By default, the [mentionChar](https://ej2.syncfusion.com/angular/documentation/api/mention/#mentionchar) is `@`.