import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


export interface TopMenu {
  title: string,
  link?: string,
  id: string
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.scss']
})
export class ScrollableTabComponent implements OnInit {
  // 接收父级的数据topMenuList
  @Input() topMenuList: TopMenu[] = []
  @Input() backgroundColor: string = '#fff'
  @Input() indicatorColor: string = '#999'
  // 通知父级事件
  @Output() tabSelected = new EventEmitter<TopMenu>()

  public selectIndex: number = -1

  constructor() {
    // console.log('组件构造器');
  }

  // 组件构造完成,可以随意使用组件上的属性和方法
  ngOnInit(): void {
   // console.log('组件  init');
  }

  // ngOnChanges(changes: SimpleChange) {
  //   console.log('组件属性改动时触发', changes);
  // }

  // ngDoCheck() {
  //   console.log('脏值检测');
  // }

  // ngAfterContentInit() {
  //   console.log('模板内容 init');
  // }

  // ngAfterContentChecked() {
  //   console.log('模板内容脏值检测');
  // }

  // ngAfterViewInit() {
  //   console.log('view init');
  // }

  // ngAfterViewChecked() {
  //   console.log('view 脏值检测');
  // }

  ngOnDestory() {
    console.log('scroll-tab组件销毁');
  }

  public selectChange(i: number): void {
    this.selectIndex = i
    this.tabSelected.emit(this.topMenuList[i])
  }

}
