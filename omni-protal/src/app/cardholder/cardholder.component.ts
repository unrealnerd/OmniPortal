import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  Input,
  SimpleChanges,
  OnChanges
} from '@angular/core';

import { SearchboxService } from '../searchbox.service';
import { CardQuoteComponent } from '../card-quote/card-quote.component';
import { CardHolderDirective } from './cardholder.directive';
import { _ } from 'lodash'

@Component({
  selector: 'app-cardholder',
  templateUrl: './cardholder.component.html',
  styleUrls: ['./cardholder.component.css'],
})
export class CardholderComponent implements OnInit, OnChanges {

  private cards: string[];

  @Input()
  apiResponse: string;

  @ViewChild(CardHolderDirective, { static: true })
  private container: CardHolderDirective;

  constructor(
    private searchboxService: SearchboxService,
    private resolver: ComponentFactoryResolver) {

    this.cards = [];

    this.searchboxService.getApiResponse().subscribe(value => {
      console.log(value);
      this.cards.push(value);
      this.apiResponse = value;
      this.createQuoteComponent(value);
    });
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  createQuoteComponent(quote: string) {
    const factory = this.resolver.resolveComponentFactory(CardQuoteComponent);
    const viewContainerRef = this.container.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(factory, 0);
    componentRef.instance.quote = quote;
  }

  ngOnInit() {
  }
}
