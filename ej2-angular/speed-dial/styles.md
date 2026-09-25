---
layout: post
title: Styles in Angular Speed Dial | Syncfusion
description: Style Angular Speed Dial button icons, text, and overall look using openIconCss, closeIconCss, and content properties.
platform: ej2-angular
control: Styles 
documentation: ug
domainurl: ##DomainURL##
---

# Styles in Angular Speed Dial

This section briefs different ways to style Angular Speed Dial component.

## Angular Speed Dial button

You can customize the icon and text of Angular Speed Dial button using [`openIconCss`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#openiconcss), [`closeIconCss`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#closeiconcss) and [`content`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#content) properties.

### Icon only

You can use the [`openIconCss`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#openiconcss) and [`closeIconCss`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#closeiconcss) properties to show icons in speed dial button. You can also show tooltip on hover to show additional details to end-user by setting `title` attribute.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/speed-dial/styles-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/speed-dial/styles-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/speed-dial/styles-cs1" %}

### Text only

You can show only text in Angular Speed Dial button by setting [`content`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#content) property  without setting icon properties..

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/speed-dial/styles-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/speed-dial/styles-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/speed-dial/styles-cs2" %}

### Icon with text

You show icon and text in Angular Speed Dial button using [`openIconCss`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#openiconcss), [`closeIconCss`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#closeiconcss) and [`content`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#content) properties together.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/speed-dial/styles-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/speed-dial/styles-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/speed-dial/styles-cs3" %}

## Disabled

You can enable or disable the Angular Speed Dial component using [`disabled`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#disabled) property.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To Render Angular Speed Dial component in disabled state -->
        <button ejs-speeddial id="speeddial" content='Edit' [disabled]='true'></button>`
})

export class AppComponent { }
```

## cssClass

The Angular Speed Dial supports the following predefined styles that can be defined using the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#cssclass) property. You can customize by setting the `cssClass` property with the below defined class.

| cssClass | Description |
| -------- | -------- |
| e-primary | Used to represent a primary action. |
| e-outline |  Used to represent an appearance of button with outline. |
| e-info |  Used to represent an informative action. |
| e-success | Used to represent a positive action. |
| e-warning | Used to represent an action with caution. |
| e-danger | Used to represent a negative action. |

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/speed-dial/styles-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/speed-dial/styles-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/speed-dial/styles-cs4" %}

## Visible

You can set the Angular Speed Dial button to visible/hidden state using [`visible`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#visible) property.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To Render Angular Speed Dial component in hidden state -->
        <button ejs-speeddial id="speeddial" content='Edit' [visible]='false'></button>`
})

export class AppComponent { }
```

## Tooltip

You can show tooltip on hover to show additional details to end-user by setting [`title`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial/speedDialItemModel/#title) to Angular Speed Dial button.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/speed-dial/styles-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/speed-dial/styles-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/speed-dial/styles-cs5" %}

## Opens on hover

You can use [`opensOnHover`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#opensonhover) property to open actions items on hover itself. By default action items displayed only when clicking the Angular Speed Dial button.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/speed-dial/styles-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/speed-dial/styles-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/speed-dial/styles-cs6" %}

## Customized icon

You can use the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/speed-dial#cssclass) property to customize the appearance of the Angular Speed Dial component in its default primary state. Below example demonstrates the `cssClass` property usage in Angular Speed Dial.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/speed-dial/styles-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/speed-dial/styles-cs7/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/speed-dial/styles-cs7/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/speed-dial/styles-cs7/index.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/speed-dial/styles-cs7" %}