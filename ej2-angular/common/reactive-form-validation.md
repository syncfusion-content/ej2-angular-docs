---
layout: post
title: Reactive form validation in Angular Common control | Syncfusion
description: Learn here all about Reactive form validation in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Angular Reactive Form Validator

Syncfusion's Angular UI Component offers built-in Reactive Form validators that facilitate client-side validation of form input components before submission.

Below is the list of available validators:

* Min
* Max
* CreditCard
* Date
* DateISO
* Digits
* Email
* MaxLength
* MinLength
* Number
* Required
* Tel
* Url
* Range
* RangeLength

|    Validator        |    Description                    |    Code Snippet              |
|:---------------------:|:---------------------------------:|:----------------------------:|
|    **min**             | This validator check whether the form control value is less than min value and it makes the form validation failed if it not satisfied.     Syntax: `FormValidators.min (18)`  | this.reactForm = new FormGroup({`age`: new FormControl('', [FormValidators.min(8)]) });        |
|    **max**              | This validator check whether the form control value is not greater than max value and it makes the form validation failed if it not satisfied. Syntax: `FormValidators.max(18)`  | this.reactForm = new FormGroup({`age`: new FormControl('', [FormValidators.max(8)])});       |
|   **date**              | The date validator is validate the given control value is date format string. Syntax:`FormValidators.date`  | this.reactForm = new FormGroup({ `dob`: new FormControl('', [FormValidators.date]) });   | 
|   **dateISO**           | The dateIso validator is validate the given input is ISO standard format. Example : ` 2008-09-15T15:53:00` Syntax : `FormValidator.dateISO` |	this.reactForm = new FormGroup({ `dob`: new FormControl('', [FormValidators.dateISO]) });   | 
|   **digits**            | The digit validator validates the given input is numeric that allows dot digits. Syntax : ` FormValidator.digits `   | this.reactForm = new FormGroup({ `currency`: new FormControl('', [FormValidators.digits]) });  |
|   **email**              | The email validator validates the given input is email format string. Syntax : `FormValidator.email`  | this.reactForm = new FormGroup({ `email`: new FormControl('', [FormValidators.email]) });  |
|   **maxLength**   | This validator check whether the form control value length is not greater than max value and it makes the form validation failed if it not satisfied. Syntax: `FormValidators.maxLength(150)` | this.reactForm = new FormGroup({ `comments`: new FormControl('', [FormValidators. maxLength(150)]) }); |
|   **minLength**   | This validator check whether the form control value length is not less than min value and it makes the form validation failed if it not satisfied. Syntax: `FormValidators.minLength(100)` | this.reactForm = new FormGroup({ `comments`: new FormControl('', [FormValidators. minLength(100)])});  |
|   **number**  | This validator validate the form control value is a number type or not. Syntax: `FormValidator.number`  | this.reactForm = new FormGroup({ `age`: new FormControl('', [FormValidators. number])});   |
|   **required**    | This validator validates the form controls value is should not be empty or null or undefined. Syntax: `FormValidator.required`  | this.reactForm = new FormGroup({ `name`: new FormControl('', [FormValidators. number])});  |
|   **tel** | This validator validates the form controls value is should be telephone number. Syntax: `FormValidator.tel` | this.reactForm = new FormGroup({ `Phone`: new FormControl('', [FormValidators. tel])}); |
|   **range**   | This validator validates the form controls value is should be within the specific range value. Syntax: `FormValidator.range(18,50)` | this.reactForm = new FormGroup({ `age`: new FormControl('', [FormValidators. range(18,50)]) });    |
|   **rangeLength** | This validator validates the form controls value is should be within the specific range length. Syntax: `FormValidator.rangeLength(100,150)`    | this.reactForm = new FormGroup({`age`: new FormControl('', [FormValidators. rangeLength(100,150)]) });  ||

## Creating Angular Reactive Form with Syncfusion Angular UI Validator

**Step 1:** Get started with an Angular Reactive Form by referring to the [Angular Reactive form guide](https://v17.angular.io/guide/reactive-forms).

**Step 2:** To incorporate Syncfusion Angular UI Validation, import the Validator class from the `@syncfusion/ej2-angular-inputs` package:

```
import { FormValidators } from '@syncfusion/ej2-angular-inputs';
```
**Step 3:** Add the necessary validators to your FormGroup component:

```
this.reactForm = new FormGroup({
      'check': new FormControl('', [FormValidators.required]),
      'email_check': new FormControl('', [FormValidators.email]),
      'date_check': new FormControl('', [FormValidators.date]),
      'city': new FormControl('', [FormValidators.required]),
      'state': new FormControl('', [FormValidators.required]),
    });
```
To see a simple example of Syncfusion Angular UI Validation in action, visit this [documentation sample](https://stackblitz.com/edit/angular-emxs2p?file=default.component.ts).