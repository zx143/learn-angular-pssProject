import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home/services';

import { ImageSliderComponent, TopMenu } from 'src/app/shared/components';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {
  @ViewChild(ImageSliderComponent) imageSlider: ImageSliderComponent;
  public topMenuList: TopMenu[] = []

  constructor(private router: Router , private service: HomeService) {
  }
  ngOnInit(): void {
    this.topMenuList = this.service.getTopMenuList()
  }
  public tabEmit(target: TopMenu): void {
    this.router.navigate(['home', target.link])
  }
  ngAfterViewInit(): void {
    // console.log('appViewInit',this.imageSlider);
  }
}
