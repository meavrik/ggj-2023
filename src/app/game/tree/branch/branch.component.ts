import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { IBranch } from '../../interfaces/game.interfaces';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss'],
})
export class BranchComponent implements OnInit {
  @Input() branch!: IBranch;

  @HostBinding('style.transform') myTransform: any;
  ngOnInit(): void {
    this.myTransform = `translate(
    ${this.branch.x}px, 
    ${this.branch.y}px) rotate(${this.branch.rotate}deg)`;
  }
}
