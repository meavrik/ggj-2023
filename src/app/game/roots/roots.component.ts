import { Component } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-roots',
  templateUrl: './roots.component.html',
  styleUrls: ['./roots.component.scss'],
})
export class RootsComponent {
  currentRoots$ = this.gameEngine.currentRoots$;
  constructor(private gameEngine: GameService) {}
}
