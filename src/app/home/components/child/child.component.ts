import { formatDate } from '@angular/common';
import { Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  _title;
  _time;
  @ViewChild('timeChange') timeChange: ElementRef;
  public get title(): string {
    console.log('脏值检测')
    return this._title
  }


  public get time(): number {
    return this._time
  }

  // NgZone 通过跳出组件内部,在外部执行避开框架的脏值检测
  constructor(private ngZone: NgZone, private rd2: Renderer2) {
    this._title = 'hello detection'
  }

  ngOnInit() {
  }

  handleTime() { }
  ngAfterViewChecked(): void {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        // this._time = Date.now()
        // this.timeChange.nativeElement.innerText = Date.now()
        this.rd2.setProperty(this.timeChange.nativeElement, 'innerText', 
        formatDate(Date.now(), 'hh:mm:ss SSS', 'zh-Hans'))
      }, 100)
    })
  }

}
