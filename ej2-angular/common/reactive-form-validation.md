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

Syncfusion's Angular UI Component provides custom built-in Reactive Form validators. These validators will help you validate your input component on the client side before submitting.

Here the list of validators available.

* Min
* Max
* CreditCard
* Date
* DateIso
* digits
* Email
* MaxLength
* MinLength
* Number
* Required
* Tel
* Url
* Range
* Rangelength

|    Validator        |    Description                    |    Code Snippet              |
|:---------------------:|:---------------------------------:|:----------------------------:|
|    min              | This validator check whether the form control value is less than min value and it makes the form validation failed if it not satisfied.     Syntax: `FormValidators.min (18)`  | this.reactForm = new FormGroup({`age`: new FormControl('', [FormValidators.min(8)]) });        |
|    max              | This validator check whether the form control value is not greater than max value and it makes the form validation failed if it not satisfied. Syntax: `FormValidators.max(18)`  | this.reactForm = new FormGroup({`age`: new FormControl('', [FormValidators.max(8)])});       |
|   date              | The date validator is validate the given control value is date format string. Syntax:`FormValidators.date`  | this.reactForm = new FormGroup({ `dob`: new FormControl('', [FormValidators.date]) });   | 
|   dateISO           | The dateIso validator is validate the given input is ISO standard format. Example : ` 2008-09-15T15:53:00` Syntax : `FormValidator.dateISO` |	this.reactForm = new FormGroup({ `dob`: new FormControl('', [FormValidators.dateISO]) });   | 
|   digits            | The digit validator validates the given input is numeric that allows dot digits. Syntax : ` FormValidator.digits `   | this.reactForm = new FormGroup({ `currency`: new FormControl('', [FormValidators.digits]) });  |
|   email              | The email validator validates the given input is email format string. Syntax : `FormValidator.email`  | this.reactForm = new FormGroup({ `email`: new FormControl('', [FormValidators.email]) });  |
|   maxLength   | This validator check whether the form control value length is not greater than max value and it makes the form validation failed if it not satisfied. Syntax: `FormValidators.maxLength(150)` | this.reactForm = new FormGroup({ `comments`: new FormControl('', [FormValidators. maxLength(150)]) }); |
|   minLength   | This validator check whether the form control value length is not less than min value and it makes the form validation failed if it not satisfied. Syntax: `FormValidators.minLength(100)` | this.reactForm = new FormGroup({ `comments`: new FormControl('', [FormValidators. minLength(100)])});  |
|   number  | This validator validate the form control value is a number type or not. Syntax: `FormValidator.number`  | this.reactForm = new FormGroup({ `age`: new FormControl('', [FormValidators. number])});   |
|   required    | This validator validates the form controls value is should not be empty or null or undefined. Syntax: `FormValidator.required`  | this.reactForm = new FormGroup({ `name`: new FormControl('', [FormValidators.required])});  |
|   tel | This validator validates the form controls value is should be telephone number. Syntax: `FormValidator.tel` | this.reactForm = new FormGroup({ `Phone`: new FormControl('', [FormValidators. tel])}); |
|   range   | This validator validates the form controls value is should be within the specific range value. Syntax: `FormValidator.range(18,50)` | this.reactForm = new FormGroup({ `age`: new FormControl('', [FormValidators. range(18,50)]) });    |
|   rangeLength | This validator validates the form controls value is should be within the specific range length. Syntax: `FormValidator.rangeLength(100,150)`    | this.reactForm = new FormGroup({`age`: new FormControl('', [FormValidators. rangeLength(100,150)]) });  ||

## Creating Angular Reactive Form with Syncfusion Angular UI Validator

Step 1: Get started with an Angular Reactive Form by using the following link [Angular Reactive form](https://angular.io/guide/reactive-forms).

Step 2: To add Syncfusion Angular UI Validation, you'll need to import the below validator class from  @syncfusion\ej2-angular-inputs.

```
import { FormValidators } from '@syncfusion/ej2-angular-inputs';
```
Step 3:  Add the required validator to your form group component.

```
this.reactForm = new FormGroup({
      'check': new FormControl('', [FormValidators.required]),
      'email_check': new FormControl('', [FormValidators.email]),
      'date_check': new FormControl('', [FormValidators.date]),
      'city': new FormControl('', [FormValidators.required]),
      'state': new FormControl('', [FormValidators.required]),
    });
```
Simple Sample with Syncfusion Angular UI Validation.
[create this as Documentation Sample](https://stackblitz.com/edit/angular-emxs2p?file=default.component.ts)
