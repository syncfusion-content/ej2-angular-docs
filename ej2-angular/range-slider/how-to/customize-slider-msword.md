---
layout: post
title: Customize slider msword in Angular Range slider component | Syncfusion
description: Learn here all about Customize slider msword in Syncfusion Angular Range slider component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize slider msword 
documentation: ug
domainurl: ##DomainURL##
---

# Customize slider msword in Angular Range slider component

Slider view can be customized via CSS. By overriding the slider CSS classes, you can customize the slider buttons and thumbs. The ticks in slider allows you to easily identify the value in the slider.

Here we are going to achieve the Slider as like the below screenshot.

![Slider MSWord Customization](./images/msword.png)

By default, slider has even split values in ticks. And we can achive slider ticks value as like above image. To achieve this we can use  [customValues](https://ej2.syncfusion.com/angular/documentation/api/slider/#customvalues) to render the Ticks. Refer to the below code snippet to display needed ticks in slider.

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

To customize the Slider handle, refer to the below code snippet.

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

To customize the Slider Button, refer to the below code snippet.

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
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/slider/msword-customization-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/msword-customization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/msword-customization-cs1" %}
