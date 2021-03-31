import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as Mock from 'mockjs'
import { ImageSliderComponent, TopMenu } from 'src/app/shared/components';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {
  @ViewChild(ImageSliderComponent) imageSlider: ImageSliderComponent;
  private mockTopMenuList = Mock.mock({
    'list|17': [
      {
        'title': '@ctitle(2)',
        'link': '@word(3,5)',
        'id': '@id'
      }
    ]
  })

  public topMenuList: TopMenu[] = [{title: '热门', link: 'hot',id: '1'}, ...this.mockTopMenuList.list]

  ngOnInit(): void {
  }
  constructor(private router: Router) {
  }
  public tabEmit(target: TopMenu): void {
    this.router.navigate(['home', target.link])
  }
  ngAfterViewInit(): void {
    // console.log('appViewInit',this.imageSlider);
  }
}
