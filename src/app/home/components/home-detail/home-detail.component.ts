import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HomeService, token } from 'src/app/home/services';
import { ChannelList, ImageSlider } from 'src/app/shared/components';
import { Ad } from 'src/app/shared/domain';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {
  public imgSliderList: ImageSlider[] = []
  public channels: ChannelList[] = []
  // rxjs请求
  // public AdList$: Observable<Ad[]>;
  public adList: Ad[] = []
  selectedTabLink$: Observable<string>;
  sub: Subscription
  constructor(
    private route: ActivatedRoute,
    private service: HomeService,
    @Inject(token) private baseURL: string,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    // console.log(this.baseURL);
    this.imgSliderList = this.service.getImageSliderList()
    this.channels = this.service.getChannelList()
    this.adList = this.service.getAdList()
    // 发起http请求
    // this.service.getImageSliderList().subscribe(imageSlider=> {
    //   this.imgSliderList = imageSlider
    //   this.cd.markForCheck()
    // })
    // this.service.getChannelList().subscribe(channels=> {
    //   this.channels = channels
    //   this.cd.markForCheck()
    // })

    // 使用rxjs优化http请求  修改属性名加$符号 并注明类型为Observable<ImageSlider[]|ChannelList[]>
    // HTML中配合async管道使用 imgSliderList$ | async  , channels$ | async
    // this.imgSliderList$ = this.service.getImageSliderList()
    // this.channels$ = this.service.getChannelList()
    // this.AdList$ = this.service.getAdList()
    this.selectedTabLink$ = this.route.paramMap
      .pipe(
        filter(params => params.has('tabLink')),
        map(params => params.get('tabLink'))
      )
    // .subscribe(tabLink => {
    //   console.log('动态路由参数', tabLink);
    //   this.selectedTabLink = tabLink
    //   this.cd.markForCheck()
    // })

    // 不使用Observable的订阅需要申明SubScription 在ngOnDestroy钩子中进行销毁
    this.sub = this.route.queryParamMap.subscribe(query=> {
      // console.log('url携带的参数',query);
    })
  }

  ngOnDestroy(): void {
    // 销毁订阅的事件, 防止内存泄漏
    this.sub.unsubscribe()
  }
}
