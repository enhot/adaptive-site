import { NgClass } from '@angular/common';
import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [NgClass],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  public isTextExpanded: { [key: number]: boolean } = {};
  constructor() {}
  toggleText(index: number) {
    this.isTextExpanded[index] = !this.isTextExpanded[index];
  }
}
