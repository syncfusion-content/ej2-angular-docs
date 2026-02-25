---
layout: post
title: Form slider with formvalidator in Angular Range Slider component | Syncfusion
description: Learn here all about Form slider with formvalidator in Syncfusion Angular Range Slider component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Range Slider
documentation: ug
domainurl: ##DomainURL##
---

# Formvalidator with Angular Range Slider component

Validate Range Slider values using the built-in `FormValidator`. Follow the steps below to implement slider validation within a form.

* Render the Slider component inside a form element.
* Bind the [changed](https://ej2.syncfusion.com/angular/documentation/slider/api-sliderComponent.html#changed) event to trigger validation when the slider value changes.
* Initialize FormValidator and reference the form ID.
* Define validation rules in the FormValidator `rules` collection. Set minimum/maximum values using the [min](https://ej2.syncfusion.com/angular/documentation/slider/api-sliderComponent.html#min) property and enable `validateHidden` to validate hidden slider inputs.

```typescript

//slider element
<ejs-slider id='default'></ejs-slider>
// sets required property in the FormValidator rules collection
export class AppComponent {
    @ViewChild('formId') element:any;
    public formObject: FormValidator;
    ngAfterViewInit() {
      let options: FormValidatorModel = {
        rules: {
          'default': {
            validateHidden: true,
            min: [6, "You must select value greater than 5"]
          }
        }
      };
      this.formObject = new FormValidator(this.element.nativeElement, options);
    }
}

```

> Form validation done by either ID or name value of Slider component. In above used ID of the slider for validate it.

* **Using Slider name attribute**: Render Slider with a `name` attribute for form validation. Use the name value instead of ID in the FormValidator rules collection.

```typescript

//slider element with name attribute
<ejs-slider id='default' name='slider'></ejs-slider>
// sets required property in the FormValidator rules collection
export class AppComponent {
    @ViewChild('formId') element:any;
    public formObject: FormValidator;
    ngAfterViewInit() {
      let options: FormValidatorModel = {
        rules: {
          'slider': {
            validateHidden: true,
            min: [30, "You must select value greater than 30"]
          }
        }
      };
      this.formObject = new FormValidator(this.element.nativeElement, options);
    }
}

```

* Call the `validate()` method to validate the slider value against defined rules. The form prevents submission if validation fails.
* Trigger validation on slider value changes by calling `validate()` in the `changed` event handler.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/how-to-04-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/slider/how-to-04-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/how-to-04-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/how-to-04-cs2" %}
