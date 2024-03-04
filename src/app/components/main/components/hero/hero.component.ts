import {
  Component,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA,
  HostListener,
} from '@angular/core';
import { ImgHero } from '../../../img-hero';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroComponent implements OnInit {
  public heroImg: ImgHero[] = [
    { src: 'assets/img/main/hero/first.jpeg', alt: 'first' },
    { src: 'assets/img/main/hero/second.jpeg', alt: 'second' },
    { src: 'assets/img/main/hero/third.jpeg', alt: 'third' },
    { src: 'assets/img/main/hero/four.jpeg', alt: 'four' },
  ];
  public isShow: boolean = false;
  constructor() {}
  ngOnInit(): void {}
  @HostListener('window:resize', ['$event'])
  widthScreen(event: any): void {
    this.isShow = event.target.innerWidth <= 678;
  }
}
