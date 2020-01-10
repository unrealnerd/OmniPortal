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
import { CardQuoteComponent } from '../templates/card-quote/card-quote.component';
import { CardHolderDirective } from './cardholder.directive';
import { _ } from 'lodash'
import { CardImageComponent } from '../templates/card-image/card-image.component';
import { CardGridComponent } from '../templates/card-grid/card-grid.component';
import { CardServicemapComponent } from '../templates/card-servicemap/card-servicemap.component';

@Component({
  selector: 'app-cardholder',
  templateUrl: './cardholder.component.html',
  styleUrls: ['./cardholder.component.css'],
})
export class CardholderComponent implements OnInit, OnChanges {

  private cards: string[];

  @Input()
  apiResponse: any;

  @ViewChild(CardHolderDirective, { static: true })
  private container: CardHolderDirective;

  constructor(
    private searchboxService: SearchboxService,
    private resolver: ComponentFactoryResolver) {

    this.cards = [];

    this.searchboxService.getApiResponse().subscribe(response => {
      console.log(response);
      this.cards.push(response);
      this.apiResponse = response;
      this.resolveTemplate(response);
    });
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  private resolveTemplate(response: any) {
    switch (response.template) {
      case "IMAGE":
        this.createImageComponent(response);
        break;
      case "QUOTE":
        this.createQuoteComponent(response);
        break;
      case "DATAGRID":
        this.createDataGridComponent(response);
        break;
      case "SERVICEMAP":
        this.createServiceMapComponent(response);
        break;
      default:
        this.createQuoteComponent(response);
        break;
    }
  }

  createQuoteComponent(response: any) {
    const factory = this.resolver.resolveComponentFactory(CardQuoteComponent);
    const viewContainerRef = this.container.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(factory, 0);
    componentRef.instance.Quote = response.message.quote;
  }

  createImageComponent(response: any) {
    const factory = this.resolver.resolveComponentFactory(CardImageComponent);
    const viewContainerRef = this.container.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(factory, 0);
    componentRef.instance.Input = { imageUrl: response.message.imageUrl, title: response.message.title };
  }

  createDataGridComponent(response: any) {
    const factory = this.resolver.resolveComponentFactory(CardGridComponent);
    const viewContainerRef = this.container.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(factory, 0);
    componentRef.instance.dataSource = response.message;
  }

  createServiceMapComponent(response: any) {
    const factory = this.resolver.resolveComponentFactory(CardServicemapComponent);
    const viewContainerRef = this.container.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(factory, 0);
    componentRef.instance.services = response.message.filter(s => !s.hide);
  }
  
  ngOnInit() {
  }
}
