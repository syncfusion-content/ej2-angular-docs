---
layout: post
title: Templates in Angular AI AssistView component | Syncfusion
description: Checkout and learn about templates with Angular AI AssistView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Angular AI AssistView component

The AI AssistView provides several template options to customize the banner, prompt, response, suggestions and footer items.

## Banner template

You can use the `bannerTemplate` as ng-template tag directive to customize the banner view in the AI AssistView.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/templates/bannerTemplate/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/templates/bannerTemplate/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/templates/bannerTemplate" %}

## Prompt item template

You can use the `promptItemTemplate` as ng-template tag directive to customize the prompt items in the AI AssistView. The template context includes `prompt`, `toolbarItems` and `index` items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/templates/promptItemTemplate/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/templates/promptItemTemplate/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/templates/promptItemTemplate" %}

## Response item template

You can use the `responseItemTemplate` as ng-template tag directive to customize response items within the AI AssistView. The template context includes the `prompt`, `response`, `index`, `toolbarItems` and `output` items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/templates/responseItemTemplate/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/templates/responseItemTemplate/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/templates/responseItemTemplate" %}

## Prompt suggestion item template

You can use the `promptSuggestionItemTemplate` as ng-template tag directive to customize the prompt suggestion items in the AI AssistView. The template context includes the `index` and `promptSuggestion`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/templates/promptSuggestionItemTemplate/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/templates/promptSuggestionItemTemplate/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/templates/promptSuggestionItemTemplate" %}

## Footer template

You can use the `footerTemplate` as ng-template tag directive to customize the footer items in the AI AssistView.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/templates/footerTemplate/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/templates/footerTemplate/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/templates/footerTemplate" %}
