import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Confirmable, Emoji } from '../../decorators';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.scss']
})
export class HorizontalGridComponent implements OnInit {
  @Output() usernameChange = new EventEmitter()

  // test 注解
  @Emoji() result = 'Hello note'
  @Confirmable('is ok ?')
  handleClick() {
    console.log('执行了!');
  }
  // public username: string = '';
  /**
   * @_username 内部私有变量
   * @username 通过@Input()暴露到外部的属性
   */
  private _username: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public get username(): string {
    return this._username
  }
  public set username(value: string) {
    this._username = value
    this.usernameChange.emit(value)
  }
}
