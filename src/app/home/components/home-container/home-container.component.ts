import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
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
  selectedTab$: Observable<string>
  constructor(private router: Router, private service: HomeService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.selectedTab$ = this.route.firstChild.paramMap
      .pipe(
        filter(params => params.has('tabLink')),
        map(params => params.get('tabLink'))
        // tap(val=> console.warn('tap',val))
      )
      // console.warn(this.selectedTab$)
    this.topMenuList = this.service.getTopMenuList()
  }
  public tabEmit(target: TopMenu): void {
    this.router.navigate(['home', target.link])
  }
  ngAfterViewInit(): void {
    // console.log('appViewInit',this.imageSlider);
  }
}
