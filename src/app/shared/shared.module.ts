import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountDownComponent, FooterComponent, HorizontalGridComponent, ImageSliderComponent, ScrollableTabComponent } from './components';
import { GridItemDirective, GridItemImageDirective, GridItemTitleDirective } from './directives';
import { AgoPipe } from './pipe';


@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    FooterComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AgoPipe,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    FooterComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AgoPipe,
   
  ]
})
export class SharedModule { }
