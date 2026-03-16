---
layout: post
title: Slider in angular reactive form in Angular Range Slider component | Syncfusion
description: Learn here all about Slider in angular reactive form in Syncfusion Angular Range Slider component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Range Slider
documentation: ug
domainurl: ##DomainURL##
---

# Angular reactive form in Angular Range Slider component

Implement Range Slider validation within Angular [Reactive](https://angular.io/guide/reactive-forms) forms to enforce validation rules and provide real-time feedback. The following sample demonstrates slider state tracking using Angular form validation [classes](https://angular.io/guide/forms#track-control-state-and-validity-with-ngmodel).

Follow the steps below to integrate and validate a slider within a reactive form.

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
{% include code-snippet/slider/reactiveform-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/slider/reactiveform-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/reactiveform-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/slider/reactiveform-cs2" %}
