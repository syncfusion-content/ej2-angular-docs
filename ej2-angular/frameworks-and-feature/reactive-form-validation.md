---
layout: post
title: Reactive form validation in Angular Common control | Syncfusion
description: Learn about reactive form validation using Syncfusion Angular input components and built-in validators with Syncfusion Essential JS 2.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Angular Reactive Form Validator

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular UI Components provide built-in Reactive Form validators for client-side validation of form input components before submission.

## Prerequisites

Ensure the following are installed:

- Node.js version 18 or later  
- Angular CLI version 17 or later  
- TypeScript version 5.5 or later

## Create an Angular Application

Install Angular CLI globally:

```bash
npm install -g @angular/cli@19
```

Create a new Angular 19 project with standalone components:

```bash
ng new syncfusion-angular-validators --style=css --routing=false --standalone
cd syncfusion-angular-validators
```

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> Package

Install the Syncfusion<sup style="font-size:70%">&reg;</sup> inputs package (version 25.2.7, compatible with Angular 19):

```bash
npm install @syncfusion/ej2-angular-inputs --save
```

## Supported Validators

The following validators are available:

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

## Creating Angular Reactive Form with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Validator

### Step 1: Set Up the Component

Update `src/app/app.component.ts` to create a standalone component with a reactive form using Syncfusion validators:

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { FormValidators, TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TextBoxModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public reactForm: FormGroup;

  constructor() {
    this.reactForm = new FormGroup({
      name: new FormControl('', [FormValidators.required]),
      email: new FormControl('', [FormValidators.email]),
      age: new FormControl('', [FormValidators.number, FormValidators.range(18, 50)]),
      comments: new FormControl('', [FormValidators.minLength(10), FormValidators.maxLength(150)]),
      dob: new FormControl('', [FormValidators.date])
    });
  }

  public onSubmit(): void {
    if (this.reactForm.valid) {
      console.log('Form Submitted:', this.reactForm.value);
    } else {
      console.log('Form Invalid:', this.reactForm.errors);
    }
  }
}
```

### Step 2: Create the Template

Update `src/app/app.component.html` to bind form controls to Syncfusion `ejs-textbox` components and show validation errors:

```html
<div class="container">
  <h1>Syncfusion Angular 19 Reactive Form Validators</h1>
  <form [formGroup]="reactForm" (ngSubmit)="onSubmit()">
    <div class="form-group">
      <label for="name">Name:</label>
      <ejs-textbox id="name" formControlName="name"></ejs-textbox>
      <div *ngIf="reactForm.get('name')?.invalid && reactForm.get('name')?.touched" class="error">
        Name is required.
      </div>
    </div>

    <div class="form-group">
      <label for="email">Email:</label>
      <ejs-textbox id="email" formControlName="email"></ejs-textbox>
      <div *ngIf="reactForm.get('email')?.invalid && reactForm.get('email')?.touched" class="error">
        Enter a valid email.
      </div>
    </div>

    <div class="form-group">
      <label for="age">Age:</label>
      <ejs-textbox id="age" formControlName="age"></ejs-textbox>
      <div *ngIf="reactForm.get('age')?.invalid && reactForm.get('age')?.touched" class="error">
        Age must be a number between 18 and 50.
      </div>
    </div>

    <div class="form-group">
      <label for="comments">Comments:</label>
      <ejs-textbox id="comments" formControlName="comments" multiline="true"></ejs-textbox>
      <div *ngIf="reactForm.get('comments')?.invalid && reactForm.get('comments')?.touched" class="error">
        Comments must be between 10 and 150 characters.
      </div>
    </div>

    <div class="form-group">
      <label for="dob">Date of Birth:</label>
      <ejs-textbox id="dob" formControlName="dob"></ejs-textbox>
      <div *ngIf="reactForm.get('dob')?.invalid && reactForm.get('dob')?.touched" class="error">
        Enter a valid date.
      </div>
    </div>

    <button ejs-button type="submit" [disabled]="reactForm.invalid">Submit</button>
  </form>
</div>
```

### Step 3: Add Styles

Update `src/app/app.component.css` for basic form styling:

```css
.container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.error {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

button {
  padding: 10px 20px;
}
```

### Step 4: Add Syncfusion<sup style="font-size:70%">&reg;</sup> CSS

Update `src/styles.css` with required Syncfusion<sup style="font-size:70%">&reg;</sup> styles:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
```

## Run the Application

Start the application:

```bash
npm start
```

The app will display the reactive form with live validation powered by Syncfusion validators.

To view an interactive example using Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Validation, see this [documentation sample](https://stackblitz.com/edit/angular-emxs2p?file=default.component.ts).
