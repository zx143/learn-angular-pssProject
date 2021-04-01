import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]',
})
export class GridItemImageDirective implements OnInit {
  @Input() appGridItemImage = '2rem'
  @Input() fitModule = 'cover'
  // @HostBinding('style.grid-area') area = 'image'
  // @HostBinding('style.width') @Input() appGridItemImage = '2rem'
  // @HostBinding('style.height') @Input() appGridItemImage = '2rem'
  // @HostBinding('style.object-fit') @Input() fitModule = 'cover'

  constructor(private elr: ElementRef, private rd2: Renderer2) {
  }
  ngOnInit(): void {
    this.setStyle('grid-area', 'image')
    this.setStyle('width', this.appGridItemImage)
    this.setStyle('height', this.appGridItemImage)
    this.setStyle('object-fit', this.fitModule)
  }

  private setStyle(styleName: string, styleValue: string | number): void {
    this.rd2.setStyle(this.elr.nativeElement, styleName, styleValue)
  }

  @HostListener('click', ['$event.target'])
  handleClick(e) {
    // console.log('image-directive',e);
  }
}