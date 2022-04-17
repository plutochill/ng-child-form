import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-powers',
  template: `
    <h2>power form</h2>
    <form [formGroup]="powersForm">
      <select formControlName="superPower" placeholder="select power">
        <option value="code">code</option>
        <option value="paint">paint</option>
        <option value="sleep">sleep</option>
      </select>
    </form>
  `,
})
export class PowersComponent implements OnInit {
  public powersForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.powersForm = this.formBuilder.group({
      superPower: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  public createFormGroup(): FormGroup {
    return this.powersForm;
  }
}
