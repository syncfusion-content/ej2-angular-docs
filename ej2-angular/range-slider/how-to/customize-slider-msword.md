---
layout: post
title: Customize MS Word Slider in Angular Range Slider Component | Syncfusion
description: Learn here all about Customize MS Word Slider in Angular Range Slider Component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Range Slider 
documentation: ug
domainurl: ##DomainURL##
---

# Customize MS Word Slider in Angular Range Slider Component

Create a Microsoft Word-style Range Slider by customizing the appearance of slider buttons, handles, and ticks. Ticks provide visual reference points for slider values. The following example demonstrates how to achieve the appearance shown below.

![Slider MSWord Customization](./images/msword.png)

By default, the slider displays evenly spaced tick values. To display custom tick values like those in the MS Word interface, use the [customValues](https://ej2.syncfusion.com/angular/documentation/api/slider/#customvalues) property. Refer to the code snippet below to configure custom ticks.

```typescript

public renderedTicks(event) {
    event.tickElements.forEach((element) => {
      if (element.title !== '10' && element.title !== '100' && element.title !== '500') {
        element.classList.add('e-display-none');
      }
    })
  }
}

```

To customize the slider handle (thumb), refer to the following CSS code snippet.

```css
#slider.e-control.e-slider .e-handle {
    height: 25px;
    width: 8px;
    top: 3px;
    margin-left: -4px;
    border-radius: 1px;
    background-color:#ccc;
}

```

To customize the slider buttons, refer to the following CSS code snippet.

```css

.e-control-wrapper.e-slider-container .e-slider-button{
    border: 0px;
}
  
.e-control-wrapper.e-slider-container.e-horizontal .e-second-button .e-button-icon {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADKSURBVGhD7dqxDYMwEIXhc9aicec1KFiAziN4C7MJjOCWaUicXFwihJGeTnqfhMAFxQ+ywAh3fIhhL92b9VjAtm3inLu0LcuiZ/XjHUBjABoD0BiAxgA0BqAxAM18QFuR1ff5HqUUmedZR+dijBJC0NE93vvvvgXUhYYl/5Uw5wAaA9AYgMYANPMB7Unc+7lv33dJKeno3DRNMgyDju4Zx/F3UAOesK5rvRCXtpyzntWPcwCNAWgMQGMAGgPQGIDGADTzAfxbBUvkDXe7zQJva1o6AAAAAElFTkSuQmCC');
  }
  
.e-control-wrapper.e-slider-container.e-horizontal .e-first-button .e-button-icon {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAB1SURBVGhD7dfBCcAgEAVRk2aszmqszmpMWIItDD/MuyzsbQ4Leu1XC3Z/M5YBNANoBtAMoBlAM4BmAM0A2vmRzTlrkWKMUfME9N5rkWKtVdMboBlAM4BmAC0+4D9PiVTeAM0AmgE0A2gG0AygGUAzgBYe0NoDs18dSCJjSCYAAAAASUVORK5CYII=');
  }

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/msword-customization-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/slider/msword-customization-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/msword-customization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/msword-customization-cs1" %}
