import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-card-model-form',
  templateUrl: './card-model-form.component.html',
  styleUrls: ['./card-model-form.component.css']
})
export class CardModelFormComponent implements OnInit {

  @Input()
  model: any;
  
  constructor() { }

  ngOnInit() {
  }

}
