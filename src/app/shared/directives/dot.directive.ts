import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

import {IDot, NamesColor} from '../interfaces/dot.interface';

@Directive({
  selector: '[appDot]'
})
export class DotDirective implements OnInit {
  @Input('color') selectedColor: NamesColor;

  colors: IDot[] = [
    {name: 'primary', color: '#FF7A3D'},
    {name: 'warn', color: '#f44336'},
    {name: 'accent', color: '#061283'},
    {name: 'gradient', color: 'linear-gradient(90deg, #2C83DA 0%, #4AB7F8 100%)'},
    {name: 'green', color: '#67AC5B'},
    {name: 'pink', color: '#D53B64'}
  ];

  constructor(
    private r: Renderer2,
    private el: ElementRef
  ) {
    this.r.addClass(this.el.nativeElement, 'dot');
    this.r.setStyle(this.el.nativeElement, 'background', '#fff');
  }

  ngOnInit(): void {
    this.colors.filter(color => {
      if (color.name === this.selectedColor) {
        this.r.setStyle(this.el.nativeElement, 'background', color.color);
      }
    });
  }
}
