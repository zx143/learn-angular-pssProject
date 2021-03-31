import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChildComponent, HomeAuxComponent, HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, ParentComponent } from './components';
import { token } from './services';


@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    HomeAuxComponent,
    ParentComponent,
    ChildComponent
  ],
  providers: [
   {
     provide: token,
     useValue: 'http://localdev'
   }
  ],
  imports: [
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
