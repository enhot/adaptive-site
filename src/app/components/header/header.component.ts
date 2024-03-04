import { Component, HostListener, viewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public headerNav: string[] = ['Feature', 'Service', 'Review', 'Location'];
  public isShow: boolean = false;

  constructor() {}
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isShow = event.target.innerWidth <= 425.1;
  }
}
