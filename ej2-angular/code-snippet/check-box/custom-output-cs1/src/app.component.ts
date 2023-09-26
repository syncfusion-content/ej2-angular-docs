


import { Component, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  form: FormGroup;
  testData = [
    { value: '1', name: 'test1' },
    { value: '2', name: 'test2' },
    { value: '3', name: 'test3' },
    { value: '4', name: 'test4' }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      tests: new FormArray([])
    });
    this.addCheckboxes();
  }

  private addCheckboxes() {
    this.testData.forEach((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.form.controls['tests'] as FormArray).push(control);
    });
  }

  submit() {
    // Filtering the selected value based on the selected checkbox
    const selectedValues: string[] = this.form.value.tests
      .map((v: any, i: any) => v ? this.testData[i].value : null)
      .filter((v: null) => v !== null);
    console.log(selectedValues);
  }
}



