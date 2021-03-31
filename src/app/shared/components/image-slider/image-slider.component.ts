import { Component, ElementRef, Input, OnInit, AfterViewInit, OnDestroy, ViewChild, ViewChildren, 
  QueryList, Renderer2, ChangeDetectionStrategy } from '@angular/core';

export interface ImageSlider {
  imgUrl: string,
  link: string,
  caption: string
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() sliders: ImageSlider[];
  @Input() sliderHeight: string = '160px'
  @Input() sliderTime: number = 2
  @ViewChild('imgSlider', { static: true }) imgSlider: ElementRef;
  @ViewChildren('img') imgs: QueryList<ElementRef>;

  public selectIndex:number = 0
  public intervalId:any;

  constructor(private rd2: Renderer2) { }

  ngOnInit(): void {
    // console.log('onInit', this.imgSlider)
    // console.log(this.imgs);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // console.log('viewInit', this.imgs);
    // this.imgs.forEach(x=> {
    //   this.rd2.setStyle(x.nativeElement, 'height', '200px')
    // })
    // 轮播图
    // let i = 0
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(this.imgSlider.nativeElement, 'scrollLeft',
        ((this.getIndex(++this.selectIndex) % this.sliders.length) * this.imgSlider.nativeElement.scrollWidth / this.sliders.length))
        // console.log(this.imgSlider.nativeElement.scrollWidth, ((i % this.sliders.length)* this.imgSlider.nativeElement.scrollWidth / this.sliders.length), i);
        // console.log(this.getIndex(++this.selectIndex) , this.getIndex(++this.selectIndex) % this.sliders.length);
        
      }, this.sliderTime * 1000)
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId)
  }

  public getIndex(i: number):number {
    return i >= 0 ? i % this.sliders.length : this.sliders.length - Math.abs(i) % this.sliders.length
  }

  public handleScroll(e):void {
    // console.log(e);
    const ratio = e.target.scrollLeft * this.sliders.length / e.target.scrollWidth
    // console.log(ratio, e.target.scrollLeft, e.target.scrollWidth);
    
    this.selectIndex = Math.round(ratio)
  }

}
