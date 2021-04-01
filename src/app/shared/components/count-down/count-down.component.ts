import { Component, Input, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {
  @Input() startDate: Date = new Date()
  @Input() futureDate: Date
  private _MS_PER_SECOND = 1000
  countDown$: Observable<string>
  constructor() { }
  ngOnInit() {
    console.log(this.startDate, this.futureDate);
    
    this.countDown$ = this.getCountDownObservable(this.startDate, this.futureDate)
  }
  private diffInsec = (start: Date, future: Date): number => {
    const diff = future.getTime() - start.getTime()
    // console.log(start.getTime(), future.getTime());
    return Math.floor(diff / this._MS_PER_SECOND)
  }
  private getCountDownObservable(startDate: Date, futureDate: Date):Observable<string> {
    return interval(1000).pipe(
      // 倒计时相减秒数
      map(elapse => this.diffInsec(startDate, futureDate) - elapse),
      // 值必须为正值才继续往下执行 否则进入complete回调结束Observable
      takeWhile(gap => gap >= 0),
      // 计算时分秒
      map(sec => (
        {
          day: Math.floor(sec / 3600 / 24),
          hour: Math.floor(sec / 3600 % 24),
          minute: Math.floor(sec / 60 % 60),
          second: Math.floor(sec % 60)
        }
      )),
      // 查看数据tap方法
      // tap(val => console.log(val)),
      // 返回时分秒格式字符串
      map(({ hour, minute, second }) => {
        return `${this.timeZero(hour)}:${this.timeZero(minute)}:${this.timeZero(second)}`
      })
    )
  }
  private timeZero(time: number): number | string {
    return (time >= 10 ? time : '0' + time)
  }
}
