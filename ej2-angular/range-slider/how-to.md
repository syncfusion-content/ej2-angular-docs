---
layout: post
title: How to in Angular Range Slider component | Syncfusion
description: Learn here all about How to in Syncfusion Angular Range Slider component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Range Slider
documentation: ug
domainurl: ##DomainURL##
---

# How to in Angular Range Slider component

## Value formatting using slider

### Date Format

Format slider values as dates using the `renderingTicks` and `tooltipChange` events to customize tick labels and tooltip text. The following sample demonstrates date formatting implementation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/how-to-01-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/how-to-01-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/how-to-01-cs1" %}

### Time Format

Implement time formatting using the `renderingTicks` and `change` events, similar to date formatting. The following sample shows how to display slider values as time values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/how-to-02-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/how-to-02-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/how-to-02-cs1" %}

### Numeric Value Customization

Format numeric slider values with custom decimal precision, fixed whole numbers, or unit representations (e.g., "$100", "50%"). The following sample demonstrates various numeric formatting techniques.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/how-to-03-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/how-to-03-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/how-to-03-cs1" %}

## Slider with ngModel

Implement two-way data binding between a Range Slider and other form controls using the [ngModel](https://angular.io/api/forms/NgModel) directive. Changes to the slider value automatically update bound properties, and vice versa. Follow the steps below to set up two-way binding.

* Create a [slider](https://ej2.syncfusion.com/angular/documentation/slider/getting-started.html#types) component and bind its value property using ngModel.
* Create a numeric input field and bind it to the same ngModel property.
* Use the same variable name for both controls to enable synchronous value updates between slider and text box.
* Initialize the variable in the component file to set the initial value for both controls.

```typescript

export class AppComponent {
    slidervalue = "30";
  public ticks: Object = {
    placement: 'Before',
    largeStep: 20,
    smallStep: 5,
    showSmallTicks: true
  };
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/ngmodel-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/ngmodel-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/ngmodel-cs1" %}

## Slider in Angular reactive form

Implement Range Slider validation within Angular [Reactive](https://angular.io/guide/reactive-forms) forms to enforce validation rules and provide real-time feedback. The following sample demonstrates slider state tracking using Angular form validation [classes](https://angular.io/guide/forms#track-control-state-and-validity-with-ngmodel). Follow the steps below to integrate and validate a slider within a reactive form.

* Create simple Angular reactive form. And add simple [slider](https://ej2.syncfusion.com/angular/documentation/slider/getting-started.html#types) component within form.

* Create [form group](https://angular.io/guide/reactive-forms#add-a-formgroup) with slider.

```typescript

 sliderForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.value = 30;
    this.sliderForm = fb.group({
      'slider': [0, Validators.min(10)]
    });
  }

  ```

* Show the validation message, based on validation classes which is added to slider. Refer below code snippet.

| **Class if true** | **Class if false** | **state** |
| --- | --- | --- |
| `ng-touched` | `ng-untouched` |The control has been visited. |
| `ng-dirty` | `ng-pristine` |The control's value has changed. |
| `ng-valid` | `ng-invalid` |The control's value is valid. |

```

<div *ngIf="sliderForm.invalid">
slider has <b><i>invalid </i> </b> value and choose value greater than 10.
</div><br/>
<div *ngIf="sliderForm.valid">
Slider has <b><i>valid </i> </b> value {{value}}.
</div><br/>
<div *ngIf="sliderForm.pristine">
Slider having state <b><i>pristine.</i></b> Slider value not yet changed by user. <br/>
</div>
<div *ngIf="sliderForm.dirty">
Slider having state <b><i>dirty.</i> </b> Slider value changed by user.
</div>
<br/>
<button [disabled]="sliderForm.invalid"  type="submit">submit</button><br/><br/>
<div class="formresult" [hidden]="!validated">
Slider value choosen as: {{value}}
</div>

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/reactiveform-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/reactiveform-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/reactiveform-cs1" %}

## Slider validation using Template-driven Forms

Implement Range Slider validation within Angular [Template-driven](https://angular.io/guide/form-validation#template-driven-validation) forms using directives and validation rules for a simpler form validation approach.

* Angular automatically applies [CSS classes](https://angular.io/guide/forms#track-control-state-and-validity-with-ngmodel) to the Slider component based on user interactions and validation state.

| **Class if true** | **Class if false** | **state** |
| --- | --- | --- |
| `ng-touched` | `ng-untouched` |The control has been visited. |
| `ng-dirty` | `ng-pristine` |The control's value has changed. |
| `ng-valid` | `ng-invalid` |The control's value is valid. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/templateform-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/templateform-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/templateform-cs1" %}

## Slider validation using FormValidator

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
{% include code-snippet/slider/how-to-04-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/how-to-04-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/how-to-04-cs1" %}

## Customize the bar

Slider appearance can be customized through CSS. By overriding the slider CSS classes, you can customize the slider bar. The slider bar can be customized with different themes. By default, slider have class name `e-slider-track` for bar. The class can be overridden with our own color values like the following code snippet.

```css

.e-control.e-slider .e-slider-track .e-range {
           background: linear-gradient(left, #e1451d 0, #fdff47 17%, #86f9fe 50%, #2900f8 65%, #6e00f8 74%, #e33df9 83%, #e14423 100%);
}

```

You can also apply background color for a certain range depending upon slider values, using change event.

```typescript

change(args: SliderChangeEventArgs) => {
        if (args.value > 0 && args.value <= 25) {
            // Change handle and range bar color to green when
            (sliderHandle as HTMLElement).style.backgroundColor = 'green';
            (sliderTrack as HTMLElement).style.backgroundColor = 'green';
        } else if (args.value > 25 && args.value <= 50) {
            // Change handle and range bar color to royal blue
            (sliderHandle as HTMLElement).style.backgroundColor = 'royalblue';
            (sliderTrack as HTMLElement).style.backgroundColor = 'royalblue';
        } else if (args.value > 50 && args.value <= 75) {
            // Change handle and range bar color to dark orange
            (sliderHandle as HTMLElement).style.backgroundColor = 'darkorange';
            (sliderTrack as HTMLElement).style.backgroundColor = 'darkorange';
        } else if (args.value > 75 && args.value <= 100) {
            // Change handle and range bar color to red
            (sliderHandle as HTMLElement).style.backgroundColor = 'red';
            (sliderTrack as HTMLElement).style.backgroundColor = 'red';
        }
    }

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/bar-customization-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/bar-customization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/bar-customization-cs1" %}

## Customize the limits

Slider appearance can be customized via CSS. By overriding the slider CSS classes, the slider limit bar can be customized. Here, the limit bar is customized with different background color. By default, the slider has class `e-limits` for limits bar. You can override the class with our own color values as given in the following code snippet.

```css

.e-slider-container.e-horizontal .e-limits {
     background-color: rgba(69, 100, 233, 0.46);
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/limits-customization-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/limits-customization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/limits-customization-cs1" %}

## Customize the ticks

Slider view can be customized via CSS. By overriding the slider CSS classes, you can customize the ticks. The ticks in slider allows you to easily identify the current value/values of the slider. It contains [`smallStep`](https://ej2.syncfusion.com/angular/documentation/slider/api-ticksData.html#smallstep) and [`largeStep`](https://ej2.syncfusion.com/angular/documentation/slider/api-ticksData.html#largestep). By default, slider has class `e-tick` for slider ticks. You can override the class as per your requirement.
Refer to the following code snippet to render ticks.

```typescript

.e-scale .e-tick.e-custom::before {
    content: '\e967';
    position: absolute;
}

```

Here, the color for rendered ticks has been applied through nth-child(`child_number`). The color is
applied to the value of the `child_number` in the slider.

```typescript

.e-scale :nth-child(1)::before {
    color: red;
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/ticks-customization-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/ticks-customization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/ticks-customization-cs1" %}

## Customize the thumb

Slider appearance can be customized through CSS. By overriding the slider CSS classes, you can customize the thumb. By default, slider has unique class `e-handle` for slider thumb. You can override the following class as per your requirement. Here, in the sample, the slider thumb has been customized to square, circle, oval shapes, and background image has also been customized.

```typescript

.e-control.e-slider .e-handle {
    background-image: url('https://ej2.syncfusion.com/demos/src/slider/images/thumb.png');
    background-color: transparent;
    height: 25px;
    width: 25px;
}
/* square slider */
.square_slider.e-control.e-slider .e-handle {
    border-radius: 0%;
    background-color: #f9920b;
    border: 0;
}
/* circle slider */
.circle_slider.e-control.e-slider .e-handle {
    border-radius: 50%;
    background-color: #f9920b;
    border: 0;
}
/* oval slider */
.oval_slider.e-control.e-slider .e-handle {
    height: 25px;
    width: 8px;
    top: 3px;
    border-radius: 15px;
    background-color: #f9920b;
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/thumb-customization-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/thumb-customization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/thumb-customization-cs1" %}
