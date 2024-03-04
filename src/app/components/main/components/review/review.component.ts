import {
  Component,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  signal,
  ChangeDetectionStrategy,
  HostListener,
} from '@angular/core';
import { ProfileInfoService } from '../../profile-info.service';
import { Profile } from '../../profile';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss',
  providers: [ProfileInfoService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReviewComponent implements OnInit {
  public objProfile: Profile[] = [];
  public perView: number = 3;
  constructor(private profile: ProfileInfoService) {}
  ngOnInit(): void {
    this.profile
      .getProfile()
      .subscribe({ next: (el: any) => (this.objProfile = el) });

    //Получаем свайпер
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (event.target.innerWidth <= 1200) {
      this.perView = 2;
    }
  }
}
