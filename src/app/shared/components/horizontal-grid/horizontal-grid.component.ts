import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

export interface ChannelList {
  id: string,
  icon: string,
  title: string,
  link: string
}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HorizontalGridComponent implements OnInit {
  @Input() channels: ChannelList[];
  @Input() cols = 8;
  @Input() displayCols = 5;
  sliderMargin = '0'
  @Output() usernameChange = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }


  public get scrollable(): boolean {
    return this.cols > this.displayCols
  }

  public get templateRows(): string {
    return `minmax(auto, max-content)`
  }

  public get templateColumns(): string {
    // 动态计算每个网格元素的大小和间距
    return `repeat(${this.cols}, calc((100vw - ${this.displayCols * 0.4}rem)
    / ${this.displayCols}))`
  }
  // 滚动时触发
  public handleScroll(e) {
    console.log(this.scrollable);
    // 动态计算下面2px进度条距离
    this.sliderMargin = `0 ${100 * e.target.scrollLeft / e.target.scrollWidth}%`
    // console.log(this.sliderMargin)
  }

}
