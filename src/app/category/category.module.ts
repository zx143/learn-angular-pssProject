import { NgModule } from '@angular/core';

import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CategoryContainerComponent } from './components';


@NgModule({
  declarations: [
    CategoryContainerComponent
  ],
  imports: [
    CategoryRoutingModule,
    SharedModule
  ]
})
export class CategoryModule { }
