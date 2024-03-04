import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';

register();

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperComponent implements OnInit {
  ngOnInit(): void {
    const swiperEl = document.querySelector('swiper-container');

    // swiper parameters
    const swiperParams: SwiperOptions = {
      slidesPerView: 1,
    };
    // now we need to assign all parameters to Swiper element
    Object.assign(swiperEl!, swiperParams);

    // and now initialize it
    swiperEl!.initialize();
  }
}
