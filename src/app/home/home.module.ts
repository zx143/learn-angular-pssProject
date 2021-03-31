import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeAuxComponent, HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, Product } from './components';


@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    HomeAuxComponent
  ],
  providers: [
    {
      // provide标识符
      provide: Product, 
      // 自定义创建实例操作
      useFactory: ()=> {
        return new Product('iphoneX', 'cyan')
      },
      // 描述依赖
      deps: []
    },
  ],
  imports: [
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
