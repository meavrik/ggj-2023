import { Component, HostBinding, Input } from '@angular/core';
import { IBranch } from '../../interfaces/game.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent {
  @Input() root!: IBranch;
  @HostBinding('style.transform') myTransform: any;

  random = Math.floor(Math.random() * 3) + 2;
  ngOnInit(): void {
    this.myTransform = `translate(
    ${this.root.x}px, 
    ${this.root.y}px) rotate(${this.root.rotate}deg)`;
  }
}
