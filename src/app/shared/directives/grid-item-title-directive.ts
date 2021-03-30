import { Directive,  HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]',
})
export class GridItemTitleDirective  { 
  @HostBinding('style.grid-area') area = 'title'
  @HostBinding('style.font-size') @Input() appGridItemTitle = '.4rem';
}