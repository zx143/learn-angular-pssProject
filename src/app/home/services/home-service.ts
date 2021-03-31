import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Mock from 'mockjs'
import { environment } from 'src/environments/environment';
import { ChannelList, TopMenu } from '../../shared/components';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private mockTopMenuList = Mock.mock({
    'list|17': [
      {
        'title': '@ctitle(2)',
        'link': '@word(3,5)',
        'id': '@id'
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
  constructor(private http: HttpClient){}
  getTopMenuList() {
    //  return this.http.get<TopMenu[]>(`${environment.baseURL}/topmenu`)
    return [{title: '热门', link: 'hot',id: '1'}, ...this.mockTopMenuList.list]
  }
  getImageSliderList() {
    // 请求 <ImageSliders[]>默认返回对象, 设置泛型约束请求转换为约束类型返回
    // return  this.http.get<ImageSliders[]>(`${environment.baseURL}/xxx`, 
    // {
    //   params: {
    //     id: '1',
    //     chatCode: '123'
    //   }
    // })
    return this.mockImgSliderList.list
  }
  getChannelList() {
    // return this.http.get<ChannelList[]>(`${environment.baseURL}/channels`)
    return this.mockChannelList.list
  }
}