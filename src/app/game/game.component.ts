import { Component, HostBinding, OnInit } from '@angular/core';
import { filter, map } from 'rxjs';
import { GameService, Weather } from './services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  trunkSize$ = this.gameService.trunkSize$.pipe(map((a) => Math.round(a * 10)));
  currentWeather$ = this.gameService.currentWeather$;

  constructor(private gameService: GameService) {}

  selected: Weather | null = null;

  @HostBinding('class.cloudy') cloudy = false;
  @HostBinding('class.night') isNight = false;
  ngOnInit() {
    this.trunkSize$.subscribe((a) => {
      console.log('aa', a);
    });
    setTimeout(() => {
      this.gameService.addBranch();
    }, 1200);

    this.currentWeather$.subscribe((a) => {
      this.cloudy = a === 'cloudy';
    });
  }

  nextTurn() {
    // this.selected = null;
    this.isNight = true;
    setTimeout(() => {
      this.isNight = false;
      if (this.selected === this.currentWeather$.getValue()) {
        setTimeout(() => {
          this.gameService.grow();
          this.gameService.addBranch();
        }, 100);
      }
    }, 4000);

    if (this.selected == 'cloudy') {
      this.gameService.addRoot();
    } else {
      this.gameService.addLeaf();
    }

    this.gameService.nextTurn();
  }
}
