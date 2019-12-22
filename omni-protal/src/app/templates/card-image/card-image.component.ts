import { Component, OnInit, Input } from '@angular/core';
import { CardImageData } from './cardImage.model';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css']
})

export class CardImageComponent implements OnInit {

  constructor() { }

  @Input() Input: CardImageData;

  ngOnInit() {
  }

}
