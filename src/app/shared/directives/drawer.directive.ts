import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[drawerRef]'
})
export class DrawerDirective {
  constructor(public containerRef: ViewContainerRef) {
  }
}
