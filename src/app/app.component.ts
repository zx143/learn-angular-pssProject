import { Component, ViewChild } from '@angular/core';
import * as Mock from 'mockjs'
import { TopMenu, ImageSlider, ImageSliderComponent } from './shared/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ImageSliderComponent) imageSlider: ImageSliderComponent;
  private mockTopMenuList = Mock.mock({
    'list|18': [
      {
        'title': '@ctitle(2)',
        'link': '@url()'
      }
    ]
  })

  private mockImgSliderList = Mock.mock({
    'list|6': [
      {
        'imgUrl': '@image("360x100")',
        'link': '@url()',
        'caption': '@ctitle(4,8)'
      }
    ]
  })

  // test
  username=''

  public topMenuList:TopMenu[] = this.mockTopMenuList.list

  public imgSliderList: ImageSlider[] = this.mockImgSliderList.list

  public tabEmit(target:TopMenu):void {
    console.log(target);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // console.log('appViewInit',this.imageSlider);
  }
}
