import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hobbies',
  template: `
    <form [formGroup]="hobbiesForm">
      <input type="text" formControlName="favoriteHobby" placeholder="hobbies"/>
    </form>
  `,
})
export class HobbiesComponent implements OnInit {
  public hobbiesForm: FormGroup;
  @Input() parentForm: FormGroup;

  constructor(private controlContainer: ControlContainer) {}

  public ngOnInit(): void {
    this.hobbiesForm = this.controlContainer.control as FormGroup;
  }
}
