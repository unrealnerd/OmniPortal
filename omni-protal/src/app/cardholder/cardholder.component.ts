import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';

import { SearchboxService } from '../searchbox.service';
import { CardQuoteComponent } from '../card-quote/card-quote.component';

@Component({
  selector: 'app-cardholder',
  templateUrl: './cardholder.component.html',
  styleUrls: ['./cardholder.component.css'],
})
export class CardholderComponent implements OnInit {

  apiResponse: string;
  @ViewChild('container', { static: true }) private container: ViewContainerRef;

  constructor(
    private searchboxService: SearchboxService,
    private resolver: ComponentFactoryResolver) {
    this.searchboxService.getApiResponse().subscribe(value => {
      this.apiResponse = value;
      if (!value) {
        this.createQuoteComponent(value);
      }
    });
  }

  createQuoteComponent(quote: string) {
    const factory = this.resolver.resolveComponentFactory(CardQuoteComponent);
    const componentRef = this.container.createComponent(factory);
    componentRef.instance.quote = quote;
  }

  ngOnInit() {
  }
}
