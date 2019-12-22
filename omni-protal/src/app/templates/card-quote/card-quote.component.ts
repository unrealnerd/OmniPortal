import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-quote',
  templateUrl: './card-quote.component.html',
  styleUrls: ['./card-quote.component.css']
})
export class CardQuoteComponent implements OnInit {

  @Input() Quote: string;

  constructor() { }

  ngOnInit() {
  }

}
