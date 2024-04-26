---
layout: post
title: How to in Angular Range slider component | Syncfusion
description: Learn here all about How to in Syncfusion Angular Range slider component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: How to 
documentation: ug
domainurl: ##DomainURL##
---

# How to in Angular Range slider component

## Value formatting using slider

### Date Format

The Date formatting can be achieved in `ticks` and `tooltip` using `renderingTicks` and `tooltipChange` events respectively.
The process of formatting is explained in the below sample.

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

The time formatting can be achieved same as the date formatting using `renderingTicks` and `change` events. The process of time formatting is explained in the below sample.

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

The numeric values can be formatted into different decimal digits or fixed number of whole numbers or to represent the units.
The Numeric processing is demonstrated below.

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

Slider component supports one and two-way property binding. Slider two way binding can be achieved through [ngModel](https://angular.io/api/forms/NgModel) Angular directive.

Follow the below steps to perform two-way binding with ngModel.

* Create simple [slider](https://ej2.syncfusion.com/angular/documentation/slider/getting-started.html#types) component and binds the value property using ngModel. Refer to the below code snippet.

```

<ejs-slider class="form-control" id='slider' [ticks]="ticks" [(ngModel)]="slidervalue" name="slider" required #slider="ngModel"></ejs-slider>

```

* Create numeric text box and bind the value using ngModel.

```

<input type="number" id="name" name="name" class="form-control" required [(ngModel)]="slidervalue" #slider="ngModel">

```

* And name the same variable name in both slider and numeric text box. Which will help to view the two-way binding i.e. changing value in slider will change the numeric textbox value and vice versa.

* Initialize the value of the variable in component file, while will be bound to slider and text box initially. The values will be changed synchronously while changing any one (slider or text-box) value.

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

Slider validation can be achieved in Angular using [Reactive](https://angular.io/guide/reactive-forms) forms. Here the sample shown slider validation state based on Angular form [classes](https://angular.io/guide/forms#track-control-state-and-validity-with-ngmodel).

Follow below steps to validate slider within reactive forms.

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

Slider can be validated in Angular using [Template-driven](https://angular.io/guide/form-validation#template-driven-validation) forms.

* The following [CSS classes](https://angular.io/guide/forms#track-control-state-and-validity-with-ngmodel) will be added on Slider component based on the action done by user.

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
