import { Component, HostListener, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {
  currentBranches$ = this.gameEngine.currentBranches$;
  constructor(private gameEngine: GameService) {}

  /*  links$ = new BehaviorSubject<any[]>([]);
  nodes$ = new BehaviorSubject<any[]>([]); */
  trunkSize$ = this.gameEngine.trunkSize$;
  ngOnInit(): void {}

  /*  @HostListener('click', ['$event']) onTreeClick(event: MouseEvent) {
    console.log('event', event.pageY, event.movementY);

    this.newBranch(event.clientX, event.clientY);
  } */

  /* newBranch(x: number, y: number) {
    this.branches = [...this.branches, { x, y }];
  } */
}
