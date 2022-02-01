import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheatresComponent } from './theatres.component';
import { TheatresRoutingModule } from './theatres-routing.module';
import { SliderModule } from 'src/app/slider/slider.module';

@NgModule({
  declarations: [TheatresComponent],
  imports: [
    CommonModule,
    TheatresRoutingModule,
    SliderModule
  ]
})
export class TheatresModule { }
