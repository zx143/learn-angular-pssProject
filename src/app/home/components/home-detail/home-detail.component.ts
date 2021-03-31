import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService, token } from 'src/app/home/services';
import { ChannelList, ImageSlider } from 'src/app/shared/components';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {
  public imgSliderList: ImageSlider[] = []
  public channels: ChannelList[] = []
  selectedTabLink:string;
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
    // 发起http请求
    // this.service.getImageSliderList().subscribe(imageSlider=> {
    //   this.imgSliderList = imageSlider
    //   this.cd.markForCheck()
    // })
    // this.service.getChannelList().subscribe(channels=> {
    //   this.channels = channels
    //   this.cd.markForCheck()
    // })
    this.route.paramMap.subscribe(params => {
      // console.log(params, params.get('tabLink'));
      this.selectedTabLink = params.get('tabLink')
      this.cd.markForCheck()
    })
  }
}
