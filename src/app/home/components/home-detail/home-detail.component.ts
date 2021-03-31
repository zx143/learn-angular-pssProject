import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import * as Mock from 'mockjs'
import { ChannelList, ImageSlider } from 'src/app/shared/components';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {
  private mockImgSliderList = Mock.mock({
    'list|6': [
      {
        'imgUrl': '@image("360x100")',
        'link': '@url()',
        'caption': '@ctitle(4,8)'
      }
    ]
  })

  private mockChannelList = Mock.mock({
    'list|16': [
      {
        'id': '@id',
        'icon': '@image("50x50", "#ff8080")',
        'title': '@ctitle(2,4)',
        'link': '@url(12,18)'
      }
    ]
  })

  public imgSliderList: ImageSlider[] = this.mockImgSliderList.list

  public channels: ChannelList[] = this.mockChannelList.list

  selectedTabLink:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params, params.get('tabLink'));
      this.selectedTabLink = params.get('tabLink')
    })
  }

  ngAfterViewInit(): void {
   
  }
}
