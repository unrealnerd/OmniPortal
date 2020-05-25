import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-card-model-form',
  templateUrl: './card-model-form.component.html',
  styleUrls: ['./card-model-form.component.css']
})
export class CardModelFormComponent implements OnInit {

  private _template: object

  @Input()
  set template(t: object) {
    this._template = t;
    this.addControlsDynamically(t)
  }
  get template(){
    return this._template;
  }

  // @Input()
  // template:any

  modelForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.modelForm.value);
  }

  addControlsDynamically(template: object) {
    let group: any = {};

    Object.keys(template).forEach(key => {
      group[key] = new FormControl('');
    });

    this.modelForm = new FormGroup(group);
  }

}
