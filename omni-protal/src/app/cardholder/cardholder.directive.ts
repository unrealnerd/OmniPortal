import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCardHolderDir]'
})

export class CardHolderDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
