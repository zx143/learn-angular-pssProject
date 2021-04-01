import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent, HomeDetailComponent } from './components';


const routes: Routes = [
  {
    path: 'home',
    component: HomeContainerComponent,
    children: [
      // :tabLink 为动态路由参数的占位符
      {
        path: ':tabLink',
        component: HomeDetailComponent,
      },
      // 如果子路由没有参数则重定向到hot子路由组件模块
      {
        path: '',
        redirectTo: 'hot',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
