import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
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
  // rxjs请求 广告图只展示一张限制返回一个Observable<Ad> 而不是 Observable<Ad[]>
  // public ad$: Observable<Ad>;
  public ad: Ad;
  selectedTabLink$: Observable<string>;
  sub: Subscription
  constructor(
    private route: ActivatedRoute,
    private service: HomeService,
    @Inject(token) private baseURL: string,
    private cd: ChangeDetectorRef,
    private router : Router
  ) { }

  toAdLink(link: string):void {
    console.log(link);
    // 点击广告图片跳转到指定router页面
    // this.router.navigate([link])
  }

  ngOnInit() {
    // console.log(this.baseURL);
    this.imgSliderList = this.service.getImageSliderList()
    this.channels = this.service.getChannelList()
    this.ad = this.service.getAdList()[0]
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
    // ad$需要根据this.selectedTabLink$的路由结果展示不同的广告图
    // 这里需要使用rxjs 的高阶流函数
    // this.ad$ = this.selectedTabLink$.pipe(
    //   // switchMap会将外部函数返回值作为参数传入, 并且在执行完之后返回扁平的结果而非一个新的Observable
    //   switchMap(tab => this.service.getAdList(tab)),
    //   // 返回结果为Ad[]而非 Ad , 使用过滤
    //   filter(abs=> abs.length > 0),
    //   // 返回第一个结果
    //   map(abs=> abs[0])
    // )
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
