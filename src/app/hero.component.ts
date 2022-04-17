import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PowersComponent } from './powers.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [],
})
export class HeroComponent implements OnInit {
  public heroForm: FormGroup;

  @ViewChild(PowersComponent, { static: true })
  public powersCompoennt: PowersComponent;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.heroForm = this.formBuilder.group({
      heroName: ['sss', Validators.required],
      powers: this.powersCompoennt.createFormGroup(),
    });
  }

  submitLog(): void {
    console.log(this.heroForm.value);
  }
}
