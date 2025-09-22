---
layout: post
title: Navigators and indicators in Angular Carousel component | Syncfusion
description: Learn here all about Navigators and indicators in Syncfusion Angular Carousel component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Carousel
documentation: ug
domainurl: ##DomainURL##
---

# Navigators and indicators in Angular Carousel component

The navigators and indicators provide manual slide transition controls, allowing users to navigate through carousel content at their own pace and track their current position within the slide sequence.

To customize the Angular Carousel component, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=Q7oWiGNTUn8" %}

## Navigators

### Show or hide previous and next button

The navigator buttons enable manual slide transitions by providing previous and next controls. You can control the visibility of these navigators using the [`buttonsVisibility`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#buttonsvisibility) property. The possible property values are as follows:

* `Hidden` – the navigator's buttons are not visible.
* `Visible` – the navigator's buttons are visible.
* `VisibleOnHover` – the navigator's buttons are visible only when hovering over the carousel.

The following example depicts the code to show/hide the navigators in the carousel.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/default-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/default-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/default-cs8" %}

### Show previous and next button on hover

The carousel can display the previous and next buttons only on mouse hover using the [`buttonsVisibility`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#buttonsvisibility) property. The following example depicts the code to show the navigators on mouse hover in the carousel.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/default-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/default-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/default-cs9" %}

### Previous and next button template

Template options are available to customize the previous button using [`previousButtonTemplate`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#previousbuttontemplate) and the next button using [`nextButtonTemplate`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#nextbuttontemplate). The following example depicts the code for applying the template to previous and next buttons in the carousel.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/default-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/default-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/default-cs10" %}

## Indicators

### Show or hide indicators

Indicators display the total number of slides and highlight the current slide position. You can control the visibility of indicators using the [`showIndicators`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#showindicators) property. The following example depicts the code to show/hide the indicators in the carousel.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/default-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/default-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/default-cs11" %}

### Indicators Template

Template options are available to customize the indicators using the [`indicatorsTemplate`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#indicatorstemplate) property. The following example depicts the code for applying a template to indicators in the carousel.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/indicator-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/indicator-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/indicator-cs1" %}

### Showing preview of slide in indicator

You can customize the indicators to display preview images of each slide using the [`indicatorsTemplate`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#indicatorstemplate) property. The following example depicts the code for showing the preview image using a template for indicators in the carousel.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/indicator-template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/indicator-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/indicator-template-cs1" %}

### Indicators Types

Choose different types of indicators available using the [`indicatorsType`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#indicatorstype) property. The indicator types are categorized as follows:

* [Default Indicator](#default-indicator)
* [Dynamic Indicator](#dynamic-indicator)
* [Fraction Indicator](#fraction-indicator)
* [Progress Indicator](#progress-indicator)

#### Default Indicator

A default indicator in a carousel displays a set of dots that indicate the current position of the slide in the carousel. The Default indicator can be achieved by setting the [`indicatorsType`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#indicatorstype) to `Default`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/indicator-type-cs0/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/indicator-type-cs0/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/indicator-type-cs0" %}

#### Dynamic Indicator

A dynamic indicator in a carousel provides visual cues or markers that dynamically change or update to indicate the current position. The Dynamic indicator can be achieved by setting the [`indicatorsType`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#indicatorstype) to `Dynamic`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/indicator-type-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/indicator-type-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/indicator-type-cs1" %}

#### Fraction Indicator

The fraction indicator type displays the current slide index and total slide count as a fraction. The Fraction indicator can be achieved by setting the [`indicatorsType`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#indicatorstype) to `Fraction`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/indicator-type-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/indicator-type-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/indicator-type-cs2" %}

#### Progress Indicator

The Progress Indicator type displays the current slide as a progress bar. The Progress indicator can be achieved by setting the [`indicatorsType`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#indicatorstype) to `Progress`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/indicator-type-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/indicator-type-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/indicator-type-cs3" %}

## Play button

### Show or hide the play button

The carousel [`autoPlay`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#autoplay) functionality can be controlled through the user interface using the [`showPlayButton`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#showplaybutton) property. When this property is enabled, slide transitions are controlled using the play and pause button, which provides manual control over the automatic slide progression. This property depends on the [`buttonsVisibility`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#buttonsvisibility) property. The following example depicts the code to show the play button in the carousel.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/default-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/default-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/default-cs12" %}

### Play button template

Template options are available to customize the play button using the [`playButtonTemplate`](https://ej2.syncfusion.com/angular/documentation/api/carousel/#playbuttontemplate) property. The following example depicts the code for applying a template to play Button in the carousel.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/default-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/default-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/default-cs13" %}