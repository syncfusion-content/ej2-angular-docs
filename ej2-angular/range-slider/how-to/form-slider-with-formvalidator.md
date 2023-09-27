---
layout: post
title: Form slider with formvalidator in Angular Range slider component | Syncfusion
description: Learn here all about Form slider with formvalidator in Syncfusion Angular Range slider component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Form slider with formvalidator 
documentation: ug
domainurl: ##DomainURL##
---

# Form slider with formvalidator in Angular Range slider component

We can validate the Slider component using our `FormValidator`. The following steps walk-through for slider validation.

* Render Slider component inside form.

* Bind [changed](https://ej2.syncfusion.com/angular/documentation/slider/api-sliderComponent.html#changed) event in the Slider component to validate the slider value when the value changes.

* Initialize and render FormValidator for the form using form ID.

* Set required property in the FormValidator `rules` collection.
Here, we set the [min](https://ej2.syncfusion.com/angular/documentation/slider/api-sliderComponent.html#min) property of Slider which sets the minimum value in Slider component and it has hidden input since enable `validateHidden` property as true.

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

Using Slider name: Render Slider with name attribute. In the below code snippet we have used name attribute value of ‘slider’ for form validation.

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

* Validate the form using `validate` method and it validates the Slider value with the defined rules collection and returns the result.
If user selects the value less than the minimum value, form will not submit.

  ```typescript

  this.formObject.validate();

  ```

* Slider validation can be done during value changes in slider. Refer to the below code snippet.

  ```typescript

    public onChanged(): void {
        this.formObject.validate();
    }
  
  ```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/how-to-04-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/slider/how-to-04-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/how-to-04-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/how-to-04-cs2" %}
