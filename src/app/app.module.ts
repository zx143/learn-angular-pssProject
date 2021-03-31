import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing-module';
import { HomeModule } from './home';

import localZh from '@angular/common/locales/zh-Hans'
import { registerLocaleData } from '@angular/common';

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
    HomeModule
  ],
  // 注入
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'zh-Hans'
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
