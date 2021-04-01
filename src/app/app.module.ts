import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import localZh from '@angular/common/locales/zh-Hans'
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing-module';
import { HomeModule } from './home';

import { NotificationInterceptor, ParamInterceptor } from './home/interceptor';
import { RecommendModule } from './recommend';
import { MyModule } from './my';
import { ChatModule } from './chat';
import { CategoryModule } from './category';

@NgModule({
  // 模块拥有的组件 指令 管道, 每个只能在一个模块中声明
  declarations: [
    AppComponent,
  ],
  // 依赖
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    RecommendModule,
    MyModule,
    ChatModule,
    CategoryModule
  ],
  // 注入
  providers: [
    {
      // 内置的中文文化管道渲染格式
      provide: LOCALE_ID,
      useValue: 'zh-Hans'
    },
    {
      // 拦截器注入
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      // 一对多
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    }
  ],
  // 根组件模块
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(localZh, 'zh')
  }
}
