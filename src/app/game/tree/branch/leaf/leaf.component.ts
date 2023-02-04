import { Component, HostBinding, Input } from '@angular/core';
import { IBranch } from 'src/app/game/interfaces/game.interfaces';

@Component({
  selector: 'app-leaf',
  templateUrl: './leaf.component.html',
  styleUrls: ['./leaf.component.scss'],
})
export class LeafComponent {
  @Input() leaf!: IBranch;

  @HostBinding('style.transform') myTransform: any;
  ngOnInit(): void {
    this.myTransform = `translate(
    ${this.leaf.x}px, 
    ${this.leaf.y}px) rotate(${this.leaf.rotate}deg)`;
  }
}
