import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { SevicesComponent } from './components/sevices/sevices.component';
import { ReviewComponent } from './components/review/review.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { LocationComponent } from './components/location/location.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeroComponent,
    FeaturesComponent,
    SevicesComponent,
    ReviewComponent,
    SwiperComponent,
    LocationComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
